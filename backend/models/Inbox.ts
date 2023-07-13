import { Schema, model } from "mongoose";

enum InboxStatus {
  ACCEPTED = "ACCEPTED",
  NOT_ACCEPTED = "NOT_ACCEPTED",
  BLOCKED = "BLOCKED",
}

export interface Inbox {
  userId: string;
  participatingUserId: string;
  inboxStatus: InboxStatus;
  lastSentMessageId: string;
}

const InboxSchema = new Schema<Inbox>({
  inboxStatus: {
    type: String,
    enum: [InboxStatus.ACCEPTED, InboxStatus.BLOCKED, InboxStatus.NOT_ACCEPTED],
    default: InboxStatus.NOT_ACCEPTED,
  },
  lastSentMessageId: {
    type: String,
  },
  userId: {
    type: String,
  },
  participatingUserId: {
    type: String,
  },
});

export const InboxModel = model<Inbox>("Inbox", InboxSchema);
