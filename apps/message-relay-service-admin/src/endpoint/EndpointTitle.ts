import { Endpoint as TEndpoint } from "../api/endpoint/Endpoint";

export const ENDPOINT_TITLE_FIELD = "url";

export const EndpointTitle = (record: TEndpoint): string => {
  return record.url?.toString() || String(record.id);
};
