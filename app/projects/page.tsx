"use client";

import { useState, useEffect } from "react";
import { m, MotionProvider } from "@/app/components/LazyMotion";
import { PROJECTS } from "@/app/constants";
import CursorPreview from "@/app/components/CursorPreview";
import Header from "../components/Header";
import Icon from "../components/Icon";

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ITEMS_PER_PAGE = 10;

  // Paginate
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProjects = PROJECTS.slice(startIndex, endIndex);
  const totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }
    return pages;
  };

  return (
    <MotionProvider>
      <section className="bg-white text-slate-900 font-display min-h-screen flex flex-col">
        <Header />
        <div className="relative flex flex-col grow w-full mt-20">
          <div className="absolute inset-0 bg-tech-grid pointer-events-none z-0"></div>
          <div className="layout-container flex flex-col w-full items-center py-12 md:py-20 px-4 md:px-10 lg:px-20 relative z-10 grow">
            <div className="layout-content-container flex flex-col max-w-7xl w-full z-10">
              {/* Header */}
              <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col md:flex-row justify-between items-start lg:items-end mb-12 border-b border-slate-200 pb-6"
              >
                <div className="flex flex-col gap-2">
                  <m.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="heading-section leading-tight tracking-[-0.02em] uppercase"
                  >
                    All{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-400">
                      Projects
                    </span>
                  </m.h2>
                </div>
                <m.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-end gap-2 mt-6 md:mt-0"
                >
                  <p className="body-standard text-slate-600 max-w-sm text-left md:text-right font-light leading-relaxed">
                    An overview of our web development journey, showcasing the
                    experiences that shape our standard.
                  </p>
                  <div className="flex gap-2">
                    <span className="caption text-slate-400">
                      SHOWING {startIndex + 1}-
                      {Math.min(endIndex, PROJECTS.length)} OF {PROJECTS.length}
                    </span>
                  </div>
                </m.div>
              </m.div>

              {/* Projects List */}
              <div className="flex flex-col w-full mb-16 gap-2">
                {paginatedProjects.map((project, index) => (
                  <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <m.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + index * 0.08,
                        ease: "easeOut",
                      }}
                      className="group flex items-center justify-between w-full p-6 border-b border-slate-200 hover:bg-slate-50/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredProject(project.image)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="flex items-center gap-6 md:gap-12">
                        <span className="caption text-slate-300 group-hover:text-primary transition-colors duration-300">
                          {String(startIndex + index + 1).padStart(2, "0")}
                        </span>
                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                          <h3 className="heading-card uppercase tracking-tight text-slate-800 group-hover:text-primary transition-colors duration-300">
                            {project.title}
                          </h3>
                          <span className="caption text-slate-400 uppercase tracking-widest md:border-l md:border-slate-300 md:pl-4">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {/* Status Tag */}
                        {project.status !== "live" && (
                          <span
                            className={`caption font-bold uppercase tracking-wider px-3 py-2 rounded-md opacity-80 ${
                              project.status === "wip"
                                ? "bg-primary text-white"
                                : "bg-amber-600 text-white"
                            }`}
                          >
                            {project.status === "wip"
                              ? "in progress"
                              : "Sample"}
                          </span>
                        )}
                        <span className="hidden md:inline-block body-small text-slate-400 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
                          View Site
                        </span>
                        <div className="w-10 h-10 flex shrink-0 items-center justify-center border border-slate-200 text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                          <Icon name="arrow_outward" size={14} />
                        </div>
                      </div>
                    </m.div>
                  </a>
                ))}
              </div>

              {/* Pagination */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                className="flex justify-between items-center w-full border-t border-slate-200 pt-8"
              >
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="group relative flex items-center justify-center h-12 px-6 bg-transparent text-slate-400 button-text-standard hover:text-slate-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Icon name="arrow_back" size={14} />
                    Previous
                  </span>
                </button>
                <div className="flex gap-2">
                  {getPageNumbers().map((page, idx) =>
                    page === "..." ? (
                      <span
                        key={`ellipsis-${idx}`}
                        className="w-10 h-10 flex items-center justify-center text-slate-400 caption"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page as number)}
                        className={`w-10 h-10 flex items-center justify-center caption font-bold transition-colors ${
                          currentPage === page
                            ? "bg-transparent border-2 border-primary text-primary"
                            : "bg-transparent border border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </div>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="group relative flex items-center justify-center h-12 px-6 bg-transparent text-slate-800 button-text-standard hover:text-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Next
                    <Icon
                      name="arrow_forward"
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </button>
              </m.div>
            </div>
          </div>
        </div>

        {/* Cursor Preview */}
        <CursorPreview imageUrl={hoveredProject} position={mousePosition} />
      </section>
    </MotionProvider>
  );
}
