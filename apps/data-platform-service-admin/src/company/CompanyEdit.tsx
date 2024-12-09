import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CountryTitle } from "../country/CountryTitle";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="country.id" reference="Country" label="country">
          <SelectInput optionText={CountryTitle} />
        </ReferenceInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="fax" source="fax" />
        <TextInput label="founded" source="founded" />
        <TextInput label="founder" source="founder" />
        <TextInput label="name" source="name" />
        <TextInput label="national_id" source="nationalId" />
        <TextInput label="phone" source="phone" />
        <TextInput label="rc" source="rc" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
