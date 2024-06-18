import { SortOrder } from "../../util/SortOrder";

export type QueueItemOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  queueContent?: SortOrder;
  queueItemStatus?: SortOrder;
  queueStatusType?: SortOrder;
  status?: SortOrder;
  statusTypeQueueItem?: SortOrder;
  updatedAt?: SortOrder;
};
