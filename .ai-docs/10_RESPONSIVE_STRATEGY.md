# RESPONSIVE STRATEGY - CREATIVOS ESPACIOS

**Generated:** 2025-10-13
**Challenge:** No mobile Figma designs provided
**Solution:** Extrapolate from desktop designs using proven responsive patterns
**Approach:** Mobile-first with desktop fidelity

---

## EXECUTIVE SUMMARY

All 10 Figma designs are desktop-only (1440px width). This document defines the responsive strategy to ensure all 46 pages work perfectly on:
- Mobile: 375px - 575px
- Tablet: 576px - 991px
- Desktop: 992px - 1440px+

**Key Principles:**
1. Desktop designs are pixel-perfect to Figma
2. Tablet designs scale and reflow content intelligently
3. Mobile designs stack everything vertically with adjusted spacing
4. Typography scales down progressively
5. Images adapt with responsive srcset
6. Navigation transforms to mobile-friendly patterns

---

## 1. BREAKPOINT STRATEGY

### 1.1 Breakpoints (Existing System)

```scss
$breakpoint-sm: 576px;   // Small devices (landscape phones)
$breakpoint-md: 768px;   // Medium devices (tablets)
$breakpoint-lg: 992px;   // Large devices (desktops)
$breakpoint-xl: 1200px;  // Extra large devices
$breakpoint-xxl: 1400px; // Extra extra large devices
```

### 1.2 Target Sizes

| Device | Min Width | Max Width | Columns | Gutter | Margin |
|--------|-----------|-----------|---------|--------|--------|
| Mobile | 375px | 575px | 1 | 16px | 16px |
| Tablet | 576px | 991px | 2 | 24px | 24px |
| Desktop | 992px | 1440px+ | 3+ | 32px | auto |

### 1.3 Testing Devices

**Priority 1 (Must Test):**
- iPhone SE (375x667px)
- iPad (768x1024px)
- Desktop (1440x900px)

**Priority 2 (Nice to Have):**
- iPhone 14 Pro (393x852px)
- iPad Pro (1024x1366px)
- Large Desktop (1920x1080px)

---

## 2. LAYOUT PATTERNS

### 2.1 Container Strategy

**Desktop (1440px Figma):**
```scss
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 $spacing-2xl; // 48px
}
```

**Tablet:**
```scss
@include respond-to(md) {
  .container {
    padding: 0 $spacing-xl; // 32px
  }
}
```

**Mobile:**
```scss
@media (max-width: $breakpoint-sm) {
  .container {
    padding: 0 $spacing-md; // 16px
  }
}
```

### 2.2 Grid Systems

#### Service Cards (Home Page)

**Desktop:** 3 columns (313px each)
```scss
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 313px);
  gap: $spacing-xl;
  justify-content: center;
}
```

**Tablet:** 2 columns
```scss
@include respond-to(md) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-lg;
    max-width: 700px;
  }
}
```

**Mobile:** 1 column (full width)
```scss
@media (max-width: $breakpoint-sm) {
  .service-grid {
    grid-template-columns: 1fr;
    gap: $spacing-md;
  }
}
```

#### Product Cards (Tipos Contenedores)

**Desktop:** 3 columns (288px each)
```scss
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 288px);
  gap: $spacing-lg;
}
```

**Tablet:** 2 columns
```scss
@include respond-to(md) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-md;
  }
}
```

**Mobile:** 1 column
```scss
@media (max-width: $breakpoint-sm) {
  .product-grid {
    grid-template-columns: 1fr;
    gap: $spacing-md;

    .product-card {
      max-width: 343px; // iPhone width minus margins
      margin: 0 auto;
    }
  }
}
```

#### Team Grid (Nuestro Equipo)

**Desktop:** 3 columns (200px each)
```scss
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: $spacing-2xl;
  justify-content: center;
}
```

**Tablet:** 2 columns
```scss
@include respond-to(md) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-xl;
    max-width: 500px;
    margin: 0 auto;
  }
}
```

**Mobile:** 1 column
```scss
@media (max-width: $breakpoint-sm) {
  .team-grid {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
  }
}
```

---

## 3. TYPOGRAPHY SCALING

### 3.1 Scaling Rules

**Base Principle:** Desktop uses Figma sizes, mobile scales down 80-85%

| Element | Desktop (Figma) | Tablet | Mobile |
|---------|-----------------|--------|--------|
| Hero Heading | 48px | 40px | 32px |
| Page Title | 36px | 30px | 28px |
| Section Title | 30px | 26px | 24px |
| Card Title | 24px | 22px | 20px |
| Subheading | 20px | 18px | 18px |
| Body Text | 16px | 16px | 16px |
| Small Text | 14px | 14px | 14px |

### 3.2 Implementation

#### Responsive Typography Mixin
```scss
@mixin responsive-heading($desktop-size) {
  font-size: $desktop-size;

  @include respond-to(md) {
    font-size: $desktop-size * 0.85;
  }

  @media (max-width: $breakpoint-sm) {
    font-size: $desktop-size * 0.7;
  }
}
```

#### Usage Example
```scss
.page-header__title {
  @include responsive-heading($font-size-5xl); // 48px → 40px → 34px
  font-family: $font-titulos;
  font-weight: $font-weight-bold;
  line-height: 1.2;
}

.section-title {
  @include responsive-heading($font-size-4xl); // 36px → 30px → 25px
  font-family: $font-titulos;
  font-weight: $font-weight-bold;
  margin-bottom: $spacing-lg;
}

// Body text stays consistent
.body-text {
  font-size: $font-size-base; // 16px on all devices
  line-height: 1.6;
}
```

### 3.3 Line Height Adjustments

```scss
// Desktop
h1 { line-height: 1.2; }
h2, h3 { line-height: 1.3; }
p { line-height: 1.6; }

// Mobile: Increase for readability
@media (max-width: $breakpoint-sm) {
  h1 { line-height: 1.3; }
  h2, h3 { line-height: 1.4; }
  p { line-height: 1.8; }
}
```

---

## 4. SPACING & PADDING

### 4.1 Section Spacing

```scss
// Desktop: Large vertical spacing
.section {
  padding: $spacing-4xl 0; // 96px
}

// Tablet: Medium spacing
@include respond-to(md) {
  .section {
    padding: $spacing-3xl 0; // 64px
  }
}

// Mobile: Compact spacing
@media (max-width: $breakpoint-sm) {
  .section {
    padding: $spacing-2xl 0; // 48px
  }
}
```

### 4.2 Card Padding

```scss
// Desktop: Generous padding
.card {
  padding: $spacing-2xl; // 48px
}

// Tablet: Moderate padding
@include respond-to(md) {
  .card {
    padding: $spacing-xl; // 32px
  }
}

// Mobile: Compact padding
@media (max-width: $breakpoint-sm) {
  .card {
    padding: $spacing-lg; // 24px
  }
}
```

### 4.3 Gap/Gutters

```scss
// Desktop
gap: $spacing-2xl; // 48px

// Tablet
@include respond-to(md) {
  gap: $spacing-xl; // 32px
}

// Mobile
@media (max-width: $breakpoint-sm) {
  gap: $spacing-lg; // 24px
}
```

---

## 5. NAVIGATION RESPONSIVE PATTERNS

### 5.1 Header/Navbar

**Desktop (from Figma):**
- Fixed header: 160px total height (96px logo + 64px nav)
- Horizontal menu items
- Dropdowns on hover

**Tablet & Mobile:**
- Fixed header: 80px height
- Hamburger menu icon
- Full-screen mobile menu overlay
- Touch-friendly tap targets (44x44px minimum)

```scss
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 160px;
  @include transition(all);

  // Tablet & Mobile
  @media (max-width: $breakpoint-lg) {
    height: 80px;
    background: rgba(0, 0, 0, 0.95);

    .logo {
      max-height: 50px;
    }

    .navbar-toggle {
      display: block;
      width: 44px;
      height: 44px;
    }

    .navbar-menu {
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.98);
      transform: translateX(-100%);
      @include transition(transform);

      &.open {
        transform: translateX(0);
      }
    }

    .nav-link {
      display: block;
      padding: $spacing-lg;
      font-size: $font-size-lg;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      min-height: 44px; // Touch target
    }

    .dropdown-menu {
      position: static;
      background: transparent;
      border: none;
      padding-left: $spacing-xl;
    }
  }
}
```

### 5.2 Footer

**Desktop (from Figma):**
- 5 columns of links (1210px / 5 = 242px each)
- Social icons row (371px width)
- Large footer ~400-500px height

**Tablet:**
- 3 columns
- Stacked social icons

**Mobile:**
- 1 column (stacked)
- Accordion-style link sections
- Compact social icons

```scss
.footer {
  padding: $spacing-4xl 0;

  // Desktop: 5 columns
  .footer-links {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: $spacing-xl;
  }

  // Tablet: 3 columns
  @include respond-to(md) {
    padding: $spacing-3xl 0;

    .footer-links {
      grid-template-columns: repeat(3, 1fr);
      gap: $spacing-lg;
    }
  }

  // Mobile: 1 column (accordion)
  @media (max-width: $breakpoint-sm) {
    padding: $spacing-2xl 0;

    .footer-links {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .footer-column {
      border-bottom: 1px solid $color-gris-medio;

      &__title {
        padding: $spacing-md 0;
        cursor: pointer;
        position: relative;

        &::after {
          content: '+';
          position: absolute;
          right: 0;
          @include transition(transform);
        }

        &.open::after {
          content: '-';
        }
      }

      &__links {
        max-height: 0;
        overflow: hidden;
        @include transition(max-height);

        &.open {
          max-height: 500px;
          padding-bottom: $spacing-md;
        }
      }
    }
  }
}
```

---

## 6. COMPONENT-SPECIFIC PATTERNS

### 6.1 PageHeader (Hero Section)

**Desktop:** Full-width background, centered/left-aligned text
**Tablet:** Slightly smaller text, same layout
**Mobile:** Stack text, smaller hero height

```scss
.page-header {
  min-height: 508px;
  background-size: cover;
  background-position: center;
  @include flex-center;
  padding: $spacing-4xl $spacing-2xl;

  @include respond-to(md) {
    min-height: 400px;
    padding: $spacing-3xl $spacing-xl;
  }

  @media (max-width: $breakpoint-sm) {
    min-height: 300px;
    padding: $spacing-2xl $spacing-md;
    text-align: center; // Force center on mobile

    &__content {
      max-width: 100%;
    }
  }
}
```

### 6.2 ServiceCard

**Desktop:** 313px x 575px (3 columns)
**Tablet:** Flexible width (2 columns)
**Mobile:** Full width, slightly shorter

```scss
.service-card {
  width: 313px;
  height: 575px;

  @include respond-to(md) {
    width: 100%;
    max-width: 350px;
    height: auto;
    min-height: 500px;
  }

  @media (max-width: $breakpoint-sm) {
    width: 100%;
    max-width: 343px;
    height: auto;
    min-height: 450px;

    &__image {
      width: 100%;
      height: auto;
      aspect-ratio: 1 / 1; // Maintain square
    }
  }
}
```

### 6.3 ProductCard

**Desktop:** 288px x 320px (3 columns)
**Tablet:** Flexible (2 columns)
**Mobile:** Full width

```scss
.product-card {
  width: 288px;
  height: 320px;

  @include respond-to(md) {
    width: 100%;
    max-width: 320px;
  }

  @media (max-width: $breakpoint-sm) {
    width: 100%;
    max-width: 343px;
    margin: 0 auto;
  }
}
```

### 6.4 Timeline (Historia Page)

**Desktop:** Horizontal timeline with left/right alternating
**Tablet:** Same pattern, smaller spacing
**Mobile:** Vertical timeline (single column, all left-aligned)

```scss
.timeline {
  position: relative;

  // Desktop & Tablet: Horizontal split
  .timeline-item {
    @include flex-between;

    &__year {
      width: 45%;
      text-align: right;
    }

    &__content {
      width: 45%;
    }
  }

  // Mobile: Vertical stack
  @media (max-width: $breakpoint-sm) {
    .timeline-item {
      flex-direction: column;
      align-items: flex-start;
      padding-left: $spacing-2xl;

      &__line {
        left: 0;
        transform: none;
      }

      &__marker {
        left: 0;
        transform: translateX(-50%);
      }

      &__year,
      &__content {
        width: 100%;
        text-align: left;
        padding: 0;
      }

      &__year {
        margin-bottom: $spacing-sm;
      }
    }
  }
}
```

### 6.5 Forms

**Desktop:** Multi-column layouts
**Tablet:** 2 columns
**Mobile:** Single column, full-width inputs

```scss
.form {
  .form-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-lg;

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: 1fr;
      gap: $spacing-md;
    }
  }

  .form-control {
    height: 48px;
    padding: $spacing-sm $spacing-md;
    font-size: $font-size-base;
    border-radius: $border-radius-md;

    @media (max-width: $breakpoint-sm) {
      height: 44px; // Minimum touch target
    }
  }

  .form-button {
    width: 100%; // Full width on all devices
    height: 48px;
    font-size: $font-size-lg;

    @media (max-width: $breakpoint-sm) {
      height: 44px;
      font-size: $font-size-base;
    }
  }
}
```

---

## 7. IMAGE RESPONSIVE PATTERNS

### 7.1 Hero Images

**Approach:** Different crops for different devices

```html
<picture>
  <source
    media="(max-width: 575px)"
    srcset="/images/hero-mobile.jpg"
  />
  <source
    media="(max-width: 991px)"
    srcset="/images/hero-tablet.jpg"
  />
  <img
    src="/images/hero-desktop.jpg"
    alt="Hero"
    loading="lazy"
  />
</picture>
```

### 7.2 Card Images

**Approach:** Maintain aspect ratio, scale responsively

```scss
.card__image {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1; // Square images
  @include image-cover;

  // Desktop: Fixed size from Figma
  @media (min-width: $breakpoint-lg) {
    width: 250px;
    height: 250px;
  }
}
```

### 7.3 Content Images

**Approach:** Max width, responsive

```scss
.content-image {
  max-width: 100%;
  height: auto;
  border-radius: $border-radius-md;

  @media (max-width: $breakpoint-sm) {
    margin: $spacing-lg 0;
  }
}
```

---

## 8. TOUCH INTERACTIONS

### 8.1 Touch Targets (Mobile)

**Minimum size:** 44x44px (Apple HIG, Material Design)

```scss
// Buttons
.btn {
  min-height: 44px;
  min-width: 44px;
  padding: $spacing-sm $spacing-lg;

  @media (max-width: $breakpoint-sm) {
    padding: $spacing-sm $spacing-md;
  }
}

// Nav links
.nav-link {
  @media (max-width: $breakpoint-sm) {
    min-height: 44px;
    padding: $spacing-md $spacing-lg;
  }
}

// Icon buttons
.icon-button {
  width: 44px;
  height: 44px;
  @include flex-center;
}

// Checkboxes (increase touch area)
.checkbox {
  position: relative;

  input {
    width: 20px;
    height: 20px;
  }

  // Expand touch area
  &::before {
    content: '';
    position: absolute;
    width: 44px;
    height: 44px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
```

### 8.2 Hover to Tap Conversion

```scss
.interactive-element {
  @include transition(all);

  // Desktop: Hover effects
  @media (min-width: $breakpoint-lg) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: $shadow-lg;
    }
  }

  // Mobile: Active (tap) effects
  @media (max-width: $breakpoint-lg) {
    &:active {
      transform: scale(0.98);
      opacity: 0.9;
    }
  }
}
```

---

## 9. PERFORMANCE CONSIDERATIONS

### 9.1 Lazy Loading

```jsx
// Images below the fold
<img src="/images/content.jpg" loading="lazy" alt="..." />

// React component
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>
```

### 9.2 Responsive Images

```jsx
<img
  src="/images/small.jpg"
  srcset="
    /images/small.jpg 375w,
    /images/medium.jpg 768w,
    /images/large.jpg 1440w
  "
  sizes="
    (max-width: 575px) 343px,
    (max-width: 991px) 700px,
    1200px
  "
  alt="Responsive"
/>
```

### 9.3 Critical CSS

**Inline critical CSS for above-the-fold content:**

```html
<head>
  <style>
    /* Critical CSS: Header, Hero, First Section */
    .site-header { /* ... */ }
    .page-header { /* ... */ }
    .hero-section { /* ... */ }
  </style>

  <!-- Load full CSS async -->
  <link rel="preload" href="/styles/main.css" as="style" onload="this.rel='stylesheet'">
</head>
```

---

## 10. TESTING CHECKLIST

### 10.1 Visual Testing

- [ ] All pages render correctly at 375px (iPhone SE)
- [ ] All pages render correctly at 768px (iPad)
- [ ] All pages render correctly at 1440px (Desktop)
- [ ] No horizontal scrolling on any device
- [ ] All images scale properly
- [ ] All text is readable (no tiny fonts)
- [ ] All buttons/links are tappable (44x44px)

### 10.2 Functional Testing

- [ ] Navigation menu works on mobile
- [ ] Forms submit correctly on all devices
- [ ] Cards/grids reflow properly
- [ ] Images load efficiently
- [ ] Hover effects convert to tap on touch
- [ ] No layout shifts (CLS)

### 10.3 Performance Testing

- [ ] Lighthouse score > 90 on mobile
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 3s
- [ ] Images optimized (WebP, lazy loading)
- [ ] CSS/JS minified and gzipped

---

## 11. RESPONSIVE UTILITIES

### 11.1 Visibility Helpers

```scss
// Hide on mobile
.hidden-mobile {
  @media (max-width: $breakpoint-sm) {
    display: none !important;
  }
}

// Hide on tablet
.hidden-tablet {
  @media (min-width: $breakpoint-sm) and (max-width: $breakpoint-lg) {
    display: none !important;
  }
}

// Hide on desktop
.hidden-desktop {
  @media (min-width: $breakpoint-lg) {
    display: none !important;
  }
}

// Show only on mobile
.show-mobile {
  display: none !important;

  @media (max-width: $breakpoint-sm) {
    display: block !important;
  }
}
```

### 11.2 Spacing Utilities

```scss
// Responsive margins
.mt-responsive {
  margin-top: $spacing-2xl;

  @include respond-to(md) {
    margin-top: $spacing-xl;
  }

  @media (max-width: $breakpoint-sm) {
    margin-top: $spacing-lg;
  }
}

// Responsive padding
.p-responsive {
  padding: $spacing-2xl;

  @include respond-to(md) {
    padding: $spacing-xl;
  }

  @media (max-width: $breakpoint-sm) {
    padding: $spacing-lg;
  }
}
```

---

## 12. IMPLEMENTATION WORKFLOW

### Step 1: Desktop First (Match Figma)
```scss
// Start with desktop styles (match Figma exactly)
.component {
  width: 313px;
  height: 575px;
  padding: $spacing-2xl;
}
```

### Step 2: Add Tablet Breakpoint
```scss
@include respond-to(md) {
  .component {
    width: 100%;
    max-width: 350px;
    padding: $spacing-xl;
  }
}
```

### Step 3: Add Mobile Breakpoint
```scss
@media (max-width: $breakpoint-sm) {
  .component {
    width: 100%;
    max-width: 343px;
    padding: $spacing-lg;
  }
}
```

### Step 4: Test All Devices
- Chrome DevTools responsive mode
- Real devices if available
- BrowserStack for cross-browser

---

## CONCLUSION

This responsive strategy ensures all 46 pages will work seamlessly across all devices, despite having only desktop Figma designs. The key is:

1. **Desktop fidelity:** Match Figma pixel-perfect at 1440px
2. **Intelligent scaling:** Use proportional scaling for tablets
3. **Mobile stacking:** Vertical layouts for mobile
4. **Touch optimization:** 44px minimum targets
5. **Performance:** Lazy loading, responsive images

**Estimated implementation time per page:** 1-2 hours for responsive adjustments
**Testing time per page:** 30 minutes across all devices
**Total Phase 9 duration:** 2-3 sessions for all 46 pages
