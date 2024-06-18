import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EndpointWhereInput = {
  id?: StringFilter;
  typeField?: "Option1";
  url?: StringNullableFilter;
};
