import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import * as variants from './animationVariants';

type StaggerType = 'default' | 'fast' | 'slow';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  staggerType?: StaggerType;
  delayChildren?: number;
}

const StaggerContainer = ({
  children,
  className = '',
  style = {},
  staggerType = 'default',
  delayChildren = 0
}: StaggerContainerProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ...variants.staggerChildren[staggerType],
        delayChildren
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
