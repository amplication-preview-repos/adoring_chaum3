import { Log } from "../log/Log";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  logs?: Array<Log>;
  recipient: string | null;
  sender: string | null;
  updatedAt: Date;
};
