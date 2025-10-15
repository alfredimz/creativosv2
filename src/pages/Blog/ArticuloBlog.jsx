import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ArticuloBlog.scss';

const ArticuloBlog = () => {
  // Note: slug parameter available via useParams() if needed for dynamic content

  // Datos de ejemplo del artículo
  const articulo = {
    titulo: 'Guía Completa para Elegir el Contenedor Perfecto',
    categoria: 'Guías',
    autor: 'Equipo Creativos',
    fecha: '15 Dic 2024',
    imagen: '/images/blog/placeholder.jpg',
    contenido: [
      {
        tipo: 'parrafo',
        texto: 'Elegir el contenedor marítimo adecuado para tu proyecto puede parecer una decisión compleja, pero con la información correcta, el proceso se simplifica considerablemente. En esta guía completa, te explicaremos todo lo que necesitas saber para tomar la mejor decisión.'
      },
      {
        tipo: 'subtitulo',
        texto: 'Tipos de Contenedores Disponibles'
      },
      {
        tipo: 'parrafo',
        texto: 'Existen varios tipos de contenedores marítimos, cada uno diseñado para satisfacer necesidades específicas. Los más comunes son los contenedores Dry (secos) de 20 y 40 pies, ideales para almacenamiento general y transformaciones habitables.'
      },
      {
        tipo: 'parrafo',
        texto: 'Los contenedores High Cube ofrecen 30cm adicionales de altura, perfectos para proyectos que requieren mayor espacio vertical. Los contenedores Reefer mantienen temperatura controlada, ideales para productos que requieren refrigeración.'
      },
      {
        tipo: 'subtitulo',
        texto: 'Factores a Considerar'
      },
      {
        tipo: 'parrafo',
        texto: 'El tamaño de tu proyecto determinará en gran medida el tipo de contenedor que necesitas. Un contenedor de 20 pies ofrece aproximadamente 14.5m² de espacio, mientras que uno de 40 pies proporciona 29m².'
      }
    ]
  };

  // Artículos relacionados de ejemplo
  const articulosRelacionados = [
    {
      id: 2,
      titulo: '10 Usos Innovadores de Contenedores Marítimos',
      categoria: 'Innovación',
      fecha: '12 Dic 2024'
    },
    {
      id: 3,
      titulo: 'Mantenimiento Preventivo de Contenedores',
      categoria: 'Mantenimiento',
      fecha: '10 Dic 2024'
    },
    {
      id: 4,
      titulo: 'Tendencias 2024 en Construcción Modular',
      categoria: 'Construcción',
      fecha: '08 Dic 2024'
    }
  ];

  return (
    <div className="articulo-blog-page">
      {/* Hero Section */}
      <section className="articulo-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="articulo-hero__breadcrumb">
                <Link to="/" className="articulo-hero__breadcrumb-link">Inicio</Link>
                <span className="articulo-hero__breadcrumb-separator">/</span>
                <Link to="/blog" className="articulo-hero__breadcrumb-link">Blog</Link>
                <span className="articulo-hero__breadcrumb-separator">/</span>
                <span className="articulo-hero__breadcrumb-current">Artículo</span>
              </div>
              <span className="articulo-hero__categoria">{articulo.categoria}</span>
              <h1 className="articulo-hero__titulo">{articulo.titulo}</h1>
              <div className="articulo-hero__meta">
                <span className="articulo-hero__autor">{articulo.autor}</span>
                <span className="articulo-hero__separador">•</span>
                <span className="articulo-hero__fecha">{articulo.fecha}</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Imagen Section */}
      <section className="articulo-imagen">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="articulo-imagen__placeholder">
                Imagen Principal del Artículo
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Section */}
      <section className="articulo-contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              {articulo.contenido.map((bloque, index) => {
                if (bloque.tipo === 'parrafo') {
                  return (
                    <p key={index} className="articulo-contenido__parrafo">
                      {bloque.texto}
                    </p>
                  );
                } else if (bloque.tipo === 'subtitulo') {
                  return (
                    <h2 key={index} className="articulo-contenido__subtitulo">
                      {bloque.texto}
                    </h2>
                  );
                }
                return null;
              })}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Relacionados Section */}
      <section className="articulo-relacionados">
        <Container>
          <h2 className="articulo-relacionados__titulo">Artículos Relacionados</h2>
          <Row>
            {articulosRelacionados.map((art) => (
              <Col key={art.id} lg={4} md={6} className="mb-4">
                <Card className="articulo-relacionados__card h-100">
                  <Card.Body>
                    <span className="articulo-relacionados__card-categoria">{art.categoria}</span>
                    <Card.Title className="articulo-relacionados__card-titulo">
                      <Link to={`/blog/${art.id}`}>{art.titulo}</Link>
                    </Card.Title>
                    <small className="articulo-relacionados__card-fecha">{art.fecha}</small>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="articulo-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="articulo-cta__titulo">¿Listo para tu Proyecto?</h2>
              <p className="articulo-cta__texto">
                Contáctanos y descubre cómo podemos ayudarte con tu proyecto de contenedores
              </p>
              <div className="articulo-cta__buttons">
                <Link to="/contacto" className="articulo-cta__button articulo-cta__button--primary">
                  Contactar
                </Link>
                <Link to="/blog" className="articulo-cta__button articulo-cta__button--secondary">
                  Más Artículos
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ArticuloBlog;
