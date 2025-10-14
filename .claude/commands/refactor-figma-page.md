---
description: Refactor an existing page to match its Figma design pixel-perfect
argument-hint: page-name figma-url
---

# Refactor Page to Match Figma Design

You are tasked with refactoring an existing React page to match its Figma design with pixel-perfect precision.

## Context

- **Project:** Creativos Espacios - Container solutions website
- **Tech Stack:** React 19 + React Router 7 + React Bootstrap 5 + SASS
- **Methodology:** BEM (Block Element Modifier)
- **Design System:** See `src/styles/_variables.scss`
- **Existing Base:** This page already exists, DON'T create from scratch - REFACTOR existing code

## Arguments

- **$1:** Page name (e.g., "Home", "QuienesSomos", "MisionVision")
- **$2:** Figma URL with node-id

## Your Task

### Step 1: Analyze Figma Design
1. Load the Figma frame from the provided URL
2. Extract metadata (structure, layers, dimensions)
3. Take screenshot for visual reference
4. Document:
   - Layout structure (sections, containers, grids)
   - Spacing (padding, margins, gaps)
   - Typography (fonts, sizes, weights, line-heights)
   - Colors (backgrounds, text, accents)
   - Components used (cards, buttons, forms, etc.)

### Step 2: Analyze Existing Code
1. Read the existing page component at `src/pages/$1/$1.jsx`
2. Read the existing styles at `src/pages/$1/$1.scss`
3. Document what exists and what needs to change
4. Identify reusable components vs. needs refactoring

### Step 3: Extract Content
1. Check for content in `src/filesForDesing/*.pdf` files
2. If not found, fetch content from https://www.creativosespacios.mx/
3. Extract text, headings, descriptions
4. Note which images are needed

### Step 4: Refactor JSX Structure
1. Update component structure to match Figma layout exactly
2. Use React Bootstrap components:
   - Container, Row, Col for layout
   - Card, Button, Form as needed
3. Apply BEM class names following pattern: `.page-name__element--modifier`
4. Ensure semantic HTML (header, main, section, article, nav, footer)
5. Add proper accessibility attributes (alt, aria-label, etc.)

### Step 5: Refactor SCSS Styles
1. Update `src/pages/$1/$1.scss` to match Figma exactly
2. Import variables: `@import '../../styles/variables';`
3. Match exact spacing from Figma:
   - Use variables when possible ($spacing-xl, $spacing-lg, etc.)
   - Use exact pixel values when no variable exists
4. Match typography:
   - Font families from $font-titulos, $font-texto
   - Font sizes, weights, line-heights from Figma
5. Match colors:
   - Use existing variables ($color-calipso, $color-naranja, etc.)
   - Add new colors to _variables.scss if needed
6. Match effects:
   - Shadows, borders, border-radius

### Step 6: Handle Images
1. Extract images from Figma when possible (icons, graphics)
2. Download images from https://www.creativosespacios.mx/ (photos)
3. Save images to `public/images/$1/`
4. Update image paths in JSX
5. Add proper alt texts for accessibility
6. Use responsive image techniques if needed

### Step 7: Implement Responsive Behavior
1. Desktop (default): Match Figma design exactly
2. Tablet (max-width: 992px):
   - Reduce spacing proportionally
   - Stack columns if needed
   - Adjust font sizes
3. Mobile (max-width: 576px):
   - Single column layout
   - Larger touch targets
   - Smaller font sizes
   - Simplified navigation

### Step 8: Verify & Test
1. Check pixel-perfect match with Figma
2. Test responsive behavior at breakpoints
3. Verify all links work
4. Check console for errors
5. Validate accessibility
6. Test cross-browser compatibility

## Design System Reference

### Colors (from src/styles/_variables.scss)
- Primary: `$color-calipso` (#3B6F7F)
- Secondary: `$color-naranja` (orange)
- Tertiary: `$color-terracota` (terracotta)

### Typography
- Headings: `$font-titulos` (Outfit)
- Body: `$font-texto` (Hind)

### Spacing Scale
- `$spacing-xs`: 0.25rem (4px)
- `$spacing-sm`: 0.5rem (8px)
- `$spacing-md`: 1rem (16px)
- `$spacing-lg`: 1.5rem (24px)
- `$spacing-xl`: 2rem (32px)
- `$spacing-2xl`: 3rem (48px)
- `$spacing-3xl`: 4rem (64px)

### Common Patterns
- Section padding: 48px (vertical) 24px (horizontal)
- Card spacing: 16px gap between cards
- Heading margin-bottom: 32px
- Paragraph margin-bottom: 16px

## Success Criteria

- [ ] Matches Figma design pixel-perfect
- [ ] Fully responsive (mobile, tablet, desktop)
- [ ] BEM methodology applied correctly
- [ ] Uses design system variables
- [ ] All content populated (text + images)
- [ ] All links functional
- [ ] No console errors
- [ ] Accessible (semantic HTML, alt texts)
- [ ] Cross-browser compatible

## Example Component Structure

```jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PageName.scss';

const PageName = () => {
  return (
    <div className="page-name">
      <section className="page-name__hero">
        <Container>
          <Row>
            <Col lg={10}>
              <h1 className="page-name__title">Title from Figma</h1>
              <p className="page-name__subtitle">Subtitle from Figma</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="page-name__content">
        <Container>
          {/* Content sections */}
        </Container>
      </section>
    </div>
  );
};

export default PageName;
```

## Example SCSS Structure

```scss
@import '../../styles/variables';
@import '../../styles/mixins';

.page-name {

  &__hero {
    padding: $spacing-3xl $spacing-lg;
    background-color: $color-calipso;

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
    color: white;
    margin-bottom: $spacing-lg;

    @media (max-width: 992px) {
      font-size: 2rem;
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }

  &__content {
    padding: $spacing-2xl 0;
  }
}
```

## Notes

- **DON'T create from scratch** - This page already exists, refactor it
- **Preserve working functionality** - Don't break existing features
- **Follow existing patterns** - Look at other refactored pages for reference
- **Ask if unclear** - Better to clarify than to guess
- **Test thoroughly** - Responsive + cross-browser + accessibility

## After Completion

Report back with:
1. Summary of changes made
2. Before/After comparison
3. Any issues encountered
4. Recommendations for further improvements

Now refactor the page: **$1** using Figma design: **$2**
