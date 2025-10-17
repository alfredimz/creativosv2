# Creativos Espacios V2

**B2B/B2C Website** - Container Sales, Rental & Transformation Solutions

## 📋 Project Overview

React-based website for Creativos Espacios, a company specializing in container solutions including sales, rental, transformation, and construction services.

### Tech Stack
- **React** 19.0.0
- **React Router DOM** 7.3.0
- **React Bootstrap** 2.10.9
- **SASS** 1.85.1
- **Swiper** 11.1.15

### Project Status
- **Total Pages:** 37+
- **Status:** **IN DEVELOPMENT** - Pixel-perfect Figma implementation
- **Current Work:** UI/UX refinements based on Figma designs
- **Features:** Hero Slider, PWA, Forms (EmailJS), Analytics (GTM), SEO, Accessibility
- **Deployment:** Development active

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
├── pages/              # All page components (37+)
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
└── styles/            # Global SASS with BEM methodology
    ├── _variables.scss
    ├── _mixins.scss
    └── global.scss
```

---

## 📚 Documentation

**AI Development Documentation:** [`.ai-docs/`](.ai-docs/)

### Essential Files

| File | Purpose |
|------|---------|
| [00_PROJECT_CONTEXT.md](.ai-docs/00_PROJECT_CONTEXT.md) | Project context, Figma integration, tech stack |
| [CORRECCIONES_PLAN.md](.ai-docs/CORRECCIONES_PLAN.md) | Correction phases plan |
| [CLAUDE_CODE_GUIDE.md](.ai-docs/CLAUDE_CODE_GUIDE.md) | Implementation guide |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Complete deployment guide |

---

## 🎨 Design System

### Current Design
- **Primary Color:** Black (`#000000`)
- **Secondary Color:** White (`#FFFFFF`)
- **Typography:** Outfit (headings), Hind (body)
- **Methodology:** BEM (Block Element Modifier)
- **Style:** Minimalist black/white aesthetic

### CSS Methodology
- **BEM** (Block Element Modifier)
- **Mobile-first** responsive design
- **Bootstrap 5** grid system

---

## 🛠️ Development Guidelines

### BEM Naming Convention

```scss
.page-name {
  &-hero {
    &__title { }
    &__description { }
  }

  &-section-name {
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

---

## 📞 Company Information

- **Website:** creativosespacios.com
- **Email:** contacto@creativosespacios.com
- **Instagram:** [@creativosespaciosmx](https://www.instagram.com/creativosespaciosmx)
- **YouTube:** [Creativos Espacios](https://www.youtube.com/channel/UCEAQ-yq9sq0C-KCX8-aRyZA)
- **X (Twitter):** [@creaespaciosmx](https://x.com/creaespaciosmx)
- **TikTok:** [@creativosespaciosmx](https://www.tiktok.com/@creativosespaciosmx)

---

## 📄 License

Copyright © 2025 Creativos Espacios. All rights reserved.

---

**Last Updated:** 2025-10-16
**Status:** IN DEVELOPMENT - Figma pixel-perfect implementation
