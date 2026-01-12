"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  // Scroll to top when clicking logo
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      // If already on homepage, smooth scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // If navigating from another page, Next.js will handle the navigation
    // and the homepage will need to scroll to top on mount
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-1 md:px-12 lg:px-20 border-b border-slate-900/5 backdrop-blur-sm transition-all duration-300 ${
          scrolled ? "bg-white/80" : "bg-white/0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center text-slate-900 relative"
            onClick={handleLogoClick}
          >
            <div className="flex h-20 w-50 items-center justify-center relative hover:scale-105 transition ease-in-out">
              <Image
                src="/assets/images/logo-coloured-no-bg.png"
                alt="shafstudio logo"
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link
              className="link-nav"
              href={pathname === "/" ? "#about" : "/#about"}
            >
              About
            </Link>
            <Link
              className="link-nav"
              href={pathname === "/" ? "#work" : "/#work"}
            >
              Work
            </Link>
            <Link
              className="link-nav"
              href={pathname === "/" ? "#services" : "/#services"}
            >
              Services
            </Link>
            <Link
              className="link-nav"
              href={pathname === "/" ? "#process" : "/#process"}
            >
              Process
            </Link>
            <Link
              className="link-nav"
              href={pathname === "/" ? "#testimonials" : "/#testimonials"}
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href={pathname === "/" ? "#contact" : "/#contact"}
              className="hidden lg:flex h-10 items-center justify-center rounded bg-primary hover:bg-blue-600 px-6 button-text-standard text-white transition-all shadow-lg shadow-primary/20"
            >
              Got questions?
            </Link>
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
