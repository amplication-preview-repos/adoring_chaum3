/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Log } from "./Log";
import { LogCountArgs } from "./LogCountArgs";
import { LogFindManyArgs } from "./LogFindManyArgs";
import { LogFindUniqueArgs } from "./LogFindUniqueArgs";
import { CreateLogArgs } from "./CreateLogArgs";
import { UpdateLogArgs } from "./UpdateLogArgs";
import { DeleteLogArgs } from "./DeleteLogArgs";
import { Message } from "../../message/base/Message";
import { LogService } from "../log.service";
@graphql.Resolver(() => Log)
export class LogResolverBase {
  constructor(protected readonly service: LogService) {}

  async _logsMeta(
    @graphql.Args() args: LogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Log])
  async logs(@graphql.Args() args: LogFindManyArgs): Promise<Log[]> {
    return this.service.logs(args);
  }

  @graphql.Query(() => Log, { nullable: true })
  async log(@graphql.Args() args: LogFindUniqueArgs): Promise<Log | null> {
    const result = await this.service.log(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Log)
  async createLog(@graphql.Args() args: CreateLogArgs): Promise<Log> {
    return await this.service.createLog({
      ...args,
      data: {
        ...args.data,

        message: args.data.message
          ? {
              connect: args.data.message,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Log)
  async updateLog(@graphql.Args() args: UpdateLogArgs): Promise<Log | null> {
    try {
      return await this.service.updateLog({
        ...args,
        data: {
          ...args.data,

          message: args.data.message
            ? {
                connect: args.data.message,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Log)
  async deleteLog(@graphql.Args() args: DeleteLogArgs): Promise<Log | null> {
    try {
      return await this.service.deleteLog(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Message, {
    nullable: true,
    name: "message",
  })
  async getMessage(@graphql.Parent() parent: Log): Promise<Message | null> {
    const result = await this.service.getMessage(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}