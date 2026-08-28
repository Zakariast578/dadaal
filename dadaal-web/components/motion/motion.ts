// components/motion/motion.ts

export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.2,
  base: 0.3,
  slow: 0.6,
  slower: 0.8,
  reveal: 1,
} as const;

export const DEFAULT_VIEWPORT = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px",
} as const;

export const STAGGER = {
  tight: 0.06,
  base: 0.1,
  relaxed: 0.14,
} as const;

export const DISTANCE = {
  subtle: 16,
  base: 24,
  medium: 32,
  large: 40,
} as const;