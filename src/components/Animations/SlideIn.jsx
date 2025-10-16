import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * SlideIn Component
 * Anima elementos con slide desde una dirección cuando entran al viewport
 *
 * @param {ReactNode} children - Contenido a animar
 * @param {string} direction - Dirección del slide: 'left', 'right', 'up', 'down'
 * @param {number} distance - Distancia del slide en pixels
 * @param {number} delay - Retraso antes de iniciar animación (en segundos)
 * @param {number} duration - Duración de la animación (en segundos)
 * @param {number} threshold - Porcentaje del elemento visible para trigger (0-1)
 * @param {string} className - Clases CSS adicionales
 */
const SlideIn = ({
  children,
  direction = 'up',
  distance = 50,
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

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -distance, y: 0 };
      case 'right':
        return { x: distance, y: 0 };
      case 'up':
        return { x: 0, y: distance };
      case 'down':
        return { x: 0, y: -distance };
      default:
        return { x: 0, y: distance };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
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

export default SlideIn;
