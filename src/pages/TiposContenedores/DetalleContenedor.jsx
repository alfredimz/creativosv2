import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './DetalleContenedor.scss';

const DetalleContenedor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState('azul');
  const [selectedImage, setSelectedImage] = useState(0);
  const [deliveryMethod, setDeliveryMethod] = useState('entrega');

  // Base de datos de contenedores (en producción vendría de API)
  const contenedoresDB = {
    'dry-10': {
      nombre: 'Contenedor marítimo de 10ft',
      tipo: 'Dry',
      condicion: 'Usado / segunda mano',
      precio: '$$$$$',
      caracteristicas: ['Construcción', 'Larga durabilidad', 'Acero resistente'],
      medidas: {
        largoExterno: '3.029m',
        largoInterno: '2.949m',
        capacidad: '16,40m³',
        anchoExterno: '2.438m',
        anchoInterno: '2.345m',
        pesoVacio: '1,145kg',
        alturaExterna: '2.591m',
        alturaInterna: '2.400m',
        pesoMaximo: '15,240kg'
      },
      colores: [
        { nombre: 'Azul', hex: '#2E5C8A' },
        { nombre: 'Naranja', hex: '#D9622C' },
        { nombre: 'Gris', hex: '#7A8389' },
        { nombre: 'Rojo', hex: '#C93534' }
      ],
      imagenes: [
        '/images/contenedores/dry-10-1.jpg',
        '/images/contenedores/dry-10-2.jpg',
        '/images/contenedores/dry-10-3.jpg'
      ]
    },
    'dry-20': {
      nombre: 'Contenedor marítimo Dry 20"',
      tipo: 'Dry',
      condicion: 'Nuevo',
      precio: '$48,000',
      caracteristicas: ['Construcción', 'Larga durabilidad', 'Acero resistente'],
      medidas: {
        largoExterno: '6.058m',
        largoInterno: '5.898m',
        capacidad: '33,2m³',
        anchoExterno: '2.438m',
        anchoInterno: '2.352m',
        pesoVacio: '2,300kg',
        alturaExterna: '2.591m',
        alturaInterna: '2.385m',
        pesoMaximo: '30,480kg'
      },
      colores: [
        { nombre: 'Azul', hex: '#2E5C8A' },
        { nombre: 'Naranja', hex: '#D9622C' },
        { nombre: 'Gris', hex: '#7A8389' },
        { nombre: 'Rojo', hex: '#C93534' }
      ],
      imagenes: [
        '/images/contenedores/dry-20-1.jpg',
        '/images/contenedores/dry-20-2.jpg',
        '/images/contenedores/dry-20-3.jpg'
      ]
    }
    // Agregar más contenedores según sea necesario
  };

  const contenedor = contenedoresDB[id] || contenedoresDB['dry-10'];

  const otrosContenedores = [
    { id: 'dry-10', nombre: 'Contenedor marítimo Dry 10"', imagen: 'dry-10.jpg', color: '#7CC5D8' },
    { id: 'dry-20', nombre: 'Contenedor marítimo Dry 20"', imagen: 'dry-20.jpg', color: '#7CC5D8' },
    { id: 'dry-40', nombre: 'Contenedor marítimo Dry 40"', imagen: 'dry-40.jpg', color: '#7CC5D8' },
    { id: 'high-cube-40', nombre: 'Contenedor marítimo High Cube 40"', imagen: 'hc-40.jpg', color: '#F4A261' }
  ];

  return (
    <div className="detalle-contenedor">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/tipos-contenedores" }}>
            Tipos de Contenedores
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{contenedor.nombre}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Título Principal */}
      <section className="detalle-contenedor__header">
        <Container>
          <h1 className="detalle-contenedor__titulo">{contenedor.nombre}</h1>
        </Container>
      </section>

      {/* Contenido Principal */}
      <section className="detalle-contenedor__contenido py-5">
        <Container>
          <Row>
            {/* Columna Izquierda: Galería de Imágenes */}
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="image-gallery">
                {/* Imagen Principal */}
                <div className="image-gallery__main mb-3">
                  <img
                    src={contenedor.imagenes[selectedImage]}
                    alt={contenedor.nombre}
                    className="img-fluid rounded shadow"
                  />
                </div>

                {/* Miniaturas */}
                <div className="image-gallery__thumbnails d-flex gap-2">
                  {contenedor.imagenes.map((img, index) => (
                    <div
                      key={index}
                      className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={img} alt={`Vista ${index + 1}`} className="img-fluid" />
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Columna Derecha: Información del Producto */}
            <Col lg={6}>
              <div className="product-info">
                {/* Título y Precio */}
                <h2 className="product-info__nombre">{contenedor.nombre}</h2>
                <p className="product-info__condicion">{contenedor.condicion}</p>
                <h3 className="product-info__precio">{contenedor.precio}</h3>
                <p className="product-info__iva">En nuestras cotizaciones contemplamos el IVA</p>

                {/* Características */}
                <div className="product-info__caracteristicas mb-4">
                  {contenedor.caracteristicas.map((car, index) => (
                    <div key={index} className="caracteristica-item">
                      <span className="icon">🔧</span>
                      <span>{car}</span>
                    </div>
                  ))}
                </div>

                {/* Selector de Color */}
                <div className="product-info__colores mb-4">
                  <h5>Escoge un color</h5>
                  <div className="d-flex gap-2 mt-2">
                    {contenedor.colores.map((color, index) => (
                      <div
                        key={index}
                        className={`color-option ${selectedColor === color.nombre.toLowerCase() ? 'active' : ''}`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setSelectedColor(color.nombre.toLowerCase())}
                        title={color.nombre}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Medidas */}
                <div className="product-info__medidas mb-4">
                  <h5>Medidas</h5>
                  <Row className="mt-3">
                    <Col xs={6} md={4} className="mb-3">
                      <div className="medida-item">
                        <small>Largo externo</small>
                        <strong>{contenedor.medidas.largoExterno}</strong>
                      </div>
                    </Col>
                    <Col xs={6} md={4} className="mb-3">
                      <div className="medida-item">
                        <small>Largo interno</small>
                        <strong>{contenedor.medidas.largoInterno}</strong>
                      </div>
                    </Col>
                    <Col xs={6} md={4} className="mb-3">
                      <div className="medida-item">
                        <small>Capacidad</small>
                        <strong>{contenedor.medidas.capacidad}</strong>
                      </div>
                    </Col>
                    <Col xs={6} md={4} className="mb-3">
                      <div className="medida-item">
                        <small>Ancho externo</small>
                        <strong>{contenedor.medidas.anchoExterno}</strong>
                      </div>
                    </Col>
                    <Col xs={6} md={4} className="mb-3">
                      <div className="medida-item">
                        <small>Ancho interno</small>
                        <strong>{contenedor.medidas.anchoInterno}</strong>
                      </div>
                    </Col>
                    <Col xs={6} md={4} className="mb-3">
                      <div className="medida-item">
                        <small>Peso vacío</small>
                        <strong>{contenedor.medidas.pesoVacio}</strong>
                      </div>
                    </Col>
                    <Col xs={6} md={4} className="mb-3">
                      <div className="medida-item">
                        <small>Altura externa</small>
                        <strong>{contenedor.medidas.alturaExterna}</strong>
                      </div>
                    </Col>
                    <Col xs={6} md={4} className="mb-3">
                      <div className="medida-item">
                        <small>Altura interna</small>
                        <strong>{contenedor.medidas.alturaInterna}</strong>
                      </div>
                    </Col>
                    <Col xs={6} md={4} className="mb-3">
                      <div className="medida-item">
                        <small>Máximo peso</small>
                        <strong>{contenedor.medidas.pesoMaximo}</strong>
                      </div>
                    </Col>
                  </Row>
                </div>

                {/* Cómo Conseguirlo */}
                <div className="product-info__entrega mb-4">
                  <h5>Cómo conseguirlo</h5>
                  <div className="entrega-opciones mt-3">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="entrega"
                        id="entrega-domicilio"
                        checked={deliveryMethod === 'entrega'}
                        onChange={() => setDeliveryMethod('entrega')}
                      />
                      <label className="form-check-label" htmlFor="entrega-domicilio">
                        <strong>Me lo entregan</strong>
                        <span className="badge bg-success ms-2">Disponible</span>
                        <p className="mb-0 text-muted small">Comunícate con nosotros para finalizar la compra</p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="entrega"
                        id="recoger-patio"
                        checked={deliveryMethod === 'recoger'}
                        onChange={() => setDeliveryMethod('recoger')}
                      />
                      <label className="form-check-label" htmlFor="recoger-patio">
                        <strong>Lo recojo en el patio</strong>
                        <p className="mb-0 text-muted small">Comunícate con nosotros para verificar el horario</p>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Botones de Acción */}
                <div className="product-info__acciones">
                  <Button variant="primary" size="lg" className="w-100 mb-3">
                    ▶ Quiero comprar el contenedor
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="w-100"
                    onClick={() => navigate('/tipos-contenedores')}
                  >
                    Ver otros contenedores
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Otros Contenedores */}
      <section className="detalle-contenedor__otros py-5 bg-light">
        <Container>
          <h3 className="text-center mb-4">Ver otros contenedores</h3>
          <Row>
            {otrosContenedores.filter(c => c.id !== id).slice(0, 4).map((cont) => (
              <Col md={6} lg={3} key={cont.id} className="mb-4">
                <Link to={`/tipos-contenedores/${cont.id}`} className="text-decoration-none">
                  <Card
                    className="contenedor-card-mini h-100 border-0 shadow-sm"
                    style={{ backgroundColor: cont.color }}
                  >
                    <div className="p-3">
                      <Card.Img
                        variant="top"
                        src={`/images/contenedores/${cont.imagen}`}
                        alt={cont.nombre}
                      />
                    </div>
                    <Card.Body className="text-center bg-white">
                      <Card.Title className="h6">{cont.nombre}</Card.Title>
                      <div className="icon-plus-circle">+</div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default DetalleContenedor;
