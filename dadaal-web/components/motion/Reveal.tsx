"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

import {
  EASE_PREMIUM,
  DURATION,
  DEFAULT_VIEWPORT,
} from "./motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  scale?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = DURATION.slower,
  scale = 1.04,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              scale,
            }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              scale: 1,
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