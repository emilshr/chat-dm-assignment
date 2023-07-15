import { SidePanelWrapper } from "../components/SidePanelWrapper";
import { RequestListing } from "../components/requests/RequestListing";

export const Requests = () => {
  return (
    <SidePanelWrapper>
      <div className="flex flex-col p-2 w-full h-full gap-y-4">
        <div className="text-3xl font-bold border-b-slate-700 border-b-[1px] pb-4">
          Message requests
        </div>
        <RequestListing />
      </div>
    </SidePanelWrapper>
  );
};
