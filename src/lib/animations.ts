import { TargetAndTransition, VariantLabels, Variants } from 'framer-motion';

export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none',
  delay = 0,
  duration = 0.5
): Variants => {
  let initial: { y?: number; x?: number; opacity: number } = {
    opacity: 0,
  };

  if (direction === 'up') initial.y = 40;
  if (direction === 'down') initial.y = -40;
  if (direction === 'left') initial.x = 40;
  if (direction === 'right') initial.x = -40;

  return {
    initial: initial,
    animate: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren?: number
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const matrixReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeInOut',
    },
  }),
};

export const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
};

export const cardHover = (
  delay = 0
): {
  initial: { y: number; opacity: number };
  animate: TargetAndTransition | VariantLabels;
  whileHover: { y: number; boxShadow: string };
} => {
  return {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    whileHover: {
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 255, 136, 0.1), 0 10px 10px -5px rgba(0, 255, 136, 0.04)',
    },
  };
};