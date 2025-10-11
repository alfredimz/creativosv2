import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MisionVision.scss';

const MisionVision = () => {
  return (
    <div className="mision-vision-page">
     

      {/* Sección de Misión y Visión */}
      <section className="content-section">
        <Container>
          <Row className="mission-vision-row">
            <Col lg={6} className="mission-col">
              <div className="content-box mission-box">
                <div className="content-icon">
                  <i className="mission-icon"></i>
                </div>
                <h2>Misión</h2>
                <p>
                  Ser tu socio estratégico en la creación de espacios y experiencias únicas, diseñadas a
                  medida y enfocadas en la sostenibilidad. Nuestro compromiso es superar tus expectativas y
                  construir un futuro mejor juntos.
                </p>
              </div>
            </Col>
            <Col lg={6} className="vision-col">
              <div className="content-box vision-box">
                <div className="content-icon">
                  <i className="vision-icon"></i>
                </div>
                <h2>Visión</h2>
                <p>
                  Seguir siendo la empresa a nivel nacional de referencia en nuestro sector, reconocida por
                  nuestra innovación, calidad y compromiso con la sostenibilidad. Dejar un legado positivo en
                  la sociedad.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

       {/* Banner Principal */}
      <section className="banner-section">
        {/*<div className="banner-overlay">
          <Container>
            <h1>Misión y Visión</h1>
            <p className="banner-text">
              Nuestros valores guían cada proyecto y definen quiénes somos como empresa
            </p>
          </Container>
        </div>*/}
      </section>

      {/* Imagen de contenedor */}
      <section className="container-image-section">
        <div className="container-image-wrapper">
          <img src="/images/mision-vision/contenedores-creativos.webp" alt="Contenedor Creativos Espacios" />
        </div>
      </section>

      {/* Sección de Principios */}
      <section className="principles-section">
        <Container>
          <h2 className="section-title">Nuestros principios</h2>
          <Row className="principles-row">
            <Col md={4} className="principle-item">
              <div className="principle-icon">
                <img src="/images/mision-vision/icon-innovacion.png" alt="Innovación" />
              </div>
              <h3>Innovación</h3>
              <p>Buscamos constantemente nuevas formas de mejorar nuestros servicios y productos, implementando tecnologías y prácticas vanguardistas en cada proyecto.</p>
            </Col>
            <Col md={4} className="principle-item">
              <div className="principle-icon">
                <img src="/images/mision-vision/icon-sostenibilidad.png" alt="Sostenibilidad" />
              </div>
              <h3>Sostenibilidad</h3>
              <p>Cada decisión que tomamos está orientada a reducir el impacto ambiental, promoviendo un uso eficiente de los recursos y materiales reciclados.</p>
            </Col>
            <Col md={4} className="principle-item">
              <div className="principle-icon">
                <img src="/images/mision-vision/icon-calidad.png" alt="Calidad" />
              </div>
              <h3>Calidad</h3>
              <p>Nos comprometemos a ofrecer el más alto estándar en cada proyecto, desde los materiales hasta el servicio al cliente, garantizando resultados excepcionales.</p>
            </Col>
          </Row>
          <Row className="principles-row">
            <Col md={4} className="principle-item">
              <div className="principle-icon">
                <img src="/images/mision-vision/icon-compromiso.png" alt="Compromiso" />
              </div>
              <h3>Compromiso</h3>
              <p>Nos involucramos profundamente en cada etapa del proyecto, asegurando que cada detalle cumpla y supere las expectativas de nuestros clientes.</p>
            </Col>
            <Col md={4} className="principle-item">
              <div className="principle-icon">
                <img src="/images/mision-vision/icon-integridad.png" alt="Integridad" />
              </div>
              <h3>Integridad</h3>
              <p>Actuamos con honestidad y transparencia en todas nuestras relaciones, creando confianza con nuestros clientes, proveedores y colaboradores.</p>
            </Col>
            <Col md={4} className="principle-item">
              <div className="principle-icon">
                <img src="/images/mision-vision/icon-equipo.png" alt="Trabajo en equipo" />
              </div>
              <h3>Trabajo en equipo</h3>
              <p>Creemos en el poder de la colaboración y la sinergia, valorando las contribuciones únicas de cada miembro de nuestro equipo para lograr resultados extraordinarios.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Compromiso */}
      <section className="commitment-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="commitment-text">
              <h2>Nuestro compromiso</h2>
              <p>
                En Creativos Espacios nos comprometemos a transformar la industria de la construcción a través de soluciones innovadoras y sostenibles basadas en contenedores marítimos. Cada proyecto que emprendemos refleja nuestra dedicación a la excelencia, al cuidado del medio ambiente y a la satisfacción de nuestros clientes.
              </p>
              <p>
                Trabajamos con la firme convicción de que nuestras acciones de hoy impactan el mundo del mañana. Por eso, cada decisión que tomamos está orientada a crear espacios que no solo cumplan con las necesidades presentes, sino que también contribuyan a un futuro más sostenible y consciente.
              </p>
            </Col>
            <Col lg={6} className="commitment-image">
              <img src="/images/mision-vision/compromiso.jpg" alt="Nuestro compromiso" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default MisionVision;