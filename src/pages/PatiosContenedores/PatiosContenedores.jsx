import React from 'react';
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO, seoConfig } from '../../components/SEO';
import './PatiosContenedores.scss';

/**
 * @component PatiosContenedores
 * @description Ubicación y detalles de nuestros patios de contenedores
 * @phase Fase 2 - Sprint 5
 * @status Maquetado completo - Pendiente de contenido por Gemini
 */
const PatiosContenedores = () => {
  const patios = [
    {
      id: 1,
      nombre: 'Patio CDMX - Iztapalapa',
      direccion: 'Av. del Árbol 104, Col. Lomas de San Lorenzo, C.P. 09780, Iztapalapa, CDMX',
      telefono: '55 2608 8867 / 55 5426 9941',
      horario: 'Lunes a Viernes: 8:00 AM - 6:00 PM | Sábados: 9:00 AM - 2:00 PM',
      servicios: ['Venta de contenedores', 'Renta de contenedores', 'Modificaciones', 'Almacenamiento'],
      capacidad: '500+ contenedores',
      mapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.933997538313!2d-99.0563350850949!3d19.3283809869437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce02583341d4a7%3A0x5f2e9677a3a3f68!2sAv.%20del%20%C3%81rbol%20104%2C%20Lomas%20de%20San%20Lorenzo%2C%20Iztapalapa%2C%2009780%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1678886400000!5m2!1ses-419!2smx'
    },
    {
      id: 2,
      nombre: 'Patio Estado de México',
      direccion: 'Próximamente - En construcción',
      telefono: '55 2608 8867',
      horario: 'Próximamente',
      servicios: ['Venta de contenedores', 'Renta de contenedores', 'Logística'],
      capacidad: '300+ contenedores (proyectado)',
      mapsUrl: null
    }
  ];

  const caracteristicas = [
    {
      icono: '🚛',
      titulo: 'Fácil Acceso',
      descripcion: 'Ubicaciones estratégicas con acceso directo para vehículos de carga'
    },
    {
      icono: '🔒',
      titulo: 'Seguridad 24/7',
      descripcion: 'Vigilancia permanente y sistemas de seguridad avanzados'
    },
    {
      icono: '📦',
      titulo: 'Amplio Inventario',
      descripcion: 'Gran variedad de contenedores en diferentes tamaños y condiciones'
    },
    {
      icono: '⚙️',
      titulo: 'Taller en Sitio',
      descripcion: 'Servicios de modificación y reparación directamente en nuestros patios'
    }
  ];

  return (
    <div className="patios-page">
      <SEO {...seoConfig.patiosContenedores} />

      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Nuestros Patios</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Banner Hero */}
      <section className="patios-page__banner">
        <div className="patios-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="patios-page__banner-title">Nuestros Patios de Contenedores</h1>
                <p className="patios-page__banner-subtitle">
                  Visita nuestras instalaciones y descubre nuestro amplio inventario de contenedores marítimos
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Características */}
      <section className="patios-page__caracteristicas">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10} className="text-center">
              <h2 className="patios-page__section-title">¿Por Qué Visitar Nuestros Patios?</h2>
            </Col>
          </Row>
          <Row>
            {caracteristicas.map((caracteristica, index) => (
              <Col key={index} lg={3} md={6} className="mb-4">
                <div className="patios-page__caracteristica">
                  <div className="patios-page__caracteristica-icono">{caracteristica.icono}</div>
                  <h3 className="patios-page__caracteristica-titulo">{caracteristica.titulo}</h3>
                  <p className="patios-page__caracteristica-descripcion">{caracteristica.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Patios */}
      {patios.map((patio) => (
        <section key={patio.id} className={`patios-page__patio ${patio.id % 2 === 0 ? 'patios-page__patio--alt' : ''}`}>
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className={patio.id % 2 === 0 ? 'order-lg-2' : ''}>
                <Card className="patios-page__patio-card">
                  <Card.Body>
                    <h2 className="patios-page__patio-nombre">{patio.nombre}</h2>

                    <div className="patios-page__patio-info">
                      <div className="patios-page__patio-item">
                        <strong>📍 Dirección:</strong>
                        <p>{patio.direccion}</p>
                      </div>

                      <div className="patios-page__patio-item">
                        <strong>📞 Teléfono:</strong>
                        <p>{patio.telefono}</p>
                      </div>

                      <div className="patios-page__patio-item">
                        <strong>🕐 Horario:</strong>
                        <p>{patio.horario}</p>
                      </div>

                      <div className="patios-page__patio-item">
                        <strong>📦 Capacidad:</strong>
                        <p>{patio.capacidad}</p>
                      </div>

                      <div className="patios-page__patio-item">
                        <strong>⚙️ Servicios:</strong>
                        <ul className="patios-page__servicios-list">
                          {patio.servicios.map((servicio, index) => (
                            <li key={index}>{servicio}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6} className={`mb-4 mb-lg-0 ${patio.id % 2 === 0 ? 'order-lg-1' : ''}`}>
                <div className="patios-page__mapa">
                  {patio.mapsUrl ? (
                    <iframe
                      src={patio.mapsUrl}
                      width="100%"
                      height="450"
                      style={{ border: 0, borderRadius: '12px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Ubicación de ${patio.nombre}`}
                    ></iframe>
                  ) : (
                    <div className="patios-page__mapa-placeholder">
                      <p>Mapa disponible próximamente</p>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      ))}

      {/* Call to Action */}
      <section className="patios-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="patios-page__cta-title">¿Quieres Visitarnos?</h2>
              <p className="patios-page__cta-text">
                Agenda una cita para visitar nuestros patios y conocer personalmente nuestro inventario.
                Nuestro equipo estará encantado de asesorarte.
              </p>
              <Link to="/contacto" className="patios-page__cta-button">
                Agendar Visita
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PatiosContenedores;
