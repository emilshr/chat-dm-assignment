import { LogOut } from "./LogOut";
import { ActiveInboxes } from "./inbox/ActiveInboxes";
import { NewThread } from "./inbox/NewThread";

export const SidePanel = () => {
  return (
    <div className="h-full w-full flex flex-col gap-y-2 border-r-slate-700 border-r-[1px] p-2 justify-start">
      <div className="overflow-y-auto flex flex-1">
        <ActiveInboxes />
      </div>
      <div className="flex">
        <NewThread />
      </div>
      <div className="flex">
        <LogOut />
      </div>
    </div>
  );
};
