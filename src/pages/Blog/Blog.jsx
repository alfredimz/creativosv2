import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, Card, Badge, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.scss';

/**
 * @component Blog
 * @description Sistema de blog con listado de artículos
 * @phase Fase 3 - Sprint 7
 * @status Maquetado completo - Pendiente de contenido por Gemini
 */
const Blog = () => {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  // Datos de ejemplo para artículos
  const articulos = [
    {
      id: 1,
      titulo: 'Guía Completa para Elegir el Contenedor Perfecto',
      resumen: 'Todo lo que necesitas saber antes de comprar o rentar un contenedor marítimo',
      categoria: 'Guías',
      fecha: '15 Dic 2024',
      autor: 'Equipo Creativos',
      imagen: '/images/blog/placeholder.jpg',
      destacado: true
    },
    {
      id: 2,
      titulo: '10 Usos Innovadores de Contenedores Marítimos',
      resumen: 'Descubre las aplicaciones más creativas de los contenedores en diferentes industrias',
      categoria: 'Innovación',
      fecha: '12 Dic 2024',
      autor: 'María González',
      imagen: '/images/blog/placeholder.jpg',
      destacado: false
    },
    {
      id: 3,
      titulo: 'Mantenimiento Preventivo de Contenedores',
      resumen: 'Consejos profesionales para mantener tus contenedores en óptimas condiciones',
      categoria: 'Mantenimiento',
      fecha: '10 Dic 2024',
      autor: 'Juan Pérez',
      imagen: '/images/blog/placeholder.jpg',
      destacado: false
    },
    {
      id: 4,
      titulo: 'Tendencias 2024 en Construcción Modular',
      resumen: 'Las últimas tendencias en construcción con contenedores marítimos',
      categoria: 'Construcción',
      fecha: '08 Dic 2024',
      autor: 'Ana Martínez',
      imagen: '/images/blog/placeholder.jpg',
      destacado: false
    },
    {
      id: 5,
      titulo: 'Logística Eficiente: Optimiza tu Almacenamiento',
      resumen: 'Estrategias para maximizar el espacio de almacenamiento con contenedores',
      categoria: 'Logística',
      fecha: '05 Dic 2024',
      autor: 'Carlos Ruiz',
      imagen: '/images/blog/placeholder.jpg',
      destacado: false
    },
    {
      id: 6,
      titulo: 'Contenedores Refrigerados: Todo lo que Debes Saber',
      resumen: 'Guía completa sobre contenedores reefer y sus aplicaciones',
      categoria: 'Guías',
      fecha: '03 Dic 2024',
      autor: 'Laura Sánchez',
      imagen: '/images/blog/placeholder.jpg',
      destacado: false
    }
  ];

  const categorias = ['Todos', 'Guías', 'Innovación', 'Mantenimiento', 'Construcción', 'Logística'];

  const articuloDestacado = articulos.find(art => art.destacado);
  const otrosArticulos = articulos.filter(art => !art.destacado);

  return (
    <div className="blog-page">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Blog</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Banner Hero */}
      <section className="blog-page__banner">
        <div className="blog-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="blog-page__banner-title">Blog Creativos Espacios</h1>
                <p className="blog-page__banner-subtitle">
                  Noticias, consejos y tendencias sobre contenedores marítimos y soluciones modulares
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Filtros de Categorías */}
      <section className="blog-page__filtros">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="blog-page__filtros-container">
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    className={`blog-page__filtro-btn ${filtroActivo === categoria ? 'active' : ''}`}
                    onClick={() => setFiltroActivo(categoria)}
                  >
                    {categoria}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Artículo Destacado */}
      {articuloDestacado && (
        <section className="blog-page__destacado">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="blog-page__destacado-imagen">
                  <Badge bg="warning" className="blog-page__destacado-badge">Destacado</Badge>
                  <div className="blog-page__destacado-placeholder">Imagen del Artículo</div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="blog-page__destacado-contenido">
                  <Badge bg="primary" className="mb-3">{articuloDestacado.categoria}</Badge>
                  <h2 className="blog-page__destacado-titulo">{articuloDestacado.titulo}</h2>
                  <p className="blog-page__destacado-resumen">{articuloDestacado.resumen}</p>
                  <div className="blog-page__destacado-meta">
                    <span className="blog-page__destacado-autor">{articuloDestacado.autor}</span>
                    <span className="blog-page__destacado-separador">•</span>
                    <span className="blog-page__destacado-fecha">{articuloDestacado.fecha}</span>
                  </div>
                  <Link to={`/blog/${articuloDestacado.id}`} className="blog-page__destacado-btn">
                    Leer Artículo Completo →
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Grid de Artículos */}
      <section className="blog-page__grid">
        <Container>
          <Row>
            {otrosArticulos.map((articulo) => (
              <Col key={articulo.id} lg={4} md={6} className="mb-4">
                <Card className="blog-page__card h-100">
                  <div className="blog-page__card-imagen">
                    <div className="blog-page__card-placeholder">Imagen del Artículo</div>
                    <Badge bg="primary" className="blog-page__card-categoria">
                      {articulo.categoria}
                    </Badge>
                  </div>
                  <Card.Body>
                    <Card.Title className="blog-page__card-titulo">
                      <Link to={`/blog/${articulo.id}`}>{articulo.titulo}</Link>
                    </Card.Title>
                    <Card.Text className="blog-page__card-resumen">
                      {articulo.resumen}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="blog-page__card-footer">
                    <small className="blog-page__card-autor">{articulo.autor}</small>
                    <small className="blog-page__card-fecha">{articulo.fecha}</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Paginación */}
      <section className="blog-page__paginacion">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Pagination className="justify-content-center">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Subscription */}
      <section className="blog-page__newsletter">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="blog-page__newsletter-titulo">Suscríbete a Nuestro Newsletter</h2>
              <p className="blog-page__newsletter-texto">
                Recibe las últimas noticias y consejos directamente en tu correo
              </p>
              <div className="blog-page__newsletter-form">
                <input
                  type="email"
                  className="blog-page__newsletter-input"
                  placeholder="Tu correo electrónico"
                />
                <button className="blog-page__newsletter-btn">Suscribirse</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
