import { QueueItem as TQueueItem } from "../api/queueItem/QueueItem";

export const QUEUEITEM_TITLE_FIELD = "content";

export const QueueItemTitle = (record: TQueueItem): string => {
  return record.content?.toString() || String(record.id);
};
