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

interface StaggerItemProps {
  children: ReactNode;
  type?: AnimationType;
  className?: string;
  style?: React.CSSProperties;
  whileHover?: boolean;
  whileTap?: boolean;
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

const StaggerItem = ({
  children,
  type = 'fade',
  className = '',
  style = {},
  whileHover = false,
  whileTap = false
}: StaggerItemProps) => {
  const selectedVariant = getVariant(type);

  return (
    <motion.div
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

export default StaggerItem;
