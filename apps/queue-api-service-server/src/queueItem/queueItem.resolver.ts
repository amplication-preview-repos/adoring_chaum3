import * as graphql from "@nestjs/graphql";
import { QueueItemResolverBase } from "./base/queueItem.resolver.base";
import { QueueItem } from "./base/QueueItem";
import { QueueItemService } from "./queueItem.service";

@graphql.Resolver(() => QueueItem)
export class QueueItemResolver extends QueueItemResolverBase {
  constructor(protected readonly service: QueueItemService) {
    super(service);
  }
}
