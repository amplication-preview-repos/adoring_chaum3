/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Endpoint as PrismaEndpoint } from "@prisma/client";

export class EndpointServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.EndpointCountArgs, "select">): Promise<number> {
    return this.prisma.endpoint.count(args);
  }

  async endpoints(
    args: Prisma.EndpointFindManyArgs
  ): Promise<PrismaEndpoint[]> {
    return this.prisma.endpoint.findMany(args);
  }
  async endpoint(
    args: Prisma.EndpointFindUniqueArgs
  ): Promise<PrismaEndpoint | null> {
    return this.prisma.endpoint.findUnique(args);
  }
  async createEndpoint(
    args: Prisma.EndpointCreateArgs
  ): Promise<PrismaEndpoint> {
    return this.prisma.endpoint.create(args);
  }
  async updateEndpoint(
    args: Prisma.EndpointUpdateArgs
  ): Promise<PrismaEndpoint> {
    return this.prisma.endpoint.update(args);
  }
  async deleteEndpoint(
    args: Prisma.EndpointDeleteArgs
  ): Promise<PrismaEndpoint> {
    return this.prisma.endpoint.delete(args);
  }
}
