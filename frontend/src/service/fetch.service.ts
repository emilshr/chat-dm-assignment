import axios from "axios";
import { ACCESS_TOKEN, BASE_URL } from "../common/constants";
import { User } from "../types/schema";

export const listUsers = async (token: string) => {
  if (token) {
    const { data } = await axios.get<undefined, { data: { data: User[] } }>(
      `${BASE_URL}/inbox/viewUsers`,
      {
        headers: { [ACCESS_TOKEN]: token },
      }
    );
    return data.data;
  }
  return [];
};
