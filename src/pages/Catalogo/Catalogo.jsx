import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Catalogo.scss';

/**
 * @component Catalogo
 * @description Catálogo general de productos y contenedores
 * @phase Fase 1 - Sprint 1
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const Catalogo = () => {
  return (
    <div className="catalogo">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Catálogo General</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="catalogo__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="catalogo__titulo">Catálogo General</h1>
              <p className="catalogo__subtitulo">
                Explora nuestra completa gama de productos y soluciones
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="catalogo__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/catalogo</code> | Fase: <strong>1</strong> | Sprint: <strong>1</strong>
                </p>
                <p className="text-muted text-center small">
                  PDF Diseño: <code>Diseño custom</code>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Catalogo;
