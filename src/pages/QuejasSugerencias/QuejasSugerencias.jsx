import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Tu mensaje ha sido enviado. Gracias por tu retroalimentación.');
    setFormData({
      tipo: 'sugerencia',
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <div className="quejas-page">
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

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="quejas-form__label">Tipo de Mensaje</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      label="Sugerencia"
                      name="tipo"
                      value="sugerencia"
                      checked={formData.tipo === 'sugerencia'}
                      onChange={handleChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Queja"
                      name="tipo"
                      value="queja"
                      checked={formData.tipo === 'queja'}
                      onChange={handleChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      label="Felicitación"
                      name="tipo"
                      value="felicitacion"
                      checked={formData.tipo === 'felicitacion'}
                      onChange={handleChange}
                    />
                  </div>
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="quejas-form__label">Nombre Completo*</Form.Label>
                      <Form.Control
                        className="quejas-form__input"
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="quejas-form__label">Teléfono</Form.Label>
                      <Form.Control
                        className="quejas-form__input"
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="quejas-form__label">Email*</Form.Label>
                  <Form.Control
                    className="quejas-form__input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="quejas-form__label">Asunto*</Form.Label>
                  <Form.Control
                    className="quejas-form__input"
                    type="text"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="quejas-form__label">Mensaje*</Form.Label>
                  <Form.Control
                    className="quejas-form__input"
                    as="textarea"
                    rows={6}
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Describe tu experiencia, sugerencia o queja..."
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button variant="primary" type="submit" size="lg">
                    Enviar Mensaje
                  </Button>
                </div>
              </Form>
            </Col>

            {/* Info Column */}
            <Col lg={4}>
              <div className="quejas-info">
                <h3 className="quejas-info__title">¿Por Qué es Importante tu Opinión?</h3>

                <div className="quejas-info__item">
                  <div className="quejas-info__icon">📈</div>
                  <p className="quejas-info__text">Nos ayuda a mejorar continuamente nuestros servicios</p>
                </div>

                <div className="quejas-info__item">
                  <div className="quejas-info__icon">🎯</div>
                  <p className="quejas-info__text">Identificamos áreas de oportunidad</p>
                </div>

                <div className="quejas-info__item">
                  <div className="quejas-info__icon">🤝</div>
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
