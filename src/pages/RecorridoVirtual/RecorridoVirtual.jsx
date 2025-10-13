import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RecorridoVirtual.scss';

/**
 * @component RecorridoVirtual
 * @description Recorrido virtual 360° de instalaciones y contenedores
 * @phase Fase 3 - Sprint 7
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const RecorridoVirtual = () => {
  return (
    <div className="recorrido-virtual">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Recorrido Virtual</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="recorrido-virtual__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="recorrido-virtual__titulo">Recorrido Virtual</h1>
              <p className="recorrido-virtual__subtitulo">
                Explora nuestras instalaciones en 360 grados
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="recorrido-virtual__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/recorrido-virtual</code> | Fase: <strong>3</strong> | Sprint: <strong>7</strong>
                </p>
                <p className="text-muted text-center small">
                  Complejidad: <strong>MUY ALTA</strong> - Tour 360°
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default RecorridoVirtual;
