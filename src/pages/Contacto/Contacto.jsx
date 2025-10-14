import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';
import './Contacto.scss';

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado. Gracias por contactarnos.');
  };

  const socialMedia = [
    { icon: <FaFacebook />, href: 'https://www.facebook.com/creativosespaciosmx' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/creativosespaciosmx/' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com/@creativosespacios' },
    { icon: <FaTiktok />, href: 'https://www.tiktok.com/@creativosespaciosmx' },
    { icon: <FaTwitter />, href: 'https://x.com/creaespaciosmx' },
  ];

  return (
    <div className="contacto-page">
      {/* Hero Section */}
      <section className="contacto-hero">
        <Container>
          <h1 className="contacto-hero__title">Contacto</h1>
          <p className="contacto-hero__description">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros a través del formulario o usando
            nuestros datos de contacto. Te responderemos lo antes posible.
          </p>
        </Container>
      </section>

      {/* Content Section */}
      <section className="contacto-content">
        <Container>
          <Row>
            {/* Form Column */}
            <Col lg={7} className="mb-5 mb-lg-0">
              <h3 className="contacto-form__title">Envíanos un Mensaje</h3>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="contacto-form__label">Nombre*</Form.Label>
                      <Form.Control className="contacto-form__input" type="text" placeholder="Tu Nombre" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="contacto-form__label">Email*</Form.Label>
                      <Form.Control className="contacto-form__input" type="email" placeholder="tu@email.com" required />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label className="contacto-form__label">Asunto*</Form.Label>
                  <Form.Control className="contacto-form__input" type="text" placeholder="Asunto del mensaje" required />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="contacto-form__label">Mensaje*</Form.Label>
                  <Form.Control className="contacto-form__input" as="textarea" rows={5} placeholder="Escribe tu mensaje aquí..." required />
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" type="submit" size="lg">Enviar Mensaje</Button>
                </div>
              </Form>
            </Col>

            {/* Info Column */}
            <Col lg={5}>
              <div className="contacto-info">
                <h3 className="contacto-info__title">Información de Contacto</h3>

                <div className="contacto-info__item">
                  <FaMapMarkerAlt className="contacto-info__icon" />
                  <p className="contacto-info__text">
                    Av. del Árbol 104, Col. Lomas de San Lorenzo, C.P. 09780, Iztapalapa, CDMX.
                  </p>
                </div>

                <div className="contacto-info__item">
                  <FaEnvelope className="contacto-info__icon" />
                  <p className="contacto-info__text">
                    <a href="mailto:ventas@creativosespacios.mx">ventas@creativosespacios.mx</a>
                  </p>
                </div>

                <div className="contacto-info__item">
                  <FaPhone className="contacto-info__icon" />
                  <p className="contacto-info__text">
                    55 2608 8867 / 55 5426 9941
                  </p>
                </div>

                <hr className="contacto-info__divider" />

                <h4 className="contacto-info__subtitle">Síguenos</h4>
                <div className="contacto-info__social">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contacto-info__social-link"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="contacto-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.933997538313!2d-99.0563350850949!3d19.3283809869437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce02583341d4a7%3A0x5f2e9677a3a3f68!2sAv.%20del%20%C3%81rbol%20104%2C%20Lomas%20de%20San%20Lorenzo%2C%20Iztapalapa%2C%2009780%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1678886400000!5m2!1ses-419!2smx"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Creativos Espacios"
        ></iframe>
      </section>
    </div>
  );
};

export default Contacto;
