import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type LogCreateInput = {
  message?: MessageWhereUniqueInput | null;
  status?: string | null;
  timestamp?: Date | null;
};
