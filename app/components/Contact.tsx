"use client";

import { useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactClientSchema,
  type ContactClientFormData,
} from "@/lib/validations/contact";
import { CONTACT_INFO } from "@/app/constants";
import Icon, { type IconName } from "./Icon";

function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactClientFormData>({
    resolver: zodResolver(contactClientSchema),
    mode: "onBlur",
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const onSubmit = async (data: ContactClientFormData) => {
    if (!executeRecaptcha) {
      setSubmitStatus({
        type: "error",
        message: "reCAPTCHA not loaded. Please refresh and try again.",
      });
      return;
    }

    setSubmitStatus({ type: null, message: "" });

    try {
      // Execute reCAPTCHA to get token
      const recaptchaToken = await executeRecaptcha("contact_form");

      // Submit form data with reCAPTCHA token
      const response = await fetch("/api/contact", {
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
          message: "Message sent successfully! We'll get back to you soon.",
        });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message:
            responseData.error || "Failed to send message. Please try again.",
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
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2 group">
          <span className="label-uppercase text-slate-500 group-focus-within:text-primary transition-colors">
            Name
          </span>
          <input
            {...register("name")}
            className={`w-full h-14 bg-white/70 text-slate-900 border px-4 py-3 focus:outline-none transition-all duration-300 rounded-none placeholder:text-slate-400 ${
              errors.name
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
            }`}
            placeholder="Your Name"
            type="text"
          />
          {errors.name && (
            <p className="caption text-red-600">{errors.name.message}</p>
          )}
        </label>
        <label className="flex flex-col gap-2 group">
          <span className="label-uppercase text-slate-500 group-focus-within:text-primary transition-colors">
            Email
          </span>
          <input
            {...register("email")}
            className={`w-full h-14 bg-white/70 text-slate-900 border px-4 py-3 focus:outline-none transition-all duration-300 rounded-none placeholder:text-slate-400 ${
              errors.email
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
            }`}
            placeholder="your@email.com"
            type="email"
          />
          {errors.email && (
            <p className="caption text-red-600">{errors.email.message}</p>
          )}
        </label>
      </div>
      <label className="flex flex-col gap-2 group">
        <span className="label-uppercase text-slate-500 group-focus-within:text-primary transition-colors">
          Subject
        </span>
        <input
          {...register("subject")}
          className={`w-full h-14 bg-white/70 text-slate-900 border px-4 py-3 focus:outline-none transition-all duration-300 rounded-none placeholder:text-slate-400 ${
            errors.subject
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
          }`}
          placeholder="Project Enquiry"
          type="text"
        />
        {errors.subject && (
          <p className="caption text-red-600">{errors.subject.message}</p>
        )}
      </label>
      <label className="flex flex-col gap-2 group">
        <span className="label-uppercase text-slate-500 group-focus-within:text-primary transition-colors">
          Message
        </span>
        <textarea
          {...register("message")}
          className={`w-full min-h-40 resize-y bg-white/70 text-slate-900 border px-4 py-3 focus:outline-none transition-all duration-300 rounded-none placeholder:text-slate-400 ${
            errors.message
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
          }`}
          placeholder="Describe your project requirements or write your message here..."
        ></textarea>
        {errors.message && (
          <p className="caption text-red-600">{errors.message.message}</p>
        )}
      </label>

      {/* Status Messages */}
      {submitStatus.type && (
        <div
          className={`p-4 border body-small ${
            submitStatus.type === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="pt-2">
        <button
          className="w-full md:w-auto px-10 h-14 bg-primary text-white button-text-standard hover:bg-blue-800 hover:text-white transition-all duration-300 rounded-none flex items-center justify-center gap-3 group border border-transparent hover:border-slate-900 shadow-lg shadow-primary/20 hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Icon
            name="arrow_forward"
            size={20}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>

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

export default function Contact() {
  const contactInfo = CONTACT_INFO;

  return (
    <section
      id="contact"
      className="relative bg-linear-to-br from-[#e0e7ff] via-[#ede9fe] to-[#e0e7ff] text-[#1e293b] font-display overflow-hidden py-20 md:py-40"
    >
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 flex items-center justify-center p-6 md:p-12 lg:p-24">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 bg-primary/5 text-primary label-uppercase w-fit">
                Contact Us
              </div>
              <h1 className="heading-hero tracking-tighter leading-[0.9]">
                LET&apos;S BUILD <br />
                <span className="text-primary">TOGETHER.</span>
              </h1>
              <p className="body-large text-slate-600 max-w-md">
                Have a project in mind? Get in touch directly or via the form.
              </p>
            </div>

            <div className="h-px w-full bg-linear-to-r from-transparent via-[#cbd5e1] to-transparent"></div>

            <div className="grid gap-8">
              {contactInfo.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-5 group cursor-pointer"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white/60 border border-[#cbd5e1] text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
                    <Icon name={item.icon as IconName} size={24} />
                  </div>
                  <div>
                    <h3 className="label-uppercase text-slate-500 mb-1">
                      {item.label}
                    </h3>
                    <p className="body-large font-medium text-slate-900 group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white/40 backdrop-blur-md p-8 md:p-12 border border-white/50 shadow-xl shadow-indigo-100/40 relative w-full">
              <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-primary"></div>

              <GoogleReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                scriptProps={{
                  async: true,
                  defer: true,
                  appendTo: "head",
                }}
              >
                <ContactForm />
              </GoogleReCaptchaProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
