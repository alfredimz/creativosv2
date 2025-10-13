import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Catalogo.scss';

/**
 * @component CatalogoCategoria
 * @description Vista de productos por categoría específica
 * @phase Fase 2 - Sprint 6
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const CatalogoCategoria = () => {
  const { categoria } = useParams();

  return (
    <div className="catalogo-categoria">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/catalogo" }}>Catálogo</Breadcrumb.Item>
          <Breadcrumb.Item active>{categoria}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="catalogo-categoria__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="catalogo-categoria__titulo">Categoría: {categoria}</h1>
              <p className="catalogo-categoria__subtitulo">
                Productos de la categoría seleccionada
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="catalogo-categoria__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/catalogo/:categoria</code> | Fase: <strong>2</strong> | Sprint: <strong>6</strong>
                </p>
                <p className="text-muted text-center small">
                  Categoría actual: <strong>{categoria}</strong>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CatalogoCategoria;
