import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Valores.scss';

const Valores = () => {
  return (
    <div className="valores-page">
      {/* Banner Principal */}
      <section className="banner-section">
        <div className="banner-overlay">
          <Container>
            <h1>Valores</h1>
            <p className="banner-text">
              El núcleo de todo lo que hacemos, la base sobre la que construimos nuestros proyectos y relaciones
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

      {/* Imagen central de contenedor con corazón */}
      <section className="container-heart-section">
        <div className="container-image">
          <img src="/images/valores/valores-contenedores-maritimos.png" alt="Contenedor con corazón" />
        </div>
      </section>

      {/* Sección de Valores Principales */}
      <section className="core-values-section">
        <Container>
          <h2 className="section-title">Nuestros Valores Fundamentales</h2>
          
          <Row className="values-row">
            <Col md={4} className="value-item">
              <div className="value-card">
                <div className="value-icon">
                  <img src="/images/valores/icon-transparencia.png" alt="Transparencia" />
                </div>
                <h3>Transparencia</h3>
                <p>
                  Creemos en procesos claros y comunicación abierta. Nos aseguramos de que nuestros clientes comprendan completamente cada etapa de su proyecto, desde el presupuesto inicial hasta la entrega final.
                </p>
                <ul className="value-list">
                  <li>Información clara sobre costos y tiempos</li>
                  <li>Comunicación constante durante todo el proyecto</li>
                  <li>Documentación detallada y comprensible</li>
                </ul>
              </div>
            </Col>
            
            <Col md={4} className="value-item">
              <div className="value-card">
                <div className="value-icon">
                  <img src="/images/valores/icon-compromiso.png" alt="Compromiso" />
                </div>
                <h3>Compromiso</h3>
                <p>
                  Asumimos cada proyecto como propio, dedicando nuestro máximo esfuerzo para lograr resultados excepcionales que superen las expectativas de nuestros clientes.
                </p>
                <ul className="value-list">
                  <li>Dedicación total a cada proyecto</li>
                  <li>Cumplimiento riguroso de plazos</li>
                  <li>Búsqueda constante de la excelencia</li>
                </ul>
              </div>
            </Col>
            
            <Col md={4} className="value-item">
              <div className="value-card">
                <div className="value-icon">
                  <img src="/images/valores/icon-responsabilidad.png" alt="Responsabilidad" />
                </div>
                <h3>Responsabilidad</h3>
                <p>
                  Asumimos las consecuencias de nuestras decisiones y acciones, respondiendo con integridad ante cualquier situación y buscando siempre la mejor solución para nuestros clientes.
                </p>
                <ul className="value-list">
                  <li>Gestión eficiente de recursos</li>
                  <li>Respuesta rápida ante imprevistos</li>
                  <li>Cumplimiento de compromisos adquiridos</li>
                </ul>
              </div>
            </Col>
          </Row>
          
          <Row className="values-row">
            <Col md={4} className="value-item">
              <div className="value-card">
                <div className="value-icon">
                  <img src="/images/valores/icon-sostenibilidad.png" alt="Sostenibilidad" />
                </div>
                <h3>Sostenibilidad</h3>
                <p>
                  Desarrollamos soluciones constructivas que respetan el medio ambiente, optimizando recursos y minimizando el impacto ecológico en cada uno de nuestros proyectos.
                </p>
                <ul className="value-list">
                  <li>Reutilización de contenedores marítimos</li>
                  <li>Implementación de sistemas energéticamente eficientes</li>
                  <li>Selección de materiales eco-amigables</li>
                </ul>
              </div>
            </Col>
            
            <Col md={4} className="value-item">
              <div className="value-card">
                <div className="value-icon">
                  <img src="/images/valores/icon-difusion.png" alt="Difusión" />
                </div>
                <h3>Difusión</h3>
                <p>
                  Compartimos nuestro conocimiento y experiencia para fomentar un sector de la construcción más innovador y sostenible, contribuyendo a la formación de una comunidad mejor informada.
                </p>
                <ul className="value-list">
                  <li>Participación en eventos del sector</li>
                  <li>Publicación de contenido informativo</li>
                  <li>Asesoramiento a clientes y colaboradores</li>
                </ul>
              </div>
            </Col>
            
            <Col md={4} className="value-item">
              <div className="value-card">
                <div className="value-icon">
                  <img src="/images/valores/icon-ejemplo.png" alt="Ejemplo Social" />
                </div>
                <h3>Ejemplo Social</h3>
                <p>
                  Nos esforzamos por ser un modelo a seguir, demostrando que es posible combinar el éxito empresarial con prácticas éticas y sostenibles que generen un impacto positivo en la sociedad.
                </p>
                <ul className="value-list">
                  <li>Colaboración con iniciativas comunitarias</li>
                  <li>Prácticas laborales justas y equitativas</li>
                  <li>Contribución al desarrollo local</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Principios en Acción */}
      <section className="principles-action-section">
        <Container>
          <h2 className="section-title">Nuestros Principios en Acción</h2>
          
          <Row className="action-row">
            <Col md={6} className="action-text">
              <h3>Construcción Sostenible</h3>
              <p>
                Nuestro compromiso con la sostenibilidad se refleja en cada proyecto que emprendemos. Al utilizar contenedores marítimos como base para nuestras construcciones, damos una segunda vida a estos elementos, reduciendo significativamente la huella ambiental.
              </p>
              <p>
                Complementamos esta base con sistemas de eficiencia energética, captación de agua pluvial, y selección de materiales con bajo impacto ambiental, creando espacios que no solo son funcionales y estéticos, sino también responsables con el planeta.
              </p>
            </Col>
            <Col md={6} className="action-image">
              <img src="/images/valores/accion-sostenible.jpg" alt="Construcción Sostenible" />
            </Col>
          </Row>
          
          <Row className="action-row">
            <Col md={6} className="action-image">
              <img src="/images/valores/accion-transparencia.jpg" alt="Transparencia en Procesos" />
            </Col>
            <Col md={6} className="action-text">
              <h3>Transparencia en Cada Proceso</h3>
              <p>
                La transparencia es fundamental en nuestra relación con clientes y colaboradores. Implementamos sistemas de comunicación clara y constante, donde cada detalle del proyecto es documentado y compartido.
              </p>
              <p>
                Desde la primera reunión hasta la entrega final, nuestros clientes tienen acceso a información detallada sobre presupuestos, cronogramas, materiales y avances, permitiéndoles ser parte activa del proceso y tomar decisiones informadas.
              </p>
            </Col>
          </Row>
          
          <Row className="action-row">
            <Col md={6} className="action-text">
              <h3>Compromiso con la Comunidad</h3>
              <p>
                Nuestro valor de ejemplo social se materializa a través de diversas iniciativas comunitarias. Participamos activamente en programas educativos que promueven la construcción sostenible y colaboramos con organizaciones locales en proyectos de impacto social.
              </p>
              <p>
                Además, fomentamos prácticas laborales justas y equitativas, priorizando la contratación local y ofreciendo oportunidades de capacitación y desarrollo profesional, contribuyendo así al fortalecimiento de las comunidades donde operamos.
              </p>
            </Col>
            <Col md={6} className="action-image">
              <img src="/images/valores/accion-comunidad.jpg" alt="Compromiso con la Comunidad" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Compromiso */}
      <section className="commitment-section">
        <Container>
          <div className="commitment-content">
            <h2>Nuestro Compromiso Contigo</h2>
            <p>
              En Creativos Espacios, nos comprometemos a aplicar estos valores en cada interacción, en cada proyecto y en cada decisión que tomamos. No son simplemente palabras en una página; son los principios que guían nuestras acciones diarias y definen quiénes somos como empresa.
            </p>
            <p>
              Te invitamos a experimentar la diferencia que estos valores hacen en la calidad de nuestro servicio y en los resultados de nuestros proyectos. Juntos, podemos crear espacios que no solo cumplan con tus necesidades funcionales y estéticas, sino que también reflejen un compromiso compartido con un futuro mejor.
            </p>
            <div className="commitment-cta">
              <a href="/contacto" className="btn-primary">Contáctanos</a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Valores;