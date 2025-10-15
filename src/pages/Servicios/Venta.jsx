import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SEO, seoConfig } from '../../components/SEO';
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
          <h1 className="venta-hero__title">Venta de Contenedores</h1>
          <p className="venta-hero__description">
            Invierte en un contenedor propio y obtén espacio permanente sin pagos mensuales.
            Comprar un contenedor marítimo es una inversión inteligente para quienes necesitan
            espacio permanente de almacenamiento o construcción. Con más de 15 años en el mercado,
            ofrecemos contenedores certificados de diferentes grados de calidad para adaptarnos
            a tu presupuesto y necesidades específicas.
          </p>
        </Container>
      </section>

      {/* Beneficios Section */}
      <section className="venta-content">
        <Container>
          <h2 className="venta-content__title">Ventajas de Comprar</h2>
          <Row>
            {beneficios.map((beneficio, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="venta-content__card">
                  <h3 className="venta-content__card-title">{beneficio.titulo}</h3>
                  <p className="venta-content__card-text">{beneficio.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Tipos Section */}
      <section className="venta-content">
        <Container>
          <h2 className="venta-content__title">Tipos de Contenedores</h2>
          <Row>
            {tipos.map((tipo, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="venta-content__card">
                  <h3 className="venta-content__card-title">{tipo.categoria}</h3>
                  <p className="venta-content__card-text">{tipo.descripcion}</p>
                  <p className="venta-content__card-text"><strong>{tipo.precio}</strong></p>
                  <p className="venta-content__card-text" style={{ fontSize: '10px', fontStyle: 'italic' }}>
                    *Precios para contenedor de 20 pies. Incluye entrega en CDMX.
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Aplicaciones Section */}
      <section className="venta-content">
        <Container>
          <h2 className="venta-content__title">Usos Comunes</h2>
          <Row>
            <Col>
              <ul className="venta-content__list">
                {aplicaciones.map((app, index) => (
                  <li key={index}>{app}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Venta;
