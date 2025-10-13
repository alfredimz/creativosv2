import React from 'react';
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Aliados.scss';

/**
 * @component Aliados
 * @description Nuestros aliados estratégicos y colaboradores
 * @phase Fase 2 - Sprint 5
 * @status Maquetado completo - Pendiente de contenido por Gemini
 */
const Aliados = () => {
  // Datos de ejemplo para aliados
  const aliados = [
    { id: 1, nombre: 'Aliado 1', categoria: 'Logística', descripcion: 'Descripción del aliado estratégico' },
    { id: 2, nombre: 'Aliado 2', categoria: 'Construcción', descripcion: 'Descripción del aliado estratégico' },
    { id: 3, nombre: 'Aliado 3', categoria: 'Transporte', descripcion: 'Descripción del aliado estratégico' },
    { id: 4, nombre: 'Aliado 4', categoria: 'Manufactura', descripcion: 'Descripción del aliado estratégico' },
    { id: 5, nombre: 'Aliado 5', categoria: 'Comercio', descripcion: 'Descripción del aliado estratégico' },
    { id: 6, nombre: 'Aliado 6', categoria: 'Tecnología', descripcion: 'Descripción del aliado estratégico' },
  ];

  const categorias = ['Todas', 'Logística', 'Construcción', 'Transporte', 'Manufactura', 'Comercio', 'Tecnología'];

  return (
    <div className="aliados-page">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Aliados</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Banner Hero */}
      <section className="aliados-page__banner">
        <div className="aliados-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="aliados-page__banner-title">Nuestros Aliados Estratégicos</h1>
                <p className="aliados-page__banner-subtitle">
                  Colaboramos con las mejores empresas para brindarte soluciones integrales en contenedores marítimos
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Introducción */}
      <section className="aliados-page__intro">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="aliados-page__intro-content">
                <h2 className="aliados-page__section-title">Colaboraciones que Generan Valor</h2>
                <p className="aliados-page__intro-text">
                  En Creativos Espacios, creemos en el poder de las alianzas estratégicas. Trabajamos con empresas
                  líderes en diferentes sectores para ofrecer soluciones completas y de alta calidad a nuestros clientes.
                </p>
                <p className="aliados-page__intro-text">
                  Nuestros aliados comparten nuestros valores de excelencia, innovación y compromiso con el cliente.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filtros de Categorías */}
      <section className="aliados-page__filtros">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="aliados-page__filtros-container">
                <h3 className="aliados-page__filtros-title">Filtrar por Categoría</h3>
                <div className="aliados-page__filtros-buttons">
                  {categorias.map((categoria, index) => (
                    <button
                      key={index}
                      className={`aliados-page__filtro-btn ${index === 0 ? 'active' : ''}`}
                    >
                      {categoria}
                    </button>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Grid de Aliados */}
      <section className="aliados-page__grid">
        <Container>
          <Row>
            {aliados.map((aliado) => (
              <Col key={aliado.id} lg={4} md={6} className="mb-4">
                <Card className="aliados-page__card">
                  <div className="aliados-page__card-image">
                    <div className="aliados-page__card-placeholder">
                      Logo del Aliado
                    </div>
                  </div>
                  <Card.Body>
                    <div className="aliados-page__card-categoria">{aliado.categoria}</div>
                    <Card.Title className="aliados-page__card-title">{aliado.nombre}</Card.Title>
                    <Card.Text className="aliados-page__card-text">
                      {aliado.descripcion}
                    </Card.Text>
                    <a href="#" className="aliados-page__card-link">
                      Ver más información →
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Beneficios de Alianzas */}
      <section className="aliados-page__beneficios">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="aliados-page__section-title text-center mb-5">
                Beneficios de Nuestras Alianzas
              </h2>
              <Row>
                <Col md={4} className="mb-4">
                  <div className="aliados-page__beneficio">
                    <div className="aliados-page__beneficio-icon">🤝</div>
                    <h3 className="aliados-page__beneficio-title">Soluciones Integrales</h3>
                    <p className="aliados-page__beneficio-text">
                      Ofrecemos servicios completos gracias a nuestra red de aliados especializados
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="aliados-page__beneficio">
                    <div className="aliados-page__beneficio-icon">⭐</div>
                    <h3 className="aliados-page__beneficio-title">Calidad Garantizada</h3>
                    <p className="aliados-page__beneficio-text">
                      Trabajamos solo con empresas que cumplen nuestros altos estándares de calidad
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="aliados-page__beneficio">
                    <div className="aliados-page__beneficio-icon">💡</div>
                    <h3 className="aliados-page__beneficio-title">Innovación Constante</h3>
                    <p className="aliados-page__beneficio-text">
                      Nuestros aliados nos mantienen a la vanguardia en tecnología y soluciones
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="aliados-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="aliados-page__cta-title">¿Quieres Ser Nuestro Aliado?</h2>
              <p className="aliados-page__cta-text">
                Si tu empresa comparte nuestros valores y quieres formar parte de nuestra red de aliados estratégicos,
                nos encantaría conocerte.
              </p>
              <Link to="/contacto" className="aliados-page__cta-button">
                Contáctanos
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Aliados;
