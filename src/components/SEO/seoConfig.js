/**
 * SEO Configuration for all pages
 * Based on production creativosespacios.mx SEO strategy
 */

const BASE_URL = 'https://www.creativosespacios.mx';
const DEFAULT_IMAGE = `${BASE_URL}/creativos-images/creativos-espacios.png`;

const seoConfig = {
  // Home
  home: {
    title: 'Venta, renta y modificación de contenedores marítimos',
    description: 'Venta, renta y modificación de contenedores marítimos en oficinas, casas, sanitarios, bodegas, comedores, negocios, comercios, dormitorios, fast food, piscinas',
    keywords: 'Venta de contenedores marítimos, renta de contenedores marítimos, modificación de contenedores marítimos, contenedores para oficinas, contenedores para casas, contenedores para bodegas',
    canonical: BASE_URL,
    ogImage: DEFAULT_IMAGE,
  },

  // Conocenos Section
  quienesSomos: {
    title: 'Quiénes Somos',
    description: 'Conoce a Creativos Espacios, líderes en venta, renta y modificación de contenedores marítimos en México. Transformamos contenedores en espacios funcionales y creativos.',
    keywords: 'Quiénes somos, Creativos Espacios, empresa contenedores marítimos, contenedores México',
    canonical: `${BASE_URL}/quienes-somos`,
    ogImage: DEFAULT_IMAGE,
  },

  misionVision: {
    title: 'Misión y Visión',
    description: 'Nuestra misión es proporcionar soluciones innovadoras en contenedores marítimos. Nuestra visión es ser líderes en el mercado de contenedores transformados en México.',
    keywords: 'Misión, Visión, Creativos Espacios, valores empresariales',
    canonical: `${BASE_URL}/mision-vision`,
    ogImage: DEFAULT_IMAGE,
  },

  nuestroEquipo: {
    title: 'Nuestro Equipo',
    description: 'Conoce al equipo profesional de Creativos Espacios. Expertos en diseño, transformación y logística de contenedores marítimos.',
    keywords: 'Equipo, profesionales, Creativos Espacios, expertos contenedores',
    canonical: `${BASE_URL}/nuestro-equipo`,
    ogImage: DEFAULT_IMAGE,
  },

  historia: {
    title: 'Nuestra Historia',
    description: 'Descubre la historia de Creativos Espacios y cómo nos convertimos en referentes en contenedores marítimos en México.',
    keywords: 'Historia, trayectoria, Creativos Espacios, contenedores marítimos México',
    canonical: `${BASE_URL}/historia`,
    ogImage: DEFAULT_IMAGE,
  },

  valores: {
    title: 'Nuestros Valores',
    description: 'Los valores que nos definen: calidad, innovación, compromiso y sustentabilidad en cada proyecto de contenedores marítimos.',
    keywords: 'Valores, principios, Creativos Espacios, cultura empresarial',
    canonical: `${BASE_URL}/valores`,
    ogImage: DEFAULT_IMAGE,
  },

  clientes: {
    title: 'Nuestros Clientes',
    description: 'Clientes satisfechos que confían en Creativos Espacios para sus proyectos de contenedores marítimos. Testimonios reales de nuestro trabajo.',
    keywords: 'Clientes, testimonios, proyectos contenedores, Creativos Espacios',
    canonical: `${BASE_URL}/clientes`,
    ogImage: DEFAULT_IMAGE,
  },

  casosExito: {
    title: 'Casos de Éxito',
    description: 'Explora nuestros casos de éxito en proyectos de contenedores marítimos: oficinas, bodegas, casas, negocios y más.',
    keywords: 'Casos de éxito, proyectos exitosos, contenedores transformados, Creativos Espacios',
    canonical: `${BASE_URL}/casos-exito`,
    ogImage: DEFAULT_IMAGE,
  },

  // Fase 1 - Críticas
  presentacionEmpresarial: {
    title: 'Presentación Empresarial',
    description: 'Descarga nuestra presentación empresarial y conoce todos los servicios de Creativos Espacios en contenedores marítimos.',
    keywords: 'Presentación empresarial, brochure, catálogo Creativos Espacios, información contenedores',
    canonical: `${BASE_URL}/presentacion-empresarial`,
    ogImage: DEFAULT_IMAGE,
  },

  tiposContenedores: {
    title: 'Tipos de Contenedores Marítimos',
    description: 'Descubre todos los tipos de contenedores marítimos disponibles: 20 pies, 40 pies, high cube, refrigerados y más. Venta y renta.',
    keywords: 'Tipos de contenedores, contenedor 20 pies, contenedor 40 pies, high cube, contenedores refrigerados',
    canonical: `${BASE_URL}/tipos-contenedores`,
    ogImage: DEFAULT_IMAGE,
  },

  fichasTecnicas: {
    title: 'Fichas Técnicas de Contenedores',
    description: 'Consulta las fichas técnicas detalladas de todos nuestros contenedores marítimos: dimensiones, especificaciones y características.',
    keywords: 'Fichas técnicas, especificaciones contenedores, dimensiones contenedores, características técnicas',
    canonical: `${BASE_URL}/fichas-tecnicas`,
    ogImage: DEFAULT_IMAGE,
  },

  catalogo: {
    title: 'Catálogo de Proyectos',
    description: 'Explora nuestro catálogo completo de proyectos con contenedores marítimos: oficinas, casas, bodegas, negocios y más.',
    keywords: 'Catálogo proyectos, contenedores transformados, ideas contenedores, proyectos creativos',
    canonical: `${BASE_URL}/catalogo`,
    ogImage: DEFAULT_IMAGE,
  },

  servicios: {
    title: 'Servicios de Contenedores Marítimos',
    description: 'Servicios integrales de contenedores marítimos: venta, renta y transformación. Soluciones personalizadas para tu proyecto.',
    keywords: 'Servicios contenedores, venta contenedores, renta contenedores, transformación contenedores',
    canonical: `${BASE_URL}/servicios`,
    ogImage: DEFAULT_IMAGE,
  },

  venta: {
    title: 'Venta de Contenedores Marítimos',
    description: 'Venta de contenedores marítimos nuevos y usados. Las mejores opciones para tu proyecto. Entrega en toda la República Mexicana.',
    keywords: 'Venta contenedores marítimos, comprar contenedores, contenedores nuevos, contenedores usados',
    canonical: `${BASE_URL}/servicios/venta`,
    ogImage: DEFAULT_IMAGE,
  },

  alquiler: {
    title: 'Renta de Contenedores Marítimos',
    description: 'Renta de contenedores marítimos por día, semana o mes. Soluciones flexibles de almacenamiento temporal y espacios modulares.',
    keywords: 'Renta contenedores, alquiler contenedores, contenedores temporales, renta bodega',
    canonical: `${BASE_URL}/servicios/alquiler`,
    ogImage: DEFAULT_IMAGE,
  },

  transformacion: {
    title: 'Transformación de Contenedores',
    description: 'Servicio de transformación y modificación de contenedores marítimos. Convertimos contenedores en oficinas, casas, negocios y más.',
    keywords: 'Transformación contenedores, modificación contenedores, contenedores personalizados, diseño contenedores',
    canonical: `${BASE_URL}/servicios/transformacion`,
    ogImage: DEFAULT_IMAGE,
  },

  beneficios: {
    title: 'Beneficios de los Contenedores Marítimos',
    description: 'Descubre los beneficios de usar contenedores marítimos: económicos, sustentables, versátiles, rápidos de instalar y resistentes.',
    keywords: 'Beneficios contenedores, ventajas contenedores marítimos, contenedores sustentables, construcción modular',
    canonical: `${BASE_URL}/beneficios`,
    ogImage: DEFAULT_IMAGE,
  },

  cotizadorVenta: {
    title: 'Cotizar Compra de Contenedor',
    description: 'Cotiza la compra de tu contenedor marítimo. Obtén una cotización personalizada según tus necesidades y presupuesto.',
    keywords: 'Cotizar contenedor, precio contenedor, cotización venta, comprar contenedor',
    canonical: `${BASE_URL}/cotizador-venta`,
    ogImage: DEFAULT_IMAGE,
  },

  cotizadorRenta: {
    title: 'Cotizar Renta de Contenedor',
    description: 'Cotiza la renta de contenedores marítimos. Recibe una cotización ajustada al tiempo y características que necesitas.',
    keywords: 'Cotizar renta, precio renta contenedor, alquiler contenedor, cotización temporal',
    canonical: `${BASE_URL}/cotizador-renta`,
    ogImage: DEFAULT_IMAGE,
  },

  contacto: {
    title: 'Contacto',
    description: 'Contacta a Creativos Espacios. Estamos listos para asesorarte en tu proyecto de contenedores marítimos. Teléfono, email y ubicación.',
    keywords: 'Contacto, Creativos Espacios, teléfono, email, ubicación, asesoría contenedores',
    canonical: `${BASE_URL}/contacto`,
    ogImage: DEFAULT_IMAGE,
  },

  faq: {
    title: 'Preguntas Frecuentes',
    description: 'Respuestas a las preguntas más frecuentes sobre contenedores marítimos: medidas, costos, tiempos de entrega, instalación y más.',
    keywords: 'Preguntas frecuentes, FAQ, dudas contenedores, información contenedores marítimos',
    canonical: `${BASE_URL}/faq`,
    ogImage: DEFAULT_IMAGE,
  },

  redesSociales: {
    title: 'Redes Sociales',
    description: 'Síguenos en redes sociales y mantente al día con nuestros proyectos de contenedores marítimos. Instagram, Facebook, YouTube, TikTok.',
    keywords: 'Redes sociales, Instagram, Facebook, YouTube, TikTok, Creativos Espacios',
    canonical: `${BASE_URL}/redes-sociales`,
    ogImage: DEFAULT_IMAGE,
  },

  // Fase 2 - Importantes
  construccion: {
    title: 'Proceso de Construcción',
    description: 'Conoce el proceso paso a paso de construcción y transformación de contenedores marítimos. Desde el diseño hasta la entrega.',
    keywords: 'Proceso construcción, pasos construcción contenedores, cómo se construye, fabricación contenedores',
    canonical: `${BASE_URL}/construccion`,
    ogImage: DEFAULT_IMAGE,
  },

  serviciosAdicionales: {
    title: 'Servicios Adicionales',
    description: 'Servicios adicionales para tu contenedor: instalación eléctrica, plomería, aislamiento, pintura, transporte y más.',
    keywords: 'Servicios adicionales, instalación contenedores, equipamiento, personalización',
    canonical: `${BASE_URL}/servicios-adicionales`,
    ogImage: DEFAULT_IMAGE,
  },

  aliados: {
    title: 'Aliados Estratégicos',
    description: 'Nuestros aliados estratégicos y proveedores de confianza en la industria de contenedores marítimos.',
    keywords: 'Aliados, proveedores, socios comerciales, colaboradores',
    canonical: `${BASE_URL}/aliados`,
    ogImage: DEFAULT_IMAGE,
  },

  videos: {
    title: 'Videos de Proyectos',
    description: 'Videos de nuestros proyectos de contenedores marítimos. Mira transformaciones, recorridos virtuales y casos de éxito.',
    keywords: 'Videos contenedores, proyectos video, recorridos virtuales, transformaciones',
    canonical: `${BASE_URL}/videos`,
    ogImage: DEFAULT_IMAGE,
  },

  ubicacion: {
    title: 'Ubicación',
    description: 'Encuentra nuestra ubicación y horarios de atención. Visita nuestras instalaciones y conoce nuestros contenedores en vivo.',
    keywords: 'Ubicación, dirección, horarios, mapa, cómo llegar',
    canonical: `${BASE_URL}/ubicacion`,
    ogImage: DEFAULT_IMAGE,
  },

  patiosContenedores: {
    title: 'Patios de Contenedores',
    description: 'Visita nuestros patios de contenedores. Contamos con inventario disponible de contenedores en diferentes ubicaciones.',
    keywords: 'Patios contenedores, inventario, almacén contenedores, showroom',
    canonical: `${BASE_URL}/patios-contenedores`,
    ogImage: DEFAULT_IMAGE,
  },

  perfiladorCliente: {
    title: 'Perfilador de Cliente',
    description: 'Herramienta interactiva para encontrar el contenedor ideal según tus necesidades. Responde unas preguntas y obtén recomendaciones.',
    keywords: 'Perfilador cliente, encontrar contenedor ideal, recomendaciones, asesoría personalizada',
    canonical: `${BASE_URL}/perfilador-cliente`,
    ogImage: DEFAULT_IMAGE,
  },

  quejasSugerencias: {
    title: 'Quejas y Sugerencias',
    description: 'Tu opinión es importante. Envíanos tus quejas y sugerencias para mejorar nuestros servicios de contenedores marítimos.',
    keywords: 'Quejas, sugerencias, opiniones, feedback, mejora continua',
    canonical: `${BASE_URL}/quejas-sugerencias`,
    ogImage: DEFAULT_IMAGE,
  },

  // Fase 3 - Avanzadas
  personalizarContenedor: {
    title: 'Personalizar Contenedor',
    description: 'Herramienta interactiva para personalizar tu contenedor. Elige medidas, colores, acabados, instalaciones y más.',
    keywords: 'Personalizar contenedor, diseñar contenedor, configurador, customización',
    canonical: `${BASE_URL}/personalizar-contenedor`,
    ogImage: DEFAULT_IMAGE,
  },

  blog: {
    title: 'Blog',
    description: 'Blog de Creativos Espacios. Artículos, tips, tendencias y noticias sobre contenedores marítimos y construcción modular.',
    keywords: 'Blog contenedores, artículos, noticias, tips construcción, tendencias',
    canonical: `${BASE_URL}/blog`,
    ogImage: DEFAULT_IMAGE,
  },

  recorridoVirtual: {
    title: 'Recorrido Virtual',
    description: 'Realiza un recorrido virtual por nuestros proyectos de contenedores marítimos. Explora oficinas, casas y negocios en 360°.',
    keywords: 'Recorrido virtual, tour 360, visita virtual, contenedores 3D',
    canonical: `${BASE_URL}/recorrido-virtual`,
    ogImage: DEFAULT_IMAGE,
  },

  // Páginas Legales
  privacidad: {
    title: 'Aviso de Privacidad',
    description: 'Aviso de privacidad de Creativos Espacios. Conoce cómo protegemos y manejamos tu información personal.',
    keywords: 'Aviso de privacidad, protección datos, política privacidad',
    canonical: `${BASE_URL}/privacidad`,
    ogImage: DEFAULT_IMAGE,
  },

  terminos: {
    title: 'Términos y Condiciones',
    description: 'Términos y condiciones de uso del sitio web de Creativos Espacios y de nuestros servicios de contenedores marítimos.',
    keywords: 'Términos y condiciones, términos de uso, condiciones servicio',
    canonical: `${BASE_URL}/terminos`,
    ogImage: DEFAULT_IMAGE,
  },

  roboIdentidad: {
    title: 'Alerta de Robo de Identidad',
    description: 'Importante: información sobre robo de identidad y cómo protegerte de fraudes relacionados con Creativos Espacios.',
    keywords: 'Robo identidad, fraude, seguridad, alerta, protección',
    canonical: `${BASE_URL}/robo-identidad`,
    ogImage: DEFAULT_IMAGE,
  },

  mapaSitio: {
    title: 'Mapa del Sitio',
    description: 'Mapa del sitio de Creativos Espacios. Encuentra rápidamente todas las páginas y secciones de nuestro sitio web.',
    keywords: 'Mapa del sitio, navegación, índice, estructura sitio',
    canonical: `${BASE_URL}/mapa-sitio`,
    ogImage: DEFAULT_IMAGE,
  },
};

export default seoConfig;
