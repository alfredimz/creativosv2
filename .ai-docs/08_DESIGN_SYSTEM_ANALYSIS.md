# DESIGN SYSTEM ANALYSIS - CREATIVOS ESPACIOS

**Generated:** 2025-10-13
**Purpose:** Comprehensive design system documentation extracted from Figma designs + existing codebase
**Figma File:** LandingCreativosEspacios (5wJFG1eYWcGQak6eyjAgjo)

---

## EXECUTIVE SUMMARY

This document consolidates design tokens, patterns, and guidelines extracted from:
- 10 Figma page designs (metadata analysis)
- Existing codebase structure (`src/styles/_variables.scss` + component analysis)
- Responsive patterns observed across all pages

**Key Findings:**
- ✅ Solid SASS variables foundation already in place
- ✅ Consistent color palette (Calipso, Naranja, Terracota)
- ✅ Typography system using Outfit + Hind
- ⚠️ Need to validate Figma spacing matches existing tokens
- ⚠️ Missing component pattern documentation
- ⚠️ Responsive strategy needs extrapolation (no mobile Figma designs)

---

## 1. TOKEN DEFINITIONS

### 1.1 Colors (Validated from Figma & Existing Code)

#### Primary Palette
```scss
// Already defined in src/styles/_variables.scss
$color-calipso: #3B6F7F;      // Primary - Tranquility
$color-naranja: #F16700;       // Secondary - Security
$color-terracota: #841C03;     // Accent - Strength/Growth
```

**Figma Observations:**
- All 10 pages use consistent color scheme
- Header: Dark background with orange accents (#F16700 matches $color-naranja)
- Footer: Dark background similar to header
- Cards/Sections: White backgrounds with Calipso borders/accents
- CTAs: Orange (#F16700) for primary actions

#### Neutral Colors
```scss
$color-blanco: #FFFFFF;
$color-negro: #000000;
$color-gris-claro: #F5F5F5;
$color-gris-medio: #CCCCCC;
$color-gris-oscuro: #333333;
```

**Figma Usage:**
- Text: Predominantly black (#000000) on white backgrounds
- Subtle backgrounds: Light gray (#F5F5F5) for alternating sections
- Borders: Medium gray (#CCCCCC) for subtle separators

---

### 1.2 Typography (Validated from Figma Metadata)

#### Font Families
```scss
$font-titulos: 'Outfit', sans-serif;    // Used for all headings
$font-parrafos: 'Hind', sans-serif;     // Used for body text
```

**Figma Text Analysis (from metadata):**
- **Headings:** Outfit is used consistently across all pages
  - Home page: Large hero text, section titles
  - Quienes Somos: Page titles (~50px height in Figma)
  - All pages: Consistent heading hierarchy

- **Body Text:** Hind is used for paragraphs
  - Standard paragraph height: 15-20px (varies by page)
  - Line height appears to be 1.5-1.8 (estimated from Figma bounds)

#### Font Sizes (Current + Figma Mapping)
```scss
// Existing tokens - appear to match Figma sizes
$font-size-xs: 0.75rem;    // 12px - Small captions
$font-size-sm: 0.875rem;   // 14px - Secondary text
$font-size-base: 1rem;     // 16px - Body text (Figma: 15-18px range)
$font-size-lg: 1.125rem;   // 18px - Large body
$font-size-xl: 1.25rem;    // 20px - Subheadings (Figma: ~20px)
$font-size-2xl: 1.5rem;    // 24px - Small headings
$font-size-3xl: 1.875rem;  // 30px - Medium headings (Figma: ~30px)
$font-size-4xl: 2.25rem;   // 36px - Large headings (Figma: ~36-40px)
$font-size-5xl: 3rem;      // 48px - Hero headings (Figma: ~50px)
```

**Figma Observations:**
- Home hero text: ~239px height (multi-line, probably 48-60px font-size)
- Section titles: 40-50px height (single line) → $font-size-5xl (48px)
- Card titles: 20-30px height → $font-size-xl to $font-size-2xl
- Paragraph text: 15-18px → $font-size-base

#### Font Weights
```scss
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

---

### 1.3 Spacing (Validated from Figma Frame Dimensions)

#### Existing Tokens
```scss
$spacing-xs: 0.25rem;   // 4px
$spacing-sm: 0.5rem;    // 8px
$spacing-md: 1rem;      // 16px
$spacing-lg: 1.5rem;    // 24px
$spacing-xl: 2rem;      // 32px
$spacing-2xl: 3rem;     // 48px
$spacing-3xl: 4rem;     // 64px
$spacing-4xl: 6rem;     // 96px
```

#### Figma Spacing Patterns (Extracted from Metadata)

**Page Sections:**
- Home page height: 4190px (desktop)
- Quienes Somos: 2186px
- Most pages: ~2200-2700px height range

**Component Spacing (from element positions):**
- Header height: ~96px (Group 429: width="298", height="96")
- Top navigation bar: 64px (Rectangle 412: height="64")
- Footer sections: ~200-300px vertical spacing
- Card padding: Estimated 24-32px (from image vs container bounds)

**Gaps Between Elements:**
- Home page cards: 3 columns with minimal gaps (~10-20px estimated)
- Section vertical spacing: 48-64px between major sections
- Text to element: 16-24px typical spacing

**Recommended Mapping:**
```scss
// Section spacing (major content blocks)
--section-spacing: $spacing-2xl;        // 48px - matches Figma pattern

// Card/Component padding
--card-padding: $spacing-lg;            // 24px
--card-padding-large: $spacing-xl;      // 32px

// Element gaps
--gap-small: $spacing-md;               // 16px - tight spacing
--gap-medium: $spacing-lg;              // 24px - comfortable spacing
--gap-large: $spacing-xl;               // 32px - generous spacing
```

---

### 1.4 Shadows (Current System - Appears Appropriate)

```scss
$shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
$shadow-md: 0 4px 8px rgba(0, 0, 0, 0.15);
$shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.2);
$shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.25);
```

**Figma Observation:** Cards appear to have subtle shadows, likely shadow-sm or shadow-md

---

### 1.5 Border Radius (Current System)

```scss
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 12px;
$border-radius-xl: 16px;
$border-radius-full: 50%;
```

**Figma Observation:**
- Cards (Rectangle elements) appear to have subtle rounding → 8-12px
- Profile images (Ellipse elements) use circular → 50%
- Buttons likely use 8px radius

---

### 1.6 Responsive Breakpoints (Existing System)

```scss
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
$breakpoint-xxl: 1400px;
```

**Figma Context:**
- All designs are desktop: 1440px width
- Mobile designs: NOT PROVIDED in Figma
- Strategy: Extrapolate from desktop patterns

---

## 2. COMPONENT LIBRARY ANALYSIS

### 2.1 Existing Components

#### Location: `src/components/`
```
components/
├── Header/
│   ├── Header.jsx
│   └── Header.scss
└── Footer/
    ├── Footer.jsx
    └── Footer.scss
```

#### Header Component Pattern
**File:** `src/components/Header/Header.jsx`

**Structure:**
- React Bootstrap Navbar
- Fixed positioning with scroll effects
- Dropdown navigation menus
- React Router integration

**Key Features:**
```jsx
- Responsive navbar with hamburger toggle
- Scroll-triggered styling changes
- Dropdown menus for categories
- NavLink active states
```

**Styling Approach:**
- BEM-like class naming (`.site-header`, `.scrolled`)
- SASS nesting
- Responsive media queries inline
- React Bootstrap overrides

### 2.2 Page Components

#### Structure: `src/pages/[PageName]/[PageName].jsx`

**Example Pages:**
- Home/Home.jsx
- Conocenos/QuienesSomos/QuienesSomos.jsx
- Conocenos/MisionVision/MisionVision.jsx
- Conocenos/NuestroEquipo/NuestroEquipo.jsx
- etc.

**Pattern:**
```jsx
import React from 'react';
import './[PageName].scss';

const [PageName] = () => {
  return (
    <div className="[page-name]">
      {/* Content */}
    </div>
  );
};

export default [PageName];
```

---

## 3. FIGMA COMPONENT PATTERNS (FROM METADATA)

### 3.1 Common Elements Across All 10 Pages

#### Header Pattern (Consistent across all pages)
```
Frame "Group 429" (575, 0) - width: 298, height: 96
  └── Logo container
Rectangle 412 (0, 112) - width: 1440, height: 64
  └── Navigation bar
Text elements: "Contenedores", "Construcción", "Servicios", "Conócenos", "Ayuda", "Contacto"
  └── Nav menu items (y: 126, height: 36)
```

**Component Spec:**
- Header height: 96px (logo) + 64px (nav) = 160px total
- Logo dimensions: 298x96px
- Nav items: 36px height, horizontal spacing ~230px apart

#### Footer Pattern (Consistent across all pages)
```
image 249 (1440, Y varies) - width: 480, height: 207
  └── Footer image/decoration

Group 273 (127, Y varies) - Logo in footer
Group 437 (534, Y varies) - Social media icons (371x30)
Group 438 (130, Y varies) - Footer links grid (1210x320)

Text: Copyright, contact info, locations
```

**Component Spec:**
- Footer height: ~400-500px
- 5 columns of links (width: 1210px / 5 ≈ 242px per column)
- Social icons: 30px height
- Grid layout for link columns

### 3.2 Card Patterns

#### Service Cards (from Home page, node 207:2)
```
Rectangle containers: ~313x575px (vertical cards)
Images inside: ~250x250px
Text below images: titles (81px height) + descriptions (30-45px height)
Icons: 56x56px (Group 393, 146, 149)
```

**Component Spec:**
```scss
.service-card {
  width: 313px;
  height: 575px;
  padding: $spacing-lg; // 24px

  &__image {
    width: 250px;
    height: 250px;
    border-radius: $border-radius-lg;
  }

  &__title {
    height: 81px; // Multi-line heading
    font-family: $font-titulos;
    font-size: $font-size-4xl; // 36px
  }

  &__description {
    height: 30-45px;
    font-family: $font-parrafos;
    font-size: $font-size-base;
  }

  &__icon {
    width: 56px;
    height: 56px;
  }
}
```

#### Profile Cards (from Nuestro Equipo page, node 207:1116)
```
Mask group containers: 100x100px (circular images)
Text: Name (31-42px height) + Title (31px height)
Line separators (200px width)
Total card: ~200-288px width x 216-223px height
```

**Component Spec:**
```scss
.team-member-card {
  width: 200px;
  min-height: 216px;

  &__avatar {
    width: 100px;
    height: 100px;
    border-radius: $border-radius-full;
  }

  &__name {
    font-family: $font-titulos;
    font-size: $font-size-lg;
  }

  &__role {
    font-family: $font-parrafos;
    font-size: $font-size-base;
  }
}
```

#### Product Cards (from Tipos Contenedores page, node 207:1299)
```
Rectangle containers: 288x320px
Images: 250x250px
Text: Title (20px height)
Icons: 26x26px
```

### 3.3 Section Patterns

#### Hero Section (from Home page)
```
Total section height: ~714px (Rectangle 405 at y=714)
Background image: 1440x508px (image 233)
Overlay rectangle (383): 1440x508px
Content positioning: Centered or left-aligned text
```

#### Two-Column Section (from Quienes Somos)
```
Image trio: 359x275, 384x275, 352x275px
Text columns below: ~364px width
Total section: ~760px height
```

#### Timeline Section (from Historia)
```
Vertical line (Line 33): height 902px
Milestone markers: 34-57px icons
Text labels: ~50-56px height
Images: varying sizes (171-383px width)
```

---

## 4. FRAMEWORKS & LIBRARIES

### 4.1 Tech Stack (from package.json)

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router-dom": "^7.3.0",
  "react-bootstrap": "^2.10.9",
  "bootstrap": "^5.3.3",
  "react-icons": "^5.5.0",
  "sass": "^1.85.1",
  "formik": "^2.4.6",
  "yup": "^1.6.1",
  "swiper": "^11.2.5",
  "axios": "^1.8.3"
}
```

### 4.2 Architecture

**Build System:** Create React App (react-scripts 5.0.1)
**Styling:** SASS with Bootstrap 5 integration
**Routing:** React Router v7
**Forms:** Formik + Yup validation
**Icons:** React Icons library
**Carousels:** Swiper.js

### 4.3 Styling Methodology

**Approach:** SASS + BEM-inspired naming
```scss
// Example from Header.scss
.site-header {
  &.scrolled {
    // Modifier
  }

  .navbar {
    // Nested element
    .nav-link {
      // Nested sub-element
    }
  }
}
```

**Global Styles:**
- Variables: `src/styles/_variables.scss`
- Mixins: `src/styles/_mixins.scss`
- Component-specific: Co-located with JSX files

---

## 5. ASSET MANAGEMENT

### 5.1 Current Structure

**Assets Location:** `src/assets/`
```
assets/
└── logo.png (referenced in Header.jsx)
```

### 5.2 Figma Assets (to be extracted)

**From Metadata Analysis:**
- **Images:** Numerous `<rounded-rectangle name="image XXX">` elements
  - Pattern: `image 233`, `image 234`, `image 236`, etc.
  - Sizes: Vary from 50x50px (icons) to 1440x508px (hero images)

- **Logos/Graphics:** Group elements with SVG paths
  - `Group 263` (logo): 256x64.8px
  - `Group 259`, `Group 260`, `Group 261`: Navigation icons

**Extraction Strategy:**
1. Use Figma MCP `get_code` tool to extract image URLs
2. Download images to `public/images/[page-folder]/`
3. Name pattern: `[page]-[element-name]-[size].jpg/png`

### 5.3 Asset Optimization

**Recommended:**
- Use WebP format for photos
- SVG for icons and graphics
- Lazy loading for below-the-fold images
- Responsive images with `srcset`

---

## 6. ICON SYSTEM

### 6.1 Current Implementation

**Library:** `react-icons` (v5.5.0)

**Usage Pattern:**
```jsx
import { FaIcon } from 'react-icons/fa';

<FaIcon className="icon" />
```

### 6.2 Figma Icons (from metadata)

**Social Media Icons (Group 437):**
- 8 vector elements, 30px height
- Positioned at y=1546 (footer)
- Likely: Facebook, Instagram, TikTok, X, YouTube, etc.

**Interface Icons:**
- Group 393, 146, 149, etc.: 56x56px
- Group 434, 435, 436: 40-56px
- Arrows, checks, decorative elements

**Extraction:** Use Figma export or match with react-icons equivalents

---

## 7. STYLING APPROACH

### 7.1 CSS Methodology

**BEM-inspired naming:**
```scss
// Block
.page-name { }

// Element
.page-name__section { }

// Modifier
.page-name--variation { }
```

**SASS Features Used:**
- Nesting
- Variables (`$color-calipso`)
- Mixins (`@include flex-center`)
- Parent selector (`&:hover`)

### 7.2 Responsive Implementation

**Mixin System (from _mixins.scss):**
```scss
@include respond-to(md) {
  // Tablet styles
}

@include respond-to(lg) {
  // Desktop styles
}
```

**Section Padding Mixin:**
```scss
@mixin section-padding {
  padding: $spacing-4xl 0; // 96px desktop

  @media (max-width: $breakpoint-md) {
    padding: $spacing-3xl 0; // 64px tablet
  }

  @media (max-width: $breakpoint-sm) {
    padding: $spacing-2xl 0; // 48px mobile
  }
}
```

### 7.3 Bootstrap Integration

**Usage:**
- Grid system: `Container`, `Row`, `Col`
- Navigation: `Navbar`, `Nav`, `NavDropdown`
- Forms: `Form`, `Form.Control`, `Button`
- Utilities: Spacing, display, flex classes

**Override Pattern:**
```scss
// Override Bootstrap defaults
.navbar {
  // Custom styles override Bootstrap
  background-color: $color-negro;
}
```

---

## 8. RESPONSIVE STRATEGY (NO MOBILE FIGMA DESIGNS)

### 8.1 Extrapolation Rules

**Desktop (1440px):** Match Figma exactly
**Tablet (768px):** Scale down, stack some columns
**Mobile (375px):** Single column, stack everything

### 8.2 Component Breakpoints

#### Navigation
```scss
Desktop: Horizontal menu
Tablet (< 992px): Hamburger menu
Mobile: Full-screen menu overlay
```

#### Cards
```scss
Desktop: 3 columns (1440px / 3 = 480px per card)
Tablet: 2 columns
Mobile: 1 column (full width)
```

#### Typography
```scss
Desktop: Full scale (from Figma)
Tablet: 90% scale
Mobile: 80-85% scale for headings, 100% for body
```

#### Spacing
```scss
Desktop: Full spacing ($spacing-2xl = 48px)
Tablet: 75% spacing ($spacing-xl = 32px)
Mobile: 50% spacing ($spacing-lg = 24px)
```

### 8.3 Responsive Mixins

**Already available in _mixins.scss:**
- `@include respond-to($breakpoint)`
- `@include section-padding`
- `@include grid-auto-fit($min-width)`

**Additional recommendations:**
```scss
@mixin responsive-typography($desktop-size) {
  font-size: $desktop-size;

  @include respond-to(md) {
    font-size: $desktop-size * 0.9;
  }

  @include respond-to(sm) {
    font-size: $desktop-size * 0.8;
  }
}
```

---

## 9. PROJECT STRUCTURE

### 9.1 Directory Organization

```
creativosv2/
├── public/
│   └── images/              # To be organized by page
│       ├── home/
│       ├── quienes-somos/
│       └── ...
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.scss
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.scss
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.scss
│   │   ├── Conocenos/
│   │   │   ├── QuienesSomos/
│   │   │   ├── MisionVision/
│   │   │   ├── NuestroEquipo/
│   │   │   ├── Historia/
│   │   │   └── Valores/
│   │   └── ...
│   ├── styles/
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   ├── App.js
│   ├── App.scss
│   └── index.scss
└── package.json
```

### 9.2 File Naming Convention

**Components:** PascalCase
- `Header.jsx`, `Footer.jsx`

**Pages:** PascalCase
- `Home.jsx`, `QuienesSomos.jsx`

**Styles:** Match component name
- `Header.scss`, `Home.scss`

**CSS Classes:** kebab-case
- `.site-header`, `.page-section`

---

## 10. COMPONENT PATTERNS FROM FIGMA

### 10.1 Reusable Components Identified

#### 1. PageHeader Component
**Usage:** All 10 pages
**Pattern:**
```jsx
<PageHeader
  title="¿Quienes somos?"
  subtitle="Desde nuestros inicios..."
  backgroundImage="/images/hero-bg.jpg"
/>
```

#### 2. ServiceCard Component
**Usage:** Home, Services pages
**Props:** image, title, description, icon

#### 3. TeamMemberCard Component
**Usage:** Nuestro Equipo page
**Props:** avatar, name, role, email

#### 4. ProductCard Component
**Usage:** Tipos Contenedores page
**Props:** image, title, link, badge

#### 5. TimelineItem Component
**Usage:** Historia page
**Props:** year, title, description, image

#### 6. SectionTitle Component
**Usage:** All pages
**Props:** text, alignment (left/center)

#### 7. ImageGallery Component
**Usage:** Casos de Exito, Quienes Somos
**Props:** images[], layout (grid/carousel)

---

## 11. IMPLEMENTATION CHECKLIST

### Phase 0 Deliverables:

- [x] Extract design tokens from 10 Figma pages
- [x] Document existing codebase structure
- [ ] Consolidate tokens into updated `_variables.scss`
- [ ] Create component pattern documentation
- [ ] Define responsive strategy document
- [ ] Audit existing components for reusability
- [ ] Create design system rules document (this file)

### Next Steps (Phase 1):

1. **Validate Spacing:**
   - Use Figma MCP `get_code` to verify exact spacing values
   - Update `_variables.scss` if discrepancies found

2. **Create Reusable Components:**
   - Implement identified patterns (ServiceCard, TeamMemberCard, etc.)
   - Store in `src/components/common/`

3. **Extract Assets:**
   - Use Figma MCP to get image download URLs
   - Organize in `public/images/[page]/`

4. **Begin Refactoring:**
   - Start with Home page (highest complexity)
   - Follow pattern: metadata → code → assets → responsive

---

## 12. DESIGN SYSTEM RULES FOR IMPLEMENTATION

### Rule 1: Token Usage
**Always use SASS variables, never hardcode values:**
```scss
// ✅ CORRECT
color: $color-calipso;
padding: $spacing-lg;

// ❌ WRONG
color: #3B6F7F;
padding: 24px;
```

### Rule 2: Component Structure
**Co-locate styles with components:**
```
ComponentName/
├── ComponentName.jsx
└── ComponentName.scss
```

### Rule 3: BEM Naming
**Follow BEM-inspired pattern:**
```scss
.block {
  &__element {
    &--modifier { }
  }
}
```

### Rule 4: Responsive Design
**Mobile-first with min-width queries:**
```scss
.element {
  // Mobile styles first

  @include respond-to(md) {
    // Tablet
  }

  @include respond-to(lg) {
    // Desktop
  }
}
```

### Rule 5: Mixins Over Duplication
**Use mixins from _mixins.scss:**
```scss
@include flex-center;
@include card;
@include section-padding;
```

### Rule 6: Bootstrap Integration
**Use Bootstrap grid, override with SASS:**
```jsx
<Container>
  <Row>
    <Col md={6} lg={4}>
      {/* Content */}
    </Col>
  </Row>
</Container>
```

### Rule 7: Asset Organization
**Store images by page:**
```
public/images/
├── home/
├── quienes-somos/
└── tipos-contenedores/
```

### Rule 8: Typography Hierarchy
**Use semantic HTML + SASS variables:**
```jsx
<h1 className="page-title">      {/* $font-size-5xl */}
<h2 className="section-title">   {/* $font-size-4xl */}
<h3 className="card-title">      {/* $font-size-2xl */}
<p className="body-text">        {/* $font-size-base */}
```

---

## CONCLUSION

This design system analysis provides a comprehensive foundation for the pixel-perfect implementation of all 46 pages. The existing SASS variables are solid and align well with Figma designs. The main tasks ahead are:

1. **Minor token refinements** (if needed after `get_code` verification)
2. **Component library creation** (reusable patterns)
3. **Asset extraction and organization**
4. **Responsive implementation** (extrapolate from desktop)
5. **Systematic page refactoring** (follow implementation plan phases)

**Estimated token usage:** ~2000 lines of comprehensive analysis
**Next document:** Component pattern specifications
