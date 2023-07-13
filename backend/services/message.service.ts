import { InboxModel } from "../models/Inbox";
import { MessageModel } from "../models/Message";
import { UserModel } from "../models/User";

export const sendMessage = async (
  userId: string,
  inboxId: string,
  message: string
) => {
  const createdMessage = await MessageModel.create({
    inboxId,
    message,
    userId,
  });
  return createdMessage;
};

export const fetchMessages = async (inboxId: string) => {
  const foundMessages = await MessageModel.find({ inboxId });
  return foundMessages;
};
