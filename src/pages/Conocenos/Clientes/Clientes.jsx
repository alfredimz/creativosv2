import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Conocenos.scss';

const Conocenos = () => {
  return (
    <div className="conocenos-page">
      {/* Banner Principal */}
      <section className="banner-section">
        <div className="banner-overlay">
          <Container>
            <h1>¿Quiénes somos?</h1>
            <p className="banner-text">
              Desde nuestros inicios en 2010, hemos demostrado que la construcción sostenible es una
              realidad. Nuestros proyectos de reconversión de contenedores marítimos ofrecen una
              reducción significativa en el consumo de energía y materiales, además de generar menos
              residuos. ¡Una elección inteligente para un futuro más sostenible!
            </p>
          </Container>
        </div>
      </section>

      {/* Sección de Valores */}
      <section className="valores-section">
        <Container>
          <Row>
            <Col md={4} className="valor-card">
              <div className="valor-content">
                <h3>Estamos aquí para ayudarte</h3>
                <p>
                  Sabemos que nuestros clientes buscan más que un servicio:
                  necesitan un aliado experto, amigable y profesional. En
                  Creativos Espacios, encontrarás ese apoyo y un equipo
                  dedicado, comprometido contigo desde el primer momento.
                </p>
              </div>
            </Col>
            <Col md={4} className="valor-card">
              <div className="valor-content">
                <h3>Somos conscientes</h3>
                <p>
                  Hace más de 14 años comprendimos que el sector de la
                  construcción es responsable de consumir aproximadamente el
                  50% de los recursos naturales, el 40% de la energía y el 50%
                  de los residuos generados. Esta conciencia impulsa cada uno
                  de nuestros proyectos hacia un enfoque sostenible.
                </p>
              </div>
            </Col>
            <Col md={4} className="valor-card">
              <div className="valor-content">
                <h3>Amamos al planeta</h3>
                <p>
                  El planeta Tierra es nuestro hogar compartido y el de millones
                  de formas de vida. En Creativos Espacios, nos
                  comprometemos con su protección, desarrollando ideas de
                  valor que aportan al cuidado del medio ambiente.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Misión y Visión */}
      <section className="mision-vision-section">
        <Container>
          <Row>
            <Col md={6} className="mision-col">
              <div className="mision-content">
                <h2>Misión</h2>
                <p>
                  Ser tu socio estratégico en la creación de espacios y experiencias únicas, diseñadas a
                  medida y enfocadas en la sostenibilidad. Nuestro compromiso es superar tus expectativas y
                  construir un futuro mejor juntos.
                </p>
              </div>
            </Col>
            <Col md={6} className="vision-col">
              <div className="vision-content">
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

      {/* Sección de Historia */}
      <section className="historia-section">
        <Container>
          <h2 className="section-title">Historia</h2>
          <div className="historia-content">
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

          {/* Línea de tiempo */}
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <img src="/images/logo-2010.png" alt="Logo 2010" />
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <img src="/images/logo-2015.png" alt="Logo 2015" />
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <img src="/images/logo-2020.png" alt="Logo 2020" />
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <img src="/images/logo-2024.png" alt="Logo 2024" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Sección de Valores */}
      <section className="valores-corporativos-section">
        <Container>
          <h2 className="section-title">Valores</h2>
          <div className="valores-descripcion">
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

          <Row className="valores-lista">
            <Col md={6}>
              <ul>
                <li>Transparencia</li>
                <li>Compromiso</li>
                <li>Responsabilidad</li>
              </ul>
            </Col>
            <Col md={6}>
              <ul>
                <li>Sostenibilidad</li>
                <li>Difusión</li>
                <li>Ejemplo social</li>
              </ul>
            </Col>
          </Row>
          <div className="valores-imagen">
            <img src="/images/valores-contenedor.png" alt="Valores Creativos Espacios" />
          </div>
        </Container>
      </section>

      {/* Sección de Equipo */}
      <section className="equipo-section">
        <Container>
          <h2 className="section-title">Nuestro equipo</h2>
          <div className="equipo-descripcion">
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

          <Row className="team-members">
            <Col md={4} className="team-member">
              <div className="member-avatar">
                <img src="/images/team/edith.png" alt="Edith Ramírez" />
              </div>
              <h4>Edith Ramírez</h4>
              <p className="member-email">edith@creativosespacios.mx</p>
              <p className="member-role">Experta en recursos, facturación y cobranza</p>
            </Col>
            <Col md={4} className="team-member">
              <div className="member-avatar">
                <img src="/images/team/alejandra.png" alt="Alejandra Ramírez" />
              </div>
              <h4>Alejandra Ramírez</h4>
              <p className="member-email">alejandra@creativosespacios.mx</p>
              <p className="member-role">Experta en atención al cliente, logística y marketing</p>
            </Col>
            <Col md={4} className="team-member">
              <div className="member-avatar">
                <img src="/images/team/arturo.png" alt="Arturo Ramírez" />
              </div>
              <h4>Arturo Ramírez</h4>
              <p className="member-email">arturo@creativosespacios.mx</p>
              <p className="member-role">Experto en proyectos y arquitectura</p>
            </Col>
          </Row>

          <Row className="team-members">
            <Col md={4} className="team-member">
              <div className="member-avatar">
                <img src="/images/team/hugo.png" alt="Hugo Estrada" />
              </div>
              <h4>Hugo Estrada</h4>
              <p className="member-email">hugo@creativosespacios.mx</p>
              <p className="member-role">Proyectos</p>
            </Col>
            <Col md={4} className="team-member">
              <div className="member-avatar">
                <img src="/images/team/jesus.png" alt="Jesús Mondragón" />
              </div>
              <h4>Jesús Mondragón</h4>
              <p className="member-email">jesus@creativosespacios.mx</p>
              <p className="member-role">Proyectos</p>
            </Col>
            <Col md={4} className="team-member">
              <div className="member-avatar">
                <img src="/images/team/selene.png" alt="Selene" />
              </div>
              <h4>Selene</h4>
              <p className="member-email">ventas@creativosespacios.mx</p>
              <p className="member-email">ventas@creativosespacios.mx</p>
            </Col>
          </Row>

          <div className="personal-adicional">
            <div className="member-avatar">
              <img src="/images/team/personal.png" alt="Personal de confianza" />
            </div>
            <h4>Personal de confianza</h4>
            <p className="member-email">proyectos@creativosespacios.mx</p>
            <p className="member-role">Profesionales talentosos en sus respectivas áreas</p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Conocenos;