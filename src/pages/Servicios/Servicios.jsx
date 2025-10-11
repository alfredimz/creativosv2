import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container fluid className="p-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="hero-swiper"
          >
            <SwiperSlide>
              <div className="hero-slide" style={{ backgroundImage: 'url("/images/venta-contenedores-maritimos.webp")' }}>
                <div className="hero-content">
                  <h1>14 años creando espacios y soluciones a la medida para tus proyectos</h1>
                  <p>Venta, renta, construcción y transformación de contenedores marítimos nuevos y usados en México</p>
                  <Button variant="primary" as={Link} to="/contacto" className="hero-btn">Contacto</Button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </section>

      {/* Servicios Section */}
      <section className="services-section">
        <Container>
          <Row>
            <Col md={4}>
              <div className="service-card renta">
                <h2>RENTA</h2>
                <div className="service-image">
                  <img src="/images/renta-contenedores.jpg" alt="Renta de contenedores" />
                </div>
                <p>Renta de contenedores marítimos flexible para proyectos a corto o largo plazo.</p>
                <Button variant="outline-light" className="round-btn">+</Button>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-card venta">
                <h2>VENTA</h2>
                <div className="service-image">
                  <img src="/images/venta-contenedores.jpg" alt="Venta de contenedores" />
                </div>
                <p>Venta de contenedores marítimos en diversos tamaños 10 pies, 20 pies y 40 pies; usados o nuevos.</p>
                <Button variant="outline-light" className="round-btn">+</Button>
              </div>
            </Col>
            <Col md={4}>
              <div className="service-card construccion">
                <h2>CONSTRUCCIÓN</h2>
                <div className="service-image">
                  <img src="/images/construccion-contenedores.jpg" alt="Construcción con contenedores" />
                </div>
                <p>Construcción con contenedores marítimos a la medida: desde diseños básicos hasta construcciones completas.</p>
                <Button variant="outline-light" className="round-btn">+</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Servicios Adicionales */}
      <section className="additional-services">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col md={6} className="service-feature" style={{ backgroundImage: 'url("/images/transporte.jpg")' }}>
              <div className="service-feature-content">
                <h3>Transporte</h3>
                <p>Ofrecemos soluciones confiables y eficientes para el traslado de contenedores marítimos a cualquier parte de la República Mexicana, garantizando la seguridad de tu carga en cada etapa del proceso, con un servicio profesional y puntual.</p>
              </div>
            </Col>
            <Col md={6} className="service-feature" style={{ backgroundImage: 'url("/images/maniobras.jpg")' }}>
              <div className="service-feature-content">
                <h3>Maniobras</h3>
                <p>Realizamos maniobras seguras y precisas con grúas, adaptándonos a tus necesidades específicas para garantizar el manejo eficiente de cargas pesadas en cualquier tipo de proyecto.</p>
              </div>
            </Col>
          </Row>
          <Row className="g-0">
            <Col md={12} className="service-feature" style={{ backgroundImage: 'url("/images/diseno-arquitectonico.jpg")' }}>
              <div className="service-feature-content">
                <h3>Diseño arquitectónico</h3>
                <p>Desarrollamos proyectos innovadores y personalizados, fusionando funcionalidad y estética para crear espacios que reflejan tu visión y elevan tu entorno, siempre con la calidad y detalle que nos caracteriza.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Acabados Section */}
      <section className="acabados-section">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col md={4} className="acabado-item" style={{ backgroundImage: 'url("/images/acabados-interiores.jpg")' }}>
              <div className="acabado-content">
                <h3>Acabados interiores</h3>
                <p>Ofrecemos soluciones en tablaroca, azulejos, pisos laminados y pasta texturizada, creando espacios funcionales y estéticamente atractivos con acabados de alta calidad.</p>
              </div>
            </Col>
            <Col md={4} className="acabado-item" style={{ backgroundImage: 'url("/images/acabados-exteriores.jpg")' }}>
              <div className="acabado-content">
                <h3>Acabados exteriores</h3>
                <p>Aplicamos pintura esmalte y procesos especializados de sand blast, garantizando acabados de alta durabilidad y cumpliendo con todas las normativas establecidas para ofrecerte calidad y resistencia en cada proyecto.</p>
              </div>
            </Col>
            <Col md={4} className="acabado-item" style={{ backgroundImage: 'url("/images/acabados-aislamientos.jpg")' }}>
              <div className="acabado-content">
                <h3>Aislamientos</h3>
                <p>Trabajamos con fibra de vidrio, madera, foamular y sistemas de aire acondicionado, garantizando materiales de primera calidad para un confort y eficiencia en cada proyecto.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <div className="experience-buttons">
                <Button variant="warning" className="experience-btn">Soy nuevo y quiero aprender más</Button>
                <Button variant="outline-secondary" className="experience-btn">He trabajado con contenedores antes</Button>
                <Button variant="outline-secondary" className="experience-btn">Conozco bien los contenedores</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;