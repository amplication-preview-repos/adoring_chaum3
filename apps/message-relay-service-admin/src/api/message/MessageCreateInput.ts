import { LogCreateNestedManyWithoutMessagesInput } from "./LogCreateNestedManyWithoutMessagesInput";

export type MessageCreateInput = {
  content?: string | null;
  logs?: LogCreateNestedManyWithoutMessagesInput;
  recipient?: string | null;
  sender?: string | null;
};
