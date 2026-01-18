"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { MotionProvider } from "./components/LazyMotion";

// Dynamic imports for below-the-fold components
const SloganSection = dynamic(() => import("./components/SloganSection"), {
  ssr: true,
});
const TeamSection = dynamic(() => import("./components/TeamSection"), {
  ssr: true,
});
const FeaturedWork = dynamic(() => import("./components/FeaturedWork"), {
  ssr: true,
});
const Services = dynamic(() => import("./components/Services"), {
  ssr: true,
});
const Process = dynamic(() => import("./components/Process"), {
  ssr: true,
});
const Contact = dynamic(() => import("./components/Contact"), {
  ssr: true,
});

export default function Home() {
  useEffect(() => {
    // Only scroll if there's no hash (section) in the URL
    if (!window.location.hash) {
      // Use setTimeout to ensure this runs after Next.js scroll restoration
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  }, []);

  return (
    <MotionProvider>
      <div className="relative flex flex-col min-h-screen w-full bg-background-light text-slate-900 font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
        <Header />
        <Hero />
        <SloganSection />
        <TeamSection />
        <FeaturedWork />
        <Services />
        <Process />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </MotionProvider>
  );
}
