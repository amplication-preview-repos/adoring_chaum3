import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type QueueItemWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  queueContent?: StringNullableFilter;
  queueItemStatus?: "Option1";
  queueStatusType?: "Option1";
  status?: "Option1";
  statusTypeQueueItem?: "Option1";
};
