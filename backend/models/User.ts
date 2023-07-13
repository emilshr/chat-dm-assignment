import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IUser {
  id: string;
  username: string;
  hashedPassword: string;
}

const UserSchema = new Schema<IUser>({
  hashedPassword: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    index: true,
  },
});

export const UserModel = model<IUser>("User", UserSchema);
