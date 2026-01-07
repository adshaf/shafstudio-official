"use client";

import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section
      id="about"
      className="bg-linear-to-tr from-blue-50 via-indigo-200 to-purple-100 font-display text-slate-900 overflow-x-hidden min-h-screen flex flex-col py-5"
    >
      <div className="flex-grow flex items-center justify-center p-4 md:p-10 lg:p-20 relative">
        <div className="absolute inset-0 tech-grid pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-6xl bg-[#eef2ff] border border-slate-300 shadow-2xl flex flex-col lg:flex-row"
        >
          <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-l-2 border-t-2 border-primary z-20"></div>
          <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-r-2 border-t-2 border-primary z-20"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-l-2 border-b-2 border-primary z-20"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-r-2 border-b-2 border-primary z-20"></div>

          <div className="w-full lg:w-5/12 relative group min-h-[400px] lg:min-h-[600px] border-b lg:border-b-0 lg:border-r border-slate-300 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
              style={{
                backgroundImage: "url('./assets/images/selfie.jpeg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-6 left-6 flex flex-col gap-1 z-10 pointer-events-none">
              <span className="text-[10px] text-white/90 font-mono tracking-widest bg-black/50 px-1 backdrop-blur-sm">
                FIG. 01
              </span>
              <span className="text-[10px] text-white/90 font-mono tracking-widest bg-black/50 px-1 backdrop-blur-sm">
                LAT: 40.7128° N
              </span>
            </div>
            <div className="absolute bottom-6 right-6 flex items-center gap-2 z-10 bg-[#101922]/40 px-3 py-1 border border-white/10">
              <div className="w-2 h-2 rounded-none bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">
                Online
              </span>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="p-8 lg:p-10 border-b border-slate-300 flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-[2px] bg-primary"></span>
                  <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                    The Founder
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-900">
                  Adam Shafariansyah
                </h1>
                <p className="text-lg text-slate-500 font-medium">
                  Web Design &amp; Web Development
                </p>
              </div>
              <span className="material-symbols-outlined text-indigo-200 text-5xl font-light opacity-60 select-none">
                architecture
              </span>
            </div>

            <div className="p-8 lg:p-10 flex-grow flex flex-col justify-center gap-8 bg-[#e0e7ff]">
              <div className="prose max-w-none">
                <p className="text-slate-700 text-lg leading-relaxed font-light">
                  Bridging the gap between functional code and emotive design.
                  With over a decade of experience in digital product design, I
                  build interfaces that feel{" "}
                  <span className="text-primary font-medium">inevitable</span>.
                  I specialize in turning complex technical requirements into
                  elegant, human-centric solutions.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                  Core Competencies_
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="group flex items-center justify-center border border-slate-300 bg-[#eef2ff] px-4 py-2 hover:border-primary hover:bg-primary/5 transition-colors cursor-crosshair">
                    <p className="text-slate-700 text-sm font-bold tracking-wide group-hover:text-primary">
                      Figma
                    </p>
                  </div>
                  <div className="group flex items-center justify-center border border-slate-300 bg-[#eef2ff] px-4 py-2 hover:border-primary hover:bg-primary/5 transition-colors cursor-crosshair">
                    <p className="text-slate-700 text-sm font-bold tracking-wide group-hover:text-primary">
                      React
                    </p>
                  </div>
                  <div className="group flex items-center justify-center border border-slate-300 bg-[#eef2ff] px-4 py-2 hover:border-primary hover:bg-primary/5 transition-colors cursor-crosshair">
                    <p className="text-slate-700 text-sm font-bold tracking-wide group-hover:text-primary">
                      Three.js
                    </p>
                  </div>
                  <div className="group flex items-center justify-center border border-slate-300 bg-[#eef2ff] px-4 py-2 hover:border-primary hover:bg-primary/5 transition-colors cursor-crosshair">
                    <p className="text-slate-700 text-sm font-bold tracking-wide group-hover:text-primary">
                      Python
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:px-10 lg:py-8 border-t border-slate-300 flex flex-col sm:flex-row justify-between items-center gap-6 bg-[#eef2ff]">
              <div className="flex items-center gap-6">
                <a
                  aria-label="LinkedIn"
                  className="text-slate-400 hover:text-primary transition-colors duration-300 group"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">
                    work
                  </span>
                </a>
                <a
                  aria-label="GitHub"
                  className="text-slate-400 hover:text-primary transition-colors duration-300 group"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">
                    code
                  </span>
                </a>
                <a
                  aria-label="Twitter"
                  className="text-slate-400 hover:text-primary transition-colors duration-300 group"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[24px] group-hover:scale-110 transition-transform">
                    alternate_email
                  </span>
                </a>
                <div className="h-6 w-px bg-slate-300 mx-2"></div>
                <div className="select-none">
                  <p className="font-light italic text-xl text-slate-400 font-serif tracking-tighter">
                    Alex V.
                  </p>
                </div>
              </div>
              <button className="relative w-full sm:w-auto overflow-hidden group bg-[#233648] hover:bg-primary text-white transition-all duration-300">
                <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <div className="relative flex items-center justify-center gap-3 px-8 py-3">
                  <span className="text-sm font-bold uppercase tracking-widest">
                    Connect
                  </span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
