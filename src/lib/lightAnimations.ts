// Lightweight animation utilities to reduce bundle size
import type { Variants } from "framer-motion"

// Only the essential animations we actually use
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
}

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 }
}

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

// Common transition configurations
export const easeTransition = {
  duration: 0.6,
  ease: "easeOut"
}

export const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20
}

// Hover effects
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: springTransition
}

export const hoverLift = {
  whileHover: { y: -5 },
  transition: springTransition
}