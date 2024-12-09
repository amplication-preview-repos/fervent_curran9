import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COUNTRY_TITLE_FIELD } from "../country/CountryTitle";

export const CompanyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"companies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="url" source="url" />{" "}
      </Datagrid>
    </List>
  );
};
