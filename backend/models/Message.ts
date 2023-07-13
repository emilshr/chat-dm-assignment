import { Schema, model } from "mongoose";

export interface Message {
  userId: string;
  inboxId: string;
  message: string;
  timeStamp: Date;
}

const MessageSchema = new Schema<Message>({
  userId: {
    type: String,
    required: true,
  },
  inboxId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
});

export const MessageModel = model<Message>("Message", MessageSchema);
