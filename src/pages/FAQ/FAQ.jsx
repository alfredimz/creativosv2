import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card, Button, Form, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FAQ.scss';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      categoria: 'General',
      preguntas: [
        {
          pregunta: '¿Qué es un contenedor marítimo?',
          respuesta: 'Un contenedor marítimo es una estructura de acero corten diseñada originalmente para el transporte de mercancías por mar. Son extremadamente resistentes, herméticos y duraderos, lo que los hace ideales para ser reconvertidos en espacios habitables, comerciales o de almacenamiento.'
        },
        {
          pregunta: '¿Cuánto tiempo lleva Creativos Espacios en el mercado?',
          respuesta: 'Tenemos más de 14 años de experiencia en el mercado mexicano, especializándonos en la venta, renta y transformación de contenedores marítimos. Hemos entregado más de 500 proyectos exitosos en todo el país.'
        },
        {
          pregunta: '¿Dónde están ubicados?',
          respuesta: 'Nuestra oficina principal está en Ciudad de México, y contamos con 4 patios de contenedores estratégicamente ubicados en: Manzanillo (Colima), Progreso (Yucatán), Altamira (Tamaulipas) y Puerto de Veracruz.'
        }
      ]
    },
    {
      categoria: 'Productos y Servicios',
      preguntas: [
        {
          pregunta: '¿Qué tipos de contenedores ofrecen?',
          respuesta: 'Ofrecemos contenedores Dry (10", 20", 40"), High Cube 40", Reefer (20" y 40"), Open Top (20" y 40"), Double Door (20" y 40") y Open Side (20" y 40"). Todos disponibles nuevos y seminuevos.'
        },
        {
          pregunta: '¿Ofrecen servicio de transformación personalizada?',
          respuesta: 'Sí, ofrecemos servicio completo de transformación y adaptación. Podemos convertir contenedores en oficinas, casas, locales comerciales, bodegas, o cualquier proyecto personalizado que necesites. Incluimos diseño arquitectónico, instalaciones eléctricas, hidráulicas, climatización, acabados interiores y exteriores.'
        },
        {
          pregunta: '¿Puedo rentar un contenedor?',
          respuesta: 'Sí, ofrecemos planes de renta flexibles mensuales y anuales para contenedores estándar y transformados. Es ideal si necesitas espacio temporal o quieres probar antes de comprar.'
        },
        {
          pregunta: '¿Ofrecen mantenimiento?',
          respuesta: 'Sí, ofrecemos servicio de mantenimiento preventivo y correctivo para todos nuestros contenedores, ya sea que los hayas comprado o rentado con nosotros.'
        }
      ]
    },
    {
      categoria: 'Precios y Cotizaciones',
      preguntas: [
        {
          pregunta: '¿Cuánto cuesta un contenedor?',
          respuesta: 'Los precios varían según el tipo y tamaño. Por ejemplo: Contenedor Dry 20" desde $48,000 MXN, Dry 40" desde $75,000 MXN, High Cube 40" desde $104,000 MXN. Los precios incluyen IVA. Te recomendamos usar nuestro cotizador en línea o contactarnos para una cotización personalizada.'
        },
        {
          pregunta: '¿Los precios incluyen IVA?',
          respuesta: 'Sí, todos nuestros precios publicados ya contemplan el IVA. No hay costos ocultos en nuestras cotizaciones.'
        },
        {
          pregunta: '¿Ofrecen opciones de financiamiento?',
          respuesta: 'Sí, trabajamos con diferentes instituciones financieras para ofrecer planes de financiamiento adaptados a tus necesidades. Contáctanos para conocer las opciones disponibles.'
        },
        {
          pregunta: '¿Cuánto tiempo es válida una cotización?',
          respuesta: 'Nuestras cotizaciones tienen validez de 30 días. Los precios pueden variar según la disponibilidad y el tipo de cambio USD/MXN.'
        }
      ]
    },
    {
      categoria: 'Entrega e Instalación',
      preguntas: [
        {
          pregunta: '¿Hacen entregas en toda la República?',
          respuesta: 'Sí, realizamos entregas en toda la República Mexicana. El costo de transporte se calcula según la distancia y el tamaño del contenedor. Contáctanos para una cotización de envío.'
        },
        {
          pregunta: '¿Cuánto tiempo tarda la entrega?',
          respuesta: 'Para contenedores estándar sin modificaciones: 5-10 días. Para contenedores transformados: 30-45 días dependiendo de la complejidad del proyecto. El tiempo incluye fabricación y entrega.'
        },
        {
          pregunta: '¿Puedo recoger el contenedor en su patio?',
          respuesta: 'Sí, puedes recoger tu contenedor en cualquiera de nuestros 4 patios. Solo coordina el horario con anticipación llamando al (55) 26-08-88-86 o por WhatsApp al (55) 54-26-99-41.'
        },
        {
          pregunta: '¿Necesito preparar algo antes de la entrega?',
          respuesta: 'Sí, necesitas tener una superficie nivelada y firme (concreto, grava compactada o terreno preparado). Para contenedores habitables, debes tener las conexiones eléctricas y de agua preparadas. Te enviamos una guía detallada al confirmar tu pedido.'
        }
      ]
    },
    {
      categoria: 'Especificaciones Técnicas',
      preguntas: [
        {
          pregunta: '¿Cuánto pesa un contenedor vacío?',
          respuesta: 'Contenedor 10": 1,145 kg, Contenedor 20": 2,300 kg, Contenedor 40": 3,630 kg, High Cube 40": 3,800 kg. El peso varía según el tipo y las modificaciones realizadas.'
        },
        {
          pregunta: '¿Cuánto peso puede soportar un contenedor?',
          respuesta: 'Los contenedores están diseñados para soportar cargas pesadas. Contenedor 20" soporta hasta 28,240 kg, Contenedor 40" hasta 26,850 kg. Esto incluye el peso de la estructura más la carga.'
        },
        {
          pregunta: '¿Cuál es la vida útil de un contenedor?',
          respuesta: 'Un contenedor bien mantenido puede durar más de 25 años. El acero corten es extremadamente resistente a la corrosión y condiciones climáticas adversas.'
        },
        {
          pregunta: '¿Son resistentes a huracanes y sismos?',
          respuesta: 'Sí, los contenedores son extremadamente resistentes. Su estructura de acero soldado puede soportar vientos de huracán y movimientos sísmicos cuando está correctamente anclada al terreno.'
        }
      ]
    },
    {
      categoria: 'Permisos y Regulaciones',
      preguntas: [
        {
          pregunta: '¿Necesito permisos para instalar un contenedor?',
          respuesta: 'Depende del uso y tu ubicación. Para uso de bodega temporal generalmente no se requieren permisos. Para uso habitacional o comercial, sí necesitas permisos de construcción. Te asesoramos en todo el proceso.'
        },
        {
          pregunta: '¿Los contenedores cumplen con códigos de construcción?',
          respuesta: 'Sí, cuando transformamos contenedores para uso habitacional o comercial, cumplimos con todos los códigos de construcción locales, incluyendo estructuras, instalaciones eléctricas, hidráulicas y de seguridad.'
        },
        {
          pregunta: '¿Puedo usar un contenedor en zona residencial?',
          respuesta: 'Depende de las regulaciones locales de tu municipio. En muchas zonas residenciales está permitido, pero te recomendamos consultar con tu autoridad local. Nosotros te apoyamos con la documentación necesaria.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(cat => ({
    ...cat,
    preguntas: cat.preguntas.filter(p =>
      p.pregunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.respuesta.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.preguntas.length > 0);

  return (
    <div className="faq">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Preguntas Frecuentes</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero */}
      <section className="faq__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="faq__titulo">Preguntas Frecuentes</h1>
              <p className="faq__subtitulo">
                Encuentra respuestas a las dudas más comunes sobre nuestros contenedores y servicios
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Buscador */}
      <section className="faq__search py-4 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Busca tu pregunta aquí... (ej: precio, entrega, permisos)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="faq-search-input"
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Content */}
      <section className="faq__contenido py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-5">
                  <h4>No se encontraron resultados</h4>
                  <p>Intenta con otras palabras clave o <Link to="/contacto">contáctanos directamente</Link></p>
                </div>
              ) : (
                filteredFAQs.map((categoria, catIndex) => (
                  <div key={catIndex} className="faq-categoria mb-5">
                    <h2 className="faq-categoria__titulo mb-4">{categoria.categoria}</h2>
                    <Accordion defaultActiveKey="0">
                      {categoria.preguntas.map((faq, faqIndex) => (
                        <Accordion.Item
                          eventKey={`${catIndex}-${faqIndex}`}
                          key={faqIndex}
                          className="faq-item mb-3"
                        >
                          <Accordion.Header className="faq-item__header">
                            <span className="faq-item__numero">{faqIndex + 1}</span>
                            {faq.pregunta}
                          </Accordion.Header>
                          <Accordion.Body className="faq-item__body">
                            {faq.respuesta}
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                ))
              )}
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="faq__cta py-5 bg-primary text-white text-center">
        <Container>
          <h2 className="mb-4">¿No encontraste lo que buscabas?</h2>
          <p className="lead mb-4">
            Nuestro equipo está listo para responder todas tus dudas
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Button variant="light" size="lg" as={Link} to="/contacto">
              Contactar por Formulario
            </Button>
            <Button variant="outline-light" size="lg" href="https://wa.me/5554269941" target="_blank">
              WhatsApp: 55-54-26-99-41
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FAQ;
