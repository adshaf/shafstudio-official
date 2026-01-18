"use client";

import { FOOTER_LINKS } from "@/app/constants";
import Image from "next/image";
import { m } from "./LazyMotion";

export default function Footer() {
  const links = FOOTER_LINKS;

  return (
    <footer className="relative bg-[#f6f7f8] border-t border-slate-200 font-display overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-40"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-20 py-10">
        {/* Top Section - Logo and Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 border-b border-slate-200/60">
          {/* Logo */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <div className="relative w-40 h-16">
              <Image
                src="/assets/images/logo-black-no-bg.png"
                alt="Shafstudio Logo"
                fill
                className="object-cover object-left"
              />
            </div>
          </m.div>
        </div>

        {/* Bottom Section - Links and Copyright */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 order-2 md:order-1">
            <span className="w-1 h-1 bg-primary"></span>
            <p className="caption text-slate-600">
              © {new Date().getFullYear()} Shafstudio. All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-6 order-1 md:order-2">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="caption text-slate-600 hover:text-primary uppercase transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </m.div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary to-transparent opacity-20"></div>
    </footer>
  );
}
