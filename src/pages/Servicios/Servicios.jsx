
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Servicios.scss';

const Servicios = () => {
  const serviciosIntegrales = [
    {
      title: 'Transporte',
      description: 'Traslado a cualquier parte de la República Mexicana, adaptándonos a los plazos de entrega.',
      icon: '🚛'
    },
    {
      title: 'Maniobras',
      description: 'Aseguramos la carga y descarga en un proceso ágil y seguro.',
      icon: '🏗️'
    },
    {
      title: 'Diseño arquitectónico',
      description: 'Atención y asesoramiento cuando lo requieras, acompañarte en todo.',
      icon: '🏛️'
    },
    {
      title: 'Herrería',
      description: 'Desarrollo de diseños personalizados y únicos para satisfacer tus necesidades.',
      icon: '🧰'
    },
    {
      title: 'Instalaciones aplicadas',
      description: 'Eléctrica, hidráulica, sanitaria, gas y red de internet.',
      icon: '🧑‍🔧'
    },
    {
      title: 'Instalación de acabados interiores',
      description: 'Tablaroca, azulejos, piso laminado, pasta texturizada.',
      icon: '🔨'
    },
    {
      title: 'Instalación de aislantes térmicos',
      description: 'Fibra de vidrio, madera, foamular, aire acondicionado.',
      icon: '🪵'
    },
    {
      title: 'Acabados exteriores',
      description: 'Pintura esmalte, pintura bajo el proceso de sand blas, y bajo normas especificadas.',
      icon: '🎨'
    }
  ];

  return (
    <div className="servicios-page">
      {/* Banner Principal */}
      <section className="banner-section text-center">
        <div className="banner-overlay">
          <Container>
            <h1>Nuestros Servicios</h1>
            <p className="banner-text">
              ¡Transforma tu espacio con nuestros contenedores marítimos! ¿Buscas un almacén seguro, una oficina móvil, un hogar único o un espacio comercial? ¡Tenemos la solución perfecta para ti!
            </p>
          </Container>
        </div>
      </section>

      {/* Sección Venta y Renta */}
      <section className="venta-renta-section">
        <Container>
          <Row>
            <Col md={6} className="text-center mb-4">
              <h2>Venta</h2>
              <p>Ofrecemos contenedores marítimos en diversos tamaños (10, 20 y 40 pies), ya sean usados o nuevos. 🚚</p>
            </Col>
            <Col md={6} className="text-center mb-4">
              <h2>Renta</h2>
              <p>Planes de renta flexibles para tus proyectos a corto o largo plazo. 📝</p>
            </Col>
          </Row>
          <div className="text-center mt-4">
              <h2>Modificaciones a la Medida</h2>
              <p>Desde diseños básicos hasta construcciones completas, ¡tu imaginación es el límite! 🏘️</p>
          </div>
        </Container>
      </section>

      {/* Sección Servicios Integrales */}
      <section className="servicios-integrales-section">
        <Container>
          <h2 className="text-center mb-5">Servicios Integrales</h2>
          <Row>
            {serviciosIntegrales.map((servicio, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="h-100 text-center servicio-card">
                  <Card.Body>
                    <div className="servicio-icon">{servicio.icon}</div>
                    <Card.Title>{servicio.title}</Card.Title>
                    <Card.Text>{servicio.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Servicios;
