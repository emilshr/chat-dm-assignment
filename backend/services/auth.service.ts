import { UserModel } from "../models/User";
import { comparePasswords, hashPassword, signToken } from "./password.service";

export const login = async (username: string, password: string) => {
  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      const isPasswordValid = comparePasswords(password, user.hashedPassword);
      if (isPasswordValid) {
        return signToken(username, user.id.toString());
      }
    }
    throw new Error("invalid login");
  } catch (error) {
    console.error(`Error while logging in ... ${error}`);
    throw error;
  }
};

export const signUp = async (username: string, password: string) => {
  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      throw new Error("duplicate user found");
    }
    const hashedPassword = hashPassword(password);
    const createdUser = await UserModel.create({ username, hashedPassword });
    return !!createdUser;
  } catch (error) {
    console.error(`Error while logging in ... ${error}`);
    throw error;
  }
};
