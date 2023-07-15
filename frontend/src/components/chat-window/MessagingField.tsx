import { useState } from "react";
import { socket } from "../socket";
import { useMutation } from "react-query";
import { Message } from "../../types/schema";
import axios from "axios";
import { BASE_URL } from "../../common/constants";

type Props = {
  inboxId?: string;
  onAddingMessage: (message: Message) => void;
};

export const MessagingField = ({ inboxId = "", onAddingMessage }: Props) => {
  const [text, setText] = useState("");

  const { isLoading, mutateAsync } = useMutation<
    { data: { data: Message } },
    unknown,
    { inboxId: string; message: string }
  >((payload) => {
    return axios.post(`${BASE_URL}message/sendMessage`, payload);
  });

  const emitData = () => {
    socket.emit(`message`, { inboxId, message: text });
    setText("");
  };

  return (
    <div className="flex gap-x-2 w-full">
      <div className="flex flex-1">
        <input
          type="text"
          className="w-full rounded-md px-4"
          placeholder="Enter your message ..."
          value={text}
          onChange={(event) => {
            event.stopPropagation();
            setText(event.target.value);
          }}
          disabled={isLoading}
        />
      </div>
      <div className="flex">
        <button
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            emitData();
            mutateAsync({ inboxId, message: text })
              .then((val) => {
                console.log({ val });
                onAddingMessage(val.data.data);
              })
              .catch((err) => console.error(err));
          }}
          disabled={isLoading}
        >
          Send
        </button>
      </div>
    </div>
  );
};
