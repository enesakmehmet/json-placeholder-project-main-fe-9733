// Animasyon varyantları ve konfigürasyonları
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

export const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 }
};

export const slideDownVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
};

export const slideLeftVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 }
};

export const slideRightVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
};

export const scaleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 }
};

export const rotateVariants = {
  hidden: { rotate: -5, opacity: 0 },
  visible: { rotate: 0, opacity: 1 },
  exit: { rotate: 5, opacity: 0 }
};

export const flipVariants = {
  hidden: { rotateY: 90, opacity: 0 },
  visible: { rotateY: 0, opacity: 1 },
  exit: { rotateY: -90, opacity: 0 }
};

export const bounceVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  exit: { 
    y: -50, 
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

// Transition presets
export const transitions = {
  default: { duration: 0.4, ease: "easeInOut" },
  slow: { duration: 0.7, ease: "easeInOut" },
  fast: { duration: 0.2, ease: "easeInOut" },
  spring: { type: "spring", stiffness: 300, damping: 20 },
  bounce: { type: "spring", stiffness: 300, damping: 10 },
  elastic: { type: "spring", stiffness: 400, damping: 8 }
};

// Stagger presets
export const staggerChildren = {
  default: { staggerChildren: 0.1 },
  fast: { staggerChildren: 0.05 },
  slow: { staggerChildren: 0.2 }
};

// Hover ve tap animasyonları
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

// Sayfa geçiş animasyonları
export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export const pageTransitions = {
  default: { type: 'tween', ease: 'anticipate', duration: 0.4 },
  slow: { type: 'tween', ease: 'anticipate', duration: 0.7 },
  fast: { type: 'tween', ease: 'anticipate', duration: 0.2 },
};
