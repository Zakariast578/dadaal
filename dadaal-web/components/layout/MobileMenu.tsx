"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Link from "next/link";
import { X } from "lucide-react";
// Adjust this import to match where you placed motion.ts in your project
import { EASE_PREMIUM, DURATION } from "../motion/motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const shouldReduceMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Escape to close + move focus into the drawer
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.base, ease: EASE_PREMIUM }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Slide-over Drawer */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xs bg-white p-6 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <span className="font-heading font-extrabold text-xl text-dadaal-blue">
                  DADAAL
                </span>
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="p-2 text-slate-500 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-dadaal-blue rounded-full"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links — staggered reveal on open */}
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: shouldReduceMotion ? 0 : 0.06, delayChildren: 0.15 },
                  },
                }}
                className="mt-8 flex flex-col space-y-5"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: DURATION.base, ease: EASE_PREMIUM },
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="font-heading text-lg font-semibold text-slate-800 hover:text-dadaal-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </div>

            {/* CTA Button */}
            <div className="pt-6 border-t border-slate-100">
              <Link
                href="/get-involved"
                onClick={onClose}
                className="btn-primary w-full justify-center"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}