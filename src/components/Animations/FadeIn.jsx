import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * FadeIn Component
 * Anima elementos con fade in cuando entran al viewport
 *
 * @param {ReactNode} children - Contenido a animar
 * @param {number} delay - Retraso antes de iniciar animación (en segundos)
 * @param {number} duration - Duración de la animación (en segundos)
 * @param {number} threshold - Porcentaje del elemento visible para trigger (0-1)
 * @param {string} className - Clases CSS adicionales
 */
const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  className = '',
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
