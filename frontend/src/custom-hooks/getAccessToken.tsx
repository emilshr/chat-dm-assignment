/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../common/constants";
import { useNavigate } from "react-router-dom";
import { QueryClient } from "react-query";

export const getAccessToken = () => {
  const [accessToken, setAccessToken] = useState("");
  const [queryClient, setQueryClient] = useState(new QueryClient());

  const navigate = useNavigate();

  const updateAccessToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token);
    setAccessToken(token);
  };

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token && token !== undefined) {
      setAccessToken(token);
      setQueryClient(
        new QueryClient({
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false,
              refetchOnReconnect: false,
            },
          },
        })
      );
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { accessToken, updateAccessToken, queryClient };
};
