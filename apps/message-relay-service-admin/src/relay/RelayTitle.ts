import { Relay as TRelay } from "../api/relay/Relay";

export const RELAY_TITLE_FIELD = "id";

export const RelayTitle = (record: TRelay): string => {
  return record.id?.toString() || String(record.id);
};
