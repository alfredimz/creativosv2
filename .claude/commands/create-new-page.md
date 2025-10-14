---
description: Create a new page following design patterns from existing Figma pages
argument-hint: page-name route-path
---

# Create New Page Following Design Patterns

You are tasked with creating a NEW React page that follows the design patterns established in existing Figma-designed pages.

## Context

- **Project:** Creativos Espacios - Container solutions website
- **Tech Stack:** React 19 + React Router 7 + React Bootstrap 5 + SASS
- **Methodology:** BEM (Block Element Modifier)
- **Design System:** See `src/styles/_variables.scss`
- **Pattern Reference:** Use existing pages with Figma designs as reference

## Arguments

- **$1:** Page name (e.g., "PresentacionEmpresarial", "Catalogo")
- **$2:** Route path (e.g., "/presentacion-empresarial", "/catalogo")

## Your Task

### Step 1: Analyze Reference Pages
1. Review existing Figma-designed pages for patterns:
   - Home (`/`) - node-id=207-2
   - Quienes Somos (`/quienes-somos`) - node-id=207-379
   - Misión y Visión (`/mision-vision`) - node-id=207-522
   - Nuestro Equipo (`/nuestro-equipo`) - node-id=207-1116
   - Historia (`/historia`) - node-id=207-1968
   - Valores (`/valores`) - node-id=207-659
   - Casos de Éxito (`/casos-exito`) - node-id=207-800
   - Tipos de Contenedores (`/tipos-contenedores`) - node-id=207-1299
   - Detalle Tipo Contenedor (`/tipos-contenedores/:id`) - node-id=207-1522
   - Fichas Técnicas (`/fichas-tecnicas`) - node-id=207-1745
2. Extract common patterns:
   - Hero section structure
   - Content section layouts
   - Card grids
   - Typography hierarchy
   - Spacing patterns (48px sections, 24px padding, 16px gaps)
   - Color usage
   - Component patterns

### Step 2: Extract Content
1. Check for content in `src/filesForDesing/*.pdf` files
2. If not found, fetch content from https://www.creativosespacios.mx/[relevant-page]
3. If still not found, perform web search for relevant content
4. Extract:
   - Page title and description
   - Section headings
   - Body text
   - List items
   - Call-to-action text
5. Note which images are needed

### Step 3: Create Component Structure
1. Create directory: `src/pages/$1/`
2. Create files:
   - `$1.jsx` (component file)
   - `$1.scss` (styles file)
3. Follow this template structure:

```jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './$1.scss';

const $1 = () => {
  return (
    <div className="[kebab-case-name]">
      <section className="[kebab-case-name]__hero">
        <Container>
          <Row>
            <Col lg={10}>
              <h1 className="[kebab-case-name]__title">Page Title</h1>
              <p className="[kebab-case-name]__subtitle">Page Subtitle</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="[kebab-case-name]__content">
        <Container>
          <Row>
            {/* Content sections following patterns */}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default $1;
```

### Step 4: Apply Design Patterns

#### Layout Patterns (from Figma pages):
- **Hero Section:**
  - Full-width background color or image
  - Centered content with Container
  - Large heading (h1) + subtitle (p)
  - Padding: 48px vertical, 24px horizontal

- **Content Sections:**
  - White or light gray background
  - Container for content width
  - Row/Col grid system
  - Padding: 48px vertical, 0 horizontal
  - Gap between items: 16px

- **Card Grids:**
  - 3 columns on desktop (Col lg={4})
  - 2 columns on tablet (Col md={6})
  - 1 column on mobile (Col xs={12})
  - Card gap: 16px (using Row with g-3 or g-4)

#### Typography Patterns:
- **Page Title (h1):**
  - Font: Outfit
  - Size: 2.5rem (40px)
  - Weight: 700 (bold)
  - Line-height: 1.2
  - Margin-bottom: 24px

- **Section Headings (h2):**
  - Font: Outfit
  - Size: 2rem (32px)
  - Weight: 600 (semi-bold)
  - Margin-bottom: 32px

- **Subsection Headings (h3):**
  - Font: Outfit
  - Size: 1.5rem (24px)
  - Weight: 600
  - Margin-bottom: 16px

- **Body Text (p):**
  - Font: Hind
  - Size: 1rem (16px)
  - Weight: 400 (normal)
  - Line-height: 1.6
  - Margin-bottom: 16px

#### Color Patterns:
- **Hero backgrounds:** $color-calipso or $color-naranja
- **Hero text:** White
- **Content backgrounds:** White or #F5F5F5
- **Content text:** $color-texto (dark gray/black)
- **Accent colors:** $color-naranja, $color-terracota
- **Links:** $color-calipso
- **Buttons:** $color-naranja background, white text

#### Spacing Patterns:
- **Section padding:** 48px top/bottom, 24px left/right (desktop)
- **Section padding (tablet):** 32px top/bottom, 16px left/right
- **Section padding (mobile):** 24px top/bottom, 12px left/right
- **Element margins:** 32px between sections, 16px between elements
- **Card gaps:** 16px

### Step 5: Create SCSS File
1. Create `src/pages/$1/$1.scss`
2. Import variables and mixins
3. Follow BEM naming convention
4. Match spacing patterns from reference pages
5. Implement responsive behavior

```scss
@import '../../styles/variables';
@import '../../styles/mixins';

.[kebab-case-name] {

  &__hero {
    padding: $spacing-3xl $spacing-lg;
    background-color: $color-calipso;
    color: white;

    @media (max-width: 992px) {
      padding: $spacing-2xl $spacing-md;
    }

    @media (max-width: 576px) {
      padding: $spacing-xl $spacing-sm;
    }
  }

  &__title {
    font-family: $font-titulos;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: $spacing-lg;

    @media (max-width: 992px) {
      font-size: 2rem;
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }

  &__subtitle {
    font-family: $font-texto;
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 0;
  }

  &__content {
    padding: $spacing-3xl 0;
  }

  &__section {
    margin-bottom: $spacing-2xl;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__section-heading {
    font-family: $font-titulos;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: $spacing-xl;
    color: $color-calipso;
  }
}
```

### Step 6: Handle Images
1. Download images from https://www.creativosespacios.mx/ when available
2. Extract images from Figma designs (icons, graphics)
3. Use placeholder images if real images not available:
   - https://via.placeholder.com/800x600?text=Image+Name
4. Save images to `public/images/[kebab-case-name]/`
5. Use proper alt texts for accessibility

### Step 7: Add Route to App.js
1. Read `src/App.js`
2. Import the new component: `import $1 from './pages/$1/$1';`
3. Add route in the appropriate section:
   ```jsx
   <Route path="$2" element={<$1 />} />
   ```
4. Maintain alphabetical or logical order

### Step 8: Implement Responsive Behavior
1. Desktop (1200px+): Full layout as designed
2. Tablet (768px - 1199px):
   - Reduce spacing by ~33%
   - 2-column grids instead of 3
   - Smaller font sizes
3. Mobile (< 768px):
   - Single column layout
   - Reduce spacing by ~50%
   - Stack all elements vertically
   - Larger touch targets (min 44px)

### Step 9: Test & Verify
1. Run `npm start` to test the page
2. Navigate to `$2` to view the page
3. Test responsive behavior at breakpoints
4. Verify all content is populated
5. Check console for errors
6. Validate accessibility
7. Compare with reference pages for consistency

## Design System Reference

### Colors
- `$color-calipso`: #3B6F7F (primary blue-green)
- `$color-naranja`: Orange (secondary)
- `$color-terracota`: Terracotta (tertiary)
- `$color-texto`: Dark gray/black for body text

### Typography
- `$font-titulos`: 'Outfit', sans-serif
- `$font-texto`: 'Hind', sans-serif

### Spacing
- `$spacing-sm`: 0.5rem (8px)
- `$spacing-md`: 1rem (16px)
- `$spacing-lg`: 1.5rem (24px)
- `$spacing-xl`: 2rem (32px)
- `$spacing-2xl`: 3rem (48px)
- `$spacing-3xl`: 4rem (64px)

## Success Criteria

- [ ] Component created in `src/pages/$1/`
- [ ] Files created: `$1.jsx` and `$1.scss`
- [ ] Route added to `src/App.js`
- [ ] Follows design patterns from Figma pages
- [ ] Uses BEM methodology correctly
- [ ] Uses design system variables
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] All content populated (text + images)
- [ ] No console errors
- [ ] Accessible (semantic HTML, alt texts)
- [ ] Consistent with existing pages

## Common Page Types & Patterns

### Information Pages (About, History, Values):
- Hero with title + description
- 2-3 content sections with headings + text
- Optional: Timeline, list, or cards
- CTA button at bottom

### Listing Pages (Catalog, Products):
- Hero with title + filters/search
- Grid of cards (3 columns → 2 → 1)
- Pagination if needed
- Link to detail pages

### Detail Pages (Product Detail):
- Hero with breadcrumb
- Image gallery on left, specs on right
- Tabbed content (description, specs, documents)
- Related items section
- CTA buttons

### Form Pages (Contact, Quoter):
- Hero with title + description
- Form section with Formik + Yup
- Input fields with validation
- Submit button
- Success/error messages

## After Completion

Report back with:
1. Summary of page created
2. Files created and routes added
3. Content sources used
4. Any challenges or decisions made
5. Screenshots or description of final result

Now create the new page: **$1** with route: **$2**
