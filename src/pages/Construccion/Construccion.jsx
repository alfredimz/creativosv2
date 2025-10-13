import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Construccion.scss';

/**
 * @component Construccion
 * @description Proceso de construcción de contenedores paso a paso
 * @phase Fase 2 - Sprint 4
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const Construccion = () => {
  return (
    <div className="construccion">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Construcción</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="construccion__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="construccion__titulo">Construcción</h1>
              <p className="construccion__subtitulo">
                Proceso completo de construcción y transformación de contenedores
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="construccion__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/construccion</code> | Fase: <strong>2</strong> | Sprint: <strong>4</strong>
                </p>
                <p className="text-muted text-center small">
                  Descripción: <code>Proceso paso a paso</code>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Construccion;
