# COMPONENT PATTERNS - CREATIVOS ESPACIOS

**Generated:** 2025-10-13
**Purpose:** Reusable component specifications extracted from Figma designs
**Source:** Analysis of 10 Figma pages + existing codebase

---

## OVERVIEW

This document defines reusable React components identified across all Figma designs. Each component includes:
- Visual specification (dimensions, spacing, typography)
- React component API (props, variants)
- SASS styling guidelines
- Usage examples

---

## 1. LAYOUT COMPONENTS

### 1.1 PageHeader

**Usage:** Hero sections on all pages
**Figma Source:** Home (207:2), Quienes Somos (207:379), etc.

**Specifications:**
- Height: 508-700px (varies by page)
- Background: Image with overlay
- Text: Large heading + optional subtitle
- Positioning: Centered or left-aligned

**Component API:**
```jsx
<PageHeader
  title="¿Quienes somos?"
  subtitle="Desde nuestros inicios en 2010..."
  backgroundImage="/images/hero-bg.jpg"
  overlay={true}
  overlayColor="rgba(0, 0, 0, 0.5)"
  textAlign="left" // or "center"
  minHeight="508px"
/>
```

**Props:**
- `title` (string, required): Main heading text
- `subtitle` (string, optional): Subtitle/description
- `backgroundImage` (string, required): Image URL
- `overlay` (boolean, default: true): Show overlay
- `overlayColor` (string, default: "rgba(0, 0, 0, 0.5)")
- `textAlign` (string, default: "left"): Text alignment
- `minHeight` (string, default: "508px")

**SASS Structure:**
```scss
.page-header {
  position: relative;
  min-height: var(--min-height, 508px);
  background-size: cover;
  background-position: center;
  @include flex-center;

  &__overlay {
    @include overlay($color);
  }

  &__content {
    position: relative;
    z-index: 2;
    text-align: var(--text-align, left);
    max-width: 800px;
  }

  &__title {
    font-family: $font-titulos;
    font-size: $font-size-5xl;
    font-weight: $font-weight-bold;
    color: $color-blanco;
    margin-bottom: $spacing-lg;
  }

  &__subtitle {
    font-family: $font-parrafos;
    font-size: $font-size-lg;
    color: $color-blanco;
    line-height: 1.6;
  }
}
```

---

### 1.2 SectionTitle

**Usage:** Section headings across all pages
**Figma Source:** All pages

**Specifications:**
- Font: Outfit
- Size: 36-50px (varies)
- Color: Black or Calipso
- Margin bottom: 24px

**Component API:**
```jsx
<SectionTitle
  text="Nuestros Servicios"
  level={2}
  align="left"
  color="default"
/>
```

**Props:**
- `text` (string, required): Title text
- `level` (number, default: 2): Heading level (h1-h6)
- `align` (string, default: "left"): Text alignment
- `color` (string, default: "default"): "default", "primary", "secondary"

**SASS Structure:**
```scss
.section-title {
  font-family: $font-titulos;
  font-weight: $font-weight-bold;
  margin-bottom: $spacing-lg;
  text-align: var(--align, left);

  &--h1 { font-size: $font-size-5xl; }
  &--h2 { font-size: $font-size-4xl; }
  &--h3 { font-size: $font-size-3xl; }

  &--primary { color: $color-calipso; }
  &--secondary { color: $color-naranja; }
  &--default { color: $color-negro; }
}
```

---

## 2. CARD COMPONENTS

### 2.1 ServiceCard

**Usage:** Home page (207:2), Services pages
**Figma Source:** Rectangles 390, 394, 396 (313x575px)

**Specifications:**
- Dimensions: 313px width x 575px height
- Image: 250x250px (top)
- Icon: 56x56px (bottom)
- Title: Outfit, ~36px
- Description: Hind, 16px
- Padding: 24px

**Component API:**
```jsx
<ServiceCard
  image="/images/venta.jpg"
  title="VENTA"
  subtitle="de contenedores marítimos"
  description="Venta de contenedores..."
  icon={<FaShoppingCart />}
  link="/servicios/venta"
/>
```

**Props:**
- `image` (string, required): Image URL
- `title` (string, required): Card title
- `subtitle` (string, optional): Subtitle below title
- `description` (string, required): Description text
- `icon` (ReactNode, optional): Icon component
- `link` (string, optional): Link URL

**SASS Structure:**
```scss
.service-card {
  width: 313px;
  height: 575px;
  padding: $spacing-lg;
  background: $color-blanco;
  border-radius: $border-radius-lg;
  @include card;
  @include hover-lift;
  @include flex-column;

  &__image {
    width: 250px;
    height: 250px;
    border-radius: $border-radius-md;
    @include image-cover;
    margin-bottom: $spacing-md;
  }

  &__title {
    font-family: $font-titulos;
    font-size: $font-size-4xl;
    font-weight: $font-weight-bold;
    color: $color-calipso;
    margin-bottom: $spacing-xs;
  }

  &__subtitle {
    font-family: $font-parrafos;
    font-size: $font-size-sm;
    color: $color-gris-oscuro;
    margin-bottom: $spacing-lg;
  }

  &__description {
    font-family: $font-parrafos;
    font-size: $font-size-base;
    line-height: 1.5;
    flex-grow: 1;
  }

  &__icon {
    width: 56px;
    height: 56px;
    margin-top: $spacing-lg;
  }
}
```

---

### 2.2 TeamMemberCard

**Usage:** Nuestro Equipo page (207:1116)
**Figma Source:** Groups 440-446 (~200x216px)

**Specifications:**
- Dimensions: 200-288px width x 216-223px height
- Avatar: 100x100px (circular)
- Name: 31-42px height
- Role: 31px height
- Email: 31px height
- Line separator: 200px width

**Component API:**
```jsx
<TeamMemberCard
  avatar="/images/team/hugo.jpg"
  name="Hugo Estrada"
  role="Proyectos"
  email="hugo@creativosespacios.mx"
  showEmail={true}
/>
```

**Props:**
- `avatar` (string, required): Avatar image URL
- `name` (string, required): Member name
- `role` (string, required): Job role
- `email` (string, optional): Email address
- `showEmail` (boolean, default: true): Display email

**SASS Structure:**
```scss
.team-member-card {
  width: 200px;
  min-height: 216px;
  text-align: center;
  padding: $spacing-md;

  &__avatar {
    width: 100px;
    height: 100px;
    border-radius: $border-radius-full;
    margin: 0 auto $spacing-lg;
    @include image-cover;
  }

  &__name {
    font-family: $font-titulos;
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    color: $color-negro;
    margin-bottom: $spacing-xs;
  }

  &__separator {
    width: 200px;
    height: 1px;
    background: $color-gris-medio;
    margin: $spacing-md 0;
  }

  &__role {
    font-family: $font-parrafos;
    font-size: $font-size-base;
    color: $color-gris-oscuro;
    margin-bottom: $spacing-xs;
  }

  &__email {
    font-family: $font-parrafos;
    font-size: $font-size-sm;
    color: $color-calipso;
    word-break: break-word;
  }
}
```

---

### 2.3 ProductCard

**Usage:** Tipos Contenedores page (207:1299)
**Figma Source:** Rectangles 429-441 (288x320px)

**Specifications:**
- Dimensions: 288px width x 320px height
- Image: 250x250px
- Title: 20px height
- Icon: 26x26px
- Padding: 19px (calculated from image position)

**Component API:**
```jsx
<ProductCard
  image="/images/contenedor-10.jpg"
  title="Contenedor marítimo Dry 10""
  badge="Nuevo"
  icon={<FaHeart />}
  link="/tipos-contenedores/dry-10"
/>
```

**Props:**
- `image` (string, required): Product image URL
- `title` (string, required): Product name
- `badge` (string, optional): Badge text ("Nuevo", "Usado", etc.)
- `icon` (ReactNode, optional): Favorite/like icon
- `link` (string, required): Product detail URL

**SASS Structure:**
```scss
.product-card {
  width: 288px;
  height: 320px;
  background: $color-blanco;
  border-radius: $border-radius-md;
  @include card($padding: 19px);
  @include hover-lift;
  position: relative;

  &__badge {
    position: absolute;
    top: $spacing-md;
    right: $spacing-md;
    background: $color-naranja;
    color: $color-blanco;
    padding: $spacing-xs $spacing-sm;
    border-radius: $border-radius-sm;
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
  }

  &__image {
    width: 250px;
    height: 250px;
    border-radius: $border-radius-sm;
    @include image-cover;
    margin-bottom: $spacing-md;
  }

  &__footer {
    @include flex-between;
  }

  &__title {
    font-family: $font-parrafos;
    font-size: $font-size-base;
    color: $color-negro;
    flex-grow: 1;
  }

  &__icon {
    width: 26px;
    height: 26px;
    color: $color-gris-medio;
    cursor: pointer;
    @include transition(color);

    &:hover {
      color: $color-naranja;
    }
  }
}
```

---

### 2.4 CaseStudyCard

**Usage:** Casos de Éxito page (207:800)
**Figma Source:** Rectangles 390, 413, 414 (488x518px)

**Specifications:**
- Dimensions: 488px width x 518-520px height
- Image: 175-208px width x 402-408px height
- Title: 30px height ("CONSTRUCCIÓN", "VENTA")
- Subtitle: 15px height ("de contenedores marítimos")
- Description: ~352px height (long text)
- Padding: ~30px

**Component API:**
```jsx
<CaseStudyCard
  image="/images/casos/construccion-1.jpg"
  category="CONSTRUCCIÓN"
  subtitle="de contenedores marítimos"
  projectType="Habitacional"
  year="2022"
  client="SACMEX"
  description="Esta construcción se realizó..."
/>
```

**Props:**
- `image` (string, required): Project image
- `category` (string, required): Category (CONSTRUCCIÓN, VENTA, RENTA)
- `subtitle` (string, optional): Category subtitle
- `projectType` (string, optional): Project type
- `year` (string, optional): Year completed
- `client` (string, optional): Client name
- `description` (string, required): Project description

**SASS Structure:**
```scss
.case-study-card {
  width: 488px;
  min-height: 518px;
  background: $color-blanco;
  border-radius: $border-radius-lg;
  @include card($padding: $spacing-xl);
  @include hover-lift;

  &__image {
    width: 175px;
    height: 402px;
    border-radius: $border-radius-md;
    @include image-cover;
    float: right;
    margin-left: $spacing-lg;
  }

  &__category {
    font-family: $font-titulos;
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    color: $color-calipso;
    margin-bottom: $spacing-xs;
  }

  &__subtitle {
    font-family: $font-parrafos;
    font-size: $font-size-sm;
    color: $color-gris-oscuro;
    margin-bottom: $spacing-lg;
  }

  &__meta {
    margin-bottom: $spacing-lg;
    font-size: $font-size-sm;
    color: $color-gris-oscuro;

    span {
      display: block;
      margin-bottom: $spacing-xs;
    }
  }

  &__description {
    font-family: $font-parrafos;
    font-size: $font-size-base;
    line-height: 1.6;
    color: $color-negro;
  }
}
```

---

## 3. CONTENT COMPONENTS

### 3.1 TimelineItem

**Usage:** Historia page (207:1968)
**Figma Source:** Vertical timeline with images

**Specifications:**
- Year label: 50-56px height
- Icon/marker: 34-57px
- Image: 171-395px width, 119-292px height
- Description text: Varies
- Vertical line: 902px height (total timeline)

**Component API:**
```jsx
<TimelineItem
  year="2010"
  title="Inicio de Creativos Espacios"
  description="Impulsada por emprendedores..."
  image="/images/historia/2010.jpg"
  imagePosition="right"
/>
```

**Props:**
- `year` (string, required): Year label
- `title` (string, optional): Event title
- `description` (string, optional): Event description
- `image` (string, optional): Event image URL
- `imagePosition` (string, default: "right"): "left" or "right"

**SASS Structure:**
```scss
.timeline-item {
  position: relative;
  padding: $spacing-2xl 0;
  @include flex-between;
  align-items: flex-start;

  &__line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: $color-calipso;
    transform: translateX(-50%);
  }

  &__marker {
    width: 50px;
    height: 50px;
    border-radius: $border-radius-full;
    background: $color-naranja;
    @include flex-center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  &__year {
    font-family: $font-titulos;
    font-size: $font-size-4xl;
    font-weight: $font-weight-bold;
    color: $color-calipso;
    width: 45%;
    text-align: right;
    padding-right: $spacing-2xl;
  }

  &__content {
    width: 45%;
    padding-left: $spacing-2xl;
  }

  &__title {
    font-family: $font-titulos;
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-md;
  }

  &__description {
    font-family: $font-parrafos;
    font-size: $font-size-base;
    line-height: 1.6;
    margin-bottom: $spacing-lg;
  }

  &__image {
    width: 100%;
    max-width: 395px;
    border-radius: $border-radius-md;
    @include image-cover;
  }

  // Alternate sides
  &--left {
    .timeline-item__year {
      order: 2;
      text-align: left;
      padding-left: $spacing-2xl;
      padding-right: 0;
    }

    .timeline-item__content {
      order: 1;
      padding-right: $spacing-2xl;
      padding-left: 0;
    }
  }
}
```

---

### 3.2 IconFeature

**Usage:** Home page services, feature highlights
**Figma Source:** Icon groups (56x56px)

**Specifications:**
- Icon: 56x56px
- Title: 18-20px
- Description: 15-16px
- Layout: Icon top, text below

**Component API:**
```jsx
<IconFeature
  icon={<FaShippingFast />}
  title="Transporte"
  description="Ofrecemos soluciones confiables..."
  iconColor="primary"
/>
```

**Props:**
- `icon` (ReactNode, required): Icon component
- `title` (string, required): Feature title
- `description` (string, required): Feature description
- `iconColor` (string, default: "primary"): "primary", "secondary", "accent"

**SASS Structure:**
```scss
.icon-feature {
  text-align: center;
  padding: $spacing-lg;

  &__icon {
    width: 56px;
    height: 56px;
    margin: 0 auto $spacing-md;
    @include flex-center;

    svg {
      width: 100%;
      height: 100%;
    }

    &--primary { color: $color-calipso; }
    &--secondary { color: $color-naranja; }
    &--accent { color: $color-terracota; }
  }

  &__title {
    font-family: $font-titulos;
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-sm;
    color: $color-negro;
  }

  &__description {
    font-family: $font-parrafos;
    font-size: $font-size-base;
    line-height: 1.5;
    color: $color-gris-oscuro;
  }
}
```

---

## 4. INTERACTIVE COMPONENTS

### 4.1 CTAButton

**Usage:** All pages (forms, links)
**Figma Source:** Rectangle 304 + text (443x40px)

**Specifications:**
- Height: 40px
- Padding: 12px 24px (estimated)
- Border radius: 8px
- Font: Hind, 16px
- Icon: 10x10px (optional arrow)

**Component API:**
```jsx
<CTAButton
  text="Quiero comprar el contenedor"
  onClick={handleClick}
  variant="primary"
  size="medium"
  icon={<FaArrowRight />}
  fullWidth={false}
/>
```

**Props:**
- `text` (string, required): Button text
- `onClick` (function, required): Click handler
- `variant` (string, default: "primary"): "primary", "secondary", "outline"
- `size` (string, default: "medium"): "small", "medium", "large"
- `icon` (ReactNode, optional): Icon component
- `fullWidth` (boolean, default: false): Full width button

**SASS Structure:**
```scss
.cta-button {
  @include button-style;
  @include flex-center;
  gap: $spacing-sm;
  font-family: $font-parrafos;
  font-size: $font-size-base;
  cursor: pointer;
  border: none;
  outline: none;

  // Sizes
  &--small {
    height: 32px;
    padding: $spacing-xs $spacing-md;
    font-size: $font-size-sm;
  }

  &--medium {
    height: 40px;
    padding: $spacing-sm $spacing-lg;
  }

  &--large {
    height: 48px;
    padding: $spacing-md $spacing-xl;
    font-size: $font-size-lg;
  }

  // Variants
  &--primary {
    background: $color-naranja;
    color: $color-blanco;

    &:hover {
      background: darken($color-naranja, 10%);
    }
  }

  &--secondary {
    background: $color-calipso;
    color: $color-blanco;

    &:hover {
      background: darken($color-calipso, 10%);
    }
  }

  &--outline {
    background: transparent;
    color: $color-calipso;
    border: 2px solid $color-calipso;

    &:hover {
      background: $color-calipso;
      color: $color-blanco;
    }
  }

  &--full-width {
    width: 100%;
  }

  &__icon {
    width: 10px;
    height: 10px;
  }
}
```

---

### 4.2 FilterCheckbox

**Usage:** Tipos Contenedores page (207:1299)
**Figma Source:** Rectangles 420-428 (12x12px checkboxes)

**Specifications:**
- Checkbox: 12x12px
- Label: 16px text
- Spacing: 19px between items
- Group title: 20px height

**Component API:**
```jsx
<FilterCheckbox
  label="10""
  checked={filters.includes('10')}
  onChange={handleFilterChange}
  name="size"
  value="10"
/>
```

**Props:**
- `label` (string, required): Checkbox label
- `checked` (boolean, required): Checked state
- `onChange` (function, required): Change handler
- `name` (string, required): Input name
- `value` (string, required): Input value

**SASS Structure:**
```scss
.filter-checkbox {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  margin-bottom: 19px;
  cursor: pointer;

  &__input {
    width: 12px;
    height: 12px;
    border: 2px solid $color-calipso;
    border-radius: $border-radius-sm;
    appearance: none;
    cursor: pointer;
    @include transition(all);

    &:checked {
      background: $color-calipso;
      position: relative;

      &::after {
        content: '✓';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $color-blanco;
        font-size: 10px;
      }
    }
  }

  &__label {
    font-family: $font-parrafos;
    font-size: $font-size-base;
    color: $color-negro;
    cursor: pointer;
  }
}

.filter-group {
  margin-bottom: $spacing-2xl;

  &__title {
    font-family: $font-titulos;
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    margin-bottom: $spacing-md;
    color: $color-negro;
  }
}
```

---

## 5. NAVIGATION COMPONENTS

### 5.1 Breadcrumb

**Usage:** Detalle pages (product details, blog posts)
**Figma Source:** Group 450 (93x75px)

**Specifications:**
- Images: 93x62px
- Container: 75x75px
- Font: 14px
- Separator: "/"

**Component API:**
```jsx
<Breadcrumb
  items={[
    { label: 'Home', url: '/' },
    { label: 'Tipos de Contenedores', url: '/tipos-contenedores' },
    { label: 'Dry 10"', url: null }
  ]}
/>
```

**Props:**
- `items` (array, required): Array of breadcrumb items
  - `label` (string): Item label
  - `url` (string|null): Item URL (null for current page)

**SASS Structure:**
```scss
.breadcrumb {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-md 0;
  font-size: $font-size-sm;

  &__item {
    @include flex-center;
    gap: $spacing-sm;

    a {
      color: $color-calipso;
      text-decoration: none;
      @include transition(color);

      &:hover {
        color: $color-naranja;
      }
    }

    &--current {
      color: $color-gris-oscuro;
      font-weight: $font-weight-medium;
    }
  }

  &__separator {
    color: $color-gris-medio;
  }
}
```

---

## 6. RESPONSIVE PATTERNS

### 6.1 Card Grid

**Desktop:** 3 columns
**Tablet:** 2 columns
**Mobile:** 1 column

```scss
.card-grid {
  @include grid-auto-fit(288px, $spacing-lg);

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}
```

### 6.2 Service Card Grid (Home)

**Desktop:** 3 cards (313px each)
**Tablet:** 2 cards
**Mobile:** 1 card

```scss
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 313px);
  gap: $spacing-xl;
  justify-content: center;

  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}
```

---

## 7. USAGE EXAMPLES

### Example: Home Page Services Section

```jsx
import { ServiceCard } from '@/components/common';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <SectionTitle text="Nuestros Servicios" level={2} align="center" />

      <div className="service-grid">
        <ServiceCard
          image="/images/home/renta.jpg"
          title="RENTA"
          subtitle="de contenedores marítimos"
          description="Renta de contenedores marítimos flexible..."
          icon={<FaWarehouse />}
          link="/servicios/alquiler"
        />

        <ServiceCard
          image="/images/home/venta.jpg"
          title="VENTA"
          subtitle="de contenedores marítimos"
          description="Venta de contenedores marítimos en diversos..."
          icon={<FaShoppingCart />}
          link="/servicios/venta"
        />

        <ServiceCard
          image="/images/home/construccion.jpg"
          title="CONSTRUCCIÓN"
          subtitle="de contenedores marítimos"
          description="Construcción con contenedores marítimos a la medida..."
          icon={<FaHammer />}
          link="/construccion"
        />
      </div>
    </section>
  );
};
```

### Example: Team Page

```jsx
import { TeamMemberCard } from '@/components/common';

const TeamSection = () => {
  const team = [
    { name: 'Edith Ramírez', role: 'Recursos y Facturación', email: 'edith@...' },
    { name: 'Alejandra Ramírez', role: 'Atención al Cliente', email: 'alejandra@...' },
    // ... more members
  ];

  return (
    <section className="team-section">
      <div className="team-grid">
        {team.map((member, index) => (
          <TeamMemberCard
            key={index}
            avatar={`/images/team/${member.name.toLowerCase().replace(' ', '-')}.jpg`}
            name={member.name}
            role={member.role}
            email={member.email}
          />
        ))}
      </div>
    </section>
  );
};
```

---

## 8. IMPLEMENTATION CHECKLIST

### Phase 0 Deliverables:
- [x] Identify reusable component patterns from Figma
- [x] Document component specifications
- [x] Define component APIs (props)
- [x] Create SASS structure for each component
- [ ] Implement components in `src/components/common/`
- [ ] Create Storybook stories (optional)
- [ ] Write component tests (optional)

### Next Steps:
1. Create component directory structure
2. Implement each component following specs
3. Test components in isolation
4. Integrate into pages during refactoring

---

**Total Components Documented:** 11
**Component Categories:** Layout (2), Cards (4), Content (2), Interactive (2), Navigation (1)
**Estimated Implementation Time:** 4-6 hours (all components)
