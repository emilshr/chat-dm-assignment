import { Schema, model } from "mongoose";

export interface Message {
  userId: string;
  inboxId: string;
  message: string;
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
});

export const MessageModel = model<Message>("Message", MessageSchema);
