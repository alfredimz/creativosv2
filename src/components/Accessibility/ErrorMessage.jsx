import React from 'react';
import { FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import './ErrorMessage.scss';

/**
 * Accessible Message Component
 * WCAG 2.1 AA compliant with role="alert" or role="status" for screen readers
 * Supports error, warning, and success messages
 */
const ErrorMessage = ({ message, type = 'error', className = '' }) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle aria-hidden="true" />;
      case 'error':
        return <FaExclamationTriangle aria-hidden="true" />;
      case 'warning':
        return <FaExclamationTriangle aria-hidden="true" />;
      default:
        return null;
    }
  };

  // Success messages use role="status" with polite announcement
  const role = type === 'success' ? 'status' : 'alert';
  const ariaLive = type === 'success' ? 'polite' : 'assertive';

  return (
    <div
      className={`error-message error-message--${type} ${className}`}
      role={role}
      aria-live={ariaLive}
    >
      {getIcon()}
      <span className="error-message__text">{message}</span>
    </div>
  );
};

export default ErrorMessage;
