# 📋 PROJECT CONTEXT - CREATIVOS ESPACIOS

**Project Type:** B2B/B2C Website - Container Sales, Rental & Transformation
**Tech Stack:** React 19 + React Router 7 + React Bootstrap 5 + SASS
**Status:** 46 pages total | 16 complete (35%) | 30 pending (65%)
**Last Updated:** 2025-10-13

---

## 🎯 PROJECT OVERVIEW

**Company:** Creativos Espacios
**Industry:** Container solutions (sales, rental, transformation, construction)
**Website Goal:** Lead generation through quotations and contact forms

### Core Services
1. **Container Sales** - New and used containers
2. **Container Rental** - Short/long term leasing
3. **Transformation** - Custom container modifications
4. **Construction** - Step-by-step building process with containers
5. **Additional Services** - Transport, maintenance, consulting

---

## 📊 PROJECT STRUCTURE

### Total Pages: 46
- **✅ Completed:** 16 pages (35%)
- **🔴 Phase 1 (Critical):** 15 pages
- **🟡 Phase 2 (Important):** 11 pages
- **🟢 Phase 3 (Advanced):** 4 pages

### Current Sprint: Phase 1 - Sprint 1
**Focus:** Information & Catalogs (5 pages)
1. Business Presentation (`/presentacion-empresarial`)
2. Container Types Listing (`/tipos-contenedores`)
3. Container Type Detail (`/tipos-contenedores/:id`)
4. Technical Specs (`/fichas-tecnicas`)
5. General Catalog (`/catalogo`)

---

## 🛠️ TECHNICAL STACK

### Dependencies
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

### Project Structure
```
src/
├── pages/              # All page components (46 total)
│   ├── Home/
│   ├── Servicios/
│   ├── Privacidad/     # NEW (Legal pages)
│   └── ...
├── components/         # Reusable components
│   ├── Header/
│   ├── Footer/
│   └── ...
├── styles/            # Global SASS
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── global.scss
└── filesForDesing/    # PDF/TXT design references
```

---

## 🎨 DESIGN PRINCIPLES

### Methodology
- **CSS Architecture:** BEM (Block Element Modifier)
- **Responsive:** Mobile-first approach
- **Color System:** Primary ($color-calipso), Secondary ($color-naranja), Tertiary ($color-terracota)
- **Typography:** Outfit (headings), Hind (body)

### Component Pattern (All Pages Follow This)
```jsx
// Component structure
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PageName.scss';

const PageName = () => {
  return (
    <div className="page-name">
      <section className="page-name__banner">
        {/* Hero section */}
      </section>
      <section className="page-name__content">
        <Container>
          <Row>
            <Col lg={10}>
              {/* Main content */}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PageName;
```

---

## 📁 REFERENCE FILES

### Design Assets (`src/filesForDesing/`)
- `Presentación.pdf` - Business presentation layout
- `Tipos de contenedores.pdf` - Container types catalog
- `Detalle - Tipos de contenedores.pdf` - Detail page design
- `Fichas técnicas.pdf` - Technical specs layout
- `servicios.txt` - Services content
- `SystemDesing.pdf` - Design system tokens
- `BrandingManual.pdf` - Brand guidelines
- `VoiceAndToneDesing.pdf` - Content tone guide

### Documentation (`.ai-docs/`)
- `00_PROJECT_CONTEXT.md` - This file (overview)
- `01_DESIGN_SYSTEM.md` - Design tokens reference
- `02_TASK_SITEMAP.md` - Current sprint tasks
- `03_FIGMA_INTEGRATION.md` - Figma workflow
- `04_COMPONENT_PATTERNS.md` - Code templates
- `05_LEARNING_LOG.md` - Session learnings

---

## 🚀 DEVELOPMENT WORKFLOW

### Starting Development
```bash
npm start              # Start dev server (localhost:3000)
```

### Common Issues & Fixes
1. **Project won't start:** Clear webpack cache
   ```bash
   cmd /c taskkill /F /IM node.exe
   powershell Remove-Item -Recurse -Force 'node_modules\.cache'
   npm start
   ```

2. **Routes not working:** Check App.js imports and Route definitions

3. **Styles not applying:** Verify SASS imports in component SCSS files

---

## 📞 COMPANY INFORMATION

### Contact Details
- **Email:** contacto@creativosespacios.com
- **Phone:** +52 (55) 1234-5678
- **Address:** Ciudad de México, México

### Social Media
- **Instagram:** https://www.instagram.com/creativosespaciosmx
- **YouTube:** https://www.youtube.com/channel/UCEAQ-yq9sq0C-KCX8-aRyZA
- **X (Twitter):** https://x.com/creaespaciosmx
- **TikTok:** https://www.tiktok.com/@creativosespaciosmx

---

## 🎯 AI WORKFLOW

### For Content Creation
1. **Read:** `02_TASK_SITEMAP.md` for current task
2. **Reference:** Design file from `src/filesForDesing/`
3. **Follow:** Patterns from `04_COMPONENT_PATTERNS.md`
4. **Match:** Design tokens from `01_DESIGN_SYSTEM.md`
5. **Check:** Figma for pixel-perfect details (`03_FIGMA_INTEGRATION.md`)
6. **Log:** Learnings in `05_LEARNING_LOG.md`

### For Refactoring
1. Read existing component
2. Apply patterns from `04_COMPONENT_PATTERNS.md`
3. Optimize for performance and readability
4. Maintain BEM methodology
5. Test responsiveness

---

## ✅ COMPLETED PAGES (16)

### Company Info (8)
1. Home - `/` ⚠️ (needs refactoring)
2. Who We Are - `/quienes-somos`
3. Mission & Vision - `/mision-vision`
4. Our Team - `/nuestro-equipo`
5. Our History - `/historia`
6. Values - `/valores`
7. Clients - `/clientes`
8. Success Cases - `/casos-exito` ⚠️ (no route in App.js)

### Services (4)
9. Services General - `/servicios`
10. Container Sales - `/servicios/venta`
11. Container Rental - `/servicios/alquiler`
12. Transformation - `/servicios/transformacion`

### Legal Pages (4) - **NEW**
13. Privacy Notice - `/privacidad`
14. Terms & Conditions - `/terminos`
15. Identity Theft Notice - `/robo-identidad`
16. Sitemap - `/mapa-sitio`

---

## 📈 PROGRESS METRICS

### By Phase
- **✅ Completed:** 16/46 (35%)
- **🔴 Phase 1 (Critical):** 15 pending
- **🟡 Phase 2 (Important):** 11 pending
- **🟢 Phase 3 (Advanced):** 4 pending

### By Type
- **📄 Content Pages:** 21
- **📝 Forms:** 6 (quotations, contact, complaints)
- **🔧 Tools:** 3 (client profiler, customizer)
- **🎨 Detail Pages:** 6
- **🔄 Refactoring:** 2

### By Complexity
- **🟢 Low:** 18 pages (simple content)
- **🟡 Medium:** 14 pages (forms, galleries)
- **🔴 High:** 6 pages (3D customizer, blog CMS, 360° tour)

---

## 🔗 QUICK LINKS

- **Full Sitemap:** See `02_TASK_SITEMAP.md`
- **Design System:** See `01_DESIGN_SYSTEM.md`
- **Component Templates:** See `04_COMPONENT_PATTERNS.md`
- **Figma Workflow:** See `03_FIGMA_INTEGRATION.md`
- **Latest Learnings:** See `05_LEARNING_LOG.md`

---

**Token Count:** ~300 lines | Optimized for AI consumption
