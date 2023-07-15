/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";

export interface IAuthContext {
  accessToken: string;
  userName: string;
  userId: string;
  setAccessToken: (token: string) => void;
  setUserDetails: (userId: string, username: string) => void;
}

export const AuthContext = React.createContext<IAuthContext>({
  accessToken: "",
  userId: "",
  userName: "",
  setAccessToken(token) {},
  setUserDetails(userId, username) {},
});
