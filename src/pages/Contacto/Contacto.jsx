import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { SEO, seoConfig } from '../../components/SEO';
import { ErrorMessage, LoadingSpinner } from '../../components/Accessibility';
import './Contacto.scss';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      // TODO: Replace with actual EmailJS credentials after account setup
      const serviceID = 'YOUR_SERVICE_ID'; // Replace with actual service ID
      const templateID = 'YOUR_TEMPLATE_ID'; // Replace with actual template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with actual public key

      const templateParams = {
        to_email: 'ventas@creativosespacios.mx',
        from_name: formData.nombre,
        from_email: formData.email,
        subject: formData.asunto,
        message: formData.mensaje,
        reply_to: formData.email
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Google Ads conversion tracking
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-11471696489/sTNfCMWcgbMZEOnkkN4q',
          'event_category': 'Form',
          'event_label': 'Contacto Form Submission',
          'value': 1.0,
          'currency': 'MXN'
        });
      }

      setSubmitStatus('success');
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialMedia = [
    { icon: <FaFacebook />, href: 'https://www.facebook.com/creativosespaciosmx', label: 'Síguenos en Facebook' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/creativosespaciosmx/', label: 'Síguenos en Instagram' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com/@creativosespacios', label: 'Síguenos en YouTube' },
    { icon: <FaTiktok />, href: 'https://www.tiktok.com/@creativosespaciosmx', label: 'Síguenos en TikTok' },
    { icon: <FaTwitter />, href: 'https://x.com/creaespaciosmx', label: 'Síguenos en X (Twitter)' },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Creativos Espacios",
    "image": "https://www.creativosespacios.mx/creativos-images/creativos-espacios.png",
    "@id": "https://www.creativosespacios.mx",
    "url": "https://www.creativosespacios.mx",
    "telephone": "+52-55-2608-886",
    "email": "ventas@creativosespacios.mx",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Del Árbol 104, Lomas de San Lorenzo",
      "addressLocality": "Iztapalapa",
      "addressRegion": "CDMX",
      "postalCode": "09780",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.3562,
      "longitude": -99.0637
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="contacto-page">
      <SEO {...seoConfig.contacto} structuredData={localBusinessSchema} />

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
              <Form onSubmit={handleSubmit} aria-label="Formulario de contacto">
                {submitStatus === 'success' && (
                  <ErrorMessage
                    type="success"
                    message="¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto."
                    className="mb-3"
                  />
                )}
                {submitStatus === 'error' && (
                  <ErrorMessage
                    type="error"
                    message="Error al enviar el mensaje. Por favor intenta nuevamente o contáctanos directamente por teléfono o email."
                    className="mb-3"
                  />
                )}

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contacto-nombre">
                      <Form.Label className="contacto-form__label">
                        Nombre <span aria-label="campo requerido">*</span>
                      </Form.Label>
                      <Form.Control
                        className="contacto-form__input"
                        type="text"
                        name="nombre"
                        placeholder="Tu Nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        aria-required="true"
                        aria-label="Ingrese su nombre completo"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="contacto-email">
                      <Form.Label className="contacto-form__label">
                        Email <span aria-label="campo requerido">*</span>
                      </Form.Label>
                      <Form.Control
                        className="contacto-form__input"
                        type="email"
                        name="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        aria-required="true"
                        aria-label="Ingrese su correo electrónico"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="contacto-asunto">
                  <Form.Label className="contacto-form__label">
                    Asunto <span aria-label="campo requerido">*</span>
                  </Form.Label>
                  <Form.Control
                    className="contacto-form__input"
                    type="text"
                    name="asunto"
                    placeholder="Asunto del mensaje"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-label="Ingrese el asunto de su mensaje"
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="contacto-mensaje">
                  <Form.Label className="contacto-form__label">
                    Mensaje <span aria-label="campo requerido">*</span>
                  </Form.Label>
                  <Form.Control
                    className="contacto-form__input"
                    as="textarea"
                    name="mensaje"
                    rows={5}
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-label="Ingrese su mensaje"
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    aria-label="Enviar formulario de contacto"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                  {isSubmitting && (
                    <div className="mt-2">
                      <LoadingSpinner message="Enviando mensaje..." size="sm" />
                    </div>
                  )}
                </div>
              </Form>
            </Col>

            {/* Info Column */}
            <Col lg={5}>
              <div className="contacto-info">
                <h3 className="contacto-info__title">Información de Contacto</h3>

                <div className="contacto-info__item">
                  <FaMapMarkerAlt className="contacto-info__icon" aria-hidden="true" />
                  <p className="contacto-info__text">
                    <span className="sr-only">Dirección:</span>
                    Av. del Árbol 104, Col. Lomas de San Lorenzo, C.P. 09780, Iztapalapa, CDMX.
                  </p>
                </div>

                <div className="contacto-info__item">
                  <FaEnvelope className="contacto-info__icon" aria-hidden="true" />
                  <p className="contacto-info__text">
                    <a href="mailto:ventas@creativosespacios.mx" aria-label="Enviar correo a ventas@creativosespacios.mx">
                      ventas@creativosespacios.mx
                    </a>
                  </p>
                </div>

                <div className="contacto-info__item">
                  <FaPhone className="contacto-info__icon" aria-hidden="true" />
                  <p className="contacto-info__text">
                    <span className="sr-only">Teléfonos:</span>
                    <a href="tel:+525526088867" aria-label="Llamar al 55 2608 8867">55 2608 8867</a> /
                    <a href="tel:+525554269941" aria-label="Llamar al 55 5426 9941">55 5426 9941</a>
                  </p>
                </div>

                <hr className="contacto-info__divider" />

                <h4 className="contacto-info__subtitle">Síguenos</h4>
                <div className="contacto-info__social" role="list" aria-label="Redes sociales">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contacto-info__social-link"
                      aria-label={social.label}
                      role="listitem"
                    >
                      <span aria-hidden="true">{social.icon}</span>
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
