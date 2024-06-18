import { Module } from "@nestjs/common";
import { RelayModuleBase } from "./base/relay.module.base";
import { RelayService } from "./relay.service";
import { RelayController } from "./relay.controller";
import { RelayResolver } from "./relay.resolver";

@Module({
  imports: [RelayModuleBase],
  controllers: [RelayController],
  providers: [RelayService, RelayResolver],
  exports: [RelayService],
})
export class RelayModule {}
