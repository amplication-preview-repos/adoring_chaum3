import { LogUpdateManyWithoutMessagesInput } from "./LogUpdateManyWithoutMessagesInput";

export type MessageUpdateInput = {
  content?: string | null;
  logs?: LogUpdateManyWithoutMessagesInput;
  recipient?: string | null;
  sender?: string | null;
};
