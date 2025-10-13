import React from 'react';
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RoboIdentidad.scss';

const RoboIdentidad = () => {
  const medidas = [
    {
      icono: '🔒',
      titulo: 'Protege tu Información Personal',
      descripcion: 'No compartas datos sensibles como número de seguridad social, RFC o CURP con terceros no autorizados.'
    },
    {
      icono: '🖥️',
      titulo: 'Seguridad en Línea',
      descripcion: 'Utiliza contraseñas seguras y diferentes para cada servicio. Activa la autenticación de dos factores.'
    },
    {
      icono: '📧',
      titulo: 'Cuidado con el Phishing',
      descripcion: 'No hagas clic en enlaces sospechosos ni proporciones información personal por correo electrónico.'
    },
    {
      icono: '📄',
      titulo: 'Documentos Físicos',
      descripcion: 'Destruye documentos con información personal antes de desecharlos. No compartas copias de identificaciones.'
    },
    {
      icono: '💳',
      titulo: 'Revisa tus Cuentas',
      descripcion: 'Monitorea regularmente tus estados de cuenta bancarios y reportes de crédito.'
    },
    {
      icono: '📱',
      titulo: 'Dispositivos Seguros',
      descripcion: 'Mantén actualizados tus dispositivos y utiliza software antivirus confiable.'
    }
  ];

  const senales = [
    'Cargos no reconocidos en tus cuentas bancarias o tarjetas de crédito',
    'Recepción de estados de cuenta de cuentas que no has abierto',
    'Negación de crédito sin razón aparente',
    'Llamadas de cobranza por deudas que no contraíste',
    'Notificaciones de acceso a servicios que no utilizas',
    'Documentos oficiales o correspondencia que no recibes'
  ];

  return (
    <div className="robo-identidad-page">
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Aviso de Robo de Identidad</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="robo-identidad-page__banner">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="robo-identidad-page__banner-title">Aviso de Robo de Identidad</h1>
              <p className="robo-identidad-page__banner-subtitle">
                Protege tu información y mantente seguro
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="robo-identidad-page__intro">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="robo-identidad-page__intro-content">
                <h2 className="robo-identidad-page__section-title">Nuestro Compromiso con tu Seguridad</h2>
                <p>
                  En <strong>Creativos Espacios</strong> tomamos muy en serio la protección de tu información personal y estamos comprometidos con la prevención del robo de identidad. Este aviso tiene como objetivo informarte sobre las medidas de seguridad que implementamos y cómo puedes protegerte.
                </p>
                <div className="robo-identidad-page__alert">
                  <p>
                    <strong>⚠️ Importante:</strong> Nunca te solicitaremos información sensible como contraseñas, números de tarjeta completos o datos bancarios por correo electrónico, mensajes de texto o llamadas telefónicas no solicitadas.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="robo-identidad-page__medidas">
        <Container>
          <h2 className="robo-identidad-page__section-title text-center mb-5">Medidas de Prevención</h2>
          <Row>
            {medidas.map((medida, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card className="robo-identidad-page__card h-100">
                  <Card.Body>
                    <div className="robo-identidad-page__card-icono">{medida.icono}</div>
                    <h3 className="robo-identidad-page__card-titulo">{medida.titulo}</h3>
                    <p className="robo-identidad-page__card-descripcion">{medida.descripcion}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="robo-identidad-page__senales">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="robo-identidad-page__section-title">Señales de Alerta de Robo de Identidad</h2>
              <p>Esté atento a estas señales que podrían indicar que su identidad ha sido comprometida:</p>
              <ul className="robo-identidad-page__list">
                {senales.map((senal, index) => (
                  <li key={index}>{senal}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="robo-identidad-page__acciones">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="robo-identidad-page__acciones-box">
                <h2 className="robo-identidad-page__section-title">¿Qué hacer si sospechas un robo de identidad?</h2>
                <ol className="robo-identidad-page__numbered-list">
                  <li>
                    <strong>Contacta inmediatamente a tus instituciones financieras</strong> para reportar actividad sospechosa y congelar tus cuentas si es necesario.
                  </li>
                  <li>
                    <strong>Presenta una denuncia ante las autoridades</strong> competentes (Policía Cibernética, Ministerio Público).
                  </li>
                  <li>
                    <strong>Solicita tu reporte de crédito</strong> en el Buró de Crédito y coloca una alerta de fraude.
                  </li>
                  <li>
                    <strong>Cambia todas tus contraseñas</strong> de servicios bancarios, correo electrónico y redes sociales.
                  </li>
                  <li>
                    <strong>Monitorea tus cuentas</strong> regularmente durante los próximos meses.
                  </li>
                  <li>
                    <strong>Contáctanos de inmediato</strong> si crees que tu información con nosotros ha sido comprometida.
                  </li>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="robo-identidad-page__seguridad">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="robo-identidad-page__section-title">Nuestras Medidas de Seguridad</h2>
              <div className="robo-identidad-page__info-box">
                <p>
                  En Creativos Espacios implementamos las siguientes medidas para proteger tu información:
                </p>
                <ul>
                  <li>Encriptación de datos sensibles en tránsito y en reposo</li>
                  <li>Acceso restringido a información personal solo a personal autorizado</li>
                  <li>Auditorías regulares de seguridad y cumplimiento</li>
                  <li>Capacitación continua de nuestro personal en protección de datos</li>
                  <li>Cumplimiento estricto con la Ley Federal de Protección de Datos Personales</li>
                  <li>Sistemas de detección y prevención de intrusiones</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="robo-identidad-page__contacto">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="robo-identidad-page__contacto-box">
                <h3>Reporta Incidentes de Seguridad</h3>
                <p>
                  Si sospechas que tu información ha sido comprometida o has detectado actividad sospechosa relacionada con Creativos Espacios, contáctanos inmediatamente:
                </p>
                <div className="robo-identidad-page__contacto-info">
                  <p><strong>Email:</strong> <a href="mailto:ventas@creativosespacios.com.mx">ventas@creativosespacios.com.mx</a></p>
                  <p><strong>Teléfono:</strong> <a href="tel:5526088886">55-26-08-88-86</a></p>
                  <p><strong>WhatsApp:</strong> <a href="https://wa.me/5554269941">55-54-26-99-41</a></p>
                </div>
                <p className="robo-identidad-page__contacto-horario">
                  Horario de atención: Lunes a viernes de 9:00am a 6:00pm
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="robo-identidad-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="robo-identidad-page__cta-title">Tu Seguridad es Nuestra Prioridad</h2>
              <p className="robo-identidad-page__cta-text">
                Mantente informado y protegido. Lee nuestro aviso de privacidad para conocer más sobre cómo manejamos tu información.
              </p>
              <Link to="/privacidad" className="robo-identidad-page__cta-button">
                Ver Aviso de Privacidad
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default RoboIdentidad;
