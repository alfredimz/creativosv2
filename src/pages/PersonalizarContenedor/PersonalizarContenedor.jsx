import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {
  FaHardHat, FaBolt, FaSnowflake, FaTint, FaPaintBrush,
  FaBriefcase, FaToilet, FaWarehouse, FaUtensils, FaBed,
  FaHamburger, FaSwimmingPool, FaCoffee, FaDumbbell, FaStethoscope,
  FaStore, FaHome, FaChalkboardTeacher, FaFlask, FaTools,
  FaShower, FaUserShield, FaBuilding, FaEllipsisH,
  FaArrowRight, FaArrowLeft, FaCheck
} from 'react-icons/fa';
import { SEO, seoConfig } from '../../components/SEO';
import './PersonalizarContenedor.scss';

const PersonalizarContenedor = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [config, setConfig] = useState({
    // Paso 1: Tipo de uso
    tipoUso: '',
    // Paso 2: Tamaño
    tamano: '',
    // Paso 3: Personalización básica
    color: '',
    puertas: '',
    ventanas: '',
    // Paso 4: Servicios y acabados
    electrico: false,
    climatizacion: false,
    plomeria: false,
    aislamiento: false,
    pisos: false,
    acabadosInteriores: false
  });

  // PASO 1: 19 Tipos de Adecuación
  const tiposUso = [
    { id: 'oficinas', nombre: 'Oficinas', icon: FaBriefcase, descripcion: 'Espacios de trabajo equipados' },
    { id: 'sanitarios', nombre: 'Sanitarios', icon: FaToilet, descripcion: 'Baños completos' },
    { id: 'bodegas', nombre: 'Bodegas', icon: FaWarehouse, descripcion: 'Almacenamiento seguro' },
    { id: 'comedores', nombre: 'Comedores', icon: FaUtensils, descripcion: 'Áreas de comedor' },
    { id: 'dormitorios', nombre: 'Dormitorios', icon: FaBed, descripcion: 'Habitaciones equipadas' },
    { id: 'fast-food', nombre: 'Fast Food', icon: FaHamburger, descripcion: 'Locales de comida rápida' },
    { id: 'piscinas', nombre: 'Piscinas', icon: FaSwimmingPool, descripcion: 'Albercas modulares' },
    { id: 'cafeterias', nombre: 'Cafeterías', icon: FaCoffee, descripcion: 'Locales de café' },
    { id: 'gimnasios', nombre: 'Gimnasios', icon: FaDumbbell, descripcion: 'Espacios fitness' },
    { id: 'consultorios', nombre: 'Consultorios Médicos', icon: FaStethoscope, descripcion: 'Clínicas y consultorios' },
    { id: 'tiendas', nombre: 'Tiendas/Comercios', icon: FaStore, descripcion: 'Locales comerciales' },
    { id: 'viviendas', nombre: 'Viviendas/Casas', icon: FaHome, descripcion: 'Casas modulares' },
    { id: 'aulas', nombre: 'Aulas/Salones', icon: FaChalkboardTeacher, descripcion: 'Salones educativos' },
    { id: 'laboratorios', nombre: 'Laboratorios', icon: FaFlask, descripcion: 'Labs equipados' },
    { id: 'talleres', nombre: 'Talleres', icon: FaTools, descripcion: 'Espacios de trabajo técnico' },
    { id: 'duchas', nombre: 'Duchas/Vestidores', icon: FaShower, descripcion: 'Vestidores con duchas' },
    { id: 'casetas', nombre: 'Casetas de Vigilancia', icon: FaUserShield, descripcion: 'Puestos de seguridad' },
    { id: 'departamentos', nombre: 'Mini Departamentos', icon: FaBuilding, descripcion: 'Departamentos compactos' },
    { id: 'otros', nombre: 'Otros (Personalizado)', icon: FaEllipsisH, descripcion: 'Proyecto a medida' }
  ];

  // PASO 2: Tamaños
  const tamanos = [
    {
      id: '10',
      nombre: '10 pies',
      medidas: '3m × 2.4m × 2.6m',
      capacidad: '16.4 m³',
      descripcion: 'Ideal para espacios compactos'
    },
    {
      id: '20',
      nombre: '20 pies',
      medidas: '6m × 2.4m × 2.6m',
      capacidad: '33.2 m³',
      descripcion: 'Tamaño estándar más popular'
    },
    {
      id: '40',
      nombre: '40 pies',
      medidas: '12m × 2.4m × 2.6m',
      capacidad: '67.7 m³',
      descripcion: 'Máximo espacio disponible'
    }
  ];

  // PASO 3: Opciones de personalización básica
  const colores = [
    { id: 'blanco', nombre: 'Blanco', hex: '#FFFFFF' },
    { id: 'gris', nombre: 'Gris', hex: '#7A8389' },
    { id: 'azul', nombre: 'Azul', hex: '#2E5C8A' },
    { id: 'verde', nombre: 'Verde', hex: '#2E7D32' },
    { id: 'naranja', nombre: 'Naranja', hex: '#F16700' },
    { id: 'personalizado', nombre: 'Personalizado', hex: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
  ];

  const opcionesPuertas = ['1 puerta', '2 puertas', '3+ puertas'];
  const opcionesVentanas = ['Sin ventanas', '2 ventanas', '4 ventanas', '6+ ventanas'];

  // Funciones de navegación
  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return config.tipoUso !== '';
      case 2:
        return config.tamano !== '';
      case 3:
        return config.color !== '' && config.puertas !== '' && config.ventanas !== '';
      case 4:
        return true; // Los servicios son opcionales
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    // Construir resumen para enviar
    const resumen = `
PERSONALIZACIÓN DE CONTENEDOR

Tipo de Uso: ${tiposUso.find(t => t.id === config.tipoUso)?.nombre || 'No especificado'}
Tamaño: ${tamanos.find(t => t.id === config.tamano)?.nombre || 'No especificado'}
Color: ${colores.find(c => c.id === config.color)?.nombre || 'No especificado'}
Puertas: ${config.puertas}
Ventanas: ${config.ventanas}

Servicios Adicionales:
${config.electrico ? '✓ Instalación Eléctrica' : ''}
${config.climatizacion ? '✓ Climatización (AC)' : ''}
${config.plomeria ? '✓ Plomería' : ''}
${config.aislamiento ? '✓ Aislamiento Térmico' : ''}
${config.pisos ? '✓ Pisos Especiales' : ''}
${config.acabadosInteriores ? '✓ Acabados Interiores' : ''}
    `.trim();

    // Guardar en sessionStorage para pasarlo al formulario de contacto
    sessionStorage.setItem('cotizacionPersonalizada', resumen);

    // Redirigir a contacto
    navigate('/contacto?tipo=personalizacion');
  };

  // Calcular progreso
  const progress = (currentStep / 5) * 100;

  return (
    <div className="personalizar-page">
      <SEO {...seoConfig.personalizarContenedor} />

      {/* Hero Section */}
      <section className="personalizar-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h1 className="personalizar-hero__title">Personaliza tu Contenedor</h1>
              <p className="personalizar-hero__description">
                Diseña tu contenedor ideal en 5 pasos simples
              </p>

              {/* Progress Bar */}
              <div className="personalizar-hero__progress">
                <ProgressBar
                  now={progress}
                  label={`Paso ${currentStep} de 5`}
                  variant="dark"
                  className="mb-2"
                />
                <div className="personalizar-hero__steps">
                  <span className={currentStep >= 1 ? 'active' : ''}>1. Uso</span>
                  <span className={currentStep >= 2 ? 'active' : ''}>2. Tamaño</span>
                  <span className={currentStep >= 3 ? 'active' : ''}>3. Básico</span>
                  <span className={currentStep >= 4 ? 'active' : ''}>4. Servicios</span>
                  <span className={currentStep >= 5 ? 'active' : ''}>5. Resumen</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Wizard Content */}
      <section className="personalizar-wizard">
        <Container>

          {/* PASO 1: Tipo de Uso */}
          {currentStep === 1 && (
            <div className="wizard-step wizard-step-1">
              <Row className="justify-content-center mb-4">
                <Col lg={10}>
                  <h2 className="wizard-step__title">¿Para qué usarás el contenedor?</h2>
                  <p className="wizard-step__subtitle">Selecciona el tipo de adecuación que necesitas</p>
                </Col>
              </Row>

              <Row>
                {tiposUso.map((tipo) => {
                  const IconComponent = tipo.icon;
                  return (
                    <Col key={tipo.id} lg={3} md={4} sm={6} className="mb-4">
                      <Card
                        className={`tipo-uso-card ${config.tipoUso === tipo.id ? 'selected' : ''}`}
                        onClick={() => setConfig({...config, tipoUso: tipo.id})}
                      >
                        <Card.Body className="text-center">
                          <div className="tipo-uso-card__icon">
                            <IconComponent size={48} />
                          </div>
                          <h4 className="tipo-uso-card__nombre">{tipo.nombre}</h4>
                          <p className="tipo-uso-card__descripcion">{tipo.descripcion}</p>
                          {config.tipoUso === tipo.id && (
                            <div className="tipo-uso-card__check">
                              <FaCheck />
                            </div>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}

          {/* PASO 2: Tamaño */}
          {currentStep === 2 && (
            <div className="wizard-step wizard-step-2">
              <Row className="justify-content-center mb-4">
                <Col lg={10}>
                  <h2 className="wizard-step__title">¿Qué tamaño necesitas?</h2>
                  <p className="wizard-step__subtitle">Elige el tamaño del contenedor</p>
                </Col>
              </Row>

              <Row className="justify-content-center">
                {tamanos.map((tamano) => (
                  <Col key={tamano.id} lg={4} md={6} className="mb-4">
                    <Card
                      className={`tamano-card ${config.tamano === tamano.id ? 'selected' : ''}`}
                      onClick={() => setConfig({...config, tamano: tamano.id})}
                    >
                      <Card.Body>
                        <div className="tamano-card__header">
                          <h3 className="tamano-card__nombre">{tamano.nombre}</h3>
                          {config.tamano === tamano.id && (
                            <div className="tamano-card__check">
                              <FaCheck />
                            </div>
                          )}
                        </div>
                        <div className="tamano-card__specs">
                          <p><strong>Medidas:</strong> {tamano.medidas}</p>
                          <p><strong>Capacidad:</strong> {tamano.capacidad}</p>
                          <p className="tamano-card__descripcion">{tamano.descripcion}</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}

          {/* PASO 3: Personalización Básica */}
          {currentStep === 3 && (
            <div className="wizard-step wizard-step-3">
              <Row className="justify-content-center mb-4">
                <Col lg={10}>
                  <h2 className="wizard-step__title">Personalización Básica</h2>
                  <p className="wizard-step__subtitle">Define el aspecto exterior de tu contenedor</p>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col lg={8}>
                  <Card className="personalizacion-card">
                    <Card.Body>
                      {/* Color */}
                      <Form.Group className="mb-4">
                        <Form.Label className="personalizacion-label">Color Exterior</Form.Label>
                        <div className="color-selector">
                          {colores.map((color) => (
                            <div
                              key={color.id}
                              className={`color-option ${config.color === color.id ? 'selected' : ''}`}
                              style={{
                                background: color.hex.includes('gradient') ? color.hex : color.hex,
                                border: color.id === 'blanco' ? '2px solid #ddd' : 'none'
                              }}
                              onClick={() => setConfig({...config, color: color.id})}
                              title={color.nombre}
                            >
                              {config.color === color.id && (
                                <FaCheck color={color.id === 'blanco' ? '#000' : '#fff'} />
                              )}
                            </div>
                          ))}
                        </div>
                        <small className="text-muted">Color seleccionado: {colores.find(c => c.id === config.color)?.nombre || 'Ninguno'}</small>
                      </Form.Group>

                      {/* Puertas */}
                      <Form.Group className="mb-4">
                        <Form.Label className="personalizacion-label">Número de Puertas</Form.Label>
                        <Form.Select
                          value={config.puertas}
                          onChange={(e) => setConfig({...config, puertas: e.target.value})}
                        >
                          <option value="">Selecciona...</option>
                          {opcionesPuertas.map((opcion, index) => (
                            <option key={index} value={opcion}>{opcion}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      {/* Ventanas */}
                      <Form.Group className="mb-4">
                        <Form.Label className="personalizacion-label">Ventanas</Form.Label>
                        <Form.Select
                          value={config.ventanas}
                          onChange={(e) => setConfig({...config, ventanas: e.target.value})}
                        >
                          <option value="">Selecciona...</option>
                          {opcionesVentanas.map((opcion, index) => (
                            <option key={index} value={opcion}>{opcion}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          )}

          {/* PASO 4: Servicios y Acabados */}
          {currentStep === 4 && (
            <div className="wizard-step wizard-step-4">
              <Row className="justify-content-center mb-4">
                <Col lg={10}>
                  <h2 className="wizard-step__title">Servicios y Acabados</h2>
                  <p className="wizard-step__subtitle">Selecciona los servicios adicionales que necesites (opcional)</p>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col lg={8}>
                  <Card className="servicios-card">
                    <Card.Body>
                      <Row>
                        <Col md={6} className="mb-3">
                          <div className="servicio-item">
                            <div className="servicio-item__header">
                              <FaBolt size={32} color="#F16700" />
                              <div>
                                <h5>Instalación Eléctrica</h5>
                                <p>Cableado completo y tomas de corriente</p>
                              </div>
                            </div>
                            <Form.Check
                              type="switch"
                              checked={config.electrico}
                              onChange={(e) => setConfig({...config, electrico: e.target.checked})}
                            />
                          </div>
                        </Col>

                        <Col md={6} className="mb-3">
                          <div className="servicio-item">
                            <div className="servicio-item__header">
                              <FaSnowflake size={32} color="#00BCD4" />
                              <div>
                                <h5>Climatización</h5>
                                <p>Aire acondicionado y calefacción</p>
                              </div>
                            </div>
                            <Form.Check
                              type="switch"
                              checked={config.climatizacion}
                              onChange={(e) => setConfig({...config, climatizacion: e.target.checked})}
                            />
                          </div>
                        </Col>

                        <Col md={6} className="mb-3">
                          <div className="servicio-item">
                            <div className="servicio-item__header">
                              <FaTint size={32} color="#2196F3" />
                              <div>
                                <h5>Plomería</h5>
                                <p>Instalaciones hidráulicas completas</p>
                              </div>
                            </div>
                            <Form.Check
                              type="switch"
                              checked={config.plomeria}
                              onChange={(e) => setConfig({...config, plomeria: e.target.checked})}
                            />
                          </div>
                        </Col>

                        <Col md={6} className="mb-3">
                          <div className="servicio-item">
                            <div className="servicio-item__header">
                              <FaHardHat size={32} color="#3B6F7F" />
                              <div>
                                <h5>Aislamiento Térmico</h5>
                                <p>Aislamiento para temperatura</p>
                              </div>
                            </div>
                            <Form.Check
                              type="switch"
                              checked={config.aislamiento}
                              onChange={(e) => setConfig({...config, aislamiento: e.target.checked})}
                            />
                          </div>
                        </Col>

                        <Col md={6} className="mb-3">
                          <div className="servicio-item">
                            <div className="servicio-item__header">
                              <FaTools size={32} color="#841C03" />
                              <div>
                                <h5>Pisos Especiales</h5>
                                <p>Pisos de madera, vinil o cerámicos</p>
                              </div>
                            </div>
                            <Form.Check
                              type="switch"
                              checked={config.pisos}
                              onChange={(e) => setConfig({...config, pisos: e.target.checked})}
                            />
                          </div>
                        </Col>

                        <Col md={6} className="mb-3">
                          <div className="servicio-item">
                            <div className="servicio-item__header">
                              <FaPaintBrush size={32} color="#9C27B0" />
                              <div>
                                <h5>Acabados Interiores</h5>
                                <p>Pintura y acabados personalizados</p>
                              </div>
                            </div>
                            <Form.Check
                              type="switch"
                              checked={config.acabadosInteriores}
                              onChange={(e) => setConfig({...config, acabadosInteriores: e.target.checked})}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          )}

          {/* PASO 5: Resumen */}
          {currentStep === 5 && (
            <div className="wizard-step wizard-step-5">
              <Row className="justify-content-center mb-4">
                <Col lg={10}>
                  <h2 className="wizard-step__title">Resumen de tu Personalización</h2>
                  <p className="wizard-step__subtitle">Revisa tu configuración antes de solicitar la cotización</p>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col lg={8}>
                  <Card className="resumen-card">
                    <Card.Body>
                      <div className="resumen-section">
                        <h4>Tipo de Uso</h4>
                        <p className="resumen-value">
                          {tiposUso.find(t => t.id === config.tipoUso)?.nombre || 'No especificado'}
                        </p>
                      </div>

                      <div className="resumen-section">
                        <h4>Tamaño</h4>
                        <p className="resumen-value">
                          {tamanos.find(t => t.id === config.tamano)?.nombre || 'No especificado'} - {tamanos.find(t => t.id === config.tamano)?.medidas}
                        </p>
                      </div>

                      <div className="resumen-section">
                        <h4>Personalización Básica</h4>
                        <ul>
                          <li><strong>Color:</strong> {colores.find(c => c.id === config.color)?.nombre}</li>
                          <li><strong>Puertas:</strong> {config.puertas}</li>
                          <li><strong>Ventanas:</strong> {config.ventanas}</li>
                        </ul>
                      </div>

                      <div className="resumen-section">
                        <h4>Servicios Adicionales</h4>
                        {[config.electrico, config.climatizacion, config.plomeria, config.aislamiento, config.pisos, config.acabadosInteriores].some(Boolean) ? (
                          <ul>
                            {config.electrico && <li>Instalación Eléctrica</li>}
                            {config.climatizacion && <li>Climatización (AC)</li>}
                            {config.plomeria && <li>Plomería</li>}
                            {config.aislamiento && <li>Aislamiento Térmico</li>}
                            {config.pisos && <li>Pisos Especiales</li>}
                            {config.acabadosInteriores && <li>Acabados Interiores</li>}
                          </ul>
                        ) : (
                          <p className="resumen-value text-muted">Ninguno seleccionado</p>
                        )}
                      </div>

                      <div className="resumen-cta">
                        <p className="resumen-cta__text">
                          ¿Todo listo? Solicita una cotización personalizada para tu contenedor
                        </p>
                        <Button
                          variant="dark"
                          size="lg"
                          className="w-100 resumen-cta__button"
                          onClick={handleSubmit}
                        >
                          <FaCheck className="me-2" />
                          Solicitar Cotización Personalizada
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          )}

          {/* Navigation Buttons */}
          <Row className="justify-content-center mt-5">
            <Col lg={8}>
              <div className="wizard-navigation">
                {currentStep > 1 && (
                  <Button
                    variant="outline-dark"
                    onClick={prevStep}
                    className="wizard-navigation__prev"
                  >
                    <FaArrowLeft className="me-2" />
                    Anterior
                  </Button>
                )}

                {currentStep < 5 && (
                  <Button
                    variant="dark"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="wizard-navigation__next"
                  >
                    Siguiente
                    <FaArrowRight className="ms-2" />
                  </Button>
                )}
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </div>
  );
};

export default PersonalizarContenedor;
