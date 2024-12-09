import { CompanyUpdateManyWithoutCountriesInput } from "./CompanyUpdateManyWithoutCountriesInput";

export type CountryUpdateInput = {
  code?: string | null;
  companies?: CompanyUpdateManyWithoutCountriesInput;
  currency?: string | null;
  name?: string | null;
};
