/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, QueueItem as PrismaQueueItem } from "@prisma/client";

export class QueueItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.QueueItemCountArgs, "select">
  ): Promise<number> {
    return this.prisma.queueItem.count(args);
  }

  async queueItems(
    args: Prisma.QueueItemFindManyArgs
  ): Promise<PrismaQueueItem[]> {
    return this.prisma.queueItem.findMany(args);
  }
  async queueItem(
    args: Prisma.QueueItemFindUniqueArgs
  ): Promise<PrismaQueueItem | null> {
    return this.prisma.queueItem.findUnique(args);
  }
  async createQueueItem(
    args: Prisma.QueueItemCreateArgs
  ): Promise<PrismaQueueItem> {
    return this.prisma.queueItem.create(args);
  }
  async updateQueueItem(
    args: Prisma.QueueItemUpdateArgs
  ): Promise<PrismaQueueItem> {
    return this.prisma.queueItem.update(args);
  }
  async deleteQueueItem(
    args: Prisma.QueueItemDeleteArgs
  ): Promise<PrismaQueueItem> {
    return this.prisma.queueItem.delete(args);
  }
}
