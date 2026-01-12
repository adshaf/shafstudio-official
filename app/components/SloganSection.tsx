"use client";

import { motion } from "framer-motion";

export default function SloganSection() {
  return (
    <section className="relative flex py-30 w-full flex-col items-center justify-center overflow-hidden bg-linear-to-r from-blue-300 via-indigo-200 to-purple-300">
      <div className="absolute inset-0 tech-grid z-0"></div>
      <div className="absolute inset-0 scanline z-0 opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="absolute top-6 left-6 md:top-12 md:left-12 z-10 hidden sm:flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-primary animate-pulse rounded-none"></div>
          <span className="caption text-primary/90 tracking-[0.2em] uppercase font-bold">
            SYS.STATUS: ONLINE
          </span>
        </div>
        <div className="h-px w-24 bg-primary/40"></div>
      </div>

      <div className="absolute top-6 right-6 md:top-12 md:right-12 z-10 hidden sm:block text-right">
        <p className="caption text-slate-500 tracking-[0.2em] uppercase">
          EST. 2024
        </p>
        <p className="caption text-slate-400 tracking-[0.2em] uppercase">
          SEC_01 // INTRO
        </p>
      </div>

      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-10 hidden sm:flex items-end gap-2">
        <span className="material-symbols-outlined text-primary/50 text-3xl">
          grid_4x4
        </span>
        <div className="flex flex-col caption text-slate-500 leading-tight">
          <span>X: 00.92</span>
          <span>Y: 88.14</span>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-10 hidden sm:block">
        <div className="border border-primary/20 bg-primary/5 p-2 backdrop-blur-sm rounded-none">
          <span className="material-symbols-outlined text-primary text-xl">
            fingerprint
          </span>
        </div>
      </div>

      <div className="absolute left-12 top-0 bottom-0 w-px bg-slate-900/5 hidden xl:block"></div>
      <div className="absolute right-12 top-0 bottom-0 w-px bg-slate-900/5 hidden xl:block"></div>

      <div className="layout-content-container relative z-10 flex flex-col items-center max-w-300 px-4 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center"
        >
          <div className="flex items-center gap-3 border-l-2 border-primary pl-3 py-1">
            <span className="label-uppercase text-base">
              Hassle-free Process from Start to Finish
            </span>
          </div>
        </motion.div>

        <h1 className="heading-hero text-center tracking-tighter leading-[0.9] mb-8 select-none">
          <div className="block">
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="block"
            >
              smooth
            </motion.span>
          </div>
          <div className="block">
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="block"
            >
              simple
            </motion.span>
          </div>
          <div className="block">
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="block"
            >
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
                stress-free
              </span>
            </motion.span>
          </div>
        </h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-50 h-0.5 bg-white mb-8 relative overflow-hidden rounded-none"
        >
          <div className="absolute inset-0 bg-primary w-full h-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-180 mx-auto text-center"
        >
          <p className="body-large">
            We believe building a website should be a{" "}
            <span className="text-slate-900 font-bold">
              seamless & exciting
            </span>{" "}
            experience.
          </p>
          <p className="body-large">
            From concept to launch, we guide you through every step with clarity
            and care.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#process"
            className="relative group bg-primary hover:bg-white text-white hover:text-blue-600 px-8 py-4 button-text-standard transition-all duration-300 rounded-none border border-primary overflow-hidden shadow-lg shadow-primary/10"
          >
            <span className="relative z-10 flex items-center gap-2">
              See Our Process Timeline
              <span className="material-symbols-outlined text-[18px] group-hover:rotate-45 transition-transform duration-300">
                arrow_outward
              </span>
            </span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 origin-left ease-in-out z-0"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
