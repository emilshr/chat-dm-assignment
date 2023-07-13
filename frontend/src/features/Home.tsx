import { UserList } from "../components/UserList";
import { useQuery } from "react-query";
import { listUsers } from "../service/fetch.service";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import { User } from "../types/schema";

export const HomePage = () => {
  const { accessToken } = useContext(AuthContext);
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (accessToken) {
      setIsLoading(true);
      listUsers(accessToken)
        .then((value) => setData(value))
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    }
  }, [accessToken]);

  if (isLoading) {
    return <div className="text-center">Loading ... </div>;
  }

  return (
    <div className="flex flex-col">
      <UserList users={data || []} />
    </div>
  );
};
