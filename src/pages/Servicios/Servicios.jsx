import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // FASE 5: Agregar Link para CTAs
import { SEO, seoConfig } from '../../components/SEO';
import './Servicios.scss';

const Servicios = () => {
  const serviciosPrincipales = [
    {
      title: 'Venta',
      description: 'Ofrecemos contenedores marítimos en diversos tamaños (10, 20 y 40 pies), ya sean usados o nuevos.'
    },
    {
      title: 'Renta',
      description: 'Planes de renta flexibles para tus proyectos a corto o largo plazo.'
    },
    {
      title: 'Modificaciones a la Medida',
      description: 'Desde diseños básicos hasta construcciones completas, tu imaginación es el límite.'
    }
  ];

  const serviciosIntegrales = [
    {
      title: 'Transporte',
      description: 'Traslado a cualquier parte de la República Mexicana, adaptándonos a los plazos de entrega.'
    },
    {
      title: 'Maniobras',
      description: 'Aseguramos la carga y descarga en un proceso ágil y seguro.'
    },
    {
      title: 'Diseño arquitectónico',
      description: 'Atención y asesoramiento cuando lo requieras, acompañarte en todo.'
    },
    {
      title: 'Herrería',
      description: 'Desarrollo de diseños personalizados y únicos para satisfacer tus necesidades.'
    },
    {
      title: 'Instalaciones aplicadas',
      description: 'Eléctrica, hidráulica, sanitaria, gas y red de internet.'
    },
    {
      title: 'Instalación de acabados interiores',
      description: 'Tablaroca, azulejos, piso laminado, pasta texturizada.'
    },
    {
      title: 'Instalación de aislantes térmicos',
      description: 'Fibra de vidrio, madera, foamular, aire acondicionado.'
    },
    {
      title: 'Acabados exteriores',
      description: 'Pintura esmalte, pintura bajo el proceso de sand blast, y bajo normas especificadas.'
    }
  ];

  return (
    <div className="servicios-page">
      <SEO {...seoConfig.servicios} />

      {/* Hero Section */}
      <section className="servicios-hero">
        <Container>
          <h1 className="servicios-hero__title">Nuestros Servicios</h1>
          <p className="servicios-hero__description">
            Transforma tu espacio con nuestros contenedores marítimos. Buscas un almacén seguro, una oficina móvil,
            un hogar único o un espacio comercial, tenemos la solución perfecta para ti. Ofrecemos servicios integrales
            desde la venta y renta hasta la transformación completa de contenedores marítimos.
          </p>
        </Container>
      </section>

      {/* Main Services Section */}
      <section className="servicios-principales">
        <Container>
          <Row>
            {serviciosPrincipales.map((servicio, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="servicios-principales__item">
                  <h2 className="servicios-principales__title">{servicio.title}</h2>
                  <p className="servicios-principales__text">{servicio.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Servicios Integrales Section */}
      <section className="servicios-integrales">
        <Container>
          <h2 className="servicios-integrales__title">Servicios Integrales</h2>
          <Row>
            {serviciosIntegrales.map((servicio, index) => (
              <Col key={index} lg={3} md={6} className="mb-4">
                <div className="servicios-integrales__card">
                  <h3 className="servicios-integrales__card-title">{servicio.title}</h3>
                  <p className="servicios-integrales__card-text">{servicio.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section - FASE 5 */}
      <section className="servicios-cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="servicios-cta__title">¿Listo para Transformar tu Espacio?</h2>
              <p className="servicios-cta__text">
                Solicita una cotización personalizada y descubre cómo nuestros contenedores pueden ser la solución perfecta para tu proyecto.
              </p>
              <div className="servicios-cta__buttons">
                <Link to="/cotizador-venta" className="btn btn-primary btn-lg me-3">
                  Cotizar Compra
                </Link>
                <Link to="/cotizador-renta" className="btn btn-outline-primary btn-lg me-3">
                  Cotizar Renta
                </Link>
                <Link to="/contacto" className="btn btn-secondary btn-lg">
                  Contactar Asesor
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Servicios;
