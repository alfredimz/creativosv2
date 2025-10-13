import React from 'react';
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Ubicacion.scss';

const Ubicacion = () => {
  return (
    <div className="ubicacion-page">
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Nuestra Ubicación</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="ubicacion-page__banner">
        <div className="ubicacion-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="ubicacion-page__banner-title">Nuestra Ubicación</h1>
                <p className="ubicacion-page__banner-subtitle">
                  Visítanos en nuestras instalaciones en la Ciudad de México
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="ubicacion-page__info">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <Card className="ubicacion-page__card">
                <Card.Body>
                  <h2 className="ubicacion-page__card-title">Oficinas Principales</h2>

                  <div className="ubicacion-page__info-item">
                    <strong>📍 Dirección:</strong>
                    <p>Av. del Árbol 104, Col. Lomas de San Lorenzo<br/>
                    C.P. 09780, Iztapalapa, CDMX</p>
                  </div>

                  <div className="ubicacion-page__info-item">
                    <strong>📞 Teléfonos:</strong>
                    <p>55 2608 8867<br/>55 5426 9941</p>
                  </div>

                  <div className="ubicacion-page__info-item">
                    <strong>📧 Email:</strong>
                    <p>ventas@creativosespacios.mx</p>
                  </div>

                  <div className="ubicacion-page__info-item">
                    <strong>🕐 Horario de Atención:</strong>
                    <p>Lunes a Viernes: 8:00 AM - 6:00 PM<br/>
                    Sábados: 9:00 AM - 2:00 PM<br/>
                    Domingos: Cerrado</p>
                  </div>

                  <div className="ubicacion-page__info-item">
                    <strong>🚗 Cómo Llegar:</strong>
                    <ul className="ubicacion-page__instrucciones">
                      <li>Metro Línea 8 - Estación Coyuya (15 min caminando)</li>
                      <li>Acceso por Av. Tláhuac y Av. del Árbol</li>
                      <li>Estacionamiento disponible para clientes</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <div className="ubicacion-page__mapa">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.933997538313!2d-99.0563350850949!3d19.3283809869437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce02583341d4a7%3A0x5f2e9677a3a3f68!2sAv.%20del%20%C3%81rbol%20104%2C%20Lomas%20de%20San%20Lorenzo%2C%20Iztapalapa%2C%2009780%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1678886400000!5m2!1ses-419!2smx"
                  width="100%"
                  height="500"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Creativos Espacios"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ubicacion-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="ubicacion-page__cta-title">¿Quieres Visitarnos?</h2>
              <p className="ubicacion-page__cta-text">
                Agenda una cita y conoce personalmente nuestras instalaciones y productos.
                Te asesoraremos en todo tu proyecto.
              </p>
              <Link to="/contacto" className="ubicacion-page__cta-button">
                Agendar Cita
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Ubicacion;
