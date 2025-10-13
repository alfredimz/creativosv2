import React from 'react';
import { Container, Row, Col, Breadcrumb, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Servicios.scss';

const Venta = () => {
  const beneficios = [
    { icono: '🏆', titulo: 'Activo Permanente', descripcion: 'Inversión única que aumenta el valor de tu patrimonio' },
    { icono: '🔧', titulo: 'Personalización Total', descripcion: 'Modifica y adapta el contenedor según tus necesidades' },
    { icono: '💼', titulo: 'Sin Pagos Recurrentes', descripcion: 'Una sola compra sin rentas mensuales' },
    { icono: '🌍', titulo: 'Reventa Posible', descripcion: 'Recupera tu inversión vendiéndolo en el futuro' },
    { icono: '📍', titulo: 'Instalación Permanente', descripcion: 'Ubícalo donde quieras, sin límite de tiempo' },
    { icono: '🔒', titulo: 'Propiedad Absoluta', descripcion: 'Es tuyo para siempre, úsalo como mejor te convenga' }
  ];

  const tipos = [
    {
      categoria: 'Nuevos',
      badge: 'Premium',
      descripcion: 'Primer viaje, condición impecable',
      caracteristicas: ['Garantía completa', 'Sin óxido', 'Puertas perfectas', 'Pintura original'],
      precio: 'Desde $120,000'
    },
    {
      categoria: 'Semi-Nuevos',
      badge: 'Popular',
      descripcion: '1-3 viajes, excelente estado',
      caracteristicas: ['Garantía de 1 año', 'Óxido mínimo', 'Funcionalidad 100%', 'Mejor precio-calidad'],
      precio: 'Desde $80,000'
    },
    {
      categoria: 'Usados Grado A',
      badge: 'Económico',
      descripcion: 'Múltiples viajes, condición funcional',
      caracteristicas: ['6 meses garantía', 'Estructuralmente sólido', 'Listo para usar', 'Máximo ahorro'],
      precio: 'Desde $50,000'
    }
  ];

  const aplicaciones = [
    'Almacén permanente para tu negocio',
    'Base para proyecto de construcción modular',
    'Oficina o local comercial propio',
    'Taller o espacio de trabajo',
    'Bodega de herramientas y equipo',
    'Inversión para reventa o renta posterior'
  ];

  const proceso = [
    { paso: '01', titulo: 'Selecciona', descripcion: 'Elige el tipo y tamaño que necesitas' },
    { paso: '02', titulo: 'Inspecciona', descripcion: 'Visita nuestro patio y revisa personalmente' },
    { paso: '03', titulo: 'Cotiza', descripcion: 'Obtén precio final con entrega incluida' },
    { paso: '04', titulo: 'Compra', descripcion: 'Contrato simple, pago seguro' },
    { paso: '05', titulo: 'Recibe', descripcion: 'Entrega en tu ubicación en 3-5 días' }
  ];

  return (
    <div className="servicio-page">
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/servicios" }}>Servicios</Breadcrumb.Item>
          <Breadcrumb.Item active>Venta de Contenedores</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      <section className="servicio-page__banner">
        <div className="servicio-page__banner-overlay">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="servicio-page__banner-title">Venta de Contenedores</h1>
                <p className="servicio-page__banner-subtitle">
                  Invierte en un contenedor propio y obtén espacio permanente sin pagos mensuales
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="servicio-page__intro">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="servicio-page__intro-content">
                <h2 className="servicio-page__section-title">¿Por Qué Comprar un Contenedor?</h2>
                <p className="servicio-page__intro-text">
                  Comprar un contenedor marítimo es una inversión inteligente para quienes necesitan
                  espacio permanente de almacenamiento o construcción. Con más de 15 años en el mercado,
                  ofrecemos contenedores certificados de diferentes grados de calidad para adaptarnos
                  a tu presupuesto y necesidades específicas.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="servicio-page__beneficios">
        <Container>
          <h2 className="servicio-page__section-title text-center mb-5">Ventajas de Comprar</h2>
          <Row>
            {beneficios.map((beneficio, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="servicio-page__beneficio">
                  <div className="servicio-page__beneficio-icono">{beneficio.icono}</div>
                  <h3 className="servicio-page__beneficio-titulo">{beneficio.titulo}</h3>
                  <p className="servicio-page__beneficio-descripcion">{beneficio.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="servicio-page__tipos">
        <Container>
          <h2 className="servicio-page__section-title text-center mb-5">Tipos de Contenedores</h2>
          <Row>
            {tipos.map((tipo, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="servicio-page__tipo-card h-100">
                  <Card.Body>
                    <Badge bg={tipo.badge === 'Premium' ? 'primary' : tipo.badge === 'Popular' ? 'success' : 'warning'} className="mb-3">
                      {tipo.badge}
                    </Badge>
                    <h3 className="servicio-page__tipo-categoria">{tipo.categoria}</h3>
                    <p className="servicio-page__tipo-descripcion">{tipo.descripcion}</p>
                    <div className="servicio-page__tipo-precio">{tipo.precio}</div>
                    <ul className="servicio-page__tipo-lista">
                      {tipo.caracteristicas.map((car, i) => (
                        <li key={i}>✓ {car}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <p className="servicio-page__nota">*Precios para contenedor de 20 pies. Incluye entrega en CDMX.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="servicio-page__aplicaciones">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="servicio-page__section-title">Usos Comunes</h2>
              <ul className="servicio-page__lista">
                {aplicaciones.map((app, index) => (
                  <li key={index}>{app}</li>
                ))}
              </ul>
            </Col>
            <Col lg={6}>
              <div className="servicio-page__imagen-placeholder">
                <div className="servicio-page__placeholder-content">
                  <span>🏗️</span>
                  <p>Contenedor en Venta</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="servicio-page__proceso">
        <Container>
          <h2 className="servicio-page__section-title text-center mb-5">Proceso de Compra</h2>
          <Row>
            {proceso.map((item, index) => (
              <Col key={index} md={6} lg className="mb-4">
                <div className="servicio-page__proceso-item">
                  <div className="servicio-page__proceso-numero">{item.paso}</div>
                  <h3 className="servicio-page__proceso-titulo">{item.titulo}</h3>
                  <p className="servicio-page__proceso-descripcion">{item.descripcion}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="servicio-page__cta">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="servicio-page__cta-title">¿Listo para Comprar?</h2>
              <p className="servicio-page__cta-text">
                Solicita una cotización personalizada y visita nuestros patios para ver los contenedores disponibles.
              </p>
              <Link to="/cotizador-venta" className="servicio-page__cta-button">
                Cotizar Compra
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Venta;
