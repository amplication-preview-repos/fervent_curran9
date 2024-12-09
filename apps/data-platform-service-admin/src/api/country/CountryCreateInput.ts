import { CompanyCreateNestedManyWithoutCountriesInput } from "./CompanyCreateNestedManyWithoutCountriesInput";

export type CountryCreateInput = {
  code?: string | null;
  companies?: CompanyCreateNestedManyWithoutCountriesInput;
  currency?: string | null;
  name?: string | null;
};
