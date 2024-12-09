import { Country } from "../country/Country";

export type Company = {
  country?: Country | null;
  createdAt: Date;
  email: string | null;
  fax: string | null;
  founded: string | null;
  founder: string | null;
  id: string;
  name: string | null;
  nationalId: string | null;
  phone: string | null;
  rc: string | null;
  updatedAt: Date;
  url: string | null;
};
