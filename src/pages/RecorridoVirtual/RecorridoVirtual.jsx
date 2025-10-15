import React from 'react';
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO, seoConfig } from '../../components/SEO';
import './RecorridoVirtual.scss';

const RecorridoVirtual = () => {
  const tours = [
    {
      id: 1,
      titulo: 'Contenedor 20 pies - Oficina Moderna',
      descripcion: 'Recorre virtualmente un contenedor transformado en oficina completamente equipada',
      tipo: 'Tour 360°'
    },
    {
      id: 2,
      titulo: 'Contenedor 40 pies - Vivienda',
      descripcion: 'Explora una vivienda modular completa con sala, cocina, baño y recámara',
      tipo: 'Tour 360°'
    },
    {
      id: 3,
      titulo: 'Patio CDMX - Vista General',
      descripcion: 'Conoce nuestras instalaciones y el inventario disponible',
      tipo: 'Tour 360°'
    }
  ];

  return (
    <div className="recorrido-page">
      <SEO {...seoConfig.recorridoVirtual} />

      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Recorrido Virtual</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="recorrido-page__banner">
        <div className="recorrido-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="recorrido-page__banner-title">Recorrido Virtual 360°</h1>
                <p className="recorrido-page__banner-subtitle">
                  Explora nuestros contenedores e instalaciones desde la comodidad de tu hogar
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="recorrido-page__intro">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <h2 className="recorrido-page__section-title">Experimenta Nuestros Proyectos en 360°</h2>
              <p className="recorrido-page__intro-text">
                Utiliza nuestros recorridos virtuales para conocer en detalle cómo lucen nuestros contenedores transformados.
                Podrás apreciar los acabados, distribución del espacio y calidad de nuestro trabajo.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="recorrido-page__tours">
        <Container>
          <Row>
            {tours.map((tour) => (
              <Col key={tour.id} lg={4} md={6} className="mb-4">
                <Card className="recorrido-page__card h-100">
                  <div className="recorrido-page__card-viewer">
                    <div className="recorrido-page__card-placeholder">
                      <div className="recorrido-page__360-icon">360°</div>
                      <p className="recorrido-page__click-text">Click para explorar</p>
                    </div>
                  </div>
                  <Card.Body>
                    <div className="recorrido-page__card-tipo">{tour.tipo}</div>
                    <Card.Title className="recorrido-page__card-titulo">{tour.titulo}</Card.Title>
                    <Card.Text className="recorrido-page__card-descripcion">{tour.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="recorrido-page__instrucciones">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="recorrido-page__instrucciones-card">
                <Card.Body>
                  <h3 className="recorrido-page__instrucciones-titulo">Cómo Navegar el Recorrido</h3>
                  <Row>
                    <Col md={6}>
                      <div className="recorrido-page__instruccion-item">
                        <strong>🖱️ Mouse/Trackpad:</strong>
                        <p>Arrastra para rotar la vista 360 grados</p>
                      </div>
                      <div className="recorrido-page__instruccion-item">
                        <strong>📱 Móvil:</strong>
                        <p>Desliza el dedo para explorar</p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="recorrido-page__instruccion-item">
                        <strong>🔍 Zoom:</strong>
                        <p>Usa la rueda del mouse o pinch en móvil</p>
                      </div>
                      <div className="recorrido-page__instruccion-item">
                        <strong>🎯 Hotspots:</strong>
                        <p>Click en puntos destacados para más info</p>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="recorrido-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="recorrido-page__cta-title">¿Te Interesó Algún Diseño?</h2>
              <p className="recorrido-page__cta-text">
                Contáctanos para agendar una visita presencial o solicitar un proyecto personalizado basado
                en los diseños que viste en el recorrido virtual.
              </p>
              <Link to="/contacto" className="recorrido-page__cta-button">
                Contactar Ahora
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default RecorridoVirtual;
