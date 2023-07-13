import { InboxModel, InboxStatus } from "../models/Inbox";
import { UserModel } from "../models/User";

export const getInboxes = async (userId: string) => {
  const foundInboxes = await InboxModel.find({ userId });
  return foundInboxes;
};

export const viewUsers = async (userId: string) => {
  const allUsers = await UserModel.find({ _id: { $ne: userId } });
  return allUsers;
};

export const createInbox = async (
  userId: string,
  participatingUserId: string
) => {
  const foundInbox = await InboxModel.findOne({ participatingUserId, userId });

  if (foundInbox) {
    return foundInbox;
  }

  const createdInbox = await InboxModel.create({
    inboxStatus: InboxStatus.NOT_ACCEPTED,
    participatingUserId,
    userId,
  });
  return createdInbox;
};

export const getInboxMetaData = async (userId: string, inboxId: string) => {
  const foundInbox = await InboxModel.findById(inboxId);
  if (foundInbox) {
    const { participatingUserId } = foundInbox;
    const foundUser = await UserModel.findById(participatingUserId);
    if (foundUser) {
      return foundUser;
    }
  }
  throw new Error("invalid inbox");
};
