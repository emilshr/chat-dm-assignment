import { InboxModel } from "../models/Inbox";
import { UserModel } from "../models/User";

export const getInboxes = async (userId: string) => {
  const foundInboxes = await InboxModel.find({ userId });
  return foundInboxes;
};

export const viewUsers = async (userId: string) => {
  const allUsers = await UserModel.find({ _id: { $ne: userId } });
  return allUsers;
};
