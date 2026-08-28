"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

import { EASE_PREMIUM, DURATION, DEFAULT_VIEWPORT } from "./motion";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: SlideInProps) {
  const shouldReduceMotion = useReducedMotion();

  const x = direction === "left" ? -48 : 48;

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, x }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0 }
      }
      viewport={DEFAULT_VIEWPORT}
      transition={{
        duration: DURATION.slow,
        delay,
        ease: EASE_PREMIUM,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}