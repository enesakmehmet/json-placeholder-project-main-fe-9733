import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

type ScrollEffectType = 
  | 'fadeIn'
  | 'fadeOut'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scale'
  | 'rotate';

interface ScrollAnimationProps {
  children: ReactNode;
  effect?: ScrollEffectType;
  threshold?: [number, number]; // [start, end] görünürlük yüzdesi
  className?: string;
  style?: React.CSSProperties;
}

const ScrollAnimation = ({
  children,
  effect = 'fadeIn',
  threshold = [0, 1],
  className = '',
  style = {}
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Efekt tipine göre animasyon değerlerini belirle
  const getAnimationValues = () => {
    switch (effect) {
      case 'fadeIn':
        return {
          opacity: useTransform(scrollYProgress, threshold, [0, 1])
        };
      case 'fadeOut':
        return {
          opacity: useTransform(scrollYProgress, threshold, [1, 0])
        };
      case 'slideUp':
        return {
          opacity: useTransform(scrollYProgress, threshold, [0, 1]),
          y: useTransform(scrollYProgress, threshold, [50, 0])
        };
      case 'slideDown':
        return {
          opacity: useTransform(scrollYProgress, threshold, [0, 1]),
          y: useTransform(scrollYProgress, threshold, [-50, 0])
        };
      case 'slideLeft':
        return {
          opacity: useTransform(scrollYProgress, threshold, [0, 1]),
          x: useTransform(scrollYProgress, threshold, [50, 0])
        };
      case 'slideRight':
        return {
          opacity: useTransform(scrollYProgress, threshold, [0, 1]),
          x: useTransform(scrollYProgress, threshold, [-50, 0])
        };
      case 'scale':
        return {
          opacity: useTransform(scrollYProgress, threshold, [0, 1]),
          scale: useTransform(scrollYProgress, threshold, [0.8, 1])
        };
      case 'rotate':
        return {
          opacity: useTransform(scrollYProgress, threshold, [0, 1]),
          rotate: useTransform(scrollYProgress, threshold, [10, 0])
        };
      default:
        return {
          opacity: useTransform(scrollYProgress, threshold, [0, 1])
        };
    }
  };

  const animationValues = getAnimationValues();

  return (
    <motion.div
      ref={ref}
      style={{
        ...style,
        ...animationValues
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
