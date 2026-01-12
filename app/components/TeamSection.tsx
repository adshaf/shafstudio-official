"use client";

import { motion } from "framer-motion";

export default function TeamSection() {
  return (
    <section
      id="about"
      className="bg-linear-to-tr from-blue-50 via-indigo-200 to-purple-100 font-display text-slate-900 overflow-x-hidden min-h-screen flex flex-col py-5"
    >
      <div className="grow flex items-center justify-center p-4 md:p-10 lg:p-20 relative">
        <div className="absolute inset-0 tech-grid pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-6xl bg-[#eef2ff] border border-slate-300 shadow-2xl flex flex-col lg:flex-row"
        >
          <div className="absolute -top-px -left-px w-6 h-6 border-l-2 border-t-2 border-primary z-20"></div>
          <div className="absolute -top-px -right-px w-6 h-6 border-r-2 border-t-2 border-primary z-20"></div>
          <div className="absolute -bottom-px -left-px w-6 h-6 border-l-2 border-b-2 border-primary z-20"></div>
          <div className="absolute -bottom-px -right-px w-6 h-6 border-r-2 border-b-2 border-primary z-20"></div>

          <div className="w-full lg:w-5/12 relative group min-h-100 lg:min-h-150 border-b lg:border-b-0 lg:border-r border-slate-300 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-black/50"
              style={{
                backgroundImage: "url('/assets/images/selfie.jpeg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-6 left-6 flex flex-col gap-1 z-10 pointer-events-none">
              <span className="caption text-white/90 tracking-widest bg-black/50 px-1 backdrop-blur-sm uppercase">
                FIG. 01
              </span>
              <span className="caption text-white/90 tracking-widest bg-black/50 px-1 backdrop-blur-sm uppercase">
                LAT: 40.7128° N
              </span>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="p-8 lg:p-10 border-b border-slate-300 flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-0.5 bg-primary"></span>
                  <span className="label-uppercase">The Founder</span>
                </div>
                <h1 className="heading-major">Adam Shafariansyah</h1>
              </div>
              <span className="material-symbols-outlined text-indigo-200 text-5xl font-light opacity-60 select-none">
                architecture
              </span>
            </div>

            <div className="p-8 lg:p-10 grow flex flex-col justify-center gap-8 bg-[#e0e7ff]">
              <div className="prose max-w-none space-y-5">
                <p className="body-large text-slate-700">
                  I’m a web designer & developer with a strong background in
                  professional consulting, helping businesses build clean,
                  modern, and high-performing websites.
                </p>
                <p className="body-large text-slate-700">
                  Before moving into web development, I spent 7 years working as
                  a Cost Consultant, working directly with clients on complex
                  construction projects where clear communication, deadlines,
                  and attention to detail were critical. That experience shapes
                  how I work today - structured, reliable, and outcome-focused.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="caption uppercase mb-1">Core Competencies_</p>
                <div className="flex flex-wrap gap-2">
                  <div className="group flex items-center justify-center border border-slate-300 bg-[#eef2ff] px-4 py-2 hover:border-primary hover:bg-primary/5 transition-colors cursor-default">
                    <p className="button-text-standard text-slate-700 group-hover:text-primary">
                      Web Design
                    </p>
                  </div>
                  <div className="group flex items-center justify-center border border-slate-300 bg-[#eef2ff] px-4 py-2 hover:border-primary hover:bg-primary/5 transition-colors cursor-default">
                    <p className="button-text-standard text-slate-700 group-hover:text-primary">
                      Web Development
                    </p>
                  </div>
                  <div className="group flex items-center justify-center border border-slate-300 bg-[#eef2ff] px-4 py-2 hover:border-primary hover:bg-primary/5 transition-colors cursor-default">
                    <p className="button-text-standard text-slate-700 group-hover:text-primary">
                      Client Management
                    </p>
                  </div>
                  <div className="group flex items-center justify-center border border-slate-300 bg-[#eef2ff] px-4 py-2 hover:border-primary hover:bg-primary/5 transition-colors cursor-default">
                    <p className="button-text-standard text-slate-700 group-hover:text-primary">
                      Project Management
                    </p>
                  </div>
                  <div className="group flex items-center justify-center border border-slate-300 bg-[#eef2ff] px-4 py-2 hover:border-primary hover:bg-primary/5 transition-colors cursor-default">
                    <p className="button-text-standard text-slate-700 group-hover:text-primary">
                      SEO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:px-10 lg:py-8 border-t border-slate-300 flex flex-col sm:flex-row justify-between items-center gap-6 bg-[#eef2ff]">
              <a
                href="https://www.linkedin.com/in/ahmad-adam-shafariansyah/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full sm:w-auto overflow-hidden group bg-[#233648] hover:bg-primary text-white transition-all duration-300"
              >
                <div className="absolute inset-0 w-0 bg-primary transition-all duration-250 ease-out group-hover:w-full"></div>
                <div className="relative flex items-center justify-center gap-3 px-8 py-3">
                  <span className="button-text-standard">Connect</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
