"use client";

import { FOOTER_LINKS, SOCIAL_LINKS } from "@/app/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const links = FOOTER_LINKS;
  const socialLinks = SOCIAL_LINKS;

  return (
    <footer className="relative bg-[#f6f7f8] border-t border-slate-200 font-display overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-tech-grid pointer-events-none opacity-40"></div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 py-10">
        {/* Top Section - Logo and Social */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 border-b border-slate-200/60">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2"
          >
            <div className="relative w-32 h-16">
              <Image
                src="/assets/images/Logo-shafstudio-no-bg.svg"
                alt="Shafstudio Logo"
                fill
                className="object-cover object-left"
              />
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative w-10 h-10 bg-white border border-slate-200 hover:border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary"
              >
                <span className="material-symbols-outlined text-lg text-slate-600 group-hover:text-white transition-colors">
                  {social.icon}
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section - Links and Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
        >
          {/* Copyright */}
          <div className="flex items-center gap-2 order-2 md:order-1">
            <span className="w-1 h-1 bg-primary"></span>
            <p className="caption">
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
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>
    </footer>
  );
}
