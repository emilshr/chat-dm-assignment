/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import {
  ACCESS_TOKEN,
  BASE_URL,
  USER_ID,
  USER_NAME,
} from "../common/constants";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = BASE_URL;

export const getAccessToken = () => {
  const [accessToken, setAccessToken] = useState("");
  const [userName, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const updateAccessToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token);
    setAccessToken(token);
    axios.defaults.headers.post[ACCESS_TOKEN] = token;
    axios.defaults.headers.get[ACCESS_TOKEN] = token;
    axios.defaults.headers.put[ACCESS_TOKEN] = token;
    axios.defaults.headers.delete[ACCESS_TOKEN] = token;
  };

  const setUserDetails = (id: string, username: string) => {
    localStorage.setItem(USER_ID, id);
    localStorage.setItem(USER_NAME, username);
    setUserId(id);
    setUsername(username);
  };

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const userId = localStorage.getItem(USER_ID);
    const username = localStorage.getItem(USER_NAME);
    if (token && token !== undefined && userId && username) {
      setAccessToken(token);
      setUserDetails(userId, username);
      updateAccessToken(token);
    } else {
      if (pathname !== "/signup") {
        navigate("/login");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    accessToken,
    updateAccessToken,
    userId,
    userName,
    setUserDetails,
  };
};
