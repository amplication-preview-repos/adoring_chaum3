import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueueItemServiceBase } from "./base/queueItem.service.base";

@Injectable()
export class QueueItemService extends QueueItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
