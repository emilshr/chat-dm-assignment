import { useContext } from "react";
import { Message } from "../../types/schema";
import { AuthContext } from "../AuthContext";

type Props = {
  inboxId: string;
  messages: Message[];
};

export const ChatScrollWindow = ({ inboxId, messages }: Props) => {
  const { userId } = useContext(AuthContext);
  return (
    <div className="h-full w-full overflow-y-auto flex flex-col gap-y-2">
      {messages.map((text) => {
        return (
          <div
            className={`w-full flex ${
              userId === text.userId ? "justify-end" : "justify-start"
            }`}
            key={text.messageId}
          >
            <div
              className={`py-2 px-4 ${
                userId === text.userId ? "bg-slate-600" : "bg-neutral-900"
              } rounded-md flex`}
            >
              {text.message}
            </div>
          </div>
        );
      })}
    </div>
  );
};
