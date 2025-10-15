import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaBug, FaHome, FaRedo } from 'react-icons/fa';
import './ErrorBoundary.scss';

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the component tree
 * Logs errors and displays fallback UI
 *
 * Note: Error boundaries do NOT catch errors for:
 * - Event handlers (use try-catch)
 * - Asynchronous code (setTimeout, promises)
 * - Server-side rendering
 * - Errors thrown in the error boundary itself
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // You can also log to an error reporting service here
    // Example: logErrorToService(error, errorInfo);

    this.setState(prevState => ({
      error,
      errorInfo,
      errorCount: prevState.errorCount + 1
    }));

    // Track error in analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'javascript_error',
        error: {
          message: error.toString(),
          stack: errorInfo.componentStack,
          count: this.state.errorCount + 1
        }
      });
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      const { error, errorInfo } = this.state;
      const isDevelopment = process.env.NODE_ENV === 'development';

      return (
        <div className="error-boundary">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                {/* Error Icon */}
                <div className="error-boundary__icon">
                  <FaBug aria-hidden="true" />
                </div>

                {/* Error Title */}
                <h1 className="error-boundary__title">
                  Algo salió mal
                </h1>

                {/* Error Description */}
                <p className="error-boundary__description">
                  Lo sentimos, ha ocurrido un error inesperado.
                  Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo.
                </p>

                {/* Development Error Details */}
                {isDevelopment && error && (
                  <div className="error-boundary__details">
                    <h3 className="error-boundary__details-title">
                      Detalles del Error (Solo en Desarrollo):
                    </h3>
                    <div className="error-boundary__error-message">
                      <strong>Error:</strong> {error.toString()}
                    </div>
                    {errorInfo && (
                      <details className="error-boundary__stack">
                        <summary>Stack Trace</summary>
                        <pre>{errorInfo.componentStack}</pre>
                      </details>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="error-boundary__actions">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={this.handleReset}
                    className="error-boundary__button error-boundary__button--primary"
                    aria-label="Intentar nuevamente"
                  >
                    <FaRedo aria-hidden="true" />
                    Intentar nuevamente
                  </Button>

                  <Link
                    to="/"
                    className="error-boundary__button error-boundary__button--secondary"
                    onClick={this.handleReset}
                  >
                    <FaHome aria-hidden="true" />
                    Volver al Inicio
                  </Link>
                </div>

                {/* Contact Support */}
                <div className="error-boundary__support">
                  <p>
                    Si el problema persiste,{' '}
                    <Link to="/contacto" onClick={this.handleReset}>
                      contáctanos
                    </Link>{' '}
                    y te ayudaremos a resolverlo.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
