import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { ContainerCard } from '../../components/common';
import './TiposContenedores.scss';

// Image URLs from Figma
const FIGMA_IMAGES = {
  dry10: 'https://www.figma.com/api/mcp/asset/0496165f-1602-48fa-8946-9832324a871f',
  dry20: 'https://www.figma.com/api/mcp/asset/8d490df4-1933-4cb4-96c8-232771f9b6bf',
  dry40: 'https://www.figma.com/api/mcp/asset/633003df-86a6-4ddd-89be-15f8dd8bf61e',
  hc40: 'https://www.figma.com/api/mcp/asset/633003df-86a6-4ddd-89be-15f8dd8bf61e',
  reefer20: 'https://www.figma.com/api/mcp/asset/5e80401b-b72e-4c86-ac8c-f6a24952e509',
  reefer40: 'https://www.figma.com/api/mcp/asset/13b7118c-1fd3-4360-9a6b-2624a08e3831',
  openTop20: 'https://www.figma.com/api/mcp/asset/1e137601-da6a-467a-b383-c4059070fd7d',
  openTop40: 'https://www.figma.com/api/mcp/asset/329a0c8c-9b09-4855-8e68-45050adc69fd',
  doubleDoor20: 'https://www.figma.com/api/mcp/asset/8b0c53e1-abf1-4a75-8d46-1a2428456808',
  doubleDoor40: 'https://www.figma.com/api/mcp/asset/8b0c53e1-abf1-4a75-8d46-1a2428456808',
  openSide20: 'https://www.figma.com/api/mcp/asset/9434382b-5054-481e-891e-35ed1da9026d',
  openSide40: 'https://www.figma.com/api/mcp/asset/9434382b-5054-481e-891e-35ed1da9026d'
};

const TiposContenedores = () => {
  const [filters, setFilters] = useState({
    size10: false,
    size20: false,
    size40: false,
    typeSTD: false,
    typeHC: false,
    typeReefer: false,
    typeFlatRack: false,
    typeOpenTop: false,
    typeOpenSide: false,
    typeDoubleDoor: false
  });

  const contenedores = [
    {
      id: 'dry-10',
      title: 'Contenedor marítimo Dry 10"',
      tipo: 'STD',
      size: '10',
      image: FIGMA_IMAGES.dry10,
      backgroundColor: '#65bdd8',
      link: '/tipos-contenedores/dry-10'
    },
    {
      id: 'dry-20',
      title: 'Contenedor marítimo Dry 20"',
      tipo: 'STD',
      size: '20',
      image: FIGMA_IMAGES.dry20,
      backgroundColor: '#65bdd8',
      link: '/tipos-contenedores/dry-20'
    },
    {
      id: 'dry-40',
      title: 'Contenedor marítimo Dry 40"',
      tipo: 'STD',
      size: '40',
      image: FIGMA_IMAGES.dry40,
      backgroundColor: '#65bdd8',
      link: '/tipos-contenedores/dry-40'
    },
    {
      id: 'hc-40',
      title: 'Contenedor marítimo Hight Cube 40"',
      tipo: 'HC',
      size: '40',
      image: FIGMA_IMAGES.hc40,
      backgroundColor: '#fea664',
      link: '/tipos-contenedores/high-cube-40'
    },
    {
      id: 'reefer-20',
      title: 'Contenedor marítimo Reefer 20"',
      tipo: 'Reefer',
      size: '20',
      image: FIGMA_IMAGES.reefer20,
      backgroundColor: '#dfd49c',
      link: '/tipos-contenedores/reefer-20'
    },
    {
      id: 'reefer-40',
      title: 'Contenedor marítimo Reefer 40"',
      tipo: 'Reefer',
      size: '40',
      image: FIGMA_IMAGES.reefer40,
      backgroundColor: '#dfd49c',
      link: '/tipos-contenedores/reefer-40'
    },
    {
      id: 'opentop-20',
      title: 'Contenedor marítimo Open Top 20"',
      tipo: 'Open Top',
      size: '20',
      image: FIGMA_IMAGES.openTop20,
      backgroundColor: '#5b8174',
      link: '/tipos-contenedores/open-top-20'
    },
    {
      id: 'opentop-40',
      title: 'Contenedor marítimo Open Top 40"',
      tipo: 'Open Top',
      size: '40',
      image: FIGMA_IMAGES.openTop40,
      backgroundColor: '#5b8174',
      link: '/tipos-contenedores/open-top-40'
    },
    {
      id: 'doubledoor-20',
      title: 'Contenedor marítimo Double Door 20"',
      tipo: 'Double door',
      size: '20',
      image: FIGMA_IMAGES.doubleDoor20,
      backgroundColor: '#c27765',
      link: '/tipos-contenedores/double-door-20'
    },
    {
      id: 'doubledoor-40',
      title: 'Contenedor marítimo Double Door 40"',
      tipo: 'Double door',
      size: '40',
      image: FIGMA_IMAGES.doubleDoor40,
      backgroundColor: '#c27765',
      link: '/tipos-contenedores/double-door-40'
    },
    {
      id: 'openside-20',
      title: 'Contenedor marítimo Open Side 20"',
      tipo: 'Open Side',
      size: '20',
      image: FIGMA_IMAGES.openSide20,
      backgroundColor: '#9ccfdf',
      link: '/tipos-contenedores/open-side-20'
    },
    {
      id: 'openside-40',
      title: 'Contenedor marítimo Open Side 40"',
      tipo: 'Open Side',
      size: '40',
      image: FIGMA_IMAGES.openSide40,
      backgroundColor: '#9ccfdf',
      link: '/tipos-contenedores/open-side-40'
    }
  ];

  const handleFilterChange = (filterName) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const filteredContenedores = contenedores.filter(cont => {
    const hasFilters = Object.values(filters).some(v => v);
    if (!hasFilters) return true;

    const sizeMatch = (filters.size10 && cont.size === '10') ||
                      (filters.size20 && cont.size === '20') ||
                      (filters.size40 && cont.size === '40') ||
                      (!filters.size10 && !filters.size20 && !filters.size40);

    const typeMatch = (filters.typeSTD && cont.tipo === 'STD') ||
                      (filters.typeHC && cont.tipo === 'HC') ||
                      (filters.typeReefer && cont.tipo === 'Reefer') ||
                      (filters.typeOpenTop && cont.tipo === 'Open Top') ||
                      (filters.typeOpenSide && cont.tipo === 'Open Side') ||
                      (filters.typeDoubleDoor && cont.tipo === 'Double door') ||
                      (!filters.typeSTD && !filters.typeHC && !filters.typeReefer &&
                       !filters.typeOpenTop && !filters.typeOpenSide && !filters.typeDoubleDoor);

    return sizeMatch && typeMatch;
  });

  return (
    <div className="tipos-contenedores-page">
      {/* Hero Section */}
      <section className="tipos-hero">
        <Container>
          <h1 className="tipos-hero__title">Bienvenido a nuestros tipos de contenedores</h1>
        </Container>
      </section>

      {/* Main Content */}
      <section className="tipos-content">
        <Container>
          <Row>
            {/* Filters Sidebar */}
            <Col lg={3} className="tipos-filters-col">
              <div className="tipos-filters">
                <h3 className="tipos-filters__title">Tipo de contenedor</h3>

                {/* Size Filters */}
                <div className="tipos-filters__group">
                  <Form.Check
                    type="checkbox"
                    id="filter-10"
                    label='10"'
                    checked={filters.size10}
                    onChange={() => handleFilterChange('size10')}
                    className="tipos-filters__checkbox"
                  />
                  <Form.Check
                    type="checkbox"
                    id="filter-20"
                    label='20"'
                    checked={filters.size20}
                    onChange={() => handleFilterChange('size20')}
                    className="tipos-filters__checkbox"
                  />
                  <Form.Check
                    type="checkbox"
                    id="filter-40"
                    label='40"'
                    checked={filters.size40}
                    onChange={() => handleFilterChange('size40')}
                    className="tipos-filters__checkbox"
                  />
                </div>

                <div className="tipos-filters__separator" />

                {/* Type Filters */}
                <div className="tipos-filters__group">
                  <Form.Check
                    type="checkbox"
                    id="filter-std"
                    label="STD"
                    checked={filters.typeSTD}
                    onChange={() => handleFilterChange('typeSTD')}
                    className="tipos-filters__checkbox"
                  />
                  <Form.Check
                    type="checkbox"
                    id="filter-hc"
                    label="HC"
                    checked={filters.typeHC}
                    onChange={() => handleFilterChange('typeHC')}
                    className="tipos-filters__checkbox"
                  />
                  <Form.Check
                    type="checkbox"
                    id="filter-reefer"
                    label="Reefer"
                    checked={filters.typeReefer}
                    onChange={() => handleFilterChange('typeReefer')}
                    className="tipos-filters__checkbox"
                  />
                  <Form.Check
                    type="checkbox"
                    id="filter-flatrack"
                    label="Flat Rack"
                    checked={filters.typeFlatRack}
                    onChange={() => handleFilterChange('typeFlatRack')}
                    className="tipos-filters__checkbox"
                  />
                  <Form.Check
                    type="checkbox"
                    id="filter-opentop"
                    label="Open Top"
                    checked={filters.typeOpenTop}
                    onChange={() => handleFilterChange('typeOpenTop')}
                    className="tipos-filters__checkbox"
                  />
                  <Form.Check
                    type="checkbox"
                    id="filter-openside"
                    label="Open Side"
                    checked={filters.typeOpenSide}
                    onChange={() => handleFilterChange('typeOpenSide')}
                    className="tipos-filters__checkbox"
                  />
                  <Form.Check
                    type="checkbox"
                    id="filter-doubledoor"
                    label="Double door"
                    checked={filters.typeDoubleDoor}
                    onChange={() => handleFilterChange('typeDoubleDoor')}
                    className="tipos-filters__checkbox"
                  />
                </div>
              </div>
            </Col>

            {/* Containers Grid */}
            <Col lg={9}>
              <div className="tipos-grid">
                {filteredContenedores.map((contenedor) => (
                  <ContainerCard
                    key={contenedor.id}
                    id={contenedor.id}
                    title={contenedor.title}
                    image={contenedor.image}
                    backgroundColor={contenedor.backgroundColor}
                    link={contenedor.link}
                  />
                ))}
              </div>

              {filteredContenedores.length === 0 && (
                <div className="tipos-empty">
                  <p>No se encontraron contenedores con los filtros seleccionados</p>
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
