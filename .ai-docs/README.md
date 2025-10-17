# 📚 AI DOCUMENTATION - CREATIVOS ESPACIOS

**Last Updated:** 2025-01-14
**Project:** React website for container solutions company

---

## 📋 DOCUMENTATION STRUCTURE

This folder contains essential documentation for AI-assisted development of the Creativos Espacios website.

### 🎯 Essential Files

| File | Purpose | When to Read |
|------|---------|--------------|
| **[00_PROJECT_CONTEXT.md](00_PROJECT_CONTEXT.md)** | Project overview, tech stack, Figma integration | **START OF EVERY SESSION** |
| **[CORRECCIONES_PLAN.md](CORRECCIONES_PLAN.md)** | Design guidelines and specifications | **BEFORE IMPLEMENTING FEATURES** |
| **[CLAUDE_CODE_GUIDE.md](CLAUDE_CODE_GUIDE.md)** | Development workflow and best practices | **WHEN IMPLEMENTING** |

---

## 📂 FILE OVERVIEW

### [00_PROJECT_CONTEXT.md](00_PROJECT_CONTEXT.md) - Main Reference

**Read:** Start of every session

**Contains:**
- Project overview and status
- Tech stack (React 19, Router 7, Bootstrap 5, SASS)
- Figma MCP integration and usage
- Typography specifications (Outfit/Hind + clamp)
- Company information and contact details
- Analytics IDs (GTM, Google Ads, MailChimp)
- Development workflow and troubleshooting

**Key Information:**
- **Figma:** MCP active - File Key: `5wJFG1eYWcGQak6eyjAgjo`
- **Typography:** Outfit (titles/menus/footer) + Hind (paragraphs) + clamp()
- **Forms:** All → `ventas@creativosespacios.mx`
- **GTM:** `GTM-M2Z9THQF`
- **Google Ads:** `AW-11471696489`
- **MailChimp:** `47304de05985a3e09520dc95e`

---

### [CORRECCIONES_PLAN.md](CORRECCIONES_PLAN.md) - Design Guidelines

**Read:** Before implementing features

**Contains:**
- Design specifications and guidelines
- Typography scale (responsive with clamp)
- Color system (Calipso, Naranja, Terracota)
- Figma integration rules
- BEM methodology guidelines
- Animation principles
- Recommended libraries

**Key Points:**
- Consult Figma for all visual design
- Typography from this file (NOT Figma)
- BEM methodology for all styles
- Responsive design with Bootstrap breakpoints

---

### [CLAUDE_CODE_GUIDE.md](CLAUDE_CODE_GUIDE.md) - Development Guide

**Read:** When implementing features

**Contains:**
- Step-by-step development workflow
- Figma MCP usage examples
- BEM methodology with examples
- Responsive design patterns
- Development checklist
- Troubleshooting common issues
- SASS variables reference

**Use this for:**
- Implementing features following best practices
- Consulting Figma via MCP
- Applying BEM correctly
- Verifying completeness of work

---

## 🎯 QUICK START GUIDE

### For AI Agents Starting Work:

**1. Initial Setup:**
```
1. Read 00_PROJECT_CONTEXT.md (project context)
2. Read CORRECCIONES_PLAN.md (design guidelines)
3. Read CLAUDE_CODE_GUIDE.md (development workflow)
4. Verify npm start works
```

**2. Before Starting Development:**
```
1. Understand the feature requirements
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
1. Test thoroughly
2. Verify responsive on all breakpoints
3. Document changes made
4. Request approval if needed
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
// Example: Get design screenshot
mcp__figma__get_screenshot({
  fileKey: "5wJFG1eYWcGQak6eyjAgjo",
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

## ✅ KEY FACTS FOR AI AGENTS

### Current Work
1. **Tech Stack:** React 19 + Router 7 + Bootstrap 5 + SASS
2. **Figma:** MCP active - File Key: `5wJFG1eYWcGQak6eyjAgjo`
3. **Typography:** Outfit (titles) + Hind (paragraphs) + clamp() - overrides Figma
4. **Forms:** ALL → `ventas@creativosespacios.mx`
5. **Analytics:** GTM-M2Z9THQF, AW-11471696489, MailChimp 47304de05985a3e09520dc95e

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
5. Document changes

---

## 🔗 ADDITIONAL RESOURCES

### Root Level Documentation:
- **[README.md](../README.md)** - Main project README
- **[DEPLOYMENT.md](../DEPLOYMENT.md)** - Complete deployment guide
- **[.env.example](../.env.example)** - Environment variables template

### Key Directories:
- **`src/pages/`** - Page components
- **`src/components/`** - Reusable components
- **`src/styles/`** - Global SASS with BEM
- **`public/`** - Static assets

---

## 📞 SUPPORT

**Email:** ventas@creativosespacios.mx
**Website:** https://www.creativosespacios.mx

---

**Documentation Status:** ✅ Updated and cleaned
**Last Major Update:** Removed phase tracking, focused on development guidelines
**Purpose:** Reference for AI-assisted development
