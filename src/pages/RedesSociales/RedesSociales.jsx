import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RedesSociales.scss';

const RedesSociales = () => {
  const redesSociales = [
    {
      nombre: 'Instagram',
      username: '@creativosespaciosmx',
      url: 'https://www.instagram.com/creativosespaciosmx',
      icono: '📷',
      color: '#E4405F',
      descripcion: 'Fotos de nuestros proyectos, antes y después, ideas de diseño.',
      seguidores: '2.5K'
    },
    {
      nombre: 'YouTube',
      username: 'Creativos Espacios',
      url: 'https://www.youtube.com/@creativosespacios',
      icono: '📺',
      color: '#FF0000',
      descripcion: 'Videos de proyectos, tutoriales, recorridos virtuales y más.',
      seguidores: '1.8K'
    },
    {
      nombre: 'TikTok',
      username: '@creativosespaciosmx',
      url: 'https://www.tiktok.com/@creativosespaciosmx',
      icono: '🎵',
      color: '#000000',
      descripcion: 'Videos cortos creativos, tips rápidos, transformaciones.',
      seguidores: '3.2K'
    },
    {
      nombre: 'X (Twitter)',
      username: '@creaespaciosmx',
      url: 'https://x.com/creaespaciosmx',
      icono: '𝕏',
      color: '#000000',
      descripcion: 'Noticias, actualizaciones, promociones y comunicados.',
      seguidores: '1.1K'
    },
    {
      nombre: 'Facebook',
      username: 'Creativos Espacios',
      url: 'https://www.facebook.com/creativosespacios',
      icono: '👍',
      color: '#1877F2',
      descripcion: 'Comunidad, eventos, casos de éxito y testimonios.',
      seguidores: '4.5K'
    }
  ];

  const hashtags = [
    '#ContenedoresMarítimos',
    '#CasasContenedor',
    '#ArquitecturaSustentable',
    '#EspaciosCreativos',
    '#OficinaModular',
    '#ViviendasSustentables',
    '#ConstrucciónModular',
    '#ContenedoresHabitables',
    '#LocalComercial',
    '#BodegaSegura'
  ];

  const ultimasPublicaciones = [
    {
      red: 'Instagram',
      tipo: 'Foto',
      descripcion: 'Nueva oficina modular de 40 pies terminada para cliente en Guadalajara 🏢',
      fecha: 'Hace 2 días',
      likes: 245,
      imagen: 'post-oficina.jpg'
    },
    {
      red: 'YouTube',
      tipo: 'Video',
      descripcion: 'TOUR COMPLETO: Casa contenedor de 2 niveles | 80m² habitables',
      fecha: 'Hace 5 días',
      likes: 1823,
      imagen: 'video-casa.jpg'
    },
    {
      red: 'TikTok',
      tipo: 'Video',
      descripcion: 'Transformación de contenedor en 60 segundos ⚡',
      fecha: 'Hace 1 semana',
      likes: 5620,
      imagen: 'tiktok-transformacion.jpg'
    }
  ];

  return (
    <div className="redes-sociales-page">
      {/* Hero Section */}
      <section className="redes-sociales-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="redes-sociales-hero__title">Síguenos en Redes Sociales</h1>
              <p className="redes-sociales-hero__description">
                Únete a nuestra comunidad y descubre ideas, proyectos inspiradores y contenido exclusivo
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Redes Sociales Cards */}
      <section className="redes-sociales-cards">
        <Container>
          <Row>
            {redesSociales.map((red, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="redes-sociales-cards__card h-100">
                  <Card.Body className="text-center">
                    <div className="redes-sociales-cards__card-icono">
                      {red.icono}
                    </div>
                    <Card.Title className="redes-sociales-cards__card-nombre">{red.nombre}</Card.Title>
                    <Card.Subtitle className="redes-sociales-cards__card-username">
                      {red.username}
                    </Card.Subtitle>
                    <Card.Text className="redes-sociales-cards__card-descripcion">
                      {red.descripcion}
                    </Card.Text>
                    <div className="redes-sociales-cards__card-seguidores">
                      <strong>{red.seguidores}</strong> seguidores
                    </div>
                    <a
                      href={red.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="redes-sociales-cards__card-button"
                    >
                      Seguir en {red.nombre}
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Últimas Publicaciones */}
      <section className="redes-sociales-publicaciones">
        <Container>
          <h2 className="redes-sociales-publicaciones__title">Últimas Publicaciones</h2>
          <Row>
            {ultimasPublicaciones.map((pub, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="redes-sociales-publicaciones__card h-100">
                  <div
                    className="redes-sociales-publicaciones__card-imagen"
                    style={{
                      backgroundImage: `url(/images/social/${pub.imagen})`,
                      height: '250px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="redes-sociales-publicaciones__card-tipo">{pub.tipo}</div>
                  </div>
                  <Card.Body>
                    <div className="redes-sociales-publicaciones__card-red">
                      {pub.red}
                    </div>
                    <Card.Text className="redes-sociales-publicaciones__card-descripcion">
                      {pub.descripcion}
                    </Card.Text>
                    <div className="redes-sociales-publicaciones__card-footer">
                      <span className="redes-sociales-publicaciones__card-fecha">{pub.fecha}</span>
                      <div className="redes-sociales-publicaciones__card-likes">
                        ❤️ {pub.likes.toLocaleString()}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Hashtags */}
      <section className="redes-sociales-hashtags">
        <Container>
          <h2 className="redes-sociales-hashtags__title">Síguenos con estos Hashtags</h2>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="redes-sociales-hashtags__container">
                {hashtags.map((hashtag, index) => (
                  <span key={index} className="redes-sociales-hashtags__badge">
                    {hashtag}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Widgets Placeholder */}
      <section className="redes-sociales-widgets">
        <Container>
          <h2 className="redes-sociales-widgets__title">Nuestro Feed Social</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="redes-sociales-widgets__card h-100">
                <Card.Body className="text-center">
                  <div className="redes-sociales-widgets__card-icon">📷</div>
                  <h4 className="redes-sociales-widgets__card-title">Instagram Feed</h4>
                  <p className="redes-sociales-widgets__card-text">Ver nuestras últimas fotos y proyectos</p>
                  <a
                    href="https://www.instagram.com/creativosespaciosmx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="redes-sociales-widgets__card-button"
                  >
                    Ver en Instagram
                  </a>
                  <div className="redes-sociales-widgets__card-note">
                    <em>Widget de Instagram se integrará aquí</em>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="redes-sociales-widgets__card h-100">
                <Card.Body className="text-center">
                  <div className="redes-sociales-widgets__card-icon">📺</div>
                  <h4 className="redes-sociales-widgets__card-title">YouTube Videos</h4>
                  <p className="redes-sociales-widgets__card-text">Mira nuestros videos más recientes</p>
                  <a
                    href="https://www.youtube.com/@creativosespacios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="redes-sociales-widgets__card-button"
                  >
                    Ver en YouTube
                  </a>
                  <div className="redes-sociales-widgets__card-note">
                    <em>Widget de YouTube se integrará aquí</em>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="redes-sociales-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="redes-sociales-cta__title">¿Te Gustó lo que Viste?</h2>
              <p className="redes-sociales-cta__text">
                Comparte tus ideas con nosotros y etiquétanos en tus publicaciones
              </p>
              <div className="redes-sociales-cta__buttons">
                <Link to="/contacto" className="redes-sociales-cta__button redes-sociales-cta__button--primary">
                  Contáctanos
                </Link>
                <Link to="/cotizador-venta" className="redes-sociales-cta__button redes-sociales-cta__button--secondary">
                  Cotizar Proyecto
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default RedesSociales;
