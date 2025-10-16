import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // FASE 5: Agregar Link para CTA
import { SEO, seoConfig } from '../../components/SEO';
import { FadeIn, SlideIn, ScaleIn } from '../../components/Animations'; // FASE 10
import './Venta.scss';

const Venta = () => {
  const beneficios = [
    { titulo: 'Activo Permanente', descripcion: 'Inversión única que aumenta el valor de tu patrimonio' },
    { titulo: 'Personalización Total', descripcion: 'Modifica y adapta el contenedor según tus necesidades' },
    { titulo: 'Sin Pagos Recurrentes', descripcion: 'Una sola compra sin rentas mensuales' },
    { titulo: 'Reventa Posible', descripcion: 'Recupera tu inversión vendiéndolo en el futuro' },
    { titulo: 'Instalación Permanente', descripcion: 'Ubícalo donde quieras, sin límite de tiempo' },
    { titulo: 'Propiedad Absoluta', descripcion: 'Es tuyo para siempre, úsalo como mejor te convenga' }
  ];

  const tipos = [
    {
      categoria: 'Nuevos - Premium',
      descripcion: 'Primer viaje, condición impecable. Garantía completa, sin óxido, puertas perfectas, pintura original.',
      precio: 'Desde $120,000'
    },
    {
      categoria: 'Semi-Nuevos - Popular',
      descripcion: '1-3 viajes, excelente estado. Garantía de 1 año, óxido mínimo, funcionalidad 100%, mejor precio-calidad.',
      precio: 'Desde $80,000'
    },
    {
      categoria: 'Usados Grado A - Económico',
      descripcion: 'Múltiples viajes, condición funcional. 6 meses garantía, estructuralmente sólido, listo para usar, máximo ahorro.',
      precio: 'Desde $50,000'
    }
  ];

  const aplicaciones = [
    'Almacén permanente para tu negocio',
    'Base para proyecto de construcción modular',
    'Oficina o local comercial propio',
    'Taller o espacio de trabajo',
    'Bodega de herramientas y equipo',
    'Inversión para reventa o renta posterior'
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Venta de Contenedores Marítimos",
    "provider": {
      "@type": "Organization",
      "name": "Creativos Espacios",
      "url": "https://www.creativosespacios.mx"
    },
    "areaServed": {
      "@type": "Country",
      "name": "México"
    },
    "description": "Venta de contenedores marítimos nuevos y usados. Las mejores opciones para tu proyecto. Entrega en toda la República Mexicana."
  };

  return (
    <div className="venta-page">
      <SEO {...seoConfig.venta} structuredData={serviceSchema} />

      {/* Hero Section */}
      <section className="venta-hero">
        <Container>
          <FadeIn delay={0.2} duration={0.8}>
            <h1 className="venta-hero__title">Venta de Contenedores</h1>
          </FadeIn>
          <FadeIn delay={0.4} duration={0.8}>
            <p className="venta-hero__description">
              Invierte en un contenedor propio y obtén espacio permanente sin pagos mensuales.
              Comprar un contenedor marítimo es una inversión inteligente para quienes necesitan
              espacio permanente de almacenamiento o construcción. Con más de 15 años en el mercado,
              ofrecemos contenedores certificados de diferentes grados de calidad para adaptarnos
              a tu presupuesto y necesidades específicas.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Beneficios Section */}
      <section className="venta-content">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="venta-content__title">Ventajas de Comprar</h2>
          </FadeIn>
          <Row>
            {beneficios.map((beneficio, index) => (
              <Col key={index} md={4} className="mb-4">
                <ScaleIn delay={0.3 + (index * 0.1)} initialScale={0.9}>
                  <div className="venta-content__card">
                    <h3 className="venta-content__card-title">{beneficio.titulo}</h3>
                    <p className="venta-content__card-text">{beneficio.descripcion}</p>
                  </div>
                </ScaleIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Tipos Section */}
      <section className="venta-content">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="venta-content__title">Tipos de Contenedores</h2>
          </FadeIn>
          <Row>
            {tipos.map((tipo, index) => (
              <Col key={index} md={4} className="mb-4">
                <SlideIn direction="up" delay={0.3 + (index * 0.15)} distance={40}>
                  <div className="venta-content__card">
                    <h3 className="venta-content__card-title">{tipo.categoria}</h3>
                    <p className="venta-content__card-text">{tipo.descripcion}</p>
                    <p className="venta-content__card-text"><strong>{tipo.precio}</strong></p>
                    <p className="venta-content__card-text" style={{ fontSize: '10px', fontStyle: 'italic' }}>
                      *Precios para contenedor de 20 pies. Incluye entrega en CDMX.
                    </p>
                  </div>
                </SlideIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Aplicaciones Section */}
      <section className="venta-content">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="venta-content__title">Usos Comunes</h2>
          </FadeIn>
          <Row>
            <Col>
              <FadeIn delay={0.4}>
                <ul className="venta-content__list">
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
      <section className="venta-cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <FadeIn delay={0.2}>
                <h2 className="venta-cta__title">¿Listo para Invertir en tu Contenedor?</h2>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="venta-cta__text">
                  Solicita una cotización sin compromiso y descubre cuál es el contenedor perfecto para tu proyecto.
                  Nuestros asesores te ayudarán a elegir la mejor opción según tu presupuesto y necesidades.
                </p>
              </FadeIn>
              <ScaleIn delay={0.6} initialScale={0.95}>
                <div className="venta-cta__buttons">
                  <Link to="/cotizador-venta" className="btn btn-primary btn-lg me-3">
                    Solicitar Cotización
                  </Link>
                  <Link to="/tipos-contenedores" className="btn btn-outline-primary btn-lg me-3">
                    Ver Tipos de Contenedores
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

export default Venta;
