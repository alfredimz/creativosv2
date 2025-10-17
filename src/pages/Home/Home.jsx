import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlus, FaGraduationCap, FaBriefcase, FaCog, FaCheckCircle, FaClipboardList, FaMapMarkerAlt, FaFileAlt, FaMoneyBillWave, FaPhone, FaEnvelope } from 'react-icons/fa'; // FASE 4: Iconos adicionales
import HeroSlider from '../../components/HeroSlider';
import { ServiceCard, ServiceFeature, AcabadoCard, ProductoEstrellaCard } from '../../components/common';
import { SEO, seoConfig } from '../../components/SEO';
import { trackCTAClick } from '../../utils/analytics';
import { getUserLevel, setUserLevel, USER_LEVELS } from '../../utils/userLevel';
import { FadeIn, SlideIn, ScaleIn } from '../../components/Animations'; // FASE 10
import rentaContenedores from '../../assets/renta-contenedores.png';
import ventaContenedores from '../../assets/venta-contenedores.png';
import construccionContenedores from '../../assets/contruccion-contenedores.png';
import './Home.scss';

// Image URLs from Figma (these will need to be downloaded to public/images)
const FIGMA_IMAGES = {
  hero: 'https://www.figma.com/api/mcp/asset/53e8c2f3-9fce-4218-8424-92340da4f84f',
  services: {
    renta: rentaContenedores,
    venta: ventaContenedores,
    construccion: construccionContenedores,
  },
  additionalServices: {
    transporte: 'https://www.figma.com/api/mcp/asset/7bc63624-5df0-49bd-bd7c-2c282bc026fe',
    maniobras: 'https://www.figma.com/api/mcp/asset/514228db-e7de-43e7-b56a-e2db6cd8f894',
    disenoArquitectonico: 'https://www.figma.com/api/mcp/asset/fe094ade-17e0-404a-930d-aec6ab6cfd0e',
  },
  acabados: {
    interiores1: 'https://www.figma.com/api/mcp/asset/9c4a5974-46f9-4a5a-8ddc-4e19760cf214',
    interiores2: 'https://www.figma.com/api/mcp/asset/1452f5ce-e3ef-40b9-9190-6ba379b7943d',
    exteriores: 'https://www.figma.com/api/mcp/asset/85446f29-28f0-4ee9-8ebd-b2f6d98c32de',
    herreria: 'https://www.figma.com/api/mcp/asset/c3a67f54-fe17-4c3b-b4bd-fd9d0c3da840',
    aislamientos1: 'https://www.figma.com/api/mcp/asset/37178d9e-255e-43e6-aa94-fbcd2c458889',
    aislamientos2: 'https://www.figma.com/api/mcp/asset/02f7370d-ca32-4f56-92f2-93b2eaa0f21c',
  }
};

const Home = () => {
  // FASE 3: User level state
  const [userLevel, setUserLevelState] = useState(getUserLevel());

  useEffect(() => {
    setUserLevelState(getUserLevel());
  }, []);

  const handleLevelChange = (level) => {
    setUserLevel(level);
    setUserLevelState(level);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Organization Schema for Home page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Creativos Espacios",
    "url": "https://www.creativosespacios.mx",
    "logo": "https://www.creativosespacios.mx/creativos-images/creativos-espacios.png",
    "description": "Venta, renta y modificación de contenedores marítimos",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Del Árbol 104, Lomas de San Lorenzo",
      "addressLocality": "Iztapalapa",
      "addressRegion": "CDMX",
      "postalCode": "09780",
      "addressCountry": "MX"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-55-2608-886",
      "contactType": "Customer Service",
      "email": "ventas@creativosespacios.mx",
      "availableLanguage": "Spanish"
    },
    "sameAs": [
      "https://www.instagram.com/creativosespaciosmx",
      "https://www.youtube.com/channel/UCEAQ-yq9sq0C-KCX8-aRyZA",
      "https://x.com/creaespaciosmx",
      "https://www.tiktok.com/@creativosespaciosmx"
    ]
  };

  return (
    <div className="home-page">
      <SEO {...seoConfig.home} structuredData={organizationSchema} />

      {/* Hero Slider - 5 Slides */}
      <HeroSlider />

      {/* Services Section - 3 cards */}
      <FadeIn duration={0.8}>
        <section className="services-section">
          <Container>
            <div className="services-grid">
              <SlideIn direction="up" delay={0.1} distance={40}>
                <ServiceCard
                  variant="renta"
                  title="RENTA"
                  subtitle="de contenedores marítimos"
                  description="Renta de contenedores marítimos flexible para proyectos a corto o largo plazo."
                  image={FIGMA_IMAGES.services.renta}
                  icon={<FaPlus />}
                  link="/servicios/alquiler"
                />
              </SlideIn>

              <SlideIn direction="up" delay={0.2} distance={40}>
                <ServiceCard
                  variant="venta"
                  title="VENTA"
                  subtitle="de contenedores marítimos"
                  description="Venta de contenedores marítimos en diversos tamaños 10 pies, 20 pies y 40 pies; usados o nuevos."
                  image={FIGMA_IMAGES.services.venta}
                  icon={<FaPlus />}
                  link="/servicios/venta"
                />
              </SlideIn>

              <SlideIn direction="up" delay={0.3} distance={40}>
                <ServiceCard
                  variant="construccion"
                  title="CONSTRUCCIÓN"
                  subtitle="de contenedores marítimos"
                  description="Construcción con contenedores marítimos a la medida: desde diseños básicos hasta construcciones completas"
                  image={FIGMA_IMAGES.services.construccion}
                  icon={<FaPlus />}
                  link="/construccion"
                />
              </SlideIn>
            </div>
          </Container>
        </section>
      </FadeIn>

      {/* Additional Services - Transporte & Maniobras */}
      <section className="additional-services-section">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col md={6}>
              <ServiceFeature
                title="transporte"
                description="Ofrecemos soluciones confiables y eficientes para el traslado de contenedores marítimos a cualquier parte de la República Mexicana, garantizando la seguridad de tu carga en cada etapa del proceso, con un servicio profesional y puntual."
                backgroundImage={FIGMA_IMAGES.additionalServices.transporte}
              />
            </Col>
            <Col md={6}>
              <ServiceFeature
                title="maniobras"
                description="Realizamos maniobras seguras y precisas con grúas, adaptándonos a tus necesidades específicas para garantizar el manejo eficiente de cargas pesadas en cualquier tipo de proyecto."
                backgroundImage={FIGMA_IMAGES.additionalServices.maniobras}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Diseño Arquitectónico - Full Width */}
      <section className="diseno-section">
        <Container fluid className="p-0">
          <ServiceFeature
            title="diseño arquitectónico"
            description="Desarrollamos proyectos innovadores y personalizados, fusionando funcionalidad y estética para crear espacios que reflejan tu visión y elevan tu entorno, siempre con la calidad y detalle que nos caracteriza."
            backgroundImage={FIGMA_IMAGES.additionalServices.disenoArquitectonico}
            fullWidth
          />
        </Container>
      </section>

      {/* Acabados Section 1 */}
      <section className="acabados-section">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col md={4}>
              <AcabadoCard
                title="acabados interiores"
                description="Creamos exteriores que combinan diseño natural y funcionalidad, desde hermosos paisajes hasta terrazas personalizadas, para brindarte un ambiente único que conecta con la naturaleza y eleva tu estilo de vida."
                backgroundImage={FIGMA_IMAGES.acabados.interiores1}
              />
            </Col>
            <Col md={4}>
              <AcabadoCard
                title="acabados interiores"
                description="Ofrecemos soluciones en tablaroca, azulejos, pisos laminados y pasta texturizada, creando espacios funcionales y estéticamente atractivos con acabados de alta calidad."
                backgroundImage={FIGMA_IMAGES.acabados.interiores2}
              />
            </Col>
            <Col md={4}>
              <AcabadoCard
                title="acabados exteriores"
                description="Aplicamos pintura esmalte y procesos especializados de sand blast, garantizando acabados de alta durabilidad y cumpliendo con todas las normativas establecidas para ofrecerte calidad y resistencia en cada proyecto."
                backgroundImage={FIGMA_IMAGES.acabados.exteriores}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Acabados Section 2 */}
      <section className="acabados-section">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col md={4}>
              <AcabadoCard
                title="herrería"
                description="Diseñamos soluciones únicas y personalizadas, adaptadas a tus necesidades específicas, fusionando funcionalidad y estética para cada proyecto."
                backgroundImage={FIGMA_IMAGES.acabados.herreria}
              />
            </Col>
            <Col md={4}>
              <AcabadoCard
                title="aislamientos"
                description="Aplicamos pintura esmalte y procesos especializados de sand blast, garantizando acabados de alta durabilidad y cumpliendo con todas las normativas establecidas para ofrecerte calidad y resistencia en cada proyecto."
                backgroundImage={FIGMA_IMAGES.acabados.aislamientos1}
              />
            </Col>
            <Col md={4}>
              <AcabadoCard
                title="aislamientos"
                description="Trabajamos con fibra de vidrio, madera, foamular y sistemas de aire acondicionado, garantizando materiales de primera calidad para un confort y eficiencia en cada proyecto."
                backgroundImage={FIGMA_IMAGES.acabados.aislamientos2}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Productos Estrella Section */}
      <section className="productos-estrella-section">
        <Container>
          <FadeIn delay={0.2}>
            <h2 className="productos-estrella-section__title">
              Nuestros Productos Estrella
            </h2>
          </FadeIn>
          <Row className="g-4">
            <Col lg={4} md={6} sm={12}>
              <ScaleIn delay={0.3} initialScale={0.9}>
                <ProductoEstrellaCard
                  variant="casas"
                  title="Contenedores para Casas"
                  description="Diseños innovadores para viviendas modernas. Espacios funcionales y sostenibles que se adaptan a tu estilo de vida."
                  image="/images/productos/casas-estrella.jpg"
                  link="/productos/casas"
                />
              </ScaleIn>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <ScaleIn delay={0.4} initialScale={0.9}>
                <ProductoEstrellaCard
                  variant="bodegas"
                  title="Contenedores para Bodegas"
                  description="Almacenamiento seguro y versátil. Soluciones de bodegas resistentes y económicas para tu negocio."
                  image="/images/productos/bodegas-estrella.jpg"
                  link="/productos/bodegas"
                />
              </ScaleIn>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <ScaleIn delay={0.5} initialScale={0.9}>
                <ProductoEstrellaCard
                  variant="oficinas"
                  title="Contenedores para Oficinas"
                  description="Espacios de trabajo flexibles y modernos. Oficinas equipadas listas para usar en tiempo récord."
                  image="/images/productos/oficinas-estrella.jpg"
                  link="/productos/oficinas"
                />
              </ScaleIn>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience Buttons Section - FASE 3 */}
      <section className="experience-section">
        <Container>
          <h2 className="experience-section__title text-center mb-4">
            Personaliza tu Experiencia
          </h2>
          <p className="experience-section__description text-center mb-5">
            Selecciona tu nivel de experiencia para ver contenido adaptado a ti
          </p>
          <div className="experience-buttons">
            <Button
              variant={userLevel === USER_LEVELS.NUEVO ? 'warning' : 'outline-warning'}
              className={`experience-btn experience-btn--primary ${userLevel === USER_LEVELS.NUEVO ? 'experience-btn--active' : ''}`}
              onClick={() => {
                handleLevelChange(USER_LEVELS.NUEVO);
                trackCTAClick('Soy nuevo - Nivel cambiado', 'home-experience', null);
              }}
            >
              <FaGraduationCap className="me-2" />
              Soy nuevo y quiero aprender más
            </Button>
            <Button
              variant={userLevel === USER_LEVELS.INTERMEDIO ? 'warning' : 'outline-secondary'}
              className={`experience-btn experience-btn--secondary ${userLevel === USER_LEVELS.INTERMEDIO ? 'experience-btn--active' : ''}`}
              onClick={() => {
                handleLevelChange(USER_LEVELS.INTERMEDIO);
                trackCTAClick('Experiencia intermedia - Nivel cambiado', 'home-experience', null);
              }}
            >
              <FaBriefcase className="me-2" />
              He trabajado con contenedores antes
            </Button>
            <Button
              variant={userLevel === USER_LEVELS.TECNICO ? 'warning' : 'outline-secondary'}
              className={`experience-btn experience-btn--tertiary ${userLevel === USER_LEVELS.TECNICO ? 'experience-btn--active' : ''}`}
              onClick={() => {
                handleLevelChange(USER_LEVELS.TECNICO);
                trackCTAClick('Usuario técnico - Nivel cambiado', 'home-experience', null);
              }}
            >
              <FaCog className="me-2" />
              Conozco bien los contenedores
            </Button>
          </div>
        </Container>
      </section>

      {/* Contenido Condicional por Nivel - FASE 3 */}
      {userLevel === USER_LEVELS.NUEVO && (
        <section className="home-intro-section">
          <Container>
            <FadeIn>
              <Row className="mb-5">
                <Col lg={8} className="mx-auto text-center">
                  <h2 className="home-intro-section__title">¿Qué es un Contenedor Marítimo?</h2>
                  <p className="home-intro-section__text">
                    Un contenedor marítimo es una estructura de acero resistente diseñada originalmente
                    para el transporte de mercancías por mar. Hoy en día, estos contenedores se transforman
                    en espacios habitables, oficinas, bodegas y mucho más.
                  </p>
                </Col>
              </Row>
            </FadeIn>
            <Row>
              <Col md={4} className="mb-4">
                <SlideIn direction="up" delay={0.2}>
                  <div className="intro-card">
                    <h3 className="intro-card__title"><FaCheckCircle className="me-2" color="#2E7D32" /> Durabilidad</h3>
                    <p className="intro-card__text">
                      Construidos en acero naval Corten, resistentes a condiciones extremas.
                      Vida útil de 20+ años.
                    </p>
                  </div>
                </SlideIn>
              </Col>
              <Col md={4} className="mb-4">
                <SlideIn direction="up" delay={0.3}>
                  <div className="intro-card">
                    <h3 className="intro-card__title"><FaCheckCircle className="me-2" color="#2E7D32" /> Modulares</h3>
                    <p className="intro-card__text">
                      Se pueden apilar, conectar y configurar de múltiples formas para crear
                      espacios únicos.
                    </p>
                  </div>
                </SlideIn>
              </Col>
              <Col md={4} className="mb-4">
                <SlideIn direction="up" delay={0.4}>
                  <div className="intro-card">
                    <h3 className="intro-card__title"><FaCheckCircle className="me-2" color="#2E7D32" /> Sustentables</h3>
                    <p className="intro-card__text">
                      Reutilización de materiales existentes. Menor impacto ambiental que
                      construcción tradicional.
                    </p>
                  </div>
                </SlideIn>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col className="text-center">
                <h3 className="mb-4">Preguntas Frecuentes para Principiantes</h3>
                <div className="faq-simple">
                  <div className="faq-simple__item">
                    <strong>¿Cuánto cuesta un contenedor?</strong>
                    <p>Desde $50,000 para contenedores usados hasta $350,000+ para proyectos completos de casas.</p>
                  </div>
                  <div className="faq-simple__item">
                    <strong>¿Necesito permisos?</strong>
                    <p>Depende del uso y ubicación. Te asesoramos en todo el proceso.</p>
                  </div>
                  <div className="faq-simple__item">
                    <strong>¿Cuánto tiempo toma?</strong>
                    <p>Desde 24 horas para instalación básica hasta 4-6 meses para construcciones completas.</p>
                  </div>
                </div>
                <Link to="/contacto" className="btn btn-primary btn-lg mt-4">
                  Quiero una Asesoría Gratuita
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {userLevel === USER_LEVELS.TECNICO && (
        <section className="home-technical-section">
          <Container>
            <h2 className="home-technical-section__title text-center mb-5">
              Acceso Rápido Profesional
            </h2>
            <Row>
              <Col md={3} sm={6} className="mb-4">
                <Link to="/fichas-tecnicas" className="quick-access-card">
                  <div className="quick-access-card__icon"><FaClipboardList size={48} color="#3B6F7F" /></div>
                  <h3 className="quick-access-card__title">Fichas Técnicas</h3>
                  <p className="quick-access-card__text">Especificaciones completas por tipo</p>
                </Link>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <Link to="/patios-contenedores" className="quick-access-card">
                  <div className="quick-access-card__icon"><FaMapMarkerAlt size={48} color="#F16700" /></div>
                  <h3 className="quick-access-card__title">Patios</h3>
                  <p className="quick-access-card__text">Disponibilidad en tiempo real</p>
                </Link>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <Link to="/presentacion-empresarial" className="quick-access-card">
                  <div className="quick-access-card__icon"><FaFileAlt size={48} color="#3B6F7F" /></div>
                  <h3 className="quick-access-card__title">Presentación</h3>
                  <p className="quick-access-card__text">PDF corporativo descargable</p>
                </Link>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <Link to="/cotizador-venta" className="quick-access-card">
                  <div className="quick-access-card__icon"><FaMoneyBillWave size={48} color="#2E7D32" /></div>
                  <h3 className="quick-access-card__title">Cotizador</h3>
                  <p className="quick-access-card__text">Cotización técnica directa</p>
                </Link>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={6} className="mb-4">
                <div className="technical-info-card">
                  <h3>Especificaciones Estándar</h3>
                  <ul>
                    <li><strong>20 ft:</strong> 6.06m x 2.44m x 2.59m | 33m³ | 28 ton</li>
                    <li><strong>40 ft:</strong> 12.19m x 2.44m x 2.59m | 67m³ | 27 ton</li>
                    <li><strong>40 ft HC:</strong> 12.19m x 2.44m x 2.89m | 76m³ | 27 ton</li>
                  </ul>
                </div>
              </Col>
              <Col lg={6} className="mb-4">
                <div className="technical-info-card">
                  <h3>Contacto Directo</h3>
                  <p><strong>Ventas Corporativas:</strong></p>
                  <p><FaPhone className="me-2" color="#3B6F7F" /> 55-26-08-88-86</p>
                  <p><FaEnvelope className="me-2" color="#3B6F7F" /> ventas@creativosespacios.mx</p>
                  <p className="mt-3">Horario: L-V 9:00am - 6:00pm</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </div>
  );
};

export default Home;
