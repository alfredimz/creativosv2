import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { ServiceCard, ServiceFeature, AcabadoCard } from '../../components/common';
import { SEO, seoConfig } from '../../components/SEO';
import { trackPhoneClick, trackEmailClick, trackCTAClick } from '../../utils/analytics';
import './Home.scss';

// Image URLs from Figma (these will need to be downloaded to public/images)
const FIGMA_IMAGES = {
  hero: 'https://www.figma.com/api/mcp/asset/53e8c2f3-9fce-4218-8424-92340da4f84f',
  services: {
    renta: 'https://www.figma.com/api/mcp/asset/bbe768e9-f07a-4f7a-8dba-a2856b7206e8',
    venta: 'https://www.figma.com/api/mcp/asset/58584cfc-03f2-405e-bd27-e49c88566ecf',
    construccion: 'https://www.figma.com/api/mcp/asset/aab5af26-deb7-40c4-bc8b-8617cec7c773',
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

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${FIGMA_IMAGES.hero})` }}
      >
        <div className="hero-section__overlay" />
        <Container className="hero-section__container">
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div className="hero-content">
                <h1 className="hero-content__title">
                  14 años creando espacios y soluciones a la medida para tus proyectos
                </h1>
                <p className="hero-content__subtitle">
                  Venta, renta, construcción y transformación de contenedores marítimos nuevos y usados en México
                </p>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="contact-panel">
                <h3 className="contact-panel__title">Contacto</h3>
                <div className="contact-panel__item">
                  <span className="contact-panel__label">Teléfono</span>
                  <a
                    href="tel:552608886"
                    className="contact-panel__value"
                    onClick={() => trackPhoneClick('552608886', 'hero-contact-panel')}
                  >
                    552608886
                  </a>
                </div>
                <div className="contact-panel__item">
                  <span className="contact-panel__label">Whatsapp</span>
                  <a
                    href="https://wa.me/5554269941"
                    className="contact-panel__value"
                    onClick={() => trackPhoneClick('5554269941', 'hero-whatsapp')}
                  >
                    5554269941
                  </a>
                </div>
                <div className="contact-panel__item">
                  <span className="contact-panel__label">Mail</span>
                  <a
                    href="mailto:ventas@creativosespacios.mx"
                    className="contact-panel__value"
                    onClick={() => trackEmailClick('ventas@creativosespacios.mx', 'hero-contact-panel')}
                  >
                    ventas@creativosespacios.mx
                  </a>
                </div>
                <div className="contact-panel__item">
                  <span className="contact-panel__label">Horario</span>
                  <span className="contact-panel__value">Lunes a viernes de 9am a 6pm</span>
                </div>
                <div className="contact-panel__office">
                  <h4>Oficinas centrales</h4>
                  <p>Av. Del Árbol 104, Lomas de San Lorenzo, Iztapalapa, 09780, CDMX</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section - 3 cards */}
      <section className="services-section">
        <Container>
          <div className="services-grid">
            <ServiceCard
              variant="renta"
              title="RENTA"
              subtitle="de contenedores marítimos"
              description="Renta de contenedores marítimos flexible para proyectos a corto o largo plazo."
              image={FIGMA_IMAGES.services.renta}
              icon={<FaPlus />}
              link="/servicios/alquiler"
            />

            <ServiceCard
              variant="venta"
              title="VENTA"
              subtitle="de contenedores marítimos"
              description="Venta de contenedores marítimos en diversos tamaños 10 pies, 20 pies y 40 pies; usados o nuevos."
              image={FIGMA_IMAGES.services.venta}
              icon={<FaPlus />}
              link="/servicios/venta"
            />

            <ServiceCard
              variant="construccion"
              title="CONSTRUCCIÓN"
              subtitle="de contenedores marítimos"
              description="Construcción con contenedores marítimos a la medida: desde diseños básicos hasta construcciones completas"
              image={FIGMA_IMAGES.services.construccion}
              icon={<FaPlus />}
              link="/construccion"
            />
          </div>
        </Container>
      </section>

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

      {/* Experience Buttons Section */}
      <section className="experience-section">
        <Container>
          <div className="experience-buttons">
            <Button
              variant="warning"
              className="experience-btn experience-btn--primary"
              onClick={() => trackCTAClick('Soy nuevo y quiero aprender más', 'home-experience', '/perfilador-cliente')}
            >
              Soy nuevo y quiero aprender más
            </Button>
            <Button
              variant="outline-secondary"
              className="experience-btn experience-btn--secondary"
              onClick={() => trackCTAClick('He trabajado con contenedores antes', 'home-experience', '/perfilador-cliente')}
            >
              He trabajado con contenedores antes
            </Button>
            <Button
              variant="outline-secondary"
              className="experience-btn experience-btn--tertiary"
              onClick={() => trackCTAClick('Conozco bien los contenedores', 'home-experience', '/perfilador-cliente')}
            >
              Conozco bien los contenedores
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
