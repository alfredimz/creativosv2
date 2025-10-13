import React from 'react';
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Servicios.scss';

const Alquiler = () => {
  const beneficios = [
    { icono: '💰', titulo: 'Sin Inversión Inicial', descripcion: 'Renta mensual accesible sin necesidad de comprar' },
    { icono: '⏱️', titulo: 'Flexibilidad de Tiempo', descripcion: 'Renta por el tiempo que necesites, desde 1 mes' },
    { icono: '🔄', titulo: 'Renovación Fácil', descripcion: 'Extiende tu contrato cuando lo necesites' },
    { icono: '🚚', titulo: 'Transporte Incluido', descripcion: 'Entrega y recolección en tu ubicación' },
    { icono: '🛠️', titulo: 'Mantenimiento', descripcion: 'Soporte técnico durante todo el periodo' },
    { icono: '📋', titulo: 'Contratos Simples', descripcion: 'Proceso ágil y sin complicaciones' }
  ];

  const aplicaciones = [
    'Almacenamiento temporal durante construcción',
    'Oficinas móviles para obras',
    'Bodegas para eventos y exposiciones',
    'Almacén de inventario estacional',
    'Espacios comerciales temporales',
    'Guardamuebles durante mudanzas'
  ];

  const tarifas = [
    { tamano: '10 pies', precio: 'Desde $3,500/mes', caracteristicas: ['Ideal para almacenamiento pequeño', 'Perfecto para uso temporal'] },
    { tamano: '20 pies', precio: 'Desde $5,000/mes', caracteristicas: ['Más popular', 'Espacio versátil'] },
    { tamano: '40 pies', precio: 'Desde $8,000/mes', caracteristicas: ['Máximo espacio', 'Proyectos grandes'] }
  ];

  return (
    <div className="servicio-page">
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/servicios" }}>Servicios</Breadcrumb.Item>
          <Breadcrumb.Item active>Alquiler de Contenedores</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="servicio-page__banner">
        <div className="servicio-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="servicio-page__banner-title">Alquiler de Contenedores</h1>
                <p className="servicio-page__banner-subtitle">
                  Soluciones flexibles de almacenamiento sin la necesidad de comprar
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="servicio-page__intro">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="servicio-page__intro-content">
                <h2 className="servicio-page__section-title">¿Por Qué Rentar un Contenedor?</h2>
                <p className="servicio-page__intro-text">
                  El alquiler de contenedores es la opción perfecta cuando necesitas espacio adicional
                  de forma temporal o quieres probar antes de comprar. Ofrecemos contenedores en excelente
                  estado con la flexibilidad que tu proyecto necesita.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="servicio-page__beneficios">
        <Container>
          <h2 className="servicio-page__section-title text-center mb-5">Beneficios del Alquiler</h2>
          <Row>
            {beneficios.map((beneficio, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="servicio-page__beneficio">
                  <div className="servicio-page__beneficio-icono">{beneficio.icono}</div>
                  <h3 className="servicio-page__beneficio-titulo">{beneficio.titulo}</h3>
                  <p className="servicio-page__beneficio-descripcion">{beneficio.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="servicio-page__aplicaciones">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="servicio-page__section-title">Aplicaciones Comunes</h2>
              <ul className="servicio-page__lista">
                {aplicaciones.map((app, index) => (
                  <li key={index}>{app}</li>
                ))}
              </ul>
            </Col>
            <Col lg={6}>
              <div className="servicio-page__imagen-placeholder">
                <div className="servicio-page__placeholder-content">
                  <span>📦</span>
                  <p>Contenedor en Alquiler</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="servicio-page__tarifas">
        <Container>
          <h2 className="servicio-page__section-title text-center mb-5">Tarifas de Alquiler</h2>
          <Row>
            {tarifas.map((tarifa, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="servicio-page__tarifa-card h-100">
                  <Card.Body>
                    <h3 className="servicio-page__tarifa-tamano">{tarifa.tamano}</h3>
                    <div className="servicio-page__tarifa-precio">{tarifa.precio}</div>
                    <ul className="servicio-page__tarifa-lista">
                      {tarifa.caracteristicas.map((car, i) => (
                        <li key={i}>{car}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <p className="servicio-page__nota">*Precios sujetos a cambio. Incluye entrega y recolección dentro de CDMX.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="servicio-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="servicio-page__cta-title">¿Listo para Rentar?</h2>
              <p className="servicio-page__cta-text">
                Solicita una cotización personalizada y comienza a disfrutar de tu espacio adicional.
              </p>
              <Link to="/cotizador-renta" className="servicio-page__cta-button">
                Cotizar Alquiler
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Alquiler;
