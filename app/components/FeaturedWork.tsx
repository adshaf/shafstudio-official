"use client";

import { m } from "./LazyMotion";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/app/constants";
import Icon from "./Icon";

export default function FeaturedWork() {
  const projects = getFeaturedProjects();

  return (
    <section
      id="work"
      className="bg-white text-slate-900 font-display overflow-x-hidden flex flex-col"
    >
      <div className="relative flex flex-col grow w-full">
        <div className="absolute inset-0 bg-tech-grid pointer-events-none z-0"></div>
        <div className="layout-container flex flex-col w-full items-center py-12 md:py-30 px-4 md:px-10 lg:px-20 relative z-10 grow">
          <div className="layout-content-container flex flex-col max-w-7xl w-full z-10">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-6"
            >
              <div className="flex flex-col gap-2">
                <h2 className="heading-section uppercase">
                  Featured{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
                    Projects
                  </span>
                </h2>
              </div>
              <div className="space-y-2">
                <p className="body-standard max-w-sm text-left md:text-right mt-6 md:mt-0">
                  We strike the right balance between visual appeal,
                  functionality, and staying true to your brand.
                </p>
              </div>
            </m.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
              {projects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <m.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 * index,
                      ease: "easeOut",
                    }}
                    className={`group relative w-full aspect-16/10 bg-indigo-50 ${project.clipClass} overflow-hidden cursor-pointer shadow-sm`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-blue-900/35 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full py-8 px-11 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-between items-center border-l-2 border-primary pl-4">
                        <div>
                          <h3 className="heading-major-inverse uppercase">
                            {project.title}
                          </h3>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center border border-white/30 text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                          <Icon name="arrow_outward" size={24} />
                        </div>
                      </div>
                    </div>
                  </m.div>
                </a>
              ))}
            </div>

            <div className="flex justify-center w-full">
              <Link
                href="/projects"
                className="group relative flex items-center justify-center h-14 w-full md:w-auto md:min-w-65 bg-transparent text-slate-800 button-text-large hover:bg-slate-900/5 transition-all duration-300 cursor-pointer"
              >
                <span className="absolute top-0 left-0 w-full h-px bg-slate-300"></span>
                <span className="absolute bottom-0 left-0 w-full h-px bg-slate-300"></span>
                <span className="absolute top-0 left-0 h-full w-px bg-slate-300"></span>
                <span className="absolute top-0 right-0 h-full w-px bg-slate-300"></span>
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary"></span>
                <span className="relative z-10 flex items-center gap-3">
                  More Projects
                  <Icon
                    name="chevron_right"
                    size={20}
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
