import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO, seoConfig } from '../../components/SEO';
import {
  FaWarehouse,
  FaSnowflake,
  FaBoxOpen,
  FaDoorOpen,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';
import { FadeIn, SlideIn, ScaleIn } from '../../components/Animations'; // FASE 10
import './PresentacionEmpresarial.scss';

const PresentacionEmpresarial = () => {
  const vistazo = [
    { label: 'Años de Experiencia', value: '14+' },
    { label: 'Tamaños Disponibles', value: '10, 20, 40 pies' },
    { label: 'Cobertura', value: 'Nacional' },
    { label: 'Proyectos Completados', value: '500+' },
    { label: 'Tipos de Contenedores', value: '5+' },
    { label: 'Servicios', value: 'Venta, Renta, Transformación' },
  ];

  const contenedores = [
    {
      tipo: 'Contenedor Dry',
      icon: FaWarehouse,
      precio20: '$48,000 MXN',
      precio40: '$75,000 MXN',
      caracteristicas: 'Hermético, resistente, ideal para almacenaje general',
      usos: 'Bodega, almacén, archivo'
    },
    {
      tipo: 'Contenedor Reefer',
      icon: FaSnowflake,
      precio20: '$95,000 MXN',
      precio40: '$145,000 MXN',
      caracteristicas: 'Refrigerado, control de temperatura -25°C a +25°C',
      usos: 'Productos perecederos, farmacéuticos'
    },
    {
      tipo: 'Contenedor Open Top',
      icon: FaBoxOpen,
      precio20: '$55,000 MXN',
      precio40: '$85,000 MXN',
      caracteristicas: 'Techo abierto, carga superior',
      usos: 'Mercancía de gran altura, maquinaria'
    },
    {
      tipo: 'Contenedor Double Door',
      icon: FaDoorOpen,
      precio20: '$52,000 MXN',
      precio40: '$80,000 MXN',
      caracteristicas: 'Doble puerta en ambos extremos',
      usos: 'Carga/descarga rápida, acceso dual'
    },
    {
      tipo: 'Contenedor Open Side',
      icon: FaDoorOpen,
      precio20: '$58,000 MXN',
      precio40: '$88,000 MXN',
      caracteristicas: 'Apertura lateral completa',
      usos: 'Carga voluminosa, fácil acceso'
    }
  ];

  const aplicaciones = [
    {
      titulo: 'Oficinas',
      descripcion: 'Espacios de trabajo modernos y funcionales con climatización, instalación eléctrica completa, acabados profesionales, ventanas de aluminio y mobiliario personalizado.',
      caracteristicas: ['Climatización', 'Instalación eléctrica', 'Ventanas de aluminio', 'Acabados de lujo']
    },
    {
      titulo: 'Casas Habitación',
      descripcion: 'Viviendas sustentables, modernas y económicas con baño completo, cocina equipada, recámaras personalizables y aislamiento térmico y acústico superior.',
      caracteristicas: ['Baño completo', 'Cocina equipada', 'Aislamiento térmico', 'Diseño moderno']
    },
    {
      titulo: 'Locales Comerciales',
      descripcion: 'Espacios versátiles para cafeterías, restaurantes, tiendas y boutiques con fachada personalizable, área de atención y zona de almacén integrada.',
      caracteristicas: ['Fachada personalizada', 'Área de ventas', 'Zona de almacén', 'Iluminación comercial']
    },
    {
      titulo: 'Bodegas y Almacenamiento',
      descripcion: 'Soluciones de almacenaje seguras y resistentes con estructura reforzada, cerraduras de alta seguridad, ventilación adecuada y protección garantizada.',
      caracteristicas: ['Estructura reforzada', 'Seguridad máxima', 'Ventilación', 'Resistente al clima']
    }
  ];

  const servicios = [
    'Venta de contenedores nuevos y seminuevos',
    'Renta con planes flexibles mensuales y anuales',
    'Transformación y adaptación personalizada',
    'Instalación eléctrica y climatización',
    'Acabados interiores y exteriores',
    'Transporte y entrega en toda la República',
    'Mantenimiento preventivo y correctivo',
    'Asesoría técnica especializada'
  ];

  const patios = [
    { ciudad: 'Manzanillo', estado: 'Colima', region: 'Pacífico' },
    { ciudad: 'Progreso', estado: 'Yucatán', region: 'Península' },
    { ciudad: 'Altamira', estado: 'Tamaulipas', region: 'Golfo' },
    { ciudad: 'Veracruz', estado: 'Veracruz', region: 'Golfo' }
  ];

  const valores = [
    {
      año: '2018',
      titulo: 'Transparencia',
      descripcion: 'Precios claros, procesos transparentes. Sin costos ocultos ni sorpresas en nuestras cotizaciones.'
    },
    {
      año: '2019',
      titulo: 'Compromiso',
      descripcion: 'Cumplimiento de plazos de entrega y estándares de calidad garantizados en cada proyecto.'
    },
    {
      año: '2020',
      titulo: 'Sostenibilidad',
      descripcion: 'Construcciones sustentables que reducen el impacto ambiental mediante el reciclaje de contenedores.'
    }
  ];

  return (
    <div className="presentacion-page">
      <SEO {...seoConfig.presentacionEmpresarial} />

      {/* PORTADA - Hero Section con Logo */}
      <section className="presentacion-portada">
        <div className="presentacion-portada__stripes"></div>
        <Container>
          <FadeIn duration={1.2} delay={0.3}>
            <div className="presentacion-portada__content">
              <h1 className="presentacion-portada__logo">CREATIVOS ESPACIOS</h1>
              <p className="presentacion-portada__tagline">Transformando contenedores en espacios extraordinarios</p>
              <p className="presentacion-portada__subtitle">Presentación Empresarial 2025</p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* VISTAZO - Overview Grid */}
      <section className="presentacion-vistazo">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="presentacion-vistazo__title">Un Vistazo a Nuestros Servicios</h2>
          </FadeIn>
          <div className="presentacion-vistazo__grid">
            {vistazo.map((item, index) => (
              <ScaleIn key={index} delay={0.3 + (index * 0.1)} initialScale={0.85}>
                <div className="presentacion-vistazo__item">
                  <div className="presentacion-vistazo__value">{item.value}</div>
                  <div className="presentacion-vistazo__label">{item.label}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTENEDORES - 5 Tipos con Precios */}
      <section className="presentacion-contenedores">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="presentacion-contenedores__title">Tipos de Contenedores Disponibles</h2>
          </FadeIn>
          <Row>
            {contenedores.map((contenedor, index) => (
              <Col md={6} lg={4} key={index} className="mb-4">
                <SlideIn direction="up" delay={0.2 + (index * 0.1)} distance={40}>
                  <div className="presentacion-contenedor-card">
                    <div className="presentacion-contenedor-card__icon">
                      <contenedor.icon />
                    </div>
                    <h3 className="presentacion-contenedor-card__tipo">{contenedor.tipo}</h3>
                    <div className="presentacion-contenedor-card__precios">
                      <div className="presentacion-contenedor-card__precio">
                        <span className="size">20 pies</span>
                        <span className="amount">{contenedor.precio20}</span>
                      </div>
                      <div className="presentacion-contenedor-card__precio">
                        <span className="size">40 pies</span>
                        <span className="amount">{contenedor.precio40}</span>
                      </div>
                    </div>
                    <p className="presentacion-contenedor-card__caracteristicas">{contenedor.caracteristicas}</p>
                    <p className="presentacion-contenedor-card__usos"><strong>Usos:</strong> {contenedor.usos}</p>
                  </div>
                </SlideIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* APLICACIONES - 4 Casos de Uso con Decoración Verde */}
      <section className="presentacion-aplicaciones">
        <div className="presentacion-aplicaciones__decoration-triangles"></div>
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="presentacion-aplicaciones__title">Aplicaciones y Casos de Uso</h2>
          </FadeIn>
          <Row>
            {aplicaciones.map((app, index) => (
              <Col md={6} key={index} className="mb-4">
                <SlideIn direction="left" delay={0.3 + (index * 0.15)} distance={50}>
                  <div className="presentacion-aplicacion-card">
                    <h3 className="presentacion-aplicacion-card__titulo">{app.titulo}</h3>
                    <p className="presentacion-aplicacion-card__descripcion">{app.descripcion}</p>
                    <ul className="presentacion-aplicacion-card__caracteristicas">
                      {app.caracteristicas.map((carac, idx) => (
                        <li key={idx}>✓ {carac}</li>
                      ))}
                    </ul>
                  </div>
                </SlideIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SERVICIOS INTEGRALES - Con Decoración Naranja */}
      <section className="presentacion-servicios">
        <div className="presentacion-servicios__decoration-dots"></div>
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="presentacion-servicios__title">Servicios Integrales</h2>
            <p className="presentacion-servicios__subtitle">
              Ofrecemos soluciones completas para tu proyecto, desde la compra hasta la instalación final
            </p>
          </FadeIn>
          <Row>
            {servicios.map((servicio, index) => (
              <Col md={6} lg={3} key={index} className="mb-3">
                <SlideIn direction="up" delay={0.3 + (index * 0.08)} distance={30}>
                  <div className="presentacion-servicio-item">
                    <span className="presentacion-servicio-item__bullet">●</span>
                    <span className="presentacion-servicio-item__text">{servicio}</span>
                  </div>
                </SlideIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PATIOS - Mapa de Ubicaciones */}
      <section className="presentacion-patios">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="presentacion-patios__title">Nuestros Patios de Contenedores</h2>
            <p className="presentacion-patios__subtitle">Presencia estratégica en los principales puertos de México</p>
          </FadeIn>
          <Row>
            {patios.map((patio, index) => (
              <Col md={6} lg={3} key={index} className="mb-4">
                <ScaleIn delay={0.3 + (index * 0.15)} initialScale={0.85}>
                  <div className="presentacion-patio-card">
                    <div className="presentacion-patio-card__icon">
                      <FaMapMarkerAlt />
                    </div>
                    <h3 className="presentacion-patio-card__ciudad">{patio.ciudad}</h3>
                    <p className="presentacion-patio-card__estado">{patio.estado}</p>
                    <p className="presentacion-patio-card__region">{patio.region}</p>
                  </div>
                </ScaleIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* NOSOTROS - Misión y Visión */}
      <section className="presentacion-nosotros">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="presentacion-nosotros__title">Nosotros</h2>
          </FadeIn>
          <Row>
            <Col md={6} className="mb-4">
              <SlideIn direction="left" delay={0.3} distance={50}>
                <div className="presentacion-nosotros-card">
                  <h3 className="presentacion-nosotros-card__titulo">Misión</h3>
                  <p className="presentacion-nosotros-card__texto">
                    Proporcionar soluciones innovadoras y sustentables mediante la transformación de contenedores marítimos,
                    ofreciendo productos y servicios de calidad que superen las expectativas de nuestros clientes,
                    contribuyendo al desarrollo económico y cuidado del medio ambiente.
                  </p>
                </div>
              </SlideIn>
            </Col>
            <Col md={6} className="mb-4">
              <SlideIn direction="right" delay={0.3} distance={50}>
                <div className="presentacion-nosotros-card">
                  <h3 className="presentacion-nosotros-card__titulo">Visión</h3>
                  <p className="presentacion-nosotros-card__texto">
                    Ser la empresa líder en México en la transformación de contenedores marítimos,
                    reconocida por nuestra innovación, calidad y compromiso con la sustentabilidad,
                    expandiendo nuestros servicios a nivel nacional e internacional.
                  </p>
                </div>
              </SlideIn>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ECONOMÍA Y RAPIDEZ - Quote Format */}
      <section className="presentacion-quote">
        <Container>
          <FadeIn delay={0.3} duration={0.8}>
            <div className="presentacion-quote__box">
              <div className="presentacion-quote__marks">"</div>
              <h3 className="presentacion-quote__title">Economía y Rapidez</h3>
              <p className="presentacion-quote__text">
                Ahorra hasta <strong>40% en costos de construcción</strong> con tiempos de entrega de <strong>30-45 días</strong>
                versus 6-12 meses de construcción tradicional. Soluciones eficientes que se adaptan a tu presupuesto y calendario.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* VERSATILIDAD - Quote Format */}
      <section className="presentacion-quote presentacion-quote--alt">
        <Container>
          <FadeIn delay={0.3} duration={0.8}>
            <div className="presentacion-quote__box">
              <div className="presentacion-quote__marks">"</div>
              <h3 className="presentacion-quote__title">Versatilidad</h3>
              <p className="presentacion-quote__text">
                Diseños adaptables a cualquier necesidad: oficinas, viviendas, comercios, bodegas y más.
                <strong> Tu imaginación es el límite.</strong> Cada proyecto es único y personalizado según tus requerimientos específicos.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* VALORES - Timeline 2018-2020 */}
      <section className="presentacion-valores">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="presentacion-valores__title">Nuestros Valores</h2>
          </FadeIn>
          <div className="presentacion-valores__timeline">
            {valores.map((valor, index) => (
              <SlideIn key={index} direction="up" delay={0.3 + (index * 0.2)} distance={40}>
                <div className="presentacion-valor-item">
                  <div className="presentacion-valor-item__year">{valor.año}</div>
                  <div className="presentacion-valor-item__content">
                    <h3 className="presentacion-valor-item__titulo">{valor.titulo}</h3>
                    <p className="presentacion-valor-item__descripcion">{valor.descripcion}</p>
                  </div>
                  {index < valores.length - 1 && <div className="presentacion-valor-item__line"></div>}
                </div>
              </SlideIn>
            ))}
          </div>
          <div className="presentacion-valores__additional">
            <Row>
              <Col md={4} className="mb-3">
                <ScaleIn delay={0.9} initialScale={0.9}>
                  <div className="presentacion-valor-extra">
                    <h4>Responsabilidad</h4>
                    <p>Cuidado del medio ambiente mediante el reciclaje de contenedores</p>
                  </div>
                </ScaleIn>
              </Col>
              <Col md={4} className="mb-3">
                <ScaleIn delay={1.0} initialScale={0.9}>
                  <div className="presentacion-valor-extra">
                    <h4>Difusión</h4>
                    <p>Promovemos el conocimiento sobre usos innovadores de contenedores</p>
                  </div>
                </ScaleIn>
              </Col>
              <Col md={4} className="mb-3">
                <ScaleIn delay={1.1} initialScale={0.9}>
                  <div className="presentacion-valor-extra">
                    <h4>Ejemplo Social</h4>
                    <p>Generamos empleos y apoyamos el desarrollo de comunidades</p>
                  </div>
                </ScaleIn>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* CONTACTO - Información Completa */}
      <section className="presentacion-contacto">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="presentacion-contacto__title">Contáctanos</h2>
            <p className="presentacion-contacto__subtitle">Estamos listos para hacer realidad tu proyecto</p>
          </FadeIn>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <ScaleIn delay={0.3} initialScale={0.9}>
                <div className="presentacion-contacto-card">
                  <div className="presentacion-contacto-card__icon">
                    <FaPhone />
                  </div>
                  <h3 className="presentacion-contacto-card__titulo">Teléfono</h3>
                  <p className="presentacion-contacto-card__info">55-26-08-88-86</p>
                </div>
              </ScaleIn>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <ScaleIn delay={0.4} initialScale={0.9}>
                <div className="presentacion-contacto-card">
                  <div className="presentacion-contacto-card__icon">
                    <FaWhatsapp />
                  </div>
                  <h3 className="presentacion-contacto-card__titulo">WhatsApp</h3>
                  <p className="presentacion-contacto-card__info">55-54-26-99-41</p>
                </div>
              </ScaleIn>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <ScaleIn delay={0.5} initialScale={0.9}>
                <div className="presentacion-contacto-card">
                  <div className="presentacion-contacto-card__icon">
                    <FaEnvelope />
                  </div>
                  <h3 className="presentacion-contacto-card__titulo">Email</h3>
                  <p className="presentacion-contacto-card__info">ventas@creativosespacios.mx</p>
                </div>
              </ScaleIn>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <ScaleIn delay={0.6} initialScale={0.9}>
                <div className="presentacion-contacto-card">
                  <div className="presentacion-contacto-card__icon">
                    <FaClock />
                  </div>
                  <h3 className="presentacion-contacto-card__titulo">Horario</h3>
                  <p className="presentacion-contacto-card__info">Lunes a Viernes<br/>9:00 AM - 6:00 PM</p>
                </div>
              </ScaleIn>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={12}>
              <div className="presentacion-contacto-ubicacion">
                <div className="presentacion-contacto-ubicacion__icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="presentacion-contacto-ubicacion__info">
                  <h3>Oficinas Centrales</h3>
                  <p>
                    Av. Del Árbol 104, Colonia Lomas de San Lorenzo<br/>
                    C.P. 09780, Alcaldía Iztapalapa<br/>
                    Ciudad de México, México
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="text-center">
              <ScaleIn delay={0.8} initialScale={0.95}>
                <Link to="/contacto" className="presentacion-contacto__cta">
                  Solicitar Cotización
                </Link>
              </ScaleIn>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PresentacionEmpresarial;
