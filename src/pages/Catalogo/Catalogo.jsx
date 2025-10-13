import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Catalogo.scss';

/**
 * @component Catalogo
 * @description Catálogo general de productos y contenedores
 * @phase Fase 1 - Sprint 1
 * @status Maquetado completo - Pendiente de contenido por Gemini
 */
const Catalogo = () => {
  const [vistaActiva, setVistaActiva] = useState('grid');
  const [ordenamiento, setOrdenamiento] = useState('destacados');

  const productos = [
    { id: 1, nombre: 'Contenedor 20 pies Estándar', tipo: 'Estándar', precio: 'Desde $2,500', medidas: '20x8x8.6 pies', disponibilidad: 'En stock' },
    { id: 2, nombre: 'Contenedor 40 pies High Cube', tipo: 'High Cube', precio: 'Desde $3,800', medidas: '40x8x9.6 pies', disponibilidad: 'En stock' },
    { id: 3, nombre: 'Contenedor Refrigerado 20 pies', tipo: 'Reefer', precio: 'Desde $6,500', medidas: '20x8x8.6 pies', disponibilidad: 'Limitado' },
    { id: 4, nombre: 'Contenedor Open Top 40 pies', tipo: 'Open Top', precio: 'Desde $4,200', medidas: '40x8x8.6 pies', disponibilidad: 'En stock' },
    { id: 5, nombre: 'Contenedor Flat Rack 20 pies', tipo: 'Flat Rack', precio: 'Desde $3,200', medidas: '20x8x8.6 pies', disponibilidad: 'Bajo pedido' },
    { id: 6, nombre: 'Contenedor 40 pies Estándar', tipo: 'Estándar', precio: 'Desde $3,200', medidas: '40x8x8.6 pies', disponibilidad: 'En stock' },
    { id: 7, nombre: 'Contenedor Tanque 20 pies', tipo: 'Tanque', precio: 'Desde $7,500', medidas: '20x8x8.6 pies', disponibilidad: 'Bajo pedido' },
    { id: 8, nombre: 'Contenedor Modificado Oficina', tipo: 'Modificado', precio: 'Desde $8,500', medidas: '20x8x8.6 pies', disponibilidad: 'Bajo pedido' },
  ];

  return (
    <div className="catalogo-page">
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Catálogo General</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="catalogo-page__banner">
        <div className="catalogo-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="catalogo-page__banner-title">Catálogo de Contenedores</h1>
                <p className="catalogo-page__banner-subtitle">
                  Explora nuestra amplia gama de contenedores marítimos para venta y renta
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="catalogo-page__filtros">
        <Container>
          <Row className="align-items-center mb-4">
            <Col md={6}>
              <Form.Select value={ordenamiento} onChange={(e) => setOrdenamiento(e.target.value)}>
                <option value="destacados">Más Destacados</option>
                <option value="precio-asc">Precio: Menor a Mayor</option>
                <option value="precio-desc">Precio: Mayor a Menor</option>
                <option value="nombre">Nombre A-Z</option>
              </Form.Select>
            </Col>
            <Col md={6} className="text-end">
              <div className="catalogo-page__vista-buttons">
                <Button
                  variant={vistaActiva === 'grid' ? 'primary' : 'outline-primary'}
                  onClick={() => setVistaActiva('grid')}
                >
                  ⊞ Grid
                </Button>
                <Button
                  variant={vistaActiva === 'lista' ? 'primary' : 'outline-primary'}
                  onClick={() => setVistaActiva('lista')}
                  className="ms-2"
                >
                  ☰ Lista
                </Button>
              </div>
            </Col>
          </Row>

          <Row>
            {productos.map((producto) => (
              <Col key={producto.id} lg={vistaActiva === 'grid' ? 3 : 12} md={vistaActiva === 'grid' ? 4 : 12} sm={vistaActiva === 'grid' ? 6 : 12} className="mb-4">
                <Card className={`catalogo-page__card ${vistaActiva === 'lista' ? 'catalogo-page__card--lista' : ''}`}>
                  <div className="catalogo-page__card-imagen">
                    <div className="catalogo-page__card-placeholder">Imagen del Producto</div>
                    <span className="catalogo-page__card-badge">{producto.disponibilidad}</span>
                  </div>
                  <Card.Body>
                    <div className="catalogo-page__card-tipo">{producto.tipo}</div>
                    <Card.Title className="catalogo-page__card-title">{producto.nombre}</Card.Title>
                    <div className="catalogo-page__card-info">
                      <div className="catalogo-page__card-medidas">📏 {producto.medidas}</div>
                      <div className="catalogo-page__card-precio">{producto.precio}</div>
                    </div>
                    <div className="catalogo-page__card-actions">
                      <Button variant="primary" className="w-100 mb-2">Ver Detalles</Button>
                      <Button variant="outline-secondary" className="w-100">Solicitar Cotización</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="catalogo-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="catalogo-page__cta-title">¿No Encuentras lo que Buscas?</h2>
              <p className="catalogo-page__cta-text">
                Contamos con soluciones personalizadas. Contáctanos para asesoría especializada.
              </p>
              <Link to="/contacto" className="catalogo-page__cta-button">Contactar Asesor</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Catalogo;
