import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats rate per kilometer into Indian rupee format (e.g., 11 -> "₹11/Km")
 */
export function formatRate(ratePerKm: number): string {
  return `₹${ratePerKm}/Km`;
}
