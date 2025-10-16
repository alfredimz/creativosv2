import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // FASE 5: Agregar Link para CTA
import { SEO, seoConfig } from '../../components/SEO';
import { FadeIn, SlideIn, ScaleIn } from '../../components/Animations'; // FASE 10
import './Alquiler.scss';

const Alquiler = () => {
  const beneficios = [
    { titulo: 'Sin Inversión Inicial', descripcion: 'Renta mensual accesible sin necesidad de comprar' },
    { titulo: 'Flexibilidad de Tiempo', descripcion: 'Renta por el tiempo que necesites, desde 1 mes' },
    { titulo: 'Renovación Fácil', descripcion: 'Extiende tu contrato cuando lo necesites' },
    { titulo: 'Transporte Incluido', descripcion: 'Entrega y recolección en tu ubicación' },
    { titulo: 'Mantenimiento', descripcion: 'Soporte técnico durante todo el periodo' },
    { titulo: 'Contratos Simples', descripcion: 'Proceso ágil y sin complicaciones' }
  ];

  const aplicaciones = [
    'Almacenamiento temporal durante construcción',
    'Oficinas móviles para obras',
    'Bodegas para eventos y exposiciones',
    'Almacén de inventario estacional',
    'Espacios comerciales temporales',
    'Guardamuebles durante mudanzas'
  ];

  const tarifas = [
    { tamano: '10 pies', precio: 'Desde $3,500/mes', caracteristicas: 'Ideal para almacenamiento pequeño, perfecto para uso temporal.' },
    { tamano: '20 pies', precio: 'Desde $5,000/mes', caracteristicas: 'Más popular, espacio versátil para múltiples usos.' },
    { tamano: '40 pies', precio: 'Desde $8,000/mes', caracteristicas: 'Máximo espacio disponible, ideal para proyectos grandes.' }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Renta de Contenedores Marítimos",
    "provider": {
      "@type": "Organization",
      "name": "Creativos Espacios",
      "url": "https://www.creativosespacios.mx"
    },
    "areaServed": {
      "@type": "Country",
      "name": "México"
    },
    "description": "Renta de contenedores marítimos por día, semana o mes. Soluciones flexibles de almacenamiento temporal y espacios modulares."
  };

  return (
    <div className="alquiler-page">
      <SEO {...seoConfig.alquiler} structuredData={serviceSchema} />

      {/* Hero Section */}
      <section className="alquiler-hero">
        <Container>
          <FadeIn delay={0.2} duration={0.8}>
            <h1 className="alquiler-hero__title">Alquiler de Contenedores</h1>
          </FadeIn>
          <FadeIn delay={0.4} duration={0.8}>
            <p className="alquiler-hero__description">
              Soluciones flexibles de almacenamiento sin la necesidad de comprar.
              El alquiler de contenedores es la opción perfecta cuando necesitas espacio adicional
              de forma temporal o quieres probar antes de comprar. Ofrecemos contenedores en excelente
              estado con la flexibilidad que tu proyecto necesita.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Beneficios Section */}
      <section className="alquiler-content">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="alquiler-content__title">Beneficios del Alquiler</h2>
          </FadeIn>
          <Row>
            {beneficios.map((beneficio, index) => (
              <Col key={index} md={4} className="mb-4">
                <ScaleIn delay={0.3 + (index * 0.1)} initialScale={0.9}>
                  <div className="alquiler-content__card">
                    <h3 className="alquiler-content__card-title">{beneficio.titulo}</h3>
                    <p className="alquiler-content__card-text">{beneficio.descripcion}</p>
                  </div>
                </ScaleIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Tarifas Section */}
      <section className="alquiler-content">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="alquiler-content__title">Tarifas de Alquiler</h2>
          </FadeIn>
          <Row>
            {tarifas.map((tarifa, index) => (
              <Col key={index} md={4} className="mb-4">
                <SlideIn direction="up" delay={0.3 + (index * 0.15)} distance={40}>
                  <div className="alquiler-content__card">
                    <h3 className="alquiler-content__card-title">{tarifa.tamano}</h3>
                    <p className="alquiler-content__card-text"><strong>{tarifa.precio}</strong></p>
                    <p className="alquiler-content__card-text">{tarifa.caracteristicas}</p>
                    <p className="alquiler-content__card-text" style={{ fontSize: '10px', fontStyle: 'italic' }}>
                      *Precios sujetos a cambio. Incluye entrega y recolección dentro de CDMX.
                    </p>
                  </div>
                </SlideIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Aplicaciones Section */}
      <section className="alquiler-content">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="alquiler-content__title">Aplicaciones Comunes</h2>
          </FadeIn>
          <Row>
            <Col>
              <FadeIn delay={0.4}>
                <ul className="alquiler-content__list">
                  {aplicaciones.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section - FASE 5 */}
      <section className="alquiler-cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <FadeIn delay={0.2}>
                <h2 className="alquiler-cta__title">¿Necesitas Rentar un Contenedor?</h2>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="alquiler-cta__text">
                  Solicita una cotización de renta con planes flexibles adaptados a tu proyecto.
                  Sin inversión inicial, con toda la flexibilidad que necesitas.
                </p>
              </FadeIn>
              <ScaleIn delay={0.6} initialScale={0.95}>
                <div className="alquiler-cta__buttons">
                  <Link to="/cotizador-renta" className="btn btn-primary btn-lg me-3">
                    Cotizar Renta
                  </Link>
                  <Link to="/tipos-contenedores" className="btn btn-outline-primary btn-lg me-3">
                    Ver Contenedores Disponibles
                  </Link>
                  <Link to="/contacto" className="btn btn-secondary btn-lg">
                    Contactar Asesor
                  </Link>
                </div>
              </ScaleIn>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Alquiler;
