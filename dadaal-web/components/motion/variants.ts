// components/motion/variants.ts

import { Variants } from "motion/react";

import {
  EASE_PREMIUM,
  DURATION,
  STAGGER,
  DISTANCE,
} from "./motion";

/**
 * Standard content entrance.
 */
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: DISTANCE.base,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Subtle opacity-only entrance.
 */
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Subtle image / media reveal.
 */
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.slower,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Stagger parent.
 */
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.base,
      delayChildren: 0,
    },
  },
};

/**
 * Stagger child.
 */
export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: DISTANCE.base,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.base + 0.2,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Content entering from the left.
 */
export const slideInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -DISTANCE.medium,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE_PREMIUM,
    },
  },
};

/**
 * Content entering from the right.
 */
export const slideInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: DISTANCE.medium,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE_PREMIUM,
    },
  },
};