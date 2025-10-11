import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CasosExito.scss';

const CasosExito = () => {
  const [filter, setFilter] = useState('todos'); // filtro inicial: todos los proyectos

  // Casos de éxito - datos de ejemplo
  const casos = [
    {
      id: 1,
      titulo: 'Vivienda Habitacional',
      año: 2022,
      cliente: 'SACMEX',
      tipo: 'construccion',
      imagen: '/images/casos-exito/habitacional.jpg',
      descripcion: 'Esta construcción se realizó con enfoque en la sostenibilidad y el aprovechamiento de materiales reciclados, logrando un diseño estético y en armonía con el entorno natural. El proyecto incluye una estructura compacta y eficiente, con grandes ventanas para maximizar la entrada de luz natural y una terraza que integra el espacio exterior con el interior. Además, cuenta con un camino de piedra que complementa la arquitectura rústica y moderna, ofreciendo al cliente un espacio único y personalizado. Este caso de éxito refleja nuestro compromiso con la innovación y el diseño responsable, satisfaciendo las necesidades de nuestros clientes con soluciones de alta calidad y bajo impacto ambiental.'
    },
    {
      id: 2,
      titulo: 'Oficinas Corporativas',
      año: 2022,
      cliente: 'SACMEX',
      tipo: 'construccion',
      imagen: '/images/casos-exito/oficina.jpg',
      descripcion: 'La estructura, diseñada en un contenedor verde de pequeñas dimensiones, ofrece una solución práctica y duradera para entornos naturales, integrándose de manera armoniosa con el paisaje circundante. Ideal para usos como almacenamiento seguro o como oficina en zonas remotas, esta construcción cuenta con ventanas que permiten la entrada de luz natural y puertas de fácil acceso. Es un ejemplo de cómo los contenedores pueden adaptarse a diferentes necesidades, brindando eficiencia y seguridad en cualquier ubicación. Este caso de éxito refleja nuestra capacidad para crear soluciones adaptables, manteniendo siempre nuestro compromiso con la calidad, el diseño y la funcionalidad, aun en los espacios más compactos.'
    },
    {
      id: 3,
      titulo: 'Contenedor Personalizado',
      año: 2024,
      cliente: 'Peñoles',
      tipo: 'venta',
      imagen: '/images/casos-exito/contenedor.jpg',
      descripcion: 'Proyecto de venta de contenedor marítimo de 20 pies completamente personalizado según las necesidades específicas del cliente. La personalización incluyó modificaciones estructurales, instalación de sistemas eléctricos especializados y acabados de alta resistencia para su uso en entornos industriales. Este contenedor fue adaptado para funcionar como estación de control ambiental en instalaciones mineras, con sistemas de monitoreo y equipamiento específico. La entrega se realizó en tiempo récord, cumpliendo con todos los estándares de seguridad y calidad requeridos por el cliente. Este caso representa nuestra capacidad para entregar soluciones a la medida en el segmento de venta de contenedores.'
    },
    {
      id: 4,
      titulo: 'Stand Comercial Modular',
      año: 2023,
      cliente: 'Expo Construcción',
      tipo: 'renta',
      imagen: '/images/casos-exito/stand.jpg',
      descripcion: 'Diseño y renta de un sistema modular basado en contenedores para uso como stand comercial en la principal feria de construcción del país. El proyecto incluyó la adaptación completa del contenedor para crear un espacio de exhibición atractivo y funcional, con sistemas de iluminación especializados, climatización y mobiliario integrado. La solución permitió al cliente destacar entre los demás expositores gracias a su diseño innovador y sostenible. Tras el éxito del evento, el cliente decidió extender el contrato de renta para utilizarlo en otras ferias comerciales durante todo el año. Este caso ejemplifica nuestra flexibilidad para ofrecer soluciones temporales de alta calidad en nuestro servicio de renta.'
    },
    {
      id: 5,
      titulo: 'Conjunto Residencial',
      año: 2023,
      cliente: 'Desarrollo Verde',
      tipo: 'construccion',
      imagen: '/images/casos-exito/residencial.jpg',
      descripcion: 'Proyecto integral de construcción de un conjunto residencial utilizando contenedores marítimos como base estructural. El desarrollo incluyó 6 unidades habitacionales independientes, cada una con un diseño único pero manteniendo una estética cohesiva en todo el conjunto. Se implementaron soluciones sostenibles como sistemas de captación de agua pluvial, paneles solares y aislamiento térmico de alta eficiencia. El proyecto se completó en un tiempo 40% menor que una construcción tradicional equivalente, con un ahorro significativo en costos y recursos. Este caso demuestra nuestro expertise en proyectos de construcción a mayor escala, manteniendo los principios de sostenibilidad e innovación que nos caracterizan.'
    },
    {
      id: 6,
      titulo: 'Aulas Educativas Móviles',
      año: 2021,
      cliente: 'Secretaría de Educación',
      tipo: 'renta',
      imagen: '/images/casos-exito/aulas.jpg',
      descripcion: 'Desarrollo de un sistema de aulas educativas móviles basadas en contenedores marítimos para solucionar la necesidad urgente de espacios educativos en zonas afectadas por desastres naturales. Se adaptaron 10 contenedores con todas las facilidades necesarias para funcionar como espacios educativos completos: iluminación adecuada, sistemas de ventilación, mobiliario escolar, pizarrones, y conexiones para equipos electrónicos. Los contenedores fueron diseñados para ser fácilmente transportables y rápidos de instalar en diferentes ubicaciones según las necesidades cambiantes. Este proyecto demuestra el impacto social positivo que nuestras soluciones pueden tener, proporcionando espacios dignos y funcionales en situaciones donde la infraestructura tradicional no es viable.'
    }
  ];

  // Filtrar los casos según el tipo seleccionado
  const casosFiltrados = filter === 'todos' 
    ? casos 
    : casos.filter(caso => caso.tipo === filter);

  return (
    <div className="casos-exito-page">
      {/* Banner Principal */}
      <section className="banner-section">
        <div className="banner-overlay">
          <Container>
            <h1>Casos de Éxito</h1>
            <p className="banner-text">
              Proyectos que transforman ideas en realidades que superan expectativas
            </p>
          </Container>
        </div>
      </section>

      {/* Sección de Introducción */}
      <section className="intro-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="intro-text">
              <p>
                Cada proyecto es una oportunidad de transformar ideas en realidades que superan expectativas. 
                A lo largo de estos años, hemos tenido el privilegio de trabajar junto a empresas y clientes 
                visionarios que confían en nuestra capacidad de innovar y en nuestro compromiso por brindar 
                soluciones sustentables y de alta calidad.
              </p>
              <p>
                Nuestros casos de éxito son más que logros; son testimonios de nuestra dedicación y pasión por crear 
                espacios que marcan una diferencia real. Nos llena de orgullo haber sido parte de proyectos que no 
                solo resuelven necesidades inmediatas, sino que también aportan valor duradero a la comunidad y al 
                medio ambiente.
              </p>
              <p>
                Seguiremos creciendo, aprendiendo y evolucionando junto a nuestros clientes, impulsados por el deseo de 
                construir un futuro más sustentable y significativo para todos.
              </p>
            </Col>
            <Col lg={4} className="intro-image">
              <div className="intro-quote">
                <div className="quote-marks">"</div>
                <p className="quote-text">
                  Cada proyecto es una oportunidad de transformar ideas en realidades que superan expectativas.
                </p>
                <div className="author-info">
                  <div className="author-image">
                    <img src="/images/casos-exito/edith.png" alt="Edith Ramírez" />
                  </div>
                  <p className="author-name">Edith Ramírez</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección de Filtros */}
      <section className="filter-section">
        <Container>
          <div className="filter-buttons">
            <Button 
              className={filter === 'todos' ? 'active' : ''} 
              onClick={() => setFilter('todos')}
            >
              Todos los proyectos
            </Button>
            <Button 
              className={filter === 'construccion' ? 'active' : ''} 
              onClick={() => setFilter('construccion')}
            >
              Construcción
            </Button>
            <Button 
              className={filter === 'venta' ? 'active' : ''} 
              onClick={() => setFilter('venta')}
            >
              Venta
            </Button>
            <Button 
              className={filter === 'renta' ? 'active' : ''} 
              onClick={() => setFilter('renta')}
            >
              Renta
            </Button>
          </div>
        </Container>
      </section>

      {/* Sección de Casos de Éxito */}
      <section className="casos-section">
        <Container>
          <Row>
            {casosFiltrados.map(caso => (
              <Col md={6} lg={4} key={caso.id} className="caso-item">
                <div className="caso-card">
                  <div className="caso-image">
                    <img src={caso.imagen} alt={caso.titulo} />
                    <div className="caso-badge">
                      {caso.tipo === 'construccion' && 'CONSTRUCCIÓN'}
                      {caso.tipo === 'venta' && 'VENTA'}
                      {caso.tipo === 'renta' && 'RENTA'}
                    </div>
                  </div>
                  <div className="caso-info">
                    <h3>{caso.titulo}</h3>
                    <div className="caso-details">
                      <p><strong>Tipo de proyecto:</strong> {caso.titulo}</p>
                      <p><strong>Año:</strong> {caso.año}</p>
                      <p><strong>Cliente:</strong> {caso.cliente}</p>
                    </div>
                    <p className="caso-description">
                      {caso.descripcion.length > 150 
                        ? `${caso.descripcion.substring(0, 150)}...` 
                        : caso.descripcion
                      }
                    </p>
                    <div className="caso-button">
                      <Button>Ver detalles</Button>
                    </div>
                  </div>
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
                <div className="quote-marks">"</div>
                <p className="testimonial-text">
                  La calidad del trabajo y el profesionalismo de Creativos Espacios superaron todas nuestras expectativas. El contenedor adaptado ha mejorado significativamente nuestras operaciones.
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Juan Carlos Martínez</div>
                  <div className="author-company">Director de Operaciones, Peñoles</div>
                </div>
              </div>
            </Col>
            
            <Col md={4} className="testimonial-item">
              <div className="testimonial-card">
                <div className="quote-marks">"</div>
                <p className="testimonial-text">
                  La rapidez y eficiencia con la que transformaron nuestras ideas en un espacio funcional y estético nos dejó impresionados. Sin duda volveremos a trabajar con ellos.
                </p>
                <div className="testimonial-author">
                  <div className="author-name">María Fernanda López</div>
                  <div className="author-company">Gerente de Proyectos, SACMEX</div>
                </div>
              </div>
            </Col>
            
            <Col md={4} className="testimonial-item">
              <div className="testimonial-card">
                <div className="quote-marks">"</div>
                <p className="testimonial-text">
                  La flexibilidad de la solución de renta nos permitió adaptar rápidamente nuestros espacios educativos a las necesidades emergentes tras la contingencia.
                </p>
                <div className="testimonial-author">
                  <div className="author-name">Roberto Sánchez</div>
                  <div className="author-company">Coordinador, Secretaría de Educación</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sección CTA */}
      <section className="cta-section">
        <Container>
          <div className="cta-content">
            <h2>¿Listo para Crear tu Propio Caso de Éxito?</h2>
            <p>
              Permítenos ayudarte a transformar tus ideas en proyectos exitosos que superen expectativas.
              Nuestro equipo está listo para asesorarte y desarrollar la solución perfecta para tus necesidades.
            </p>
            <Button className="cta-button" href="/contacto">
              Contacta con nosotros
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CasosExito;