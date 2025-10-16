# 📋 PROJECT CONTEXT - CREATIVOS ESPACIOS

**Project Type:** B2B/B2C Website - Container Sales, Rental & Transformation
**Tech Stack:** React 19 + React Router 7 + React Bootstrap 5 + SASS
**Status:** 🔄 **CORRECCIONES EN PROGRESO** - Nuevas fases de mejora (0-10)
**Last Updated:** 2025-01-14

---

## 🎯 PROJECT OVERVIEW

**Company:** Creativos Espacios
**Industry:** Container solutions (sales, rental, transformation, construction)
**Website Goal:** Lead generation through quotations and contact forms
**Production Site:** https://www.creativosespacios.mx

### Core Services
1. **Container Sales** - New and used containers
2. **Container Rental** - Short/long term leasing
3. **Transformation** - Custom container modifications
4. **Construction** - Building with containers
5. **Additional Services** - Transport, maintenance, consulting

---

## 📊 PROJECT STATUS

### ✅ PREVIOUS PHASES COMPLETE (Base Development)

**Development Phases (0-10):** 37+ pages fully functional with BEM methodology
**Optimization Phases (11-21):** SEO, Accessibility, Performance, Forms, Analytics, PWA, Testing, Deployment

### 🔄 NEW CORRECTION PHASES (0-2.5, 3-10) - IN PROGRESS

**Total Phases:** 12 phases (FASE 0, 1, 2, 2.5, 3-10)
**Current Focus:** Visual improvements, functionality enhancements, and UX refinements

**See:** [CORRECCIONES_PLAN.md](CORRECCIONES_PLAN.md) for complete details

---

## 🎨 FIGMA INTEGRATION

### ✅ Figma MCP Connection Active

**Access Method:** Figma MCP Server (connected)
**Design Source:** Figma files for Creativos Espacios

**Available Tools:**
- `mcp__figma__get_screenshot` - Get screenshots of Figma nodes
- `mcp__figma__get_design_context` - Get design specifications and code
- `mcp__figma__get_metadata` - Get structure and layout information

**Usage for Corrections:**
```
For any visual implementation:
1. Consult Figma ALWAYS (except typography)
2. Use mcp__figma__ tools to extract designs
3. If design not in Figma: use existing project patterns
4. Maintain visual consistency
```

**IMPORTANT:** Typography specifications from CORRECCIONES_PLAN.md override Figma designs

---

## 🛠️ TECHNICAL STACK

### Core Dependencies
```json
{
  "react": "19.0.0",
  "react-dom": "19.0.0",
  "react-router-dom": "7.3.0",
  "react-bootstrap": "5.3.3",
  "bootstrap": "5.3.3",
  "sass": "1.85.1"
}
```

### New Dependencies for Corrections
```bash
# To be installed during correction phases:
npm install swiper                    # FASE 0: Hero Slider
npm install framer-motion            # FASE 10: Animations
npm install react-intersection-observer  # FASE 10: Scroll animations
npm install @react-three/fiber       # FASE 8: 3D Virtual Tour (optional)
npm install @react-three/drei        # FASE 8: 3D helpers
```

### Project Structure
```
src/
├── pages/              # 37+ page components (40+ after corrections)
│   ├── Productos/     # New: Star products
│   │   ├── Casas/
│   │   ├── Bodegas/
│   │   └── Oficinas/
│   ├── Home/          # Updated with HeroSlider
│   └── ...
├── components/         # Reusable components
│   ├── common/
│   ├── Header/        # Two types: Home & Interior
│   ├── HeaderHome/    # New: Specific for home (FASE 2)
│   ├── Footer/        # Updated with Productos section
│   ├── HeroSlider/    # New: FASE 0 (5 slides + YouTube modal)
│   ├── SEO/
│   └── ...
├── styles/            # Global SASS with BEM
│   ├── _variables.scss    # Updated with new typography
│   └── _mixins.scss
├── utils/             # Utilities and helpers
└── filesForDesing/    # Design assets
    └── Presentacion.pdf  # For FASE 6
```

---

## 🎨 DESIGN SYSTEM (UPDATED FOR CORRECTIONS)

### Typography (NEW - Overrides Figma)

**Font Families:**
- **Outfit** → Títulos, menús, footer
- **Hind** → Párrafos y texto corrido

**Responsive Scale (clamp):**
```scss
// Hero Titles
$font-hero: clamp(32px, 6vw, 56px);

// H1 - Main Titles
$font-h1: clamp(28px, 5vw, 48px);

// H2 - Secondary Titles
$font-h2: clamp(24px, 4vw, 40px);

// H3 - Tertiary Titles
$font-h3: clamp(20px, 3vw, 32px);

// H4 - Subtitles
$font-h4: clamp(18px, 2.5vw, 24px);

// Base Text
$font-base: clamp(14px, 1.5vw, 18px);

// Small Text
$font-small: clamp(12px, 1.2vw, 14px);
```

### Color System
- **Primary:** Black/white minimalist aesthetic
- **Accents:** Calipso (#3B6F7F), Naranja (#F16700), Terracota (#841C03)

### Methodology
- **CSS Architecture:** BEM (Block Element Modifier)
- **Responsive:** Bootstrap breakpoints + fluid typography

---

## 📞 COMPANY INFORMATION

### Contact Details
- **Sales Email:** ventas@creativosespacios.mx ← **ALL FORMS SEND HERE**
- **General Email:** contacto@creativosespacios.com
- **Website:** https://www.creativosespacios.mx

### Social Media
- **Instagram:** https://www.instagram.com/creativosespaciosmx
- **YouTube:** https://www.youtube.com/channel/UCEAQ-yq9sq0C-KCX8-aRyZA
- **X (Twitter):** https://x.com/creaespaciosmx
- **TikTok:** https://www.tiktok.com/@creativosespaciosmx

### Analytics & Tracking
- **Google Tag Manager:** `GTM-M2Z9THQF`
- **Google Ads Conversion:** `AW-11471696489` (Event: `sTNfCMWcgbMZEOnkkN4q`)
- **MailChimp User ID:** `47304de05985a3e09520dc95e`

---

## 🚀 DEVELOPMENT WORKFLOW

### Starting Development
```bash
npm install          # Install dependencies
npm start           # Start dev server (localhost:3000)
```

### Building for Production
```bash
npm run build       # Create production build
```

### Common Issues & Fixes

**1. Project won't start:**
```bash
cmd /c taskkill /F /IM node.exe
powershell Remove-Item -Recurse -Force 'node_modules\.cache'
npm start
```

**2. Routes not working:** Check App.js imports and Route definitions

**3. Styles not applying:** Verify SASS imports in component SCSS files

---

## 📋 CORRECTION PHASES OVERVIEW

**Total:** 12 fases (0, 1, 2, 2.5, 3-10)
**Orden de Ejecución:** Prioridad Visual - Lo más visible primero

### ⚡ PRIORIDAD 1: LO MÁS VISIBLE

### FASE 0: Hero Slider Home 🔴 CRÍTICO - PRIMERA IMPRESIÓN
- 5 slides manuales (Contacto, Venta, Renta, Construcciones, Servicios)
- Modal de video YouTube
- Navegación manual por puntos (NO automático)
- Consultar Figma: fileKey `5wJFG1eYWcGQak6eyjAgjo`, nodeId `207:2`

### FASE 1: Tipografía Responsiva 🔴 CRÍTICO - AFECTA TODO EL SITIO
- Implementar clamp() en todo el sitio (37+ páginas)
- Outfit para títulos/menús/footer
- Hind para párrafos
- Pantallas grandes = fuentes más grandes

### FASE 2: Dos Headers 🔴 CRÍTICO - NAVEGACIÓN PRINCIPAL
- Header Home (diseño único con menú Productos)
- Header Secciones Interiores (estándar)
- Footer actualizado con sección Productos
- Consultar Figma para ambos

### FASE 4: Imágenes Faltantes 🟡 MEDIA - PARTE CRÍTICA PRIMERO
- **CRÍTICO:** Equipo aplastado (aspect-ratio) + emojis → imágenes
- Contenedores: detalle y fichas técnicas
- **Orden:** Defectos visuales primero, resto después

### ⚡ PRIORIDAD 2: CONTENIDO Y PÁGINAS

### FASE 2.5: Páginas Productos Estrella 🔴 CRÍTICO-ALTA
- **3 nuevas páginas:** Casas, Bodegas, Oficinas
- Hero específico para cada producto
- Galería de imágenes
- Especificaciones técnicas
- CTAs a cotización

### FASE 3: Home Personalizado 🔴 CRÍTICO - FEATURE DIFERENCIADOR
- 3 niveles de usuario (Nuevo, Intermedio, Técnico)
- 3 homes diferentes según perfilador
- LocalStorage para guardar preferencias
- Conexión con perfilador de cliente existente

### ⚡ PRIORIDAD 3: FUNCIONALIDAD

### FASE 5: Botones y Navegación 🟡 MEDIA
- Inventario de botones sin destino
- Corregir rutas y acciones

### FASE 7: Personaliza Contenedor 🟡 MEDIA
- Selector de tipo de contenedor
- 19 opciones de adecuación (Oficinas, Sanitarios, Bodegas, etc.)
- Cotización personalizada funcional

### FASE 6: Presentación Empresarial 🟢 BAJA
- Rediseño basado en PDF (src/filesForDesing/Presentacion.pdf)
- Colores de marca
- Formas y elementos visuales

### ⚡ PRIORIDAD 4: ENHANCEMENTS

### FASE 10: Microinteracciones 🟡 MEDIA-ALTA
- Framer Motion
- Parallax effects
- Hover effects sutiles
- Animaciones al scroll

### FASE 9: Blog Funcional 🟢 BAJA
- Paginador funcional
- Tabs de categorías
- Imágenes en artículos

### FASE 8: Recorrido Virtual 🟢 BAJA
- **Tecnología:** Three.js + React Three Fiber + Drei
- Modelos 3D (.glb/.gltf) descargados de internet
- Navegación interactiva
- Controles de cámara

**Ver:** [CORRECCIONES_PLAN.md](CORRECCIONES_PLAN.md) para detalles completos

---

## 🎯 ORDEN DE EJECUCIÓN PRIORIZADO

**Criterio:** Impacto visual inmediato primero

1. **FASE 0** → Primera impresión (Hero Slider)
2. **FASE 1** → Legibilidad global (Tipografía)
3. **FASE 2** → Navegación principal (Headers)
4. **FASE 4 (parte)** → Defectos visuales (Imágenes aplastadas)
5. **FASE 2.5** → Productos estrella (Páginas nuevas)
6. **FASE 3** → Homes personalizados
7. **FASE 5** → Botones y navegación
8. **FASE 7** → Personalizar contenedor
9. **FASE 6** → Presentación empresarial
10. **FASE 10** → Microinteracciones
11. **FASE 9** → Blog funcional
12. **FASE 8** → Recorrido virtual 3D

---

## 🔗 QUICK REFERENCE

| Need | Location |
|------|----------|
| **Correction Phases Plan** | [CORRECCIONES_PLAN.md](CORRECCIONES_PLAN.md) |
| **Deployment Guide** | [DEPLOYMENT.md](../DEPLOYMENT.md) |
| **Main README** | [README.md](../README.md) |
| **Environment Template** | [.env.example](../.env.example) |

---

## 🎯 KEY FACTS FOR CLAUDE CODE

### Current Work Phase
1. **Status:** Correction phases in progress (12 total: 0, 1, 2, 2.5, 3-10)
2. **Figma:** MCP connection active - File Key: `5wJFG1eYWcGQak6eyjAgjo`
3. **Typography:** Override Figma - use CORRECCIONES_PLAN specs (Outfit/Hind + clamp)
4. **Forms:** ALL forms → `ventas@creativosespacios.mx`
5. **Analytics:** GTM-M2Z9THQF, AW-11471696489, MailChimp 47304de05985a3e09520dc95e

### Design Guidelines
- **Consult Figma ALWAYS** for visual design (except typography)
- **Typography:** Outfit (titles/menus/footer) + Hind (paragraphs)
- **If no Figma design:** Use existing project patterns
- **Maintain:** BEM methodology, visual consistency

### Figma MCP Usage
```
# Get screenshot of Figma node
Use: mcp__figma__get_screenshot with nodeId and fileKey

# Get design specifications
Use: mcp__figma__get_design_context with nodeId and fileKey

# Get structure/metadata
Use: mcp__figma__get_metadata with nodeId and fileKey
```

---

**Current Phase:** Ready to start FASE 0 (Hero Slider Home)
**Next Action:** Consult Figma for hero slider design, then implement
**Support:** ventas@creativosespacios.mx
**Plan Document:** [CORRECCIONES_PLAN.md](CORRECCIONES_PLAN.md)
