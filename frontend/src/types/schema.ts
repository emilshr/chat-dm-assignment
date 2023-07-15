export interface User {
  id: string;
  userId: string;
  username: string;
}

export interface Inbox {
  id: string;
  inboxName: string;
  inboxId: string;
  lastMessageId: string;
  lastSentUserId: string;
}

export interface Message {
  id: string;
  messageId: string;
  userId: string;
  inboxId: string;
  message: string;
  timeStamp: Date;
}

export enum InboxParticipantStatus {
  ACCEPTED = "ACCEPTED",
  NOT_ACCEPTED = "NOT_ACCEPTED",
  BLOCKED = "BLOCKED",
}

export interface InboxParticipant {
  id: string;
  userId: string;
  inboxId: string;
  inboxStatus: InboxParticipantStatus;
}
