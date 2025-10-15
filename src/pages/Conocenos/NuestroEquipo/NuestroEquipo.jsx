import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SEO, seoConfig } from '../../../components/SEO';
import './NuestroEquipo.scss';

// Image URLs from Figma
const FIGMA_IMAGES = {
  edith: 'https://www.figma.com/api/mcp/asset/9a68a466-fadf-4e7f-a4ee-ccf192907a21',
  alejandra: 'https://www.figma.com/api/mcp/asset/aa7b8cb4-947c-4f0a-ab0c-1b4da38a35e3',
  arturo: 'https://www.figma.com/api/mcp/asset/8932d24e-9c72-4cff-ab42-dbacaebaaddc',
  hugo: 'https://www.figma.com/api/mcp/asset/7d6c3697-593f-4329-ae74-dbf13ccea674',
  jesus: 'https://www.figma.com/api/mcp/asset/88f41882-10c0-44b6-ba77-3de5e30074b0',
  selene: 'https://www.figma.com/api/mcp/asset/9ef2744e-11dd-4370-8d72-f3cc2a7207cb',
  operativo: 'https://www.figma.com/api/mcp/asset/d099067e-1da3-430b-a1fa-6da8db02cffe'
};

const NuestroEquipo = () => {
  const equipoDirectivo = [
    {
      id: 'edith',
      nombre: 'Edith Ramirez',
      cargo: 'Recursos, Facturación y Cobranza',
      email: 'edith@creativosespacios.mx',
      descripcion: 'Experta en recursos, facturación y cobranza',
      imagen: FIGMA_IMAGES.edith
    },
    {
      id: 'alejandra',
      nombre: 'Alejandra Ramírez',
      cargo: 'Atención al Cliente y Marketing',
      email: 'alejandra@creativosespacios.mx',
      descripcion: 'Experta en atención al cliente, logistica y marketing',
      imagen: FIGMA_IMAGES.alejandra
    },
    {
      id: 'arturo',
      nombre: 'Arturo Ramirez',
      cargo: 'Proyectos y Arquitectura',
      email: 'arturo@creativosespacios.mx',
      descripcion: 'Experto en proyectos y arquitectura',
      imagen: FIGMA_IMAGES.arturo
    }
  ];

  const equipoProyectos = [
    {
      id: 'hugo',
      nombre: 'Hugo Estrada',
      cargo: 'Gestor de Proyectos',
      email: 'hugo@creativosespacios.mx',
      descripcion: 'Proyectos',
      imagen: FIGMA_IMAGES.hugo
    },
    {
      id: 'jesus',
      nombre: 'Jesus Mondragon',
      cargo: 'Asesor de Proyectos',
      email: 'jesus@creativosespacios.mx',
      descripcion: 'Proyectos',
      imagen: FIGMA_IMAGES.jesus
    },
    {
      id: 'selene',
      nombre: 'Selene',
      cargo: 'Ventas y Atención al Cliente',
      email: 'ventas@creativosespacios.mx',
      descripcion: 'ventas@creativosespacios.mx',
      imagen: FIGMA_IMAGES.selene
    }
  ];

  return (
    <div className="nuestro-equipo-page">
      <SEO {...seoConfig.nuestroEquipo} />

      {/* Hero Section */}
      <section className="equipo-hero">
        <Container>
          <h1 className="equipo-hero__title">Nuestro equipo</h1>
          <div className="equipo-hero__description">
            <p>
              En Creativos Espacios contamos con un equipo de profesionales dedicados y altamente capacitados,
              comprometidos con hacer realidad cada proyecto. Nuestro personal incluye arquitectos, diseñadores,
              operadores y especialistas en maniobras que comparten una pasión por la excelencia y un compromiso
              con el medio ambiente.
            </p>
            <p>
              Cada miembro de nuestro equipo destaca por su experiencia, creatividad y atención al detalle. Nos
              esforzamos por mantener una comunicación cercana y amigable, para que conozcas a quienes harán de
              tus ideas una realidad. Con cada proyecto, garantizamos soluciones innovadoras, prácticas y
              sostenibles, siempre con la calidez y profesionalismo que caracterizan a nuestro equipo.
            </p>
            <p>
              En Creativos Espacios, nuestro personal es tu mejor aliado para transformar espacios y hacer de
              cada proyecto una experiencia única y satisfactoria.
            </p>
          </div>
        </Container>
      </section>

      {/* Equipo Directivo */}
      <section className="equipo-section">
        <Container>
          <Row className="g-5">
            {equipoDirectivo.map((miembro) => (
              <Col lg={4} md={6} key={miembro.id}>
                <div className="equipo-card">
                  <div className="equipo-card__image">
                    <img
                      src={miembro.imagen}
                      alt={miembro.nombre}
                      className="equipo-card__img"
                      loading="lazy"
                    />
                  </div>
                  <div className="equipo-card__divider"></div>
                  <div className="equipo-card__content">
                    <h3 className="equipo-card__name">{miembro.nombre}</h3>
                    <p className="equipo-card__email">{miembro.email}</p>
                    <p className="equipo-card__description">{miembro.descripcion}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Equipo de Proyectos */}
      <section className="equipo-section">
        <Container>
          <Row className="g-5">
            {equipoProyectos.map((miembro) => (
              <Col lg={4} md={6} key={miembro.id}>
                <div className="equipo-card">
                  <div className="equipo-card__image">
                    <img
                      src={miembro.imagen}
                      alt={miembro.nombre}
                      className="equipo-card__img"
                      loading="lazy"
                    />
                  </div>
                  <div className="equipo-card__divider"></div>
                  <div className="equipo-card__content">
                    <h3 className="equipo-card__name">{miembro.nombre}</h3>
                    <p className="equipo-card__email">{miembro.email}</p>
                    <p className="equipo-card__description">{miembro.descripcion}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Equipo Operativo */}
      <section className="equipo-operativo">
        <Container>
          <Row className="align-items-center">
            <Col lg={4}>
              <div className="equipo-operativo__image">
                <img
                  src={FIGMA_IMAGES.operativo}
                  alt="Personal de confianza"
                  className="equipo-operativo__img"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className="equipo-operativo__content">
                <h3 className="equipo-operativo__name">Personal de confianza</h3>
                <p className="equipo-operativo__email">proyectos@creativosespacios.mx</p>
                <p className="equipo-operativo__description">
                  Profesionales talentosos en sus respectivas áreas
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NuestroEquipo;
