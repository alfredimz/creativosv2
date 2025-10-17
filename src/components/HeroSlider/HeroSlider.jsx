import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';
import { trackPhoneClick, trackEmailClick, trackCTAClick } from '../../utils/analytics';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSlider.scss';

const HeroSlider = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [currentVideoTitle, setCurrentVideoTitle] = useState('');

  const handleShowVideo = (videoId, title) => {
    setCurrentVideoId(videoId);
    setCurrentVideoTitle(title);
    setShowVideoModal(true);
    trackCTAClick('Play video YouTube', 'hero-slider', `https://www.youtube.com/watch?v=${videoId}`);
  };

  const handleCloseVideo = () => {
    setShowVideoModal(false);
    setCurrentVideoId('');
    setCurrentVideoTitle('');
  };

  const slides = [
    {
      id: 1,
      type: 'contacto',
      title: '14 años creando espacios y soluciones a la medida para tus proyectos',
      subtitle: 'Venta, renta, construcción y transformación de contenedores marítimos nuevos y usados en México',
      image: new URL('../../assets/banner-image.png', import.meta.url).href,
      showContact: true,
      showVideo: true,
      videoId: 'uMXB54itJeM'
    },
    {
      id: 2,
      type: 'venta',
      title: 'Venta de Contenedores Marítimos',
      subtitle: 'Nuevos y usados, entrega inmediata',
      ctaText: 'Ver Catálogo',
      ctaLink: '/catalogo',
      image: new URL('../../assets/slide-venta.png', import.meta.url).href,
      showContact: false,
      showVideo: true,
      videoId: 'oaFMasSUM80'
    },
    {
      id: 3,
      type: 'renta',
      title: 'Renta de Contenedores',
      subtitle: 'Soluciones flexibles para almacenamiento temporal',
      ctaText: 'Ver Opciones de Renta',
      ctaLink: '/servicios/alquiler',
      image: new URL('../../assets/renta-slide.png', import.meta.url).href,
      showContact: false,
      showVideo: true,
      videoId: 'igD7uzwF7cY'
    },
    {
      id: 4,
      type: 'construccion',
      title: 'Construcción con Contenedores',
      subtitle: 'Transforma espacios, crea soluciones innovadoras',
      ctaText: 'Ver Proyectos',
      ctaLink: '/construccion',
      image: new URL('../../assets/construccion-slide.png', import.meta.url).href,
      showContact: false,
      showVideo: true,
      videoId: 'Yc9Z4V1piQ8'
    },
    {
      id: 5,
      type: 'servicios',
      title: 'Servicios Completos',
      subtitle: 'Arquitectura, diseño y servicios adicionales',
      ctaText: 'Conocer Servicios',
      ctaLink: '/servicios-adicionales',
      image: new URL('../../assets/slide-servicios-completos.png', import.meta.url).href,
      showContact: false,
      showVideo: true,
      videoId: 'prXleMCzWCI'
    }
  ];

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'hero-slider__bullet',
          bulletActiveClass: 'hero-slider__bullet--active',
        }}
        className="hero-slider"
        speed={600}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section
              className={`hero-slider__slide hero-slider__slide--${slide.type}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-slider__overlay" />
              <Container className="hero-slider__container">
                <Row className="align-items-center">
                  <Col lg={slide.showContact ? 6 : 8} md={12}>
                    <div className="hero-slider__content">
                      <h1 className="hero-slider__title">{slide.title}</h1>
                      <p className="hero-slider__subtitle">{slide.subtitle}</p>

                      {/* CTA Button for slides 2-5 */}
                      {slide.ctaText && slide.ctaLink && (
                        <Button
                          variant="warning"
                          size="lg"
                          className="hero-slider__cta"
                          href={slide.ctaLink}
                          onClick={() => trackCTAClick(slide.ctaText, 'hero-slider', slide.ctaLink)}
                        >
                          {slide.ctaText}
                        </Button>
                      )}

                      {/* Video Play Button */}
                      {slide.showVideo && (
                        <button
                          className="hero-slider__video-btn"
                          onClick={() => handleShowVideo(slide.videoId, slide.title)}
                          aria-label="Reproducir video"
                        >
                          <FaPlay />
                        </button>
                      )}
                    </div>
                  </Col>

                  {/* Contact Panel - Only on Slide 1 */}
                  {slide.showContact && (
                    <Col lg={6} md={12}>
                      <div className="hero-slider__contact-panel">
                        <h3 className="hero-slider__contact-title">Contacto</h3>

                        <div className="hero-slider__contact-item">
                          <span className="hero-slider__contact-label">Teléfono</span>
                          <a
                            href="tel:552608886"
                            className="hero-slider__contact-value"
                            onClick={() => trackPhoneClick('552608886', 'hero-slider-contact')}
                          >
                            552608886
                          </a>
                        </div>

                        <div className="hero-slider__contact-item">
                          <span className="hero-slider__contact-label">Whatsapp</span>
                          <a
                            href="https://wa.me/5554269941"
                            className="hero-slider__contact-value"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackPhoneClick('5554269941', 'hero-slider-whatsapp')}
                          >
                            5554269941
                          </a>
                        </div>

                        <div className="hero-slider__contact-item">
                          <span className="hero-slider__contact-label">Mail</span>
                          <a
                            href="mailto:ventas@creativosespacios.mx"
                            className="hero-slider__contact-value"
                            onClick={() => trackEmailClick('ventas@creativosespacios.mx', 'hero-slider-contact')}
                          >
                            ventas@creativosespacios.mx
                          </a>
                        </div>

                        <div className="hero-slider__contact-item">
                          <span className="hero-slider__contact-label">Horario</span>
                          <span className="hero-slider__contact-value">
                            Lunes a viernes de 9am a 6pm
                          </span>
                        </div>

                        <div className="hero-slider__contact-office">
                          <h4>Oficinas centrales</h4>
                          <p>Av. Del Árbol 104, Lomas de San Lorenzo, Iztapalapa, 09780, CDMX</p>
                        </div>
                      </div>
                    </Col>
                  )}
                </Row>
              </Container>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* YouTube Video Modal */}
      <Modal
        show={showVideoModal}
        onHide={handleCloseVideo}
        size="xl"
        centered
        className="hero-slider__video-modal"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{currentVideoTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="hero-slider__video-wrapper">
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
              title="Creativos Espacios - Video Corporativo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default HeroSlider;
