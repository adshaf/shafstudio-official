"use client";

import { AnimatePresence } from "framer-motion";
import { m } from "./LazyMotion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";

interface MenuItem {
  label: string;
  href: string;
  isPage?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Pricing", href: "/pricing", isPage: true },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-slate-200">
              <h2 className="heading-card uppercase">
                Menu
              </h2>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 hover:bg-slate-100 transition-colors rounded"
                aria-label="Close menu"
              >
                <Icon name="close" className="text-slate-900" size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 py-8">
              <ul className="flex flex-col gap-2">
                {menuItems.map((item, index) => (
                  <m.li
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={
                        item.isPage
                          ? item.href
                          : pathname === "/"
                            ? item.href
                            : `/${item.href}`
                      }
                      className="flex items-center justify-between px-4 py-3 text-slate-700 hover:text-primary hover:bg-blue-50 transition-all duration-200 heading-minor"
                      onClick={onClose}
                    >
                      {item.label}
                      <Icon name="arrow_forward" size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </m.li>
                ))}
              </ul>
            </nav>

            {/* Footer CTA */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="px-6 py-6 border-t border-slate-200"
            >
              <Link
                href={pathname === "/" ? "#contact" : "/#contact"}
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 button-text-standard hover:bg-blue-600 transition-colors shadow-lg shadow-primary/20"
              >
                Got questions?
                <Icon name="arrow_forward" size={14} />
              </Link>
            </m.div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
