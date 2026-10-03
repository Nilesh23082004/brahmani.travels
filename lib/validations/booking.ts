import { z } from "zod";

// HTML Sanitization helper
export function escapeHtml(str: string | number | undefined | null): string {
  if (str === undefined || str === null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Indian 10-digit mobile regex (starts with 6, 7, 8, or 9)
export const indianMobileRegex = /^[6-9]\d{9}$/;

// Booking Form Input Schema (Used by React Hook Form)
export const bookingInputSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long"),
  mobile: z
    .string()
    .trim()
    .regex(indianMobileRegex, "Enter a valid 10-digit Indian mobile number (e.g. 9876543210)"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),
  carSlug: z.string().trim().min(1, "Please select a vehicle"),
  carName: z.string().trim().min(1, "Car name is required"),
  pickupLocation: z
    .string()
    .trim()
    .min(2, "Pickup location must be at least 2 characters")
    .max(120, "Pickup location is too long"),
  dropLocation: z
    .string()
    .trim()
    .min(2, "Drop location must be at least 2 characters")
    .max(120, "Drop location is too long"),
  travelDate: z
    .string()
    .trim()
    .refine((val) => {
      if (!val) return false;
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Travel date cannot be in the past"),
  pickupTime: z.string().optional().or(z.literal("")),
  passengers: z.string().optional().or(z.literal("")),
  message: z.string().trim().max(1000, "Message is too long").optional().or(z.literal("")),
  confirm_website: z.string().optional().or(z.literal("")),
});

export type BookingInputValues = z.infer<typeof bookingInputSchema>;

// Booking API Schema (Includes calculated distance and fare)
export const bookingSchema = bookingInputSchema.extend({
  approxDistanceKm: z.number().optional(),
  estimatedFare: z.number().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

// Contact Form Validation Schema
export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long"),
  mobile: z
    .string()
    .trim()
    .regex(indianMobileRegex, "Enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),
  subject: z.string().trim().min(2, "Subject is required").max(120, "Subject is too long"),
  message: z.string().trim().min(5, "Message must be at least 5 characters").max(1000),
  confirm_website: z.string().optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;
