import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO, seoConfig } from '../../components/SEO';
import './PersonalizarContenedor.scss';

const PersonalizarContenedor = () => {
  const [config, setConfig] = useState({
    tamano: '20',
    color: 'blanco',
    puertas: '1',
    ventanas: '2',
    aislamiento: true,
    electrico: true
  });

  const opciones = {
    tamanos: ['10 pies', '20 pies', '40 pies'],
    colores: ['Blanco', 'Gris', 'Azul', 'Verde', 'Personalizado'],
    puertas: ['1 puerta', '2 puertas', '3 puertas'],
    ventanas: ['Sin ventanas', '2 ventanas', '4 ventanas', '6+ ventanas']
  };

  return (
    <div className="personalizar-page">
      <SEO {...seoConfig.personalizarContenedor} />

      {/* Hero Section */}
      <section className="personalizar-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="personalizar-hero__title">Personaliza tu Contenedor</h1>
              <p className="personalizar-hero__description">
                Diseña tu contenedor ideal seleccionando las características que necesitas
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Configurador Section */}
      <section className="personalizar-configurador">
        <Container>
          <Row>
            <Col lg={8}>
              <Card className="personalizar-configurador__viewer">
                <div className="personalizar-configurador__viewer-content">
                  <div className="personalizar-configurador__placeholder">
                    <div className="personalizar-configurador__placeholder-icon">🏗️</div>
                    <h3 className="personalizar-configurador__placeholder-title">Vista 3D del Contenedor</h3>
                    <p className="personalizar-configurador__placeholder-text">Configurador 3D interactivo<br/>(En desarrollo)</p>
                  </div>
                </div>
              </Card>

              <div className="personalizar-configurador__resumen">
                <h3 className="personalizar-configurador__resumen-titulo">Resumen de tu Configuración</h3>
                <ul className="personalizar-configurador__resumen-lista">
                  <li><strong>Tamaño:</strong> {config.tamano} pies</li>
                  <li><strong>Color:</strong> {config.color}</li>
                  <li><strong>Puertas:</strong> {config.puertas}</li>
                  <li><strong>Ventanas:</strong> {config.ventanas}</li>
                  <li><strong>Aislamiento térmico:</strong> {config.aislamiento ? 'Sí' : 'No'}</li>
                  <li><strong>Instalación eléctrica:</strong> {config.electrico ? 'Sí' : 'No'}</li>
                </ul>
                <Link to="/contacto" className="personalizar-configurador__resumen-button">
                  Solicitar Cotización
                </Link>
              </div>
            </Col>

            <Col lg={4}>
              <Card className="personalizar-configurador__opciones">
                <Card.Body>
                  <h3 className="personalizar-configurador__opciones-titulo">Opciones de Personalización</h3>

                  <Form.Group className="mb-3">
                    <Form.Label>Tamaño del Contenedor</Form.Label>
                    <Form.Select value={config.tamano} onChange={(e) => setConfig({...config, tamano: e.target.value})}>
                      {opciones.tamanos.map((t, i) => (
                        <option key={i} value={t.split(' ')[0]}>{t}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Color Exterior</Form.Label>
                    <Form.Select value={config.color} onChange={(e) => setConfig({...config, color: e.target.value})}>
                      {opciones.colores.map((c, i) => (
                        <option key={i} value={c.toLowerCase()}>{c}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Número de Puertas</Form.Label>
                    <Form.Select value={config.puertas} onChange={(e) => setConfig({...config, puertas: e.target.value})}>
                      {opciones.puertas.map((p, i) => (
                        <option key={i} value={i + 1}>{p}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Ventanas</Form.Label>
                    <Form.Select value={config.ventanas} onChange={(e) => setConfig({...config, ventanas: e.target.value})}>
                      {opciones.ventanas.map((v, i) => (
                        <option key={i} value={i * 2}>{v}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check
                      type="switch"
                      label="Aislamiento térmico"
                      checked={config.aislamiento}
                      onChange={(e) => setConfig({...config, aislamiento: e.target.checked})}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check
                      type="switch"
                      label="Instalación eléctrica"
                      checked={config.electrico}
                      onChange={(e) => setConfig({...config, electrico: e.target.checked})}
                    />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Características Section */}
      <section className="personalizar-caracteristicas">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg={10} className="text-center">
              <h2 className="personalizar-caracteristicas__titulo">Características Adicionales Disponibles</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="text-center mb-4">
              <div className="personalizar-caracteristicas__card">
                <div className="personalizar-caracteristicas__card-icon">🔌</div>
                <h4 className="personalizar-caracteristicas__card-titulo">Sistema Eléctrico</h4>
                <p className="personalizar-caracteristicas__card-texto">Cableado completo y tomas</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="personalizar-caracteristicas__card">
                <div className="personalizar-caracteristicas__card-icon">❄️</div>
                <h4 className="personalizar-caracteristicas__card-titulo">Climatización</h4>
                <p className="personalizar-caracteristicas__card-texto">Aires acondicionados</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="personalizar-caracteristicas__card">
                <div className="personalizar-caracteristicas__card-icon">💧</div>
                <h4 className="personalizar-caracteristicas__card-titulo">Plomería</h4>
                <p className="personalizar-caracteristicas__card-texto">Instalaciones hidráulicas</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="personalizar-caracteristicas__card">
                <div className="personalizar-caracteristicas__card-icon">🎨</div>
                <h4 className="personalizar-caracteristicas__card-titulo">Acabados</h4>
                <p className="personalizar-caracteristicas__card-texto">Interiores personalizados</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PersonalizarContenedor;
