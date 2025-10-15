import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaExclamationCircle, FaRedo } from 'react-icons/fa';
import './LazyLoadError.scss';

/**
 * Lazy Load Error Component
 * Displayed when a lazy-loaded component fails to load
 * Provides retry option and helpful guidance
 */
const LazyLoadError = ({ error, resetErrorBoundary }) => {
  const handleRetry = () => {
    // Clear any cached modules that might be corrupted
    if (resetErrorBoundary) {
      resetErrorBoundary();
    } else {
      // Fallback: reload the page
      window.location.reload();
    }
  };

  return (
    <div className="lazy-load-error">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} className="text-center">
            <div className="lazy-load-error__icon">
              <FaExclamationCircle aria-hidden="true" />
            </div>

            <h2 className="lazy-load-error__title">
              Error al cargar el contenido
            </h2>

            <p className="lazy-load-error__description">
              No pudimos cargar esta página. Esto puede deberse a una conexión lenta
              o a un problema temporal.
            </p>

            <div className="lazy-load-error__actions">
              <Button
                variant="primary"
                onClick={handleRetry}
                className="lazy-load-error__button"
                aria-label="Reintentar carga de página"
              >
                <FaRedo aria-hidden="true" />
                Reintentar
              </Button>
            </div>

            {error && process.env.NODE_ENV === 'development' && (
              <div className="lazy-load-error__debug">
                <details>
                  <summary>Error Details (Development)</summary>
                  <pre>{error.toString()}</pre>
                </details>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LazyLoadError;
