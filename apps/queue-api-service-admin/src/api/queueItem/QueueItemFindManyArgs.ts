import { QueueItemWhereInput } from "./QueueItemWhereInput";
import { QueueItemOrderByInput } from "./QueueItemOrderByInput";

export type QueueItemFindManyArgs = {
  where?: QueueItemWhereInput;
  orderBy?: Array<QueueItemOrderByInput>;
  skip?: number;
  take?: number;
};
