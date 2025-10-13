import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Servicios.scss';

/**
 * @component Transformacion
 * @description Página individual del servicio de Transformación de Contenedores
 * @phase Fase 1 - Sprint 2
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const Transformacion = () => {
  return (
    <div className="servicio-transformacion">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/servicios" }}>Servicios</Breadcrumb.Item>
          <Breadcrumb.Item active>Transformación de Contenedores</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="servicio-transformacion__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="servicio-transformacion__titulo">Transformación de Contenedores</h1>
              <p className="servicio-transformacion__subtitulo">
                Convertimos contenedores en espacios únicos
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="servicio-transformacion__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  ⏳ Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/servicios/transformacion</code> | Fase: <strong>1</strong> | Sprint: <strong>2</strong>
                </p>
                <p className="text-muted text-center small">
                  PDF Diseño: <code>servicios.txt</code>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Transformacion;
