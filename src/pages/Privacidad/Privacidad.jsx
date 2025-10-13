import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Privacidad.scss';

const Privacidad = () => {
  return (
    <div className="privacidad-page">
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Aviso de Privacidad</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="privacidad-page__banner">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="privacidad-page__banner-title">Aviso de Privacidad</h1>
              <p className="privacidad-page__banner-subtitle">
                Protección de Datos Personales
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="privacidad-page__content">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="privacidad-page__text-content">
                <p className="privacidad-page__intro">
                  Con fundamento en los artículos 15 y 16 de la <strong>Ley Federal de Protección de Datos Personales en Posesión de Particulares</strong> hacemos de su conocimiento que <strong>Creativos Espacios S.A. de C.V.</strong>, con domicilio en Av. del Árbol 104, Col. Lomas de San Lorenzo. C.P. 09780 Alcaldía Iztapalapa, CDMX, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.
                </p>

                <h2 className="privacidad-page__section-title">Finalidades del Tratamiento de Datos</h2>
                <p>
                  Su información personal será utilizada para las siguientes finalidades:
                </p>
                <ul className="privacidad-page__list">
                  <li>Proveer los servicios y productos que ha solicitado</li>
                  <li>Notificarle sobre nuevos servicios o productos que tengan relación con los ya contratados o adquiridos</li>
                  <li>Comunicarle sobre cambios en los mismos</li>
                  <li>Elaborar estudios y programas que son necesarios para determinar hábitos de consumo</li>
                  <li>Realizar evaluaciones periódicas de nuestros productos y servicios a efecto de mejorar la calidad de los mismos</li>
                  <li>Evaluar la calidad del servicio que brindamos</li>
                  <li>En general, para dar cumplimiento a las obligaciones que hemos contraído con usted</li>
                </ul>

                <h2 className="privacidad-page__section-title">Datos Personales Requeridos</h2>
                <p>Para las finalidades antes mencionadas, requerimos obtener los siguientes datos personales:</p>
                <ul className="privacidad-page__list">
                  <li>Nombre completo</li>
                  <li>Teléfono fijo y/o celular</li>
                  <li>Dirección</li>
                  <li>Correo electrónico</li>
                </ul>

                <h2 className="privacidad-page__section-title">Derechos ARCO</h2>
                <p>
                  Es importante informarle que usted tiene derecho al <strong>Acceso, Rectificación y Cancelación</strong> de sus datos personales, a oponerse al tratamiento de los mismos o a revocar el consentimiento que para dicho fin nos haya otorgado.
                </p>
                <p>
                  Para ello, es necesario que envíe la solicitud en los términos que marca la Ley antes citada en su Art. 29 al <strong>C. Edith Ramírez</strong>, responsable de nuestro Departamento de Protección de Datos Personales, ubicado en Creativos Espacios S.A de C.V., con domicilio en Av. del Árbol 104, Col. Lomas de San Lorenzo. C.P. 09780 Alcaldía Iztapalapa, CDMX.
                </p>

                <h2 className="privacidad-page__section-title">Mensajes Promocionales</h2>
                <p>
                  En caso de que no desee recibir mensajes promocionales de nuestra parte, puede enviarnos su solicitud por medio de la dirección electrónica: <a href="mailto:ventas@creativosespacios.com.mx">ventas@creativosespacios.com.mx</a>
                </p>

                <h2 className="privacidad-page__section-title">Modificaciones al Aviso</h2>
                <div className="privacidad-page__info-box">
                  <p>
                    <strong>Importante:</strong> Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios o productos.
                  </p>
                  <p>
                    Estas modificaciones estarán disponibles al público a través de nuestra página de Internet <a href="http://www.creativosespacios.com.mx">www.creativosespacios.com.mx</a> (sección aviso de privacidad).
                  </p>
                </div>

                <p className="privacidad-page__update-date">
                  <strong>Fecha de última actualización:</strong> 28 de Abril de 2021
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="privacidad-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="privacidad-page__cta-title">¿Tienes Dudas sobre tus Datos?</h2>
              <p className="privacidad-page__cta-text">
                Contáctanos y con gusto atenderemos tus solicitudes de información.
              </p>
              <Link to="/contacto" className="privacidad-page__cta-button">
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
