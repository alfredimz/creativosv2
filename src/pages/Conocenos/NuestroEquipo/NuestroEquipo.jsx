import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './NuestroEquipo.scss';

const NuestroEquipo = () => {
  return (
    <div className="nuestro-equipo-page">
      {/* Banner Principal */}
      <section className="banner-section">
        <div className="banner-overlay">
          <Container>
            <h1>Nuestro Equipo</h1>
            <p className="banner-text">
              Un equipo de profesionales dedicados y altamente capacitados, comprometidos con hacer realidad cada proyecto
            </p>
          </Container>
        </div>
      </section>

      {/* Introducción */}
      <section className="intro-section">
        <Container>
          <div className="intro-text">
            <p>
              En Creativos Espacios contamos con un equipo de profesionales dedicados y altamente capacitados,
              comprometidos con hacer realidad cada proyecto. Nuestro personal incluye arquitectos, diseñadores,
              operadores y especialistas en maniobras que comparten una pasión por la excelencia y un
              compromiso con el medio ambiente.
            </p>
            <p>
              Cada miembro de nuestro equipo destaca por su experiencia, creatividad y atención al detalle. Nos
              esforzamos por mantener una comunicación cercana y amigable, para que conozcas a quienes harán
              de tus ideas una realidad. Con cada proyecto, garantizamos soluciones innovadoras, prácticas y
              sostenibles, siempre con la calidez y profesionalismo que caracterizan a nuestro equipo.
            </p>
            <p>
              En Creativos Espacios, nuestro personal es tu mejor aliado para transformar espacios y hacer de cada
              proyecto una experiencia única y satisfactoria.
            </p>
          </div>
        </Container>
      </section>

      {/* Equipo Directivo */}
      <section className="team-section directivo-section">
        <Container>
          <h2 className="section-title">Equipo Directivo</h2>
          <Row className="team-row">
            <Col lg={4} md={6} className="team-member">
              <div className="member-card">
                <div className="member-image">
                  <img src="/images/equipo/edith.png" alt="Edith Ramírez" />
                </div>
                <div className="member-info">
                  <h3>Edith Ramírez</h3>
                  <p className="member-title">Recursos, Facturación y Cobranza</p>
                  <p className="member-email">edith@creativosespacios.mx</p>
                  <p className="member-description">
                    Experta en administración financiera y operaciones. Con más de 10 años de experiencia, 
                    Edith garantiza que todos los procesos administrativos funcionen con precisión y transparencia.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="team-member">
              <div className="member-card">
                <div className="member-image">
                  <img src="/images/equipo/alejandra.png" alt="Alejandra Ramírez" />
                </div>
                <div className="member-info">
                  <h3>Alejandra Ramírez</h3>
                  <p className="member-title">Atención al Cliente y Marketing</p>
                  <p className="member-email">alejandra@creativosespacios.mx</p>
                  <p className="member-description">
                    Especialista en atención al cliente y estrategias de marketing. Alejandra se asegura de que 
                    la experiencia de nuestros clientes sea excepcional desde el primer contacto.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="team-member">
              <div className="member-card">
                <div className="member-image">
                  <img src="/images/equipo/arturo.png" alt="Arturo Ramírez" />
                </div>
                <div className="member-info">
                  <h3>Arturo Ramírez</h3>
                  <p className="member-title">Proyectos y Arquitectura</p>
                  <p className="member-email">arturo@creativosespacios.mx</p>
                  <p className="member-description">
                    Arquitecto con especialización en diseño sostenible. Arturo lidera el departamento 
                    de proyectos, aportando soluciones innovadoras y funcionales para cada cliente.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Equipo de Proyectos */}
      <section className="team-section proyectos-section">
        <Container>
          <h2 className="section-title">Equipo de Proyectos</h2>
          <Row className="team-row">
            <Col lg={4} md={6} className="team-member">
              <div className="member-card">
                <div className="member-image">
                  <img src="/images/equipo/hugo.png" alt="Hugo Estrada" />
                </div>
                <div className="member-info">
                  <h3>Hugo Estrada</h3>
                  <p className="member-title">Gestor de Proyectos</p>
                  <p className="member-email">hugo@creativosespacios.mx</p>
                  <p className="member-description">
                    Especialista en gestión de proyectos con amplia experiencia en construcciones con contenedores. 
                    Hugo asegura que cada proyecto se entregue a tiempo y según las especificaciones.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="team-member">
              <div className="member-card">
                <div className="member-image">
                  <img src="/images/equipo/jesus.png" alt="Jesús Mondragón" />
                </div>
                <div className="member-info">
                  <h3>Jesús Mondragón</h3>
                  <p className="member-title">Asesor de Proyectos</p>
                  <p className="member-email">jesus@creativosespacios.mx</p>
                  <p className="member-description">
                    Experto en asesoramiento técnico y desarrollo de proyectos. Jesús trabaja estrechamente con los clientes 
                    para entender sus necesidades y transformarlas en soluciones efectivas.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="team-member">
              <div className="member-card">
                <div className="member-image">
                  <img src="/images/equipo/selene.png" alt="Selene" />
                </div>
                <div className="member-info">
                  <h3>Selene</h3>
                  <p className="member-title">Ventas y Atención al Cliente</p>
                  <p className="member-email">ventas@creativosespacios.mx</p>
                  <p className="member-description">
                    Responsable de ventas y primera línea de contacto con los clientes. Selene brinda asesoramiento 
                    personalizado y asegura que cada cliente encuentre la solución ideal para sus necesidades.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Equipo Operativo */}
      <section className="team-section operativo-section">
        <Container>
          <h2 className="section-title">Equipo Operativo</h2>
          <div className="team-operative">
            <div className="operative-image">
              <img src="/images/equipo/equipo-operativo.jpg" alt="Equipo Operativo" />
            </div>
            <div className="operative-info">
              <h3>Personal de Confianza</h3>
              <p className="operative-email">proyectos@creativosespacios.mx</p>
              <p className="operative-description">
                Nuestro equipo operativo está formado por profesionales talentosos en sus respectivas áreas: 
                técnicos especializados, soldadores, carpinteros, electricistas, plomeros y personal de 
                acabados, todos comprometidos con la excelencia en cada detalle de nuestros proyectos.
              </p>
              <p className="operative-description">
                Cada miembro ha sido cuidadosamente seleccionado por sus habilidades y experiencia, 
                recibiendo capacitación continua para mantenerse a la vanguardia en técnicas de construcción 
                sostenible con contenedores.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Galería de Equipo en Acción */}
      <section className="gallery-section">
        <Container fluid className="p-0">
          <h2 className="section-title">Nuestro Equipo en Acción</h2>
          <Row className="g-0">
            <Col md={3} sm={6} className="gallery-item">
              <img src="/images/equipo/accion1.jpg" alt="Equipo en acción" />
            </Col>
            <Col md={3} sm={6} className="gallery-item">
              <img src="/images/equipo/accion2.jpg" alt="Equipo en acción" />
            </Col>
            <Col md={3} sm={6} className="gallery-item">
              <img src="/images/equipo/accion3.jpg" alt="Equipo en acción" />
            </Col>
            <Col md={3} sm={6} className="gallery-item">
              <img src="/images/equipo/accion4.jpg" alt="Equipo en acción" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Únete a Nuestro Equipo */}
      <section className="join-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="join-text">
              <h2>¿Quieres unirte a nuestro equipo?</h2>
              <p>
                En Creativos Espacios siempre estamos en búsqueda de talento que comparta nuestra pasión 
                por la innovación, la sostenibilidad y la excelencia en el servicio. Si tienes experiencia 
                en arquitectura, construcción, diseño, ventas o cualquier área relacionada con nuestros 
                servicios, nos encantaría conocerte.
              </p>
              <button className="btn-primary">Enviar CV</button>
            </Col>
            <Col lg={6} className="join-image">
              <img src="/images/equipo/unete.jpg" alt="Únete a nuestro equipo" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default NuestroEquipo;