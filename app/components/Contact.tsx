"use client";

import { useState, FormEvent } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { CONTACT_INFO } from "@/app/constants";

function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      setSubmitStatus({
        type: "error",
        message: "reCAPTCHA not loaded. Please refresh and try again.",
      });
      return;
    }

    setIsSubmitting(true);
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
          name: formData.name,
          email: formData.email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="flex flex-col gap-2 group">
          <span className="label-uppercase text-slate-500 group-focus-within:text-primary transition-colors">
            Name
          </span>
          <input
            className="w-full h-14 bg-white/70 text-slate-900 border border-slate-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 rounded-none placeholder:text-slate-400"
            placeholder="Your Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </label>
        <label className="flex flex-col gap-2 group">
          <span className="label-uppercase text-slate-500 group-focus-within:text-primary transition-colors">
            Email
          </span>
          <input
            className="w-full h-14 bg-white/70 text-slate-900 border border-slate-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 rounded-none placeholder:text-slate-400"
            placeholder="your@email.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 group">
        <span className="label-uppercase text-slate-500 group-focus-within:text-primary transition-colors">
          Subject
        </span>
        <input
          className="w-full h-14 bg-white/70 text-slate-900 border border-slate-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 rounded-none placeholder:text-slate-400"
          placeholder="Project Inquiry"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          required
        />
      </label>
      <label className="flex flex-col gap-2 group">
        <span className="label-uppercase text-slate-500 group-focus-within:text-primary transition-colors">
          Message
        </span>
        <textarea
          className="w-full min-h-[160px] resize-y bg-white/70 text-slate-900 border border-slate-300 px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 rounded-none placeholder:text-slate-400"
          placeholder="Describe your project requirements..."
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        ></textarea>
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
          className="w-full md:w-auto px-10 h-14 bg-primary text-white button-text-standard hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-none flex items-center justify-center gap-3 group border border-transparent hover:border-slate-900 shadow-lg shadow-primary/20 hover:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <span
            className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
            style={{ fontSize: "20px" }}
          >
            arrow_forward
          </span>
        </button>
      </div>

      {/* reCAPTCHA Badge Notice */}
      <p className="caption mt-2">
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

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
                Have a project in mind? We craft thoughtfully designed digital
                experiences with care and technical precision. Get in touch
                directly or via the form.
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
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "24px" }}
                    >
                      {item.icon}
                    </span>
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
              <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b-2 border-r-2 border-primary"></div>

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
