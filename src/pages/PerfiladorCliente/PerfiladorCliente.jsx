import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaBullseye, FaBolt, FaMoneyBillWave } from 'react-icons/fa'; // FASE 4: Reemplazo de emojis
import { SEO, seoConfig } from '../../components/SEO';
import { determinarNivelPorRespuestas, setUserLevel, getNombreNivel } from '../../utils/userLevel';
import './PerfiladorCliente.scss';

const PerfiladorCliente = () => {
  const [paso, setPaso] = useState(1);
  const [respuestas, setRespuestas] = useState({});
  const [nivelSugerido, setNivelSugerido] = useState(null);
  const navigate = useNavigate();

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
    const nuevasRespuestas = { ...respuestas, [paso]: opcion };
    setRespuestas(nuevasRespuestas);

    if (paso < preguntas.length) {
      setPaso(paso + 1);
    } else {
      // Última pregunta: determinar nivel
      const nivel = determinarNivelPorRespuestas(nuevasRespuestas);
      setNivelSugerido(nivel);
    }
  };

  const reiniciar = () => {
    setPaso(1);
    setRespuestas({});
    setNivelSugerido(null);
  };

  const handleFinalizarPerfilador = () => {
    if (nivelSugerido) {
      // Guardar nivel en localStorage
      setUserLevel(nivelSugerido);

      // Redirigir a home después de un breve delay
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  const progreso = (paso / preguntas.length) * 100;

  return (
    <div className="perfilador-page">
      <SEO {...seoConfig.perfiladorCliente} />

      {/* Hero Section */}
      <section className="perfilador-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h1 className="perfilador-hero__title">Perfilador de Cliente</h1>
              <p className="perfilador-hero__description">
                Responde 5 preguntas y te ayudaremos a encontrar la solución perfecta
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Quiz Section */}
      <section className="perfilador-quiz">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="perfilador-quiz__card">
                <Card.Body>
                  {paso <= preguntas.length ? (
                    <>
                      <div className="perfilador-quiz__progreso-container">
                        <div className="perfilador-quiz__progreso-numero">
                          Pregunta {paso} de {preguntas.length}
                        </div>
                        <ProgressBar now={progreso} className="perfilador-quiz__progreso-bar" />
                      </div>

                      <h2 className="perfilador-quiz__pregunta">
                        {preguntas[paso - 1].pregunta}
                      </h2>

                      <div className="perfilador-quiz__opciones">
                        {preguntas[paso - 1].opciones.map((opcion, index) => (
                          <button
                            key={index}
                            className="perfilador-quiz__opcion"
                            onClick={() => handleRespuesta(opcion)}
                          >
                            {opcion}
                          </button>
                        ))}
                      </div>

                      {paso > 1 && (
                        <button
                          className="perfilador-quiz__back-button"
                          onClick={() => setPaso(paso - 1)}
                        >
                          ← Pregunta anterior
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="perfilador-quiz__resultado">
                      <div className="perfilador-quiz__resultado-icon">✓</div>
                      <h2 className="perfilador-quiz__resultado-titulo">¡Perfil Completado!</h2>
                      <p className="perfilador-quiz__resultado-texto">
                        Gracias por completar el perfilador. Basándonos en tus respuestas,
                        hemos personalizado la experiencia perfecta para ti.
                      </p>

                      {nivelSugerido && (
                        <div className="perfilador-quiz__nivel-sugerido">
                          <h3 className="perfilador-quiz__nivel-titulo">Tu Nivel Sugerido:</h3>
                          <div className="perfilador-quiz__nivel-badge">
                            {getNombreNivel(nivelSugerido)}
                          </div>
                          <p className="perfilador-quiz__nivel-descripcion">
                            Hemos configurado el contenido del sitio especialmente para tu nivel de experiencia.
                          </p>
                        </div>
                      )}

                      <div className="perfilador-quiz__resumen">
                        <h3 className="perfilador-quiz__resumen-titulo">Tus respuestas:</h3>
                        {Object.entries(respuestas).map(([key, value]) => (
                          <div key={key} className="perfilador-quiz__resumen-item">
                            <strong className="perfilador-quiz__resumen-pregunta">{preguntas[key - 1].pregunta}</strong>
                            <p className="perfilador-quiz__resumen-respuesta">{value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="perfilador-quiz__acciones">
                        <button
                          onClick={handleFinalizarPerfilador}
                          className="perfilador-quiz__accion-button perfilador-quiz__accion-button--primary"
                        >
                          Ver Mi Home Personalizado
                        </button>
                        <Link to="/contacto" className="perfilador-quiz__accion-button perfilador-quiz__accion-button--secondary">
                          Solicitar Asesoría
                        </Link>
                        <button
                          onClick={reiniciar}
                          className="perfilador-quiz__accion-button perfilador-quiz__accion-button--tertiary"
                        >
                          Reiniciar Perfilador
                        </button>
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Beneficios Section */}
      <section className="perfilador-beneficios">
        <Container>
          <Row className="justify-content-center mb-4">
            <Col lg={10} className="text-center">
              <h2 className="perfilador-beneficios__titulo">¿Por Qué Usar el Perfilador?</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="text-center mb-4">
              <div className="perfilador-beneficios__card">
                <div className="perfilador-beneficios__card-icon">
                  <FaBullseye size={48} color="#3B6F7F" />
                </div>
                <h3 className="perfilador-beneficios__card-titulo">Solución Precisa</h3>
                <p className="perfilador-beneficios__card-texto">Identifica exactamente qué tipo de contenedor necesitas</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="perfilador-beneficios__card">
                <div className="perfilador-beneficios__card-icon">
                  <FaBolt size={48} color="#F16700" />
                </div>
                <h3 className="perfilador-beneficios__card-titulo">Proceso Rápido</h3>
                <p className="perfilador-beneficios__card-texto">Solo 5 preguntas para obtener una recomendación personalizada</p>
              </div>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="perfilador-beneficios__card">
                <div className="perfilador-beneficios__card-icon">
                  <FaMoneyBillWave size={48} color="#3B6F7F" />
                </div>
                <h3 className="perfilador-beneficios__card-titulo">Ahorra Tiempo</h3>
                <p className="perfilador-beneficios__card-texto">Evita cotizaciones innecesarias, directo a lo que necesitas</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PerfiladorCliente;
