---
description: Execute a specific implementation phase of the pixel-perfect refactoring plan
argument-hint: phase-number
---

# Execute Implementation Phase

Execute a specific phase of the Creativos Espacios pixel-perfect refactoring plan.

## Available Phases

### **Phase 0: Preparation & Setup** ⚙️
Extract design system and establish patterns

### **Phase 1: Refactor Existing Pages with Figma** 🔄
Refactor 10 existing pages to match Figma designs pixel-perfect

### **Phase 2: Create Missing Critical Pages** 🔴
Create Sprint 1 remaining pages

### **Phase 3: Services & Construction Pages** 🏗️
Complete service-related pages

### **Phase 4: Forms & Interactive** 📝
Complete all forms and interactive features

### **Phase 5: Multimedia & Locations** 🎥
Multimedia integration and location pages

### **Phase 6: Tools & Utilities** 🔧
Interactive tools and utilities

### **Phase 7: Content & Legal Pages** 📄
Complete all content and legal pages

### **Phase 8: Advanced Features** 🚀
Complex interactive features (3D, Blog, 360° Tour)

### **Phase 9: Responsive Optimization** 📱
Ensure ALL pages are fully responsive

### **Phase 10: Final QA & Optimization** ✅
Polish, optimize, and verify everything

---

## Argument

- **$1:** Phase number (0-10)

---

## Phase Execution

Based on the phase number provided, execute the corresponding phase from the implementation plan at `.ai-docs/07_IMPLEMENTATION_PLAN.md`.

### Before Starting Any Phase:
1. Read the full implementation plan: `.ai-docs/07_IMPLEMENTATION_PLAN.md`
2. Read the Figma URLs mapping: `.ai-docs/06_FIGMA_URLS.md`
3. Read the project context: `.ai-docs/00_PROJECT_CONTEXT.md`
4. Read the design system: `.ai-docs/01_DESIGN_SYSTEM.md`
5. Check current variables: `src/styles/_variables.scss`

---

## Phase 0: Preparation & Setup

### Tasks:
1. **Extract Design System from Figma:**
   - Load all 10 Figma frames with designs
   - Extract colors, typography, spacing, shadows, borders from each
   - Document common patterns across all frames
   - Compare with existing `src/styles/_variables.scss`
   - Update variables file with any missing values

2. **Document Component Patterns:**
   - Analyze hero sections across all Figma pages
   - Document card patterns
   - Document button styles
   - Document form patterns
   - Create pattern documentation file

3. **Create Responsive Strategy:**
   - Define breakpoints based on Figma designs
   - Document how to adapt desktop designs to tablet/mobile
   - Create responsive spacing scale
   - Document responsive typography scale

4. **Audit Existing Components:**
   - List all existing components in `src/components/`
   - Identify which are reusable
   - Identify which need refactoring
   - Plan component consolidation

5. **Set Up Image Directories:**
   - Create `public/images/` structure
   - Organize by page/section
   - Document image naming conventions

### Deliverables:
- Updated `src/styles/_variables.scss`
- Pattern documentation file
- Responsive strategy guide
- Component audit report

---

## Phase 1: Refactor Existing Pages with Figma

### Pages to Refactor (in order):

1. **Home** (`/`) - node-id=207-2
   ```
   /refactor-figma-page Home https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-2
   ```

2. **Tipos Contenedores** (`/tipos-contenedores`) - node-id=207-1299
   ```
   /refactor-figma-page TiposContenedores https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-1299
   ```

3. **Detalle Contenedor** (`/tipos-contenedores/:id`) - node-id=207-1522
   ```
   /refactor-figma-page DetalleContenedor https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-1522
   ```

4. **Fichas Técnicas** (`/fichas-tecnicas`) - node-id=207-1745
   ```
   /refactor-figma-page FichasTecnicas https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-1745
   ```

5. **Quienes Somos** (`/quienes-somos`) - node-id=207-379
   ```
   /refactor-figma-page QuienesSomos https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-379
   ```

6. **Misión y Visión** (`/mision-vision`) - node-id=207-522
   ```
   /refactor-figma-page MisionVision https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-522
   ```

7. **Nuestro Equipo** (`/nuestro-equipo`) - node-id=207-1116
   ```
   /refactor-figma-page NuestroEquipo https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-1116
   ```

8. **Historia** (`/historia`) - node-id=207-1968
   ```
   /refactor-figma-page Historia https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-1968
   ```

9. **Valores** (`/valores`) - node-id=207-659
   ```
   /refactor-figma-page Valores https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-659
   ```

10. **Casos de Éxito** (`/casos-exito`) - node-id=207-800
    ```
    /refactor-figma-page CasosExito https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-800
    ```
    **Note:** Also add route to App.js if missing

### After Each Page:
- Test pixel-perfect match
- Test responsive behavior
- Verify content populated
- Check console for errors
- Mark as complete

---

## Phase 2: Create Missing Critical Pages

### Pages to Create:

1. **Presentación Empresarial** (`/presentacion-empresarial`)
   ```
   /create-new-page PresentacionEmpresarial /presentacion-empresarial
   ```
   Content source: `src/filesForDesing/Presentación.pdf`

2. **Catálogo General** (`/catalogo`)
   ```
   /create-new-page Catalogo /catalogo
   ```
   Content source: Aggregate from all products/services

### Pages to Refactor (Service pages):

3. **Servicios General** (`/servicios`) - Already exists, refactor for consistency
4. **Container Sales** (`/servicios/venta`) - Already exists, refactor for consistency
5. **Container Rental** (`/servicios/alquiler`) - Already exists, refactor for consistency
6. **Transformation** (`/servicios/transformacion`) - Already exists, refactor for consistency

---

## Phase 3: Services & Construction Pages

### Pages to Create:

1. **Benefits** (`/beneficios`)
   ```
   /create-new-page Beneficios /beneficios
   ```

2. **Construction** (`/construccion`)
   ```
   /create-new-page Construccion /construccion
   ```

3. **Additional Services** (`/servicios-adicionales`)
   ```
   /create-new-page ServiciosAdicionales /servicios-adicionales
   ```

4. **Construction Step Detail** (`/construccion/:step`)
   ```
   /create-new-page ConstruccionDetalle /construccion/:step
   ```

5. **Allies & Sponsors** (`/aliados`)
   ```
   /create-new-page Aliados /aliados
   ```

---

## Phase 4: Forms & Interactive

### Pages to Create:

1. **Sales Quoter** (`/cotizador-venta`)
   ```
   /create-new-page CotizadorVenta /cotizador-venta
   ```
   Content source: `src/filesForDesing/cotizador_creativos.pdf`
   Special: Form with Formik + Yup validation

2. **Rental Quoter** (`/cotizador-renta`)
   ```
   /create-new-page CotizadorRenta /cotizador-renta
   ```
   Content source: `src/filesForDesing/cotizador_creativos-renta.pdf`

3. **Contact** (`/contacto`)
   ```
   /create-new-page Contacto /contacto
   ```
   Special: Form + Google Maps

4. **FAQ** (`/faq`)
   ```
   /create-new-page FAQ /faq
   ```
   Special: Bootstrap Accordion

5. **Social Media** (`/redes-sociales`)
   ```
   /create-new-page RedesSociales /redes-sociales
   ```

---

## Phase 5: Multimedia & Locations

### Pages to Create:

1. **Videos** (`/videos`)
2. **Our Location** (`/ubicacion`)
3. **Container Yards** (`/patios-contenedores`)
4. **Category Catalog** (`/catalogo/:categoria`)

---

## Phase 6: Tools & Utilities

### Pages to Create:

1. **Client Profiler** (`/perfilador-cliente`) - Interactive quiz
2. **Complaints Box** (`/quejas-sugerencias`)
3. **About Us General** (`/nosotros`)
4. **Sustainability** (`/sustentabilidad`)

---

## Phase 7: Content & Legal Pages

### Pages to Create/Refactor:

1. **Certifications** (`/certificaciones`) - Create
2. **Clientes** (`/clientes`) - Refactor existing
3. **Privacy Notice** (`/privacidad`) - Refactor existing
4. **Terms & Conditions** (`/terminos`) - Refactor existing
5. **Identity Theft** (`/robo-identidad`) - Refactor existing
6. **Sitemap** (`/mapa-sitio`) - Refactor existing

---

## Phase 8: Advanced Features

### Pages to Create:

1. **Customize Container** (`/personalizar-contenedor`) - 3D configurator (Three.js)
2. **Blog** (`/blog`) - CMS system
3. **Blog Article** (`/blog/:slug`) - Dynamic routing
4. **Virtual Tour** (`/recorrido-virtual`) - 360° viewer

**Note:** These require external libraries and significant development.

---

## Phase 9: Responsive Optimization

### Tasks:
1. Test ALL 46 pages at 3 breakpoints:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px
2. Fix any layout issues
3. Optimize images for different screen sizes
4. Test navigation on mobile
5. Test forms on mobile
6. Verify touch interactions

---

## Phase 10: Final QA & Optimization

### Tasks:
1. Run Lighthouse audit on all pages
2. Optimize bundle size
3. Lazy load images
4. Add loading states
5. Fix accessibility issues (WCAG 2.1 AA)
6. Cross-browser testing (Chrome, Firefox, Safari, Edge)
7. Verify all links work
8. Verify all forms work
9. SEO optimization (meta tags, alt texts, sitemap)
10. Final pixel-perfect verification vs Figma

---

## Execution Instructions

Based on **$1**, execute the corresponding phase above.

For each page/task:
1. Follow the implementation plan exactly
2. Use design patterns from Figma pages
3. Extract content from PDFs → website → web search
4. Download/extract images as needed
5. Test thoroughly
6. Report progress after each page

After completing the phase, provide:
- Summary of work completed
- List of pages created/refactored
- Any issues encountered
- Recommendations for next steps
- Status of phase completion

Now execute **Phase $1**
