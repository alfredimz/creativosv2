
import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
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
    <div className="contact-page">
      <section className="banner-section text-center">
        <div className="banner-overlay">
          <Container>
            <h1>Contacto</h1>
            <p className="banner-text">Estamos aquí para ayudarte. ¡Ponte en contacto con nosotros!</p>
          </Container>
        </div>
      </section>

      <section className="contact-form-section">
        <Container>
          <Row>
            {/* Columna del Formulario */}
            <Col lg={7} className="mb-5 mb-lg-0">
              <Card className="p-4 p-md-5 shadow-sm">
                <h3 className="mb-4">Envíanos un Mensaje</h3>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Tu Nombre" required />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="tu@email.com" required />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="text" placeholder="Asunto del mensaje" required />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje aquí..." required />
                  </Form.Group>
                  <div className="text-center">
                    <Button variant="primary" type="submit" size="lg">Enviar Mensaje</Button>
                  </div>
                </Form>
              </Card>
            </Col>

            {/* Columna de Información de Contacto */}
            <Col lg={5}>
              <div className="contact-info-wrapper">
                <h3 className="mb-4">Información de Contacto</h3>
                <div className="contact-info-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <p>Av. del Árbol 104, Col. Lomas de San Lorenzo, C.P. 09780, Iztapalapa, CDMX.</p>
                </div>
                <div className="contact-info-item">
                  <FaEnvelope className="contact-icon" />
                  <p><a href="mailto:ventas@creativosespacios.mx">ventas@creativosespacios.mx</a></p>
                </div>
                <div className="contact-info-item">
                  <FaPhone className="contact-icon" />
                  <p>55 2608 8867 / 55 5426 9941</p>
                </div>
                <hr className="my-4"/>
                <h4 className="mb-3">Síguenos</h4>
                <div className="social-icons">
                  {socialMedia.map(social => (
                    <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="social-icon-link">
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.933997538313!2d-99.0563350850949!3d19.3283809869437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce02583341d4a7%3A0x5f2e9677a3a3f68!2sAv.%20del%20%C3%81rbol%20104%2C%20Lomas%20de%20San%20Lorenzo%2C%20Iztapalapa%2C%2009780%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1678886400000!5m2!1ses-419!2smx"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
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
