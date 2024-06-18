import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const QueueItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QueueItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="queueContent" source="queueContent" />
        <TextField label="queueItemStatus" source="queueItemStatus" />
        <TextField label="queueStatusType" source="queueStatusType" />
        <TextField label="status" source="status" />
        <TextField label="statusTypeQueueItem" source="statusTypeQueueItem" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
