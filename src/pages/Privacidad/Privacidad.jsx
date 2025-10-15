import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO, seoConfig } from '../../components/SEO';
import './Privacidad.scss';

const Privacidad = () => {
  return (
    <div className="privacidad-page">
      <SEO {...seoConfig.privacidad} />

      {/* Hero Section */}
      <section className="privacidad-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="privacidad-hero__title">Aviso de Privacidad</h1>
              <p className="privacidad-hero__description">
                Protección de Datos Personales
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Content Section */}
      <section className="privacidad-content">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="privacidad-content__text">
                <p className="privacidad-content__intro">
                  Con fundamento en los artículos 15 y 16 de la <strong>Ley Federal de Protección de Datos Personales en Posesión de Particulares</strong> hacemos de su conocimiento que <strong>Creativos Espacios S.A. de C.V.</strong>, con domicilio en Av. del Árbol 104, Col. Lomas de San Lorenzo. C.P. 09780 Alcaldía Iztapalapa, CDMX, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.
                </p>

                <h2 className="privacidad-content__titulo">Finalidades del Tratamiento de Datos</h2>
                <p>
                  Su información personal será utilizada para las siguientes finalidades:
                </p>
                <ul className="privacidad-content__lista">
                  <li>Proveer los servicios y productos que ha solicitado</li>
                  <li>Notificarle sobre nuevos servicios o productos que tengan relación con los ya contratados o adquiridos</li>
                  <li>Comunicarle sobre cambios en los mismos</li>
                  <li>Elaborar estudios y programas que son necesarios para determinar hábitos de consumo</li>
                  <li>Realizar evaluaciones periódicas de nuestros productos y servicios a efecto de mejorar la calidad de los mismos</li>
                  <li>Evaluar la calidad del servicio que brindamos</li>
                  <li>En general, para dar cumplimiento a las obligaciones que hemos contraído con usted</li>
                </ul>

                <h2 className="privacidad-content__titulo">Datos Personales Requeridos</h2>
                <p>Para las finalidades antes mencionadas, requerimos obtener los siguientes datos personales:</p>
                <ul className="privacidad-content__lista">
                  <li>Nombre completo</li>
                  <li>Teléfono fijo y/o celular</li>
                  <li>Dirección</li>
                  <li>Correo electrónico</li>
                </ul>

                <h2 className="privacidad-content__titulo">Derechos ARCO</h2>
                <p>
                  Es importante informarle que usted tiene derecho al <strong>Acceso, Rectificación y Cancelación</strong> de sus datos personales, a oponerse al tratamiento de los mismos o a revocar el consentimiento que para dicho fin nos haya otorgado.
                </p>
                <p>
                  Para ello, es necesario que envíe la solicitud en los términos que marca la Ley antes citada en su Art. 29 al <strong>C. Edith Ramírez</strong>, responsable de nuestro Departamento de Protección de Datos Personales, ubicado en Creativos Espacios S.A de C.V., con domicilio en Av. del Árbol 104, Col. Lomas de San Lorenzo. C.P. 09780 Alcaldía Iztapalapa, CDMX.
                </p>

                <h2 className="privacidad-content__titulo">Mensajes Promocionales</h2>
                <p>
                  En caso de que no desee recibir mensajes promocionales de nuestra parte, puede enviarnos su solicitud por medio de la dirección electrónica: <a href="mailto:ventas@creativosespacios.com.mx">ventas@creativosespacios.com.mx</a>
                </p>

                <h2 className="privacidad-content__titulo">Uso de Cookies y Tecnologías de Rastreo</h2>
                <p>
                  Le informamos que en nuestra página de Internet utilizamos cookies, web beacons y otras tecnologías de rastreo, a través de las cuales es posible monitorear su comportamiento como usuario de Internet, brindarle un mejor servicio y experiencia de usuario al navegar en nuestra página, así como ofrecerle nuevos productos y servicios basados en sus preferencias.
                </p>
                <p>
                  Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:
                </p>
                <ul className="privacidad-content__lista">
                  <li>Identificadores, nombre de usuario y contraseñas de una sesión</li>
                  <li>Idioma preferido por el usuario</li>
                  <li>Región en la que se encuentra el usuario</li>
                  <li>Tipo de navegador del usuario</li>
                  <li>Tipo de sistema operativo del usuario</li>
                  <li>Fecha y hora del inicio y final de una sesión de un usuario</li>
                  <li>Páginas web visitadas por un usuario</li>
                  <li>Búsquedas realizadas por un usuario</li>
                  <li>Publicidad revisada por un usuario</li>
                  <li>Listas y hábitos de consumo en páginas de compras</li>
                </ul>

                <h3 className="privacidad-content__subtitulo">Tipos de Cookies que Utilizamos</h3>
                <div className="privacidad-content__cookie-types">
                  <div className="privacidad-content__cookie-type">
                    <h4>Cookies Necesarias</h4>
                    <p>
                      Esenciales para el funcionamiento del sitio web. Permiten la navegación y el uso de funciones básicas.
                      No se pueden desactivar.
                    </p>
                  </div>
                  <div className="privacidad-content__cookie-type">
                    <h4>Cookies de Análisis</h4>
                    <p>
                      Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, recopilando información
                      de forma anónima. Utilizamos Google Analytics y Google Tag Manager para este fin.
                    </p>
                  </div>
                  <div className="privacidad-content__cookie-type">
                    <h4>Cookies de Marketing</h4>
                    <p>
                      Se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas publicitarias.
                      Incluyen Google Ads y pueden incluir redes sociales como Facebook.
                    </p>
                  </div>
                  <div className="privacidad-content__cookie-type">
                    <h4>Cookies de Personalización</h4>
                    <p>
                      Permiten que el sitio recuerde sus elecciones (como idioma o región) para proporcionarle una
                      experiencia más personalizada.
                    </p>
                  </div>
                </div>

                <p>
                  <strong>Puede configurar sus preferencias de cookies en cualquier momento</strong> desde el banner de
                  consentimiento que aparece al visitar nuestro sitio o contactándonos directamente.
                </p>
                <p>
                  El usuario puede deshabilitar o eliminar estas tecnologías de rastreo en su navegador. Para conocer
                  cómo hacerlo, consulte las instrucciones de su navegador web.
                </p>

                <h2 className="privacidad-content__titulo">Modificaciones al Aviso</h2>
                <div className="privacidad-content__info-box">
                  <p>
                    <strong>Importante:</strong> Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios o productos.
                  </p>
                  <p>
                    Estas modificaciones estarán disponibles al público a través de nuestra página de Internet <a href="http://www.creativosespacios.com.mx">www.creativosespacios.com.mx</a> (sección aviso de privacidad).
                  </p>
                </div>

                <p className="privacidad-content__update-date">
                  <strong>Fecha de última actualización:</strong> 14 de Octubre de 2025
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="privacidad-cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="privacidad-cta__titulo">¿Tienes Dudas sobre tus Datos?</h2>
              <p className="privacidad-cta__texto">
                Contáctanos y con gusto atenderemos tus solicitudes de información.
              </p>
              <Link to="/contacto" className="privacidad-cta__button">
                Contactar
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Privacidad;
