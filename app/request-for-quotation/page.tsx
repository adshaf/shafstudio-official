"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rfqClientSchema, type RFQClientFormData } from "@/lib/validations/rfq";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RFQForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RFQClientFormData>({
    resolver: zodResolver(rfqClientSchema),
    mode: "onBlur",
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const onSubmit = async (data: RFQClientFormData) => {
    if (!executeRecaptcha) {
      setSubmitStatus({
        type: "error",
        message: "reCAPTCHA not loaded. Please refresh and try again.",
      });
      return;
    }

    setSubmitStatus({ type: "idle", message: "" });

    try {
      // Execute reCAPTCHA to get token
      const recaptchaToken = await executeRecaptcha("rfq_form");

      // Submit form data with reCAPTCHA token
      const response = await fetch("/api/rfq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! We've received your request and will get back to you within 24-48 hours.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: responseData.message || responseData.error || "Failed to submit request. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block label-standard uppercase tracking-wider mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          {...register("fullName")}
          className={`w-full px-4 py-3 border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
            errors.fullName
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-primary"
          }`}
          placeholder="John Doe"
        />
        {errors.fullName && (
          <p className="mt-1 caption text-red-600">{errors.fullName.message}</p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label
          htmlFor="companyName"
          className="block label-standard uppercase tracking-wider mb-2"
        >
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          {...register("companyName")}
          className={`w-full px-4 py-3 border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
            errors.companyName
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-primary"
          }`}
          placeholder="Your Company LLC"
        />
        {errors.companyName && (
          <p className="mt-1 caption text-red-600">{errors.companyName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block label-standard uppercase tracking-wider mb-2"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`w-full px-4 py-3 border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
            errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-primary"
          }`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 caption text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor="projectType"
          className="block label-standard uppercase tracking-wider mb-2"
        >
          Project Type *
        </label>
        <select
          id="projectType"
          {...register("projectType")}
          className={`w-full px-4 py-3 border bg-slate-50 focus:bg-white focus:outline-none transition-all cursor-pointer ${
            errors.projectType
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-primary"
          }`}
        >
          <option value="">Select project type</option>
          <option value="marketing-website">Marketing Website</option>
          <option value="personal-website">Personal Website</option>
          <option value="ecommerce-website">E-commerce Website</option>
          <option value="saas-website">SaaS Website</option>
          <option value="other">Other</option>
        </select>
        {errors.projectType && (
          <p className="mt-1 caption text-red-600">{errors.projectType.message}</p>
        )}
      </div>

      {/* Budget Range */}
      <div>
        <label
          htmlFor="budget"
          className="block label-standard uppercase tracking-wider mb-2"
        >
          Budget Range *
        </label>
        <select
          id="budget"
          {...register("budget")}
          className={`w-full px-4 py-3 border bg-slate-50 focus:bg-white focus:outline-none transition-all cursor-pointer ${
            errors.budget
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-primary"
          }`}
        >
          <option value="">Select budget range</option>
          <option value="1400-2999">$1,400 - $2,999</option>
          <option value="3000-6999">$3,000 - $6,999</option>
          <option value="7000-10000">$7,000 - $10,000</option>
          <option value="10000+">$10,000+</option>
        </select>
        {errors.budget && (
          <p className="mt-1 caption text-red-600">{errors.budget.message}</p>
        )}
      </div>

      {/* Project Brief */}
      <div>
        <label
          htmlFor="projectBrief"
          className="block label-standard uppercase tracking-wider mb-2"
        >
          Project Brief *
        </label>
        <textarea
          id="projectBrief"
          {...register("projectBrief")}
          rows={6}
          className={`w-full px-4 py-3 border bg-slate-50 focus:bg-white focus:outline-none transition-all resize-none ${
            errors.projectBrief
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-primary"
          }`}
          placeholder="Tell us about your project goals, timeline, and any specific requirements..."
        />
        {errors.projectBrief && (
          <p className="mt-1 caption text-red-600">{errors.projectBrief.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full relative overflow-hidden group bg-primary hover:bg-blue-600 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></div>
          <div className="relative flex items-center justify-center gap-3 px-8 py-4">
            <span className="button-text-standard">
              {isSubmitting
                ? "Submitting..."
                : submitStatus.type === "success"
                ? "Submitted Successfully!"
                : "Submit Request"}
            </span>
            {!isSubmitting && (
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            )}
          </div>
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus.type !== "idle" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 border body-small ${
            submitStatus.type === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">
              {submitStatus.type === "success" ? "check_circle" : "error"}
            </span>
            <p className="font-medium">{submitStatus.message}</p>
          </div>
        </motion.div>
      )}

      {/* reCAPTCHA Badge Notice */}
      <p className="caption text-slate-600 mt-2">
        This site is protected by reCAPTCHA and the Google{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Privacy Policy
        </a>{" "}
        and{" "}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </form>
  );
}

export default function RFQPage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-[#f6f7f8] text-slate-900 font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <Header />

      <main className="relative flex-grow pt-30 md:pt-40 pb-20 px-6 md:px-10 lg:px-20">
        <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-40"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          {/* Header Section */}
          <div className="mb-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="label-uppercase tracking-[0.3em]">
                Get Started
              </span>
              <span className="w-8 h-[2px] bg-primary"></span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-section mb-4"
            >
              Request for Quotation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="body-large text-slate-600 max-w-2xl mx-auto"
            >
              Tell us about your project and we'll get back to you with a
              detailed proposal tailored to your needs.
            </motion.p>
          </div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative bg-white border border-slate-300 shadow-2xl p-8 md:p-12"
          >
            {/* Corner Accents */}
            <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-l-2 border-t-2 border-primary z-20"></div>
            <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-r-2 border-t-2 border-primary z-20"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-l-2 border-b-2 border-primary z-20"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-r-2 border-b-2 border-primary z-20"></div>

            <GoogleReCaptchaProvider
              reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              scriptProps={{
                async: true,
                defer: true,
                appendTo: "head",
              }}
            >
              <RFQForm />
            </GoogleReCaptchaProvider>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
