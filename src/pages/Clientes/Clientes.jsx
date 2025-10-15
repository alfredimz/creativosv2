import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SEO, seoConfig } from '../../components/SEO';
import './Clientes.scss';

// Importaciones de logotipos (estos serán importados desde la carpeta assets o referenciados directamente)
// import sixFlags from '../../assets/clients/six-flags.png';
// import yalifta from '../../assets/clients/yalifta.png';
// import holcim from '../../assets/clients/holcim.png';
// import televisa from '../../assets/clients/televisa.png';

const Clientes = () => {
  // Lista de clientes principales
  const clientesPrincipales = [
    { id: 1, nombre: 'Six Flags', logo: '/images/clientes/six-flags.png', descripcion: 'Parque de diversiones y entretenimiento' },
    { id: 2, nombre: 'Yalifta', logo: '/images/clientes/yalifta.png', descripcion: 'Empresa de tecnología y logística' },
    { id: 3, nombre: 'Holcim', logo: '/images/clientes/holcim.png', descripcion: 'Empresa líder en materiales de construcción' },
    { id: 4, nombre: 'Televisa', logo: '/images/clientes/televisa.png', descripcion: 'Grupo de medios y entretenimiento' },
    { id: 5, nombre: 'BMW', logo: '/images/clientes/bmw.png', descripcion: 'Fabricante de automóviles de lujo' },
    { id: 6, nombre: 'SACMEX', logo: '/images/clientes/sacmex.png', descripcion: 'Sistema de Aguas de la Ciudad de México' },
    { id: 7, nombre: 'Peñoles', logo: '/images/clientes/penoles.png', descripcion: 'Empresa minera y metalúrgica' },
    { id: 8, nombre: 'Expo Construcción', logo: '/images/clientes/expo-construccion.png', descripcion: 'Feria de la industria de la construcción' }
  ];

  // Lista de industrias
  const industrias = [
    { id: 1, nombre: 'Construcción', icon: 'construction', clientes: 15 },
    { id: 2, nombre: 'Minería', icon: 'mining', clientes: 8 },
    { id: 3, nombre: 'Entretenimiento', icon: 'entertainment', clientes: 12 },
    { id: 4, nombre: 'Automotriz', icon: 'automotive', clientes: 6 },
    { id: 5, nombre: 'Tecnológica', icon: 'tech', clientes: 9 },
    { id: 6, nombre: 'Gobierno', icon: 'government', clientes: 7 },
    { id: 7, nombre: 'Educación', icon: 'education', clientes: 10 },
    { id: 8, nombre: 'Comercio', icon: 'retail', clientes: 14 }
  ];
  
  return (
    <div className="clientes-page">
      <SEO {...seoConfig.clientes} />

      {/* Banner Principal */}
      <section className="banner-section">
        <div className="banner-overlay">
          <Container>
            <h1>Clientes</h1>
            <p className="banner-text">
              Construyendo relaciones sólidas y espacios innovadores con empresas líderes
            </p>
          </Container>
        </div>
      </section>

      {/* Sección de Introducción */}
      <section className="intro-section">
        <Container>
          <div className="intro-text">
            <p>
              En Creativos Espacios, nuestros valores son el núcleo de todo lo que hacemos. La transparencia 
              nos permite generar confianza con nuestros clientes y colaboradores, asegurando que cada 
              proceso sea claro y honesto. Nuestro compromiso y responsabilidad son el motor que impulsa 
              nuestro trabajo diario, ya que nos esforzamos por cumplir con los más altos estándares de calidad 
              en cada proyecto. Creemos firmemente en la sostenibilidad como un pilar para un futuro mejor, 
              integrando prácticas responsables que minimicen el impacto ambiental. Además, nos 
              comprometemos con la difusión de ideas y prácticas constructivas innovadoras, compartiendo 
              nuestro conocimiento y fomentando un sector más informado. Por último, a través del ejemplo 
              social, buscamos inspirar a nuestra comunidad y a otras empresas a contribuir positivamente a su 
              entorno. Estos valores nos permiten no solo ofrecer un servicio excepcional, sino también ser un 
              modelo de empresa consciente y comprometida con la sociedad y el planeta.
            </p>
          </div>
        </Container>
      </section>

      {/* Sección de imagen animada de cliente */}
      <section className="client-animation-section">
        <Container>
          <div className="animation-container">
            <img src="/images/clientes/animation.png" alt="Cliente Creativos Espacios" className="client-animation" loading="lazy" />
          </div>
        </Container>
      </section>

      {/* Sección de Clientes Principales */}
      <section className="main-clients-section">
        <Container>
          <h2 className="section-title">Empresas que Confían en Nosotros</h2>
          <div className="clients-path">
            <div className="path-visual"></div>
            <Row className="clients-row">
              {clientesPrincipales.map((cliente, index) => (
                <Col md={3} sm={6} key={cliente.id} className="client-item">
                  <div className="client-circle">
                    <div className="client-logo">
                      <img src={cliente.logo} alt={cliente.nombre} loading="lazy" />
                    </div>
                    <div className="grass-element"></div>
                  </div>
                  <h4 className="client-name">{cliente.nombre}</h4>
                  <p className="client-description">{cliente.descripcion}</p>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>

      {/* Sección de Industrias */}
      <section className="industries-section">
        <Container>
          <h2 className="section-title">Industrias donde Operamos</h2>
          <Row className="industries-row">
            {industrias.map(industria => (
              <Col md={3} sm={6} key={industria.id} className="industry-item">
                <div className="industry-card">
                  <div className="industry-icon">
                    <img src={`/images/clientes/icons/${industria.icon}.png`} alt={industria.nombre} loading="lazy" />
                  </div>
                  <h4>{industria.nombre}</h4>
                  <p>{industria.clientes} clientes</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Sección de Testimonios */}
      <section className="testimonials-section">
        <Container>
          <h2 className="section-title">Lo que Dicen Nuestros Clientes</h2>
          <Row className="testimonials-row">
            <Col md={4} className="testimonial-item">
              <div className="testimonial-card">
                <div className="quote">"</div>
                <p className="testimonial-text">
                  Trabajar con Creativos Espacios ha sido una experiencia excepcional. Su equipo comprendió perfectamente nuestras necesidades y entregó un proyecto que superó nuestras expectativas.
                </p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src="/images/clientes/testimonial1.jpg" alt="Testimonio" loading="lazy" />
                  </div>
                  <div className="author-info">
                    <h5>Ricardo Sánchez</h5>
                    <p>Director de Operaciones, Six Flags</p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col md={4} className="testimonial-item">
              <div className="testimonial-card">
                <div className="quote">"</div>
                <p className="testimonial-text">
                  La creatividad y profesionalismo del equipo nos permitió transformar nuestras oficinas en un espacio moderno y funcional, optimizando cada metro cuadrado.
                </p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src="/images/clientes/testimonial2.jpg" alt="Testimonio" loading="lazy" />
                  </div>
                  <div className="author-info">
                    <h5>Ana Gutiérrez</h5>
                    <p>Gerente de Proyectos, Yalifta</p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col md={4} className="testimonial-item">
              <div className="testimonial-card">
                <div className="quote">"</div>
                <p className="testimonial-text">
                  Buscábamos una solución sostenible y Creativos Espacios nos ofreció exactamente lo que necesitábamos: espacios funcionales con un enfoque ecológico.
                </p>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src="/images/clientes/testimonial3.jpg" alt="Testimonio" loading="lazy" />
                  </div>
                  <div className="author-info">
                    <h5>Carlos Martínez</h5>
                    <p>Director de Sustentabilidad, Holcim</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Proceso de Trabajo */}
      <section className="work-process-section">
        <Container>
          <h2 className="section-title">Nuestro Proceso de Trabajo con Clientes</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Comprensión de Necesidades</h3>
                <p>Iniciamos con una reunión detallada para entender perfectamente tus objetivos, requisitos y visión para el proyecto.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Propuesta Personalizada</h3>
                <p>Desarrollamos una propuesta a medida que incluye diseño conceptual, presupuesto y cronograma adaptados a tus necesidades.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Diseño y Planificación</h3>
                <p>Refinamos el diseño con tu feedback y elaboramos planes detallados para cada aspecto del proyecto.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h3>Implementación</h3>
                <p>Ejecutamos el proyecto con precisión, manteniéndote informado en cada etapa del avance.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-content">
                <h3>Entrega y Seguimiento</h3>
                <p>Tras la entrega, realizamos un seguimiento para asegurar tu completa satisfacción y ofrecer soporte continuo.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sección CTA */}
      <section className="cta-section">
        <Container>
          <div className="cta-content">
            <Row className="align-items-center">
              <Col lg={7} className="cta-text">
                <h2>¿Listo para Convertirte en Nuestro Próximo Cliente Satisfecho?</h2>
                <p>
                  Únete a las empresas que han confiado en Creativos Espacios para transformar sus ideas en espacios funcionales, 
                  estéticos y sostenibles. Nuestro equipo está listo para asesorarte y desarrollar un proyecto a la medida de tus necesidades.
                </p>
                <div className="cta-buttons">
                  <a href="/contacto" className="btn-primary">Contáctanos</a>
                  <a href="/casos-exito" className="btn-secondary">Ver Casos de Éxito</a>
                </div>
              </Col>
              <Col lg={5} className="cta-image">
                <img src="/images/clientes/cta-image.jpg" alt="Contacta con nosotros" loading="lazy" />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Clientes;