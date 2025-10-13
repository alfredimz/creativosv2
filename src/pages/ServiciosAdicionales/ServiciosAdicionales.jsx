import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiciosAdicionales.scss';

/**
 * @component ServiciosAdicionales
 * @description Servicios complementarios disponibles
 * @phase Fase 2 - Sprint 4
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const ServiciosAdicionales = () => {
  return (
    <div className="servicios-adicionales">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Servicios Adicionales</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="servicios-adicionales__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="servicios-adicionales__titulo">Servicios Adicionales</h1>
              <p className="servicios-adicionales__subtitulo">
                Servicios complementarios para tu proyecto
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="servicios-adicionales__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/servicios-adicionales</code> | Fase: <strong>2</strong> | Sprint: <strong>4</strong>
                </p>
                <p className="text-muted text-center small">
                  Descripción: <code>Servicios complementarios</code>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ServiciosAdicionales;
