import { QueueItemWhereInput } from "./QueueItemWhereInput";

export type QueueItemListRelationFilter = {
  every?: QueueItemWhereInput;
  some?: QueueItemWhereInput;
  none?: QueueItemWhereInput;
};
