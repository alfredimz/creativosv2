import React, { useState } from 'react';
import { Container, Row, Col, Breadcrumb, Card, Button, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PerfiladorCliente.scss';

const PerfiladorCliente = () => {
  const [paso, setPaso] = useState(1);
  const [respuestas, setRespuestas] = useState({});

  const preguntas = [
    {
      id: 1,
      pregunta: '¿Cuál es el uso principal que le darás al contenedor?',
      opciones: ['Oficina', 'Vivienda', 'Comercial', 'Almacenamiento', 'Otro']
    },
    {
      id: 2,
      pregunta: '¿Qué tamaño de contenedor necesitas?',
      opciones: ['10 pies', '20 pies', '40 pies', 'No estoy seguro']
    },
    {
      id: 3,
      pregunta: '¿Prefieres comprar o rentar?',
      opciones: ['Comprar', 'Rentar', 'No estoy seguro']
    },
    {
      id: 4,
      pregunta: '¿Necesitas modificaciones especiales?',
      opciones: ['Sí, muchas modificaciones', 'Algunas modificaciones', 'Modificaciones mínimas', 'Sin modificaciones']
    },
    {
      id: 5,
      pregunta: '¿Cuál es tu presupuesto aproximado?',
      opciones: ['Menos de $50,000', '$50,000 - $100,000', '$100,000 - $200,000', 'Más de $200,000']
    }
  ];

  const handleRespuesta = (opcion) => {
    setRespuestas({ ...respuestas, [paso]: opcion });
    if (paso < preguntas.length) {
      setPaso(paso + 1);
    }
  };

  const reiniciar = () => {
    setPaso(1);
    setRespuestas({});
  };

  const progreso = (paso / preguntas.length) * 100;

  return (
    <div className="perfilador-page">
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Perfilador de Cliente</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="perfilador-page__banner">
        <div className="perfilador-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="perfilador-page__banner-title">Perfilador de Cliente</h1>
                <p className="perfilador-page__banner-subtitle">
                  Responde 5 preguntas y te ayudaremos a encontrar la solución perfecta
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="perfilador-page__quiz">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="perfilador-page__card">
                <Card.Body>
                  {paso <= preguntas.length ? (
                    <>
                      <div className="perfilador-page__progreso-container">
                        <div className="perfilador-page__paso-numero">
                          Pregunta {paso} de {preguntas.length}
                        </div>
                        <ProgressBar now={progreso} className="perfilador-page__progreso" />
                      </div>

                      <h2 className="perfilador-page__pregunta">
                        {preguntas[paso - 1].pregunta}
                      </h2>

                      <div className="perfilador-page__opciones">
                        {preguntas[paso - 1].opciones.map((opcion, index) => (
                          <Button
                            key={index}
                            variant="outline-primary"
                            className="perfilador-page__opcion-btn"
                            onClick={() => handleRespuesta(opcion)}
                          >
                            {opcion}
                          </Button>
                        ))}
                      </div>

                      {paso > 1 && (
                        <Button
                          variant="link"
                          className="perfilador-page__back-btn"
                          onClick={() => setPaso(paso - 1)}
                        >
                          ← Pregunta anterior
                        </Button>
                      )}
                    </>
                  ) : (
                    <div className="perfilador-page__resultado">
                      <div className="perfilador-page__resultado-icono">✓</div>
                      <h2 className="perfilador-page__resultado-titulo">¡Perfil Completado!</h2>
                      <p className="perfilador-page__resultado-texto">
                        Gracias por completar el perfilador. Basándonos en tus respuestas,
                        te recomendamos contactarnos para una asesoría personalizada.
                      </p>

                      <div className="perfilador-page__resumen">
                        <h3>Tus respuestas:</h3>
                        {Object.entries(respuestas).map(([key, value]) => (
                          <div key={key} className="perfilador-page__resumen-item">
                            <strong>{preguntas[key - 1].pregunta}</strong>
                            <p>{value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="perfilador-page__acciones">
                        <Link to="/contacto" className="perfilador-page__contacto-btn">
                          Solicitar Asesoría Personalizada
                        </Link>
                        <Button
                          variant="outline-secondary"
                          onClick={reiniciar}
                          className="perfilador-page__reiniciar-btn"
                        >
                          Reiniciar Perfilador
                        </Button>
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="perfilador-page__beneficios">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg={10} className="text-center">
              <h2 className="perfilador-page__section-title">¿Por Qué Usar el Perfilador?</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-center mb-4">
              <div className="perfilador-page__beneficio">
                <div className="perfilador-page__beneficio-icono">🎯</div>
                <h3>Solución Precisa</h3>
                <p>Identifica exactamente qué tipo de contenedor necesitas</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="perfilador-page__beneficio">
                <div className="perfilador-page__beneficio-icono">⚡</div>
                <h3>Proceso Rápido</h3>
                <p>Solo 5 preguntas para obtener una recomendación personalizada</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="perfilador-page__beneficio">
                <div className="perfilador-page__beneficio-icono">💰</div>
                <h3>Ahorra Tiempo</h3>
                <p>Evita cotizaciones innecesarias, directo a lo que necesitas</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PerfiladorCliente;
