import { useMutation, useQuery } from "react-query";
import { SidePanelWrapper } from "../components/SidePanelWrapper";
import { listUsers } from "../service/fetch.service";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../common/constants";
import { useNavigate } from "react-router-dom";

export const NewChat = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [inboxName, setInboxName] = useState("");

  const navigate = useNavigate();

  const { data = [] } = useQuery({
    queryKey: "listUsers",
    queryFn: async () => listUsers(),
  });

  const { isLoading, mutateAsync } = useMutation<
    { data: { data: string } },
    unknown,
    { inboxName: string; participatingUserIds: string[] }
  >((payload) => {
    return axios.post(`${BASE_URL}inbox/createInbox`, payload);
  });

  return (
    <SidePanelWrapper>
      <div className="flex flex-col p-2 w-full h-full gap-y-4">
        <div className="text-3xl font-bold border-b-slate-700 border-b-[1px] pb-4">
          New chat
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2">
            <input
              type="text"
              placeholder="Inbox name"
              className="p-2 rounded-md w-full"
              onChange={(event) => {
                event.stopPropagation();
                setInboxName(event.currentTarget.value);
              }}
            />
            <button
              disabled={
                isLoading || selectedUsers.length === 0 || inboxName === ""
              }
              onClick={(event) => {
                event.stopPropagation();
                mutateAsync({ inboxName, participatingUserIds: selectedUsers })
                  .then(({ data: { data } }) => {
                    navigate(`/inbox/${data}`);
                  })
                  .catch((err) => console.error(err));
              }}
            >
              Create
            </button>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1">
              <div className="text-xl">Available users</div>
              {data.map((user) => {
                return (
                  <div
                    className={`p-2 ${
                      selectedUsers.includes(user.userId) ? "bg-green-900" : ""
                    } hover:bg-slate-700 rounded-md cursor-pointer text-center`}
                    key={user.id}
                    onClick={(event) => {
                      event.stopPropagation();
                      const updatedList = [...selectedUsers];
                      if (updatedList.includes(user.userId)) {
                        setSelectedUsers(
                          updatedList.filter((id) => id !== user.userId)
                        );
                      } else {
                        updatedList.push(user.userId);
                        setSelectedUsers(updatedList);
                      }
                    }}
                  >
                    {user.username}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SidePanelWrapper>
  );
};
