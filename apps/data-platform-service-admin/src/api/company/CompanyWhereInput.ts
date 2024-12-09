import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CompanyWhereInput = {
  country?: CountryWhereUniqueInput;
  email?: StringNullableFilter;
  fax?: StringNullableFilter;
  founded?: StringNullableFilter;
  founder?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  nationalId?: StringNullableFilter;
  phone?: StringNullableFilter;
  rc?: StringNullableFilter;
  url?: StringNullableFilter;
};
