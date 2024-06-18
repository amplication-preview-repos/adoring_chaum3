import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LogListRelationFilter } from "../log/LogListRelationFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  logs?: LogListRelationFilter;
  recipient?: StringNullableFilter;
  sender?: StringNullableFilter;
};
