// Animation utilities for consistent use across components

// Fade in animation with optional Y translation
export const fadeIn = (delay: number = 0, duration: number = 700) => {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: delay / 1000,
        duration: duration / 1000,
        ease: [0.215, 0.61, 0.355, 1] // cubic-bezier easing
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: (duration / 2) / 1000
      }
    }
  };
};

// Slide up animation
export const slideUp = (delay: number = 0, duration: number = 700) => {
  return {
    initial: { y: 100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        delay: delay / 1000,
        duration: duration / 1000,
        ease: [0.215, 0.61, 0.355, 1]
      }
    },
    exit: { 
      y: 50, 
      opacity: 0,
      transition: {
        duration: (duration / 2) / 1000
      }
    }
  };
};

// Scale animation (grow/shrink)
export const scale = (delay: number = 0, duration: number = 700) => {
  return {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        delay: delay / 1000,
        duration: duration / 1000,
        ease: [0.215, 0.61, 0.355, 1]
      }
    },
    exit: { 
      scale: 0.95, 
      opacity: 0,
      transition: {
        duration: (duration / 2) / 1000
      }
    }
  };
};

// Staggered children animation
export const staggerContainer = (
  staggerChildren: number = 0.1, 
  delayChildren: number = 0
) => {
  return {
    initial: {},
    animate: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren / 1000
      }
    }
  };
};

// Text animation (character by character)
export const textAnimation = (delay: number = 0) => {
  return {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        delay: delay / 1000,
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
};

// Glow pulse animation for highlights
export const glowPulse = (delay: number = 0, duration: number = 2000) => {
  return {
    initial: { opacity: 0.7, boxShadow: "0 0 0 rgba(99, 102, 241, 0)" },
    animate: {
      opacity: 1,
      boxShadow: [
        "0 0 0 rgba(99, 102, 241, 0)",
        "0 0 20px rgba(99, 102, 241, 0.7)",
        "0 0 0 rgba(99, 102, 241, 0)"
      ],
      transition: {
        delay: delay / 1000,
        duration: duration / 1000,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };
};