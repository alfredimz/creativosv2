import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Construccion.scss';

/**
 * @component DetallePaso
 * @description Detalle de cada paso del proceso de construcción
 * @phase Fase 2 - Sprint 4
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const DetallePaso = () => {
  const { paso } = useParams();

  return (
    <div className="detalle-paso">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/construccion" }}>Construcción</Breadcrumb.Item>
          <Breadcrumb.Item active>Paso {paso}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="detalle-paso__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="detalle-paso__titulo">Paso {paso}</h1>
              <p className="detalle-paso__subtitulo">
                Detalle del proceso de construcción
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="detalle-paso__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/construccion/:paso</code> | Fase: <strong>2</strong> | Sprint: <strong>4</strong>
                </p>
                <p className="text-muted text-center small">
                  Paso actual: <strong>{paso}</strong>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default DetallePaso;
