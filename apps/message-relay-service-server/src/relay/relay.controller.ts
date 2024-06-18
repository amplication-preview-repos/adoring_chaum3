import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RelayService } from "./relay.service";
import { RelayControllerBase } from "./base/relay.controller.base";

@swagger.ApiTags("relays")
@common.Controller("relays")
export class RelayController extends RelayControllerBase {
  constructor(protected readonly service: RelayService) {
    super(service);
  }
}
