import { RelayWhereInput } from "./RelayWhereInput";
import { RelayOrderByInput } from "./RelayOrderByInput";

export type RelayFindManyArgs = {
  where?: RelayWhereInput;
  orderBy?: Array<RelayOrderByInput>;
  skip?: number;
  take?: number;
};
