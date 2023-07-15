import { Inbox, Message, User } from "../../types/schema";
import { useNavigate } from "react-router-dom";

interface Props {
  inbox: Inbox;
  message?: Message & { User: User };
}

export const InboxTile = ({ inbox, message }: Props) => {
  const { inboxId, inboxName } = inbox;
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-x-6 w-full hover:bg-gray-700 p-4 rounded-md cursor-pointer border-b-[1px] border-b-slate-950 items-start"
      onClick={(event) => {
        event.stopPropagation();
        navigate(`/inbox/${inboxId}`);
      }}
    >
      <div className="text-2xl font-bold">{inboxName}</div>
      {message && (
        <div className="flex-1 flex items-center justify-center">
          {message.message}
        </div>
      )}
    </div>
  );
};
