import { PropsWithChildren } from "react";
import { getAccessToken } from "../custom-hooks/getAccessToken";
import { AuthContext } from "./AuthContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../service/query-client";

export const AuthWrapper = ({ children }: PropsWithChildren) => {
  const { accessToken, updateAccessToken, setUserDetails, userId, userName } =
    getAccessToken();

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken: updateAccessToken,
        userId,
        userName,
        setUserDetails,
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthContext.Provider>
  );
};
