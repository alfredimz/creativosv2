import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TiposContenedores.scss';

const TiposContenedores = () => {
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const contenedores = [
    {
      id: 'dry-10',
      nombre: 'Contenedor marítimo Dry 10"',
      tipo: 'STD',
      tamaño: '10',
      imagen: 'dry-10.jpg',
      color: '#7CC5D8',
      slug: 'dry-10'
    },
    {
      id: 'dry-20',
      nombre: 'Contenedor marítimo Dry 20"',
      tipo: 'STD',
      tamaño: '20',
      imagen: 'dry-20.jpg',
      color: '#7CC5D8',
      slug: 'dry-20'
    },
    {
      id: 'dry-40',
      nombre: 'Contenedor marítimo Dry 40"',
      tipo: 'STD',
      tamaño: '40',
      imagen: 'dry-40.jpg',
      color: '#7CC5D8',
      slug: 'dry-40'
    },
    {
      id: 'hc-40',
      nombre: 'Contenedor marítimo High Cube 40"',
      tipo: 'HC',
      tamaño: '40',
      imagen: 'hc-40.jpg',
      color: '#F4A261',
      slug: 'high-cube-40'
    },
    {
      id: 'reefer-20',
      nombre: 'Contenedor marítimo Reefer 20"',
      tipo: 'Reefer',
      tamaño: '20',
      imagen: 'reefer-20.jpg',
      color: '#D4D19C',
      slug: 'reefer-20'
    },
    {
      id: 'reefer-40',
      nombre: 'Contenedor marítimo Reefer 40"',
      tipo: 'Reefer',
      tamaño: '40',
      imagen: 'reefer-40.jpg',
      color: '#D4D19C',
      slug: 'reefer-40'
    },
    {
      id: 'opentop-20',
      nombre: 'Contenedor marítimo Open Top 20"',
      tipo: 'Open Top',
      tamaño: '20',
      imagen: 'opentop-20.jpg',
      color: '#6B8E7F',
      slug: 'open-top-20'
    },
    {
      id: 'opentop-40',
      nombre: 'Contenedor marítimo Open Top 40"',
      tipo: 'Open Top',
      tamaño: '40',
      imagen: 'opentop-40.jpg',
      color: '#6B8E7F',
      slug: 'open-top-40'
    },
    {
      id: 'doubledoor-20',
      nombre: 'Contenedor marítimo Double Door 20"',
      tipo: 'Double door',
      tamaño: '20',
      imagen: 'doubledoor-20.jpg',
      color: '#C89B88',
      slug: 'double-door-20'
    },
    {
      id: 'doubledoor-40',
      nombre: 'Contenedor marítimo Double Door 40"',
      tipo: 'Double door',
      tamaño: '40',
      imagen: 'doubledoor-40.jpg',
      color: '#C89B88',
      slug: 'double-door-40'
    },
    {
      id: 'openside-20',
      nombre: 'Contenedor marítimo Open Side 20"',
      tipo: 'Open Side',
      tamaño: '20',
      imagen: 'openside-20.jpg',
      color: '#7CC5D8',
      slug: 'open-side-20'
    },
    {
      id: 'openside-40',
      nombre: 'Contenedor marítimo Open Side 40"',
      tipo: 'Open Side',
      tamaño: '40',
      imagen: 'openside-40.jpg',
      color: '#7CC5D8',
      slug: 'open-side-40'
    }
  ];

  const filteredContenedores = contenedores.filter(contenedor => {
    const sizeMatch = selectedSize === 'all' || contenedor.tamaño === selectedSize;
    const typeMatch = selectedType === 'all' || contenedor.tipo === selectedType;
    return sizeMatch && typeMatch;
  });

  return (
    <div className="tipos-contenedores">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Contenedores</Breadcrumb.Item>
          <Breadcrumb.Item active>Tipos de Contenedores</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="tipos-contenedores__hero">
        <Container>
          <Row>
            <Col>
              <h1 className="tipos-contenedores__titulo">Bienvenido a nuestros tipos de contenedores</h1>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Principal con Filtros */}
      <section className="tipos-contenedores__contenido py-5">
        <Container>
          <Row>
            {/* Sidebar de Filtros */}
            <Col lg={3} className="mb-4 mb-lg-0">
              <div className="tipos-contenedores__filtros">
                <h5 className="mb-4">Tipo de contenedor</h5>

                {/* Filtro por Tamaño */}
                <div className="filtro-grupo mb-4">
                  <h6 className="filtro-titulo">Tamaño</h6>
                  <Form.Check
                    type="checkbox"
                    id="size-10"
                    label='10"'
                    checked={selectedSize === '10'}
                    onChange={() => setSelectedSize(selectedSize === '10' ? 'all' : '10')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="size-20"
                    label='20"'
                    checked={selectedSize === '20'}
                    onChange={() => setSelectedSize(selectedSize === '20' ? 'all' : '20')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="size-40"
                    label='40"'
                    checked={selectedSize === '40'}
                    onChange={() => setSelectedSize(selectedSize === '40' ? 'all' : '40')}
                  />
                </div>

                {/* Filtro por Tipo */}
                <div className="filtro-grupo">
                  <h6 className="filtro-titulo">Tipo</h6>
                  <Form.Check
                    type="checkbox"
                    id="type-std"
                    label="STD"
                    checked={selectedType === 'STD'}
                    onChange={() => setSelectedType(selectedType === 'STD' ? 'all' : 'STD')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="type-hc"
                    label="HC"
                    checked={selectedType === 'HC'}
                    onChange={() => setSelectedType(selectedType === 'HC' ? 'all' : 'HC')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="type-reefer"
                    label="Reefer"
                    checked={selectedType === 'Reefer'}
                    onChange={() => setSelectedType(selectedType === 'Reefer' ? 'all' : 'Reefer')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="type-flatrack"
                    label="Flat Rack"
                    checked={selectedType === 'Flat Rack'}
                    onChange={() => setSelectedType(selectedType === 'Flat Rack' ? 'all' : 'Flat Rack')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="type-opentop"
                    label="Open Top"
                    checked={selectedType === 'Open Top'}
                    onChange={() => setSelectedType(selectedType === 'Open Top' ? 'all' : 'Open Top')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="type-openside"
                    label="Open Side"
                    checked={selectedType === 'Open Side'}
                    onChange={() => setSelectedType(selectedType === 'Open Side' ? 'all' : 'Open Side')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="type-doubledoor"
                    label="Double door"
                    checked={selectedType === 'Double door'}
                    onChange={() => setSelectedType(selectedType === 'Double door' ? 'all' : 'Double door')}
                  />
                </div>
              </div>
            </Col>

            {/* Grid de Contenedores */}
            <Col lg={9}>
              <Row>
                {filteredContenedores.map((contenedor) => (
                  <Col md={6} lg={4} key={contenedor.id} className="mb-4">
                    <Link to={`/tipos-contenedores/${contenedor.slug}`} className="contenedor-link">
                      <Card
                        className="contenedor-card h-100 border-0 shadow-sm"
                        style={{ backgroundColor: contenedor.color }}
                      >
                        <div className="contenedor-card__image-wrapper">
                          <Card.Img
                            variant="top"
                            src={`/images/contenedores/${contenedor.imagen}`}
                            alt={contenedor.nombre}
                            className="contenedor-card__image"
                          />
                        </div>
                        <Card.Body className="text-center">
                          <Card.Title className="contenedor-card__title">
                            {contenedor.nombre}
                          </Card.Title>
                          <div className="contenedor-card__icon">
                            <span className="icon-plus">+</span>
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))}
              </Row>

              {filteredContenedores.length === 0 && (
                <div className="text-center py-5">
                  <p className="text-muted">No se encontraron contenedores con los filtros seleccionados</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default TiposContenedores;
