import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './CotizadorVenta.scss';

const CotizadorVenta = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipoContenedor: 'nuevo',
    tamanoContenedor: '20',
    cantidad: 1,
    transporte: false,
    origen: '',
    destino: '',
    maniobras: false,
    modificaciones: [],
    comentarios: ''
  });

  const modificacionesDisponibles = [
    'Herrería',
    'Instalaciones (eléctrica, hidráulica, sanitaria)',
    'Acabados interiores (Tablaroca, azulejos, etc.)',
    'Aislantes térmicos (Fibra de vidrio, etc.)',
    'Acabados exteriores (Pintura, sand blast, etc.)'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'modificaciones') {
      let newMods = [...formData.modificaciones];
      if (checked) {
        newMods.push(value);
      } else {
        newMods = newMods.filter(mod => mod !== value);
      }
      setFormData({ ...formData, modificaciones: newMods });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('Gracias por tu cotización. Te contactaremos pronto.');
  };

  return (
    <div className="cotizador-page">
      {/* Hero Section */}
      <section className="cotizador-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h1 className="cotizador-hero__title">Cotizador de Venta</h1>
              <p className="cotizador-hero__description">
                Completa el formulario para obtener una cotización detallada para la compra de tus contenedores.
                Incluye información sobre tipo, tamaño, cantidad y servicios adicionales que necesites.
              </p>
            </Col>
          </Row>
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

            <h3 className="cotizador-form__section-title">2. Detalles del Contenedor</h3>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="cotizador-form__label">Tipo de Contenedor</Form.Label>
                  <Form.Select className="cotizador-form__input" name="tipoContenedor" value={formData.tipoContenedor} onChange={handleChange}>
                    <option value="nuevo">Nuevo</option>
                    <option value="usado">Usado</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label className="cotizador-form__label">Tamaño</Form.Label>
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
            </Row>

            <hr className="cotizador-form__divider" />

            <h3 className="cotizador-form__section-title">3. Servicios y Modificaciones</h3>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3">
                  <Form.Check type="switch" id="transporte-switch" name="transporte" label="¿Necesitas transporte (flete)?" checked={formData.transporte} onChange={handleChange} />
                </Form.Group>
              </Col>
            </Row>
            {formData.transporte && (
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="cotizador-form__label">Ciudad de Origen</Form.Label>
                    <Form.Control className="cotizador-form__input" type="text" name="origen" value={formData.origen} onChange={handleChange} placeholder="Ej. Manzanillo, Veracruz"/>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="cotizador-form__label">Ciudad de Destino</Form.Label>
                    <Form.Control className="cotizador-form__input" type="text" name="destino" value={formData.destino} onChange={handleChange} placeholder="Ej. Ciudad de México"/>
                  </Form.Group>
                </Col>
              </Row>
            )}
            <Form.Group className="mb-4">
              <Form.Check type="switch" id="maniobras-switch" name="maniobras" label="¿Necesitas maniobras de carga y descarga?" checked={formData.maniobras} onChange={handleChange} />
            </Form.Group>

            <h5 className="cotizador-form__section-title" style={{ fontSize: '16px', marginTop: '32px' }}>Modificaciones Adicionales</h5>
            <Form.Group className="mb-3">
              {modificacionesDisponibles.map(mod => (
                <Form.Check
                  key={mod}
                  type="checkbox"
                  id={`mod-${mod}`}
                  label={mod}
                  name="modificaciones"
                  value={mod}
                  checked={formData.modificaciones.includes(mod)}
                  onChange={handleChange}
                />
              ))}
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="cotizador-form__label">Comentarios Adicionales</Form.Label>
              <Form.Control className="cotizador-form__input" as="textarea" rows={4} name="comentarios" value={formData.comentarios} onChange={handleChange} placeholder="Describe cualquier otro requerimiento que tengas..."/>
            </Form.Group>

            <div className="text-center">
              <button type="submit" className="cotizador-form__submit-button">
                Solicitar Cotización
              </button>
            </div>
          </Form>
        </Container>
      </section>
    </div>
  );
};

export default CotizadorVenta;
