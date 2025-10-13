import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PerfiladorCliente.scss';

/**
 * @component PerfiladorCliente
 * @description Herramienta interactiva para identificar necesidades del cliente
 * @phase Fase 2 - Sprint 6
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const PerfiladorCliente = () => {
  return (
    <div className="perfilador-cliente">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Perfilador de Cliente</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="perfilador-cliente__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="perfilador-cliente__titulo">Perfilador de Cliente</h1>
              <p className="perfilador-cliente__subtitulo">
                Encuentra la solución perfecta para tus necesidades
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="perfilador-cliente__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/perfilador-cliente</code> | Fase: <strong>2</strong> | Sprint: <strong>6</strong>
                </p>
                <p className="text-muted text-center small">
                  Tech Stack: <code>React + Multi-step</code>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PerfiladorCliente;
