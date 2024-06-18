import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const QueueItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="queueContent" source="queueContent" />
        <TextField label="queueItemStatus" source="queueItemStatus" />
        <TextField label="queueStatusType" source="queueStatusType" />
        <TextField label="status" source="status" />
        <TextField label="statusTypeQueueItem" source="statusTypeQueueItem" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
