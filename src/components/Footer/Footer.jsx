import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { trackPhoneClick, trackEmailClick, trackSocialClick } from '../../utils/analytics';
import logo from '../../assets/logo-footer.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="site-footer position-relative" role="contentinfo">
      <Container>
        <Row className="contact-info">
          <Col xs={12} sm={6} md={3} className="ms-auto text-center text-md-start">
            <div className="footer-section">
              <h4 id="contact-heading">Comunícate con nosotros</h4>
              <p>Lunes a viernes de<br/>9:00am a 6:00pm</p>
              <p>
                <FaWhatsapp className="icon" aria-hidden="true" />
                <span>Whatsapp</span><br/>
                <a
                  href="https://wa.me/5554269941"
                  aria-label="Contactar por WhatsApp"
                  onClick={() => trackPhoneClick('55-54-26-99-41', 'footer-whatsapp')}
                >
                  55-54-26-99-41
                </a>
              </p>
              <p>
                <FaPhone className="icon" aria-hidden="true" />
                <span>Teléfono</span><br/>
                <a
                  href="tel:5526088886"
                  aria-label="Llamar al teléfono"
                  onClick={() => trackPhoneClick('55-26-08-88-86', 'footer-phone')}
                >
                  55-26-08-88-86
                </a>
              </p>
              <p>
                <FaEnvelope className="icon" aria-hidden="true" />
                <span>Mail</span><br/>
                <a
                  href="mailto:ventas@creativosespacios.mx"
                  aria-label="Enviar correo electrónico"
                  onClick={() => trackEmailClick('ventas@creativosespacios.mx', 'footer')}
                >
                  ventas@creativosespacios.mx
                </a>
              </p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="ms-auto text-center text-md-start">
            <div className="footer-section">
              <h4 id="social-heading">Síguenos</h4>
              <div className="social-links d-flex align-items-center align-items-md-start" role="list" aria-labelledby="social-heading">
                <a
                  href="https://facebook.com/creativosespaciosmx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Facebook"
                  role="listitem"
                  onClick={() => trackSocialClick('facebook', 'footer')}
                >
                  <FaFacebookF aria-hidden="true" />
                </a>
                <a
                  href="https://instagram.com/creativposespaciosmx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Instagram"
                  role="listitem"
                  onClick={() => trackSocialClick('instagram', 'footer')}
                >
                  <FaInstagram aria-hidden="true" />
                </a>
                <a
                  href="https://tiktok.com/@creativosespaciosmx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en TikTok"
                  role="listitem"
                  onClick={() => trackSocialClick('tiktok', 'footer')}
                >
                  <FaTiktok aria-hidden="true" />
                </a>
                <a
                  href="https://x.com/creaespaciosmx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en X (Twitter)"
                  role="listitem"
                  onClick={() => trackSocialClick('twitter', 'footer')}
                >
                  <FaTimes aria-hidden="true" />
                </a>
                <a
                  href="https://youtube.com/@creativosespacios"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en YouTube"
                  role="listitem"
                  onClick={() => trackSocialClick('youtube', 'footer')}
                >
                  <FaYoutube aria-hidden="true" />
                </a>
              </div>
              <h4 className="mt-4">Patios de contenedores</h4>
              <ul className="list-unstyled">
                <li>Manzanillo, Colima</li>
                <li>Progreso, Yucatán</li>
                <li>Altamira, Tamaulipas</li>
                <li>Puerto, Veracruz</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="ms-auto text-center text-md-start">
            <div className="footer-section">
              <h4>Atención a clientes</h4>
              <p>
                <a href="https://maps.app.goo.gl/kGwek2XYdjEUvruP6" target="_blank" rel="noopener noreferrer" aria-label="Ver ubicación en Google Maps">
                <FaMapMarkerAlt className="icon" aria-hidden="true" />
                Av. Del Árbol 104,<br/>
                Colonia Lomas de San Lorenzo<br/>
                Código Postal 09780<br/>
                Alcaldía Iztapalapa<br/>
                Ciudad de México<br/>
                México
                </a>
              </p>
              
             
            </div>
          </Col>
          <Col xs={12} sm={6} md={3} className="ms-auto text-center text-md-start">
            <div className="footer-section">
              
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.117851523817!2d-99.05635160000001!3d19.320691699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce025f6302e275%3A0xcf94e14da72b42e9!2sVenta%2C%20renta%20y%20adaptaci%C3%B3n%20de%20contenedores%20mar%C3%ADtimos%20Creativos%20Espacios.!5e0!3m2!1ses!2smx!4v1742294561463!5m2!1ses!2smx"
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="Ubicación Creativos Espacios"
                ></iframe>
             
            </div>
          </Col>
        </Row>
        
        <Row className="site-map mt-5">
          {/* Columna 1: Productos Estrella - FASE 2 */}
          <Col md={2} className="ms-auto text-center text-md-start">
            <h5>Productos</h5>
            <ul className="list-unstyled">
              <li><Link to="/productos/casas">Casas</Link></li>
              <li><Link to="/productos/bodegas">Bodegas</Link></li>
              <li><Link to="/productos/oficinas">Oficinas</Link></li>
            </ul>
            <h5 className="mt-3">Contenedores</h5>
            <ul className="list-unstyled">
              <li><Link to="/tipos-contenedores">Tipos</Link></li>
              <li><Link to="/fichas-tecnicas">Fichas técnicas</Link></li>
              <li><Link to="/personalizar-contenedor">Personalizar</Link></li>
              <li><Link to="/cotizador-venta">Cotizador</Link></li>
            </ul>
          </Col>

          {/* Columna 2: Servicios / Construcción */}
          <Col md={2} className="ms-auto text-center text-md-start">
            <h5>Servicios</h5>
            <ul className="list-unstyled">
              <li><Link to="/servicios">Ver todos los servicios</Link></li>
              <li><Link to="/servicios/venta">Venta de contenedores</Link></li>
              <li><Link to="/servicios/alquiler">Alquiler de contenedores</Link></li>
              <li><Link to="/construccion">Construcción</Link></li>
              <li><Link to="/servicios/transformacion">Transformación</Link></li>
              <li><Link to="/servicios-adicionales">Servicios adicionales</Link></li>
            </ul>
          </Col>

          {/* Columna 3: Conócenos / Nosotros */}
          <Col md={2} className="ms-auto text-center text-md-start">
            <h5>Conócenos</h5>
            <ul className="list-unstyled">
              <li><Link to="/quienes-somos">Creativos Espacios</Link></li>
              <li><Link to="/nuestro-equipo">Nuestro equipo</Link></li>
              <li><Link to="/ubicacion">Nuestra ubicación</Link></li>
              <li><Link to="/patios-contenedores">Patios</Link></li>
              <li><Link to="/clientes">Clientes</Link></li>
              <li><Link to="/valores">Valores</Link></li>
              <li><Link to="/historia">Historia</Link></li>
            </ul>
          </Col>

          {/* Columna 4: Recursos / Ayuda */}
          <Col md={2} className="ms-auto text-center text-md-start">
            <h5>Recursos</h5>
            <ul className="list-unstyled">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">Preguntas frecuentes</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/recorrido-virtual">Recorrido virtual</Link></li>
              <li><Link to="/perfilador-cliente">Perfilador del cliente</Link></li>
            </ul>
          </Col>

          {/* Columna 5: Contacto */}
          <Col md={2} className="ms-auto text-center text-md-start">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li><Link to="/contacto">Formulario de contacto</Link></li>
              <li><Link to="/quejas-sugerencias">Quejas y sugerencias</Link></li>
              <li><Link to="/aliados">Aliados</Link></li>
              <li><Link to="/redes-sociales">Redes sociales</Link></li>
            </ul>
          </Col>
        </Row>
        
        <Row className="copyright mt-5">
          <Col md={8}>
            <Link to="/" aria-label="Ir a la página principal">
              <img src={logo} alt="Creativos Espacios Logo" className="footer-logo" loading="lazy" />
            </Link>
            <p className="copyright-text">Todos los derechos reservados 2024-25</p>
            <div className="legal-links">
              <Link to="/privacidad">Aviso de privacidad</Link> | 
              <Link to="/terminos">Términos y condiciones</Link> | 
              <Link to="/robo-identidad">Aviso de robo de identidad</Link> | 
              <Link to="/mapa-sitio">Mapa del sitio</Link>
            </div>
          </Col>
          <Col md={4}>
                   
          </Col>
        </Row>
      </Container>     
      <Link to="/" className='position-absolute bottom-0 end-0' aria-label="Ir a la página principal">
              <img src="../images/contenedeores-maritimos-creativos.webp" alt="Venta de contenedores marítimos en México" className="" loading="lazy" />
          </Link>  
    </footer>
  );
};

export default Footer;