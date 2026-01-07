"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const testimonials = [
    {
      id: 1,
      quote:
        "The technical precision they brought to our SaaS platform was unmatched. They transformed our messy legacy code into a streamlined masterpiece.",
      name: "John Doe",
      role: "CTO @ TechFlow",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCAznlp__BIek5HA0DcrhGxSWSIHpK_y3bPG4TcqeipFtg9NN7xrK8CuKGFQgCEkn_2esxJzhI40UuywZ5d5TBQgoKuedu2xQUHstB7Iks7IbYMmlm7gC-3sYvwy2P5eZo6B_rbu9Ekl9NFYa6UxX7CAaoTFLkUuEvdsnUjp1GZJ-mcIjEkqspjyEOtJSozCuk-1nfAzRlpXnjf2Gd8fxOmkqZ2EclIPUDF5XlG8AjcEPBP93Y2tVcyyj6-OEsEiehZtOp2cjhujr0",
    },
    {
      id: 2,
      quote:
        "Finally, a design partner that actually understands code structure. The handover was seamless and the components were perfectly modular.",
      name: "Sarah Smith",
      role: "Founder @ GridLock",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyBXgOoBBQoWhIjPV6xsQCAGECPcpxsaKDF5McA2zWlhX-6JWJkXkaYlaM4zEzJ2Oz6xylkKMARrW9odZmafZE_E2Mfau0rUWsaFP9998dJ_2_j_cE2iE08niUu0EJFMsNeKf977iq_jdpBXmVrXDC4s5kdD4MSTDigZ1MFe2pRz1XFVZex5-5qKQ7aBMyKI-xRebb45Jl2bmyE6t4bHB3OVFq-UXAhurf_rdjjhpIVQu96a0QquCH2zqJbiuJ2enZTG-dy6SBggQ",
    },
    {
      id: 3,
      quote:
        "Modern, fast, and incredibly professional delivery. The aesthetic they created for BlueSky set us apart in a crowded marketplace.",
      name: "Mike Ross",
      role: "Product Lead @ BlueSky",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCOCJSVR2uz2NigIqe3PWWfkanRxBtc2ove1xfY2yGMCEKZ8ACxCuBzFTR-aBVbVFD8yXJBTasUAk7eUsQ6HdeLNQUg91F49Qitkds36xDojCsMR1TDAVtzjMfaQvenNJTP-MXy7xakA8xwM4qdLXgtd9vjnH_fXyxIj_iyR340_4hROzNgG1rX5JxoPZXlbhu5KqiNnL-64S8Wn9ezE7tobwtIpPiDQUt8IiHnTAYdAoZ178IQs8F3gDXj6SxuCrpKiGq6f1v5hW4",
    },
    {
      id: 4,
      quote:
        "Their attention to detail and commitment to quality is exceptional. They delivered a platform that exceeded all our expectations.",
      name: "Emma Wilson",
      role: "CEO @ FinTech Pro",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCAznlp__BIek5HA0DcrhGxSWSIHpK_y3bPG4TcqeipFtg9NN7xrK8CuKGFQgCEkn_2esxJzhI40UuywZ5d5TBQgoKuedu2xQUHstB7Iks7IbYMmlm7gC-3sYvwy2P5eZo6B_rbu9Ekl9NFYa6UxX7CAaoTFLkUuEvdsnUjp1GZJ-mcIjEkqspjyEOtJSozCuk-1nfAzRlpXnjf2Gd8fxOmkqZ2EclIPUDF5XlG8AjcEPBP93Y2tVcyyj6-OEsEiehZtOp2cjhujr0",
    },
    {
      id: 5,
      quote:
        "Working with this team was a game-changer. They brought our vision to life with incredible speed and precision.",
      name: "David Chen",
      role: "Founder @ StartupHub",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAyBXgOoBBQoWhIjPV6xsQCAGECPcpxsaKDF5McA2zWlhX-6JWJkXkaYlaM4zEzJ2Oz6xylkKMARrW9odZmafZE_E2Mfau0rUWsaFP9998dJ_2_j_cE2iE08niUu0EJFMsNeKf977iq_jdpBXmVrXDC4s5kdD4MSTDigZ1MFe2pRz1XFVZex5-5qKQ7aBMyKI-xRebb45Jl2bmyE6t4bHB3OVFq-UXAhurf_rdjjhpIVQu96a0QquCH2zqJbiuJ2enZTG-dy6SBggQ",
    },
    {
      id: 6,
      quote:
        "The best development partner we've ever worked with. Their technical expertise and creative solutions are unmatched.",
      name: "Lisa Anderson",
      role: "VP Product @ CloudScale",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCOCJSVR2uz2NigIqe3PWWfkanRxBtc2ove1xfY2yGMCEKZ8ACxCuBzFTR-aBVbVFD8yXJBTasUAk7eUsQ6HdeLNQUg91F49Qitkds36xDojCsMR1TDAVtzjMfaQvenNJTP-MXy7xakA8xwM4qdLXgtd9vjnH_fXyxIj_iyR340_4hROzNgG1rX5JxoPZXlbhu5KqiNnL-64S8Wn9ezE7tobwtIpPiDQUt8IiHnTAYdAoZ178IQs8F3gDXj6SxuCrpKiGq6f1v5hW4",
    },
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(3); // Desktop
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <section className="font-display bg-gradient-custom text-text-main antialiased overflow-x-hidden selection:bg-primary/30">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
        <main className="layout-container flex h-full grow flex-col">
          <div className="px-6 md:px-20 lg:px-40 flex flex-1 justify-center py-12 md:py-20">
            <div className="layout-content-container flex flex-col max-w-7xl flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-2 mb-12 border-l-4 border-primary pl-6"
              >
                <p className="text-primary text-sm font-bold tracking-[0.2em] uppercase leading-normal">
                  04 // Feedback
                </p>
                <h2 className="text-slate-900 text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                  Client Success
                </h2>
                <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed mt-2 max-w-2xl">
                  We don&apos;t just build websites; we engineer digital
                  experiences. Here is what our partners have to say about our
                  technical precision.
                </p>
              </motion.div>

              {/* Carousel Container */}
              <div className="relative mb-16">
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                      {visibleTestimonials.map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="group relative flex flex-col h-full card-gradient border border-blue-200/60 p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 rounded-none shadow-sm"
                        >
                          <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary/20 group-hover:border-primary transition-colors"></div>
                          <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-primary/20 group-hover:border-primary transition-colors"></div>
                          <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-primary/20 group-hover:border-primary transition-colors"></div>
                          <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary/20 group-hover:border-primary transition-colors"></div>

                          <div className="mb-6 flex items-start justify-between">
                            <span className="material-symbols-outlined text-4xl text-primary/80">
                              format_quote
                            </span>
                            <div className="h-8 w-auto">
                              <div className="h-6 w-20 bg-linear-to-r from-blue-200 to-indigo-200 opacity-80 rounded-sm"></div>
                            </div>
                          </div>

                          <p className="text-slate-700 text-lg font-normal leading-relaxed mb-8 grow">
                            &quot;{testimonial.quote}&quot;
                          </p>

                          <div className="flex items-center gap-4 pt-6 border-t border-dashed border-blue-200 group-hover:border-primary/30 transition-colors">
                            <div
                              className="w-12 h-12 bg-cover bg-center bg-no-repeat rounded-sm shadow-sm"
                              style={{
                                backgroundImage: `url("${testimonial.image}")`,
                              }}
                            ></div>
                            <div>
                              <p className="text-slate-900 text-base font-bold leading-tight uppercase tracking-wide">
                                {testimonial.name}
                              </p>
                              <p className="text-primary text-xs font-mono mt-1 font-semibold">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-4 mt-12">
                  <button
                    onClick={handlePrev}
                    className="flex items-center justify-center w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous testimonials"
                  >
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-primary w-8"
                            : "bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="flex items-center justify-center w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next testimonials"
                  >
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex justify-center border-t border-blue-200 pt-12">
                <a
                  href="#work"
                  className="group flex min-w-50 cursor-pointer items-center justify-between rounded-none h-14 px-8 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <span className="text-base font-bold leading-normal tracking-wider uppercase mr-4">
                    View Case Studies
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
