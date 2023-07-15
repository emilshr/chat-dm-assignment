/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { BASE_URL } from "../common/constants";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const { isLoading, data, mutate, error } = useMutation<
    { data: { message: string } },
    unknown,
    { username: string; password: string }
  >((signUpPayload) => {
    return axios.post(`${BASE_URL}auth/signUp`, signUpPayload);
  });

  useEffect(() => {
    if (data) {
      navigate("/login");
    }
  }, [data, navigate]);

  console.log({ error });

  return (
    <div className="flex flex-col gap-y-8 h-full justify-center w-full items-center">
      <div className="text-5xl font-bold">Sign up</div>
      <div className="flex flex-col gap-y-2">
        <input
          className="p-2 rounded-md"
          type="text"
          placeholder="username"
          disabled={isLoading}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
        <input
          className="p-2 rounded-md"
          type="password"
          placeholder="password"
          disabled={isLoading}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input
          className="p-2 rounded-md"
          type="password"
          placeholder="Re-enter password"
          disabled={isLoading}
          onChange={(event) => {
            setPasswordConfirm(event.target.value);
          }}
          value={passwordConfirm}
        />
        <button
          disabled={
            isLoading ||
            username === "" ||
            password === "" ||
            passwordConfirm === "" ||
            password !== passwordConfirm
          }
          onClick={(event) => {
            event.stopPropagation();
            mutate({ username, password });
          }}
        >
          Register
        </button>
      </div>
      {error instanceof AxiosError ? (
        <div className="w-[50%] bg-red-300 p-4 rounded-md">
          <div>{error.code}</div>
          <pre className="w-full break-words flex-wrap flex whitespace-pre-wrap">
            {error.response?.data}
          </pre>
        </div>
      ) : null}
    </div>
  );
};
