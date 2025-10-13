import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PatiosContenedores.scss';

/**
 * @component PatiosContenedores
 * @description Ubicación y detalles de nuestros patios de contenedores
 * @phase Fase 2 - Sprint 5
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const PatiosContenedores = () => {
  return (
    <div className="patios-contenedores">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Nuestros Patios</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="patios-contenedores__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="patios-contenedores__titulo">Nuestros Patios</h1>
              <p className="patios-contenedores__subtitulo">
                Conoce nuestros patios de contenedores y almacenamiento
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="patios-contenedores__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/patios-contenedores</code> | Fase: <strong>2</strong> | Sprint: <strong>5</strong>
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

export default PatiosContenedores;
