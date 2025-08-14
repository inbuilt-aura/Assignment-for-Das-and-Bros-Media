import type { Variants, Transition } from "framer-motion"

// Animation variants with proper TypeScript types
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 }
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

// Transition configurations
export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20
}

export const easeTransition: Transition = {
  duration: 0.6,
  ease: "easeOut"
}

// Hover animations with proper types
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: springTransition
}

export const hoverLift = {
  whileHover: { y: -5 },
  transition: springTransition
}