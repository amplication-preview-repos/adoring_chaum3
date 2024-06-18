export type QueueItem = {
  content: string | null;
  createdAt: Date;
  id: string;
  queueContent: string | null;
  queueItemStatus?: "Option1" | null;
  queueStatusType?: "Option1" | null;
  status?: "Option1" | null;
  statusTypeQueueItem?: "Option1" | null;
  updatedAt: Date;
};
