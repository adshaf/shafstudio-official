import { z } from "zod";

// Client-side validation schema (without recaptchaToken)
export const contactClientSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name must contain only letters, spaces, hyphens, and apostrophes"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must not exceed 100 characters")
    .toLowerCase(),

  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must not exceed 200 characters"),

  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must not exceed 2000 characters"),
});

// Server-side validation schema (with recaptchaToken)
export const contactSchema = contactClientSchema.extend({
  recaptchaToken: z
    .string()
    .min(1, "reCAPTCHA verification is required"),
});

export type ContactClientFormData = z.infer<typeof contactClientSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
