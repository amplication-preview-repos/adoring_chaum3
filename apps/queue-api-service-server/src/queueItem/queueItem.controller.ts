import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueueItemService } from "./queueItem.service";
import { QueueItemControllerBase } from "./base/queueItem.controller.base";

@swagger.ApiTags("queueItems")
@common.Controller("queueItems")
export class QueueItemController extends QueueItemControllerBase {
  constructor(protected readonly service: QueueItemService) {
    super(service);
  }
}
