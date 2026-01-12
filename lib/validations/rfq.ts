import { z } from "zod";

// Client-side validation schema (without recaptchaToken)
export const rfqClientSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must not exceed 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Full name must contain only letters, spaces, hyphens, and apostrophes"),

  companyName: z
    .string()
    .max(100, "Company name must not exceed 100 characters")
    .optional()
    .or(z.literal("")),

  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must not exceed 100 characters")
    .toLowerCase(),

  projectType: z.enum(
    ["marketing-website", "personal-website", "ecommerce-website", "saas-website", "other"],
    { message: "Please select a valid project type" }
  ),

  budget: z.enum(
    ["1400-2999", "3000-6999", "7000-10000", "10000+"],
    { message: "Please select a valid budget range" }
  ),

  projectBrief: z
    .string()
    .min(50, "Project brief must be at least 50 characters")
    .max(2000, "Project brief must not exceed 2000 characters"),
});

// Server-side validation schema (with recaptchaToken)
export const rfqSchema = rfqClientSchema.extend({
  recaptchaToken: z
    .string()
    .min(1, "reCAPTCHA verification is required"),
});

export type RFQClientFormData = z.infer<typeof rfqClientSchema>;
export type RFQFormData = z.infer<typeof rfqSchema>;
