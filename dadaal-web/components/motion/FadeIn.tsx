"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

import {
  EASE_PREMIUM,
  DURATION,
  DEFAULT_VIEWPORT,
} from "./motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = DURATION.slow,
  className = "",
  once = true,
  amount = DEFAULT_VIEWPORT.amount,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        ...DEFAULT_VIEWPORT,
        once,
        amount,
      }}
      transition={{
        duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: EASE_PREMIUM,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}