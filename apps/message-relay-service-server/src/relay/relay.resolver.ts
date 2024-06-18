import * as graphql from "@nestjs/graphql";
import { RelayResolverBase } from "./base/relay.resolver.base";
import { Relay } from "./base/Relay";
import { RelayService } from "./relay.service";

@graphql.Resolver(() => Relay)
export class RelayResolver extends RelayResolverBase {
  constructor(protected readonly service: RelayService) {
    super(service);
  }
}
