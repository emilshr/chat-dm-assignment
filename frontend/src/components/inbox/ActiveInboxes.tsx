import { useQuery } from "react-query";
import { InboxTile } from "./InboxTile";
import { getInboxes } from "../../service/fetch.service";
import { InboxHeader } from "./InboxHeader";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export const ActiveInboxes = () => {
  const { accessToken } = useContext(AuthContext);
  const { isLoading, data } = useQuery({
    queryKey: "viewInboxes",
    queryFn: async () => getInboxes(),
    enabled: !!accessToken,
  });

  if (isLoading) {
    return <div className="text-center">Loading ... </div>;
  }

  if (data) {
    return (
      <div className="flex flex-col w-full gap-y-4">
        <InboxHeader />
        {data.data.map((response) => {
          return (
            <InboxTile
              key={response.id}
              inbox={response.Inbox}
              message={response.Inbox.Messages[0]}
            />
          );
        })}
      </div>
    );
  }

  return null;
};
