import React, { useState } from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO, seoConfig } from '../../components/SEO';
import './Blog.scss';

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
      <SEO {...seoConfig.blog} />

      {/* Hero Section */}
      <section className="blog-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="blog-hero__title">Blog Creativos Espacios</h1>
              <p className="blog-hero__description">
                Noticias, consejos y tendencias sobre contenedores marítimos y soluciones modulares
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filtros Section */}
      <section className="blog-filtros">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="blog-filtros__container">
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    className={`blog-filtros__button ${filtroActivo === categoria ? 'blog-filtros__button--active' : ''}`}
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

      {/* Destacado Section */}
      {articuloDestacado && (
        <section className="blog-destacado">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="blog-destacado__imagen">
                  <span className="blog-destacado__badge">Destacado</span>
                  <div className="blog-destacado__placeholder">Imagen del Artículo</div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="blog-destacado__contenido">
                  <span className="blog-destacado__categoria">{articuloDestacado.categoria}</span>
                  <h2 className="blog-destacado__titulo">{articuloDestacado.titulo}</h2>
                  <p className="blog-destacado__resumen">{articuloDestacado.resumen}</p>
                  <div className="blog-destacado__meta">
                    <span className="blog-destacado__autor">{articuloDestacado.autor}</span>
                    <span className="blog-destacado__separador">•</span>
                    <span className="blog-destacado__fecha">{articuloDestacado.fecha}</span>
                  </div>
                  <Link to={`/blog/${articuloDestacado.id}`} className="blog-destacado__button">
                    Leer Artículo Completo →
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Grid Section */}
      <section className="blog-grid">
        <Container>
          <Row>
            {otrosArticulos.map((articulo) => (
              <Col key={articulo.id} lg={4} md={6} className="mb-4">
                <Card className="blog-grid__card h-100">
                  <div className="blog-grid__card-imagen">
                    <div className="blog-grid__card-placeholder">Imagen del Artículo</div>
                    <span className="blog-grid__card-categoria">
                      {articulo.categoria}
                    </span>
                  </div>
                  <Card.Body>
                    <Card.Title className="blog-grid__card-titulo">
                      <Link to={`/blog/${articulo.id}`}>{articulo.titulo}</Link>
                    </Card.Title>
                    <Card.Text className="blog-grid__card-resumen">
                      {articulo.resumen}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="blog-grid__card-footer">
                    <small className="blog-grid__card-autor">{articulo.autor}</small>
                    <small className="blog-grid__card-fecha">{articulo.fecha}</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Paginacion Section */}
      <section className="blog-paginacion">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Pagination className="justify-content-center blog-paginacion__controls">
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

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="blog-newsletter__title">Suscríbete a Nuestro Newsletter</h2>
              <p className="blog-newsletter__text">
                Recibe las últimas noticias y consejos directamente en tu correo
              </p>
              <div className="blog-newsletter__form">
                <input
                  type="email"
                  className="blog-newsletter__input"
                  placeholder="Tu correo electrónico"
                />
                <button className="blog-newsletter__button">Suscribirse</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
