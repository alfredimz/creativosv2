import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTruck, FaBolt, FaSnowflake, FaTint, FaPaintBrush, FaLock, FaDoorOpen, FaLayerGroup, FaRuler, FaTools } from 'react-icons/fa'; // FASE 4: Reemplazo de emojis
import { SEO, seoConfig } from '../../components/SEO';
import './ServiciosAdicionales.scss';

const ServiciosAdicionales = () => {
  const servicios = [
    {
      id: 1,
      icono: <FaTruck size={40} color="#3B6F7F" />,
      titulo: 'Transporte y Logística',
      descripcion: 'Servicio de flete y maniobras para entrega de contenedores en todo México',
      caracteristicas: ['Fletes nacionales', 'Maniobras de carga/descarga', 'Grúa y montacargas', 'Seguimiento en tiempo real']
    },
    {
      id: 2,
      icono: <FaBolt size={40} color="#F16700" />,
      titulo: 'Instalaciones Eléctricas',
      descripcion: 'Instalación completa de sistemas eléctricos certificados',
      caracteristicas: ['Cableado completo', 'Tableros eléctricos', 'Iluminación LED', 'Tomas y contactos']
    },
    {
      id: 3,
      icono: <FaSnowflake size={40} color="#00BCD4" />,
      titulo: 'Climatización',
      descripcion: 'Sistemas de aire acondicionado y ventilación',
      caracteristicas: ['Aire acondicionado', 'Ventilación', 'Extractores', 'Control de temperatura']
    },
    {
      id: 4,
      icono: <FaTint size={40} color="#2196F3" />,
      titulo: 'Plomería e Hidráulica',
      descripcion: 'Instalaciones sanitarias y sistemas de agua',
      caracteristicas: ['Tuberías y conexiones', 'Baños completos', 'Cocinas', 'Drenaje y desagüe']
    },
    {
      id: 5,
      icono: <FaPaintBrush size={40} color="#9C27B0" />,
      titulo: 'Acabados Personalizados',
      descripcion: 'Diseño interior y exterior a tu gusto',
      caracteristicas: ['Pintura especializada', 'Revestimientos', 'Pisos', 'Decoración']
    },
    {
      id: 6,
      icono: <FaLock size={40} color="#3B6F7F" />,
      titulo: 'Seguridad',
      descripcion: 'Sistemas de seguridad y protección',
      caracteristicas: ['Cerraduras de seguridad', 'Cámaras', 'Alarmas', 'Iluminación exterior']
    },
    {
      id: 7,
      icono: <FaDoorOpen size={40} color="#795548" />,
      titulo: 'Ventanas y Puertas',
      descripcion: 'Instalación de accesos y ventilación',
      caracteristicas: ['Puertas de seguridad', 'Ventanas de aluminio', 'Cancelería', 'Cristales templados']
    },
    {
      id: 8,
      icono: <FaLayerGroup size={40} color="#607D8B" />,
      titulo: 'Aislamiento Térmico/Acústico',
      descripcion: 'Materiales aislantes de alta calidad',
      caracteristicas: ['Aislante térmico', 'Aislante acústico', 'Impermeabilización', 'Protección UV']
    },
    {
      id: 9,
      icono: <FaRuler size={40} color="#FF9800" />,
      titulo: 'Diseño Arquitectónico',
      descripcion: 'Planos y diseño personalizado',
      caracteristicas: ['Planos arquitectónicos', 'Renders 3D', 'Asesoría técnica', 'Diseño a medida']
    },
    {
      id: 10,
      icono: <FaTools size={40} color="#3B6F7F" />,
      titulo: 'Mantenimiento',
      descripcion: 'Servicio de mantenimiento preventivo y correctivo',
      caracteristicas: ['Inspección periódica', 'Reparaciones', 'Pintura de retoque', 'Garantía extendida']
    }
  ];

  return (
    <div className="servicios-adicionales-page">
      <SEO {...seoConfig.serviciosAdicionales} />

      {/* Hero Section */}
      <section className="servicios-adicionales-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="servicios-adicionales-hero__title">Servicios Adicionales</h1>
              <p className="servicios-adicionales-hero__description">
                Complementa tu proyecto con nuestros servicios especializados
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="servicios-adicionales-intro">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="servicios-adicionales-intro__titulo">Todo lo que Necesitas en un Solo Lugar</h2>
              <p className="servicios-adicionales-intro__texto">
                Ofrecemos una amplia gama de servicios complementarios para que tu proyecto de contenedor
                esté completamente equipado y listo para usar. Desde el transporte hasta los acabados finales.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Grid Section */}
      <section className="servicios-adicionales-grid">
        <Container>
          <Row>
            {servicios.map((servicio) => (
              <Col key={servicio.id} lg={6} className="mb-4">
                <Card className="servicios-adicionales-grid__card h-100">
                  <Card.Body>
                    <div className="servicios-adicionales-grid__card-header">
                      <div className="servicios-adicionales-grid__card-icon">{servicio.icono}</div>
                      <h3 className="servicios-adicionales-grid__card-titulo">{servicio.titulo}</h3>
                    </div>
                    <p className="servicios-adicionales-grid__card-descripcion">{servicio.descripcion}</p>
                    <ul className="servicios-adicionales-grid__card-lista">
                      {servicio.caracteristicas.map((caracteristica, index) => (
                        <li key={index}>{caracteristica}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="servicios-adicionales-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="servicios-adicionales-cta__titulo">¿Necesitas Alguno de Estos Servicios?</h2>
              <p className="servicios-adicionales-cta__texto">
                Cotiza los servicios adicionales que necesitas para tu proyecto.
                Te ayudamos a crear el espacio perfecto.
              </p>
              <Link to="/contacto" className="servicios-adicionales-cta__button">
                Solicitar Cotización
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ServiciosAdicionales;
