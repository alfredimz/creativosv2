import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MapaSitio.scss';

const MapaSitio = () => {
  const secciones = [
    {
      titulo: 'Principal',
      enlaces: [
        { nombre: 'Inicio', ruta: '/' }
      ]
    },
    {
      titulo: 'Contenedores',
      enlaces: [
        { nombre: 'Tipos de Contenedores', ruta: '/tipos-contenedores' },
        { nombre: 'Fichas Técnicas', ruta: '/fichas-tecnicas' },
        { nombre: 'Catálogo', ruta: '/catalogo' },
        { nombre: 'Presentación Empresarial', ruta: '/presentacion-empresarial' },
        { nombre: 'Personalizar Contenedor', ruta: '/personalizar-contenedor' }
      ]
    },
    {
      titulo: 'Servicios',
      enlaces: [
        { nombre: 'Servicios', ruta: '/servicios' },
        { nombre: 'Venta de Contenedores', ruta: '/servicios/venta' },
        { nombre: 'Alquiler de Contenedores', ruta: '/servicios/alquiler' },
        { nombre: 'Transformación', ruta: '/servicios/transformacion' },
        { nombre: 'Construcción', ruta: '/construccion' },
        { nombre: 'Servicios Adicionales', ruta: '/servicios-adicionales' }
      ]
    },
    {
      titulo: 'Cotizadores',
      enlaces: [
        { nombre: 'Cotizador de Venta', ruta: '/cotizador-venta' },
        { nombre: 'Cotizador de Renta', ruta: '/cotizador-renta' }
      ]
    },
    {
      titulo: 'Conócenos',
      enlaces: [
        { nombre: 'Quiénes Somos', ruta: '/quienes-somos' },
        { nombre: 'Misión y Visión', ruta: '/mision-vision' },
        { nombre: 'Historia', ruta: '/historia' },
        { nombre: 'Valores', ruta: '/valores' },
        { nombre: 'Nuestro Equipo', ruta: '/nuestro-equipo' },
        { nombre: 'Casos de Éxito', ruta: '/casos-exito' }
      ]
    },
    {
      titulo: 'Clientes',
      enlaces: [
        { nombre: 'Nuestros Clientes', ruta: '/clientes' },
        { nombre: 'Aliados', ruta: '/aliados' },
        { nombre: 'Perfilador del Cliente', ruta: '/perfilador-cliente' }
      ]
    },
    {
      titulo: 'Ubicación',
      enlaces: [
        { nombre: 'Nuestra Ubicación', ruta: '/ubicacion' },
        { nombre: 'Patios de Contenedores', ruta: '/patios-contenedores' }
      ]
    },
    {
      titulo: 'Recursos',
      enlaces: [
        { nombre: 'Blog', ruta: '/blog' },
        { nombre: 'Videos', ruta: '/videos' },
        { nombre: 'Preguntas Frecuentes (FAQ)', ruta: '/faq' },
        { nombre: 'Recorrido Virtual', ruta: '/recorrido-virtual' }
      ]
    },
    {
      titulo: 'Contacto',
      enlaces: [
        { nombre: 'Contacto', ruta: '/contacto' },
        { nombre: 'Quejas y Sugerencias', ruta: '/quejas-sugerencias' },
        { nombre: 'Redes Sociales', ruta: '/redes-sociales' }
      ]
    },
    {
      titulo: 'Legal',
      enlaces: [
        { nombre: 'Aviso de Privacidad', ruta: '/privacidad' },
        { nombre: 'Términos y Condiciones', ruta: '/terminos' },
        { nombre: 'Aviso de Robo de Identidad', ruta: '/robo-identidad' },
        { nombre: 'Mapa del Sitio', ruta: '/mapa-sitio' }
      ]
    },
    {
      titulo: 'Beneficios',
      enlaces: [
        { nombre: 'Beneficios de Comprar', ruta: '/beneficios' }
      ]
    }
  ];

  return (
    <div className="mapa-sitio-page">
      <section className="mapa-sitio-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="mapa-sitio-hero__title">Mapa del Sitio</h1>
              <p className="mapa-sitio-hero__description">
                Encuentra fácilmente todo lo que buscas
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mapa-sitio-content">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <p className="mapa-sitio-content__intro">
                Explora todas las secciones de nuestro sitio web. Encuentra información sobre nuestros productos, servicios, contenedores y mucho más.
              </p>

              <div className="mapa-sitio-content__sections">
                <Row>
                  {secciones.map((seccion, index) => (
                    <Col key={index} md={6} lg={4} className="mb-4">
                      <div className="mapa-sitio-content__section">
                        <h2 className="mapa-sitio-content__section-titulo">{seccion.titulo}</h2>
                        <ul className="mapa-sitio-content__lista">
                          {seccion.enlaces.map((enlace, idx) => (
                            <li key={idx}>
                              <Link to={enlace.ruta}>{enlace.nombre}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mapa-sitio-stats">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <div className="mapa-sitio-stats__item">
                <div className="mapa-sitio-stats__number">42+</div>
                <div className="mapa-sitio-stats__label">Páginas</div>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="mapa-sitio-stats__item">
                <div className="mapa-sitio-stats__number">11</div>
                <div className="mapa-sitio-stats__label">Categorías</div>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="mapa-sitio-stats__item">
                <div className="mapa-sitio-stats__number">100%</div>
                <div className="mapa-sitio-stats__label">Accesible</div>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="mapa-sitio-stats__item">
                <div className="mapa-sitio-stats__number">24/7</div>
                <div className="mapa-sitio-stats__label">Disponible</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mapa-sitio-cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="mapa-sitio-cta__titulo">¿No Encuentras lo que Buscas?</h2>
              <p className="mapa-sitio-cta__texto">
                Contáctanos y con gusto te ayudaremos a encontrar la información que necesitas.
              </p>
              <Link to="/contacto" className="mapa-sitio-cta__button">
                Contactar
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default MapaSitio;
