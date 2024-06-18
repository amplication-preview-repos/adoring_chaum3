import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const KafkaMessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="kafkaStatus"
          label="kafkaStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <div />
        <TextInput label="relatedQueueItem" source="relatedQueueItem" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
