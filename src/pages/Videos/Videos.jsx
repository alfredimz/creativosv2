import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO, seoConfig } from '../../components/SEO';
import './Videos.scss';

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
      <SEO {...seoConfig.videos} />

      {/* Hero Section */}
      <section className="videos-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="videos-hero__title">Galería de Videos</h1>
              <p className="videos-hero__description">
                Descubre nuestros proyectos, procesos y testimoniales en video
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filtros Section */}
      <section className="videos-filtros">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="videos-filtros__container">
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    className={`videos-filtros__button ${categoriaActiva === categoria ? 'videos-filtros__button--active' : ''}`}
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

      {/* Videos Grid Section */}
      <section className="videos-grid">
        <Container>
          <Row>
            {videosFiltrados.map((video) => (
              <Col key={video.id} lg={4} md={6} className="mb-4">
                <Card className="videos-grid__card h-100">
                  <div className="videos-grid__card-thumbnail">
                    <div className="videos-grid__card-placeholder">
                      <div className="videos-grid__play-button">▶</div>
                      <div className="videos-grid__duracion">{video.duracion}</div>
                    </div>
                  </div>
                  <Card.Body>
                    <span className="videos-grid__card-categoria">{video.categoria}</span>
                    <Card.Title className="videos-grid__card-titulo">
                      {video.titulo}
                    </Card.Title>
                    <Card.Text className="videos-grid__card-descripcion">
                      {video.descripcion}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="videos-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="videos-cta__title">¿Quieres Ver tu Proyecto en Video?</h2>
              <p className="videos-cta__text">
                Contáctanos y descubre cómo podemos transformar tu visión en realidad.
                Documentamos cada proyecto con videos profesionales.
              </p>
              <Link to="/contacto" className="videos-cta__button">
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
