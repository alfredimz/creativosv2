# Creativos Espacios V2

**B2B/B2C Website** - Container Sales, Rental & Transformation Solutions

## 📋 Project Overview

React-based website for Creativos Espacios, a company specializing in container solutions including sales, rental, transformation, and construction services.

### Tech Stack
- **React** 19.0.0
- **React Router DOM** 7.3.0
- **React Bootstrap** 2.10.9
- **SASS** 1.85.1

### Project Status
- **Total Pages:** 37+
- **Completed:** 37 (100%) ✅
- **Status:** **PRODUCTION READY** - All phases complete (0-21) ✅
- **Optimization Phases:** SEO, Accessibility, Typography, Performance, Forms, Analytics, PWA, Testing ✅
- **Deployment:** Ready for production deployment

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

### Deployment

**For complete deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

#### Quick Deploy

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel --prod
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Required Environment Variables

Before deploying, configure these variables in your hosting platform:

```bash
# Analytics (Already configured)
REACT_APP_GTM_ID=GTM-M2Z9THQF
REACT_APP_GA_CONVERSION=AW-11471696489

# EmailJS (Required - Get from dashboard.emailjs.com)
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAIL_DESTINATION=ventas@creativosespacios.mx

# Application
REACT_APP_SITE_URL=https://www.creativosespacios.mx
REACT_APP_ENV=production
```

Copy `.env.example` to `.env.local` for local development or `.env.production` for production builds.

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for:**
- Complete step-by-step deployment guides for Vercel, Netlify, and traditional hosting
- Post-deployment verification checklist
- SEO configuration (sitemap submission, Search Console setup)
- Analytics setup and testing
- Troubleshooting common deployment issues

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
├── pages/              # All page components (37+ completed)
│   ├── Home/
│   ├── Servicios/
│   ├── Conocenos/
│   ├── Privacidad/
│   └── ...
├── components/         # Reusable components
│   ├── common/
│   ├── Header/
│   ├── Footer/
│   └── ...
├── styles/            # Global SASS with BEM methodology
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
| [02_TASK_SITEMAP.md](.ai-docs/02_TASK_SITEMAP.md) | All pages organized by phase | Planning work, checking progress |
| [04_COMPONENT_PATTERNS.md](.ai-docs/04_COMPONENT_PATTERNS.md) | Reusable templates & code patterns | Creating new pages/components |
| [05_LEARNING_LOG.md](.ai-docs/05_LEARNING_LOG.md) | Session learnings & solutions | Reference for solved problems |

---

## 🎨 Design System

### Refactored Design (Current)
- **Primary Color:** Black (`#000000`)
- **Secondary Color:** White (`#FFFFFF`)
- **Border Style:** 1px solid borders
- **Typography:** 40px hero titles, 12px body text, 20px section titles
- **Methodology:** BEM (Block Element Modifier)
- **Style:** Minimalist black/white aesthetic

### Typography
- **Headings:** Outfit
- **Body:** Hind

### CSS Methodology
- **BEM** (Block Element Modifier) - Strictly applied
- **Mobile-first** responsive design
- **Bootstrap 5** grid system
- **No gradients, shadows, or border-radius** (removed in refactor)

See [01_DESIGN_SYSTEM.md](.ai-docs/01_DESIGN_SYSTEM.md) for complete design tokens.

---

## 📈 Progress - ALL PHASES COMPLETE ✅

### Phase 0: Home ✅
- [x] Home page

### Phase 1: Services Pages ✅
- [x] Services General
- [x] Container Sales
- [x] Container Rental
- [x] Transformation

### Phase 2: Container Pages ✅
- [x] Container Types
- [x] Technical Specs
- [x] Catalog
- [x] Business Presentation

### Phase 3: About Us Pages ✅
- [x] Who We Are
- [x] Mission & Vision
- [x] History
- [x] Values
- [x] Our Team
- [x] Success Cases

### Phase 4: Resources Pages ✅
- [x] FAQ
- [x] Videos
- [x] Blog
- [x] Virtual Tour

### Phase 5: Clients Pages ✅
- [x] Clients
- [x] Social Media
- [x] Complaints & Suggestions

### Phase 6: Construction & Benefits ✅
- [x] Construction
- [x] Container Yards
- [x] Benefits

### Phase 7: Location & Allies ✅
- [x] Our Location
- [x] Allies
- [x] Contact

### Phase 8: Interactive Pages ✅
- [x] Customize Container
- [x] Client Profiler
- [x] Sales Quoter

### Phase 9: Additional Services ✅
- [x] Additional Services

### Phase 10: Legal Pages ✅
- [x] Privacy Notice
- [x] Terms & Conditions
- [x] Identity Theft Notice
- [x] Sitemap

### Phase 11-19: Optimization Phases ✅
- [x] SEO Optimization (meta tags, structured data, sitemap)
- [x] Accessibility (WCAG 2.1 AA compliance, ARIA labels, keyboard navigation)
- [x] Typography (fluid typography with clamp)
- [x] Performance (code splitting, lazy loading, image optimization)
- [x] Forms (EmailJS integration, validation, error handling)
- [x] Analytics (Google Tag Manager, Google Ads, conversion tracking)
- [x] Cookie Consent (GDPR compliance)
- [x] Error Handling (error boundaries, 404 page)
- [x] PWA Features (service workers, offline support, manifest)

### Phase 20: Testing & QA ✅
- [x] Production build verification
- [x] Code quality audit (ESLint warnings documented)
- [x] Comprehensive QA report

### Phase 21: Final Polish & Deployment ✅
- [x] Fixed all ESLint warnings
- [x] Created environment variables template
- [x] Created comprehensive deployment documentation
- [x] Updated README with deployment instructions

---

## 🛠️ Development Guidelines

### BEM Naming Convention (Strictly Applied)

```scss
.page-name {
  // Page wrapper

  &-hero {
    // Hero section
    &__title { }
    &__description { }
  }

  &-section-name {
    // Section block
    &__element { }
    &__element--modifier { }
  }
}
```

### Creating a New Page

1. Create folder: `src/pages/PageName/`
2. Create component: `PageName.jsx`
3. Create styles: `PageName.scss`
4. Add route to `App.js`
5. Follow BEM patterns strictly

### Component Template
```jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PageName.scss';

const PageName = () => {
  return (
    <div className="page-name">
      <section className="page-name-hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="page-name-hero__title">Title</h1>
              <p className="page-name-hero__description">Description</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="page-name-content">
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
  background-color: $color-blanco;
}

.page-name-hero {
  padding: $spacing-2xl 0;
  background-color: $color-blanco;
  text-align: center;

  &__title {
    font-family: $font-titulos;
    font-size: 40px;
    font-weight: $font-weight-light;
    color: $color-negro;
  }

  &__description {
    font-family: $font-parrafos;
    font-size: 12px;
    color: $color-negro;
  }
}
```

---

## 📞 Company Information

- **Website:** creativosespacios.com
- **Email:** contacto@creativosespacios.com
- **Instagram:** [@creativosespaciosmx](https://www.instagram.com/creativosespaciosmx)
- **YouTube:** [Creativos Espacios](https://www.youtube.com/channel/UCEAQ-yq9sq0C-KCX8-aRyZA)
- **X (Twitter):** [@creaespaciosmx](https://x.com/creaespaciosmx)
- **TikTok:** [@creativosespaciosmx](https://www.tiktok.com/@creativosespaciosmx)

---

## 🎯 Key Achievements

✅ **37+ pages** refactored with BEM methodology
✅ **Consistent design system** applied across all pages
✅ **Black/white aesthetic** - removed gradients, shadows, border-radius
✅ **Responsive design** maintained throughout
✅ **Interactive features** preserved (forms, accordions, filters, etc.)
✅ **All footer links** functional
✅ **Clean, maintainable codebase**

---

## 📄 License

Copyright © 2025 Creativos Espacios. All rights reserved.

---

## 🤝 Contributing

This is a private project for Creativos Espacios. For questions or issues, contact the development team.

---

**Last Updated:** 2025-10-14
**Status:** ✅ **PRODUCTION READY - ALL 21 PHASES COMPLETE**
**Ready for:** Production Deployment to creativosespacios.mx
