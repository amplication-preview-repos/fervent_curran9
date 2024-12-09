import { Company } from "../company/Company";

export type Country = {
  code: string | null;
  companies?: Array<Company>;
  createdAt: Date;
  currency: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
