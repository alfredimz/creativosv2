import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import { SEO } from '../../components/SEO';
import './NotFound.scss';

/**
 * 404 Not Found Page
 * Displayed when user navigates to non-existent route
 * Provides helpful navigation options and search suggestions
 */
const NotFound = () => {
  const navigate = useNavigate();

  const popularLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/tipos-contenedores', label: 'Tipos de Contenedores' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/cotizador-venta', label: 'Cotizador de Venta' },
    { path: '/contacto', label: 'Contacto' },
    { path: '/faq', label: 'Preguntas Frecuentes' }
  ];

  return (
    <div className="not-found-page">
      <SEO
        title="Página no encontrada (404) | Creativos Espacios"
        description="La página que buscas no existe. Explora nuestros contenedores marítimos, servicios y soluciones."
        robots="noindex, follow"
      />

      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            {/* Error Icon */}
            <div className="not-found-page__icon">
              <FaExclamationTriangle aria-hidden="true" />
            </div>

            {/* Error Code */}
            <h1 className="not-found-page__code" aria-label="Error 404">
              404
            </h1>

            {/* Error Message */}
            <h2 className="not-found-page__title">
              Página no encontrada
            </h2>

            <p className="not-found-page__description">
              Lo sentimos, la página que buscas no existe o ha sido movida.
              Puede que el enlace esté roto o que la URL sea incorrecta.
            </p>

            {/* Action Buttons */}
            <div className="not-found-page__actions">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate(-1)}
                className="not-found-page__button not-found-page__button--primary"
                aria-label="Volver a la página anterior"
              >
                Volver Atrás
              </Button>

              <Link to="/" className="not-found-page__button not-found-page__button--secondary">
                <FaHome aria-hidden="true" />
                Ir al Inicio
              </Link>
            </div>

            {/* Popular Links */}
            <div className="not-found-page__suggestions">
              <h3 className="not-found-page__suggestions-title">
                <FaSearch aria-hidden="true" />
                Páginas populares
              </h3>
              <div className="not-found-page__links">
                {popularLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="not-found-page__link"
                    aria-label={`Ir a ${link.label}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Option */}
            <div className="not-found-page__contact">
              <p>
                ¿No encuentras lo que buscas?{' '}
                <Link to="/contacto" className="not-found-page__contact-link">
                  Contáctanos
                </Link>{' '}
                y te ayudaremos.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
