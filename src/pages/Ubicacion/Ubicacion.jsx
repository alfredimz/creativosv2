import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Ubicacion.scss';

/**
 * @component Ubicacion
 * @description Ubicación de nuestras oficinas e instalaciones
 * @phase Fase 2 - Sprint 5
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const Ubicacion = () => {
  return (
    <div className="ubicacion">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Nuestra Ubicación</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="ubicacion__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="ubicacion__titulo">Nuestra Ubicación</h1>
              <p className="ubicacion__subtitulo">
                Encuéntranos y visita nuestras instalaciones
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="ubicacion__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/ubicacion</code> | Fase: <strong>2</strong> | Sprint: <strong>5</strong>
                </p>
                <p className="text-muted text-center small">
                  Tech Stack: <code>React + Google Maps</code>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Ubicacion;
