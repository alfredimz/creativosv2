# 🚀 IMPLEMENTATION PLAN - PIXEL PERFECT REFACTORING

**Project:** Creativos Espacios Website
**Goal:** Refactor entire application to match Figma designs pixel-perfect + create missing pages
**Approach:** Leverage existing solid base, refactor for pixel-perfect match
**Executor:** Claude Code CLI with Figma MCP
**Last Updated:** 2025-10-13

---

## 📊 PROJECT SCOPE

### Total Pages: 46
- **✅ Completed (Need Refactoring):** 16 pages (10 with Figma, 6 without)
- **🔴 To Create:** 30 new pages

### Figma Resources
- **Pages WITH Figma designs:** 10 (Home, Quienes Somos, Misión, Equipo, Historia, Valores, Casos Éxito, Tipos Contenedores, Detalle, Fichas Técnicas)
- **Pages WITHOUT Figma:** 36 (Must follow patterns from Figma pages)

---

## 🎯 IMPLEMENTATION STRATEGY

### Core Principles:
1. **Don't start from scratch** - Refactor existing code to match Figma
2. **Pixel-perfect match** - Use Figma MCP to extract exact specs
3. **Responsive by pattern** - No mobile Figma designs, extrapolate from desktop
4. **Content from multiple sources:**
   - Primary: `src/filesForDesing/*.pdf`
   - Secondary: https://www.creativosespacios.mx/
   - Tertiary: Web search for missing content
5. **Images strategy:**
   - Extract from Figma when possible
   - Download from creativosespacios.mx
   - Use placeholders for missing assets

---

## 📋 PHASES BREAKDOWN

### **PHASE 0: PREPARATION & SETUP** ⚙️
**Duration:** 1 session
**Goal:** Extract design tokens and establish patterns

#### Tasks:
- [ ] Extract design system from all 10 Figma frames
  - Colors, typography, spacing, shadows, borders
  - Compare with existing `src/styles/_variables.scss`
  - Update variables file if needed
- [ ] Document component patterns (headers, cards, buttons, forms)
- [ ] Create responsive breakpoints strategy
- [ ] Audit existing components for reusability
- [ ] Set up image directories structure

**Deliverables:**
- Updated `src/styles/_variables.scss`
- `Component patterns documentation`
- `Responsive strategy guide`

---

### **PHASE 1: REFACTOR EXISTING PAGES WITH FIGMA** 🔄
**Duration:** 3-4 sessions
**Goal:** Refactor 10 existing pages to match Figma pixel-perfect

#### Pages (Priority Order):

| # | Page | Route | Figma Node | Complexity | Content Source |
|---|------|-------|------------|------------|----------------|
| 1 | Home | `/` | 207-2 | 🔴 High | Figma + creativosespacios.mx |
| 2 | Tipos Contenedores | `/tipos-contenedores` | 207-1299 | 🟡 Medium | PDF + Figma |
| 3 | Detalle Contenedor | `/tipos-contenedores/:id` | 207-1522 | 🟡 Medium | PDF + Figma |
| 4 | Fichas Técnicas | `/fichas-tecnicas` | 207-1745 | 🟢 Low | PDF + Figma |
| 5 | Quienes Somos | `/quienes-somos` | 207-379 | 🟢 Low | Figma + existing |
| 6 | Misión y Visión | `/mision-vision` | 207-522 | 🟢 Low | Figma + existing |
| 7 | Nuestro Equipo | `/nuestro-equipo` | 207-1116 | 🟡 Medium | Figma + creativosespacios.mx |
| 8 | Historia | `/historia` | 207-1968 | 🟢 Low | Figma + existing |
| 9 | Valores | `/valores` | 207-659 | 🟢 Low | Figma + existing |
| 10 | Casos de Éxito | `/casos-exito` | 207-800 | 🟡 Medium | Figma + creativosespacios.mx + ADD ROUTE |

#### Tasks per Page:
1. Extract Figma metadata and screenshots
2. Compare with existing component
3. Refactor JSX structure to match Figma layout
4. Update SASS to match exact spacing, colors, typography
5. Implement responsive behavior (mobile/tablet)
6. Extract/download images
7. Update content from PDFs/website
8. Test pixel-perfect match
9. Verify all links and interactions

**Deliverables:**
- 10 refactored pages matching Figma designs
- Image assets organized in proper directories
- Updated routing if needed

---

### **PHASE 2: CREATE MISSING CRITICAL PAGES (Phase 1 - Sprint 1)** 🔴
**Duration:** 2-3 sessions
**Goal:** Create remaining Sprint 1 pages following established patterns

#### Pages to Create:

| # | Page | Route | Design Source | Complexity |
|---|------|-------|---------------|------------|
| 11 | Business Presentation | `/presentacion-empresarial` | PDF Pattern | 🟢 Low |
| 12 | General Catalog | `/catalogo` | Pattern | 🟡 Medium |

#### Additional Services Pages (Pattern-based):

| # | Page | Route | Design Source | Complexity |
|---|------|-------|---------------|------------|
| 13 | Servicios General | `/servicios` | Existing + Pattern | ⚠️ Refactor |
| 14 | Container Sales | `/servicios/venta` | Existing + Pattern | ⚠️ Refactor |
| 15 | Container Rental | `/servicios/alquiler` | Existing + Pattern | ⚠️ Refactor |
| 16 | Transformation | `/servicios/transformacion` | Existing + Pattern | ⚠️ Refactor |

**Pattern Rules:**
- Use spacing from Figma pages (48px sections, 24px padding)
- Use color palette from `_variables.scss`
- Follow BEM naming from refactored pages
- Match typography hierarchy
- Reuse components (Header, Footer, Cards, Buttons)

**Deliverables:**
- 6 new/refactored pages
- Consistent design language across all pages

---

### **PHASE 3: SERVICES & CONSTRUCTION PAGES (Phase 1 - Sprint 2)** 🏗️
**Duration:** 2-3 sessions
**Goal:** Complete service-related pages

#### Pages:

| # | Page | Route | Content Source | Complexity |
|---|------|-------|----------------|------------|
| 17 | Benefits | `/beneficios` | creativosespacios.mx + servicios.txt | 🟢 Low |
| 18 | Construction | `/construccion` | creativosespacios.mx | 🟡 Medium |
| 19 | Additional Services | `/servicios-adicionales` | servicios.txt | 🟢 Low |
| 20 | Construction Step Detail | `/construccion/:step` | Pattern | 🟡 Medium |
| 21 | Allies & Sponsors | `/aliados` | creativosespacios.mx | 🟢 Low |

**Deliverables:**
- 5 service pages with consistent design
- Dynamic routing for construction steps

---

### **PHASE 4: FORMS & INTERACTIVE (Phase 1 - Sprint 3)** 📝
**Duration:** 2-3 sessions
**Goal:** Complete all forms and interactive features

#### Pages:

| # | Page | Route | Design Source | Complexity |
|---|------|-------|---------------|------------|
| 22 | Sales Quoter | `/cotizador-venta` | PDF | 🟡 Medium |
| 23 | Rental Quoter | `/cotizador-renta` | PDF | 🟡 Medium |
| 24 | Contact | `/contacto` | Pattern + Maps | 🟡 Medium |
| 25 | FAQ | `/faq` | creativosespacios.mx | 🟢 Low |
| 26 | Social Media | `/redes-sociales` | Pattern | 🟢 Low |

**Special Requirements:**
- Forms: Formik + Yup validation
- Forms: Maquetado only (PHP endpoint pending)
- Maps: Use existing iframe implementation
- FAQ: Bootstrap Accordion component

**Deliverables:**
- 5 interactive pages
- Form validation working
- Responsive forms

---

### **PHASE 5: MULTIMEDIA & LOCATIONS (Phase 2 - Sprint 4)** 🎥
**Duration:** 2 sessions
**Goal:** Multimedia integration and location pages

#### Pages:

| # | Page | Route | Content Source | Complexity |
|---|------|-------|----------------|------------|
| 27 | Videos | `/videos` | YouTube embeds | 🟢 Low |
| 28 | Our Location | `/ubicacion` | Maps + contact | 🟢 Low |
| 29 | Container Yards | `/patios-contenedores` | creativosespacios.mx | 🟡 Medium |
| 30 | Category Catalog | `/catalogo/:categoria` | Pattern | 🟡 Medium |

**Deliverables:**
- 4 multimedia pages
- YouTube integration
- Maps integration

---

### **PHASE 6: TOOLS & UTILITIES (Phase 2 - Sprint 5)** 🔧
**Duration:** 2 sessions
**Goal:** Interactive tools and additional utilities

#### Pages:

| # | Page | Route | Complexity |
|---|------|------------|
| 31 | Client Profiler | `/perfilador-cliente` | 🟡 Medium |
| 32 | Complaints Box | `/quejas-sugerencias` | 🟢 Low |
| 33 | About Us General | `/nosotros` | 🟢 Low |
| 34 | Sustainability | `/sustentabilidad` | 🟢 Low |

**Deliverables:**
- 4 utility pages
- Interactive quiz for profiler

---

### **PHASE 7: CONTENT & LEGAL PAGES (Phase 2 - Sprint 6)** 📄
**Duration:** 1 session
**Goal:** Complete all content and legal pages

#### Pages:

| # | Page | Route | Status |
|---|------|-------|--------|
| 35 | Certifications | `/certificaciones` | 🔴 Create |
| 36 | Clientes | `/clientes` | ⚠️ Refactor |
| 37 | Privacy Notice | `/privacidad` | ⚠️ Refactor |
| 38 | Terms & Conditions | `/terminos` | ⚠️ Refactor |
| 39 | Identity Theft | `/robo-identidad` | ⚠️ Refactor |
| 40 | Sitemap | `/mapa-sitio` | ⚠️ Refactor |

**Deliverables:**
- 6 content pages
- Legal pages updated

---

### **PHASE 8: ADVANCED FEATURES (Phase 3 - Sprint 7)** 🚀
**Duration:** 4-5 sessions
**Goal:** Complex interactive features

#### Pages:

| # | Page | Route | Technology | Complexity |
|---|------|-------|------------|------------|
| 41 | Customize Container | `/personalizar-contenedor` | Three.js? | 🔴 Very High |
| 42 | Blog | `/blog` | CMS System | 🔴 High |
| 43 | Blog Article | `/blog/:slug` | Dynamic | 🟡 Medium |
| 44 | Virtual Tour | `/recorrido-virtual` | 360° Viewer | 🔴 Very High |

**Note:** These pages may require external libraries and significant development time.

**Deliverables:**
- 4 advanced feature pages
- Third-party integrations

---

### **PHASE 9: RESPONSIVE OPTIMIZATION** 📱
**Duration:** 2-3 sessions
**Goal:** Ensure ALL pages are fully responsive

#### Tasks:
- [ ] Test all pages on mobile (375px)
- [ ] Test all pages on tablet (768px)
- [ ] Test all pages on desktop (1440px)
- [ ] Fix any layout issues
- [ ] Optimize images for different screen sizes
- [ ] Test navigation on mobile
- [ ] Test forms on mobile
- [ ] Verify touch interactions

**Deliverables:**
- Fully responsive website
- Mobile-optimized navigation
- Responsive images

---

### **PHASE 10: FINAL QA & OPTIMIZATION** ✅
**Duration:** 2 sessions
**Goal:** Polish, optimize, and verify everything

#### Tasks:
- [ ] Run Lighthouse audit
- [ ] Optimize bundle size
- [ ] Lazy load images
- [ ] Add loading states
- [ ] Fix accessibility issues
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Verify all links work
- [ ] Verify all forms work
- [ ] SEO optimization (meta tags, alt texts)
- [ ] Final pixel-perfect verification vs Figma

**Deliverables:**
- Production-ready website
- Performance report
- QA checklist completed

---

## 📊 EXECUTION WORKFLOW (FOR CLAUDE CODE CLI)

### For Pages WITH Figma Designs:

```
1. Load Figma frame: [URL]
2. Extract metadata and analyze structure
3. Take screenshot for visual reference
4. Read existing component at: src/pages/[PageName]/[PageName].jsx
5. Compare existing code with Figma design
6. Refactor JSX structure to match Figma layout exactly
7. Update SCSS file to match exact spacing, colors, fonts from Figma
8. Extract content from:
   - src/filesForDesing/[relevant-pdf]
   - https://www.creativosespacios.mx/[relevant-page]
9. Download/extract images and save to public/images/[page-folder]/
10. Implement responsive behavior (mobile: 375px, tablet: 768px, desktop: 1440px)
11. Add to App.js routes if missing
12. Test pixel-perfect match with Figma
13. Verify responsive behavior
14. Mark as complete
```

### For Pages WITHOUT Figma Designs:

```
1. Identify similar page with Figma design (reference pattern)
2. Extract spacing, colors, typography from reference
3. Read content from:
   - src/filesForDesing/*.pdf
   - https://www.creativosespacios.mx/[page]
   - Web search if needed
4. Create component following BEM methodology
5. Use existing components (Header, Footer, Cards, Buttons)
6. Apply design tokens from _variables.scss
7. Match spacing patterns (48px sections, 24px padding, 16px gaps)
8. Download images from creativosespacios.mx or use placeholders
9. Implement responsive behavior
10. Add to App.js routes
11. Test consistency with Figma pages
12. Mark as complete
```

---

## 🎯 SUCCESS CRITERIA

### Per Page:
- [ ] Matches Figma design pixel-perfect (if design exists)
- [ ] Follows design patterns from Figma pages (if no design)
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] All content populated (text, images)
- [ ] All links work
- [ ] BEM methodology applied
- [ ] SASS variables used correctly
- [ ] No console errors
- [ ] Accessible (semantic HTML, alt texts)

### Overall Project:
- [ ] All 46 pages complete
- [ ] Consistent design language
- [ ] Fast load times (< 3s)
- [ ] SEO optimized
- [ ] Cross-browser compatible
- [ ] Production ready

---

## 📝 NOTES FOR CLAUDE CODE CLI

### Design System Reference:
- **Colors:** `src/styles/_variables.scss` ($color-calipso, $color-naranja, $color-terracota)
- **Typography:** Outfit (headings), Hind (body)
- **Spacing:** 48px (sections), 24px (padding), 16px (gaps), 32px (margins)
- **Components:** React Bootstrap 5 (Container, Row, Col, Card, Button, Form)
- **CSS Methodology:** BEM (Block__Element--Modifier)

### Content Sources (Priority Order):
1. `src/filesForDesing/*.pdf` files
2. https://www.creativosespacios.mx/ and subpages
3. Web search for missing information

### Image Strategy:
1. Extract from Figma (icons, graphics)
2. Download from creativosespacios.mx (photos)
3. Use placeholders if not available

### Technical Stack:
- React 19.0.0
- React Router 7.3.0
- React Bootstrap 5.3.3
- SASS 1.85.1

---

**Total Estimated Duration:** 20-25 sessions
**Phases:** 10
**Pages:** 46
**Approach:** Refactor existing + create new with pixel-perfect precision

