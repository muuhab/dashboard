export type Currency = "USD" | "EUR" | "EGP";

export type NumberFormatStyle = "currency" | "decimal" | "percent";

export type Order = {
  id?: string;
  customerName: string;
  customerImage?: string;
  status: string;
  date: string;
  method: string;
  price: number;
};
