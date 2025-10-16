import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * StaggerChildren Component
 * Anima múltiples hijos con stagger effect (uno después del otro)
 *
 * @param {ReactNode} children - Elementos a animar (array de elementos)
 * @param {number} staggerDelay - Delay entre cada hijo (en segundos)
 * @param {number} duration - Duración de cada animación (en segundos)
 * @param {number} threshold - Porcentaje del elemento visible para trigger (0-1)
 * @param {string} className - Clases CSS adicionales
 */
const StaggerChildren = ({
  children,
  staggerDelay = 0.1,
  duration = 0.5,
  threshold = 0.1,
  className = '',
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerChildren;
