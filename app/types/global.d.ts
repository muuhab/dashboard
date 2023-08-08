export type Currency = "USD" | "EUR" | "EGP";

export type NumberFormatStyle = "currency" | "decimal" | "percent";

type BreadcrumbItemType = {
  name: string;
  href?: string;
  current?: boolean;
};

export type Order = {
  id?: string;
  customerName: string;
  customerImage?: string;
  status: string;
  date: string;
  method: string;
  price: number;
};

export type Customer = {
  id?: string;
  name: string;
  email: string;
  img?: string;
  from: string;
  orders: number;
  change: number;
  spending: number;
};
