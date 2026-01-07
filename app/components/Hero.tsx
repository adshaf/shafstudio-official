"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col hero-bg-light"
    >
      <main className="relative flex flex-1 flex-col justify-center px-6 py-32 md:px-12 lg:px-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-blue-100/50 px-4 py-1.5 text-xs font-bold text-primary border border-blue-200 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            INNOVATING THE WEB
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Engineering <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600">
              Digital Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 max-w-2xl text-lg font-normal text-slate-600 sm:text-xl lg:max-w-3xl leading-relaxed"
          >
            We blend technical precision with creative strategy to build web
            applications that scale. Your vision, architected for the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="flex h-12 w-full sm:w-auto min-w-[170px] items-center justify-center gap-2 rounded bg-primary px-8 text-base font-bold text-white transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <span>Get a Proposal</span>
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </a>
            <a
              href="#work"
              className="flex h-12 w-full sm:w-auto min-w-[170px] items-center justify-center rounded border border-slate-300 bg-transparent px-8 text-base font-bold text-slate-700 transition-all hover:bg-white hover:border-slate-400 hover:shadow-md backdrop-blur-sm"
            >
              Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-24 flex w-full flex-col items-center gap-6"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Trusted by forward-thinking companies
            </p>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
              <div className="flex items-center gap-2 text-slate-800">
                <span className="material-symbols-outlined text-3xl">
                  token
                </span>
                <span className="font-bold text-lg">NEXUS</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800">
                <span className="material-symbols-outlined text-3xl">
                  diamond
                </span>
                <span className="font-bold text-lg">GEMINI</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800">
                <span className="material-symbols-outlined text-3xl">bolt</span>
                <span className="font-bold text-lg">VOLT</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800">
                <span className="material-symbols-outlined text-3xl">
                  deployed_code
                </span>
                <span className="font-bold text-lg">STACK</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 right-12 hidden lg:block p-4 opacity-40 pointer-events-none">
          <div className="grid grid-cols-3 gap-2">
            <div className="h-2 w-2 rounded bg-primary"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-primary"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-primary"></div>
          </div>
        </div>
        <div className="absolute top-32 left-12 hidden lg:block opacity-40 pointer-events-none">
          <div className="grid grid-cols-3 gap-2 rotate-90">
            <div className="h-2 w-2 rounded bg-purple-500"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-purple-500"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-slate-400"></div>
            <div className="h-2 w-2 rounded bg-purple-500"></div>
          </div>
        </div>
      </main>
    </section>
  );
}
