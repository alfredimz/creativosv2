import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './QuejasSugerencias.scss';

/**
 * @component QuejasSugerencias
 * @description Buzón de quejas y sugerencias para retroalimentación
 * @phase Fase 2 - Sprint 6
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const QuejasSugerencias = () => {
  return (
    <div className="quejas-sugerencias">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Buzón de Quejas y Sugerencias</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="quejas-sugerencias__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="quejas-sugerencias__titulo">Buzón de Quejas y Sugerencias</h1>
              <p className="quejas-sugerencias__subtitulo">
                Tu opinión nos ayuda a mejorar
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="quejas-sugerencias__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/quejas-sugerencias</code> | Fase: <strong>2</strong> | Sprint: <strong>6</strong>
                </p>
                <p className="text-muted text-center small">
                  Tech Stack: <code>Formik + Yup</code>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default QuejasSugerencias;
