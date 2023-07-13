import React from "react";
import { QueryClient } from "react-query";

export interface IAuthContext {
  accessToken: string;
  setAccessToken: (token: string) => void;
  queryClient: QueryClient;
}

export const AuthContext = React.createContext<IAuthContext>({
  accessToken: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAccessToken(token) {},
  queryClient: new QueryClient(),
});
