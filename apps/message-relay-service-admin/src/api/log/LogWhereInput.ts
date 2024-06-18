import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type LogWhereInput = {
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
