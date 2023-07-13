import { PropsWithChildren } from "react";
import { getAccessToken } from "../custom-hooks/getAccessToken";
import { AuthContext } from "./AuthContext";
import { QueryClientProvider } from "react-query";

export const AuthWrapper = ({ children }: PropsWithChildren) => {
  const { accessToken, updateAccessToken, queryClient } = getAccessToken();

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken: updateAccessToken, queryClient }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AuthContext.Provider>
  );
};
