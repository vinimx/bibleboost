import { motion } from "framer-motion";

// Variantes para animações de página
export const pageVariants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 20,
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// Variantes para animações de elementos
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Variantes para animações de hover
export const buttonHover = {
  scale: 1.05,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10,
  },
};

// Variantes para animações de scroll
export const scrollReveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Componentes animados reutilizáveis
export const AnimatedPage = motion.div;
export const AnimatedButton = motion.button;
export const AnimatedSection = motion.section;
