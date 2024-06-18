import { KafkaMessage as TKafkaMessage } from "../api/kafkaMessage/KafkaMessage";

export const KAFKAMESSAGE_TITLE_FIELD = "relatedQueueItem";

export const KafkaMessageTitle = (record: TKafkaMessage): string => {
  return record.relatedQueueItem?.toString() || String(record.id);
};
