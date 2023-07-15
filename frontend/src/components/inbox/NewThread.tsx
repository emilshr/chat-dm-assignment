import { useNavigate } from "react-router-dom";

export const NewThread = () => {
  const navigate = useNavigate();
  return (
    <button
      className="inline-flex h-[45px] items-center justify-center rounded-[4px] bg-blue-500 hover:bg-blue-900 w-full"
      onClick={() => navigate("/newInbox")}
    >
      New Chat +
    </button>
  );
};
