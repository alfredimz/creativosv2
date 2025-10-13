import React from 'react';
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiciosAdicionales.scss';

const ServiciosAdicionales = () => {
  const servicios = [
    {
      id: 1,
      icono: '🚛',
      titulo: 'Transporte y Logística',
      descripcion: 'Servicio de flete y maniobras para entrega de contenedores en todo México',
      caracteristicas: ['Fletes nacionales', 'Maniobras de carga/descarga', 'Grúa y montacargas', 'Seguimiento en tiempo real']
    },
    {
      id: 2,
      icono: '🔌',
      titulo: 'Instalaciones Eléctricas',
      descripcion: 'Instalación completa de sistemas eléctricos certificados',
      caracteristicas: ['Cableado completo', 'Tableros eléctricos', 'Iluminación LED', 'Tomas y contactos']
    },
    {
      id: 3,
      icono: '❄️',
      titulo: 'Climatización',
      descripcion: 'Sistemas de aire acondicionado y ventilación',
      caracteristicas: ['Aire acondicionado', 'Ventilación', 'Extractores', 'Control de temperatura']
    },
    {
      id: 4,
      icono: '💧',
      titulo: 'Plomería e Hidráulica',
      descripcion: 'Instalaciones sanitarias y sistemas de agua',
      caracteristicas: ['Tuberías y conexiones', 'Baños completos', 'Cocinas', 'Drenaje y desagüe']
    },
    {
      id: 5,
      icono: '🎨',
      titulo: 'Acabados Personalizados',
      descripcion: 'Diseño interior y exterior a tu gusto',
      caracteristicas: ['Pintura especializada', 'Revestimientos', 'Pisos', 'Decoración']
    },
    {
      id: 6,
      icono: '🔒',
      titulo: 'Seguridad',
      descripcion: 'Sistemas de seguridad y protección',
      caracteristicas: ['Cerraduras de seguridad', 'Cámaras', 'Alarmas', 'Iluminación exterior']
    },
    {
      id: 7,
      icono: '🪟',
      titulo: 'Ventanas y Puertas',
      descripcion: 'Instalación de accesos y ventilación',
      caracteristicas: ['Puertas de seguridad', 'Ventanas de aluminio', 'Cancelería', 'Cristales templados']
    },
    {
      id: 8,
      icono: '🧱',
      titulo: 'Aislamiento Térmico/Acústico',
      descripcion: 'Materiales aislantes de alta calidad',
      caracteristicas: ['Aislante térmico', 'Aislante acústico', 'Impermeabilización', 'Protección UV']
    },
    {
      id: 9,
      icono: '📐',
      titulo: 'Diseño Arquitectónico',
      descripcion: 'Planos y diseño personalizado',
      caracteristicas: ['Planos arquitectónicos', 'Renders 3D', 'Asesoría técnica', 'Diseño a medida']
    },
    {
      id: 10,
      icono: '🛠️',
      titulo: 'Mantenimiento',
      descripcion: 'Servicio de mantenimiento preventivo y correctivo',
      caracteristicas: ['Inspección periódica', 'Reparaciones', 'Pintura de retoque', 'Garantía extendida']
    }
  ];

  return (
    <div className="servicios-adicionales-page">
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Servicios Adicionales</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="servicios-adicionales-page__banner">
        <div className="servicios-adicionales-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="servicios-adicionales-page__banner-title">Servicios Adicionales</h1>
                <p className="servicios-adicionales-page__banner-subtitle">
                  Complementa tu proyecto con nuestros servicios especializados
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="servicios-adicionales-page__intro">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <h2 className="servicios-adicionales-page__section-title">Todo lo que Necesitas en un Solo Lugar</h2>
              <p className="servicios-adicionales-page__intro-text">
                Ofrecemos una amplia gama de servicios complementarios para que tu proyecto de contenedor
                esté completamente equipado y listo para usar. Desde el transporte hasta los acabados finales.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="servicios-adicionales-page__grid">
        <Container>
          <Row>
            {servicios.map((servicio) => (
              <Col key={servicio.id} lg={6} className="mb-4">
                <Card className="servicios-adicionales-page__card h-100">
                  <Card.Body>
                    <div className="servicios-adicionales-page__card-header">
                      <div className="servicios-adicionales-page__icono">{servicio.icono}</div>
                      <h3 className="servicios-adicionales-page__card-titulo">{servicio.titulo}</h3>
                    </div>
                    <p className="servicios-adicionales-page__card-descripcion">{servicio.descripcion}</p>
                    <ul className="servicios-adicionales-page__lista">
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

      <section className="servicios-adicionales-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="servicios-adicionales-page__cta-title">¿Necesitas Alguno de Estos Servicios?</h2>
              <p className="servicios-adicionales-page__cta-text">
                Cotiza los servicios adicionales que necesitas para tu proyecto.
                Te ayudamos a crear el espacio perfecto.
              </p>
              <Link to="/contacto" className="servicios-adicionales-page__cta-button">
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
