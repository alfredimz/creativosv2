import React from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
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
    <div className="redes-sociales">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Redes Sociales</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero */}
      <section className="redes-sociales__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="redes-sociales__titulo">Síguenos en Redes Sociales</h1>
              <p className="redes-sociales__subtitulo">
                Únete a nuestra comunidad y descubre ideas, proyectos inspiradores y contenido exclusivo
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Redes Sociales Cards */}
      <section className="redes-sociales__cards py-5">
        <Container>
          <Row>
            {redesSociales.map((red, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="red-social-card h-100 border-0 shadow-sm">
                  <Card.Body className="text-center p-4">
                    <div
                      className="red-social-card__icono mb-3"
                      style={{ backgroundColor: red.color }}
                    >
                      {red.icono}
                    </div>
                    <Card.Title className="red-social-card__nombre h4">{red.nombre}</Card.Title>
                    <Card.Subtitle className="red-social-card__username mb-3 text-muted">
                      {red.username}
                    </Card.Subtitle>
                    <Card.Text className="red-social-card__descripcion mb-3">
                      {red.descripcion}
                    </Card.Text>
                    <div className="red-social-card__seguidores mb-3">
                      <strong>{red.seguidores}</strong> seguidores
                    </div>
                    <Button
                      variant="primary"
                      className="w-100"
                      href={red.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundColor: red.color, borderColor: red.color }}
                    >
                      Seguir en {red.nombre}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Últimas Publicaciones */}
      <section className="redes-sociales__publicaciones py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Últimas Publicaciones</h2>
          <Row>
            {ultimasPublicaciones.map((pub, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="publicacion-card h-100 border-0 shadow-sm">
                  <div
                    className="publicacion-card__imagen"
                    style={{
                      backgroundImage: `url(/images/social/${pub.imagen})`,
                      height: '250px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="publicacion-card__tipo">{pub.tipo}</div>
                  </div>
                  <Card.Body>
                    <div className="publicacion-card__red mb-2">
                      <small>{pub.red}</small>
                    </div>
                    <Card.Text className="publicacion-card__descripcion">
                      {pub.descripcion}
                    </Card.Text>
                    <div className="publicacion-card__footer d-flex justify-content-between align-items-center">
                      <small className="text-muted">{pub.fecha}</small>
                      <div className="publicacion-card__likes">
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
      <section className="redes-sociales__hashtags py-5">
        <Container>
          <h2 className="text-center mb-4">Síguenos con estos Hashtags</h2>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="hashtags-container text-center">
                {hashtags.map((hashtag, index) => (
                  <span key={index} className="hashtag-badge">
                    {hashtag}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Widgets Placeholder */}
      <section className="redes-sociales__widgets py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Nuestro Feed Social</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="widget-card h-100">
                <Card.Body className="text-center p-5">
                  <div className="widget-icon mb-3">📷</div>
                  <h4>Instagram Feed</h4>
                  <p className="text-muted">Ver nuestras últimas fotos y proyectos</p>
                  <Button
                    variant="outline-primary"
                    href="https://www.instagram.com/creativosespaciosmx"
                    target="_blank"
                  >
                    Ver en Instagram
                  </Button>
                  <div className="mt-4 text-muted small">
                    <em>Widget de Instagram se integrará aquí</em>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="widget-card h-100">
                <Card.Body className="text-center p-5">
                  <div className="widget-icon mb-3">📺</div>
                  <h4>YouTube Videos</h4>
                  <p className="text-muted">Mira nuestros videos más recientes</p>
                  <Button
                    variant="outline-danger"
                    href="https://www.youtube.com/@creativosespacios"
                    target="_blank"
                  >
                    Ver en YouTube
                  </Button>
                  <div className="mt-4 text-muted small">
                    <em>Widget de YouTube se integrará aquí</em>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="redes-sociales__cta py-5 text-center">
        <Container>
          <h2 className="mb-4">¿Te Gustó lo que Viste?</h2>
          <p className="lead mb-4">
            Comparte tus ideas con nosotros y etiquétanos en tus publicaciones
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button variant="primary" size="lg" as={Link} to="/contacto">
              Contáctanos
            </Button>
            <Button variant="outline-primary" size="lg" as={Link} to="/cotizador-venta">
              Cotizar Proyecto
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default RedesSociales;
