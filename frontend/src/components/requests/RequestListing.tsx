import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../AuthContext";
import { getInboxes } from "../../service/fetch.service";
import { InboxParticipantStatus } from "../../types/schema";
import { RequestListingAction } from "./RequestListingAction";

export const RequestListing = () => {
  const { accessToken } = useContext(AuthContext);
  const { data, isLoading } = useQuery({
    queryKey: "viewRequests",
    queryFn: async () => getInboxes(InboxParticipantStatus.NOT_ACCEPTED),
    enabled: !!accessToken,
  });

  if (isLoading) {
    return <>Loading</>;
  }

  if (data) {
    if (data.data.length === 0) {
      return (
        <div className="w-full p-4 bg-slate-900 rounded-md text-xl font-bold">
          Uh, oh! No message requests!
        </div>
      );
    }
    return (
      <div className="flex flex-col w-full hover:bg-slate-500 cursor-pointer p-2 rounded-md">
        {data.data.map((request) => {
          return (
            <div key={request.inboxId} className="flex w-full justify-between">
              <div className="flex flex-col gap-y-2">
                <div className="text-3xl font-bold">
                  {request.Inbox.inboxName}
                </div>
                {request.Inbox.Messages[0] && (
                  <div className="text-xl">
                    {request.Inbox.Messages[0].message}
                  </div>
                )}
              </div>
              <RequestListingAction inboxId={request.inboxId} />
            </div>
          );
        })}
      </div>
    );
  }

  return <></>;
};
