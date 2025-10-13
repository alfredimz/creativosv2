import React from 'react';
import { Container, Row, Col, Breadcrumb, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Terminos.scss';

const Terminos = () => {
  return (
    <div className="terminos-page">
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Términos y Condiciones</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="terminos-page__banner">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="terminos-page__banner-title">Términos y Condiciones de Uso</h1>
              <p className="terminos-page__banner-subtitle">
                www.creativosespacios.com.mx
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="terminos-page__content">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="terminos-page__intro">
                <p>
                  Al ingresar y utilizar este portal de Internet, cuyo nombre de dominio es <strong>http://www.creativosespacios.com.mx</strong>, propiedad de <strong>Imagina Creativos Espacios S.A. de C.V.</strong>, que en lo sucesivo se denominará <strong>Creativos Espacios</strong>, el usuario está aceptando los Términos y condiciones de uso contenidos en este convenio y declara expresamente su aceptación utilizando para tal efecto medios electrónicos, en términos de lo dispuesto por el artículo 1803 del Código Civil Federal.
                </p>
                <div className="terminos-page__alert">
                  <p>
                    <strong>En caso de no aceptar en forma absoluta y completa los términos y condiciones de este convenio, el usuario deberá abstenerse de acceder, utilizar y observar el sitio web.</strong>
                  </p>
                </div>
              </div>

              <Accordion defaultActiveKey="0" className="terminos-page__accordion">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>1. Proemio</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      La sola utilización de dicha página de Internet le otorga al público en general la condición de usuario (en adelante referido como el «usuario» o los «usuarios») e implica la aceptación, plena e incondicional, de todas y cada una de las condiciones generales y particulares incluidas en estos Términos y condiciones de uso publicados por Creativos Espacios en el momento mismo en que el usuario acceda al sitio web.
                    </p>
                    <p>
                      Cualquier modificación a los presentes Términos y condiciones de uso será realizada cuando el titular de la misma, en este caso Creativos Espacios, lo considere apropiado, siendo exclusiva responsabilidad del usuario asegurarse de tomar conocimiento de tales modificaciones.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>2. Convenio</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Convenio de adhesión para el uso de la página de Internet <strong>http://www.creativosespacios.com.mx</strong> que celebran: por una parte, Creativos Espacios y, por la otra, el usuario, sujetándose, ambas partes, a lo establecido en este documento.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>3. Licencia</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Por virtud de la celebración de este convenio, Creativos Espacios otorga y concede al usuario el derecho no exclusivo, revocable y no transferible de ver y utilizar el sitio web <strong>http://www.creativosespacios.com.mx</strong> de conformidad con los Términos y condiciones de uso que aquí se estipulan.
                    </p>
                    <ul>
                      <li>El usuario sólo podrá imprimir y/o copiar cualquier información contenida o publicada en el sitio web exclusivamente para uso personal, queda terminantemente prohibido el uso comercial de dicha información.</li>
                      <li>La reimpresión, publicación, distribución, asignación, sublicencia, venta, reproducción electrónica o por otro medio, parcial o total, de cualquier información, documento o gráfico que aparezca en el sitio web, para cualquier uso distinto al personal no comercial le está expresamente prohibido al usuario, a menos de que cuente con la autorización previa y por escrito de Creativos Espacios.</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>4. Reglas para el Uso del Sitio Web</Accordion.Header>
                  <Accordion.Body>
                    <p>El usuario y Creativos Espacios están de acuerdo en que la utilización del sitio web se sujetará a las siguientes reglas:</p>
                    <ul>
                      <li>La información publicada o contenida en dicho sitio será claramente identificada de forma tal que se reconozca que la misma proviene y ha sido generada por Creativos Espacios o por sus proveedores.</li>
                      <li>Creativos Espacios se reserva el derecho de bloquear el acceso o remover en forma parcial o total toda información, comunicación o material que a su exclusivo juicio pueda resultar abusivo, difamatorio, obsceno, fraudulento, violatorio de derechos de autor o que contravenga lo establecido en este convenio.</li>
                      <li>Creativos Espacios no se hace responsable por ninguna de las informaciones, opiniones y conceptos que se emitan en la página web. Se recomienda al usuario consultar con un especialista y/o profesional en la materia.</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>5. Formatos</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Los usuarios reconocen que, al proporcionar la información de carácter personal requerida en alguno de los servicios que se prestan en este sitio web, otorgan a Creativos Espacios la autorización señalada en el artículo 109 de la Ley Federal del Derecho de Autor. En todos los casos, los usuarios responderán por la veracidad de la información proporcionada a Creativos Espacios.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>6. Derechos de Autor y Propiedad Industrial</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Creativos Espacios, el sitio web <strong>http://www.creativosespacios.com.mx</strong>, sus logotipos y todo el material que aparece en dicho sitio, son marcas, nombres de dominio, nombres comerciales y obras artísticas propiedad de sus respectivos titulares y están protegidos por los tratados internacionales y las leyes aplicables en materia de propiedad intelectual y derechos de autor.
                    </p>
                    <p>
                      Los derechos de autor sobre el contenido, organización, recopilación, compilación, información, logotipos, fotografías, imágenes, programas, aplicaciones, y en general cualquier información contenida o publicada en el sitio web se encuentran debidamente protegidos a favor de Creativos Espacios, sus afiliados, proveedores y/o de sus respectivos propietarios.
                    </p>
                    <p>
                      Se prohíbe expresamente al usuario modificar, alterar o suprimir, ya sea en forma total o parcial, los avisos, marcas, nombres comerciales, señas, anuncios, logotipos o en general cualquier indicación que se refiera a la propiedad de la información contenida en el sitio señalado.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>7. Negación de Garantías</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      El usuario está de acuerdo que la utilización del sitio web se realiza bajo su propio riesgo y que los servicios y productos que ahí se prestan y ofrecen se prevén sobre una base «tal cual» y «según sean disponibles».
                    </p>
                    <p>
                      Creativos Espacios no garantiza que la página satisfaga los requerimientos del usuario o que los servicios que en ella se ofrecen no sufran interrupciones, sean seguros o estén exentos de errores.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>8. Limitaciones a la Responsabilidad</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Hasta el máximo permitido por las leyes aplicables, Creativos Espacios no será responsable, en ningún caso, por daños directos, especiales, incidentales, indirectos, o consecuenciales que en cualquier forma se deriven o se relacionen con el uso o ejecución del sitio web, con el retraso o la falta de disponibilidad de uso, o con la proveeduría de servicios.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                  <Accordion.Header>9. Indemnización</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      El usuario está de acuerdo en indemnizar a Creativos Espacios, sus afiliados, proveedores, vendedores y asesores por cualquier acción, demanda o reclamación (incluso de honorarios de abogados y de costas judiciales) derivadas de cualquier incumplimiento por parte del usuario al presente convenio.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                  <Accordion.Header>10. Legislación Aplicable y Jurisdicción</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Este convenio estará sujeto y será interpretado de acuerdo con las leyes y ante los tribunales de la Ciudad de México, México.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className="terminos-page__footer-text">
                <p>
                  <strong>Última actualización:</strong> Enero 2025
                </p>
                <p>
                  Al utilizar nuestro sitio web, usted acepta estos términos y condiciones en su totalidad.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="terminos-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="terminos-page__cta-title">¿Dudas sobre los Términos?</h2>
              <p className="terminos-page__cta-text">
                Si tienes preguntas sobre estos términos y condiciones, contáctanos.
              </p>
              <Link to="/contacto" className="terminos-page__cta-button">
                Contactar
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Terminos;
