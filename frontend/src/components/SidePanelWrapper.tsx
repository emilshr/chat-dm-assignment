import { PropsWithChildren } from "react";
import { SidePanel } from "./SidePanel";

export const SidePanelWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-start h-full ">
      {/* <UserList users={data?.data || []} /> */}
      <div className="w-[25%] h-full">
        <SidePanel />
      </div>
      <div className="flex w-[75%] h-full">{children}</div>
    </div>
  );
};
