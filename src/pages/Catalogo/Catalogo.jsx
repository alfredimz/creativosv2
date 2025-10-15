import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SEO, seoConfig } from '../../components/SEO';
import './Catalogo.scss';

const Catalogo = () => {
  const productos = [
    {
      id: 1,
      nombre: 'Contenedor 20 pies Estándar',
      tipo: 'Estándar',
      precio: 'Desde $48,000',
      medidas: '20x8x8.6 pies',
      disponibilidad: 'En stock'
    },
    {
      id: 2,
      nombre: 'Contenedor 40 pies Estándar',
      tipo: 'Estándar',
      precio: 'Desde $75,000',
      medidas: '40x8x8.6 pies',
      disponibilidad: 'En stock'
    },
    {
      id: 3,
      nombre: 'Contenedor 40 pies High Cube',
      tipo: 'High Cube',
      precio: 'Desde $80,000',
      medidas: '40x8x9.6 pies',
      disponibilidad: 'En stock'
    },
    {
      id: 4,
      nombre: 'Contenedor Refrigerado 20 pies',
      tipo: 'Reefer',
      precio: 'Desde $95,000',
      medidas: '20x8x8.6 pies',
      disponibilidad: 'Limitado'
    },
    {
      id: 5,
      nombre: 'Contenedor Refrigerado 40 pies',
      tipo: 'Reefer',
      precio: 'Desde $145,000',
      medidas: '40x8x8.6 pies',
      disponibilidad: 'Limitado'
    },
    {
      id: 6,
      nombre: 'Contenedor Open Top 20 pies',
      tipo: 'Open Top',
      precio: 'Desde $55,000',
      medidas: '20x8x8.6 pies',
      disponibilidad: 'En stock'
    },
    {
      id: 7,
      nombre: 'Contenedor Open Top 40 pies',
      tipo: 'Open Top',
      precio: 'Desde $85,000',
      medidas: '40x8x8.6 pies',
      disponibilidad: 'En stock'
    },
    {
      id: 8,
      nombre: 'Contenedor Double Door 20 pies',
      tipo: 'Double Door',
      precio: 'Desde $52,000',
      medidas: '20x8x8.6 pies',
      disponibilidad: 'En stock'
    },
    {
      id: 9,
      nombre: 'Contenedor Double Door 40 pies',
      tipo: 'Double Door',
      precio: 'Desde $80,000',
      medidas: '40x8x8.6 pies',
      disponibilidad: 'En stock'
    },
    {
      id: 10,
      nombre: 'Contenedor Open Side 20 pies',
      tipo: 'Open Side',
      precio: 'Desde $58,000',
      medidas: '20x8x8.6 pies',
      disponibilidad: 'Bajo pedido'
    },
    {
      id: 11,
      nombre: 'Contenedor Open Side 40 pies',
      tipo: 'Open Side',
      precio: 'Desde $88,000',
      medidas: '40x8x8.6 pies',
      disponibilidad: 'Bajo pedido'
    },
    {
      id: 12,
      nombre: 'Contenedor Flat Rack 20 pies',
      tipo: 'Flat Rack',
      precio: 'Desde $60,000',
      medidas: '20x8x8.6 pies',
      disponibilidad: 'Bajo pedido'
    },
  ];

  return (
    <div className="catalogo-page">
      <SEO {...seoConfig.catalogo} />

      {/* Hero Section */}
      <section className="catalogo-hero">
        <Container>
          <h1 className="catalogo-hero__title">Catálogo de Contenedores</h1>
          <p className="catalogo-hero__description">
            Explora nuestra amplia gama de contenedores marítimos para venta y renta.
            Ofrecemos contenedores estándar, refrigerados, de techo abierto, doble puerta y más,
            todos en excelentes condiciones y listos para entrega en toda la República Mexicana.
          </p>
        </Container>
      </section>

      {/* Products Section */}
      <section className="catalogo-productos">
        <Container>
          <Row>
            {productos.map((producto) => (
              <Col key={producto.id} lg={3} md={4} sm={6} className="mb-4">
                <div className="catalogo-productos__card">
                  <h3 className="catalogo-productos__card-title">{producto.nombre}</h3>
                  <p className="catalogo-productos__card-tipo"><strong>Tipo:</strong> {producto.tipo}</p>
                  <p className="catalogo-productos__card-precio">{producto.precio}</p>
                  <p className="catalogo-productos__card-medidas"><strong>Medidas:</strong> {producto.medidas}</p>
                  <p className="catalogo-productos__card-disponibilidad"><strong>Disponibilidad:</strong> {producto.disponibilidad}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Catalogo;
