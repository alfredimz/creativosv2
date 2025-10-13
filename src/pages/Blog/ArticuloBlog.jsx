import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Blog.scss';

/**
 * @component ArticuloBlog
 * @description Vista de artículo individual del blog
 * @phase Fase 3 - Sprint 7
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const ArticuloBlog = () => {
  const { slug } = useParams();

  return (
    <div className="articulo-blog">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/blog" }}>Blog</Breadcrumb.Item>
          <Breadcrumb.Item active>{slug}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="articulo-blog__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="articulo-blog__titulo">Artículo del Blog</h1>
              <p className="articulo-blog__subtitulo">
                {slug}
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="articulo-blog__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/blog/:slug</code> | Fase: <strong>3</strong> | Sprint: <strong>7</strong>
                </p>
                <p className="text-muted text-center small">
                  Artículo actual: <strong>{slug}</strong>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ArticuloBlog;
