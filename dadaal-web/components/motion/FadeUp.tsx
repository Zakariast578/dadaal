"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

import {
  EASE_PREMIUM,
  DURATION,
  DEFAULT_VIEWPORT,
} from "./motion";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function FadeUp({
  children,
  delay = 0,
  duration = DURATION.slow,
  distance = 30,
  className = "",
  once = true,
  amount = 0.2,
}: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: distance,
            }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        ...DEFAULT_VIEWPORT,
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: EASE_PREMIUM,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}