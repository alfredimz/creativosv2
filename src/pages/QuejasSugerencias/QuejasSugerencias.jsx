import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { SEO, seoConfig } from '../../components/SEO';
import { ErrorMessage, LoadingSpinner } from '../../components/Accessibility';
import './QuejasSugerencias.scss';

const QuejasSugerencias = () => {
  const [formData, setFormData] = useState({
    tipo: 'sugerencia',
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        tipo_mensaje: formData.tipo,
        from_name: formData.nombre,
        from_email: formData.email,
        telefono: formData.telefono,
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
          'event_label': 'QuejasSugerencias Form Submission',
          'value': 1.0,
          'currency': 'MXN'
        });
      }

      setSubmitStatus('success');
      setFormData({
        tipo: 'sugerencia',
        nombre: '',
        email: '',
        telefono: '',
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

  return (
    <div className="quejas-page">
      <SEO {...seoConfig.quejasSugerencias} />

      {/* Hero Section */}
      <section className="quejas-hero">
        <Container>
          <h1 className="quejas-hero__title">Buzón de Quejas y Sugerencias</h1>
          <p className="quejas-hero__description">
            Tu opinión es muy importante para nosotros. Ayúdanos a mejorar nuestros servicios compartiendo
            tu experiencia, sugerencias o inquietudes. Respondemos todos los mensajes en máximo 48 horas hábiles.
          </p>
        </Container>
      </section>

      {/* Content Section */}
      <section className="quejas-content">
        <Container>
          <Row>
            {/* Form Column */}
            <Col lg={8}>
              <h3 className="quejas-form__title">Comparte tu Experiencia</h3>
              <p className="quejas-form__text">
                Valoramos tu retroalimentación. Completa el formulario y nos pondremos en contacto
                contigo a la brevedad para atender tu solicitud.
              </p>

              <Form onSubmit={handleSubmit} aria-label="Formulario de quejas y sugerencias">
                {submitStatus === 'success' && (
                  <ErrorMessage
                    type="success"
                    message="¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto."
                    className="mb-3"
                  />
                )}
                {submitStatus === 'error' && (
                  <ErrorMessage
                    type="error"
                    message="Error al enviar el formulario. Por favor intenta nuevamente o contáctanos directamente."
                    className="mb-3"
                  />
                )}

                <Form.Group className="mb-3" controlId="quejas-tipo">
                  <Form.Label className="quejas-form__label">Tipo de Mensaje</Form.Label>
                  <div role="group" aria-label="Seleccione el tipo de mensaje">
                    <Form.Check
                      inline
                      type="radio"
                      label="Sugerencia"
                      name="tipo"
                      value="sugerencia"
                      checked={formData.tipo === 'sugerencia'}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      id="tipo-sugerencia"
                      aria-label="Sugerencia"
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Queja"
                      name="tipo"
                      value="queja"
                      checked={formData.tipo === 'queja'}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      id="tipo-queja"
                      aria-label="Queja"
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Felicitación"
                      name="tipo"
                      value="felicitacion"
                      checked={formData.tipo === 'felicitacion'}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      id="tipo-felicitacion"
                      aria-label="Felicitación"
                    />
                  </div>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="quejas-nombre">
                      <Form.Label className="quejas-form__label">
                        Nombre Completo <span aria-label="campo requerido">*</span>
                      </Form.Label>
                      <Form.Control
                        className="quejas-form__input"
                        type="text"
                        name="nombre"
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
                    <Form.Group className="mb-3" controlId="quejas-telefono">
                      <Form.Label className="quejas-form__label">Teléfono</Form.Label>
                      <Form.Control
                        className="quejas-form__input"
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        aria-label="Ingrese su número de teléfono (opcional)"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="quejas-email">
                  <Form.Label className="quejas-form__label">
                    Email <span aria-label="campo requerido">*</span>
                  </Form.Label>
                  <Form.Control
                    className="quejas-form__input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-label="Ingrese su correo electrónico"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="quejas-asunto">
                  <Form.Label className="quejas-form__label">
                    Asunto <span aria-label="campo requerido">*</span>
                  </Form.Label>
                  <Form.Control
                    className="quejas-form__input"
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-label="Ingrese el asunto de su mensaje"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="quejas-mensaje">
                  <Form.Label className="quejas-form__label">
                    Mensaje <span aria-label="campo requerido">*</span>
                  </Form.Label>
                  <Form.Control
                    className="quejas-form__input"
                    as="textarea"
                    rows={6}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Describe tu experiencia, sugerencia o queja..."
                    required
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-label="Ingrese su mensaje detallado"
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    aria-label="Enviar formulario de quejas y sugerencias"
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
            <Col lg={4}>
              <div className="quejas-info">
                <h3 className="quejas-info__title">¿Por Qué es Importante tu Opinión?</h3>

                <div className="quejas-info__item">
                  <div className="quejas-info__icon" aria-hidden="true">📈</div>
                  <p className="quejas-info__text">Nos ayuda a mejorar continuamente nuestros servicios</p>
                </div>

                <div className="quejas-info__item">
                  <div className="quejas-info__icon" aria-hidden="true">🎯</div>
                  <p className="quejas-info__text">Identificamos áreas de oportunidad</p>
                </div>

                <div className="quejas-info__item">
                  <div className="quejas-info__icon" aria-hidden="true">🤝</div>
                  <p className="quejas-info__text">Fortalece nuestra relación contigo</p>
                </div>

                <hr className="quejas-info__divider" />

                <h4 className="quejas-info__subtitle">Tiempo de Respuesta</h4>
                <p className="quejas-info__description">
                  Respondemos todas las quejas y sugerencias en un plazo máximo de
                  <strong> 48 horas hábiles</strong>.
                </p>

                <h4 className="quejas-info__subtitle">Confidencialidad</h4>
                <p className="quejas-info__description">
                  Toda la información proporcionada es tratada de manera confidencial
                  de acuerdo a nuestra política de privacidad.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default QuejasSugerencias;
