import axios from "axios";
import {
  Inbox,
  InboxParticipant,
  InboxParticipantStatus,
  Message,
  User,
} from "../types/schema";

export const listUsers = async () => {
  const { data } = await axios.get<undefined, { data: { data: User[] } }>(
    "inbox/viewUsers"
  );
  return data.data;
};

type ViewInboxesResponse = InboxParticipant & {
  Inbox: Inbox & {
    Messages: (Message & { User: User })[];
  };
};

export const getInboxes = async (
  inboxStatus = InboxParticipantStatus.ACCEPTED
) => {
  const { data } = await axios.get<
    undefined,
    { data: { data: ViewInboxesResponse[] } },
    { inboxStatus?: InboxParticipantStatus }
  >("inbox/getInboxes", { params: { inboxStatus } });
  return data;
};

export const getUserMetaData = async (userId: string) => {
  const { data } = await axios.get<
    undefined,
    { data: { data: User } },
    { userId: string }
  >("inbox/getInboxMetaData", { data: { userId } });
  return data.data;
};

type ViewInboxResponse = Inbox & {
  Messages: Message[];
};

export const viewInbox = async (inboxId: string) => {
  const { data } = await axios.post<
    undefined,
    { data: { data: ViewInboxResponse } },
    { inboxId: string }
  >("inbox/viewInbox", { inboxId });
  return data.data;
};

type GetRequestCount = {
  data: number;
};

export const getRequestCount = async () => {
  const { data } = await axios.get<undefined, { data: GetRequestCount }>(
    "inbox/getRequestCount"
  );
  return data.data || 0;
};

type SendMessageResponse = {
  data: Message;
};

export const sendMessage = async (message: string, inboxId: string) => {
  const { data } = await axios.post<
    SendMessageResponse,
    { data: SendMessageResponse },
    { message: string; inboxId: string }
  >("message/sendMessage", { inboxId, message });
  console.log({ data });
  return data.data;
};
