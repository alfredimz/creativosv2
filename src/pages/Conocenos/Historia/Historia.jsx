import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Historia.scss';

const Historia = () => {
  return (
    <div className="historia-page">
      {/* Banner Principal */}
      <section className="banner-section">
        <div className="banner-overlay">
          <Container>
            <h1>Historia</h1>
            <p className="banner-text">
              Más de una década transformando el sector de la construcción con soluciones innovadoras y sostenibles
            </p>
          </Container>
        </div>
      </section>

      {/* Sección de Introducción */}
      <section className="intro-section">
        <Container>
          <div className="intro-text">
            <p>
              Creativos Espacios nació en 2010, impulsada por un grupo de emprendedores apasionados que buscaban transformar el sector de la construcción. Desde 
              el primer día, nos comprometimos a crear soluciones de construcción más rápidas, con un menor impacto ambiental y un fuerte enfoque en la 
              sostenibilidad. Esta visión nos ha guiado durante más de 14 años, en los que hemos colaborado con grandes empresas nacionales e internacionales, 
              ofreciendo servicios que van desde la venta, renta y construcción hasta transporte, maniobras especializadas, diseño arquitectónico y acabados interiores 
              y exteriores.
            </p>
            <p>
              Desde nuestros inicios, hemos sido parte activa de incubadoras y ferias de emprendimiento, donde nuestro proyecto ha sido reconocido por su impacto 
              y valor. En 2010, éramos pioneros en la oferta de soluciones integrales en el sector de los contenedores marítimos; hoy, somos un referente consolidado, 
              con alianzas estratégicas que abarcan distintas industrias.
            </p>
            <p>
              Nuestro equipo de socios y colaboradores trabaja día a día con un solo propósito: entender y satisfacer las necesidades de nuestros clientes, 
              transformando procesos, adoptando nuevas tecnologías y aplicando técnicas innovadoras que marcan la diferencia. En Creativos Espacios, nos 
              mantenemos a la vanguardia en cada proyecto, llevando la innovación y las mejores prácticas a cada construcción, con el firme compromiso de construir 
              un futuro más sustentable para todos.
            </p>
          </div>
        </Container>
      </section>

      {/* Línea de Tiempo */}
      <section className="timeline-section">
        <Container>
          <h2 className="section-title">Nuestra Evolución</h2>
          
          <div className="timeline">
            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="year">2010</div>
                <div className="logo-container">
                  <img src="/images/historia/logo-2010.png" alt="Logo 2010" />
                </div>
                <div className="milestone-content">
                  <h3>Fundación</h3>
                  <p>Creativos Espacios nace como una startup innovadora con la visión de transformar el sector de la construcción mediante el uso de contenedores marítimos reciclados.</p>
                  <ul>
                    <li>Primeros proyectos de venta y adaptación de contenedores</li>
                    <li>Participación en incubadoras de emprendimiento</li>
                    <li>Formación del equipo inicial de socios fundadores</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="year">2015</div>
                <div className="logo-container">
                  <img src="/images/historia/logo-2015.png" alt="Logo 2015" />
                </div>
                <div className="milestone-content">
                  <h3>Expansión</h3>
                  <p>Cinco años después de nuestra fundación, experimentamos un crecimiento significativo que nos permitió expandir nuestros servicios y alcance.</p>
                  <ul>
                    <li>Apertura de primeros patios de contenedores</li>
                    <li>Ampliación del portafolio de servicios</li>
                    <li>Primeros proyectos con grandes empresas</li>
                    <li>Rediseño de imagen corporativa</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="year">2020</div>
                <div className="logo-container">
                  <img src="/images/historia/logo-2020.png" alt="Logo 2020" />
                </div>
                <div className="milestone-content">
                  <h3>Consolidación</h3>
                  <p>A pesar de los desafíos globales, este año marcó la consolidación de nuestra empresa como referente en el sector.</p>
                  <ul>
                    <li>Desarrollo de proyectos a nivel nacional</li>
                    <li>Implementación de nuevas tecnologías y procesos</li>
                    <li>Fortalecimiento del equipo con especialistas en diversas áreas</li>
                    <li>Evolución de nuestra imagen corporativa</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="year">2024</div>
                <div className="logo-container">
                  <img src="/images/historia/logo-2024.png" alt="Logo Actual" />
                </div>
                <div className="milestone-content">
                  <h3>Innovación Continua</h3>
                  <p>En la actualidad, seguimos liderando la innovación en nuestro sector con un enfoque cada vez más fuerte en sostenibilidad y tecnología.</p>
                  <ul>
                    <li>Desarrollo de proyectos integrales a gran escala</li>
                    <li>Implementación de prácticas de construcción cada vez más sostenibles</li>
                    <li>Presencia en múltiples puntos estratégicos del país</li>
                    <li>Renovación de imagen y plataformas digitales</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Galería de Proyectos Históricos */}
      <section className="project-gallery-section">
        <Container>
          <h2 className="section-title">Proyectos que Marcaron Nuestra Historia</h2>
          <Row>
            <Col md={6} lg={3} className="project-item">
              <div className="project-card">
                <div className="project-image">
                  <img src="/images/historia/proyecto1.jpg" alt="Proyecto 2011" />
                  <div className="project-year">2011</div>
                </div>
                <div className="project-info">
                  <h3>Primer Espacio Comercial</h3>
                  <p>Nuestro primer proyecto comercial utilizando contenedores marítimos, que sentó las bases para futuros desarrollos.</p>
                </div>
              </div>
            </Col>
            
            <Col md={6} lg={3} className="project-item">
              <div className="project-card">
                <div className="project-image">
                  <img src="/images/historia/proyecto2.jpg" alt="Proyecto 2014" />
                  <div className="project-year">2014</div>
                </div>
                <div className="project-info">
                  <h3>Vivienda Sostenible</h3>
                  <p>Desarrollo de una vivienda completamente sostenible utilizando contenedores, con sistemas de captación de agua pluvial y energía solar.</p>
                </div>
              </div>
            </Col>
            
            <Col md={6} lg={3} className="project-item">
              <div className="project-card">
                <div className="project-image">
                  <img src="/images/historia/proyecto3.jpg" alt="Proyecto 2018" />
                  <div className="project-year">2018</div>
                </div>
                <div className="project-info">
                  <h3>Plaza Comercial Modular</h3>
                  <p>Proyecto innovador que combinó múltiples contenedores para crear una plaza comercial completa con espacios versátiles.</p>
                </div>
              </div>
            </Col>
            
            <Col md={6} lg={3} className="project-item">
              <div className="project-card">
                <div className="project-image">
                  <img src="/images/historia/proyecto4.jpg" alt="Proyecto 2022" />
                  <div className="project-year">2022</div>
                </div>
                <div className="project-info">
                  <h3>Centro Corporativo</h3>
                  <p>Diseño y construcción de oficinas corporativas con alto estándar de eficiencia energética y confort para una empresa internacional.</p>
                </div>
              </div>
            </Col>
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
                  Trabajar con Creativos Espacios fue una experiencia excepcional. Su equipo supo entender exactamente lo que necesitábamos y transformaron nuestras ideas en un espacio funcional y hermoso.
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Carlos Méndez</div>
                  <div className="author-company">Director General, TechMex</div>
                </div>
              </div>
            </Col>
            
            <Col md={4} className="testimonial-item">
              <div className="testimonial-card">
                <div className="quote">"</div>
                <p className="testimonial-text">
                  Cuando decidimos apostar por contenedores para nuestro punto de venta, teníamos dudas. Creativos Espacios no solo nos convenció, sino que superó todas nuestras expectativas con un resultado increíble.
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Ana López</div>
                  <div className="author-company">Fundadora, Café Nativo</div>
                </div>
              </div>
            </Col>
            
            <Col md={4} className="testimonial-item">
              <div className="testimonial-card">
                <div className="quote">"</div>
                <p className="testimonial-text">
                  La eficiencia, puntualidad y calidad que caracterizan a Creativos Espacios son incomparables. Han sido nuestros aliados en múltiples proyectos y siempre entregan resultados excepcionales.
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Roberto Sánchez</div>
                  <div className="author-company">Gerente de Proyectos, Constructora Ávila</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección Final - Futuro */}
      <section className="future-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="future-image">
              <img src="/images/historia/futuro.jpg" alt="Nuestro Futuro" />
            </Col>
            <Col lg={6} className="future-text">
              <h2>Mirando hacia el Futuro</h2>
              <p>
                En Creativos Espacios, no solo celebramos nuestro pasado, sino que seguimos mirando hacia el futuro con entusiasmo y determinación. Nuestra visión para los próximos años incluye:
              </p>
              <ul className="future-list">
                <li>Expandir nuestra presencia a nivel internacional</li>
                <li>Desarrollar soluciones cada vez más innovadoras y sostenibles</li>
                <li>Seguir formando alianzas estratégicas para ofrecer servicios integrales</li>
                <li>Impulsar la investigación y desarrollo de nuevas tecnologías en construcción sostenible</li>
                <li>Continuar siendo agentes de cambio positivo en la industria de la construcción</li>
              </ul>
              <p>
                Nos entusiasma seguir creciendo junto a nuestros clientes, colaboradores y socios, construyendo juntos un futuro más sostenible, funcional y estéticamente atractivo.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Historia;