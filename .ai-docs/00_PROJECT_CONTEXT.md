# 📋 PROJECT CONTEXT - CREATIVOS ESPACIOS

**Project Type:** B2B/B2C Website - Container Sales, Rental & Transformation
**Tech Stack:** React 19 + React Router 7 + React Bootstrap 5 + SASS
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

### Project Structure
```
src/
├── pages/              # Page components
├── components/         # Reusable components
│   ├── common/
│   ├── Header/
│   ├── Footer/
│   ├── SEO/
│   └── ...
├── styles/            # Global SASS with BEM
│   ├── _variables.scss
│   └── _mixins.scss
├── utils/             # Utilities and helpers
└── filesForDesing/    # Design assets
    └── Presentacion.pdf
```

---

## 🎨 DESIGN SYSTEM

### Typography

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
```scss
// Primary Colors
$calipso: #3B6F7F;
$naranja: #F16700;
$terracota: #841C03;
```

### Methodology
- **CSS Architecture:** BEM (Block Element Modifier)
- **Responsive:** Bootstrap breakpoints + fluid typography

---

## 🎨 FIGMA INTEGRATION

### ✅ Figma MCP Connection Active

**Access Method:** Figma MCP Server (connected)
**Design Source:** Figma files for Creativos Espacios
**File Key:** `5wJFG1eYWcGQak6eyjAgjo`

**Available Tools:**
- `mcp__figma__get_screenshot` - Get screenshots of Figma nodes
- `mcp__figma__get_design_context` - Get design specifications and code
- `mcp__figma__get_metadata` - Get structure and layout information

**Usage:**
```
For any visual implementation:
1. Consult Figma ALWAYS (except typography)
2. Use mcp__figma__ tools to extract designs
3. If design not in Figma: use existing project patterns
4. Maintain visual consistency
```

**IMPORTANT:** Typography specifications override Figma designs

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

## 🔗 QUICK REFERENCE

| Need | Location |
|------|----------|
| **Design Guidelines** | [CORRECCIONES_PLAN.md](CORRECCIONES_PLAN.md) |
| **Deployment Guide** | [DEPLOYMENT.md](../DEPLOYMENT.md) |
| **Main README** | [README.md](../README.md) |
| **Environment Template** | [.env.example](../.env.example) |

---

## 🎯 KEY FACTS FOR DEVELOPMENT

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

### Forms Configuration
- **ALL forms send to:** `ventas@creativosespacios.mx`

---

**Support:** ventas@creativosespacios.mx
**Documentation:** [README.md](.ai-docs/README.md)
