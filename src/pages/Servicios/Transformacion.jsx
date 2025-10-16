import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SEO, seoConfig } from '../../components/SEO';
import { FadeIn, ScaleIn } from '../../components/Animations'; // FASE 10
import './Transformacion.scss';

const Transformacion = () => {
  const proyectos = [
    { titulo: 'Oficinas', descripcion: 'Espacios de trabajo modernos y funcionales' },
    { titulo: 'Viviendas', descripcion: 'Casas modulares completas y personalizadas' },
    { titulo: 'Comercios', descripcion: 'Tiendas, cafeterías y locales comerciales' },
    { titulo: 'Gimnasios', descripcion: 'Espacios deportivos y de entrenamiento' },
    { titulo: 'Estudios', descripcion: 'Talleres de arte, música y diseño' },
    { titulo: 'Bodegas', descripcion: 'Almacenes industriales modificados' }
  ];

  const caracteristicas = [
    'Diseño arquitectónico personalizado',
    'Instalaciones eléctricas certificadas',
    'Sistema de climatización',
    'Aislamiento térmico y acústico',
    'Acabados interiores de calidad',
    'Pintura exterior profesional',
    'Ventanas y puertas a medida',
    'Plomería e hidráulica',
    'Certificaciones y permisos',
    'Garantía de 2 años'
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Transformación de Contenedores Marítimos",
    "provider": {
      "@type": "Organization",
      "name": "Creativos Espacios",
      "url": "https://www.creativosespacios.mx"
    },
    "areaServed": {
      "@type": "Country",
      "name": "México"
    },
    "description": "Servicio de transformación y modificación de contenedores marítimos. Convertimos contenedores en oficinas, casas, negocios y más."
  };

  return (
    <div className="transformacion-page">
      <SEO {...seoConfig.transformacion} structuredData={serviceSchema} />

      {/* Hero Section */}
      <section className="transformacion-hero">
        <Container>
          <FadeIn delay={0.2} duration={0.8}>
            <h1 className="transformacion-hero__title">Transformación de Contenedores</h1>
          </FadeIn>
          <FadeIn delay={0.4} duration={0.8}>
            <p className="transformacion-hero__description">
              Convertimos contenedores en espacios únicos y funcionales para cualquier necesidad.
              Especializados en la transformación completa de contenedores marítimos en espacios
              habitables, comerciales y de trabajo. Con más de 10 años de experiencia, hemos completado
              cientos de proyectos únicos que superan las expectativas de nuestros clientes.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Tipos de Proyectos Section */}
      <section className="transformacion-content">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="transformacion-content__title">Tipos de Proyectos</h2>
          </FadeIn>
          <Row>
            {proyectos.map((proyecto, index) => (
              <Col key={index} md={4} className="mb-4">
                <ScaleIn delay={0.3 + (index * 0.1)} initialScale={0.9}>
                  <div className="transformacion-content__card">
                    <h3 className="transformacion-content__card-title">{proyecto.titulo}</h3>
                    <p className="transformacion-content__card-text">{proyecto.descripcion}</p>
                  </div>
                </ScaleIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Características Section */}
      <section className="transformacion-content">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="transformacion-content__title">Lo Que Incluye</h2>
          </FadeIn>
          <Row>
            <Col>
              <FadeIn delay={0.4}>
                <ul className="transformacion-content__list">
                  {caracteristicas.map((car, index) => (
                    <li key={index}>{car}</li>
                  ))}
                </ul>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Transformacion;
