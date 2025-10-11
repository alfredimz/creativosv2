import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './QuienesSomos.scss';

const QuienesSomos = () => {
  return (
    <div className="quienes-somos-page">
      {/* Banner Principal */}
      <section className="banner-section">
        <div className="banner-overlay">
          <Container>
            <h1>¿Quiénes somos?</h1>
            <p className="banner-text">
              Desde nuestros inicios en 2010, hemos demostrado que la construcción sostenible es una
              realidad. Nuestros proyectos de reconversión de contenedores marítimos ofrecen una
              reducción significativa en el consumo de energía y materiales, además de generar menos
              residuos. ¡Una elección inteligente para un futuro más sostenible!
            </p>
          </Container>
        </div>
      </section>

       {/* Sección de Misión y Visión */}
            <section className="content-section">
              <Container>
                <Row className="mission-vision-row">
                  <Col lg={6} className="mission-col">
                    <div className="content-box mission-box">
                      <div className="content-icon">
                        <i className="mission-icon"></i>
                      </div>
                      <h1>¿Quiénes somos?</h1>
            <p className="">
              Desde nuestros inicios en 2010, hemos demostrado que la construcción sostenible es una
              realidad. Nuestros proyectos de reconversión de contenedores marítimos ofrecen una
              reducción significativa en el consumo de energía y materiales, además de generar menos
              residuos. ¡Una elección inteligente para un futuro más sostenible!
            </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

      {/* Sección de Valores */}
      <section className="valores-section">
        <Container>
          <Row>
            <Col md={4} className="valor-card">
              <div className="valor-content">
                <div className="gallery-item">
                <img src="/images/quienes-somos/creativos-ayudarte.webp" alt="Contenedores marítimos" />
               </div>
                <h3>Estamos aquí para ayudarte</h3>
                <p>
                  Sabemos que nuestros clientes buscan más que un servicio:
                  necesitan un aliado experto, amigable y profesional. En
                  Creativos Espacios, encontrarás ese apoyo y un equipo
                  dedicado, comprometido contigo desde el primer momento.
                </p>
              </div>
            </Col>
            <Col md={4} className="valor-card">
              <div className="valor-content">
                <div className="gallery-item">
                <img src="/images/quienes-somos/creativos-conscientes.webp" alt="Contenedores marítimos" />
               </div>
                <h3>Somos conscientes</h3>
                <p>
                  Hace más de 14 años comprendimos que el sector de la
                  construcción es responsable de consumir aproximadamente el
                  50% de los recursos naturales, el 40% de la energía y el 50%
                  de los residuos generados. Esta conciencia impulsa cada uno
                  de nuestros proyectos hacia un enfoque sostenible.
                </p>
              </div>
            </Col>
            <Col md={4} className="valor-card">
              <div className="valor-content">
                <div className="gallery-item">
                <img src="/images/quienes-somos/creativos-sustentables.webp" alt="Contenedores marítimos" />
               </div>
                <h3>Amamos al planeta</h3>
                <p>
                  El planeta Tierra es nuestro hogar compartido y el de millones
                  de formas de vida. En Creativos Espacios, nos
                  comprometemos con su protección, desarrollando ideas de
                  valor que aportan al cuidado del medio ambiente.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Galería de imágenes 
      <section className="gallery-section">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col md={4}>
              <div className="gallery-item">
                <img src="/images/quienes-somos/imagen1.jpg" alt="Contenedores marítimos" />
              </div>
            </Col>
            <Col md={4}>
              <div className="gallery-item">
                <img src="/images/quienes-somos/imagen2.jpg" alt="Construcción sostenible" />
              </div>
            </Col>
            <Col md={4}>
              <div className="gallery-item">
                <img src="/images/quienes-somos/imagen3.jpg" alt="Proyectos" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      */}
    </div>
  );
};

export default QuienesSomos;