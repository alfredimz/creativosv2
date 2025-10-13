
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './CotizadorRenta.scss'; // Usaremos un SCSS similar al de venta

const CotizadorRenta = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipoContenedor: 'usado',
    tamanoContenedor: '20',
    cantidad: 1,
    duracionRenta: '1', // en meses
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
      <section className="banner-section text-center">
        <div className="banner-overlay">
          <Container>
            <h1>Cotizador de Renta</h1>
            <p className="banner-text">
              Completa el formulario para obtener una cotización para la renta de contenedores.
            </p>
          </Container>
        </div>
      </section>

      <section className="form-section">
        <Container>
          <Card className="p-4 p-md-5 shadow-sm">
            <Form onSubmit={handleSubmit}>
              <h3 className="mb-4">1. Datos de Contacto</h3>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre Completo*</Form.Label>
                    <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Teléfono*</Form.Label>
                    <Form.Control type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Empresa (Opcional)</Form.Label>
                    <Form.Control type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
                  </Form.Group>
                </Col>
              </Row>

              <hr className="my-5" />

              <h3 className="mb-4">2. Detalles de la Renta</h3>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tamaño de Contenedor</Form.Label>
                    <Form.Select name="tamanoContenedor" value={formData.tamanoContenedor} onChange={handleChange}>
                      <option value="10">10 pies</option>
                      <option value="20">20 pies</option>
                      <option value="40">40 pies</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="number" name="cantidad" value={formData.cantidad} onChange={handleChange} min="1" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Duración (meses)</Form.Label>
                    <Form.Control type="number" name="duracionRenta" value={formData.duracionRenta} onChange={handleChange} min="1" />
                  </Form.Group>
                </Col>
              </Row>

              <hr className="my-5" />

              <h3 className="mb-4">3. Servicios Adicionales</h3>
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
                      <Form.Label>Ciudad de Origen</Form.Label>
                      <Form.Control type="text" name="origen" value={formData.origen} onChange={handleChange} placeholder="Ej. Patio CDMX"/>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Ciudad de Destino</Form.Label>
                      <Form.Control type="text" name="destino" value={formData.destino} onChange={handleChange} placeholder="Ej. Puebla"/>
                    </Form.Group>
                  </Col>
                </Row>
              )}
              <Form.Group className="mb-4">
                <Form.Check type="switch" id="maniobras-switch-renta" name="maniobras" label="¿Necesitas maniobras de carga y descarga?" checked={formData.maniobras} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Comentarios Adicionales</Form.Label>
                <Form.Control as="textarea" rows={4} name="comentarios" value={formData.comentarios} onChange={handleChange} placeholder="Describe cualquier otro requerimiento para tu proyecto..."/>
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit" size="lg">
                  Solicitar Cotización de Renta
                </Button>
              </div>
            </Form>
          </Card>
        </Container>
      </section>
    </div>
  );
};

export default CotizadorRenta;
