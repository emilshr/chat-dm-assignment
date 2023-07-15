import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

export const updateTokenAndStorage = (token: string) => {
  localStorage.setItem(ACCESS_TOKEN, token);
  axios.defaults.headers.post[ACCESS_TOKEN] = token;
  axios.defaults.headers.get[ACCESS_TOKEN] = token;
  axios.defaults.headers.put[ACCESS_TOKEN] = token;
  axios.defaults.headers.delete[ACCESS_TOKEN] = token;
};
