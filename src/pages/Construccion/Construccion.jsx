import React from 'react';
import { Container, Row, Col, Breadcrumb, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Construccion.scss';

/**
 * @component Construccion
 * @description Proceso de construcción de contenedores paso a paso
 * @phase Fase 2 - Sprint 4
 * @status Maquetado completo - Pendiente de contenido por Gemini
 */
const Construccion = () => {
  const pasos = [
    {
      id: 1,
      numero: '01',
      titulo: 'Inspección y Evaluación',
      descripcion: 'Evaluación completa del contenedor, verificando estructura, soldaduras y condición general',
      icono: '🔍',
      duracion: '1-2 días'
    },
    {
      id: 2,
      numero: '02',
      titulo: 'Diseño y Planificación',
      descripcion: 'Creación del diseño arquitectónico y planos técnicos según especificaciones del cliente',
      icono: '📐',
      duracion: '3-5 días'
    },
    {
      id: 3,
      numero: '03',
      titulo: 'Preparación de la Estructura',
      descripcion: 'Limpieza, tratamiento anticorrosivo y preparación de la superficie del contenedor',
      icono: '🔨',
      duracion: '2-3 días'
    },
    {
      id: 4,
      numero: '04',
      titulo: 'Corte y Modificaciones',
      descripcion: 'Apertura de ventanas, puertas y realización de modificaciones estructurales necesarias',
      icono: '⚙️',
      duracion: '3-4 días'
    },
    {
      id: 5,
      numero: '05',
      titulo: 'Instalaciones Eléctricas',
      descripcion: 'Instalación completa del sistema eléctrico, iluminación y puntos de conexión',
      icono: '⚡',
      duracion: '2-3 días'
    },
    {
      id: 6,
      numero: '06',
      titulo: 'Aislamiento Térmico',
      descripcion: 'Aplicación de materiales aislantes para temperatura y acústica interior',
      icono: '🧱',
      duracion: '2-3 días'
    },
    {
      id: 7,
      numero: '07',
      titulo: 'Acabados Interiores',
      descripcion: 'Instalación de paredes, pisos, techos y elementos decorativos interiores',
      icono: '🎨',
      duracion: '4-5 días'
    },
    {
      id: 8,
      numero: '08',
      titulo: 'Acabados Exteriores',
      descripcion: 'Pintura exterior, revestimientos y protección contra elementos climáticos',
      icono: '🖌️',
      duracion: '2-3 días'
    },
    {
      id: 9,
      numero: '09',
      titulo: 'Instalación de Sistemas',
      descripcion: 'Montaje de aire acondicionado, plomería y sistemas especiales según diseño',
      icono: '🔧',
      duracion: '3-4 días'
    },
    {
      id: 10,
      numero: '10',
      titulo: 'Inspección Final',
      descripcion: 'Revisión completa de calidad, pruebas de sistemas y certificación del proyecto',
      icono: '✅',
      duracion: '1-2 días'
    }
  ];

  return (
    <div className="construccion-page">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Proceso de Construcción</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Banner Hero */}
      <section className="construccion-page__banner">
        <div className="construccion-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="construccion-page__banner-title">Proceso de Construcción</h1>
                <p className="construccion-page__banner-subtitle">
                  Transformamos contenedores marítimos en espacios funcionales y personalizados con un proceso paso a paso profesional
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Introducción */}
      <section className="construccion-page__intro">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="construccion-page__intro-content">
                <h2 className="construccion-page__section-title">De Contenedor a Espacio Único</h2>
                <p className="construccion-page__intro-text">
                  Nuestro proceso de construcción está diseñado para garantizar la máxima calidad en cada proyecto.
                  Con más de 10 años de experiencia, hemos perfeccionado cada paso para entregar espacios que superan
                  las expectativas de nuestros clientes.
                </p>
                <p className="construccion-page__intro-text">
                  Cada proyecto es único y se adapta a las necesidades específicas del cliente, desde oficinas modulares
                  hasta viviendas completas, pasando por espacios comerciales y soluciones industriales.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Timeline de Pasos */}
      <section className="construccion-page__pasos">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10} className="text-center">
              <h2 className="construccion-page__section-title">10 Pasos para la Transformación</h2>
              <p className="construccion-page__section-subtitle">
                Desde la inspección inicial hasta la entrega final, cada fase está cuidadosamente planificada
              </p>
            </Col>
          </Row>

          <Row>
            {pasos.map((paso, index) => (
              <Col key={paso.id} lg={6} className="mb-4">
                <Card className="construccion-page__paso-card">
                  <Card.Body>
                    <div className="construccion-page__paso-header">
                      <div className="construccion-page__paso-numero">{paso.numero}</div>
                      <div className="construccion-page__paso-icono">{paso.icono}</div>
                    </div>
                    <Card.Title className="construccion-page__paso-titulo">
                      {paso.titulo}
                    </Card.Title>
                    <Card.Text className="construccion-page__paso-descripcion">
                      {paso.descripcion}
                    </Card.Text>
                    <div className="construccion-page__paso-duracion">
                      ⏱️ Duración estimada: <strong>{paso.duracion}</strong>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Tiempo Total */}
      <section className="construccion-page__timeline">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <div className="construccion-page__timeline-box">
                <h3 className="construccion-page__timeline-title">Tiempo Total del Proyecto</h3>
                <div className="construccion-page__timeline-tiempo">4-6 semanas</div>
                <p className="construccion-page__timeline-text">
                  El tiempo puede variar según la complejidad del proyecto y las especificaciones personalizadas.
                  Le proporcionaremos un cronograma detallado al inicio de su proyecto.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="construccion-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="construccion-page__cta-title">¿Listo para Comenzar tu Proyecto?</h2>
              <p className="construccion-page__cta-text">
                Nuestro equipo de expertos está listo para transformar tu visión en realidad.
                Contáctanos para una consulta gratuita y cotización personalizada.
              </p>
              <Link to="/contacto" className="construccion-page__cta-button">
                Solicitar Cotización
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Construccion;
