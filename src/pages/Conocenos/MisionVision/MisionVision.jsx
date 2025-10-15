import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SEO, seoConfig } from '../../../components/SEO';
import './MisionVision.scss';

// Image URL from Figma
const FIGMA_IMAGE = {
  image261: 'https://www.figma.com/api/mcp/asset/1b4bd63c-1e53-4195-a61e-b41384107c52'
};

const MisionVision = () => {
  return (
    <div className="mision-vision-page">
      <SEO {...seoConfig.misionVision} />

      {/* Hero Section */}
      <section className="mv-hero">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="mv-hero__section">
                <h1 className="mv-hero__title">Misión</h1>
                <p className="mv-hero__description">
                  Ser tu socio estratégico en la creación de espacios y experiencias únicas, diseñadas a medida
                  y enfocadas en la sostenibilidad. Nuestro compromiso es superar tus expectativas y construir
                  un futuro mejor juntos.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mv-hero__section mv-hero__section--right">
                <h1 className="mv-hero__title">Visión</h1>
                <p className="mv-hero__description">
                  Seguir siendo la empresa a nivel nacional de referencia en nuestro sector, reconocida por nuestra
                  innovación, calidad y compromiso con la sostenibilidad. Dejar un legado positivo en la sociedad.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Image Section */}
      <section className="mv-image">
        <Container>
          <div className="mv-image__wrapper">
            <img
              src={FIGMA_IMAGE.image261}
              alt="Misión y Visión - Contenedores Creativos Espacios"
              className="mv-image__img"
              loading="lazy"
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default MisionVision;
