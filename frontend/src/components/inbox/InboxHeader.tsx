import { Notification } from "./Notification";

export const InboxHeader = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="text-4xl font-bold">Inbox</div>
      <Notification />
    </div>
  );
};
