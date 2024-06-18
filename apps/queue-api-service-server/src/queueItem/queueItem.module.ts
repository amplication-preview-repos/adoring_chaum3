import { Module } from "@nestjs/common";
import { QueueItemModuleBase } from "./base/queueItem.module.base";
import { QueueItemService } from "./queueItem.service";
import { QueueItemController } from "./queueItem.controller";
import { QueueItemResolver } from "./queueItem.resolver";

@Module({
  imports: [QueueItemModuleBase],
  controllers: [QueueItemController],
  providers: [QueueItemService, QueueItemResolver],
  exports: [QueueItemService],
})
export class QueueItemModule {}
