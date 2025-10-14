import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Aliados.scss';

const Aliados = () => {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
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
      {/* Hero Section */}
      <section className="aliados-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="aliados-hero__title">Nuestros Aliados Estratégicos</h1>
              <p className="aliados-hero__description">
                Colaboramos con las mejores empresas para brindarte soluciones integrales en contenedores marítimos
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="aliados-intro">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="aliados-intro__title">Colaboraciones que Generan Valor</h2>
              <p className="aliados-intro__text">
                En Creativos Espacios, creemos en el poder de las alianzas estratégicas. Trabajamos con empresas
                líderes en diferentes sectores para ofrecer soluciones completas y de alta calidad a nuestros clientes.
              </p>
              <p className="aliados-intro__text">
                Nuestros aliados comparten nuestros valores de excelencia, innovación y compromiso con el cliente.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filtros Section */}
      <section className="aliados-filtros">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h3 className="aliados-filtros__title">Filtrar por Categoría</h3>
              <div className="aliados-filtros__buttons">
                {categorias.map((categoria) => (
                  <button
                    key={categoria}
                    className={`aliados-filtros__button ${categoriaActiva === categoria ? 'aliados-filtros__button--active' : ''}`}
                    onClick={() => setCategoriaActiva(categoria)}
                  >
                    {categoria}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Grid Section */}
      <section className="aliados-grid">
        <Container>
          <Row>
            {aliados.map((aliado) => (
              <Col key={aliado.id} lg={4} md={6} className="mb-4">
                <Card className="aliados-grid__card h-100">
                  <div className="aliados-grid__card-image">
                    <div className="aliados-grid__card-placeholder">
                      Logo del Aliado
                    </div>
                  </div>
                  <Card.Body>
                    <span className="aliados-grid__card-categoria">{aliado.categoria}</span>
                    <Card.Title className="aliados-grid__card-titulo">{aliado.nombre}</Card.Title>
                    <Card.Text className="aliados-grid__card-texto">
                      {aliado.descripcion}
                    </Card.Text>
                    <a href="#" className="aliados-grid__card-link">
                      Ver más información →
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Beneficios Section */}
      <section className="aliados-beneficios">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="aliados-beneficios__title">
                Beneficios de Nuestras Alianzas
              </h2>
              <Row>
                <Col md={4} className="mb-4">
                  <div className="aliados-beneficios__card">
                    <div className="aliados-beneficios__card-icon">🤝</div>
                    <h3 className="aliados-beneficios__card-titulo">Soluciones Integrales</h3>
                    <p className="aliados-beneficios__card-texto">
                      Ofrecemos servicios completos gracias a nuestra red de aliados especializados
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="aliados-beneficios__card">
                    <div className="aliados-beneficios__card-icon">⭐</div>
                    <h3 className="aliados-beneficios__card-titulo">Calidad Garantizada</h3>
                    <p className="aliados-beneficios__card-texto">
                      Trabajamos solo con empresas que cumplen nuestros altos estándares de calidad
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="aliados-beneficios__card">
                    <div className="aliados-beneficios__card-icon">💡</div>
                    <h3 className="aliados-beneficios__card-titulo">Innovación Constante</h3>
                    <p className="aliados-beneficios__card-texto">
                      Nuestros aliados nos mantienen a la vanguardia en tecnología y soluciones
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="aliados-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="aliados-cta__title">¿Quieres Ser Nuestro Aliado?</h2>
              <p className="aliados-cta__text">
                Si tu empresa comparte nuestros valores y quieres formar parte de nuestra red de aliados estratégicos,
                nos encantaría conocerte.
              </p>
              <Link to="/contacto" className="aliados-cta__button">
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
