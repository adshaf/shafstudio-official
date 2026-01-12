"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col hero-bg-light"
    >
      <main className="relative flex flex-1 flex-col justify-center px-6 py-32 md:px-12 lg:px-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-hero mb-8 max-w-4xl"
          >
            Creating Websites <br className="hidden lg:block" />
            <span className="text-gradient-primary">You Remember</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="body-large mb-12 max-w-2xl lg:max-w-3xl"
          >
            We make it our mission to design and build a website that truly
            reflects your brand. Your vision, the way you envisioned it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/rfq"
              className="button-text-large flex h-12 w-full sm:w-auto min-w-42.5 items-center justify-center gap-2 rounded bg-primary px-8 text-white transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <span>Request Quote</span>
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
            <a
              href="#work"
              className="button-text-large flex h-12 w-full sm:w-auto min-w-42.5 items-center justify-center rounded border border-slate-300 bg-transparent px-8 text-slate-700 transition-all hover:bg-white hover:border-slate-400 hover:shadow-md backdrop-blur-sm"
            >
              Our Work
            </a>
          </motion.div>

          {/* FOR THE FUTURE - ADD SECTION FOR LOGOS OF COMPANIES WE HAVE WORKED WITH HERE */}
          {/* <motion.div
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
          </motion.div> */}
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
