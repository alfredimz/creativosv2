import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Videos.scss';

/**
 * @component Videos
 * @description Galería de videos demostrativos y testimoniales
 * @phase Fase 2 - Sprint 5
 * @status Maquetado completo - Pendiente de contenido por Gemini
 */
const Videos = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const videos = [
    {
      id: 1,
      titulo: 'Proceso de Transformación de Contenedor a Oficina',
      descripcion: 'Mira cómo transformamos un contenedor marítimo en una oficina moderna y funcional',
      categoria: 'Transformación',
      duracion: '5:32',
      youtubeId: 'dQw4w9WgXcQ', // Placeholder
      thumbnail: '/images/video-placeholder.jpg'
    },
    {
      id: 2,
      titulo: 'Recorrido Virtual: Contenedor 20 pies Modificado',
      descripcion: 'Tour completo por el interior de un contenedor 20 pies completamente equipado',
      categoria: 'Recorridos',
      duracion: '3:45',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: '/images/video-placeholder.jpg'
    },
    {
      id: 3,
      titulo: 'Testimonial Cliente: Proyecto Residencial',
      descripcion: 'Conoce la experiencia de nuestros clientes con su proyecto de vivienda modular',
      categoria: 'Testimoniales',
      duracion: '4:12',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: '/images/video-placeholder.jpg'
    },
    {
      id: 4,
      titulo: 'Instalación de Contenedor en Sitio',
      descripcion: 'Proceso completo de entrega e instalación de contenedor modificado',
      categoria: 'Logística',
      duracion: '6:20',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: '/images/video-placeholder.jpg'
    },
    {
      id: 5,
      titulo: 'Modificaciones Personalizadas: Caso de Éxito',
      descripcion: 'Diseño y construcción de un espacio comercial único con contenedores',
      categoria: 'Transformación',
      duracion: '7:15',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: '/images/video-placeholder.jpg'
    },
    {
      id: 6,
      titulo: 'Tour: Nuestro Patio de Contenedores en CDMX',
      descripcion: 'Recorre nuestras instalaciones y conoce nuestro inventario',
      categoria: 'Recorridos',
      duracion: '4:50',
      youtubeId: 'dQw4w9WgXcQ',
      thumbnail: '/images/video-placeholder.jpg'
    }
  ];

  const categorias = ['Todos', 'Transformación', 'Recorridos', 'Testimoniales', 'Logística'];

  const videosFiltrados = categoriaActiva === 'Todos'
    ? videos
    : videos.filter(v => v.categoria === categoriaActiva);

  return (
    <div className="videos-page">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Videos</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Banner Hero */}
      <section className="videos-page__banner">
        <div className="videos-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="videos-page__banner-title">Galería de Videos</h1>
                <p className="videos-page__banner-subtitle">
                  Descubre nuestros proyectos, procesos y testimoniales en video
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Filtros */}
      <section className="videos-page__filtros">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="videos-page__filtros-container">
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    className={`videos-page__filtro-btn ${categoriaActiva === categoria ? 'active' : ''}`}
                    onClick={() => setCategoriaActiva(categoria)}
                  >
                    {categoria}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Grid de Videos */}
      <section className="videos-page__grid">
        <Container>
          <Row>
            {videosFiltrados.map((video) => (
              <Col key={video.id} lg={4} md={6} className="mb-4">
                <Card className="videos-page__card h-100">
                  <div className="videos-page__card-thumbnail">
                    <div className="videos-page__card-placeholder">
                      <div className="videos-page__play-button">▶</div>
                      <div className="videos-page__duracion">{video.duracion}</div>
                    </div>
                  </div>
                  <Card.Body>
                    <Badge bg="primary" className="mb-2">{video.categoria}</Badge>
                    <Card.Title className="videos-page__card-titulo">
                      {video.titulo}
                    </Card.Title>
                    <Card.Text className="videos-page__card-descripcion">
                      {video.descripcion}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="videos-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="videos-page__cta-title">¿Quieres Ver tu Proyecto en Video?</h2>
              <p className="videos-page__cta-text">
                Contáctanos y descubre cómo podemos transformar tu visión en realidad.
                Documentamos cada proyecto con videos profesionales.
              </p>
              <Link to="/contacto" className="videos-page__cta-button">
                Iniciar Proyecto
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Videos;
