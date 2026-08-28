"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

import {
  EASE_PREMIUM,
  DURATION,
  DEFAULT_VIEWPORT,
  STAGGER,
  DISTANCE,
} from "./motion";

interface StaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function Stagger({
  children,
  staggerDelay = STAGGER.base,
  delayChildren = 0,
  className = "",
  once = true,
  amount = DEFAULT_VIEWPORT.amount,
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        ...DEFAULT_VIEWPORT,
        once,
        amount,
      }}
      variants={{
        hidden: {
          opacity: 0,
        },

        visible: {
          opacity: 1,
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
            delayChildren: shouldReduceMotion ? 0 : delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}

export function StaggerItem({
  children,
  className = "",
  distance = DISTANCE.base,
  duration = DURATION.base + 0.2,
}: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion
          ? {
              opacity: 0,
            }
          : {
              opacity: 0,
              y: distance,
            },

        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: EASE_PREMIUM,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}