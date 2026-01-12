"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RFQForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    projectType: "",
    budget: "",
    projectBrief: "",
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      setSubmitStatus({
        type: "error",
        message: "reCAPTCHA not loaded. Please refresh and try again.",
      });
      return;
    }

    setSubmitStatus({ type: "submitting", message: "" });

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
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! We've received your request and will get back to you within 24-48 hours.",
        });
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          projectType: "",
          budget: "",
          projectBrief: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit request. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none transition-all"
          placeholder="John Doe"
        />
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
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none transition-all"
          placeholder="Your Company LLC"
        />
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
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none transition-all"
          placeholder="john@example.com"
        />
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
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none transition-all cursor-pointer"
        >
          <option value="">Select project type</option>
          <option value="marketing-website">Marketing Website</option>
          <option value="personal-website">Personal Website</option>
          <option value="ecommerce-website">E-commerce Website</option>
          <option value="saas-website">SaaS Website</option>
          <option value="other">Other</option>
        </select>
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
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-slate-300 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none transition-all cursor-pointer"
        >
          <option value="">Select budget range</option>
          <option value="1400-2999">$1,400 - $2,999</option>
          <option value="3000-6999">$3,000 - $6,999</option>
          <option value="7000-10000">$7,000 - $10,000</option>
          <option value="10000+">$10,000+</option>
        </select>
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
          name="projectBrief"
          value={formData.projectBrief}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-slate-300 bg-slate-50 focus:bg-white focus:border-primary focus:outline-none transition-all resize-none"
          placeholder="Tell us about your project goals, timeline, and any specific requirements..."
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={submitStatus.type === "submitting"}
          className="w-full relative overflow-hidden group bg-primary hover:bg-blue-600 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></div>
          <div className="relative flex items-center justify-center gap-3 px-8 py-4">
            <span className="button-text-standard">
              {submitStatus.type === "submitting"
                ? "Submitting..."
                : submitStatus.type === "success"
                ? "Submitted Successfully!"
                : "Submit Request"}
            </span>
            {submitStatus.type !== "submitting" && (
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            )}
          </div>
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus.type !== "idle" && submitStatus.type !== "submitting" && (
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
