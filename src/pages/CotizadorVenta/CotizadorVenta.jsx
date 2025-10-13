
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './CotizadorVenta.scss';

const CotizadorVenta = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    rfc: '',
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
    // Aquí se manejaría el envío del formulario
    console.log('Datos del formulario:', formData);
    alert('Gracias por tu cotización. Te contactaremos pronto.');
  };

  return (
    <div className="cotizador-page">
      <section className="banner-section text-center">
        <div className="banner-overlay">
          <Container>
            <h1>Cotizador de Venta</h1>
            <p className="banner-text">
              Completa el formulario para obtener una cotización detallada para la compra de tus contenedores.
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

              <h3 className="mb-4">2. Detalles del Contenedor</h3>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tipo de Contenedor</Form.Label>
                    <Form.Select name="tipoContenedor" value={formData.tipoContenedor} onChange={handleChange}>
                      <option value="nuevo">Nuevo</option>
                      <option value="usado">Usado</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tamaño</Form.Label>
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
              </Row>

              <hr className="my-5" />

              <h3 className="mb-4">3. Servicios y Modificaciones</h3>
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
                      <Form.Label>Ciudad de Origen</Form.Label>
                      <Form.Control type="text" name="origen" value={formData.origen} onChange={handleChange} placeholder="Ej. Manzanillo, Veracruz"/>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Ciudad de Destino</Form.Label>
                      <Form.Control type="text" name="destino" value={formData.destino} onChange={handleChange} placeholder="Ej. Ciudad de México"/>
                    </Form.Group>
                  </Col>
                </Row>
              )}
              <Form.Group className="mb-4">
                <Form.Check type="switch" id="maniobras-switch" name="maniobras" label="¿Necesitas maniobras de carga y descarga?" checked={formData.maniobras} onChange={handleChange} />
              </Form.Group>

              <h5 className="mt-4">Modificaciones Adicionales</h5>
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
                <Form.Label>Comentarios Adicionales</Form.Label>
                <Form.Control as="textarea" rows={4} name="comentarios" value={formData.comentarios} onChange={handleChange} placeholder="Describe cualquier otro requerimiento que tengas..."/>
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit" size="lg">
                  Solicitar Cotización
                </Button>
              </div>
            </Form>
          </Card>
        </Container>
      </section>
    </div>
  );
};

export default CotizadorVenta;
