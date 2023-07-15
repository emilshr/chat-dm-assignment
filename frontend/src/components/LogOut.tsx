import { useNavigate } from "react-router-dom";

export const LogOut = () => {
  const navigate = useNavigate();
  return (
    <button
      className="inline-flex h-[45px] items-center justify-center rounded-[4px] bg-red-500 hover:bg-red-900 w-full"
      onClick={(event) => {
        event.stopPropagation();
        localStorage.clear();
        navigate("/login");
      }}
    >
      Log out
    </button>
  );
};
