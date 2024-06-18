import { SortOrder } from "../../util/SortOrder";

export type KafkaMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  kafkaStatus?: SortOrder;
  messagePayload?: SortOrder;
  payload?: SortOrder;
  relatedQueueItem?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
