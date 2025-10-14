import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Construccion.scss';

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
      {/* Hero Section */}
      <section className="construccion-hero">
        <Container>
          <h1 className="construccion-hero__title">Proceso de Construcción</h1>
          <p className="construccion-hero__description">
            Transformamos contenedores marítimos en espacios funcionales y personalizados con un proceso
            paso a paso profesional. Con más de 10 años de experiencia, hemos completado cientos de proyectos
            únicos que superan las expectativas de nuestros clientes.
          </p>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="construccion-intro">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="construccion-intro__title">De Contenedor a Espacio Único</h2>
              <p className="construccion-intro__text">
                Nuestro proceso de construcción está diseñado para garantizar la máxima calidad en cada proyecto.
                Con más de 10 años de experiencia, hemos perfeccionado cada paso para entregar espacios que superan
                las expectativas de nuestros clientes.
              </p>
              <p className="construccion-intro__text">
                Cada proyecto es único y se adapta a las necesidades específicas del cliente, desde oficinas modulares
                hasta viviendas completas, pasando por espacios comerciales y soluciones industriales.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pasos Section */}
      <section className="construccion-pasos">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={10}>
              <h2 className="construccion-pasos__title">10 Pasos para la Transformación</h2>
              <p className="construccion-pasos__subtitle">
                Desde la inspección inicial hasta la entrega final, cada fase está cuidadosamente planificada
              </p>
            </Col>
          </Row>

          <Row>
            {pasos.map((paso) => (
              <Col key={paso.id} lg={6} className="mb-4">
                <div className="construccion-pasos__card">
                  <div className="construccion-pasos__card-header">
                    <div className="construccion-pasos__card-numero">{paso.numero}</div>
                    <div className="construccion-pasos__card-icono">{paso.icono}</div>
                  </div>
                  <h3 className="construccion-pasos__card-titulo">{paso.titulo}</h3>
                  <p className="construccion-pasos__card-descripcion">{paso.descripcion}</p>
                  <div className="construccion-pasos__card-duracion">
                    ⏱️ Duración estimada: <strong>{paso.duracion}</strong>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="construccion-timeline">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="construccion-timeline__box">
                <h3 className="construccion-timeline__title">Tiempo Total del Proyecto</h3>
                <div className="construccion-timeline__tiempo">4-6 semanas</div>
                <p className="construccion-timeline__text">
                  El tiempo puede variar según la complejidad del proyecto y las especificaciones personalizadas.
                  Le proporcionaremos un cronograma detallado al inicio de su proyecto.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="construccion-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="construccion-cta__title">¿Listo para Comenzar tu Proyecto?</h2>
              <p className="construccion-cta__text">
                Nuestro equipo de expertos está listo para transformar tu visión en realidad.
                Contáctanos para una consulta gratuita y cotización personalizada.
              </p>
              <div className="text-center">
                <Link to="/contacto" className="construccion-cta__button">
                  Solicitar Cotización
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Construccion;
