import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import * as variants from './animationVariants';

type AnimationType = 
  | 'fade'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scale'
  | 'rotate'
  | 'flip'
  | 'bounce';

type TransitionType = 'default' | 'slow' | 'fast' | 'spring' | 'bounce' | 'elastic';

interface AnimatedElementProps {
  children: ReactNode;
  type?: AnimationType;
  transition?: TransitionType;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  whileHover?: boolean;
  whileTap?: boolean;
  repeat?: boolean;
  repeatType?: 'loop' | 'reverse' | 'mirror';
  repeatDelay?: number;
}

const getVariant = (type: AnimationType) => {
  switch (type) {
    case 'fade': return variants.fadeVariants;
    case 'slideUp': return variants.slideUpVariants;
    case 'slideDown': return variants.slideDownVariants;
    case 'slideLeft': return variants.slideLeftVariants;
    case 'slideRight': return variants.slideRightVariants;
    case 'scale': return variants.scaleVariants;
    case 'rotate': return variants.rotateVariants;
    case 'flip': return variants.flipVariants;
    case 'bounce': return variants.bounceVariants;
    default: return variants.fadeVariants;
  }
};

const getTransition = (type: TransitionType, delay: number = 0, duration?: number) => {
  const baseTransition = variants.transitions[type] || variants.transitions.default;
  return {
    ...baseTransition,
    delay,
    ...(duration ? { duration } : {})
  };
};

const AnimatedElement = ({ 
  children, 
  type = 'fade', 
  transition = 'default', 
  delay = 0,
  duration,
  className = '',
  style = {},
  whileHover = false,
  whileTap = false,
  repeat = false,
  repeatType = 'loop',
  repeatDelay = 0
}: AnimatedElementProps) => {
  const selectedVariant = getVariant(type);
  const selectedTransition = getTransition(transition, delay, duration);

  return (
    <motion.div
      initial="hidden"
      animate={{
        ...selectedVariant.visible,
        transition: {
          ...selectedTransition,
          repeat: repeat ? Infinity : 0,
          repeatType: repeatType,
          repeatDelay: repeatDelay
        }
      }}
      exit="exit"
      variants={selectedVariant}
      className={className}
      style={style}
      whileHover={whileHover ? variants.hoverScale : undefined}
      whileTap={whileTap ? variants.tapScale : undefined}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
