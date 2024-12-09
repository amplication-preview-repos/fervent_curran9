import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CountryWhereInput = {
  code?: StringNullableFilter;
  companies?: CompanyListRelationFilter;
  currency?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
