import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO, seoConfig } from '../../components/SEO';
import './Casas.scss';

const Casas = () => {
  const beneficios = [
    {
      titulo: 'Diseño Innovador',
      descripcion: 'Arquitectura moderna y funcional que se adapta a tu estilo de vida. Espacios abiertos y luminosos.'
    },
    {
      titulo: 'Sustentabilidad',
      descripcion: 'Materiales reciclados, eficiencia energética, y menor huella ambiental. Construcción eco-friendly.'
    },
    {
      titulo: 'Rapidez de Construcción',
      descripcion: 'Tu casa lista en 4-6 meses. Construcción modular prefabricada con instalación rápida.'
    },
    {
      titulo: 'Costo Competitivo',
      descripcion: 'Hasta 30% más económico que construcción tradicional. Ahorro en materiales y tiempos.'
    },
    {
      titulo: 'Durabilidad Extrema',
      descripcion: 'Estructura de acero naval diseñada para soportar condiciones marítimas. Vida útil de 25+ años.'
    },
    {
      titulo: 'Movilidad Única',
      descripcion: 'Si lo necesitas, puedes mover tu casa. Módulos transportables a nuevas ubicaciones.'
    }
  ];

  const modelos = [
    {
      titulo: 'Mini Casa (20 ft)',
      descripcion: 'Perfecta para una persona o pareja. Incluye sala-comedor, kitchenette, baño completo y área de descanso.',
      especificaciones: '14.6 m² de espacio habitable',
      precio: 'Desde $350,000'
    },
    {
      titulo: 'Casa Estándar (40 ft)',
      descripcion: 'Espaciosa para familias pequeñas. 1-2 recámaras, cocina equipada, sala, comedor, 1-2 baños.',
      especificaciones: '29.5 m² de espacio habitable',
      precio: 'Desde $650,000'
    },
    {
      titulo: 'Casa Modular (Multi-contenedor)',
      descripcion: 'Diseño personalizado uniendo múltiples contenedores. Hasta 3 recámaras, múltiples baños, terraza.',
      especificaciones: '60+ m² de espacio habitable',
      precio: 'Desde $1,200,000'
    }
  ];

  const proceso = [
    {
      paso: '1',
      titulo: 'Consulta y Diseño',
      descripcion: 'Reunión con nuestro equipo de arquitectos. Definimos tus necesidades, presupuesto y diseño personalizado.'
    },
    {
      paso: '2',
      titulo: 'Cotización y Contrato',
      descripcion: 'Propuesta detallada con renders 3D. Firma de contrato y anticipo del 50% para iniciar fabricación.'
    },
    {
      paso: '3',
      titulo: 'Fabricación en Taller',
      descripcion: 'Construcción modular en nuestras instalaciones. Instalaciones eléctricas, hidráulicas, acabados.'
    },
    {
      paso: '4',
      titulo: 'Preparación del Terreno',
      descripcion: 'Acondicionamiento de tu terreno. Cimentación, conexiones de servicios, permisos (si aplica).'
    },
    {
      paso: '5',
      titulo: 'Transporte e Instalación',
      descripcion: 'Entrega con grúa especializada. Montaje y conexión de módulos, instalaciones finales.'
    },
    {
      paso: '6',
      titulo: 'Entrega Final',
      descripcion: 'Inspección completa y limpieza. Entrega de llaves, garantías y manual de mantenimiento.'
    }
  ];

  const casosExito = [
    {
      titulo: 'Casa de Playa - Quintana Roo',
      descripcion: 'Casa modular de 2 contenedores (40 ft cada uno). 2 recámaras, 2 baños, terraza con vista al mar. Cliente: Familia Rodríguez.',
      resultado: 'Entregada en 5 meses. Ahorro del 35% vs construcción tradicional.'
    },
    {
      titulo: 'Mini Casa Urbana - CDMX',
      descripcion: 'Mini casa de 20 ft para uso personal. Diseño minimalista en azotea. Cliente: Joven profesionista.',
      resultado: 'Lista en 3 meses. Solución habitacional accesible en zona céntrica.'
    },
    {
      titulo: 'Casa Campestre - Estado de México',
      descripcion: '3 contenedores unidos formando casa en L. 3 recámaras, sala amplia, cocina gourmet. Cliente: Pareja de jubilados.',
      resultado: 'Completada en 6 meses. Vida sustentable con paneles solares.'
    }
  ];

  const especificacionesTecnicas = [
    { categoria: 'Estructura', items: ['Acero Corten naval', 'Refuerzos internos con perfiles metálicos', 'Resistencia a vientos de hasta 180 km/h'] },
    { categoria: 'Aislamiento', items: ['Paneles de poliuretano de 50mm', 'Aislamiento térmico y acústico', 'Barrera de vapor'] },
    { categoria: 'Acabados Interiores', items: ['Paneles decorativos de PVC o madera', 'Pisos laminados o vinílicos', 'Iluminación LED incluida'] },
    { categoria: 'Instalaciones', items: ['Instalación eléctrica completa (110V/220V)', 'Instalación hidráulica con tubería PEX', 'Instalación sanitaria con biodigestor (opcional)'] },
    { categoria: 'Ventanas y Puertas', items: ['Ventanas de PVC doble vidrio', 'Puerta principal de seguridad', 'Puerta corredera de vidrio (opcional)'] }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Contenedores para Casas - Creativos Espacios",
    "description": "Casas prefabricadas hechas con contenedores marítimos. Diseños innovadores, sustentables y económicos. Construcción rápida en 4-6 meses.",
    "brand": {
      "@type": "Brand",
      "name": "Creativos Espacios"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "MXN",
      "lowPrice": "350000",
      "highPrice": "1200000",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="casas-page">
      <SEO
        title="Contenedores para Casas | Viviendas Modulares | Creativos Espacios"
        description="Casas hechas con contenedores marítimos. Diseños innovadores, sustentables y económicos. Construcción rápida en 4-6 meses. Cotiza tu casa ideal."
        keywords="casas contenedor, casas modulares, viviendas sustentables, casas prefabricadas, construcción rápida"
        ogImage="/images/productos/casas-hero.jpg"
        structuredData={productSchema}
      />

      {/* Hero Section */}
      <section className="casas-hero">
        <div className="casas-hero__overlay"></div>
        <Container className="casas-hero__container">
          <h1 className="casas-hero__title">Contenedores para Casas</h1>
          <p className="casas-hero__subtitle">Diseños innovadores para viviendas modernas y sustentables</p>
          <Button as={Link} to="/contacto" variant="primary" size="lg" className="casas-hero__cta">
            Cotizar Mi Casa
          </Button>
        </Container>
      </section>

      {/* Beneficios Section */}
      <section className="casas-section casas-section--gray">
        <Container>
          <h2 className="casas-section__title">¿Por Qué Elegir una Casa de Contenedor?</h2>
          <Row>
            {beneficios.map((beneficio, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="casas-card">
                  <h3 className="casas-card__title">{beneficio.titulo}</h3>
                  <p className="casas-card__text">{beneficio.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Modelos Section */}
      <section className="casas-section">
        <Container>
          <h2 className="casas-section__title">Modelos Disponibles</h2>
          <Row>
            {modelos.map((modelo, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="casas-card casas-card--featured">
                  <h3 className="casas-card__title">{modelo.titulo}</h3>
                  <p className="casas-card__text">{modelo.descripcion}</p>
                  <p className="casas-card__spec">{modelo.especificaciones}</p>
                  <p className="casas-card__price">{modelo.precio}</p>
                  <small className="casas-card__disclaimer">*Precio base sin personalización. Incluye entrega en CDMX y área metropolitana.</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Especificaciones Técnicas Section */}
      <section className="casas-section casas-section--gray">
        <Container>
          <h2 className="casas-section__title">Especificaciones Técnicas</h2>
          <Row>
            {especificacionesTecnicas.map((spec, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <div className="casas-spec">
                  <h3 className="casas-spec__title">{spec.categoria}</h3>
                  <ul className="casas-spec__list">
                    {spec.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Proceso de Construcción Section */}
      <section className="casas-section">
        <Container>
          <h2 className="casas-section__title">Proceso de Construcción</h2>
          <p className="casas-section__description">
            De la idea a tu casa en 6 pasos. Acompañamiento completo en cada etapa.
          </p>
          <Row>
            {proceso.map((item, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <div className="casas-process">
                  <div className="casas-process__number">{item.paso}</div>
                  <h3 className="casas-process__title">{item.titulo}</h3>
                  <p className="casas-process__text">{item.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Casos de Éxito Section */}
      <section className="casas-section casas-section--gray">
        <Container>
          <h2 className="casas-section__title">Casos de Éxito</h2>
          <Row>
            {casosExito.map((caso, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="casas-card casas-card--success">
                  <h3 className="casas-card__title">{caso.titulo}</h3>
                  <p className="casas-card__text">{caso.descripcion}</p>
                  <p className="casas-card__result"><strong>Resultado:</strong> {caso.resultado}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Galería Placeholder Section */}
      <section className="casas-section">
        <Container>
          <h2 className="casas-section__title">Galería de Proyectos</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="casas-gallery-item">
                <div className="casas-gallery-item__placeholder">
                  <p>Imagen 1<br/>Casa de Playa</p>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="casas-gallery-item">
                <div className="casas-gallery-item__placeholder">
                  <p>Imagen 2<br/>Mini Casa Urbana</p>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="casas-gallery-item">
                <div className="casas-gallery-item__placeholder">
                  <p>Imagen 3<br/>Casa Campestre</p>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="casas-gallery-item">
                <div className="casas-gallery-item__placeholder">
                  <p>Imagen 4<br/>Interior Moderno</p>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="casas-gallery-item">
                <div className="casas-gallery-item__placeholder">
                  <p>Imagen 5<br/>Cocina Equipada</p>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="casas-gallery-item">
                <div className="casas-gallery-item__placeholder">
                  <p>Imagen 6<br/>Terraza Vista</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Final Section */}
      <section className="casas-cta">
        <Container className="text-center">
          <h2 className="casas-cta__title">¿Listo para Construir Tu Casa Ideal?</h2>
          <p className="casas-cta__text">
            Cotiza tu casa de contenedor con nuestro equipo de expertos. Te acompañamos en cada paso del proceso.
          </p>
          <div className="casas-cta__buttons">
            <Button as={Link} to="/contacto" variant="primary" size="lg" className="me-3 mb-3">
              Solicitar Cotización
            </Button>
            <Button as={Link} to="/catalogo" variant="outline-primary" size="lg" className="mb-3">
              Ver Catálogo Completo
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Casas;
