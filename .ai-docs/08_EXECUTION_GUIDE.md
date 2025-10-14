# 🚀 EXECUTION GUIDE - How to Run the Pixel-Perfect Refactoring

**Last Updated:** 2025-10-13
**For:** Claude Code CLI with Figma MCP
**Project:** Creativos Espacios - Full Website Refactoring

---

## 📋 WHAT HAS BEEN PREPARED

### Documentation Files Created:
1. [`00_PROJECT_CONTEXT.md`](.ai-docs/00_PROJECT_CONTEXT.md) - Project overview
2. [`01_DESIGN_SYSTEM.md`](.ai-docs/01_DESIGN_SYSTEM.md) - Design tokens reference
3. [`02_TASK_SITEMAP.md`](.ai-docs/02_TASK_SITEMAP.md) - All 46 pages mapped
4. [`03_FIGMA_INTEGRATION.md`](.ai-docs/03_FIGMA_INTEGRATION.md) - Figma workflow guide
5. [`04_COMPONENT_PATTERNS.md`](.ai-docs/04_COMPONENT_PATTERNS.md) - Code templates
6. [`05_LEARNING_LOG.md`](.ai-docs/05_LEARNING_LOG.md) - Session learnings
7. **[`06_FIGMA_URLS.md`](.ai-docs/06_FIGMA_URLS.md)** - All 10 Figma frame URLs mapped ✨ NEW
8. **[`07_IMPLEMENTATION_PLAN.md`](.ai-docs/07_IMPLEMENTATION_PLAN.md)** - Complete 10-phase plan ✨ NEW
9. **[`08_EXECUTION_GUIDE.md`](.ai-docs/08_EXECUTION_GUIDE.md)** - This file ✨ NEW

### Slash Commands Created:
1. [`.claude/commands/refactor-figma-page.md`](.claude/commands/refactor-figma-page.md) - Refactor existing page to match Figma
2. [`.claude/commands/create-new-page.md`](.claude/commands/create-new-page.md) - Create new page following patterns
3. [`.claude/commands/execute-phase.md`](.claude/commands/execute-phase.md) - Execute entire phase

### Configuration:
- ✅ Claude Code CLI installed (v2.0.14)
- ✅ Figma MCP Server configured (remote)
- ✅ Authentication successful with Figma
- ✅ All 10 Figma frame URLs mapped to pages

---

## 🎯 HOW TO EXECUTE THE PLAN

### Method 1: Execute by Phase (RECOMMENDED)

Open Claude Code CLI and run phases sequentially:

```bash
# Open Claude Code CLI
cd C:\Users\alfre\Documents\creativosGitHub\creativosv2
claude

# Then execute phases one by one:
/execute-phase 0    # Preparation & Setup (design system extraction)
/execute-phase 1    # Refactor 10 pages with Figma designs
/execute-phase 2    # Create missing critical pages (Sprint 1)
/execute-phase 3    # Services & construction pages
/execute-phase 4    # Forms & interactive pages
/execute-phase 5    # Multimedia & locations
/execute-phase 6    # Tools & utilities
/execute-phase 7    # Content & legal pages
/execute-phase 8    # Advanced features (3D, Blog, 360°)
/execute-phase 9    # Responsive optimization
/execute-phase 10   # Final QA & optimization
```

### Method 2: Execute Individual Pages

For more granular control, refactor or create pages one by one:

```bash
# Refactor existing page with Figma design:
/refactor-figma-page Home https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-2

# Create new page following patterns:
/create-new-page PresentacionEmpresarial /presentacion-empresarial
```

### Method 3: Custom Prompts

You can also give Claude Code CLI custom instructions:

```
Refactor the Home page (src/pages/Home/Home.jsx) to match the Figma design at:
https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-2

Requirements:
- Pixel-perfect match with Figma
- Extract content from src/filesForDesing/ and https://www.creativosespacios.mx/
- Download images and save to public/images/home/
- Implement responsive behavior (mobile, tablet, desktop)
- Use BEM methodology
- Follow patterns from .ai-docs/04_COMPONENT_PATTERNS.md
```

---

## 📊 PHASE EXECUTION ORDER

### Priority 1: Foundation (Phase 0-1)
**Start with these first - they establish patterns for everything else**

- **Phase 0:** Extract design system from all 10 Figma pages
  - Creates the single source of truth for spacing, colors, typography
  - Establishes component patterns
  - Defines responsive strategy
  - **Estimated time:** 1 session

- **Phase 1:** Refactor 10 existing pages to match Figma
  - Home, Quienes Somos, Misión, Equipo, Historia, Valores, Casos Éxito
  - Tipos Contenedores, Detalle Contenedor, Fichas Técnicas
  - These become the reference for all other pages
  - **Estimated time:** 3-4 sessions

### Priority 2: Critical Pages (Phase 2-4)
**Complete Sprint 1 and essential functionality**

- **Phase 2:** Create missing Sprint 1 pages
  - Business Presentation, General Catalog
  - Refactor service pages for consistency
  - **Estimated time:** 2-3 sessions

- **Phase 3:** Services & construction pages
  - Benefits, Construction, Additional Services, Allies
  - **Estimated time:** 2-3 sessions

- **Phase 4:** Forms & interactive
  - Quoters, Contact, FAQ, Social Media
  - **Estimated time:** 2-3 sessions

### Priority 3: Supporting Pages (Phase 5-7)
**Complete Phase 2 functionality**

- **Phase 5:** Multimedia & locations
  - Videos, Location, Container Yards, Category Catalog
  - **Estimated time:** 2 sessions

- **Phase 6:** Tools & utilities
  - Client Profiler, Complaints, About Us, Sustainability
  - **Estimated time:** 2 sessions

- **Phase 7:** Content & legal pages
  - Certifications, Clients, Privacy, Terms, Sitemap
  - **Estimated time:** 1 session

### Priority 4: Advanced & Polish (Phase 8-10)
**Complex features and final optimization**

- **Phase 8:** Advanced features
  - 3D Customizer, Blog, Virtual Tour
  - **Estimated time:** 4-5 sessions (complex)

- **Phase 9:** Responsive optimization
  - Test and fix ALL pages at all breakpoints
  - **Estimated time:** 2-3 sessions

- **Phase 10:** Final QA & optimization
  - Lighthouse, accessibility, cross-browser, SEO
  - **Estimated time:** 2 sessions

---

## 🎨 FIGMA MCP TOOLS USAGE

### Available Tools:
- `get_metadata` - Get structure (layers, dimensions) - 🟢 Low tokens
- `get_screenshot` - Take screenshot of frame - 🟡 Medium tokens
- `get_code` - Generate React code - 🔴 High tokens
- `create_design_system_rules` - Extract design tokens - 🟡 Medium tokens

### Token-Efficient Workflow:
1. Start with `get_metadata` to understand structure
2. Use `get_screenshot` for visual reference
3. Finally use `get_code` for implementation

### When Claude Code CLI accesses Figma:
- It will automatically use the appropriate tool
- You don't need to specify which tool
- Just provide the Figma URL and describe what you need

---

## 📁 CONTENT SOURCES (Priority Order)

### 1. PDF Files (Primary Source)
Location: `src/filesForDesing/`
- `Presentación.pdf` - Business presentation
- `Tipos de contenedores.pdf` - Container types catalog
- `Detalle - Tipos de contenedores.pdf` - Detail page design
- `Fichas técnicas.pdf` - Technical specs
- `ficha_tecnica.pdf` - Additional specs
- `cotizador_creativos.pdf` - Sales quoter
- `cotizador_creativos-renta.pdf` - Rental quoter
- `servicios.txt` - Services content
- `SystemDesing.pdf` - Design system
- `BrandingManual.pdf` - Brand guidelines
- `VoiceAndToneDesing.pdf` - Content tone

### 2. Website (Secondary Source)
URL: https://www.creativosespacios.mx/
- Navigation: All main pages
- Content: Text, images, videos
- Products: Container types and specs
- Services: All service descriptions
- About: Company information
- Contact: Contact details

### 3. Web Search (Tertiary Source)
Use when content not found in PDFs or website:
- General container industry information
- Technical specifications
- Industry standards
- Best practices

---

## 🖼️ IMAGE HANDLING STRATEGY

### 1. Extract from Figma
**Use for:** Icons, graphics, logos, illustrations
**How:** Claude Code CLI will use Figma MCP to extract
**Save to:** `public/images/[page-name]/`

### 2. Download from Website
**Use for:** Photos, product images, team photos
**Source:** https://www.creativosespacios.mx/
**How:** Claude Code CLI will download directly
**Save to:** `public/images/[page-name]/`

### 3. Placeholders (Temporary)
**Use for:** Missing images
**Source:** https://via.placeholder.com/800x600?text=Image+Name
**Replace:** With real images when available

### Image Organization:
```
public/
└── images/
    ├── home/
    │   ├── hero-bg.jpg
    │   ├── service-1.jpg
    │   └── ...
    ├── quienes-somos/
    ├── tipos-contenedores/
    ├── equipo/
    └── ...
```

---

## ✅ QUALITY CHECKLIST (Per Page)

After each page is completed, verify:

### Design & Layout:
- [ ] Matches Figma design pixel-perfect (if Figma exists)
- [ ] Follows established patterns (if no Figma)
- [ ] BEM methodology applied correctly
- [ ] Design system variables used
- [ ] Spacing matches patterns (48px, 24px, 16px)
- [ ] Typography hierarchy correct
- [ ] Colors match brand palette

### Responsive:
- [ ] Mobile (375px) - single column, readable
- [ ] Tablet (768px) - optimized layout
- [ ] Desktop (1440px) - matches Figma
- [ ] No horizontal scroll
- [ ] Touch targets ≥ 44px on mobile

### Content:
- [ ] All text populated (no Lorem Ipsum)
- [ ] All images present (or placeholders)
- [ ] Images have alt texts
- [ ] Links work correctly
- [ ] Internal navigation functional

### Technical:
- [ ] No console errors
- [ ] No React warnings
- [ ] Route added to App.js
- [ ] Component imports work
- [ ] SCSS compiles without errors
- [ ] Page loads without issues

### Accessibility:
- [ ] Semantic HTML (header, main, section, nav)
- [ ] Headings hierarchy correct (h1 → h2 → h3)
- [ ] Alt texts on images
- [ ] Form labels present
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works

---

## 🚨 COMMON ISSUES & SOLUTIONS

### Issue 1: Figma MCP not connecting
**Solution:** Restart Claude Code CLI, verify authentication:
```bash
claude mcp list
# Should show "figma" as connected
```

### Issue 2: Images not extracting from Figma
**Solution:** Download manually from creativosespacios.mx or export from Figma Desktop

### Issue 3: Content not found in PDFs
**Solution:** Check website, then use web search. Document what was found where.

### Issue 4: Responsive not matching patterns
**Solution:** Review Phase 0 responsive strategy, follow breakpoints exactly

### Issue 5: SCSS not compiling
**Solution:** Check `@import` paths, verify variables file is correct

### Issue 6: React Bootstrap components not working
**Solution:** Verify import, check version compatibility (5.3.3)

---

## 📈 PROGRESS TRACKING

### Track Progress in:
1. **This conversation** - I can update status after each phase
2. **Git commits** - Commit after each page/phase
3. **`.ai-docs/05_LEARNING_LOG.md`** - Document learnings
4. **`.ai-docs/02_TASK_SITEMAP.md`** - Update page statuses

### Commit Strategy:
```bash
# After each page:
git add .
git commit -m "refactor: Home page pixel-perfect match with Figma (Phase 1)"

# After each phase:
git add .
git commit -m "feat: Complete Phase 1 - All 10 Figma pages refactored"
```

---

## 🎯 RECOMMENDED EXECUTION PLAN

### Week 1: Foundation
- Day 1: Phase 0 (Design system extraction)
- Day 2-3: Phase 1 (Refactor Home, Tipos Contenedores, Detalle, Fichas)
- Day 4-5: Phase 1 (Refactor Quienes Somos, Misión, Equipo, Historia, Valores, Casos Éxito)

### Week 2: Critical Pages
- Day 1-2: Phase 2 (Sprint 1 pages + service refactors)
- Day 3-4: Phase 3 (Services & construction)
- Day 5: Phase 4 (Forms) - Part 1

### Week 3: Forms & Supporting Pages
- Day 1-2: Phase 4 (Forms) - Part 2
- Day 3: Phase 5 (Multimedia & locations)
- Day 4: Phase 6 (Tools & utilities)
- Day 5: Phase 7 (Content & legal)

### Week 4: Advanced & Polish
- Day 1-3: Phase 8 (Advanced features - complex)
- Day 4: Phase 9 (Responsive optimization)
- Day 5: Phase 10 (Final QA & optimization)

---

## 💡 TIPS FOR SUCCESS

### For Claude Code CLI:
1. **Be specific** - Provide exact Figma URLs and page names
2. **One page at a time** - Don't rush, ensure each is perfect
3. **Test after each page** - Run `npm start` and verify
4. **Commit frequently** - After each page or major change
5. **Follow the plan** - Trust the phased approach

### For You:
1. **Review each completed page** - Check it matches expectations
2. **Provide feedback** - If something doesn't look right, say so
3. **Approve before moving on** - Don't let issues accumulate
4. **Export images from Figma** - For best quality, export manually
5. **Be patient** - 46 pages is a lot, quality over speed

---

## 🚀 READY TO START?

### To begin Phase 0 (Design System Extraction):

```bash
# Open Claude Code CLI
cd C:\Users\alfre\Documents\creativosGitHub\creativosv2
claude

# Execute Phase 0
/execute-phase 0
```

### Or start with a single page test:

```bash
# Open Claude Code CLI
claude

# Test with Home page refactoring
/refactor-figma-page Home https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-2
```

---

**Everything is prepared and ready for execution. Good luck! 🚀**
