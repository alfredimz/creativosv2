import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.scss';

/**
 * Accessible Loading Spinner Component
 * WCAG 2.1 AA compliant with aria-live and aria-busy
 */
const LoadingSpinner = ({
  message = 'Cargando...',
  size = 'md',
  fullPage = false,
  className = ''
}) => {
  const spinnerSize = size === 'sm' ? 'sm' : undefined;

  const spinner = (
    <div
      className={`loading-spinner ${fullPage ? 'loading-spinner--fullpage' : ''} ${className}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <Spinner
        animation="border"
        size={spinnerSize}
        className="loading-spinner__icon"
      />
      <span className="loading-spinner__text">
        {message}
      </span>
      {/* Hidden text for screen readers */}
      <span className="sr-only">{message}</span>
    </div>
  );

  return fullPage ? (
    <div className="loading-spinner-container">
      {spinner}
    </div>
  ) : spinner;
};

export default LoadingSpinner;
