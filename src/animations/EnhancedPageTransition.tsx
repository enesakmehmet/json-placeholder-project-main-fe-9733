import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import * as variants from './animationVariants';

type TransitionType = 
  | 'fade'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scale'
  | 'rotate'
  | 'flip'
  | 'bounce';

type TransitionSpeed = 'default' | 'slow' | 'fast' | 'spring' | 'bounce' | 'elastic';

interface EnhancedPageTransitionProps {
  children: ReactNode;
  type?: TransitionType;
  speed?: TransitionSpeed;
  className?: string;
  style?: React.CSSProperties;
}

const getVariant = (type: TransitionType) => {
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
    default: return variants.pageTransitionVariants;
  }
};

const getTransition = (speed: TransitionSpeed) => {
  return variants.transitions[speed] || variants.transitions.default;
};

const EnhancedPageTransition = ({ 
  children, 
  type = 'slideUp', 
  speed = 'default',
  className = '',
  style = {}
}: EnhancedPageTransitionProps) => {
  const selectedVariant = getVariant(type);
  const selectedTransition = getTransition(speed);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={selectedVariant}
      transition={selectedTransition}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default EnhancedPageTransition;
