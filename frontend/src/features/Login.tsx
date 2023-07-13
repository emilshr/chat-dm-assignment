import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { BASE_URL } from "../common/constants";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

export const Login = () => {
  const { setAccessToken } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { isLoading, data, mutate } = useMutation<
    { data: { accessToken: string } },
    unknown,
    { username: string; password: string }
  >((login) => {
    return axios.post(`${BASE_URL}/auth/login`, login);
  });

  useEffect(() => {
    if (data) {
      console.log({ data });
      setAccessToken(data.data.accessToken);
      navigate("/home");
    }
  }, [data, navigate, setAccessToken]);

  return (
    <div className="flex flex-col gap-y-2">
      <input
        className="p-2 rounded-md"
        type="text"
        placeholder="username"
        disabled={isLoading}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        className="p-2 rounded-md"
        type="password"
        placeholder="password"
        disabled={isLoading}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button
        disabled={isLoading}
        onClick={(event) => {
          event.stopPropagation();
          mutate({ username, password });
        }}
      >
        Login
      </button>
    </div>
  );
};