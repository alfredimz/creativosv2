# 📚 AI DOCUMENTATION - CREATIVOS ESPACIOS

**Last Updated:** 2025-01-14
**Project Status:** 🔄 **Correction Phases in Progress** (12 fases: 0, 1, 2, 2.5, 3-10)

---

## 📋 DOCUMENTATION STRUCTURE

This folder contains essential documentation for AI-assisted development and correction phases of the Creativos Espacios website.

### 🎯 Essential Files for Claude Code

| File | Purpose | When to Read |
|------|---------|--------------|
| **[00_PROJECT_CONTEXT.md](00_PROJECT_CONTEXT.md)** | Project overview, status, Figma integration | **START OF EVERY SESSION** |
| **[CORRECCIONES_PLAN.md](CORRECCIONES_PLAN.md)** | Complete correction phases plan (0-10) | **BEFORE STARTING ANY PHASE** |
| **[CLAUDE_CODE_GUIDE.md](CLAUDE_CODE_GUIDE.md)** | Step-by-step execution guide | **WHEN IMPLEMENTING PHASES** |

---

## 📂 FILE OVERVIEW

### [00_PROJECT_CONTEXT.md](00_PROJECT_CONTEXT.md) - Main Reference

**Read:** Start of every session

**Contains:**
- Project status (Correction phases in progress)
- Tech stack and new dependencies
- Figma MCP integration and usage
- Typography specifications (Outfit/Hind + clamp)
- Company information and contact details
- Analytics IDs (GTM, Google Ads, MailChimp)
- Correction phases overview
- Key facts for Claude Code

**Key Information:**
- **Status:** 12 correction phases (0, 1, 2, 2.5, 3-10) in progress
- **Figma:** MCP active - File Key: `5wJFG1eYWcGQak6eyjAgjo`
- **Typography:** Outfit (titles/menus/footer) + Hind (paragraphs) + clamp()
- **Forms:** All → `ventas@creativosespacios.mx`
- **GTM:** `GTM-M2Z9THQF`
- **Google Ads:** `AW-11471696489`
- **MailChimp:** `47304de05985a3e09520dc95e`

---

### [CORRECCIONES_PLAN.md](CORRECCIONES_PLAN.md) - Phases Plan

**Read:** Before starting any phase

**Contains:**
- Complete plan for 12 correction phases (0, 1, 2, 2.5, 3-10)
- Detailed requirements per phase
- Implementation guidelines
- Figma consultation rules (File Key: 5wJFG1eYWcGQak6eyjAgjo)
- Typography override specifications
- Timeline and execution order
- Success criteria per phase

**Phases:**
- FASE 0: Hero Slider Home (5 slides manual + YouTube modal)
- FASE 1: Responsive Typography (Outfit/Hind + clamp, 37+ pages)
- FASE 2: Two Headers (Home + Interior) + Footer Products
- FASE 2.5: Star Product Pages (Casas, Bodegas, Oficinas) **NEW**
- FASE 3: Personalized Homes (3 user levels + localStorage)
- FASE 4: Missing Images & Corrections
- FASE 5: Buttons & Navigation
- FASE 6: Business Presentation Redesign (from PDF)
- FASE 7: Customize Container (19 customization options)
- FASE 8: Virtual Tour (Three.js + .glb/.gltf models)
- FASE 9: Blog Functionality
- FASE 10: Microinteractions & Animations

---

### [CLAUDE_CODE_GUIDE.md](CLAUDE_CODE_GUIDE.md) - Execution Guide

**Read:** When implementing phases

**Contains:**
- Step-by-step execution workflow
- Figma MCP usage examples
- Detailed instructions for FASE 0 & 1
- BEM implementation guidelines
- Troubleshooting common issues
- Verification checklists
- Progress tracking methods

**Use this for:**
- Implementing any phase autonomously
- Consulting Figma via MCP
- Following correct implementation workflow
- Verifying completeness of work

---

## 🎯 QUICK START GUIDE

### For Claude Code Starting Work:

**1. Initial Setup:**
```
1. Read 00_PROJECT_CONTEXT.md (project context)
2. Read CORRECCIONES_PLAN.md (understand all phases)
3. Read CLAUDE_CODE_GUIDE.md (execution workflow)
4. Verify npm start works
```

**2. Before Starting a Phase:**
```
1. Read specific phase section in CORRECCIONES_PLAN.md
2. Check if Figma consultation needed
3. Identify files to modify/create
4. Plan implementation steps
```

**3. During Implementation:**
```
1. Consult Figma using MCP tools (if needed)
2. Apply BEM methodology
3. Use typography from CORRECCIONES_PLAN (not Figma)
4. Test responsive behavior
5. Verify against specifications
```

**4. After Completing:**
```
1. Update CORRECCIONES_PLAN.md with progress
2. Mark completed items
3. Test thoroughly
4. Request approval before next phase
```

---

## 🎨 FIGMA MCP INTEGRATION

### ✅ Connection Status: Active

**Available Tools:**
- `mcp__figma__get_screenshot` - View Figma designs
- `mcp__figma__get_design_context` - Get specifications
- `mcp__figma__get_metadata` - Get structure

**Usage:**
```javascript
// Example: Get hero slider design
mcp__figma__get_screenshot({
  fileKey: "YOUR_FILE_KEY",
  nodeId: "NODE_ID",
  clientLanguages: "javascript,html,css,typescript",
  clientFrameworks: "react"
})
```

**IMPORTANT:**
- Consult Figma for ALL visual designs
- EXCEPTION: Typography (use CORRECCIONES_PLAN specs)
- Extract fileKey and nodeId from Figma URLs
- Use for layout, spacing, colors, components

---

## 📊 PROJECT STATUS

### ✅ Previous Development Complete

**Base Development (Phases 0-10):**
- ✅ 37+ pages with BEM methodology
- ✅ Responsive design
- ✅ All features functional

**Optimization (Phases 11-21):**
- ✅ SEO, Accessibility, Performance
- ✅ Forms, Analytics, PWA
- ✅ Testing & Deployment

### 🔄 Current Correction Phases (0, 1, 2, 2.5, 3-10)

**Total Phases:** 12
**Focus:** Visual improvements, functionality enhancements, UX refinements

**Timeline:** 4+ weeks (Prioridad Visual)
- **Week 1:** Lo MÁS VISIBLE
  - FASE 0 (Hero Slider), FASE 1 (Tipografía), FASE 2 (Headers), FASE 4-parte (Imágenes)
- **Week 2:** Contenido y Páginas
  - FASE 2.5 (Productos Estrella), FASE 3 (Homes Personalizados)
- **Week 3:** Funcionalidad
  - FASE 5 (Botones), FASE 7 (Personalizar), FASE 6 (Presentación)
- **Week 4:** Enhancements
  - FASE 10 (Animaciones), FASE 9 (Blog), FASE 8 (3D Virtual)
- **Week 5:** Testing & QA

**Current Phase:** Ready to start FASE 0 (Hero Slider) - LO MÁS VISIBLE
**Criterio:** Impacto visual inmediato primero ⚡

---

## 🔗 ADDITIONAL RESOURCES

### Root Level Documentation:
- **[README.md](../README.md)** - Main project README
- **[DEPLOYMENT.md](../DEPLOYMENT.md)** - Complete deployment guide
- **[.env.example](../.env.example)** - Environment variables template

### Key Directories:
- **`src/pages/`** - 37+ page components
- **`src/components/`** - Reusable components
- **`src/styles/`** - Global SASS with BEM
- **`public/`** - Static assets

---

## ✅ KEY FACTS FOR CLAUDE CODE

### Current Work
1. **Status:** 12 correction phases (0, 1, 2, 2.5, 3-10) in progress
2. **Figma:** MCP active - File Key: `5wJFG1eYWcGQak6eyjAgjo` - consult for visual design
3. **Typography:** Outfit (titles) + Hind (paragraphs) + clamp() - overrides Figma
4. **Forms:** ALL → `ventas@creativosespacios.mx`
5. **Analytics:** GTM-M2Z9THQF, AW-11471696489, MailChimp 47304de05985a3e09520dc95e
6. **New Pages:** 3 star products (Casas, Bodegas, Oficinas) in FASE 2.5

### Design Rules
- ✅ Consult Figma ALWAYS (except typography)
- ✅ Use mcp__figma__* tools
- ✅ Typography from CORRECCIONES_PLAN
- ✅ Maintain BEM methodology
- ✅ Test responsive on all breakpoints

### Workflow
1. Read docs (00_PROJECT_CONTEXT + CORRECCIONES_PLAN + CLAUDE_CODE_GUIDE)
2. Consult Figma via MCP (if needed)
3. Implement following guide
4. Test and verify
5. Update progress
6. Request approval

---

## 📞 SUPPORT

**Email:** ventas@creativosespacios.mx
**Website:** https://www.creativosespacios.mx

---

## 🚀 NEXT STEPS

**To Start FASE 0 (Hero Slider Home):**

1. Read [CLAUDE_CODE_GUIDE.md](CLAUDE_CODE_GUIDE.md) - FASE 0 section
2. Read [CORRECCIONES_PLAN.md](CORRECCIONES_PLAN.md) - FASE 0 section
3. Consult Figma for hero slider design using MCP tools
4. Install swiper: `npm install swiper`
5. Create HeroSlider component
6. Implement 5 slides with manual navigation
7. Test responsive behavior
8. Report progress and request approval

---

**Documentation Status:** ✅ Updated with complete 12-phase plan
**Last Major Update:** Added FASE 2.5 (star products), complete Q&A info, Figma file key
**Project Stage:** 12 correction phases ready to execute
**Total Phases:** 0, 1, 2, 2.5, 3-10 (12 total)
**Next Phase:** FASE 0 - Hero Slider Home
