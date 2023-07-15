import { useEffect, useState } from "react";
import { ChatScrollWindow } from "./ChatScrollWindow";
import { InboxDetails } from "./InboxDetails";
import { MessagingField } from "./MessagingField";
import { Message } from "../../types/schema";
import { useQuery } from "react-query";
import { viewInbox } from "../../service/fetch.service";
import { socket } from "../socket";

type Props = {
  inboxId: string;
};

export const ChatWindow = ({ inboxId }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      socket.connect();
    }

    function onDisconnect() {
      setIsConnected(false);
      socket.disconnect();
    }

    // function onFooEvent(value) {
    //   setFooEvents(previous => [...previous, value]);
    // }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    if (!isConnected) {
      socket.connect();
    }
    // socket.on('foo', onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      // socket.off('foo', onFooEvent);
    };
  }, [isConnected]);

  const { data, refetch } = useQuery({
    queryKey: "viewInbox",
    queryFn: async () => viewInbox(inboxId),
    onSuccess(data) {
      setMessages(data.Messages);
    },
  });

  useEffect(() => {
    void refetch({});
  }, [inboxId, refetch]);

  if (data) {
    return (
      <div className="flex flex-col h-full w-full p-2">
        <div className="h-[10%] w-full flex items-center">
          <InboxDetails inboxId={inboxId} inboxName={data.inboxName} />
        </div>
        <div className="h-[85%] w-full pt-2">
          <ChatScrollWindow inboxId={inboxId} messages={messages} />
        </div>
        <div className="h-[5%] w-full flex items-end">
          <MessagingField
            inboxId={inboxId}
            onAddingMessage={(newMessage) => {
              const updatedMessages = [...messages];
              updatedMessages.push(newMessage);
              setMessages(updatedMessages);
            }}
          />
        </div>
      </div>
    );
  }
  return <></>;
};
