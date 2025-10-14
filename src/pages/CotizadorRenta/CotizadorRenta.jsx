import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './CotizadorRenta.scss';

const CotizadorRenta = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tamanoContenedor: '20',
    cantidad: 1,
    duracionRenta: '1',
    transporte: false,
    origen: '',
    destino: '',
    maniobras: false,
    comentarios: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario de renta:', formData);
    alert('Gracias por tu cotización de renta. Te contactaremos pronto.');
  };

  return (
    <div className="cotizador-page">
      {/* Hero Section */}
      <section className="cotizador-hero">
        <Container>
          <h1 className="cotizador-hero__title">Cotizador de Renta</h1>
          <p className="cotizador-hero__description">
            Completa el formulario para obtener una cotización detallada para la renta de tus contenedores.
            Renta flexible desde 1 mes, con transporte y servicios adicionales disponibles.
          </p>
        </Container>
      </section>

      {/* Form Section */}
      <section className="cotizador-form">
        <Container>
          <Form onSubmit={handleSubmit}>
            <h3 className="cotizador-form__section-title">1. Datos de Contacto</h3>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="cotizador-form__label">Nombre Completo*</Form.Label>
                  <Form.Control className="cotizador-form__input" type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="cotizador-form__label">Email*</Form.Label>
                  <Form.Control className="cotizador-form__input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="cotizador-form__label">Teléfono*</Form.Label>
                  <Form.Control className="cotizador-form__input" type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="cotizador-form__label">Empresa (Opcional)</Form.Label>
                  <Form.Control className="cotizador-form__input" type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>

            <hr className="cotizador-form__divider" />

            <h3 className="cotizador-form__section-title">2. Detalles de la Renta</h3>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="cotizador-form__label">Tamaño de Contenedor</Form.Label>
                  <Form.Select className="cotizador-form__input" name="tamanoContenedor" value={formData.tamanoContenedor} onChange={handleChange}>
                    <option value="10">10 pies</option>
                    <option value="20">20 pies</option>
                    <option value="40">40 pies</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="cotizador-form__label">Cantidad</Form.Label>
                  <Form.Control className="cotizador-form__input" type="number" name="cantidad" value={formData.cantidad} onChange={handleChange} min="1" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="cotizador-form__label">Duración (meses)</Form.Label>
                  <Form.Control className="cotizador-form__input" type="number" name="duracionRenta" value={formData.duracionRenta} onChange={handleChange} min="1" />
                </Form.Group>
              </Col>
            </Row>

            <hr className="cotizador-form__divider" />

            <h3 className="cotizador-form__section-title">3. Servicios Adicionales</h3>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Check type="switch" id="transporte-switch-renta" name="transporte" label="¿Necesitas transporte (flete redondo)?" checked={formData.transporte} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>
            {formData.transporte && (
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="cotizador-form__label">Ciudad de Origen</Form.Label>
                    <Form.Control className="cotizador-form__input" type="text" name="origen" value={formData.origen} onChange={handleChange} placeholder="Ej. Patio CDMX"/>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="cotizador-form__label">Ciudad de Destino</Form.Label>
                    <Form.Control className="cotizador-form__input" type="text" name="destino" value={formData.destino} onChange={handleChange} placeholder="Ej. Puebla"/>
                  </Form.Group>
                </Col>
              </Row>
            )}
            <Form.Group className="mb-4">
              <Form.Check type="switch" id="maniobras-switch-renta" name="maniobras" label="¿Necesitas maniobras de carga y descarga?" checked={formData.maniobras} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="cotizador-form__label">Comentarios Adicionales</Form.Label>
              <Form.Control className="cotizador-form__input" as="textarea" rows={4} name="comentarios" value={formData.comentarios} onChange={handleChange} placeholder="Describe cualquier otro requerimiento para tu proyecto..."/>
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" size="lg">
                Solicitar Cotización de Renta
              </Button>
            </div>
          </Form>
        </Container>
      </section>
    </div>
  );
};

export default CotizadorRenta;
