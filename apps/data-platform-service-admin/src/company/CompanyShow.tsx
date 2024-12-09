import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COUNTRY_TITLE_FIELD } from "../country/CountryTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="country" source="country.id" reference="Country">
          <TextField source={COUNTRY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="fax" source="fax" />
        <TextField label="founded" source="founded" />
        <TextField label="founder" source="founder" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="national_id" source="nationalId" />
        <TextField label="phone" source="phone" />
        <TextField label="rc" source="rc" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
