"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-1 md:px-12 lg:px-20 border-b border-slate-900/5 backdrop-blur-sm transition-all duration-300 ${
          scrolled ? "bg-white/50" : "bg-white/0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center text-slate-900 relative">
            <div className="flex h-20 w-20 items-center justify-center relative">
              <Image
                src="/assets/images/Logo-coloured-no-bg.png"
                alt="shafstudio logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-3xl text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600 absolute top-6 left-17">
              shafstudio
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              href="#services"
            >
              Services
            </a>
            <a
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              href="#work"
            >
              Work
            </a>
            <a
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              href="#about"
            >
              About
            </a>
            <a
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden lg:flex h-10 items-center justify-center rounded bg-primary hover:bg-blue-600 px-6 text-sm font-bold text-white transition-all shadow-lg shadow-primary/20">
              Get Started
            </a>
            <button
              className="flex md:hidden items-center justify-center text-slate-900 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
