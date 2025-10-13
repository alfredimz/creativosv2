import React from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Beneficios.scss';

const Beneficios = () => {
  const beneficiosPrincipales = [
    {
      icono: '💰',
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
      icono: '⚡',
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
      icono: '🔧',
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
      icono: '💪',
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
      icono: '🌱',
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
      icono: '🔒',
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
    <div className="beneficios">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Beneficios</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero */}
      <section className="beneficios__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="beneficios__titulo">¿Por Qué Elegir Contenedores?</h1>
              <p className="beneficios__subtitulo">
                Descubre las ventajas que hacen de los contenedores la solución ideal para tu proyecto
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Beneficios Principales */}
      <section className="beneficios__principales py-5">
        <Container>
          <Row>
            {beneficiosPrincipales.map((beneficio, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="beneficio-card h-100 border-0 shadow-sm">
                  <Card.Body className="text-center p-4">
                    <div className="beneficio-card__icono mb-3">{beneficio.icono}</div>
                    <Card.Title className="beneficio-card__titulo mb-3">{beneficio.titulo}</Card.Title>
                    <Card.Text className="beneficio-card__descripcion mb-4">
                      {beneficio.descripcion}
                    </Card.Text>
                    <ul className="beneficio-card__detalles text-start">
                      {beneficio.detalles.map((detalle, idx) => (
                        <li key={idx}>{detalle}</li>
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
      <section className="beneficios__comparativa py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Contenedores vs Construcción Tradicional</h2>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="comparativa-table">
                <Row className="comparativa-header">
                  <Col md={4}><strong>Aspecto</strong></Col>
                  <Col md={4} className="text-center bg-primary text-white"><strong>Contenedores</strong></Col>
                  <Col md={4} className="text-center"><strong>Construcción Tradicional</strong></Col>
                </Row>
                {comparativa.contenedores.map((item, index) => (
                  <Row key={index} className="comparativa-row">
                    <Col md={4}><strong>{item.aspecto}</strong></Col>
                    <Col md={4} className="text-center bg-light-primary">{item.valor}</Col>
                    <Col md={4} className="text-center">{comparativa.tradicional[index].valor}</Col>
                  </Row>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Casos de Uso */}
      <section className="beneficios__casos-uso py-5">
        <Container>
          <h2 className="text-center mb-5">Aplicaciones Reales</h2>
          <Row>
            {casosUso.map((caso, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <Card className="caso-card h-100 border-0 shadow-sm overflow-hidden">
                  <div className="caso-card__imagen" style={{
                    backgroundImage: `url(/images/${caso.imagen})`,
                    height: '200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  <Card.Body>
                    <Card.Title className="h5">{caso.titulo}</Card.Title>
                    <Card.Text>{caso.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonios */}
      <section className="beneficios__testimonios py-5 bg-dark text-white">
        <Container>
          <h2 className="text-center mb-5">Lo Que Dicen Nuestros Clientes</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="testimonio-card bg-white bg-opacity-10 border-0 text-white h-100">
                <Card.Body className="p-4">
                  <div className="testimonio-stars mb-3">⭐⭐⭐⭐⭐</div>
                  <Card.Text className="mb-4">
                    "Excelente servicio. Mi oficina estuvo lista en 6 semanas y el ahorro fue significativo. Totalmente recomendados."
                  </Card.Text>
                  <div className="testimonio-author">
                    <strong>Juan Pérez</strong>
                    <small className="d-block">Arquitecto, CDMX</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="testimonio-card bg-white bg-opacity-10 border-0 text-white h-100">
                <Card.Body className="p-4">
                  <div className="testimonio-stars mb-3">⭐⭐⭐⭐⭐</div>
                  <Card.Text className="mb-4">
                    "La calidad de construcción es increíble. Mi local comercial está funcionando perfectamente desde hace 2 años."
                  </Card.Text>
                  <div className="testimonio-author">
                    <strong>María González</strong>
                    <small className="d-block">Empresaria, Guadalajara</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="testimonio-card bg-white bg-opacity-10 border-0 text-white h-100">
                <Card.Body className="p-4">
                  <div className="testimonio-stars mb-3">⭐⭐⭐⭐⭐</div>
                  <Card.Text className="mb-4">
                    "Solución perfecta para mi bodega. Segura, resistente y con excelente relación calidad-precio."
                  </Card.Text>
                  <div className="testimonio-author">
                    <strong>Carlos Ramírez</strong>
                    <small className="d-block">Empresario, Monterrey</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="beneficios__cta py-5 text-center">
        <Container>
          <h2 className="mb-4">¿Listo para Tu Proyecto?</h2>
          <p className="lead mb-4">
            Aprovecha todos estos beneficios y comienza tu proyecto hoy mismo
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button variant="primary" size="lg" as={Link} to="/cotizador-venta">
              Solicitar Cotización
            </Button>
            <Button variant="outline-primary" size="lg" as={Link} to="/contacto">
              Contactar Asesor
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Beneficios;
