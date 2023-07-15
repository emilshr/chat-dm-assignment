import { useQuery } from "react-query";
import { getRequestCount } from "../../service/fetch.service";
import { useNavigate } from "react-router-dom";

export const Notification = () => {
  const { data = 0 } = useQuery({
    queryKey: "getRequestCount",
    queryFn: async () => getRequestCount(),
  });

  const navigate = useNavigate();

  return (
    <button
      className="bg-red-700 h-8 w-8 flex rounded-md font-extrabold text-center items-center justify-center cursor-pointer"
      onClick={(event) => {
        event.stopPropagation();
        navigate("/requests");
      }}
    >
      {data}
    </button>
  );
};
