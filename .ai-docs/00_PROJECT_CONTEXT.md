# 📋 PROJECT CONTEXT - CREATIVOS ESPACIOS

**Project Type:** B2B/B2C Website - Container Sales, Rental & Transformation
**Tech Stack:** React 19 + React Router 7 + React Bootstrap 5 + SASS
**Status:** ✅ **PRODUCTION READY** - All phases complete (0-21)
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

## 📊 PROJECT STATUS

### ✅ ALL PHASES COMPLETE (0-21)

**Development Phases (0-10):** 37+ pages fully functional with BEM methodology
**Optimization Phases (11-21):** SEO, Accessibility, Performance, Forms, Analytics, PWA, Testing, Deployment

### Key Features Implemented:
- ✅ 37+ fully functional pages
- ✅ 100% BEM methodology compliance
- ✅ SEO optimization with meta tags and structured data
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ Responsive typography with fluid clamp()
- ✅ Performance optimized (80%+ Lighthouse)
- ✅ Form integration with EmailJS
- ✅ Analytics (GTM, Google Ads, MailChimp)
- ✅ Cookie consent (GDPR compliance)
- ✅ Error handling (404 page, error boundaries)
- ✅ PWA features (service worker, offline support)
- ✅ Production build tested and verified

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

### Additional Integrations
- `react-helmet-async` - SEO meta tags
- `@emailjs/browser` - Form submissions
- Google Tag Manager - Analytics
- Google Ads - Conversion tracking
- MailChimp - Email marketing

### Project Structure
```
src/
├── pages/              # 37+ page components
├── components/         # Reusable components
│   ├── common/
│   ├── Header/
│   ├── Footer/
│   ├── SEO/
│   ├── CookieConsent/
│   ├── ErrorBoundary/
│   └── ...
├── styles/            # Global SASS with BEM
└── utils/             # Utilities and helpers
```

---

## 🎨 DESIGN SYSTEM

### Methodology
- **CSS Architecture:** BEM (Block Element Modifier)
- **Color System:** Black/white minimalist aesthetic
- **Typography:** Outfit (headings), Hind (body text)
- **Responsive:** Fluid typography with clamp()

### Typography
- Hero titles: `clamp(28px, 5vw, 40px)`
- Section titles: `clamp(18px, 3vw, 20px)`
- Body text: `clamp(12px, 1.5vw, 14px)`

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

### Deployment
See [DEPLOYMENT.md](../DEPLOYMENT.md) for complete deployment instructions.

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

## 🔧 ENVIRONMENT VARIABLES

### Required for Production

```bash
# Analytics (Already configured)
REACT_APP_GTM_ID=GTM-M2Z9THQF
REACT_APP_GA_CONVERSION=AW-11471696489

# EmailJS (Required - Get from dashboard.emailjs.com)
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAIL_DESTINATION=ventas@creativosespacios.mx

# Application
REACT_APP_SITE_URL=https://www.creativosespacios.mx
REACT_APP_ENV=production

# Feature Flags
REACT_APP_ENABLE_PWA=true
REACT_APP_ENABLE_COOKIE_CONSENT=true
```

See `.env.example` for complete configuration template.

---

## 📈 PROJECT METRICS

### Performance (Lighthouse Scores)
- **Performance:** 80%+ (Goal: 90%+)
- **Accessibility:** 90%+ (WCAG 2.1 AA compliant)
- **Best Practices:** 90%+
- **SEO:** 90%+

### Features
- **Pages:** 37+ (100% complete)
- **Forms:** 4 forms integrated with EmailJS → ventas@creativosespacios.mx
- **SEO:** Meta tags on all pages, sitemap.xml, robots.txt, structured data
- **PWA:** Installable, offline support, service worker caching
- **Analytics:** Full tracking with GTM, Google Ads, MailChimp

---

## 📁 SITE PAGES

### Main Sections (37+ Pages)

**Home & Services (4)**
- Home, Services General, Sales, Rental, Transformation

**Containers (4)**
- Container Types, Technical Specs, Catalog, Business Presentation

**About Us (6)**
- Who We Are, Mission & Vision, History, Values, Team, Success Cases

**Resources (4)**
- FAQ, Videos, Blog, Virtual Tour

**Client Zone (3)**
- Clients, Social Media, Complaints & Suggestions

**Construction (3)**
- Construction Process, Container Yards, Benefits

**Location (3)**
- Our Location, Allies, Contact

**Interactive Tools (4)**
- Customize Container, Client Profiler, Sales Quoter, Rental Quoter

**Additional (1)**
- Additional Services

**Legal (4)**
- Privacy Notice, Terms & Conditions, Identity Theft, Sitemap

**Error Handling (1)**
- 404 Not Found

---

## 🔗 QUICK REFERENCE

| Need | Location |
|------|----------|
| **Deployment Guide** | [DEPLOYMENT.md](../DEPLOYMENT.md) |
| **Main README** | [README.md](../README.md) |
| **Environment Template** | [.env.example](../.env.example) |
| **AI Documentation** | `.ai-docs/README.md` |

---

## ✅ PRODUCTION CHECKLIST

### Pre-Deployment
- [x] All 37+ pages functional
- [x] All forms send to ventas@creativosespacios.mx
- [x] SEO meta tags on all pages
- [x] Sitemap.xml and robots.txt configured
- [x] Analytics tracking verified
- [x] PWA features working
- [x] Accessibility WCAG 2.1 AA compliant
- [x] Performance optimized (80%+)
- [x] Production build tested
- [x] Environment variables documented

### Post-Deployment
- [ ] Submit sitemap to Google Search Console
- [ ] Verify analytics tracking in production
- [ ] Test all forms in production
- [ ] Verify PWA installation
- [ ] Run Lighthouse audit on production URL
- [ ] Check Core Web Vitals

---

## 🎯 KEY FACTS FOR AI ASSISTANTS

1. **Status:** Production ready - all development and optimization complete
2. **Forms:** ALL forms → `ventas@creativosespacios.mx`
3. **Analytics IDs:** GTM-M2Z9THQF, AW-11471696489, MailChimp 47304de05985a3e09520dc95e
4. **Performance Target:** 80% minimum (90%+ desirable)
5. **Accessibility:** WCAG 2.1 AA compliant
6. **SEO:** Full meta tags, structured data, sitemap on all pages
7. **PWA:** Installable with offline support
8. **Design:** BEM methodology, minimalist black/white aesthetic

---

**Current Status:** ✅ PRODUCTION READY
**Next Action:** Deploy to production (see DEPLOYMENT.md)
**Support:** ventas@creativosespacios.mx
