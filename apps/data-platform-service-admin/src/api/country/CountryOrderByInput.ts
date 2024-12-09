import { SortOrder } from "../../util/SortOrder";

export type CountryOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
