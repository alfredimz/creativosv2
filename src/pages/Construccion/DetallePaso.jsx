import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Construccion.scss';

const DetallePaso = () => {
  const { paso } = useParams();

  return (
    <div className="detalle-paso-page">
      {/* Hero Section */}
      <section className="detalle-paso-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="detalle-paso-hero__title">Paso {paso}</h1>
              <p className="detalle-paso-hero__description">
                Detalle del proceso de construcción de contenedores
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content Section */}
      <section className="detalle-paso-content">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="detalle-paso-content__placeholder">
                <h2 className="detalle-paso-content__title">Contenido en Desarrollo</h2>
                <p className="detalle-paso-content__text">
                  Esta página mostrará información detallada sobre el paso {paso} del proceso de construcción.
                </p>
                <p className="detalle-paso-content__text">
                  El contenido específico para cada paso está pendiente de implementación.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default DetallePaso;
