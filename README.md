# Creativos Espacios V2

**B2B/B2C Website** - Container Sales, Rental & Transformation Solutions

## 📋 Project Overview

React-based website for Creativos Espacios, a company specializing in container solutions including sales, rental, transformation, and construction services.

### Tech Stack
- **React** 19.0.0
- **React Router DOM** 7.3.0
- **React Bootstrap** 5.3.3
- **SASS** 1.85.1

### Project Status
- **Total Pages:** 46
- **Completed:** 16 (35%)
- **In Progress:** Phase 1 - Sprint 1 (Information & Catalogs)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Opens on `http://localhost:3000`

### Build
```bash
npm run build
```

### Troubleshooting
If the project won't start:
```bash
# Kill node processes
cmd /c taskkill /F /IM node.exe

# Clear webpack cache
powershell Remove-Item -Recurse -Force 'node_modules\.cache'

# Restart
npm start
```

---

## 📁 Project Structure

```
src/
├── pages/              # All page components (46 total)
│   ├── Home/
│   ├── Servicios/
│   ├── Privacidad/
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

## 📚 Documentation

**All AI-assisted development documentation is located in [`.ai-docs/`](.ai-docs/)**

### Quick Links

| File | Purpose | When to Read |
|------|---------|--------------|
| [00_PROJECT_CONTEXT.md](.ai-docs/00_PROJECT_CONTEXT.md) | Project overview, tech stack, status | Start of every session |
| [01_DESIGN_SYSTEM.md](.ai-docs/01_DESIGN_SYSTEM.md) | Colors, typography, spacing tokens | When styling components |
| [02_TASK_SITEMAP.md](.ai-docs/02_TASK_SITEMAP.md) | All 46 pages, sprints, priorities | Planning work, checking progress |
| [03_FIGMA_INTEGRATION.md](.ai-docs/03_FIGMA_INTEGRATION.md) | Pixel-perfect implementation guide | When implementing from Figma designs |
| [04_COMPONENT_PATTERNS.md](.ai-docs/04_COMPONENT_PATTERNS.md) | Reusable templates & code patterns | Creating new pages/components |
| [05_LEARNING_LOG.md](.ai-docs/05_LEARNING_LOG.md) | Session learnings & solutions | Reference for solved problems |

### AI Workflow

1. Read [00_PROJECT_CONTEXT.md](.ai-docs/00_PROJECT_CONTEXT.md) for project overview
2. Check [02_TASK_SITEMAP.md](.ai-docs/02_TASK_SITEMAP.md) for current sprint tasks
3. Reference [01_DESIGN_SYSTEM.md](.ai-docs/01_DESIGN_SYSTEM.md) for design tokens
4. Use [04_COMPONENT_PATTERNS.md](.ai-docs/04_COMPONENT_PATTERNS.md) templates
5. Check [03_FIGMA_INTEGRATION.md](.ai-docs/03_FIGMA_INTEGRATION.md) for Figma specs
6. Log learnings in [05_LEARNING_LOG.md](.ai-docs/05_LEARNING_LOG.md)

---

## 🎨 Design System

### Colors
- **Primary:** `#3B6F7F` (Calipso - Teal)
- **Secondary:** `#F16700` (Naranja - Orange)
- **Tertiary:** `#841C03` (Terracota - Brown)

### Typography
- **Headings:** Outfit
- **Body:** Hind

### CSS Methodology
- **BEM** (Block Element Modifier)
- **Mobile-first** responsive design
- **Bootstrap 5** grid system

See [01_DESIGN_SYSTEM.md](.ai-docs/01_DESIGN_SYSTEM.md) for complete design tokens.

---

## 📞 Company Information

- **Website:** creativosespacios.com
- **Email:** contacto@creativosespacios.com
- **Instagram:** [@creativosespaciosmx](https://www.instagram.com/creativosespaciosmx)
- **YouTube:** [Creativos Espacios](https://www.youtube.com/channel/UCEAQ-yq9sq0C-KCX8-aRyZA)
- **X (Twitter):** [@creaespaciosmx](https://x.com/creaespaciosmx)
- **TikTok:** [@creativosespaciosmx](https://www.tiktok.com/@creativosespaciosmx)

---

## 📈 Progress

### Current Sprint: Phase 1 - Sprint 1
**Focus:** Information & Catalogs (5 pages)

- [ ] Business Presentation (`/presentacion-empresarial`)
- [ ] Container Types Listing (`/tipos-contenedores`)
- [ ] Container Type Detail (`/tipos-contenedores/:id`)
- [ ] Technical Specs (`/fichas-tecnicas`)
- [ ] General Catalog (`/catalogo`)

### Recently Completed (Latest Session)
- [x] Privacy Notice (`/privacidad`)
- [x] Terms & Conditions (`/terminos`)
- [x] Identity Theft Notice (`/robo-identidad`)
- [x] Sitemap (`/mapa-sitio`)

See [02_TASK_SITEMAP.md](.ai-docs/02_TASK_SITEMAP.md) for complete sitemap and progress tracking.

---

## 🛠️ Development Guidelines

### Creating a New Page

1. Create folder: `src/pages/PageName/`
2. Create component: `PageName.jsx`
3. Create styles: `PageName.scss`
4. Add route to `App.js`
5. Follow patterns in [04_COMPONENT_PATTERNS.md](.ai-docs/04_COMPONENT_PATTERNS.md)

### Component Template
```jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PageName.scss';

const PageName = () => {
  return (
    <div className="page-name">
      <section className="page-name__banner">
        {/* Banner content */}
      </section>
      <section className="page-name__content">
        <Container>
          {/* Main content */}
        </Container>
      </section>
    </div>
  );
};

export default PageName;
```

### SCSS Template
```scss
@import '../../styles/variables';
@import '../../styles/mixins';

.page-name {
  // Use BEM methodology
  &__banner {
    // Banner styles
  }
  &__content {
    // Content styles
  }
}
```

---

## 📄 License

Copyright © 2025 Creativos Espacios. All rights reserved.

---

## 🤝 Contributing

This is a private project for Creativos Espacios. For questions or issues, contact the development team.

---

**Last Updated:** 2025-10-13
