import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Videos.scss';

/**
 * @component Videos
 * @description Galería de videos demostrativos y testimoniales
 * @phase Fase 2 - Sprint 5
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const Videos = () => {
  return (
    <div className="videos">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Videos</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="videos__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="videos__titulo">Videos</h1>
              <p className="videos__subtitulo">
                Descubre nuestros proyectos y procesos en video
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="videos__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/videos</code> | Fase: <strong>2</strong> | Sprint: <strong>5</strong>
                </p>
                <p className="text-muted text-center small">
                  Tech Stack: <code>React + YouTube API</code>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Videos;
