import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Buzón de Quejas y Sugerencias</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="quejas-page__banner">
        <div className="quejas-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="quejas-page__banner-title">Buzón de Quejas y Sugerencias</h1>
                <p className="quejas-page__banner-subtitle">
                  Tu opinión es muy importante para nosotros. Ayúdanos a mejorar
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="quejas-page__contenido">
        <Container>
          <Row>
            <Col lg={8}>
              <Card className="quejas-page__card">
                <Card.Body>
                  <h2 className="quejas-page__card-title">Comparte tu Experiencia</h2>
                  <p className="quejas-page__card-texto">
                    Valoramos tu retroalimentación. Completa el formulario y nos pondremos en contacto
                    contigo a la brevedad para atender tu solicitud.
                  </p>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Tipo de Mensaje</Form.Label>
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
                          <Form.Label>Nombre Completo *</Form.Label>
                          <Form.Control
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
                          <Form.Label>Teléfono</Form.Label>
                          <Form.Control
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Asunto *</Form.Label>
                      <Form.Control
                        type="text"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Mensaje *</Form.Label>
                      <Form.Control
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
                      <Button variant="primary" type="submit" size="lg" className="quejas-page__submit-btn">
                        Enviar Mensaje
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="quejas-page__info-card">
                <Card.Body>
                  <h3 className="quejas-page__info-titulo">¿Por Qué es Importante tu Opinión?</h3>

                  <div className="quejas-page__info-item">
                    <div className="quejas-page__info-icono">📈</div>
                    <p>Nos ayuda a mejorar continuamente nuestros servicios</p>
                  </div>

                  <div className="quejas-page__info-item">
                    <div className="quejas-page__info-icono">🎯</div>
                    <p>Identificamos áreas de oportunidad</p>
                  </div>

                  <div className="quejas-page__info-item">
                    <div className="quejas-page__info-icono">🤝</div>
                    <p>Fortalece nuestra relación contigo</p>
                  </div>

                  <hr className="my-4" />

                  <h4 className="quejas-page__info-subtitulo">Tiempo de Respuesta</h4>
                  <p className="quejas-page__info-texto">
                    Respondemos todas las quejas y sugerencias en un plazo máximo de
                    <strong> 48 horas hábiles</strong>.
                  </p>

                  <h4 className="quejas-page__info-subtitulo">Confidencialidad</h4>
                  <p className="quejas-page__info-texto">
                    Toda la información proporcionada es tratada de manera confidencial
                    de acuerdo a nuestra política de privacidad.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default QuejasSugerencias;
