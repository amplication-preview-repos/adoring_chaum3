import { JsonValue } from "type-fest";

export type KafkaMessage = {
  createdAt: Date;
  id: string;
  kafkaStatus?: "Option1" | null;
  messagePayload: JsonValue;
  payload: JsonValue;
  relatedQueueItem: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
