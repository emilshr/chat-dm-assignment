import { useNavigate } from "react-router-dom";
import { User } from "../types/schema";
import axios from "axios";
import { BASE_URL } from "../common/constants";

export const UserList = ({ users }: { users: User[] }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-8">
      <div className="text-2xl">Available users</div>
      {users.map((user) => {
        return (
          <div
            key={user._id}
            className="text-center py-4 px-8 bg-slate-700 rounded-md hover:drop-shadow-lg cursor-pointer"
            onClick={() => {
              navigate(`/inbox/${user._id}`);
            }}
          >
            {user.username}
          </div>
        );
      })}
    </div>
  );
};
