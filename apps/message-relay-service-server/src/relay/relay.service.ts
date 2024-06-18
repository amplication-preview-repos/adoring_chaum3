import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RelayServiceBase } from "./base/relay.service.base";

@Injectable()
export class RelayService extends RelayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
