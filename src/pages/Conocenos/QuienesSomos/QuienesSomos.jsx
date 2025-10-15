import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SEO, seoConfig } from '../../../components/SEO';
import './QuienesSomos.scss';

// Image URLs from Figma
const FIGMA_IMAGES = {
  image258: 'https://www.figma.com/api/mcp/asset/0eb60934-375e-4e35-8505-78eb430d9922',
  image259: 'https://www.figma.com/api/mcp/asset/8b80e33c-1a1a-451f-a57e-ba66faf5da1b',
  image260: 'https://www.figma.com/api/mcp/asset/af2c6718-2b37-4cfe-b81d-e33e25be1132'
};

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-page">
      <SEO {...seoConfig.quienesSomos} />

      {/* Hero Section */}
      <section className="quienes-hero">
        <Container>
          <h1 className="quienes-hero__title">¿Quienes somos?</h1>
          <p className="quienes-hero__description">
            Desde nuestros inicios en 2010, hemos demostrado que la construcción sostenible es una realidad.
            Nuestros proyectos de reconversión de contenedores marítimos ofrecen una reducción significativa en
            el consumo de energía y materiales, además de generar menos residuos. ¡Una elección inteligente para
            un futuro más sostenible!
          </p>
        </Container>
      </section>

      {/* Images Gallery Section */}
      <section className="quienes-gallery">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <div className="quienes-gallery__item">
                <img
                  src={FIGMA_IMAGES.image258}
                  alt="Contenedores marítimos - Ayuda profesional"
                  className="quienes-gallery__image"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="quienes-gallery__item">
                <img
                  src={FIGMA_IMAGES.image259}
                  alt="Construcción sostenible consciente"
                  className="quienes-gallery__image"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="quienes-gallery__item">
                <img
                  src={FIGMA_IMAGES.image260}
                  alt="Cuidado del medio ambiente"
                  className="quienes-gallery__image"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="quienes-values">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <div className="quienes-values__card">
                <h3 className="quienes-values__title">Estamos aquí para ayudarte</h3>
                <p className="quienes-values__text">
                  Sabemos que nuestros clientes buscan más que un servicio: necesitan un aliado experto,
                  amigable y profesional. En Creativos Espacios, encontrarás ese apoyo y un equipo dedicado,
                  comprometido contigo desde el primer momento.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="quienes-values__card">
                <h3 className="quienes-values__title">Somos conscientes</h3>
                <p className="quienes-values__text">
                  Hace más de 14 años comprendimos que el sector de la construcción es responsable de consumir
                  aproximadamente el 50% de los recursos naturales, el 40% de la energía y el 50% de los residuos
                  generados. Esta conciencia impulsa cada uno de nuestros proyectos hacia un enfoque sostenible.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="quienes-values__card">
                <h3 className="quienes-values__title">Amamos al planeta</h3>
                <p className="quienes-values__text">
                  El planeta Tierra es nuestro hogar compartido y el de millones de formas de vida. En Creativos
                  Espacios, nos comprometemos con su protección, desarrollando ideas de valor que aportan al cuidado
                  del medio ambiente.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default QuienesSomos;
