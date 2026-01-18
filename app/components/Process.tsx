"use client";

import { useState } from "react";
import { m } from "./LazyMotion";
import dynamic from "next/dynamic";
import { PROCESS_STEPS } from "@/app/constants";
import Icon, { type IconName } from "./Icon";

// Lazy load Calendly modal - only loads when user opens it
const PopupModal = dynamic(
  () => import("react-calendly").then((mod) => mod.PopupModal),
  { ssr: false }
);

export default function Process() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const steps = PROCESS_STEPS;

  return (
    <section
      id="process"
      className="relative w-full pt-20 md:pt-30 px-6 md:px-10 lg:px-0 bg-linear-to-b from-blue-50 via-indigo-50 to-blue-100 border-b border-blue-200"
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto max-w-240 text-center mb-20"
      >
        <h1 className="heading-section mb-6">Our workflow</h1>
        <p className="body-large max-w-2xl mx-auto">
          From initial concept to global deployment - our workflow is designed
          with you in mind.
        </p>
      </m.div>

      <div className="mx-auto max-w-7xl">
        {/* Desktop Timeline */}
        <div className="relative mt-12 hidden lg:block">
          <m.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute top-10 left-[10%] w-[80%] h-0.5 bg-blue-200 z-0 origin-left"
          >
            <div className="h-full w-full bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
          </m.div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, index) => (
              <m.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.15,
                  ease: "easeOut",
                }}
                className="group flex flex-col items-center text-center cursor-default"
              >
                <div className="relative flex items-center justify-center w-20 h-20 bg-white border-2 border-blue-200 rounded-xl group-hover:border-primary group-hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] z-10 shadow-sm">
                  <Icon
                    name={step.icon as IconName}
                    size={30}
                    className="text-slate-400 group-hover:text-primary transition-colors duration-300"
                  />
                  <div className="absolute -top-3 -right-3 size-6 rounded-full bg-white border border-blue-200 flex items-center justify-center caption font-bold text-slate-400 group-hover:text-primary group-hover:border-primary transition-colors">
                    {step.id}
                  </div>
                </div>
                <div className="mt-8 px-2">
                  <h3 className="heading-card uppercase tracking-wide group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="body-small mt-3">{step.description}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden flex flex-col space-y-8 pl-4 border-l-2 border-blue-200 ml-4">
          {steps.map((step, index) => (
            <m.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="relative pl-8 group"
            >
              <div className="absolute -left-[2.55rem] top-0 flex items-center justify-center w-12 h-12 bg-white border-2 border-blue-200 rounded-xl group-hover:border-primary transition-colors z-10 shadow-sm">
                <Icon
                  name={step.icon as IconName}
                  size={20}
                  className="text-slate-400 group-hover:text-primary"
                />
              </div>
              <div>
                <h3 className="heading-card uppercase tracking-wide group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="body-small mt-2">{step.description}</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="w-full flex justify-center mt-10 md:mt-30 py-30 px-6 lg:px-10 border-t border-blue-200/60 bg-linear-to-r from-primary to-purple-600">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-200 w-full flex flex-col items-center text-center gap-8"
        >
          <div className="flex flex-col gap-3">
            <h2 className="heading-major-inverse">
              Ready to elevate your digital presence?
            </h2>
            <p className="body-large-inverse">
              Get a quote or book a free 10min consultation today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a
              href="/request-for-quotation"
              className="button-text-large flex min-w-40 cursor-pointer items-center justify-center bg-white text-primary h-12 px-8 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 z-50"
            >
              Start a Project
            </a>
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="button-text-large flex min-w-40 cursor-pointer items-center justify-center border-2 border-white/40 bg-white/10 text-white h-12 px-8 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Free Consultation
            </button>
          </div>
        </m.div>

        {/* Calendly Modal - dynamically imported with ssr: false */}
        {isCalendlyOpen && (
          <PopupModal
            url={process.env.NEXT_PUBLIC_CALENDLY_URL || ""}
            onModalClose={() => setIsCalendlyOpen(false)}
            open={isCalendlyOpen}
            rootElement={document.body}
          />
        )}
      </section>
    </section>
  );
}
