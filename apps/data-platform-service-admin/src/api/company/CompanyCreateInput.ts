import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type CompanyCreateInput = {
  country?: CountryWhereUniqueInput | null;
  email?: string | null;
  fax?: string | null;
  founded?: string | null;
  founder?: string | null;
  name?: string | null;
  nationalId?: string | null;
  phone?: string | null;
  rc?: string | null;
  url?: string | null;
};
