import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { SEO, seoConfig } from '../../components/SEO';
import { ErrorMessage, LoadingSpinner } from '../../components/Accessibility';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
        empresa: formData.empresa,
        telefono: formData.telefono,
        tipo_contenedor: formData.tipoContenedor,
        tamano_contenedor: formData.tamanoContenedor,
        cantidad: formData.cantidad,
        transporte: formData.transporte ? 'Sí' : 'No',
        origen: formData.origen,
        destino: formData.destino,
        maniobras: formData.maniobras ? 'Sí' : 'No',
        modificaciones: formData.modificaciones.join(', '),
        comentarios: formData.comentarios,
        reply_to: formData.email
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Google Ads conversion tracking
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-11471696489/sTNfCMWcgbMZEOnkkN4q',
          'event_category': 'Form',
          'event_label': 'CotizadorVenta Form Submission',
          'value': 1.0,
          'currency': 'MXN'
        });
      }

      setSubmitStatus('success');
      setFormData({
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
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cotizador-page">
      <SEO {...seoConfig.cotizadorVenta} />

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
          <Form onSubmit={handleSubmit} aria-label="Formulario de cotización de venta">
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

            <h3 className="cotizador-form__section-title">1. Datos de Contacto</h3>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="cotizador-venta-nombre">
                  <Form.Label className="cotizador-form__label">
                    Nombre Completo <span aria-label="campo requerido">*</span>
                  </Form.Label>
                  <Form.Control
                    className="cotizador-form__input"
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
                <Form.Group className="mb-3" controlId="cotizador-venta-email">
                  <Form.Label className="cotizador-form__label">
                    Email <span aria-label="campo requerido">*</span>
                  </Form.Label>
                  <Form.Control
                    className="cotizador-form__input"
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
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="cotizador-venta-telefono">
                  <Form.Label className="cotizador-form__label">
                    Teléfono <span aria-label="campo requerido">*</span>
                  </Form.Label>
                  <Form.Control
                    className="cotizador-form__input"
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    aria-required="true"
                    aria-label="Ingrese su número de teléfono"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="cotizador-venta-empresa">
                  <Form.Label className="cotizador-form__label">Empresa (Opcional)</Form.Label>
                  <Form.Control
                    className="cotizador-form__input"
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    aria-label="Ingrese el nombre de su empresa (opcional)"
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr className="cotizador-form__divider" />

            <h3 className="cotizador-form__section-title">2. Detalles del Contenedor</h3>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="cotizador-venta-tipo">
                  <Form.Label className="cotizador-form__label">Tipo de Contenedor</Form.Label>
                  <Form.Select
                    className="cotizador-form__input"
                    name="tipoContenedor"
                    value={formData.tipoContenedor}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    aria-label="Seleccione el tipo de contenedor"
                  >
                    <option value="nuevo">Nuevo</option>
                    <option value="usado">Usado</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="cotizador-venta-tamano">
                  <Form.Label className="cotizador-form__label">Tamaño</Form.Label>
                  <Form.Select
                    className="cotizador-form__input"
                    name="tamanoContenedor"
                    value={formData.tamanoContenedor}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    aria-label="Seleccione el tamaño del contenedor"
                  >
                    <option value="10">10 pies</option>
                    <option value="20">20 pies</option>
                    <option value="40">40 pies</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="cotizador-venta-cantidad">
                  <Form.Label className="cotizador-form__label">Cantidad</Form.Label>
                  <Form.Control
                    className="cotizador-form__input"
                    type="number"
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleChange}
                    min="1"
                    disabled={isSubmitting}
                    aria-label="Ingrese la cantidad de contenedores"
                  />
                </Form.Group>
              </Col>
            </Row>

            <hr className="cotizador-form__divider" />

            <h3 className="cotizador-form__section-title">3. Servicios y Modificaciones</h3>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3" controlId="cotizador-venta-transporte">
                  <Form.Check
                    type="switch"
                    id="transporte-switch"
                    name="transporte"
                    label="¿Necesitas transporte (flete)?"
                    checked={formData.transporte}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    aria-label="Indicar si necesita servicio de transporte"
                  />
                </Form.Group>
              </Col>
            </Row>
            {formData.transporte && (
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="cotizador-venta-origen">
                    <Form.Label className="cotizador-form__label">Ciudad de Origen</Form.Label>
                    <Form.Control
                      className="cotizador-form__input"
                      type="text"
                      name="origen"
                      value={formData.origen}
                      onChange={handleChange}
                      placeholder="Ej. Manzanillo, Veracruz"
                      disabled={isSubmitting}
                      aria-label="Ingrese la ciudad de origen para el transporte"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="cotizador-venta-destino">
                    <Form.Label className="cotizador-form__label">Ciudad de Destino</Form.Label>
                    <Form.Control
                      className="cotizador-form__input"
                      type="text"
                      name="destino"
                      value={formData.destino}
                      onChange={handleChange}
                      placeholder="Ej. Ciudad de México"
                      disabled={isSubmitting}
                      aria-label="Ingrese la ciudad de destino para el transporte"
                    />
                  </Form.Group>
                </Col>
              </Row>
            )}
            <Form.Group className="mb-4" controlId="cotizador-venta-maniobras">
              <Form.Check
                type="switch"
                id="maniobras-switch"
                name="maniobras"
                label="¿Necesitas maniobras de carga y descarga?"
                checked={formData.maniobras}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-label="Indicar si necesita servicio de maniobras de carga y descarga"
              />
            </Form.Group>

            <h5 className="cotizador-form__section-title" style={{ fontSize: '16px', marginTop: '32px' }}>Modificaciones Adicionales</h5>
            <Form.Group className="mb-3" controlId="cotizador-venta-modificaciones">
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
                  disabled={isSubmitting}
                  aria-label={`Seleccionar modificación: ${mod}`}
                />
              ))}
            </Form.Group>

            <Form.Group className="mb-4" controlId="cotizador-venta-comentarios">
              <Form.Label className="cotizador-form__label">Comentarios Adicionales</Form.Label>
              <Form.Control
                className="cotizador-form__input"
                as="textarea"
                rows={4}
                name="comentarios"
                value={formData.comentarios}
                onChange={handleChange}
                placeholder="Describe cualquier otro requerimiento que tengas..."
                disabled={isSubmitting}
                aria-label="Ingrese comentarios adicionales sobre su cotización"
              />
            </Form.Group>

            <div className="text-center">
              <button
                type="submit"
                className="cotizador-form__submit-button"
                disabled={isSubmitting}
                aria-label="Enviar solicitud de cotización de venta"
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Cotización'}
              </button>
              {isSubmitting && (
                <div className="mt-2">
                  <LoadingSpinner message="Enviando cotización..." size="sm" />
                </div>
              )}
            </div>
          </Form>
        </Container>
      </section>
    </div>
  );
};

export default CotizadorVenta;
