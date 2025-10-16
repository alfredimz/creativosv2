import React, { useState } from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SEO, seoConfig } from '../../components/SEO';
import { FadeIn, SlideIn, ScaleIn } from '../../components/Animations'; // FASE 9 + 10
import './Blog.scss';

const Blog = () => {
  const [filtroActivo, setFiltroActivo] = useState('Todos');
  const [paginaActual, setPaginaActual] = useState(1); // FASE 9
  const articulosPorPagina = 6; // FASE 9

  // Datos de artículos del blog - FASE 9
  const articulos = [
    // DESTACADO
    {
      id: 1,
      slug: 'guia-completa-venta-contenedores',
      titulo: 'Guía Completa para Comprar Contenedores Marítimos',
      resumen: 'Todo lo que necesitas saber antes de comprar un contenedor: tipos, precios, condiciones y consejos de expertos.',
      categoria: 'Venta',
      fecha: '15 Ene 2025',
      autor: 'Equipo Creativos',
      imagen: '/images/blog/venta-contenedores.jpg',
      destacado: true
    },
    // VENTA (5 artículos)
    {
      id: 2,
      slug: 'contenedores-nuevos-vs-usados',
      titulo: 'Contenedores Nuevos vs Usados: ¿Cuál Elegir?',
      resumen: 'Comparativa detallada entre contenedores nuevos y usados. Ventajas, desventajas y cuándo elegir cada uno.',
      categoria: 'Venta',
      fecha: '12 Ene 2025',
      autor: 'María González',
      imagen: '/images/blog/nuevos-vs-usados.jpg',
      destacado: false
    },
    {
      id: 3,
      slug: 'mejores-precios-contenedores-2025',
      titulo: 'Mejores Precios de Contenedores 2025',
      resumen: 'Análisis de mercado actualizado con los mejores precios y tendencias para comprar contenedores este año.',
      categoria: 'Venta',
      fecha: '10 Ene 2025',
      autor: 'Juan Pérez',
      imagen: '/images/blog/precios-2025.jpg',
      destacado: false
    },
    {
      id: 4,
      slug: 'certificaciones-contenedores-compra',
      titulo: 'Certificaciones Importantes al Comprar Contenedores',
      resumen: 'Conoce las certificaciones esenciales y documentos legales necesarios en la compra de contenedores.',
      categoria: 'Venta',
      fecha: '08 Ene 2025',
      autor: 'Ana Martínez',
      imagen: '/images/blog/certificaciones.jpg',
      destacado: false
    },
    {
      id: 5,
      slug: 'como-inspeccionar-contenedor-antes-comprar',
      titulo: 'Cómo Inspeccionar un Contenedor Antes de Comprar',
      resumen: 'Checklist profesional de inspección: qué revisar en puertas, pisos, paredes y estructura antes de comprar.',
      categoria: 'Venta',
      fecha: '05 Ene 2025',
      autor: 'Carlos Ruiz',
      imagen: '/images/blog/inspeccion.jpg',
      destacado: false
    },
    {
      id: 6,
      slug: 'financiamiento-compra-contenedores',
      titulo: 'Opciones de Financiamiento para Compra de Contenedores',
      resumen: 'Descubre las mejores opciones de crédito y financiamiento para adquirir contenedores marítimos.',
      categoria: 'Venta',
      fecha: '03 Ene 2025',
      autor: 'Laura Sánchez',
      imagen: '/images/blog/financiamiento.jpg',
      destacado: false
    },
    // RENTA (5 artículos)
    {
      id: 7,
      slug: 'ventajas-rentar-contenedores',
      titulo: '10 Ventajas de Rentar Contenedores vs Comprar',
      resumen: 'Análisis completo de por qué la renta puede ser la mejor opción para tu negocio o proyecto temporal.',
      categoria: 'Renta',
      fecha: '02 Ene 2025',
      autor: 'Pedro Ramírez',
      imagen: '/images/blog/rentar-ventajas.jpg',
      destacado: false
    },
    {
      id: 8,
      slug: 'planes-renta-contenedores',
      titulo: 'Planes de Renta de Contenedores: Guía Completa',
      resumen: 'Conoce los diferentes planes de renta: corto plazo, largo plazo, mensual y anual. Encuentra el ideal para ti.',
      categoria: 'Renta',
      fecha: '30 Dic 2024',
      autor: 'Sofía López',
      imagen: '/images/blog/planes-renta.jpg',
      destacado: false
    },
    {
      id: 9,
      slug: 'renta-contenedores-eventos',
      titulo: 'Renta de Contenedores para Eventos Temporales',
      resumen: 'Soluciones de almacenamiento temporal para ferias, eventos y exposiciones con contenedores.',
      categoria: 'Renta',
      fecha: '28 Dic 2024',
      autor: 'Miguel Ángel',
      imagen: '/images/blog/eventos.jpg',
      destacado: false
    },
    {
      id: 10,
      slug: 'contrato-renta-que-incluye',
      titulo: 'Qué Debe Incluir tu Contrato de Renta de Contenedores',
      resumen: 'Puntos clave a verificar en un contrato de renta: mantenimiento, seguro, transporte y responsabilidades.',
      categoria: 'Renta',
      fecha: '26 Dic 2024',
      autor: 'Daniela Torres',
      imagen: '/images/blog/contrato.jpg',
      destacado: false
    },
    {
      id: 11,
      slug: 'renta-contenedores-refrigerados',
      titulo: 'Renta de Contenedores Refrigerados para Productos Perecederos',
      resumen: 'Todo sobre la renta de contenedores reefer: temperaturas, consumo eléctrico y aplicaciones industriales.',
      categoria: 'Renta',
      fecha: '24 Dic 2024',
      autor: 'Roberto Díaz',
      imagen: '/images/blog/reefer-renta.jpg',
      destacado: false
    },
    // CONSTRUCCIÓN (5 artículos)
    {
      id: 12,
      slug: 'casas-contenedores-2025',
      titulo: 'Casas de Contenedores: Tendencias 2025',
      resumen: 'Las últimas tendencias en construcción de viviendas con contenedores: diseños, costos y sustentabilidad.',
      categoria: 'Construcción',
      fecha: '22 Dic 2024',
      autor: 'Arq. Patricia Morales',
      imagen: '/images/blog/casas-2025.jpg',
      destacado: false
    },
    {
      id: 13,
      slug: 'permisos-construccion-contenedores',
      titulo: 'Permisos y Regulaciones para Construir con Contenedores',
      resumen: 'Guía legal completa sobre permisos de construcción, zonificación y normativas para proyectos con contenedores.',
      categoria: 'Construcción',
      fecha: '20 Dic 2024',
      autor: 'Lic. Fernando Vega',
      imagen: '/images/blog/permisos.jpg',
      destacado: false
    },
    {
      id: 14,
      slug: 'aislamiento-termico-contenedores',
      titulo: 'Aislamiento Térmico en Contenedores: Guía Técnica',
      resumen: 'Tipos de aislamiento, materiales recomendados y técnicas de instalación para climatizar contenedores.',
      categoria: 'Construcción',
      fecha: '18 Dic 2024',
      autor: 'Ing. Ricardo Herrera',
      imagen: '/images/blog/aislamiento.jpg',
      destacado: false
    },
    {
      id: 15,
      slug: 'oficinas-modulares-contenedores',
      titulo: 'Oficinas Modulares con Contenedores: Casos de Éxito',
      resumen: 'Proyectos reales de oficinas construidas con contenedores: costos, tiempos y resultados finales.',
      categoria: 'Construcción',
      fecha: '16 Dic 2024',
      autor: 'Arq. Luis Campos',
      imagen: '/images/blog/oficinas-casos.jpg',
      destacado: false
    },
    {
      id: 16,
      slug: 'instalacion-electrica-contenedores',
      titulo: 'Instalación Eléctrica en Contenedores: Best Practices',
      resumen: 'Especificaciones técnicas, normativas y recomendaciones para sistemas eléctricos en contenedores habitables.',
      categoria: 'Construcción',
      fecha: '14 Dic 2024',
      autor: 'Ing. Eléctrico José Núñez',
      imagen: '/images/blog/electrica.jpg',
      destacado: false
    },
    // TRANSFORMACIÓN (4 artículos)
    {
      id: 17,
      slug: 'transformacion-contenedor-bar',
      titulo: 'Cómo Transformar un Contenedor en Bar o Restaurante',
      resumen: 'Paso a paso para convertir un contenedor en un espacio comercial gastronómico funcional y atractivo.',
      categoria: 'Transformación',
      fecha: '12 Dic 2024',
      autor: 'Chef Martín Silva',
      imagen: '/images/blog/bar-contenedor.jpg',
      destacado: false
    },
    {
      id: 18,
      slug: 'gimnasio-contenedor',
      titulo: 'Contenedores Transformados en Gimnasios y Estudios',
      resumen: 'Diseños innovadores de espacios fitness en contenedores: equipamiento, ventilación y distribución.',
      categoria: 'Transformación',
      fecha: '10 Dic 2024',
      autor: 'Entrenador Carlos Méndez',
      imagen: '/images/blog/gimnasio.jpg',
      destacado: false
    },
    {
      id: 19,
      slug: 'tienda-pop-up-contenedor',
      titulo: 'Tiendas Pop-Up con Contenedores: Marketing Innovador',
      resumen: 'Cómo usar contenedores transformados para crear espacios comerciales temporales impactantes.',
      categoria: 'Transformación',
      fecha: '08 Dic 2024',
      autor: 'Marketing Mónica Reyes',
      imagen: '/images/blog/popup.jpg',
      destacado: false
    },
    {
      id: 20,
      slug: 'contenedor-estudio-arte',
      titulo: 'Contenedores como Estudios de Arte y Talleres Creativos',
      resumen: 'Inspiración y consejos para transformar contenedores en espacios creativos con iluminación natural.',
      categoria: 'Transformación',
      fecha: '06 Dic 2024',
      autor: 'Artista Diana Cruz',
      imagen: '/images/blog/estudio-arte.jpg',
      destacado: false
    },
    // TIPS (5 artículos)
    {
      id: 21,
      slug: 'mantenimiento-contenedor',
      titulo: 'Mantenimiento Preventivo de Contenedores: Checklist Anual',
      resumen: 'Calendario de mantenimiento para prolongar la vida útil de tus contenedores y prevenir problemas costosos.',
      categoria: 'Tips',
      fecha: '04 Dic 2024',
      autor: 'Técnico Manuel Ortiz',
      imagen: '/images/blog/mantenimiento.jpg',
      destacado: false
    },
    {
      id: 22,
      slug: 'como-elegir-tamano-contenedor',
      titulo: 'Cómo Elegir el Tamaño de Contenedor Correcto',
      resumen: 'Guía práctica para calcular el espacio que necesitas: 10, 20 o 40 pies según tu proyecto.',
      categoria: 'Tips',
      fecha: '02 Dic 2024',
      autor: 'Asesor Raúl Vargas',
      imagen: '/images/blog/tamano.jpg',
      destacado: false
    },
    {
      id: 23,
      slug: 'pintar-contenedor',
      titulo: 'Cómo Pintar un Contenedor: Guía Paso a Paso',
      resumen: 'Preparación de superficie, tipos de pintura, herramientas necesarias y técnicas profesionales de aplicación.',
      categoria: 'Tips',
      fecha: '30 Nov 2024',
      autor: 'Pintor Profesional Javier Luna',
      imagen: '/images/blog/pintar.jpg',
      destacado: false
    },
    {
      id: 24,
      slug: 'organizacion-interna-contenedor',
      titulo: 'Tips de Organización Interna para Contenedores de Almacenamiento',
      resumen: 'Maximiza el espacio con estanterías, ganchos y sistemas de organización inteligentes.',
      categoria: 'Tips',
      fecha: '28 Nov 2024',
      autor: 'Organizadora Paula Jiménez',
      imagen: '/images/blog/organizacion.jpg',
      destacado: false
    },
    {
      id: 25,
      slug: 'seguridad-contenedor',
      titulo: 'Seguridad en Contenedores: Cerraduras y Sistemas Anti-Robo',
      resumen: 'Mejores prácticas de seguridad: tipos de candados, alarmas y sistemas de monitoreo para contenedores.',
      categoria: 'Tips',
      fecha: '26 Nov 2024',
      autor: 'Experto en Seguridad Omar Castillo',
      imagen: '/images/blog/seguridad.jpg',
      destacado: false
    }
  ];

  const categorias = ['Todos', 'Venta', 'Renta', 'Construcción', 'Transformación', 'Tips'];

  // Filtrar artículos por categoría - FASE 9
  const articulosFiltrados = filtroActivo === 'Todos'
    ? articulos
    : articulos.filter(art => art.categoria === filtroActivo);

  // Contar artículos por categoría
  const contarPorCategoria = (categoria) => {
    if (categoria === 'Todos') return articulos.length;
    return articulos.filter(art => art.categoria === categoria).length;
  };

  const articuloDestacado = articulosFiltrados.find(art => art.destacado);
  const otrosArticulos = articulosFiltrados.filter(art => !art.destacado);

  // Paginación - FASE 9
  const totalPaginas = Math.ceil(otrosArticulos.length / articulosPorPagina);
  const indiceUltimo = paginaActual * articulosPorPagina;
  const indicePrimero = indiceUltimo - articulosPorPagina;
  const articulosPaginados = otrosArticulos.slice(indicePrimero, indiceUltimo);

  // Manejar cambio de página
  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resetear página al cambiar filtro
  const cambiarFiltro = (categoria) => {
    setFiltroActivo(categoria);
    setPaginaActual(1);
  };

  // Generar números de página
  const generarNumerosPagina = () => {
    const numeros = [];
    const maxNumeros = 5; // Mostrar máximo 5 números a la vez

    let inicio = Math.max(1, paginaActual - 2);
    let fin = Math.min(totalPaginas, inicio + maxNumeros - 1);

    if (fin - inicio < maxNumeros - 1) {
      inicio = Math.max(1, fin - maxNumeros + 1);
    }

    for (let i = inicio; i <= fin; i++) {
      numeros.push(i);
    }

    return numeros;
  };

  return (
    <div className="blog-page">
      <SEO {...seoConfig.blog} />

      {/* Hero Section */}
      <section className="blog-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <FadeIn delay={0.2} duration={0.8}>
                <h1 className="blog-hero__title">Blog Creativos Espacios</h1>
              </FadeIn>
              <FadeIn delay={0.4} duration={0.8}>
                <p className="blog-hero__description">
                  Noticias, consejos y tendencias sobre contenedores marítimos y soluciones modulares
                </p>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filtros Section */}
      <section className="blog-filtros">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <FadeIn delay={0.2}>
                <div className="blog-filtros__container">
                  {categorias.map((categoria) => (
                    <button
                      key={categoria}
                      className={`blog-filtros__button ${filtroActivo === categoria ? 'blog-filtros__button--active' : ''}`}
                      onClick={() => cambiarFiltro(categoria)}
                    >
                      {categoria} <span className="blog-filtros__count">({contarPorCategoria(categoria)})</span>
                    </button>
                  ))}
                </div>
              </FadeIn>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Destacado Section */}
      {articuloDestacado && (
        <section className="blog-destacado">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <SlideIn direction="left" delay={0.3} distance={50}>
                  <div className="blog-destacado__imagen">
                    <span className="blog-destacado__badge">Destacado</span>
                    <div className="blog-destacado__placeholder">Imagen del Artículo</div>
                  </div>
                </SlideIn>
              </Col>
              <Col lg={6}>
                <FadeIn delay={0.4}>
                  <div className="blog-destacado__contenido">
                    <span className="blog-destacado__categoria">{articuloDestacado.categoria}</span>
                    <h2 className="blog-destacado__titulo">{articuloDestacado.titulo}</h2>
                    <p className="blog-destacado__resumen">{articuloDestacado.resumen}</p>
                    <div className="blog-destacado__meta">
                      <span className="blog-destacado__autor">{articuloDestacado.autor}</span>
                      <span className="blog-destacado__separador">•</span>
                      <span className="blog-destacado__fecha">{articuloDestacado.fecha}</span>
                    </div>
                    <Link to={`/blog/${articuloDestacado.id}`} className="blog-destacado__button">
                      Leer Artículo Completo →
                    </Link>
                  </div>
                </FadeIn>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Grid Section */}
      <section className="blog-grid">
        <Container>
          <Row>
            {articulosPaginados.map((articulo, index) => (
              <Col key={articulo.id} lg={4} md={6} className="mb-4">
                <ScaleIn delay={0.1 * index} duration={0.5}>
                  <Card className="blog-grid__card h-100">
                    <div className="blog-grid__card-imagen">
                      <div className="blog-grid__card-placeholder">Imagen del Artículo</div>
                      <span className="blog-grid__card-categoria">
                        {articulo.categoria}
                      </span>
                    </div>
                    <Card.Body>
                      <Card.Title className="blog-grid__card-titulo">
                        <Link to={`/blog/${articulo.id}`}>{articulo.titulo}</Link>
                      </Card.Title>
                      <Card.Text className="blog-grid__card-resumen">
                        {articulo.resumen}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="blog-grid__card-footer">
                      <small className="blog-grid__card-autor">{articulo.autor}</small>
                      <small className="blog-grid__card-fecha">{articulo.fecha}</small>
                    </Card.Footer>
                  </Card>
                </ScaleIn>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Paginacion Section - FASE 9 Funcional */}
      {totalPaginas > 1 && (
        <section className="blog-paginacion">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <Pagination className="justify-content-center blog-paginacion__controls">
                  <Pagination.First
                    onClick={() => cambiarPagina(1)}
                    disabled={paginaActual === 1}
                  />
                  <Pagination.Prev
                    onClick={() => cambiarPagina(paginaActual - 1)}
                    disabled={paginaActual === 1}
                  />

                  {/* Mostrar primera página si no está en el rango */}
                  {generarNumerosPagina()[0] > 1 && (
                    <>
                      <Pagination.Item onClick={() => cambiarPagina(1)}>
                        1
                      </Pagination.Item>
                      {generarNumerosPagina()[0] > 2 && <Pagination.Ellipsis disabled />}
                    </>
                  )}

                  {/* Números de página del rango */}
                  {generarNumerosPagina().map((numero) => (
                    <Pagination.Item
                      key={numero}
                      active={numero === paginaActual}
                      onClick={() => cambiarPagina(numero)}
                    >
                      {numero}
                    </Pagination.Item>
                  ))}

                  {/* Mostrar última página si no está en el rango */}
                  {generarNumerosPagina()[generarNumerosPagina().length - 1] < totalPaginas && (
                    <>
                      {generarNumerosPagina()[generarNumerosPagina().length - 1] < totalPaginas - 1 && (
                        <Pagination.Ellipsis disabled />
                      )}
                      <Pagination.Item onClick={() => cambiarPagina(totalPaginas)}>
                        {totalPaginas}
                      </Pagination.Item>
                    </>
                  )}

                  <Pagination.Next
                    onClick={() => cambiarPagina(paginaActual + 1)}
                    disabled={paginaActual === totalPaginas}
                  />
                  <Pagination.Last
                    onClick={() => cambiarPagina(totalPaginas)}
                    disabled={paginaActual === totalPaginas}
                  />
                </Pagination>
                <div className="text-center mt-3 text-muted">
                  Mostrando {indicePrimero + 1} - {Math.min(indiceUltimo, otrosArticulos.length)} de {otrosArticulos.length} artículos
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="blog-newsletter">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <FadeIn delay={0.2}>
                <h2 className="blog-newsletter__title">Suscríbete a Nuestro Newsletter</h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="blog-newsletter__text">
                  Recibe las últimas noticias y consejos directamente en tu correo
                </p>
              </FadeIn>
              <SlideIn direction="up" delay={0.4} distance={30}>
                <div className="blog-newsletter__form">
                  <input
                    type="email"
                    className="blog-newsletter__input"
                    placeholder="Tu correo electrónico"
                  />
                  <button className="blog-newsletter__button">Suscribirse</button>
                </div>
              </SlideIn>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
