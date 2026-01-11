"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/app/constants";

export default function Services() {
  const services = SERVICES;

  return (
    <section
      id="services"
      className="bg-linear-to-br from-blue-100 via-indigo-50 to-purple-100 font-display text-text-main overflow-x-hidden"
    >
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center py-20 md:py-40 px-6 lg:px-10 border-b border-blue-200/60">
        <div className="max-w-240 w-full flex flex-col gap-6 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-section"
          >
            What We Bring to the Table
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large max-w-160 mx-auto"
          >
            We build digital experiences designed to scale - from thoughtful
            interfaces to systems that grow with your business.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="w-full flex justify-center py-20 px-6 lg:px-10">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  }}
                  className="group relative flex flex-col gap-4 p-8 bg-white hover:bg-blue-50/30 transition-all duration-300"
                >
                  {/* Top Gradient Bar */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-primary to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-50 border border-blue-100 mb-2 text-primary group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">
                      {service.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="heading-card">{service.title}</h3>
                    <p className="body-small">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
