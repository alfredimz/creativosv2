import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO, seoConfig } from '../../components/SEO';
import './Oficinas.scss';

const Oficinas = () => {
  const beneficios = [
    {
      titulo: 'Flexibilidad Total',
      descripcion: 'Espacio adaptable a tu equipo. Crece o reduce según tus necesidades sin compromiso a largo plazo.'
    },
    {
      titulo: 'Diseño Modular',
      descripcion: 'Conecta múltiples contenedores para espacios amplios. Crea layouts personalizados: oficinas individuales, open space, salas.'
    },
    {
      titulo: 'Instalación Express',
      descripcion: 'Tu oficina lista en 3-5 días. Pre-equipada con instalaciones eléctricas, iluminación y clima.'
    },
    {
      titulo: 'Completamente Equipadas',
      descripcion: 'Aire acondicionado, electricidad 110V/220V, iluminación LED, internet, mobiliario opcional.'
    },
    {
      titulo: 'Costos Predecibles',
      descripcion: 'Inversión inicial clara. Mantenimiento mínimo. Opción de compra o renta según tu presupuesto.'
    },
    {
      titulo: 'Imagen Profesional',
      descripcion: 'Diseño moderno y arquitectónico. Branding personalizado. Espacios funcionales y atractivos.'
    }
  ];

  const configuraciones = [
    {
      titulo: 'Oficina Individual (20 ft)',
      descripcion: 'Perfecta para 2-4 personas. Espacio privado con escritorios, área de reunión pequeña, baño opcional.',
      capacidad: '2-4 personas',
      area: '14.6 m²',
      precio: 'Desde $180,000',
      incluye: ['Aire acondicionado', 'Iluminación LED', 'Piso vinílico', 'Ventanas con cortinas', 'Instalación eléctrica']
    },
    {
      titulo: 'Oficina Estándar (40 ft)',
      descripcion: 'Ideal para equipos de 6-8 personas. Open space o división en 2 privados. Sala de juntas integrada.',
      capacidad: '6-8 personas',
      area: '29.5 m²',
      precio: 'Desde $320,000',
      incluye: ['2 Aires acondicionados', 'Iluminación LED', 'Pisos laminados', 'Divisiones internas', 'Baño privado', 'Kitchenette']
    },
    {
      titulo: 'Oficina Modular (Multi-contenedor)',
      descripcion: 'Solución corporativa para 15+ personas. Diseño personalizado con múltiples áreas: recepción, privados, open space, sala de juntas.',
      capacidad: '15+ personas',
      area: '60+ m²',
      precio: 'Desde $600,000',
      incluye: ['Clima centralizado', 'Sistema eléctrico completo', 'Acabados premium', 'Baños múltiples', 'Cocina-comedor', 'Terraza opcional']
    }
  ];

  const acabadosEquipamiento = [
    {
      categoria: 'Clima',
      opciones: ['Mini-split 1.5-2 ton', 'Aire central multi-zona', 'Ventiladores de techo', 'Calefacción (zonas frías)']
    },
    {
      categoria: 'Electricidad e Internet',
      opciones: ['Panel eléctrico 110V/220V', 'Contactos múltiples', 'Cableado estructurado Cat6', 'Wi-Fi mesh system', 'UPS para servidor']
    },
    {
      categoria: 'Iluminación',
      opciones: ['Paneles LED empotrados', 'Iluminación puntual escritorios', 'Control de intensidad', 'Iluminación emergencia']
    },
    {
      categoria: 'Acabados',
      opciones: ['Pisos: laminado, vinílico, alfombra', 'Paredes: paneles decorativos, drywall, pintura', 'Cielos: plafón acústico, decorativo', 'Ventanas: PVC doble vidrio, persianas']
    },
    {
      categoria: 'Mobiliario Opcional',
      opciones: ['Escritorios ejecutivos/operativos', 'Sillas ergonómicas', 'Archiveros y credenzas', 'Mesa de juntas', 'Recepción', 'Lounge área']
    },
    {
      categoria: 'Sanitarios',
      opciones: ['Baño privado completo', 'Baños separados H/M', 'Lavabo en área común', 'Ducha (opcional)']
    }
  ];

  const usos = [
    {
      tipo: 'Oficina Temporal en Obra',
      descripcion: 'Espacio administrativo en sitios de construcción. Fácil traslado conforme avanza el proyecto.',
      ideal: 'Constructoras, contratistas, desarrolladores.'
    },
    {
      tipo: 'Oficina Permanente Empresarial',
      descripcion: 'Sede corporativa moderna y económica. Alternativa a renta de edificios comerciales.',
      ideal: 'Empresas establecidas, corporativos, consultorías.'
    },
    {
      tipo: 'Oficina para Startup',
      descripcion: 'Espacio flexible que crece con tu equipo. Inversión inicial baja, imagen profesional.',
      ideal: 'Emprendimientos, startups, tecnológicas, agencias.'
    },
    {
      tipo: 'Sala de Juntas Externa',
      descripcion: 'Espacio independiente para reuniones con clientes. Privacidad y profesionalismo.',
      ideal: 'Despachos, bufetes, consultores independientes.'
    },
    {
      tipo: 'Oficina de Ventas',
      descripcion: 'Show room con área administrativa. Atención al cliente en desarrollos o fraccionamientos.',
      ideal: 'Inmobiliarias, desarrolladores, comercializadoras.'
    },
    {
      tipo: 'Coworking Privado',
      descripcion: 'Espacios compartidos con privados individuales. Renta por estación de trabajo.',
      ideal: 'Emprendedores, inversores, espacios compartidos.'
    }
  ];

  const casosUso = [
    {
      titulo: 'Oficina de Constructora - Querétaro',
      descripcion: '2 contenedores de 40 ft conectados. Área administrativa, sala de juntas, baños separados. Cliente: Constructora del Bajío.',
      resultado: 'Instalada en 4 días. Ahorro del 50% vs renta de oficinas en plaza comercial.'
    },
    {
      titulo: 'Startup Tecnológica - Guadalajara',
      descripcion: 'Open space de 40 ft para equipo de 8 personas. Diseño moderno con mobiliario incluido. Cliente: Startup de desarrollo de software.',
      resultado: 'Lista en 1 semana. Ambiente colaborativo, inversión 40% menor vs renta anual.'
    },
    {
      titulo: 'Oficina Corporativa - Monterrey',
      descripcion: '4 contenedores formando complejo de 120 m². Recepción, 6 privados, open space, comedor. Cliente: Distribuidora industrial.',
      resultado: 'Completada en 3 semanas. Imagen profesional, propiedad 100%.'
    }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Contenedores para Oficinas - Creativos Espacios",
    "description": "Oficinas modulares hechas con contenedores marítimos. Espacios flexibles, modernos y completamente equipados. Instalación rápida.",
    "brand": {
      "@type": "Brand",
      "name": "Creativos Espacios"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "MXN",
      "lowPrice": "180000",
      "highPrice": "600000",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="oficinas-page">
      <SEO
        title="Contenedores para Oficinas | Espacios de Trabajo Modulares | Creativos Espacios"
        description="Oficinas hechas con contenedores marítimos. Espacios flexibles, modernos y completamente equipados. Instalación rápida. Cotiza tu oficina ideal."
        keywords="oficinas contenedor, oficinas modulares, espacios de trabajo, oficinas prefabricadas, oficinas portátiles"
        ogImage="/images/productos/oficinas-hero.jpg"
        structuredData={productSchema}
      />

      {/* Hero Section */}
      <section className="oficinas-hero">
        <div className="oficinas-hero__overlay"></div>
        <Container className="oficinas-hero__container">
          <h1 className="oficinas-hero__title">Contenedores para Oficinas</h1>
          <p className="oficinas-hero__subtitle">Espacios de trabajo flexibles, modernos y funcionales</p>
          <Button as={Link} to="/contacto" variant="primary" size="lg" className="oficinas-hero__cta">
            Cotizar Mi Oficina
          </Button>
        </Container>
      </section>

      {/* Beneficios Section */}
      <section className="oficinas-section oficinas-section--gray">
        <Container>
          <h2 className="oficinas-section__title">¿Por Qué Elegir Oficinas de Contenedor?</h2>
          <Row>
            {beneficios.map((beneficio, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="oficinas-card">
                  <h3 className="oficinas-card__title">{beneficio.titulo}</h3>
                  <p className="oficinas-card__text">{beneficio.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Configuraciones Section */}
      <section className="oficinas-section">
        <Container>
          <h2 className="oficinas-section__title">Configuraciones Disponibles</h2>
          <Row>
            {configuraciones.map((config, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="oficinas-card oficinas-card--featured">
                  <h3 className="oficinas-card__title">{config.titulo}</h3>
                  <p className="oficinas-card__text">{config.descripcion}</p>
                  <div className="oficinas-card__specs">
                    <p><strong>Capacidad:</strong> {config.capacidad}</p>
                    <p><strong>Área:</strong> {config.area}</p>
                  </div>
                  <p className="oficinas-card__price">{config.precio}</p>
                  <div className="oficinas-card__includes">
                    <strong>Incluye:</strong>
                    <ul>
                      {config.incluye.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <small className="oficinas-card__disclaimer">*Precio llave en mano. Mobiliario opcional adicional.</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Acabados y Equipamiento Section */}
      <section className="oficinas-section oficinas-section--gray">
        <Container>
          <h2 className="oficinas-section__title">Acabados y Equipamiento</h2>
          <p className="oficinas-section__description">
            Personaliza tu oficina-contenedor con acabados profesionales y equipamiento de primera.
          </p>
          <Row>
            {acabadosEquipamiento.map((cat, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <div className="oficinas-equip">
                  <h3 className="oficinas-equip__title">{cat.categoria}</h3>
                  <ul className="oficinas-equip__list">
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

      {/* Usos Section */}
      <section className="oficinas-section">
        <Container>
          <h2 className="oficinas-section__title">Casos de Uso</h2>
          <Row>
            {usos.map((uso, index) => (
              <Col key={index} md={6} className="mb-4">
                <div className="oficinas-use-case">
                  <h3 className="oficinas-use-case__title">{uso.tipo}</h3>
                  <p className="oficinas-use-case__text">{uso.descripcion}</p>
                  <p className="oficinas-use-case__ideal"><strong>Ideal para:</strong> {uso.ideal}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Casos de Éxito Section */}
      <section className="oficinas-section oficinas-section--gray">
        <Container>
          <h2 className="oficinas-section__title">Proyectos Realizados</h2>
          <Row>
            {casosUso.map((caso, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="oficinas-card oficinas-card--success">
                  <h3 className="oficinas-card__title">{caso.titulo}</h3>
                  <p className="oficinas-card__text">{caso.descripcion}</p>
                  <p className="oficinas-card__result"><strong>Resultado:</strong> {caso.resultado}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Galería Placeholder Section */}
      <section className="oficinas-section">
        <Container>
          <h2 className="oficinas-section__title">Galería de Proyectos</h2>
          <Row>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Col key={num} md={4} className="mb-4">
                <div className="oficinas-gallery-item">
                  <div className="oficinas-gallery-item__placeholder">
                    <p>Imagen {num}<br/>Oficina Contenedor</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Final Section */}
      <section className="oficinas-cta">
        <Container className="text-center">
          <h2 className="oficinas-cta__title">¿Listo para Tu Oficina Ideal?</h2>
          <p className="oficinas-cta__text">
            Cotiza tu oficina-contenedor completamente equipada. Asesoría profesional sin costo y diseño a medida.
          </p>
          <div className="oficinas-cta__buttons">
            <Button as={Link} to="/contacto" variant="primary" size="lg" className="me-3 mb-3">
              Solicitar Cotización
            </Button>
            <Button as={Link} to="/personalizar-contenedor" variant="outline-primary" size="lg" className="mb-3">
              Personalizar Mi Oficina
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Oficinas;
