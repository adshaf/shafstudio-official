"use client";

import { notFound } from "next/navigation";
import { m, MotionProvider } from "@/app/components/LazyMotion";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Icon from "@/app/components/Icon";
import { getProjectBySlug, getRelatedProjects } from "@/app/constants";

export default function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.id, 3);

  return (
    <MotionProvider>
    <div className="bg-[#f6f7f8] text-slate-900 font-display overflow-x-hidden min-h-screen flex flex-col">
      <Header />

      <div className="relative flex flex-col flex-grow w-full mt-20">
        <div className="absolute inset-0 bg-tech-grid pointer-events-none z-0"></div>

        <div className="layout-container flex flex-col w-full items-center py-12 md:py-20 px-4 md:px-10 lg:px-20 relative z-10 flex-grow">
          <div className="layout-content-container flex flex-col max-w-[1280px] w-full z-10">
            {/* Back Button */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full flex justify-between items-center mb-12"
            >
              <Link
                href="/projects"
                className="group flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors cursor-pointer"
              >
                <Icon name="arrow_back" size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to Projects
              </Link>
              <div className="hidden md:flex items-center gap-2">
                <span className="w-2 h-2 bg-primary"></span>
                <p className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  Case_Study_{String(project.id).padStart(2, "0")}
                </p>
              </div>
            </m.div>

            {/* Project Header */}
            <div className="flex flex-col gap-6 mb-10">
              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 mb-2 md:hidden">
                    <span className="w-1.5 h-1.5 bg-primary"></span>
                    <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                      Case_Study_{String(project.id).padStart(2, "0")}
                    </p>
                  </div>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-slate-900 leading-[0.9]">
                    {project.title.split(" ")[0]}{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                      {project.title.split(" ").slice(1).join(" ") ||
                        project.title.split(" ")[0]}
                    </span>
                  </h1>
                </div>
              </m.div>
            </div>

            {/* Hero Image */}
            <m.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="w-full mb-16 relative group"
            >
              <div className="w-full aspect-video md:aspect-21/9 bg-indigo-50 tech-clip-br overflow-hidden relative shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent"></div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                <span>Fig. 01 — Project Overview</span>
                <span>Scroll for details</span>
              </div>
            </m.div>

            {/* Project Content Grid */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20"
            >
              {/* Sidebar */}
              <div className="lg:col-span-4 flex flex-col gap-8">
                <div className="bg-white/40 p-6 border border-slate-200 backdrop-blur-sm">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Project Data
                  </h4>
                  <ul className="flex flex-col gap-4">
                    <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <span className="text-sm font-medium text-slate-500">
                        Category
                      </span>
                      <span className="text-sm font-bold text-slate-800">
                        {project.category}
                      </span>
                    </li>
                    {project.techStack && project.techStack.length > 0 && (
                      <li className="flex justify-between items-center border-b border-slate-100 pb-2">
                        <span className="text-sm font-medium text-slate-500">
                          Tech Stack
                        </span>
                        <span className="text-sm font-bold text-slate-800">
                          {project.techStack.join(", ")}
                        </span>
                      </li>
                    )}
                    <li className="flex justify-between items-center pt-1">
                      <span className="text-sm font-medium text-slate-500">
                        Platform
                      </span>
                      <span className="text-sm font-bold text-slate-800">
                        Web App
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-12 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                    >
                      Live Site{" "}
                      <Icon name="arrow_outward" size={14} />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex-1 h-12 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
                    >
                      Live Site{" "}
                      <Icon name="arrow_outward" size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                  {project.subheading ? (
                    project.subheading
                  ) : (
                    <>
                      Delivering exceptional digital experiences through{" "}
                      <span className="text-primary">innovative design</span>{" "}
                      and technical excellence.
                    </>
                  )}
                </h3>
                <div className="prose prose-slate max-w-none text-slate-600 font-body leading-relaxed space-y-4">
                  <p>
                    {project.description ||
                      "Our approach focused on creating a seamless user experience while maintaining the highest standards of performance and accessibility. Through careful planning and iterative design, we delivered a solution that exceeds expectations."}
                  </p>
                </div>
              </div>
            </m.div>

            {/* Challenge, Solution, Results Cards */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              className="w-full mb-24"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group relative bg-linear-to-b from-blue-50 to-transparent p-8 border-t-4 border-primary hover:bg-blue-50/80 transition-colors">
                  <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-slate-200"></div>
                  <div className="mb-6 w-12 h-12 bg-blue-100 text-primary flex items-center justify-center rounded-sm">
                    <Icon name="psychology" size={24} />
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-tight mb-3">
                    The Challenge
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.challenge ||
                      "Creating a solution that balances functionality with elegant design while meeting strict performance requirements."}
                  </p>
                </div>
                <div className="group relative bg-linear-to-b from-purple-50 to-transparent p-8 border-t-4 border-purple-500 hover:bg-purple-50/80 transition-colors">
                  <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-slate-200"></div>
                  <div className="mb-6 w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-sm">
                    <Icon name="grid_view" size={24} />
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-tight mb-3">
                    The Solution
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.solution ||
                      "We implemented modern technologies and best practices to deliver a robust, scalable solution tailored to client needs."}
                  </p>
                </div>
                <div className="group relative bg-linear-to-b from-emerald-50 to-transparent p-8 border-t-4 border-emerald-500 hover:bg-emerald-50/80 transition-colors">
                  <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-slate-200"></div>
                  <div className="mb-6 w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-sm">
                    <Icon name="trending_up" size={24} />
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-tight mb-3">
                    The Result
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.results ||
                      "Successfully delivered a high-performance solution that exceeded client expectations and user satisfaction metrics."}
                  </p>
                </div>
              </div>
            </m.div>

            {/* Related Projects */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
              className="border-t border-slate-200 pt-12 pb-12"
            >
              <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 text-center">
                Explore More Projects
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((relatedProject, index) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.slug}`}
                    className="group flex flex-col gap-4 cursor-pointer"
                  >
                    <div className="w-full aspect-video bg-slate-200 overflow-hidden relative">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs text-slate-400 uppercase tracking-wider">
                        {relatedProject.category}
                      </span>
                      <h3 className="text-2xl font-bold uppercase text-slate-900 group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        View Project
                        <Icon name="arrow_forward" size={14} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </MotionProvider>
  );
}
