"use client";

import { motion } from "framer-motion";

export default function FeaturedWork() {
  const projects = [
    {
      id: 1,
      category: "FINTECH",
      title: "Nova Analytics",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCfAdb2WBjy6Jkzr1ts1DUK8VPON5Ojba6_DM2naa2RmablFC--MACYFKieQCNdRH6gqU_pIkEkRXV4M0109-FAXKEEFQRFFfHyKMDRFU1gJWIcnittNO2_0S_raoFkmFp-95GIcsoejVzuHXfC1ykl09Nhgg4vTZsKadhfLvid2Q3-AIDWDBKGMeTVAyKQnAIaORgvloJXJsBJBaZj-6FfjuqdbA8DgEnHhRa8eoCptQhO0idcrPkRaq4lGVJFq8dSo3o5pdsMIFc",
      clipClass: "tech-clip-tr",
    },
    {
      id: 2,
      category: "WEB3",
      title: "Apex Exchange",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDNHXt40HMrgkYxpvdi0C4yslECp6bUntgSX2nhgy4kqkpl9n0jYraIvMWJnAJ_3BSrY-z_Osy0xgsSa1BYJVu_48RUoWWCMkh4pGBqagtMnhnSzOF3CxIBqugYOly3QiNeMV8E_t_1-l-OLxu-7nBQ5ocowSjYjUDzc5J8pHlASSx52zAHQEH5cAZQTGh1EhvLUoazF2PXwCtBV6ZETRRQgf1FFynctqngMhuLxQNLch6D70Efao-GjyEicrNgB6EaIQcTVuqeOIo",
      clipClass: "tech-clip-tr",
    },
    {
      id: 3,
      category: "REAL ESTATE",
      title: "Tower Prime",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwQCisqPuLqbMpc1Xbz73mQYnpVHny4rmR5XRe71hwSP1AOlOLu50FwFU4eibJjsLxB4zrMPLYNFA7AkydYO9b6TDJgzN5ffP1dv68v-9cDvNujE9Km97Kx6h6cfNhQ-G90UidO8yZFcz0TrYDykP2WEFDBdIrq5HLzB-vMnZ93_o3huj2PrkVn-0mZIndO-LsmrRtz09jVsvfB-Ly_Qudq3VmF6PdDZcIHuhWth8hDhunMwehM5EN4pD3PxuyozFSCNr3Kz1FT0o",
      clipClass: "tech-clip-tr",
    },
    {
      id: 4,
      category: "SAAS",
      title: "Flow Systems",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDeTvUcXS-2xa6WwkavbM8cAYg4XdtoL-GaRjQGx3WcjU_3R0rR3Y-Si5qy9D216ipak-jCdlz1wS4Z0Ql_H0wFwMBySAHXOmnlTk5dmpgMF4X_xAIpz3WTSYgQg6QMsgpe2PwKjsQo2V8pGVTub-GwIEMmpc7zOXIpfm5fI_hQZMBJ4jyY5ro85-i04s3NGhp-ivWivcCud2JcvjMZdB18wNUCBEGUpudFqmG0HJQ_qLq1tMD8-X2nByY14kixoUER-Oom2S02mX8",
      clipClass: "tech-clip-tr",
    },
  ];

  const categories = ["All", "UI/UX", "Web3", "Fintech", "SaaS"];

  return (
    <section id="work" className="bg-white text-slate-900 font-display overflow-x-hidden min-h-screen flex flex-col">
      <div className="relative flex flex-col flex-grow w-full">
        <div className="absolute inset-0 bg-tech-grid pointer-events-none z-0"></div>
        <div className="layout-container flex flex-col w-full items-center py-12 md:py-20 px-4 md:px-10 lg:px-20 relative z-10 flex-grow">
          <div className="layout-content-container flex flex-col max-w-[1280px] w-full z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-6"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-primary"></span>
                  <p className="text-primary text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                    Selected_Works
                  </p>
                </div>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-[-0.02em] uppercase">
                  Featured{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
                    Projects
                  </span>
                </h2>
              </div>
              <p className="text-slate-600 text-sm md:text-base max-w-sm text-left md:text-right mt-6 md:mt-0 font-light leading-relaxed">
                Engineering digital excellence. We build interfaces that define
                the future of interaction for forward-thinking brands.
              </p>
            </motion.div>

            <div className="flex gap-3 mb-12 overflow-x-auto pb-2 no-scrollbar w-full">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`flex items-center justify-center shrink-0 h-10 px-6 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                    index === 0
                      ? "bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-white"
                      : "bg-transparent text-slate-500 hover:text-primary border border-slate-300 hover:border-primary"
                  }`}
                >
                  {index === 0 ? `[ ${category} ]` : category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 * index,
                    ease: "easeOut",
                  }}
                  className={`group relative w-full aspect-[16/10] bg-indigo-50 ${project.clipClass} overflow-hidden cursor-pointer shadow-sm`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-purple-900/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-end justify-between border-l-2 border-primary pl-4">
                      <div>
                        <p className="text-primary text-xs font-mono mb-2">{`0${
                          index + 1
                        } / ${project.category}`}</p>
                        <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                      <div className="w-12 h-12 flex items-center justify-center border border-white/30 text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                        <span className="material-symbols-outlined">
                          arrow_outward
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center w-full">
              <button className="group relative flex items-center justify-center h-14 w-full md:w-auto md:min-w-[240px] bg-transparent text-slate-800 font-bold uppercase tracking-[0.15em] hover:bg-slate-900/5 transition-all duration-300">
                <span className="absolute top-0 left-0 w-full h-[1px] bg-slate-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-300"></span>
                <span className="absolute top-0 left-0 h-full w-[1px] bg-slate-300"></span>
                <span className="absolute top-0 right-0 h-full w-[1px] bg-slate-300"></span>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary"></span>
                <span className="relative z-10 flex items-center gap-3">
                  View All Cases
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                    chevron_right
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
