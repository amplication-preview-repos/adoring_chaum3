import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type KafkaMessageWhereInput = {
  id?: StringFilter;
  kafkaStatus?: "Option1";
  messagePayload?: JsonFilter;
  payload?: JsonFilter;
  relatedQueueItem?: StringNullableFilter;
  status?: "Option1";
};
