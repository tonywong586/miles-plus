import clsx, { ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDate = (date: string | number) => {
  return format(new Date(date), "yyyy-MM-dd hh:mma");
};
