import { InputJsonValue } from "../../types";

export type KafkaMessageUpdateInput = {
  kafkaStatus?: "Option1" | null;
  messagePayload?: InputJsonValue;
  payload?: InputJsonValue;
  relatedQueueItem?: string | null;
  status?: "Option1" | null;
};
