"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: "design_services",
      title: "UI/UX Design",
      description:
        "User-centric interfaces designed for maximum engagement. We focus on interaction patterns that convert.",
    },
    {
      id: 2,
      icon: "terminal",
      title: "Web Development",
      description:
        "Scalable frontend and backend engineering. We write clean, performant code that powers complex applications.",
    },
    {
      id: 3,
      icon: "branding_watermark",
      title: "Brand Identity",
      description:
        "Strategic visual systems that define your market presence. Logos, typography, and comprehensive style guides.",
    },
    {
      id: 4,
      icon: "monitoring",
      title: "SEO & Optimization",
      description:
        "Data-driven strategies to improve visibility. Technical audits, speed optimization, and search ranking growth.",
    },
    {
      id: 5,
      icon: "devices",
      title: "Mobile Solutions",
      description:
        "Responsive designs and native application development for iOS and Android ecosystems.",
    },
    {
      id: 6,
      icon: "hub",
      title: "Consultancy",
      description:
        "Technical planning and digital transformation strategy to align technology with business goals.",
    },
  ];

  return (
    <section id="services" className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 font-display text-text-main overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center py-20 px-6 lg:px-10 border-b border-blue-200/60">
        <div className="max-w-240 w-full flex flex-col gap-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit mx-auto backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-xs font-bold uppercase tracking-wider">
              Our Capabilities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-900 tracking-tight text-4xl md:text-5xl font-bold leading-tight"
          >
            Technical Expertise &amp; <br className="hidden md:block" />{" "}
            Precision Engineering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-lg font-normal leading-relaxed max-w-160 mx-auto"
          >
            We architect robust digital ecosystems. From pixel-perfect
            interfaces to scalable backend infrastructure, our services are
            designed for growth.
          </motion.p>
        </div>

        {/* Background Pattern */}
        <div
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>
      </section>

      {/* Services Grid */}
      <section className="w-full flex justify-center py-16 px-6 lg:px-10">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
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
                  <h3 className="text-slate-900 text-xl font-bold">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="mt-auto pt-4 flex items-center text-primary text-sm font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Explore{" "}
                  <span className="material-symbols-outlined text-sm ml-1">
                    arrow_forward
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full flex justify-center py-20 px-6 lg:px-10 border-t border-blue-200/60 bg-linear-to-r from-primary to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-200 w-full flex flex-col items-center text-center gap-8"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
              Ready to upgrade your digital presence?
            </h2>
            <p className="text-blue-100 text-lg">
              Let&apos;s build something exceptional together. Schedule a
              technical consultation today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="#contact" className="flex min-w-40 cursor-pointer items-center justify-center bg-white text-primary text-base font-bold h-12 px-8 hover:bg-blue-50 hover:shadow-lg transition-all duration-300">
              Start a Project
            </a>
            <a href="#work" className="flex min-w-40 cursor-pointer items-center justify-center border-2 border-white/40 bg-white/10 text-white text-base font-bold h-12 px-8 hover:bg-white/20 transition-colors backdrop-blur-sm">
              View Portfolio
            </a>
          </div>
        </motion.div>
      </section>
    </section>
  );
}
