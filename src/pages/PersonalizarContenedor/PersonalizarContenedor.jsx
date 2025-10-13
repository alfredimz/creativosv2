import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Personaliza tu Contenedor</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="personalizar-page__banner">
        <div className="personalizar-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="personalizar-page__banner-title">Personaliza tu Contenedor</h1>
                <p className="personalizar-page__banner-subtitle">
                  Diseña tu contenedor ideal seleccionando las características que necesitas
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="personalizar-page__configurador">
        <Container>
          <Row>
            <Col lg={8}>
              <Card className="personalizar-page__viewer">
                <div className="personalizar-page__viewer-content">
                  <div className="personalizar-page__3d-placeholder">
                    <div className="personalizar-page__3d-icon">🏗️</div>
                    <h3>Vista 3D del Contenedor</h3>
                    <p>Configurador 3D interactivo<br/>(En desarrollo)</p>
                  </div>
                </div>
              </Card>

              <div className="personalizar-page__resumen">
                <h3>Resumen de tu Configuración</h3>
                <ul>
                  <li><strong>Tamaño:</strong> {config.tamano} pies</li>
                  <li><strong>Color:</strong> {config.color}</li>
                  <li><strong>Puertas:</strong> {config.puertas}</li>
                  <li><strong>Ventanas:</strong> {config.ventanas}</li>
                  <li><strong>Aislamiento térmico:</strong> {config.aislamiento ? 'Sí' : 'No'}</li>
                  <li><strong>Instalación eléctrica:</strong> {config.electrico ? 'Sí' : 'No'}</li>
                </ul>
                <Link to="/contacto" className="personalizar-page__cotizar-btn">
                  Solicitar Cotización
                </Link>
              </div>
            </Col>

            <Col lg={4}>
              <Card className="personalizar-page__opciones-card">
                <Card.Body>
                  <h3 className="personalizar-page__opciones-titulo">Opciones de Personalización</h3>

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

      <section className="personalizar-page__caracteristicas">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg={10} className="text-center">
              <h2 className="personalizar-page__section-title">Características Adicionales Disponibles</h2>
            </Col>
          </Row>
          <Row>
            <Col md={3} className="text-center mb-4">
              <div className="personalizar-page__caracteristica">
                <div className="personalizar-page__caracteristica-icono">🔌</div>
                <h4>Sistema Eléctrico</h4>
                <p>Cableado completo y tomas</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="personalizar-page__caracteristica">
                <div className="personalizar-page__caracteristica-icono">❄️</div>
                <h4>Climatización</h4>
                <p>Aires acondicionados</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="personalizar-page__caracteristica">
                <div className="personalizar-page__caracteristica-icono">💧</div>
                <h4>Plomería</h4>
                <p>Instalaciones hidráulicas</p>
              </div>
            </Col>
            <Col md={3} className="text-center mb-4">
              <div className="personalizar-page__caracteristica">
                <div className="personalizar-page__caracteristica-icono">🎨</div>
                <h4>Acabados</h4>
                <p>Interiores personalizados</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PersonalizarContenedor;
