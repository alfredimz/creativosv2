import React from 'react';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FichasTecnicas.scss';

const FichasTecnicas = () => {
  const usdToMxn = 20.81;

  const fichasTecnicas = [
    {
      nombre: 'Dry - Van 10\' ST',
      imagen: '/images/contenedores/dry-10.jpg',
      specs: {
        largoExterno: '3,029mm',
        largoInterno: '2,949mm',
        capacidad: '16,40m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,345mm',
        pesoVacio: '1,145kg',
        alturaExterna: '2,591mm',
        alturaInterna: '2,400mm',
        pesoMaximo: '15,240kg'
      },
      precioUnitarioMXN: '$58,268',
      precioUnitarioUSD: '$2,800',
      cantidad: 4,
      precioTotalMXN: '$233,072'
    },
    {
      nombre: 'Dry - Van 20\' ST',
      imagen: '/images/contenedores/dry-20.jpg',
      specs: {
        largoExterno: '6,058mm',
        largoInterno: '5,900mm',
        capacidad: '33,30m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,345mm',
        pesoVacio: '2,250kg',
        alturaExterna: '2,591mm',
        alturaInterna: '2,400mm',
        pesoMaximo: '28,240kg'
      },
      precioUnitarioMXN: '$79,078',
      precioUnitarioUSD: '$3,800',
      cantidad: 2,
      precioTotalMXN: '$158,156'
    },
    {
      nombre: 'Dry - Van 40\' ST',
      imagen: '/images/contenedores/dry-40.jpg',
      specs: {
        largoExterno: '12,192mm',
        largoInterno: '12,030mm',
        capacidad: '67,70m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,345mm',
        pesoVacio: '3,630kg',
        alturaExterna: '2,591mm',
        alturaInterna: '2,400mm',
        pesoMaximo: '26,850kg'
      },
      precioUnitarioMXN: '$58,268',
      precioUnitarioUSD: '$2,800',
      cantidad: 1,
      precioTotalMXN: '$58,268'
    },
    {
      nombre: 'Dry - Van 40\' ST High Cube',
      imagen: '/images/contenedores/hc-40.jpg',
      specs: {
        largoExterno: '12,192mm',
        largoInterno: '12,030mm',
        capacidad: '76,50m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,350mm',
        pesoVacio: '3,800kg',
        alturaExterna: '2,896mm',
        alturaInterna: '2,710mm',
        pesoMaximo: '26,850kg'
      },
      precioUnitarioMXN: '$104,050',
      precioUnitarioUSD: '$5,000',
      cantidad: 10,
      precioTotalMXN: '$1,040,500'
    },
    {
      nombre: 'Reefer 20\' ST',
      imagen: '/images/contenedores/reefer-20.jpg',
      specs: {
        largoExterno: '6,058mm',
        largoInterno: '5,500mm',
        capacidad: '28,30m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,285mm',
        pesoVacio: '3,400kg',
        alturaExterna: '2,591mm',
        alturaInterna: '2,255mm',
        pesoMaximo: '27,280kg'
      },
      precioUnitarioMXN: '$39,539',
      precioUnitarioUSD: '$1,900',
      cantidad: 5,
      precioTotalMXN: '$197,695'
    },
    {
      nombre: 'Reefer 40\' ST',
      imagen: '/images/contenedores/reefer-40.jpg',
      specs: {
        largoExterno: '12,192mm',
        largoInterno: '11,575mm',
        capacidad: '58,70m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,285mm',
        pesoVacio: '4,500kg',
        alturaExterna: '2,591mm',
        alturaInterna: '2,250mm',
        pesoMaximo: '30,400kg'
      },
      precioUnitarioMXN: '$74,916',
      precioUnitarioUSD: '$3,600',
      cantidad: 4,
      precioTotalMXN: '$299,664'
    },
    {
      nombre: 'Open Top 20\' ST',
      imagen: '/images/contenedores/opentop-20.jpg',
      specs: {
        largoExterno: '6,058mm',
        largoInterno: '5,900mm',
        capacidad: '33,30m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,345mm',
        pesoVacio: '2,250kg',
        alturaExterna: '2,591mm',
        alturaInterna: '2,400mm',
        pesoMaximo: '28,240kg'
      },
      precioUnitarioMXN: '$49,944',
      precioUnitarioUSD: '$2,400',
      cantidad: 2,
      precioTotalMXN: '$99,888'
    },
    {
      nombre: 'Open Top 40\' ST',
      imagen: '/images/contenedores/opentop-40.jpg',
      specs: {
        largoExterno: '12,192mm',
        largoInterno: '12,030mm',
        capacidad: '67,70m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,345mm',
        pesoVacio: '3,630kg',
        alturaExterna: '2,591mm',
        alturaInterna: '2,400mm',
        pesoMaximo: '26,850kg'
      },
      precioUnitarioMXN: '$37,458',
      precioUnitarioUSD: '$1,800',
      cantidad: 3,
      precioTotalMXN: '$112,374'
    },
    {
      nombre: 'Double Door 20\' ST',
      imagen: '/images/contenedores/doubledoor-20.jpg',
      specs: {
        largoExterno: '6,058mm',
        largoInterno: '5,900mm',
        capacidad: '33,30m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,345mm',
        pesoVacio: '2,250kg',
        alturaExterna: '2,591mm',
        alturaInterna: '2,400mm',
        pesoMaximo: '28,240kg'
      },
      precioUnitarioMXN: '$79,078',
      precioUnitarioUSD: '$3,800',
      cantidad: 2,
      precioTotalMXN: '$158,156'
    },
    {
      nombre: 'Double Door 40\' ST',
      imagen: '/images/contenedores/doubledoor-40.jpg',
      specs: {
        largoExterno: '12,192mm',
        largoInterno: '12,030mm',
        capacidad: '67,70m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,345mm',
        pesoVacio: '3,630kg',
        alturaExterna: '2,591mm',
        alturaInterna: '2,400mm',
        pesoMaximo: '26,850kg'
      },
      precioUnitarioMXN: '$39,539',
      precioUnitarioUSD: '$1,900',
      cantidad: 7,
      precioTotalMXN: '$276,773'
    },
    {
      nombre: 'Open Side 20\' ST',
      imagen: '/images/contenedores/openside-20.jpg',
      specs: {
        largoExterno: '6,058mm',
        largoInterno: '5,900mm',
        capacidad: '33,30m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,345mm',
        pesoVacio: '2,250kg',
        alturaExterna: '2,591mm',
        alturaInterna: '2,400mm',
        pesoMaximo: '28,240kg'
      },
      precioUnitarioMXN: '$79,078',
      precioUnitarioUSD: '$3,800',
      cantidad: 2,
      precioTotalMXN: '$158,156'
    },
    {
      nombre: 'Open Side 40\' ST',
      imagen: '/images/contenedores/openside-40.jpg',
      specs: {
        largoExterno: '12,192mm',
        largoInterno: '12,030mm',
        capacidad: '67,70m³',
        anchoExterno: '2,438mm',
        anchoInterno: '2,345mm',
        pesoVacio: '3,630kg',
        alturaExterna: '2,591mm',
        alturaInterna: '2,400mm',
        pesoMaximo: '26,850kg'
      },
      precioUnitarioMXN: '$58,268',
      precioUnitarioUSD: '$2,800',
      cantidad: 6,
      precioTotalMXN: '$349,608'
    }
  ];

  return (
    <div className="fichas-tecnicas">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Fichas Técnicas</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="fichas-tecnicas__hero py-4">
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1 className="fichas-tecnicas__titulo">Ficha técnica</h1>
            </Col>
            <Col xs="auto">
              <div className="exchange-rate">
                <span>1 USD ≠ ${usdToMxn} MXN</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Fichas Técnicas List */}
      <section className="fichas-tecnicas__contenido py-5">
        <Container>
          {fichasTecnicas.map((ficha, index) => (
            <Card key={index} className="ficha-card mb-4 border-0 shadow-sm">
              <Card.Body>
                <Row className="align-items-center">
                  {/* Imagen */}
                  <Col md={2} className="text-center mb-3 mb-md-0">
                    <div className="ficha-card__imagen">
                      <img src={ficha.imagen} alt={ficha.nombre} className="img-fluid" />
                    </div>
                  </Col>

                  {/* Nombre */}
                  <Col md={2} className="mb-3 mb-md-0">
                    <h5 className="ficha-card__nombre">{ficha.nombre}</h5>
                  </Col>

                  {/* Especificaciones */}
                  <Col md={5} className="mb-3 mb-md-0">
                    <Row className="specs-grid">
                      <Col xs={4} className="spec-item">
                        <small>Largo externo</small>
                        <strong>{ficha.specs.largoExterno}</strong>
                      </Col>
                      <Col xs={4} className="spec-item">
                        <small>Largo interno</small>
                        <strong>{ficha.specs.largoInterno}</strong>
                      </Col>
                      <Col xs={4} className="spec-item">
                        <small>Capacidad</small>
                        <strong>{ficha.specs.capacidad}</strong>
                      </Col>
                      <Col xs={4} className="spec-item">
                        <small>Ancho externo</small>
                        <strong>{ficha.specs.anchoExterno}</strong>
                      </Col>
                      <Col xs={4} className="spec-item">
                        <small>Ancho interno</small>
                        <strong>{ficha.specs.anchoInterno}</strong>
                      </Col>
                      <Col xs={4} className="spec-item">
                        <small>Peso Vacío</small>
                        <strong>{ficha.specs.pesoVacio}</strong>
                      </Col>
                      <Col xs={4} className="spec-item">
                        <small>Altura externa</small>
                        <strong>{ficha.specs.alturaExterna}</strong>
                      </Col>
                      <Col xs={4} className="spec-item">
                        <small>Altura interna</small>
                        <strong>{ficha.specs.alturaInterna}</strong>
                      </Col>
                      <Col xs={4} className="spec-item">
                        <small>Máximo peso</small>
                        <strong>{ficha.specs.pesoMaximo}</strong>
                      </Col>
                    </Row>
                  </Col>

                  {/* Precios */}
                  <Col md={3}>
                    <div className="pricing-info">
                      <div className="price-item">
                        <small>Precio unitario (MXN)</small>
                        <strong className="text-primary">{ficha.precioUnitarioMXN}</strong>
                      </div>
                      <div className="price-item">
                        <small>Precio unitario (USD)</small>
                        <strong>{ficha.precioUnitarioUSD}</strong>
                      </div>
                      <div className="price-item">
                        <small>Cantidad</small>
                        <strong>{ficha.cantidad}</strong>
                      </div>
                      <div className="price-item total">
                        <small>Precio total (MXN)</small>
                        <strong className="text-success">{ficha.precioTotalMXN}</strong>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </section>

      {/* CTA Section */}
      <section className="fichas-tecnicas__cta py-5 bg-light text-center">
        <Container>
          <h3 className="mb-3">¿Necesitas más información?</h3>
          <p className="lead mb-4">Contáctanos para obtener especificaciones personalizadas</p>
          <Link to="/contacto" className="btn btn-primary btn-lg">
            Solicitar Cotización
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default FichasTecnicas;
