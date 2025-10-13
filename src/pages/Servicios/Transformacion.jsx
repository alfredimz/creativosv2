import React from 'react';
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Servicios.scss';

const Transformacion = () => {
  const proyectos = [
    { icono: '🏢', titulo: 'Oficinas', descripcion: 'Espacios de trabajo modernos y funcionales' },
    { icono: '🏠', titulo: 'Viviendas', descripcion: 'Casas modulares completas y personalizadas' },
    { icono: '🏪', titulo: 'Comercios', descripcion: 'Tiendas, cafeterías y locales comerciales' },
    { icono: '🏋️', titulo: 'Gimnasios', descripcion: 'Espacios deportivos y de entrenamiento' },
    { icono: '🎨', titulo: 'Estudios', descripcion: 'Talleres de arte, música y diseño' },
    { icono: '🏗️', titulo: 'Bodegas', descripcion: 'Almacenes industriales modificados' }
  ];

  const proceso = [
    { paso: '01', titulo: 'Consulta Inicial', descripcion: 'Definimos tus necesidades y visión del proyecto' },
    { paso: '02', titulo: 'Diseño', descripcion: 'Creamos planos y renders 3D personalizados' },
    { paso: '03', titulo: 'Cotización', descripcion: 'Presupuesto detallado sin sorpresas' },
    { paso: '04', titulo: 'Fabricación', descripcion: 'Construcción y modificaciones en nuestro taller' },
    { paso: '05', titulo: 'Instalación', descripcion: 'Entrega e instalación en tu ubicación' }
  ];

  const caracteristicas = [
    'Diseño arquitectónico personalizado',
    'Instalaciones eléctricas certificadas',
    'Sistema de climatización',
    'Aislamiento térmico y acústico',
    'Acabados interiores de calidad',
    'Pintura exterior profesional',
    'Ventanas y puertas a medida',
    'Plomería e hidráulica',
    'Certificaciones y permisos',
    'Garantía de 2 años'
  ];

  return (
    <div className="servicio-page">
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/servicios" }}>Servicios</Breadcrumb.Item>
          <Breadcrumb.Item active>Transformación de Contenedores</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="servicio-page__banner">
        <div className="servicio-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="servicio-page__banner-title">Transformación de Contenedores</h1>
                <p className="servicio-page__banner-subtitle">
                  Convertimos contenedores en espacios únicos y funcionales para cualquier necesidad
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
                <h2 className="servicio-page__section-title">De Contenedor a Espacio Soñado</h2>
                <p className="servicio-page__intro-text">
                  Especializados en la transformación completa de contenedores marítimos en espacios
                  habitables, comerciales y de trabajo. Con más de 10 años de experiencia, hemos completado
                  cientos de proyectos únicos que superan las expectativas de nuestros clientes.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="servicio-page__beneficios">
        <Container>
          <h2 className="servicio-page__section-title text-center mb-5">Tipos de Proyectos</h2>
          <Row>
            {proyectos.map((proyecto, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="servicio-page__beneficio">
                  <div className="servicio-page__beneficio-icono">{proyecto.icono}</div>
                  <h3 className="servicio-page__beneficio-titulo">{proyecto.titulo}</h3>
                  <p className="servicio-page__beneficio-descripcion">{proyecto.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="servicio-page__proceso">
        <Container>
          <h2 className="servicio-page__section-title text-center mb-5">Nuestro Proceso</h2>
          <Row>
            {proceso.map((item, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <div className="servicio-page__proceso-item">
                  <div className="servicio-page__proceso-numero">{item.paso}</div>
                  <h3 className="servicio-page__proceso-titulo">{item.titulo}</h3>
                  <p className="servicio-page__proceso-descripcion">{item.descripcion}</p>
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
              <h2 className="servicio-page__section-title">Lo Que Incluye</h2>
              <ul className="servicio-page__lista">
                {caracteristicas.map((car, index) => (
                  <li key={index}>{car}</li>
                ))}
              </ul>
            </Col>
            <Col lg={6}>
              <div className="servicio-page__imagen-placeholder">
                <div className="servicio-page__placeholder-content">
                  <span>🏗️</span>
                  <p>Transformación Completa</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="servicio-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="servicio-page__cta-title">¿Listo para Transformar?</h2>
              <p className="servicio-page__cta-text">
                Agenda una consulta gratuita y descubre cómo podemos hacer realidad tu proyecto.
              </p>
              <Link to="/contacto" className="servicio-page__cta-button">
                Solicitar Consulta
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Transformacion;
