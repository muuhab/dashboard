import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Currency, NumberFormatStyle } from "../types/global";
import configs from "../config/settings";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(
  num: number,
  style: NumberFormatStyle,
  currency: Currency | "undefined" = configs.currency
) {
  return Intl.NumberFormat("en-US", {
    style,
    maximumFractionDigits: 2,
    currency,
  }).format(num);
}

export function formatNumberK(num: number, precision = 0) {
  const map = [
    { suffix: "T", threshold: 1e12 },
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;

    return formatted;
  }

  return num;
}
