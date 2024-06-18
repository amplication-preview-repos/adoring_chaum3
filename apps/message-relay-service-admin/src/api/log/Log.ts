import { Message } from "../message/Message";

export type Log = {
  createdAt: Date;
  id: string;
  message?: Message | null;
  status: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
