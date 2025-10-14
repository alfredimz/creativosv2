import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PresentacionEmpresarial.scss';

const PresentacionEmpresarial = () => {
  const overview = [
    { titulo: 'Servicios', descripcion: 'Venta, renta y transformación' },
    { titulo: '14 años', descripcion: 'De experiencia' },
    { titulo: 'Tamaños', descripcion: '20 y 40 pies disponibles' },
    { titulo: 'Entrega', descripcion: 'En toda la República' },
    { titulo: 'Diseños', descripcion: 'Personalizados' },
    { titulo: 'Precios', descripcion: 'Competitivos y transparentes' }
  ];

  const contenedores = [
    {
      tipo: 'Contenedor Dry',
      precio20: '$48,000',
      precio40: '$75,000',
      caracteristicas: 'Hermético, resistente, ideal para almacenaje'
    },
    {
      tipo: 'Contenedor Reefer',
      precio20: '$95,000',
      precio40: '$145,000',
      caracteristicas: 'Refrigerado, control de temperatura, productos perecederos'
    },
    {
      tipo: 'Contenedor Open Top',
      precio20: '$55,000',
      precio40: '$85,000',
      caracteristicas: 'Techo abierto, carga superior, mercancía de gran altura'
    },
    {
      tipo: 'Contenedor Double Door',
      precio20: '$52,000',
      precio40: '$80,000',
      caracteristicas: 'Doble puerta, acceso en ambos lados, carga/descarga rápida'
    },
    {
      tipo: 'Contenedor Open Side',
      precio20: '$58,000',
      precio40: '$88,000',
      caracteristicas: 'Apertura lateral, fácil acceso, carga voluminosa'
    }
  ];

  const servicios = [
    { titulo: 'Venta de Contenedores', descripcion: 'Nuevos y seminuevos, en excelentes condiciones' },
    { titulo: 'Renta de Contenedores', descripcion: 'Planes flexibles mensuales y anuales' },
    { titulo: 'Transformación y Adaptación', descripcion: 'Diseños personalizados a tu medida' },
    { titulo: 'Mantenimiento', descripcion: 'Servicio de mantenimiento preventivo' },
    { titulo: 'Transporte', descripcion: 'Entrega en toda la República Mexicana' },
    { titulo: 'Asesoría', descripcion: 'Consultoría especializada para tu proyecto' }
  ];

  const aplicaciones = [
    {
      titulo: 'Oficinas',
      descripcion: 'Convierte contenedores en espacios de trabajo modernos y funcionales. Climatización, instalación eléctrica, acabados profesionales y ventanas de aluminio.'
    },
    {
      titulo: 'Casas Habitación',
      descripcion: 'Viviendas sustentables, modernas y económicas. Baño completo, cocina equipada, recámaras personalizables y aislamiento térmico y acústico.'
    },
    {
      titulo: 'Locales Comerciales',
      descripcion: 'Espacios versátiles para cafeterías, restaurantes, tiendas y boutiques. Fachada personalizable, área de atención al cliente y zona de almacén.'
    },
    {
      titulo: 'Bodegas y Almacenamiento',
      descripcion: 'Soluciones de almacenaje seguras y resistentes. Estructura reforzada, cerraduras de seguridad, ventilación adecuada y protección garantizada.'
    }
  ];

  return (
    <div className="presentacion-empresarial-page">
      {/* Hero Section */}
      <section className="presentacion-hero">
        <Container>
          <h1 className="presentacion-hero__title">Presentación Empresarial</h1>
          <div className="presentacion-hero__description">
            <p>
              Somos una empresa mexicana dedicada a la venta, renta y transformación de contenedores marítimos,
              con 14 años de experiencia ofreciendo soluciones innovadoras y sustentables.
            </p>
            <p>
              Transformamos contenedores en espacios funcionales que superan las expectativas de nuestros clientes,
              contribuyendo al desarrollo económico y al cuidado del medio ambiente mediante construcciones rápidas,
              económicas y de alta calidad.
            </p>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="presentacion-overview">
        <Container>
          <div className="presentacion-overview__grid">
            {overview.map((item, index) => (
              <div key={index} className="presentacion-overview__item">
                <h3 className="presentacion-overview__title">{item.titulo}</h3>
                <p className="presentacion-overview__text">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tipos de Contenedores Section */}
      <section className="presentacion-contenedores">
        <Container>
          <h2 className="presentacion-contenedores__title">Tipos de Contenedores Disponibles</h2>
          <Row>
            {contenedores.map((contenedor, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <div className="presentacion-contenedores__card">
                  <h3 className="presentacion-contenedores__card-title">{contenedor.tipo}</h3>
                  <div className="presentacion-contenedores__card-text">
                    <p><strong>20 pies:</strong> {contenedor.precio20}</p>
                    <p><strong>40 pies:</strong> {contenedor.precio40}</p>
                    <p>{contenedor.caracteristicas}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Aplicaciones Section */}
      <section className="presentacion-contenedores">
        <Container>
          <h2 className="presentacion-contenedores__title">Aplicaciones y Casos de Uso</h2>
          <Row>
            {aplicaciones.map((app, index) => (
              <Col md={6} key={index} className="mb-4">
                <div className="presentacion-contenedores__card">
                  <h3 className="presentacion-contenedores__card-title">{app.titulo}</h3>
                  <p className="presentacion-contenedores__card-text">{app.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Servicios Integrales Section */}
      <section className="presentacion-servicios">
        <Container>
          <h2 className="presentacion-servicios__title">Servicios Integrales</h2>
          <p className="presentacion-hero__description" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Ofrecemos soluciones completas para tu proyecto, desde la compra hasta la instalación final
          </p>
          <Row>
            {servicios.map((servicio, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <div className="presentacion-servicios__item">
                  <h3 className="presentacion-servicios__item-title">{servicio.titulo}</h3>
                  <p className="presentacion-servicios__item-text">{servicio.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Patios Section */}
      <section className="presentacion-contenedores">
        <Container>
          <h2 className="presentacion-contenedores__title">Nuestros Patios de Contenedores</h2>
          <Row>
            <Col md={6} lg={3} className="mb-3">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Manzanillo, Colima</h3>
                <p className="presentacion-contenedores__card-text">Puerto del Pacífico</p>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-3">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Progreso, Yucatán</h3>
                <p className="presentacion-contenedores__card-text">Península de Yucatán</p>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-3">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Altamira, Tamaulipas</h3>
                <p className="presentacion-contenedores__card-text">Golfo de México</p>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-3">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Puerto de Veracruz</h3>
                <p className="presentacion-contenedores__card-text">Costa del Golfo</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Misión y Visión Section */}
      <section className="presentacion-contenedores">
        <Container>
          <h2 className="presentacion-contenedores__title">Nosotros</h2>
          <Row>
            <Col md={6} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Misión</h3>
                <p className="presentacion-contenedores__card-text">
                  Proporcionar soluciones innovadoras y sustentables mediante la transformación de contenedores marítimos,
                  ofreciendo productos y servicios de calidad que superen las expectativas de nuestros clientes,
                  contribuyendo al desarrollo económico y cuidado del medio ambiente.
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Visión</h3>
                <p className="presentacion-contenedores__card-text">
                  Ser la empresa líder en México en la transformación de contenedores marítimos,
                  reconocida por nuestra innovación, calidad y compromiso con la sustentabilidad,
                  expandiendo nuestros servicios a nivel nacional e internacional.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Beneficios Section */}
      <section className="presentacion-contenedores">
        <Container>
          <h2 className="presentacion-contenedores__title">¿Por Qué Elegir Contenedores?</h2>
          <Row>
            <Col md={6} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Economía y Rapidez</h3>
                <p className="presentacion-contenedores__card-text">
                  Ahorra hasta 40% en costos de construcción con tiempos de entrega de 30-45 días vs 6-12 meses de construcción tradicional.
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Versatilidad</h3>
                <p className="presentacion-contenedores__card-text">
                  Diseños adaptables a cualquier necesidad: oficinas, viviendas, comercios, bodegas y más. Tu imaginación es el límite.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Valores Section */}
      <section className="presentacion-contenedores">
        <Container>
          <h2 className="presentacion-contenedores__title">Nuestros Valores</h2>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Transparencia</h3>
                <p className="presentacion-contenedores__card-text">
                  Precios claros, procesos transparentes. Sin costos ocultos ni sorpresas.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Compromiso</h3>
                <p className="presentacion-contenedores__card-text">
                  Cumplimiento de plazos de entrega y estándares de calidad garantizados.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Responsabilidad</h3>
                <p className="presentacion-contenedores__card-text">
                  Cuidado del medio ambiente mediante el reciclaje de contenedores.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Sostenibilidad</h3>
                <p className="presentacion-contenedores__card-text">
                  Construcciones sustentables que reducen el impacto ambiental.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Difusión</h3>
                <p className="presentacion-contenedores__card-text">
                  Promovemos el conocimiento sobre usos innovadores de contenedores.
                </p>
              </div>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Ejemplo Social</h3>
                <p className="presentacion-contenedores__card-text">
                  Generamos empleos y apoyamos el desarrollo de comunidades.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contacto Section */}
      <section className="presentacion-contenedores">
        <Container>
          <h2 className="presentacion-contenedores__title">Contáctanos</h2>
          <Row>
            <Col md={6} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Teléfonos</h3>
                <p className="presentacion-contenedores__card-text">
                  <strong>WhatsApp:</strong> 55-54-26-99-41<br/>
                  <strong>Teléfono:</strong> 55-26-08-88-86
                </p>
                <h3 className="presentacion-contenedores__card-title" style={{ marginTop: '16px' }}>Correo Electrónico</h3>
                <p className="presentacion-contenedores__card-text">
                  ventas@creativosespacios.mx
                </p>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="presentacion-contenedores__card">
                <h3 className="presentacion-contenedores__card-title">Ubicación</h3>
                <p className="presentacion-contenedores__card-text">
                  Av. Del Árbol 104<br/>
                  Colonia Lomas de San Lorenzo<br/>
                  C.P. 09780<br/>
                  Alcaldía Iztapalapa<br/>
                  Ciudad de México, México
                </p>
                <h3 className="presentacion-contenedores__card-title" style={{ marginTop: '16px' }}>Horario</h3>
                <p className="presentacion-contenedores__card-text">
                  Lunes a viernes<br/>
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PresentacionEmpresarial;
