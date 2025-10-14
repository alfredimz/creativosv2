import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Valores.scss';

// Image URL from Figma
const FIGMA_IMAGE = {
  image273: 'https://www.figma.com/api/mcp/asset/eb0a37b6-ad2f-4554-ac75-6ed726bc587a'
};

const Valores = () => {
  const valores = [
    { id: 'transparencia', label: 'Transparencia' },
    { id: 'sostenibilidad', label: 'Sostenibilidad' },
    { id: 'compromiso', label: 'Compromiso' },
    { id: 'difusion', label: 'Difusión' },
    { id: 'responsabilidad', label: 'Responsabilidad' },
    { id: 'ejemplo', label: 'Ejemplo social' }
  ];

  return (
    <div className="valores-page">
      {/* Hero Section */}
      <section className="valores-hero">
        <Container>
          <h1 className="valores-hero__title">Valores</h1>
          <div className="valores-hero__description">
            <p>
              En Creativos Espacios, nuestros valores son el núcleo de todo lo que hacemos. La transparencia
              nos permite generar confianza con nuestros clientes y colaboradores, asegurando que cada proceso
              sea claro y honesto. Nuestro compromiso y responsabilidad son el motor que impulsa nuestro trabajo
              diario, ya que nos esforzamos por cumplir con los más altos estándares de calidad en cada proyecto.
              Creemos firmemente en la sostenibilidad como un pilar para un futuro mejor, integrando prácticas
              responsables que minimicen el impacto ambiental. Además, nos comprometemos con la difusión de ideas
              y prácticas constructivas innovadoras, compartiendo nuestro conocimiento y fomentando un sector más
              informado. Por último, a través del ejemplo social, buscamos inspirar a nuestra comunidad y a otras
              empresas a contribuir positivamente a su entorno. Estos valores nos permiten no solo ofrecer un
              servicio excepcional, sino también ser un modelo de empresa consciente y comprometida con la sociedad
              y el planeta.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="valores-content">
        <Container>
          <Row>
            <Col lg={6}>
              {/* Valores List */}
              <div className="valores-list">
                {valores.map((valor, index) => (
                  <div key={valor.id} className="valores-list__item">
                    <div className="valores-list__bullet"></div>
                    <span className="valores-list__text">{valor.label}</span>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={6}>
              {/* Image */}
              <div className="valores-image">
                <img
                  src={FIGMA_IMAGE.image273}
                  alt="Creativos Espacios - Nuestros Valores"
                  className="valores-image__img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Valores;
