"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TESTIMONIALS } from "@/app/constants";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: false,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const testimonials = TESTIMONIALS;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="testimonials"
      className="font-display bg-gradient-custom text-text-main antialiased overflow-x-hidden selection:bg-primary/30"
    >
      <div className="relative flex h-auto w-full flex-col group/design-root">
        <main className="layout-container flex h-full grow flex-col items-center justify-center">
          <div className="px-6 md:px-20 lg:px-40 flex flex-1 justify-center items-center py-20 md:py-40 w-full">
            <div className="layout-content-container flex flex-col max-w-7xl w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-2 mb-12 border-l-4 border-primary pl-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary"></span>
                  <p className="label-uppercase">
                    Feedback
                  </p>
                </div>
                <h2 className="heading-major">
                  Client Success
                </h2>
                <p className="body-large mt-2 max-w-2xl">
                  Don&apos;t just take our word for it - here&apos;s what our
                  previous clients say about working with us.
                </p>
              </motion.div>

              {/* Carousel Container */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative mb-16"
              >
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex -ml-8">
                    {testimonials.map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="flex-[0_0_100%] min-w-0 pl-8 md:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%)]"
                      >
                        <div className="group relative flex flex-col h-full card-gradient border border-blue-200/60 p-8 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 rounded-none shadow-sm">
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

                          <p className="body-large text-slate-700 mb-8 grow">
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
                              <p className="heading-minor uppercase">
                                {testimonial.name}
                              </p>
                              <p className="caption text-primary mt-1">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-4 mt-12">
                  <button
                    onClick={scrollPrev}
                    className="flex items-center justify-center w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous testimonials"
                  >
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === selectedIndex
                            ? "bg-primary w-8"
                            : "bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={scrollNext}
                    className="flex items-center justify-center w-12 h-12 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next testimonials"
                  >
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
