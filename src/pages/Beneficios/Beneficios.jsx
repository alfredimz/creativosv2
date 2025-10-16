import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMoneyBillWave, FaBolt, FaTools, FaDumbbell, FaLeaf, FaLock, FaStar } from 'react-icons/fa'; // FASE 4: Reemplazo de emojis
import { SEO, seoConfig } from '../../components/SEO';
import './Beneficios.scss';

const Beneficios = () => {
  const beneficiosPrincipales = [
    {
      icono: <FaMoneyBillWave size={48} color="#3B6F7F" />,
      titulo: 'Economía y Ahorro',
      descripcion: 'Reduce hasta un 40% en costos de construcción comparado con métodos tradicionales.',
      detalles: [
        'Menor inversión inicial',
        'Costos de mantenimiento reducidos',
        'Mayor valor de reventa',
        'Sin gastos de construcción tradicional'
      ]
    },
    {
      icono: <FaBolt size={48} color="#F16700" />,
      titulo: 'Rapidez de Instalación',
      descripcion: 'Tiempos de entrega e instalación de 30-45 días vs 6-12 meses de construcción convencional.',
      detalles: [
        'Listo para usar en semanas',
        'Sin permisos de construcción complejos',
        'Instalación rápida y limpia',
        'Menos interrupciones en tu operación'
      ]
    },
    {
      icono: <FaTools size={48} color="#3B6F7F" />,
      titulo: 'Versatilidad Total',
      descripcion: 'Adaptables a cualquier necesidad: oficinas, viviendas, comercios, bodegas y más.',
      detalles: [
        'Diseños 100% personalizables',
        'Fácil reubicación y expansión',
        'Múltiples configuraciones',
        'Adaptación a cualquier terreno'
      ]
    },
    {
      icono: <FaDumbbell size={48} color="#3B6F7F" />,
      titulo: 'Durabilidad Extrema',
      descripcion: 'Estructura de acero corten resistente a condiciones climáticas extremas.',
      detalles: [
        'Resistencia a huracanes y sismos',
        'Protección contra intemperie',
        'Vida útil de 25+ años',
        'Mínimo mantenimiento requerido'
      ]
    },
    {
      icono: <FaLeaf size={48} color="#2E7D32" />,
      titulo: 'Sustentabilidad',
      descripcion: 'Construcción ecológica mediante el reciclaje de contenedores marítimos.',
      detalles: [
        'Reduce huella de carbono',
        'Reutilización de materiales',
        'Menor generación de residuos',
        'Certificaciones verdes disponibles'
      ]
    },
    {
      icono: <FaLock size={48} color="#3B6F7F" />,
      titulo: 'Seguridad Garantizada',
      descripcion: 'Estructura ultra resistente diseñada originalmente para transporte marítimo.',
      detalles: [
        'Protección contra robo',
        'Resistencia a vandalismo',
        'Cerraduras industriales',
        'Estructura hermética'
      ]
    }
  ];

  const comparativa = {
    contenedores: [
      { aspecto: 'Tiempo de construcción', valor: '30-45 días' },
      { aspecto: 'Costo promedio', valor: '40% menos' },
      { aspecto: 'Vida útil', valor: '25+ años' },
      { aspecto: 'Reubicación', valor: 'Sí, fácilmente' },
      { aspecto: 'Permisos', valor: 'Simplificados' },
      { aspecto: 'Mantenimiento', valor: 'Mínimo' }
    ],
    tradicional: [
      { aspecto: 'Tiempo de construcción', valor: '6-12 meses' },
      { aspecto: 'Costo promedio', valor: 'Base 100%' },
      { aspecto: 'Vida útil', valor: '20-30 años' },
      { aspecto: 'Reubicación', valor: 'No posible' },
      { aspecto: 'Permisos', valor: 'Complejos' },
      { aspecto: 'Mantenimiento', valor: 'Constante' }
    ]
  };

  const casosUso = [
    {
      titulo: 'Oficinas Modulares',
      imagen: 'oficina-beneficio.jpg',
      descripcion: 'Espacios de trabajo profesionales listos en 30 días con todos los servicios incluidos.'
    },
    {
      titulo: 'Viviendas Sustentables',
      imagen: 'casa-beneficio.jpg',
      descripcion: 'Hogares modernos y ecológicos con diseño personalizado y bajo costo.'
    },
    {
      titulo: 'Locales Comerciales',
      imagen: 'comercio-beneficio.jpg',
      descripcion: 'Abre tu negocio rápidamente con inversión reducida y alta rentabilidad.'
    },
    {
      titulo: 'Almacenamiento Seguro',
      imagen: 'bodega-beneficio.jpg',
      descripcion: 'Bodegas resistentes con acceso fácil y protección garantizada 24/7.'
    }
  ];

  return (
    <div className="beneficios-page">
      <SEO {...seoConfig.beneficios} />

      {/* Hero Section */}
      <section className="beneficios-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="beneficios-hero__title">¿Por Qué Elegir Contenedores?</h1>
              <p className="beneficios-hero__description">
                Descubre las ventajas que hacen de los contenedores la solución ideal para tu proyecto
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Beneficios Principales */}
      <section className="beneficios-content">
        <Container>
          <Row>
            {beneficiosPrincipales.map((beneficio, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="beneficios-content__card h-100">
                  <Card.Body className="text-center">
                    <div className="beneficios-content__card-icono">{beneficio.icono}</div>
                    <Card.Title className="beneficios-content__card-titulo">{beneficio.titulo}</Card.Title>
                    <Card.Text className="beneficios-content__card-descripcion">
                      {beneficio.descripcion}
                    </Card.Text>
                    <ul className="beneficios-content__card-detalles">
                      {beneficio.detalles.map((detalle, idx) => (
                        <li key={idx} className="beneficios-content__card-detalle">{detalle}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Comparativa */}
      <section className="beneficios-comparativa">
        <Container>
          <h2 className="beneficios-comparativa__title">Contenedores vs Construcción Tradicional</h2>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="beneficios-comparativa__table">
                <Row className="beneficios-comparativa__header">
                  <Col md={4}><strong>Aspecto</strong></Col>
                  <Col md={4} className="text-center beneficios-comparativa__header-highlight"><strong>Contenedores</strong></Col>
                  <Col md={4} className="text-center"><strong>Construcción Tradicional</strong></Col>
                </Row>
                {comparativa.contenedores.map((item, index) => (
                  <Row key={index} className="beneficios-comparativa__row">
                    <Col md={4}><strong>{item.aspecto}</strong></Col>
                    <Col md={4} className="text-center beneficios-comparativa__value-highlight">{item.valor}</Col>
                    <Col md={4} className="text-center">{comparativa.tradicional[index].valor}</Col>
                  </Row>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Casos de Uso */}
      <section className="beneficios-casos">
        <Container>
          <h2 className="beneficios-casos__title">Aplicaciones Reales</h2>
          <Row>
            {casosUso.map((caso, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className="beneficios-casos__card h-100">
                  <div className="beneficios-casos__card-imagen" style={{
                    backgroundImage: `url(/images/${caso.imagen})`,
                    height: '200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  <Card.Body>
                    <Card.Title className="beneficios-casos__card-titulo">{caso.titulo}</Card.Title>
                    <Card.Text className="beneficios-casos__card-descripcion">{caso.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonios */}
      <section className="beneficios-testimonios">
        <Container>
          <h2 className="beneficios-testimonios__title">Lo Que Dicen Nuestros Clientes</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="beneficios-testimonios__card h-100">
                <Card.Body>
                  <div className="beneficios-testimonios__stars">
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                  </div>
                  <Card.Text className="beneficios-testimonios__text">
                    "Excelente servicio. Mi oficina estuvo lista en 6 semanas y el ahorro fue significativo. Totalmente recomendados."
                  </Card.Text>
                  <div className="beneficios-testimonios__author">
                    <strong className="beneficios-testimonios__author-name">Juan Pérez</strong>
                    <small className="beneficios-testimonios__author-info d-block">Arquitecto, CDMX</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="beneficios-testimonios__card h-100">
                <Card.Body>
                  <div className="beneficios-testimonios__stars">
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                  </div>
                  <Card.Text className="beneficios-testimonios__text">
                    "La calidad de construcción es increíble. Mi local comercial está funcionando perfectamente desde hace 2 años."
                  </Card.Text>
                  <div className="beneficios-testimonios__author">
                    <strong className="beneficios-testimonios__author-name">María González</strong>
                    <small className="beneficios-testimonios__author-info d-block">Empresaria, Guadalajara</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="beneficios-testimonios__card h-100">
                <Card.Body>
                  <div className="beneficios-testimonios__stars">
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                    <FaStar color="#FFD700" />
                  </div>
                  <Card.Text className="beneficios-testimonios__text">
                    "Solución perfecta para mi bodega. Segura, resistente y con excelente relación calidad-precio."
                  </Card.Text>
                  <div className="beneficios-testimonios__author">
                    <strong className="beneficios-testimonios__author-name">Carlos Ramírez</strong>
                    <small className="beneficios-testimonios__author-info d-block">Empresario, Monterrey</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="beneficios-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="beneficios-cta__title">¿Listo para Tu Proyecto?</h2>
              <p className="beneficios-cta__text">
                Aprovecha todos estos beneficios y comienza tu proyecto hoy mismo
              </p>
              <div className="beneficios-cta__buttons">
                <Link to="/cotizador-venta" className="beneficios-cta__button beneficios-cta__button--primary">
                  Solicitar Cotización
                </Link>
                <Link to="/contacto" className="beneficios-cta__button beneficios-cta__button--secondary">
                  Contactar Asesor
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Beneficios;
