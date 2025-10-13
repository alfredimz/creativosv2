import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Tab, Nav, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PresentacionEmpresarial.scss';

const PresentacionEmpresarial = () => {
  const [activeTab, setActiveTab] = useState('oficina');

  const vistazo = [
    { icon: '🏗️', titulo: 'Servicios', descripcion: 'Venta, renta y transformación de contenedores' },
    { icon: '📅', titulo: '14 años', descripcion: 'De experiencia en el mercado' },
    { icon: '📏', titulo: 'Tamaños', descripcion: '20 y 40 pies disponibles' },
    { icon: '🚚', titulo: 'Entrega', descripcion: 'Rápida en toda la República' },
    { icon: '🎨', titulo: 'Diseños', descripcion: 'Personalizados a tu medida' },
    { icon: '💰', titulo: 'Precios', descripcion: 'Competitivos y transparentes' }
  ];

  const contenedores = [
    {
      tipo: 'Contenedor Dry',
      tamaños: ['20 pies', '40 pies'],
      precio20: '$48,000',
      precio40: '$75,000',
      caracteristicas: ['Hermético', 'Resistente', 'Ideal para almacenaje'],
      imagen: 'dry-container.jpg'
    },
    {
      tipo: 'Contenedor Reffer',
      tamaños: ['20 pies', '40 pies'],
      precio20: '$95,000',
      precio40: '$145,000',
      caracteristicas: ['Refrigerado', 'Control de temperatura', 'Productos perecederos'],
      imagen: 'reffer-container.jpg'
    },
    {
      tipo: 'Contenedor Open Top',
      tamaños: ['20 pies', '40 pies'],
      precio20: '$55,000',
      precio40: '$85,000',
      caracteristicas: ['Techo abierto', 'Carga superior', 'Mercancía de gran altura'],
      imagen: 'opentop-container.jpg'
    },
    {
      tipo: 'Contenedor Double Door',
      tamaños: ['20 pies', '40 pies'],
      precio20: '$52,000',
      precio40: '$80,000',
      caracteristicas: ['Doble puerta', 'Acceso en ambos lados', 'Carga/descarga rápida'],
      imagen: 'doubledoor-container.jpg'
    },
    {
      tipo: 'Contenedor Open Side',
      tamaños: ['20 pies', '40 pies'],
      precio20: '$58,000',
      precio40: '$88,000',
      caracteristicas: ['Apertura lateral', 'Fácil acceso', 'Carga voluminosa'],
      imagen: 'openside-container.jpg'
    }
  ];

  const useCases = {
    oficina: {
      titulo: 'Oficinas',
      descripcion: 'Convierte contenedores en espacios de trabajo modernos y funcionales. Perfectos para oficinas temporales, estudios creativos o espacios corporativos innovadores.',
      caracteristicas: [
        'Climatización incluida',
        'Instalación eléctrica completa',
        'Acabados profesionales',
        'Internet y telecomunicaciones',
        'Ventanas y puertas de aluminio',
        'Pisos de alta resistencia'
      ],
      beneficios: 'Listos para usar en tiempo récord, con todos los servicios necesarios para operar desde el primer día.',
      imagen: 'oficina-contenedor.jpg'
    },
    casa: {
      titulo: 'Casas Habitación',
      descripcion: 'Viviendas sustentables, modernas y económicas. Una alternativa innovadora para tu hogar con diseño personalizado y construcción rápida.',
      caracteristicas: [
        'Baño completo instalado',
        'Cocina equipada',
        'Recámaras personalizables',
        'Sala y comedor',
        'Aislamiento térmico y acústico',
        'Acabados residenciales'
      ],
      beneficios: 'Construcción en 30-45 días, con ahorro del 40% vs construcción tradicional.',
      imagen: 'casa-contenedor.jpg'
    },
    comercio: {
      titulo: 'Locales Comerciales',
      descripcion: 'Espacios versátiles para todo tipo de negocios: cafeterías, restaurantes, tiendas, boutiques y más. Diseño adaptable a tu marca.',
      caracteristicas: [
        'Fachada personalizable',
        'Área de atención al cliente',
        'Zona de almacén',
        'Instalaciones sanitarias',
        'Iluminación comercial',
        'Señalética incluida'
      ],
      beneficios: 'Apertura rápida de tu negocio, con bajo costo de inversión inicial y alta rentabilidad.',
      imagen: 'comercio-contenedor.jpg'
    },
    bodega: {
      titulo: 'Bodegas y Almacenamiento',
      descripcion: 'Soluciones de almacenaje seguras, resistentes y de fácil acceso. Ideales para inventarios, herramientas, equipos y mercancías.',
      caracteristicas: [
        'Estructura reforzada',
        'Cerraduras de seguridad',
        'Ventilación adecuada',
        'Protección contra intemperie',
        'Piso antiderrapante',
        'Iluminación LED'
      ],
      beneficios: 'Protección garantizada 24/7, con acceso fácil y seguridad industrial certificada.',
      imagen: 'bodega-contenedor.jpg'
    }
  };

  const servicios = [
    { titulo: 'Venta de Contenedores', descripcion: 'Nuevos y seminuevos, en excelentes condiciones', icon: '🏪' },
    { titulo: 'Renta de Contenedores', descripcion: 'Planes flexibles mensuales y anuales', icon: '📋' },
    { titulo: 'Transformación y Adaptación', descripcion: 'Diseños personalizados a tu medida', icon: '🔧' },
    { titulo: 'Mantenimiento', descripcion: 'Servicio de mantenimiento preventivo', icon: '🛠️' },
    { titulo: 'Transporte', descripcion: 'Entrega en toda la República Mexicana', icon: '🚛' },
    { titulo: 'Asesoría', descripcion: 'Consultoría especializada para tu proyecto', icon: '💼' }
  ];

  const patios = [
    { ciudad: 'Manzanillo, Colima', ubicacion: 'Puerto del Pacífico', icon: '📍' },
    { ciudad: 'Progreso, Yucatán', ubicacion: 'Península de Yucatán', icon: '📍' },
    { ciudad: 'Altamira, Tamaulipas', ubicacion: 'Golfo de México', icon: '📍' },
    { ciudad: 'Puerto de Veracruz', ubicacion: 'Costa del Golfo', icon: '📍' }
  ];

  const valores = [
    {
      año: '2018',
      titulo: 'Transparencia',
      descripcion: 'Precios claros, procesos transparentes. Sin costos ocultos ni sorpresas.',
      icono: '🔍'
    },
    {
      año: '2018',
      titulo: 'Compromiso',
      descripcion: 'Cumplimiento de plazos de entrega y estándares de calidad garantizados.',
      icono: '🤝'
    },
    {
      año: '2019',
      titulo: 'Responsabilidad',
      descripcion: 'Cuidado del medio ambiente mediante el reciclaje de contenedores.',
      icono: '🌱'
    },
    {
      año: '2019',
      titulo: 'Sostenibilidad',
      descripcion: 'Construcciones sustentables que reducen el impacto ambiental.',
      icono: '♻️'
    },
    {
      año: '2020',
      titulo: 'Difusión',
      descripcion: 'Promovemos el conocimiento sobre usos innovadores de contenedores.',
      icono: '📢'
    },
    {
      año: '2020',
      titulo: 'Ejemplo Social',
      descripcion: 'Generamos empleos y apoyamos el desarrollo de comunidades.',
      icono: '👥'
    }
  ];

  const beneficios = [
    {
      titulo: 'Economía y Rapidez',
      descripcion: 'Ahorra hasta 40% en costos de construcción con tiempos de entrega de 30-45 días vs 6-12 meses de construcción tradicional.',
      imagen: 'economia.jpg'
    },
    {
      titulo: 'Versatilidad',
      descripcion: 'Diseños adaptables a cualquier necesidad: oficinas, viviendas, comercios, bodegas y más. Tu imaginación es el límite.',
      imagen: 'versatilidad.jpg'
    }
  ];

  return (
    <div className="presentacion-empresarial">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Presentación Empresarial</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero Section / Portada */}
      <section className="presentacion-empresarial__hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start">
              <img src="/images/logo-creativos.png" alt="Creativos Espacios" className="presentacion-empresarial__logo mb-4" />
              <h1 className="presentacion-empresarial__titulo">
                Transformamos Contenedores en Espacios Funcionales
              </h1>
              <p className="presentacion-empresarial__subtitulo">
                14 años de experiencia convirtiendo ideas en realidad
              </p>
              <Button variant="primary" size="lg" className="mt-3">
                Descargar Presentación PDF
              </Button>
            </Col>
            <Col lg={6}>
              <img
                src="/images/presentacion-hero.jpg"
                alt="Contenedores Creativos Espacios"
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vistazo - Overview Grid */}
      <section className="presentacion-empresarial__vistazo py-5">
        <Container>
          <h2 className="text-center mb-5">Un Vistazo a Creativos Espacios</h2>
          <Row>
            {vistazo.map((item, index) => (
              <Col md={4} lg={2} key={index} className="mb-4">
                <Card className="vistazo-card text-center h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="vistazo-icon mb-3">{item.icon}</div>
                    <h5 className="vistazo-titulo">{item.titulo}</h5>
                    <p className="vistazo-descripcion">{item.descripcion}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Tipos de Contenedores */}
      <section className="presentacion-empresarial__contenedores py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Tipos de Contenedores Disponibles</h2>
          <Row>
            {contenedores.map((contenedor, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="contenedor-card h-100 shadow-sm">
                  <Card.Img variant="top" src={`/images/${contenedor.imagen}`} alt={contenedor.tipo} />
                  <Card.Body>
                    <Card.Title className="text-primary">{contenedor.tipo}</Card.Title>
                    <div className="mb-3">
                      <strong>Tamaños disponibles:</strong> {contenedor.tamaños.join(', ')}
                    </div>
                    <div className="precios mb-3">
                      <div>20 pies: <strong>{contenedor.precio20}</strong></div>
                      <div>40 pies: <strong>{contenedor.precio40}</strong></div>
                    </div>
                    <ul className="caracteristicas-list">
                      {contenedor.caracteristicas.map((car, idx) => (
                        <li key={idx}>{car}</li>
                      ))}
                    </ul>
                    <Button variant="outline-primary" className="mt-3 w-100" as={Link} to="/tipos-contenedores">
                      Ver Detalles
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Casos de Uso */}
      <section className="presentacion-empresarial__casos py-5">
        <Container>
          <h2 className="text-center mb-5">Casos de Uso y Aplicaciones</h2>
          <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
            <Nav variant="pills" className="justify-content-center mb-5 nav-casos">
              <Nav.Item>
                <Nav.Link eventKey="oficina">🏢 Oficinas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="casa">🏠 Casas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="comercio">🏪 Comercio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bodega">📦 Bodegas</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              {Object.entries(useCases).map(([key, useCase]) => (
                <Tab.Pane key={key} eventKey={key}>
                  <Row className="align-items-center">
                    <Col lg={6}>
                      <h3 className="text-primary mb-3">{useCase.titulo}</h3>
                      <p className="lead">{useCase.descripcion}</p>
                      <h5 className="mt-4 mb-3">Características incluidas:</h5>
                      <Row>
                        {useCase.caracteristicas.map((feature, idx) => (
                          <Col md={6} key={idx} className="mb-2">
                            <div className="caracteristica-item">
                              ✓ {feature}
                            </div>
                          </Col>
                        ))}
                      </Row>
                      <div className="beneficio-box mt-4 p-3 bg-light rounded">
                        <strong>Beneficios:</strong> {useCase.beneficios}
                      </div>
                      <Button variant="primary" className="mt-4" as={Link} to="/cotizador-venta">
                        Cotizar Ahora
                      </Button>
                    </Col>
                    <Col lg={6} className="mt-4 mt-lg-0">
                      <img
                        src={`/images/${useCase.imagen}`}
                        alt={useCase.titulo}
                        className="img-fluid rounded shadow-lg"
                      />
                    </Col>
                  </Row>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>

      {/* Servicios Integrales */}
      <section className="presentacion-empresarial__servicios py-5 bg-dark text-white">
        <Container>
          <h2 className="text-center mb-5">Servicios Integrales</h2>
          <p className="text-center lead mb-5">
            Ofrecemos soluciones completas para tu proyecto, desde la compra hasta la instalación final
          </p>
          <Row>
            {servicios.map((servicio, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <div className="servicio-item text-center p-4 bg-white bg-opacity-10 rounded h-100">
                  <div className="servicio-icon mb-3" style={{ fontSize: '3rem' }}>{servicio.icon}</div>
                  <h5>{servicio.titulo}</h5>
                  <p>{servicio.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Button variant="light" size="lg" as={Link} to="/servicios">
              Ver Todos los Servicios
            </Button>
          </div>
        </Container>
      </section>

      {/* Nuestros Patios */}
      <section className="presentacion-empresarial__patios py-5">
        <Container>
          <h2 className="text-center mb-5">Nuestros Patios de Contenedores</h2>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <img src="/images/mapa-mexico-patios.jpg" alt="Mapa de patios en México" className="img-fluid mb-4 rounded shadow" />
            </Col>
          </Row>
          <Row>
            {patios.map((patio, index) => (
              <Col md={6} lg={3} key={index} className="mb-3">
                <Card className="patio-card text-center h-100 border-primary">
                  <Card.Body>
                    <div className="patio-icon mb-2" style={{ fontSize: '2rem' }}>{patio.icon}</div>
                    <h5 className="text-primary">{patio.ciudad}</h5>
                    <p className="text-muted mb-0">{patio.ubicacion}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Button variant="primary" as={Link} to="/patios-contenedores">
              Ver Detalles de Patios
            </Button>
          </div>
        </Container>
      </section>

      {/* Nosotros - Misión y Visión */}
      <section className="presentacion-empresarial__nosotros py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="mb-4">Nosotros</h2>
              <p className="lead">
                Somos una empresa mexicana dedicada a la venta, renta y transformación de contenedores marítimos,
                con 14 años de experiencia ofreciendo soluciones innovadoras y sustentables.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="text-primary mb-3">🎯 Misión</h3>
                  <p>
                    Proporcionar soluciones innovadoras y sustentables mediante la transformación de contenedores marítimos,
                    ofreciendo productos y servicios de calidad que superen las expectativas de nuestros clientes,
                    contribuyendo al desarrollo económico y cuidado del medio ambiente.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <h3 className="text-primary mb-3">🔭 Visión</h3>
                  <p>
                    Ser la empresa líder en México en la transformación de contenedores marítimos,
                    reconocida por nuestra innovación, calidad y compromiso con la sustentabilidad,
                    expandiendo nuestros servicios a nivel nacional e internacional.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Beneficios */}
      <section className="presentacion-empresarial__beneficios py-5">
        <Container>
          <h2 className="text-center mb-5">¿Por Qué Elegir Contenedores?</h2>
          <Row>
            {beneficios.map((beneficio, index) => (
              <Col md={6} key={index} className="mb-4">
                <Card className="beneficio-card h-100 border-0 shadow-lg overflow-hidden">
                  <div className="beneficio-image" style={{
                    backgroundImage: `url(/images/${beneficio.imagen})`,
                    height: '200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}></div>
                  <Card.Body className="p-4">
                    <h4 className="text-primary mb-3">{beneficio.titulo}</h4>
                    <p className="lead">{beneficio.descripcion}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Valores */}
      <section className="presentacion-empresarial__valores py-5 bg-primary text-white">
        <Container>
          <h2 className="text-center mb-5">Nuestros Valores</h2>
          <Row>
            {valores.map((valor, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <Card className="valor-card h-100 bg-white bg-opacity-10 border-0 text-white">
                  <Card.Body className="text-center p-4">
                    <div className="valor-icono mb-3" style={{ fontSize: '3rem' }}>{valor.icono}</div>
                    <div className="valor-año badge bg-light text-primary mb-3">{valor.año}</div>
                    <Card.Title className="h4 mb-3">{valor.titulo}</Card.Title>
                    <Card.Text>{valor.descripcion}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contacto */}
      <section className="presentacion-empresarial__contacto py-5">
        <Container>
          <h2 className="text-center mb-5">Contáctanos</h2>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h5 className="mb-4">📞 Teléfonos</h5>
                      <p className="mb-2">
                        <strong>WhatsApp:</strong> <a href="https://wa.me/5554269941">55-54-26-99-41</a>
                      </p>
                      <p className="mb-4">
                        <strong>Teléfono:</strong> <a href="tel:5526088886">55-26-08-88-86</a>
                      </p>
                      <h5 className="mb-3">✉️ Correo Electrónico</h5>
                      <p><a href="mailto:ventas@creativosespacios.mx">ventas@creativosespacios.mx</a></p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h5 className="mb-3">📍 Ubicación</h5>
                      <p>
                        Av. Del Árbol 104<br/>
                        Colonia Lomas de San Lorenzo<br/>
                        C.P. 09780<br/>
                        Alcaldía Iztapalapa<br/>
                        Ciudad de México, México
                      </p>
                      <h5 className="mb-3 mt-4">🕐 Horario</h5>
                      <p>Lunes a viernes<br/>9:00 AM - 6:00 PM</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="text-center">
                  <h5 className="mb-3">Síguenos en Redes Sociales</h5>
                  <div className="social-buttons d-flex justify-content-center gap-3 flex-wrap">
                    <Button variant="outline-primary" href="https://instagram.com/creativosespaciosmx" target="_blank">
                      Instagram
                    </Button>
                    <Button variant="outline-danger" href="https://youtube.com/@creativosespacios" target="_blank">
                      YouTube
                    </Button>
                    <Button variant="outline-info" href="https://x.com/creaespaciosmx" target="_blank">
                      X (Twitter)
                    </Button>
                    <Button variant="outline-dark" href="https://tiktok.com/@creativosespaciosmx" target="_blank">
                      TikTok
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="presentacion-empresarial__cta py-5 bg-dark text-white text-center">
        <Container>
          <h2 className="mb-4">¿Listo para Transformar tu Espacio?</h2>
          <p className="lead mb-4">
            Contáctanos hoy y descubre cómo podemos hacer realidad tu proyecto
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button variant="primary" size="lg" as={Link} to="/cotizador-venta">
              Cotizar Ahora
            </Button>
            <Button variant="outline-light" size="lg" as={Link} to="/contacto">
              Contactar
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PresentacionEmpresarial;
