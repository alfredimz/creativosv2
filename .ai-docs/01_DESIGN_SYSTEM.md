# 🎨 DESIGN SYSTEM - CREATIVOS ESPACIOS

**Purpose:** Quick reference for design tokens, colors, typography, and spacing
**Last Updated:** 2025-10-13

---

## 🎨 COLOR PALETTE

### Primary Colors
```scss
$color-calipso: #3B6F7F;        // Main brand color (teal/turquoise)
$color-naranja: #F16700;        // Secondary accent (orange)
$color-terracota: #841C03;      // Tertiary accent (terracotta/brown)
```

### Neutral Colors
```scss
$color-blanco: #FFFFFF;
$color-negro: #000000;
$color-gris-claro: #F8F9FA;
$color-gris-medio: #6C757D;
$color-gris-oscuro: #343A40;
```

### Semantic Colors
```scss
$color-exito: #28A745;          // Success states
$color-advertencia: #FFC107;    // Warning states
$color-error: #DC3545;          // Error states
$color-info: #17A2B8;           // Info states
```

### Usage Guidelines
- **Calipso:** Headers, CTAs, primary buttons, brand elements
- **Naranja:** Secondary buttons, highlights, hover states
- **Terracota:** Tertiary elements, subtle accents
- **White:** Backgrounds, cards, containers
- **Grays:** Text, borders, shadows, disabled states

---

## 📝 TYPOGRAPHY

### Font Families
```scss
$font-titulos: 'Outfit', sans-serif;    // Headings
$font-parrafos: 'Hind', sans-serif;     // Body text
```

### Font Sizes
```scss
// Base
$font-size-base: 16px;

// Headings
$font-size-4xl: 3rem;      // 48px - Hero titles
$font-size-3xl: 2.5rem;    // 40px - Main H1
$font-size-2xl: 2rem;      // 32px - H2
$font-size-xl: 1.75rem;    // 28px - H3
$font-size-lg: 1.5rem;     // 24px - H4
$font-size-md: 1.25rem;    // 20px - H5

// Body
$font-size-base: 1rem;     // 16px - Normal text
$font-size-sm: 0.875rem;   // 14px - Small text
$font-size-xs: 0.75rem;    // 12px - Extra small
```

### Font Weights
```scss
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
$font-weight-extrabold: 800;
```

### Line Heights
```scss
$line-height-tight: 1.2;
$line-height-normal: 1.5;
$line-height-relaxed: 1.75;
$line-height-loose: 2;
```

---

## 📏 SPACING SYSTEM

### Spacing Scale
```scss
$spacing-xs: 0.25rem;    // 4px
$spacing-sm: 0.5rem;     // 8px
$spacing-md: 1rem;       // 16px
$spacing-lg: 1.5rem;     // 24px
$spacing-xl: 2rem;       // 32px
$spacing-2xl: 3rem;      // 48px
$spacing-3xl: 4rem;      // 64px
$spacing-4xl: 6rem;      // 96px
$spacing-5xl: 8rem;      // 128px
```

### Common Applications
- **xs (4px):** Icon spacing, tight gaps
- **sm (8px):** Small margins, badges
- **md (16px):** Default padding, standard margins
- **lg (24px):** Card padding, section spacing
- **xl (32px):** Between sections
- **2xl (48px):** Large section gaps
- **3xl-5xl:** Hero sections, page divisions

---

## 🔲 LAYOUT & GRID

### Container Widths
```scss
$container-sm: 540px;
$container-md: 720px;
$container-lg: 960px;
$container-xl: 1140px;
$container-xxl: 1320px;
```

### Breakpoints (Bootstrap Default)
```scss
$breakpoint-xs: 0;
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
$breakpoint-xxl: 1400px;
```

### Grid System
- **12-column grid** (Bootstrap)
- **Mobile-first** approach
- **Responsive** using Bootstrap Row/Col components

---

## 🎭 SHADOWS & EFFECTS

### Box Shadows
```scss
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
$shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
```

### Border Radius
```scss
$border-radius-sm: 0.25rem;   // 4px
$border-radius-md: 0.5rem;    // 8px
$border-radius-lg: 1rem;      // 16px
$border-radius-xl: 1.5rem;    // 24px
$border-radius-full: 9999px;  // Fully rounded
```

### Transitions
```scss
$transition-fast: 150ms ease-in-out;
$transition-base: 300ms ease-in-out;
$transition-slow: 500ms ease-in-out;
```

---

## 🖼️ COMPONENT STYLES

### Buttons
```scss
// Primary Button
.btn-primary {
  background: $color-calipso;
  color: $color-blanco;
  border: none;
  padding: $spacing-md $spacing-xl;
  font-family: $font-titulos;
  font-weight: $font-weight-semibold;
  border-radius: $border-radius-md;
  transition: $transition-base;

  &:hover {
    background: darken($color-calipso, 10%);
    transform: translateY(-2px);
    box-shadow: $shadow-lg;
  }
}

// Secondary Button
.btn-secondary {
  background: $color-naranja;
  color: $color-blanco;
  // Same structure as primary
}
```

### Cards
```scss
.card {
  background: $color-blanco;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-md;
  padding: $spacing-xl;
  transition: $transition-base;

  &:hover {
    box-shadow: $shadow-xl;
    transform: translateY(-4px);
  }
}
```

### Banner/Hero Sections
```scss
.page-name__banner {
  min-height: 300px;
  background: linear-gradient(135deg, $color-calipso 0%, darken($color-calipso, 10%) 100%);
  color: $color-blanco;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-3xl $spacing-md;
}
```

---

## 📐 BEM NAMING CONVENTION

### Structure
```scss
.block {}                    // Component root
.block__element {}           // Child element
.block__element--modifier {} // Variation
```

### Examples
```scss
// Card component
.card {}
.card__title {}
.card__description {}
.card__button {}
.card--featured {}

// Page component
.servicios-page {}
.servicios-page__banner {}
.servicios-page__content {}
.servicios-page__card {}
.servicios-page__card-title {}
.servicios-page__card--highlight {}
```

---

## 🎯 COMMON PATTERNS

### Section Spacing
```scss
// Standard section
.page-name__section {
  padding: $spacing-3xl 0;

  @media (max-width: $breakpoint-md) {
    padding: $spacing-2xl 0;
  }
}
```

### Centered Content
```scss
.page-name__centered {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
```

### Responsive Images
```scss
.page-name__image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: $border-radius-lg;
}
```

---

## 📱 MOBILE-FIRST APPROACH

### Mixin Usage
```scss
// Desktop styles (default)
.element {
  font-size: $font-size-2xl;
  padding: $spacing-xl;
}

// Tablet
@media (max-width: $breakpoint-lg) {
  .element {
    font-size: $font-size-xl;
    padding: $spacing-lg;
  }
}

// Mobile
@media (max-width: $breakpoint-md) {
  .element {
    font-size: $font-size-lg;
    padding: $spacing-md;
  }
}
```

---

## 🔗 IMPORT PATTERN

**Every component SCSS file must start with:**
```scss
@import '../../styles/variables';
@import '../../styles/mixins';

.component-name {
  // Component styles using variables
}
```

---

**Token Count:** ~150 lines | Quick reference for AI
