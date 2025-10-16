# 🔧 PLAN DE CORRECCIONES - CREATIVOS ESPACIOS

**Fecha:** 2025-01-14
**Estado:** En Progreso
**Prioridad:** Alta

---

## 🎨 GUÍA DE DISEÑO PARA IMPLEMENTACIÓN

### ⚠️ IMPORTANTE - Consultar Figma
**Para TODO lo visual:**
- ✅ Consultar diseño en Figma SIEMPRE
- ✅ Si no existe visual en Figma: usar prácticas existentes (espacios, colores, estructura)
- ⚠️ **EXCEPCIÓN:** Tipografía - NO seguir Figma, usar las especificaciones de FASE 1
- ✅ Mantener consistencia visual del proyecto

---

## 📋 RESUMEN DE CORRECCIONES SOLICITADAS

### FASE 0: HERO SLIDER HOME (NUEVO - CRÍTICO)
**Prioridad:** 🔴 Crítica - Primera impresión del sitio

**Figma:**
- File Key: `5wJFG1eYWcGQak6eyjAgjo`
- Home Node ID: `207-2`
- Solo existe diseño del Slide 1 en Figma
- Adaptar diseño para slides 2-5

1. **Slider Manual (5 Slides) - CONTENIDO DEFINIDO**

   **Slide 1: Contacto** (Hero actual)
   - Mantener diseño y contenido actual
   - Agregar modal de video YouTube

   **Slide 2: Venta de Contenedores**
   - Título: "Venta de Contenedores Marítimos"
   - Subtítulo: "Nuevos y usados, entrega inmediata"
   - Botón CTA: "Ver Catálogo" → `/catalogo`
   - Imagen: Contenedor nuevo/para venta (buscar en internet)

   **Slide 3: Renta de Contenedores**
   - Título: "Renta de Contenedores"
   - Subtítulo: "Soluciones flexibles para almacenamiento temporal"
   - Botón CTA: "Ver Opciones de Renta" → `/servicios/renta`
   - Imagen: Contenedor en renta (buscar en internet)

   **Slide 4: Construcciones**
   - Título: "Construcción con Contenedores"
   - Subtítulo: "Transforma espacios, crea soluciones innovadoras"
   - Botón CTA: "Ver Proyectos" → `/construccion`
   - Imagen: Contenedor transformado (buscar en internet)

   **Slide 5: Servicios Arquitectónicos y Adicionales**
   - Título: "Servicios Completos"
   - Subtítulo: "Arquitectura, diseño y servicios adicionales"
   - Botón CTA: "Conocer Servicios" → `/servicios-adicionales`
   - Imagen: Contenedor con servicios (buscar en internet)

2. **Modal de Video YouTube**
   - ✅ Icono Play en cada slide
   - ✅ Al dar clic: modal pantalla completa
   - ✅ Video ID: `uMXB54itJeM`
   - ✅ Iframe YouTube embed
   - ✅ Cerrar con X o clic fuera

3. **Características del Slider**
   - ✅ NO automático (solo manual)
   - ✅ Navegación por puntos (dots)
   - ✅ Usuario controla el cambio de slide
   - ✅ Indicador visual de slide activo
   - ✅ Diseño basado en Figma Node 207-2

4. **Implementación Técnica**
   - Librería: Swiper
   - Transiciones suaves
   - Responsive en todos los breakpoints
   - Lazy loading de imágenes
   - Modal con React Bootstrap o componente custom

5. **Nueva Sección en Home: Productos Estrella**
   - ✅ Ubicación: Después de "Servicios", antes de botones de perfilamiento
   - ✅ Título: "Nuestros Productos Estrella"
   - ✅ 3 Cards destacadas:
     - Contenedores para Casas → `/productos/casas`
     - Contenedores para Bodegas → `/productos/bodegas`
     - Contenedores para Oficinas → `/productos/oficinas`
   - ✅ Cada card: imagen, descripción breve, CTA

---

### FASE 1: TIPOGRAFÍA Y RESPONSIVE (CRÍTICO)
**Prioridad:** 🔴 Alta - Afecta todo el sitio

1. **Tipografía Responsiva**
   - ✅ Implementar clamp() para todas las fuentes
   - ✅ Pantallas grandes = fuentes más grandes
   - ✅ Usar breakpoints de Bootstrap
   - ✅ Letra actualmente muy pequeña

2. **Fuentes Correctas**
   - ✅ **Outfit** → Títulos, menús y footer
   - ✅ **Hind** → Párrafos
   - ✅ Verificar que se aplique en todo el sitio

3. **⚠️ Importante**
   - Esta tipografía prevalece sobre lo que esté en Figma
   - Aplicar a las 37+ páginas del sitio

**Escala Propuesta:**
```scss
// Títulos Hero
$font-hero: clamp(32px, 6vw, 56px);

// Títulos Principales (H1)
$font-h1: clamp(28px, 5vw, 48px);

// Títulos Secundarios (H2)
$font-h2: clamp(24px, 4vw, 40px);

// Títulos Terciarios (H3)
$font-h3: clamp(20px, 3vw, 32px);

// Subtítulos (H4)
$font-h4: clamp(18px, 2.5vw, 24px);

// Texto Normal
$font-base: clamp(14px, 1.5vw, 18px);

// Texto Pequeño
$font-small: clamp(12px, 1.2vw, 14px);
```

---

### FASE 2: HEADERS Y NAVEGACIÓN (CRÍTICO)
**Prioridad:** 🔴 Alta - Navegación principal

1. **Dos Tipos de Header**
   - ✅ **Header Home** (único, maquetado diferente según Figma)
   - ✅ **Header Secciones Interiores** (estándar según Figma)
   - ✅ Implementar componentes separados
   - ✅ Ambos con tipografía Outfit

2. **Menú Principal - Agregar Sección "Productos"**
   - ✅ Nueva opción en menú: **"Productos"**
   - ✅ Dropdown/submenu con:
     - Contenedores para Casas → `/productos/casas`
     - Contenedores para Bodegas → `/productos/bodegas`
     - Contenedores para Oficinas → `/productos/oficinas`

3. **Footer - Agregar Productos**
   - ✅ Nueva columna o sección: **"Productos"**
   - ✅ Links a las 3 páginas de productos estrella
   - ✅ Casas, Bodegas, Oficinas

---

### FASE 2.5: PÁGINAS PRODUCTOS ESTRELLA (NUEVO - CRÍTICO)
**Prioridad:** 🔴 Alta - Productos principales

**Crear 3 páginas nuevas para productos estrella:**

#### 1. Contenedores para Casas (`/productos/casas`)

**Estructura:**
- Hero con imagen de casa-contenedor
- Título: "Contenedores para Casas"
- Subtítulo: Diseños innovadores para viviendas modernas

**Secciones:**
- Beneficios (diseño, sustentabilidad, rapidez, costo)
- Tipos/modelos disponibles (mini casa, casa completa, modulares)
- Galería de proyectos/fotos (mínimo 6 ejemplos)
- Especificaciones técnicas (tamaños, materiales, acabados)
- Proceso de construcción (paso a paso)
- Casos de éxito (2-3 proyectos reales)
- CTA: "Cotizar Mi Casa" → formulario o cotizador

**Imágenes:** Buscar en internet - casas hechas con contenedores

#### 2. Contenedores para Bodegas (`/productos/bodegas`)

**Estructura:**
- Hero con imagen de bodega-contenedor
- Título: "Contenedores para Bodegas"
- Subtítulo: Almacenamiento seguro y versátil

**Secciones:**
- Beneficios (seguridad, movilidad, costos bajos, rápida instalación)
- Tamaños disponibles (20ft, 40ft, HC)
- Opciones de personalización (puertas adicionales, ventilación, iluminación, racks)
- Aplicaciones (industrial, comercial, agrícola, temporal)
- Características de seguridad (cerraduras, materiales resistentes)
- Galería de ejemplos
- CTA: "Cotizar Bodega" → formulario

**Imágenes:** Buscar bodegas de contenedores

#### 3. Contenedores para Oficinas (`/productos/oficinas`)

**Estructura:**
- Hero con imagen de oficina-contenedor
- Título: "Contenedores para Oficinas"
- Subtítulo: Espacios de trabajo flexibles y modernos

**Secciones:**
- Beneficios (flexibilidad, modulares, rápida instalación, equipadas)
- Configuraciones (individual, múltiples conectados, dos pisos)
- Acabados y equipamiento (AC, electricidad, internet, mobiliario)
- Usos (oficina temporal, permanente, sala de juntas, recepción)
- Casos de uso (obra, empresa, startup)
- Galería de proyectos
- CTA: "Cotizar Oficina" → formulario

**Imágenes:** Buscar oficinas de contenedores

**Diseño para las 3 páginas:**
- Consultar Figma para estructura general
- Si no hay diseño específico: usar patrón de páginas existentes
- Mantener consistencia visual
- BEM methodology
- Responsive en todos los breakpoints

---

### FASE 3: HOME PERSONALIZADO ✅ COMPLETADA
**Prioridad:** 🔴 Alta - Feature principal
**Estado:** ✅ **COMPLETADO** - 2025-10-15
**Reporte:** `.ai-docs/FASE_3_REPORTE_FINAL.md`

1. **Tres Opciones de Usuario** ✅
   - ✅ "Soy Nuevo" → Home personalizado (nivel básico)
   - ✅ "He Trabajado Con" → Home personalizado (nivel intermedio)
   - ✅ "Conozco Bien los Contenedores" → Home personalizado (nivel técnico)

2. **Contenido por Nivel Implementado** ✅

   **NIVEL NUEVO (Educativo):** ✅
   - ✅ ¿Qué es un contenedor marítimo?
   - ✅ 3 tarjetas de beneficios (Durabilidad, Modulares, Sustentables)
   - ✅ FAQ básico con 3 preguntas
   - ✅ CTA: Contacto / "Consulta Gratuita"

   **NIVEL INTERMEDIO (Servicios):** ✅
   - ✅ Mantiene contenido actual del Home
   - ✅ HeroSlider
   - ✅ Services Section
   - ✅ Additional Services
   - ✅ Diseño Arquitectónico
   - ✅ Acabados
   - ✅ Productos Estrella

   **NIVEL TÉCNICO (Profesional):** ✅
   - ✅ Sección "Acceso Rápido Profesional"
   - ✅ 4 tarjetas de acceso (Fichas, Patios, Presentación, Cotizador)
   - ✅ Tabla de especificaciones técnicas
   - ✅ Contacto corporativo directo

3. **Conexión con Perfilador** ✅
   - ✅ Al terminar perfilador → redirigir a home personalizado según respuestas
   - ✅ Guardar preferencia en localStorage
   - ✅ Permitir cambiar nivel desde menú Header
   - ✅ Análisis inteligente de respuestas con scoring

4. **Implementación Técnica** ✅
   - ✅ `src/utils/userLevel.js` - Framework core (130 líneas)
   - ✅ `src/pages/Home/Home.jsx` - Contenido condicional
   - ✅ `src/components/Header/Header.jsx` - Selector de nivel
   - ✅ `src/pages/PerfiladorCliente/PerfiladorCliente.jsx` - Integración
   - ✅ Estilos SCSS completos (+280 líneas)
   - ✅ Build exitoso sin errores
   - ✅ Documentación exhaustiva

---

### FASE 4: IMÁGENES FALTANTES 🟡 PARCIALMENTE COMPLETADA
**Prioridad:** 🟡 Media - Afecta presentación
**Estado:** 🟡 **40% COMPLETADO** - 2025-10-15
**Reporte:** `.ai-docs/FASE_4_REPORTE_PARCIAL.md`

1. **Imágenes de Contenedores** ⏳
   - ⏳ Detalle de contenedores → imagen principal de cada tipo (pendiente descarga)
   - ⏳ Fichas técnicas → copiar imágenes de tipos de contenedores (pendiente descarga)
   - ✅ Tipos contenedores → ya tiene imágenes, reutilizar

2. **Inventario y Descarga** 🟡
   - ✅ Hacer inventario completo de imágenes faltantes
   - ⏳ Descargar imágenes de internet (alta calidad) - **7 críticas identificadas**
   - ⏳ Guardar localmente en `/public/images/`
   - ⏳ Optimizar para web (WebP cuando sea posible)

3. **Equipo (Imágenes Aplastadas)** ✅
   - ✅ Corregir aspect-ratio: 1/1 en NuestroEquipo.scss
   - ✅ Aplicar object-fit: cover
   - ✅ Centrar object-position: center
   - ✅ Build exitoso (+18 bytes CSS)

4. **Reemplazar Emojis por Imágenes** ⏳
   - ✅ Identificar todas las secciones con emojis (24 archivos)
   - ⏳ Reemplazar por iconos SVG o imágenes apropiadas (pendiente)
   - ⏳ Mantener significado y claridad visual

**Completado:** Correcciones técnicas y análisis (40%)
**Pendiente:** Descarga e integración de imágenes (60%)

---

### FASE 5: BOTONES Y NAVEGACIÓN (FUNCIONALIDAD)
**Prioridad:** 🟡 Media - UX

1. **Inventario de Botones**
   - ✅ Revisar TODOS los botones del sitio (37+ páginas)
   - ✅ Listar cuáles no dirigen a ninguna parte
   - ✅ Crear tabla con: Página | Botón | Destino Actual | Destino Correcto

2. **Corrección**
   - ✅ Definir destino correcto para cada botón
   - ✅ Implementar rutas o acciones
   - ✅ Validar que todos los links funcionen

---

### FASE 6: PRESENTACIÓN EMPRESARIAL (DISEÑO)
**Prioridad:** 🟢 Media - Una página específica

**Fuente:** `src/filesForDesing/Presentacion.pdf`

1. **Rediseño Completo Basado en PDF**
   - ✅ Analizar PDF: src/filesForDesing/Presentacion.pdf
   - ✅ Replicar estructura y flujo exacto del PDF
   - ✅ Agregar **colores de la marca** (Calipso #3B6F7F, Naranja #F16700, Terracota #841C03)
   - ✅ Incorporar **formas y elementos visuales** del PDF
   - ✅ Agregar todas las imágenes del PDF
   - ✅ Mantener mismo orden de contenido

2. **Elementos a Incluir**
   - Portada corporativa
   - Sección "Quiénes Somos"
   - Servicios con iconografía
   - Proyectos destacados
   - Contacto corporativo
   - CTA de descarga PDF

---

### FASE 7: PERSONALIZA TU CONTENEDOR (FUNCIONALIDAD)
**Prioridad:** 🟡 Media - Herramienta interactiva

1. **Análisis de Requerimientos**
   - ✅ Revisar creativosespacios.mx → apartado "Adecuaciones"
   - ✅ Extraer información de tipos de transformación
   - ✅ Definir opciones de personalización

2. **Implementación**
   - ✅ **Paso 1:** Selector de tipo de contenedor
   - ✅ **Paso 2:** Opciones de adecuación según tipo (LISTA COMPLETA):
     - Oficinas
     - Sanitarios
     - Bodegas
     - Comedores
     - Dormitorios
     - Fast Food
     - Piscinas
     - Cafeterías
     - Gimnasios
     - Consultorios médicos
     - Tiendas/Comercios
     - Viviendas/Casas
     - Aulas/Salones
     - Laboratorios
     - Talleres
     - Duchas/Vestidores
     - Casetas de vigilancia
     - Mini departamentos
     - Otros (personalizado)
   - ✅ **Paso 3:** Customizaciones (ventanas, puertas, AC, etc.)
   - ✅ **Paso 4:** Vista previa (imagen ejemplo)
   - ✅ **Paso 5:** Generar cotización

3. **UI/UX**
   - Wizard paso a paso
   - Indicador de progreso
   - Imágenes de referencia por tipo
   - Consultar diseño en Figma

---

### FASE 8: RECORRIDO VIRTUAL 3D (FUNCIONALIDAD NUEVA)
**Prioridad:** 🟢 Baja - Enhancement

**OPCIÓN SELECCIONADA:** Three.js + React Three Fiber (3D Interactivo)

1. **Implementación Confirmada**

   **Librería:** **@react-three/fiber** + **@react-three/drei**

   **Características:**
   - Modelos 3D de contenedores (formato .glb/.gltf)
   - Controles orbit (rotación, zoom, pan)
   - Vistas: Exterior completo, Interior, Secciones
   - Hotspots informativos 3D
   - Iluminación realista
   - Responsive en todos los dispositivos

2. **Contenedores a Modelar (3 principales)**
   - Contenedor para Casas (3D interactivo)
   - Contenedor para Bodegas (3D interactivo)
   - Contenedor para Oficinas (3D interactivo)

3. **Recursos - Buscar en Internet**
   - ✅ Modelos 3D (.glb o .gltf) de contenedores
   - ✅ Fuentes recomendadas:
     - Sketchfab (shipping container models)
     - Free3D
     - CGTrader (free models)
   - ✅ Texturas realistas si son necesarias
   - ✅ Optimizar modelos para web (< 5MB cada uno)

4. **Funcionalidad**
   - Rotar 360° con mouse/touch
   - Zoom in/out
   - Pan (mover vista)
   - Botones para vistas predefinidas (frontal, lateral, interior)
   - Hotspots clickeables con información técnica
   - Loading state mientras carga el modelo

---

### FASE 9: BLOG (FUNCIONALIDAD)
**Prioridad:** 🟢 Baja - Contenido

1. **Imágenes**
   - ✅ Agregar imagen destacada a cada artículo
   - ✅ Imágenes dentro del contenido
   - ✅ Alt text descriptivo

2. **Paginador Funcional**
   - ✅ Implementar paginación con React
   - ✅ 6-9 artículos por página
   - ✅ Controles: Anterior, Números, Siguiente
   - ✅ Indicador de página actual

3. **Tabs de Categorías Funcionales**
   - ✅ Filtrado dinámico por categoría
   - ✅ Categorías: Todos, Venta, Renta, Construcción, Transformación, Tips
   - ✅ Actualizar cantidad de artículos por categoría
   - ✅ Transición suave entre filtros

---

### FASE 10: MICROINTERACCIONES Y ANIMACIONES (NUEVO)
**Prioridad:** 🟡 Media-Alta - UX/UI Enhancement

1. **Animaciones al Scroll**
   - Librería: **Framer Motion** o **AOS (Animate On Scroll)**
   - Fade in al aparecer elementos
   - Slide in para cards y contenido
   - Scale para imágenes destacadas

2. **Parallax Effects**
   - Backgrounds con parallax sutil
   - Secciones hero con profundidad
   - Elementos flotantes en hero sections

3. **Hover Effects en Elementos**
   - Cards: Lift + Shadow increase
   - Botones: Scale subtle + Color shift
   - Imágenes: Zoom sutil + Overlay
   - Links: Underline animation

4. **Microinteracciones Específicas**
   - Loading states en formularios
   - Success/Error animations
   - Checkbox/Radio custom animations
   - Number counters animados (estadísticas)
   - Progress bars animadas

5. **Transiciones de Página**
   - Fade entre rutas
   - Smooth scroll to top
   - Loading overlay entre páginas

6. **Elementos Interactivos**
   - Botones con ripple effect
   - Inputs con focus animations
   - Dropdowns con slide down
   - Modals con backdrop blur + scale

**Librerías Recomendadas:**
```bash
npm install framer-motion
npm install react-intersection-observer
npm install react-scroll
```

**Principios:**
- Animaciones **sutiles pero atractivas**
- Duración: 200-400ms (rápidas)
- Easing: ease-out / ease-in-out
- No abusar - mantener profesionalismo
- Respetar prefers-reduced-motion

---

## 📊 ORDEN DE EJECUCIÓN - PRIORIDAD VISUAL

### ⚡ PRIORIDAD 1: LO MÁS VISIBLE (SEMANA 1)
**Impacto Visual Inmediato - Lo que el usuario ve al abrir el sitio**

**Día 1:** FASE 0 - Hero Slider Home
- ✅ 5 slides manuales con contenido definido
- ✅ Modal de video YouTube
- ✅ Navegación por puntos
- ✅ Sección "Productos Estrella" en Home (3 cards)
- **POR QUÉ PRIMERO:** Es lo PRIMERO que ve el usuario al entrar al sitio

**Día 2-3:** FASE 1 - Tipografía Responsiva
- ✅ Implementar clamp() en TODO el sitio (37+ páginas)
- ✅ Outfit para títulos/menús/footer
- ✅ Hind para párrafos
- **POR QUÉ PRIMERO:** Afecta TODA la experiencia visual del sitio

**Día 4:** FASE 2 - Dos Headers + Navegación
- ✅ Header Home (diseño único)
- ✅ Header Secciones Interiores
- ✅ Menú con nueva opción "Productos"
- ✅ Footer actualizado
- **POR QUÉ PRIMERO:** Navegación principal, siempre visible

**Día 5:** FASE 4 (PARTE CRÍTICA) - Imágenes Visibles
- ✅ Corregir imágenes equipo aplastadas (aspect-ratio)
- ✅ Imágenes de contenedores faltantes
- ✅ Reemplazar emojis por imágenes reales
- **POR QUÉ PRIMERO:** Defectos visuales notorios que afectan profesionalismo

### 🎯 PRIORIDAD 2: CONTENIDO Y PÁGINAS NUEVAS (SEMANA 2)

**Día 1-2:** FASE 2.5 - Páginas Productos Estrella
- ✅ Página: Contenedores para Casas
- ✅ Página: Contenedores para Bodegas
- ✅ Página: Contenedores para Oficinas
- **POR QUÉ AQUÍ:** Productos principales con links desde home y menú

**Día 3-5:** FASE 3 - Homes Personalizados
- ✅ Home Nuevo (nivel básico educativo)
- ✅ Home Intermedio (servicios)
- ✅ Home Técnico (profesional)
- ✅ Conexión con perfilador + localStorage
- **POR QUÉ AQUÍ:** Feature diferenciador pero requiere productos estrella listos

### 🔧 PRIORIDAD 3: FUNCIONALIDAD Y HERRAMIENTAS (SEMANA 3)

**Día 1:** FASE 5 - Botones y Navegación
- ✅ Inventario completo de botones sin destino
- ✅ Corrección de rutas
- **POR QUÉ AQUÍ:** UX crítica pero no visible hasta que usuario haga clic

**Día 2-3:** FASE 7 - Personalizar Contenedor
- ✅ Selector de tipo
- ✅ 19 opciones de adecuación
- ✅ Cotización personalizada
- **POR QUÉ AQUÍ:** Herramienta interactiva importante

**Día 4-5:** FASE 6 - Presentación Empresarial
- ✅ Rediseño completo basado en PDF
- ✅ Colores de marca + elementos visuales
- **POR QUÉ AQUÍ:** Una página específica, menos tráfico

### ✨ PRIORIDAD 4: ENHANCEMENTS Y POLISH (SEMANA 4)

**Día 1-2:** FASE 10 - Microinteracciones
- ✅ Animaciones al scroll (Framer Motion)
- ✅ Hover effects
- ✅ Parallax effects
- **POR QUÉ AQUÍ:** Mejora UX pero requiere base visual completa

**Día 3:** FASE 9 - Blog Funcional
- ✅ Paginador
- ✅ Tabs de categorías
- ✅ Imágenes en artículos
- **POR QUÉ AQUÍ:** Sección específica de contenido

**Día 4-5:** FASE 8 - Recorrido Virtual 3D
- ✅ Three.js + React Three Fiber
- ✅ Modelos .glb/.gltf
- ✅ Controles interactivos
- **POR QUÉ AQUÍ:** Feature avanzado, requiere modelos 3D, menos prioridad

**Día 6:** Testing Completo y Ajustes Finales

---

## ✅ CHECKLIST ANTES DE CADA FASE

- [ ] Leer correcciones específicas de la fase
- [ ] **Consultar Figma para diseño visual** (excepto tipografía)
- [ ] Revisar sitio actual creativosespacios.mx si aplica
- [ ] Hacer inventario de archivos afectados
- [ ] Crear lista de componentes a modificar/crear
- [ ] Implementar cambios
- [ ] Probar en diferentes dispositivos/breakpoints
- [ ] Validar animaciones (si aplica)
- [ ] Solicitar aprobación antes de siguiente fase

---

## 🎯 SIGUIENTE PASO - EMPEZAR CON LO MÁS VISIBLE

### ⚡ FASE 0: HERO SLIDER HOME (INICIO INMEDIATO)

**ORDEN DE EJECUCIÓN VISUAL:**
1. **FASE 0** - Hero Slider → Primera impresión del sitio ✨
2. **FASE 1** - Tipografía → Legibilidad en TODO el sitio 📝
3. **FASE 2** - Headers → Navegación principal siempre visible 🧭
4. **FASE 4 (parte)** - Imágenes aplastadas → Defecto visual notorio 🖼️
5. **Continuar con resto según plan priorizado**

**¿Por qué FASE 0 primero?**
- ✅ Es lo PRIMERO que ve el usuario al entrar
- ✅ Máximo impacto visual inmediato
- ✅ Establece profesionalismo desde el inicio
- ✅ Video YouTube genera engagement inmediato

**¿Aprobado para comenzar con FASE 0?**

---

## 📝 NOTAS IMPORTANTES

### Tipografía (FASE 1)
- **Outfit:** Títulos, menús, footer
- **Hind:** Párrafos y texto corrido
- Esta configuración **prevalece sobre Figma**

### Diseño Visual
- **Consultar Figma SIEMPRE** (excepto tipografía)
- Si no hay diseño en Figma: usar patrones existentes del proyecto
- Mantener coherencia de espacios, colores, estructura

### Animaciones (FASE 10)
- Sutiles pero atractivas
- No interferir con usabilidad
- Respetar preferencias de accesibilidad

---

**Estado:** ✅ LISTO PARA EJECUTAR - Toda la información recopilada
**Fases Totales:** 12 (0, 1, 2, 2.5, 3-10)
**Tiempo Estimado:** 4+ semanas
**Información Completa:**
- ✅ Figma File Key y Node IDs
- ✅ Contenido de 5 slides del hero
- ✅ Modal de video YouTube
- ✅ 3 páginas de productos estrella
- ✅ 19 adecuaciones para personalizar contenedor
- ✅ Opción 3D Three.js para recorrido virtual
- ✅ PDF de presentación empresarial ubicado
- ✅ Homes personalizados (3 niveles) estructurados

**Archivo de Seguimiento:** Este documento se actualizará con el progreso de cada fase
