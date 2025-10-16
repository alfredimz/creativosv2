import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO, seoConfig } from '../../components/SEO';
import './Bodegas.scss';

const Bodegas = () => {
  const beneficios = [
    {
      titulo: 'Seguridad Máxima',
      descripcion: 'Estructura de acero de alta resistencia. Cerraduras reforzadas y sistema de cierre hermético.'
    },
    {
      titulo: 'Movilidad Total',
      descripcion: 'Transporta tu bodega a donde la necesites. Fácil reubicación con grúa o camión de carga.'
    },
    {
      titulo: 'Costos Bajos',
      descripcion: 'Hasta 60% más económico que construcción tradicional. Sin obra civil ni permisos complejos.'
    },
    {
      titulo: 'Instalación Rápida',
      descripcion: 'Tu bodega lista en 24-48 horas. Solo requiere superficie nivelada y conexiones básicas.'
    },
    {
      titulo: 'Resistencia Extrema',
      descripcion: 'Diseñado para ambientes marinos. Resistente a corrosión, lluvia, viento y variaciones de temperatura.'
    },
    {
      titulo: 'Mantenimiento Mínimo',
      descripcion: 'Sin pintura recurrente ni reparaciones frecuentes. Material duradero con vida útil de 20+ años.'
    }
  ];

  const tamaños = [
    {
      titulo: 'Contenedor 20 ft Estándar',
      dimensiones: '6.06m x 2.44m x 2.59m',
      capacidad: '33 m³ (33,000 litros)',
      cargaMax: '28 toneladas',
      usos: 'Ideal para pequeñas empresas, almacenamiento personal, herramientas.',
      precio: 'Desde $50,000'
    },
    {
      titulo: 'Contenedor 40 ft Estándar',
      dimensiones: '12.19m x 2.44m x 2.59m',
      capacidad: '67 m³ (67,000 litros)',
      cargaMax: '27 toneladas',
      usos: 'Perfecto para comercios medianos, inventarios amplios, maquinaria.',
      precio: 'Desde $85,000'
    },
    {
      titulo: 'Contenedor 40 ft High Cube',
      dimensiones: '12.19m x 2.44m x 2.89m',
      capacidad: '76 m³ (76,000 litros)',
      cargaMax: '27 toneladas',
      usos: 'Óptimo para cargas voluminosas, productos altos, almacenamiento industrial.',
      precio: 'Desde $95,000'
    }
  ];

  const personalizaciones = [
    {
      categoria: 'Accesos',
      opciones: ['Puertas laterales adicionales', 'Puerta peatonal de seguridad', 'Rampa de carga', 'Cortina enrollable']
    },
    {
      categoria: 'Ventilación',
      opciones: ['Ventiladores de techo', 'Extractores de aire', 'Ventanas con malla', 'Respiraderos ajustables']
    },
    {
      categoria: 'Iluminación',
      opciones: ['Iluminación LED interior', 'Reflectores exteriores', 'Panel solar con baterías', 'Instalación eléctrica completa']
    },
    {
      categoria: 'Seguridad',
      opciones: ['Cerraduras de alta seguridad', 'Sistema de alarma', 'Cámaras de vigilancia', 'Candados industriales']
    },
    {
      categoria: 'Organización',
      opciones: ['Racks y estanterías', 'Entrepisos metálicos', 'Ganchos de pared', 'Sistema de etiquetado']
    },
    {
      categoria: 'Acondicionamiento',
      opciones: ['Aislamiento térmico', 'Pisos reforzados', 'Pintura personalizada', 'Impermeabilización extra']
    }
  ];

  const aplicaciones = [
    {
      tipo: 'Industrial',
      descripcion: 'Almacén de materias primas, productos terminados, maquinaria y equipo pesado.',
      empresas: 'Fábricas, plantas de producción, centros de manufactura.'
    },
    {
      tipo: 'Comercial',
      descripcion: 'Inventario de productos, mercancía de tiendas, stock de e-commerce.',
      empresas: 'Retail, supermercados, distribuidoras, emprendimientos.'
    },
    {
      tipo: 'Agrícola',
      descripcion: 'Almacenamiento de cosechas, insumos agrícolas, herramientas, fertilizantes.',
      empresas: 'Ranchos, granjas, invernaderos, cooperativas agrícolas.'
    },
    {
      tipo: 'Construcción',
      descripcion: 'Resguardo de herramientas, materiales de obra, equipo de seguridad.',
      empresas: 'Constructoras, contratistas, desarrolladores inmobiliarios.'
    },
    {
      tipo: 'Eventos Temporales',
      descripcion: 'Almacenaje para eventos, ferias, exposiciones, festivales musicales.',
      empresas: 'Organizadores de eventos, producción de espectáculos.'
    },
    {
      tipo: 'Personal/Doméstico',
      descripcion: 'Almacenamiento de muebles, electrodomésticos, artículos personales.',
      empresas: 'Particulares, familias, mudanzas.'
    }
  ];

  const seguridad = [
    {
      caracteristica: 'Estructura Reforzada',
      descripcion: 'Acero Corten de 2mm de espesor. Esquinas reforzadas con piezas de fundición.'
    },
    {
      caracteristica: 'Sistema de Cierre',
      descripcion: 'Cerraduras tipo twist-lock. Barras de seguridad verticales en ambas puertas.'
    },
    {
      caracteristica: 'Puertas de Seguridad',
      descripcion: 'Puertas dobles con empaquetadura hermética. Bisagras internas anti-forzamiento.'
    },
    {
      caracteristica: 'Certificación ISO',
      descripcion: 'Cumple con estándares internacionales ISO 668 y CSC (Container Safety Convention).'
    }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Contenedores para Bodegas - Creativos Espacios",
    "description": "Bodegas y almacenes hechos con contenedores marítimos. Seguridad máxima, instalación rápida, costos accesibles. Múltiples tamaños disponibles.",
    "brand": {
      "@type": "Brand",
      "name": "Creativos Espacios"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "MXN",
      "lowPrice": "50000",
      "highPrice": "95000",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="bodegas-page">
      <SEO
        title="Contenedores para Bodegas | Almacenamiento Seguro | Creativos Espacios"
        description="Bodegas hechas con contenedores marítimos. Seguridad máxima, instalación rápida y costos accesibles. Múltiples tamaños. Cotiza tu bodega ideal."
        keywords="bodegas contenedor, almacenes portátiles, almacenamiento seguro, bodegas industriales, contenedores para almacenar"
        ogImage="/images/productos/bodegas-hero.jpg"
        structuredData={productSchema}
      />

      {/* Hero Section */}
      <section className="bodegas-hero">
        <div className="bodegas-hero__overlay"></div>
        <Container className="bodegas-hero__container">
          <h1 className="bodegas-hero__title">Contenedores para Bodegas</h1>
          <p className="bodegas-hero__subtitle">Almacenamiento seguro, versátil y económico para tu negocio</p>
          <Button as={Link} to="/contacto" variant="primary" size="lg" className="bodegas-hero__cta">
            Cotizar Mi Bodega
          </Button>
        </Container>
      </section>

      {/* Beneficios Section */}
      <section className="bodegas-section bodegas-section--gray">
        <Container>
          <h2 className="bodegas-section__title">¿Por Qué Usar Contenedores como Bodegas?</h2>
          <Row>
            {beneficios.map((beneficio, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="bodegas-card">
                  <h3 className="bodegas-card__title">{beneficio.titulo}</h3>
                  <p className="bodegas-card__text">{beneficio.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Tamaños Section */}
      <section className="bodegas-section">
        <Container>
          <h2 className="bodegas-section__title">Tamaños Disponibles</h2>
          <Row>
            {tamaños.map((tamaño, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="bodegas-card bodegas-card--featured">
                  <h3 className="bodegas-card__title">{tamaño.titulo}</h3>
                  <div className="bodegas-card__specs">
                    <p><strong>Dimensiones:</strong> {tamaño.dimensiones}</p>
                    <p><strong>Capacidad:</strong> {tamaño.capacidad}</p>
                    <p><strong>Carga máx:</strong> {tamaño.cargaMax}</p>
                  </div>
                  <p className="bodegas-card__text">{tamaño.usos}</p>
                  <p className="bodegas-card__price">{tamaño.precio}</p>
                  <small className="bodegas-card__disclaimer">*Precio base sin personalización. Condición semi-nuevo.</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Personalizaciones Section */}
      <section className="bodegas-section bodegas-section--gray">
        <Container>
          <h2 className="bodegas-section__title">Opciones de Personalización</h2>
          <p className="bodegas-section__description">
            Adapta tu bodega-contenedor a tus necesidades específicas con estas opciones.
          </p>
          <Row>
            {personalizaciones.map((cat, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <div className="bodegas-custom">
                  <h3 className="bodegas-custom__title">{cat.categoria}</h3>
                  <ul className="bodegas-custom__list">
                    {cat.opciones.map((opcion, idx) => (
                      <li key={idx}>{opcion}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Aplicaciones Section */}
      <section className="bodegas-section">
        <Container>
          <h2 className="bodegas-section__title">Aplicaciones por Industria</h2>
          <Row>
            {aplicaciones.map((app, index) => (
              <Col key={index} md={6} className="mb-4">
                <div className="bodegas-application">
                  <h3 className="bodegas-application__title">{app.tipo}</h3>
                  <p className="bodegas-application__text"><strong>Uso:</strong> {app.descripcion}</p>
                  <p className="bodegas-application__text"><strong>Ideal para:</strong> {app.empresas}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Seguridad Section */}
      <section className="bodegas-section bodegas-section--gray">
        <Container>
          <h2 className="bodegas-section__title">Características de Seguridad</h2>
          <Row>
            {seguridad.map((item, index) => (
              <Col key={index} md={6} className="mb-4">
                <div className="bodegas-security">
                  <h3 className="bodegas-security__title">{item.caracteristica}</h3>
                  <p className="bodegas-security__text">{item.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Galería Placeholder Section */}
      <section className="bodegas-section">
        <Container>
          <h2 className="bodegas-section__title">Galería de Ejemplos</h2>
          <Row>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Col key={num} md={4} className="mb-4">
                <div className="bodegas-gallery-item">
                  <div className="bodegas-gallery-item__placeholder">
                    <p>Imagen {num}<br/>Bodega Contenedor</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Final Section */}
      <section className="bodegas-cta">
        <Container className="text-center">
          <h2 className="bodegas-cta__title">¿Necesitas una Bodega Segura y Económica?</h2>
          <p className="bodegas-cta__text">
            Cotiza tu bodega-contenedor con entrega e instalación incluida. Asesoría personalizada sin costo.
          </p>
          <div className="bodegas-cta__buttons">
            <Button as={Link} to="/contacto" variant="primary" size="lg" className="me-3 mb-3">
              Solicitar Cotización
            </Button>
            <Button as={Link} to="/tipos-contenedores" variant="outline-primary" size="lg" className="mb-3">
              Ver Tipos de Contenedores
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Bodegas;
