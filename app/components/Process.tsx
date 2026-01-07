"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      id: 1,
      icon: "travel_explore",
      title: "Discovery",
      description:
        "We analyze your goals, market fit, and technical requirements.",
    },
    {
      id: 2,
      icon: "account_tree",
      title: "Architecture",
      description:
        "Structuring the user journey, data logic, and system blueprint.",
    },
    {
      id: 3,
      icon: "format_paint",
      title: "Design",
      description: "Crafting high-fidelity UI with pixel-perfect precision.",
    },
    {
      id: 4,
      icon: "terminal",
      title: "Development",
      description:
        "Clean, scalable code using modern frameworks and best practices.",
    },
    {
      id: 5,
      icon: "rocket_launch",
      title: "Launch",
      description:
        "Quality assurance, performance tuning, and global deployment.",
    },
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-blue-50 via-indigo-50 to-blue-100 border-b border-blue-200">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto max-w-[960px] text-center mb-20"
      >
        <div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">
            Systematic Workflow
          </span>
        </div>
        <h1 className="text-slate-900 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
          THE PROCESS
        </h1>
        <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
          From initial concept to global deployment. We follow a rigorous,
          data-driven methodology to ensure digital excellence at every step.
        </p>
      </motion.div>

      <div className="mx-auto max-w-[1280px]">
        {/* Desktop Timeline */}
        <div className="relative mt-12 hidden lg:block">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute top-[2.5rem] left-[10%] w-[80%] h-[2px] bg-blue-200 z-0 origin-left"
          >
            <div className="h-full w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
          </motion.div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
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
                <div className="relative flex items-center justify-center w-20 h-20 bg-white border-2 border-blue-200 rounded-xl group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] z-10 shadow-sm">
                  <span className="material-symbols-outlined text-slate-400 text-3xl group-hover:text-primary transition-colors duration-300">
                    {step.icon}
                  </span>
                  <div className="absolute -top-3 -right-3 size-6 rounded-full bg-white border border-blue-200 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-primary group-hover:border-primary transition-colors">
                    {step.id}
                  </div>
                </div>
                <div className="mt-8 px-2">
                  <h3 className="text-slate-900 text-lg font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden flex flex-col space-y-8 pl-4 border-l-2 border-blue-200 ml-4">
          {steps.map((step, index) => (
            <motion.div
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
                <span className="material-symbols-outlined text-slate-400 text-xl group-hover:text-primary">
                  {step.icon}
                </span>
              </div>
              <div>
                <h3 className="text-slate-900 text-lg font-bold uppercase tracking-wide group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="p-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent w-full max-w-2xl"></div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center h-12 px-8 rounded bg-primary text-white text-base font-bold tracking-wide hover:bg-blue-600 transition-all shadow-lg hover:shadow-primary/20">
            Start Your Project
            <span className="material-symbols-outlined ml-2 text-lg">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
