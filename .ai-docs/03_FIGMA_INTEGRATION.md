# 🎨 FIGMA INTEGRATION - PIXEL-PERFECT WORKFLOW

**Purpose:** Guide for using Figma to achieve pixel-perfect implementations
**Last Updated:** 2025-10-13

---

## 🎯 OVERVIEW

This guide explains how to integrate Figma designs into the Creativos Espacios project to ensure pixel-perfect implementation. The workflow combines Figma's design specs with React components and SASS styling.

---

## 🔗 CONNECTING TO FIGMA

### Prerequisites
1. **Figma Account** - Access to Creativos Espacios design files
2. **Figma Desktop App** or Browser access
3. **Developer Mode** enabled (View → Developer Mode)

### Getting Design Specs
1. Open Figma file for Creativos Espacios
2. Enable **Developer Mode** (bottom right toggle)
3. Select any element to see:
   - Dimensions (width, height)
   - Spacing (margins, padding)
   - Colors (hex, RGB, HSL)
   - Typography (font, size, weight, line-height)
   - Effects (shadows, borders, radius)

---

## 📐 EXTRACTING DESIGN TOKENS

### 1. Colors
**In Figma:**
- Select element → Check "Fill" in right panel
- Copy hex code (e.g., #3B6F7F)

**In Code:**
```scss
// src/styles/_variables.scss
$color-calipso: #3B6F7F;  // From Figma: Main brand color
```

**Verification:**
- Compare rendered color in browser with Figma using ColorPick Eyedropper extension

---

### 2. Typography

**In Figma:**
- Select text element → Check "Text" panel
- Note: Font family, Size, Weight, Line height, Letter spacing

**Example from Figma:**
```
Font: Outfit
Size: 32px
Weight: Bold (700)
Line height: 120%
```

**In Code:**
```scss
// src/styles/_variables.scss
$font-titulos: 'Outfit', sans-serif;
$font-size-2xl: 2rem; // 32px
$font-weight-bold: 700;
$line-height-tight: 1.2;

// Component usage
.page__title {
  font-family: $font-titulos;
  font-size: $font-size-2xl;
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
}
```

---

### 3. Spacing

**In Figma:**
- Select element → Hover over adjacent elements
- Red lines show spacing (padding/margin)
- Note exact pixel values

**Example:**
```
Top padding: 48px
Left/Right padding: 24px
Margin bottom: 32px
Gap between items: 16px
```

**In Code:**
```scss
.page__section {
  padding: $spacing-3xl $spacing-lg; // 48px 24px
  margin-bottom: $spacing-xl;        // 32px

  .page__grid {
    display: flex;
    gap: $spacing-md;                // 16px
  }
}
```

---

### 4. Dimensions

**In Figma:**
- Select element → Check width/height in right panel
- Note if it's "Fixed", "Hug", or "Fill"

**Translation:**
- **Fixed:** Exact pixels → `width: 300px`
- **Hug:** Content-based → `width: auto` or `width: fit-content`
- **Fill:** Full width → `width: 100%`

**Example:**
```scss
.card {
  width: 100%;           // Fill container
  max-width: 400px;      // Fixed max
  height: auto;          // Hug content
}
```

---

### 5. Shadows & Effects

**In Figma:**
- Select element → Check "Effects" panel
- Note shadow values: X, Y, Blur, Spread, Color, Opacity

**Example from Figma:**
```
Drop Shadow
X: 0, Y: 4, Blur: 6, Spread: 0
Color: #000000, Opacity: 10%
```

**In Code:**
```scss
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);

.card {
  box-shadow: $shadow-md;
}
```

---

### 6. Border Radius

**In Figma:**
- Select element → Check "Corner radius" in right panel
- Can be individual corners or all corners

**Example:**
```
Corner radius: 16px (all corners)
```

**In Code:**
```scss
$border-radius-lg: 1rem; // 16px

.card {
  border-radius: $border-radius-lg;
}
```

---

## 🔍 PIXEL-PERFECT VERIFICATION

### Method 1: Browser DevTools Overlay
1. Take screenshot of Figma design
2. Open page in browser
3. Use browser extension (e.g., "Perfect Pixel")
4. Overlay Figma screenshot on live page
5. Adjust opacity to compare alignment

### Method 2: Measure Tool
1. Open Chrome DevTools (F12)
2. Use "Inspect" tool to select elements
3. Check Computed styles tab for:
   - Actual dimensions
   - Actual spacing (margin, padding)
   - Actual colors

### Method 3: Figma Dev Mode Export
1. In Figma Developer Mode, select element
2. Choose "CSS" in code panel
3. Copy exact CSS values
4. Compare with your SCSS output

---

## 🎨 COMPONENT IMPLEMENTATION WORKFLOW

### Step-by-Step Process

#### 1. **Analyze Figma Design**
- Identify component structure (header, content, footer)
- Note all visual states (default, hover, active, disabled)
- Check responsive behavior (desktop, tablet, mobile)

#### 2. **Extract Design Tokens**
- Colors → Add to `_variables.scss` if new
- Typography → Verify against existing tokens
- Spacing → Use existing spacing scale when possible
- Effects → Add custom shadows/effects if needed

#### 3. **Create Component Structure**
```jsx
// src/pages/PageName/PageName.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PageName.scss';

const PageName = () => {
  return (
    <div className="page-name">
      {/* Match Figma structure exactly */}
    </div>
  );
};
```

#### 4. **Style with SASS**
```scss
// src/pages/PageName/PageName.scss
@import '../../styles/variables';
@import '../../styles/mixins';

.page-name {
  // Use exact values from Figma
  padding: 48px 24px; // Don't round unless using variable

  &__title {
    // Match typography exactly
    font-family: $font-titulos;
    font-size: 2rem;        // 32px from Figma
    font-weight: 700;        // Bold from Figma
    line-height: 1.2;        // 120% from Figma
    color: #3B6F7F;          // Exact hex from Figma
  }
}
```

#### 5. **Verify Responsiveness**
- Check Figma mobile/tablet frames
- Implement media queries matching Figma breakpoints
- Test in browser at exact breakpoint widths (375px, 768px, 1024px, 1440px)

---

## 📱 RESPONSIVE DESIGN FROM FIGMA

### Figma Frame Sizes → CSS Breakpoints

| Figma Frame | Width | CSS Breakpoint |
|-------------|-------|----------------|
| Mobile | 375px | `max-width: 576px` |
| Tablet | 768px | `max-width: 992px` |
| Desktop | 1440px | Default (1200px+) |

### Implementation
```scss
// Desktop (default in Figma)
.element {
  font-size: 32px;
  padding: 48px;
}

// Tablet frame
@media (max-width: 992px) {
  .element {
    font-size: 28px;
    padding: 32px;
  }
}

// Mobile frame
@media (max-width: 576px) {
  .element {
    font-size: 24px;
    padding: 24px;
  }
}
```

---

## 🔧 FIGMA PLUGINS FOR DEVELOPERS

### Recommended Plugins

1. **Design Lint** - Check for inconsistencies
2. **Stark** - Accessibility checker
3. **Font Fascia** - Typography audit
4. **Inspect** - Enhanced developer handoff

### How to Use
1. Open Figma file
2. Right-click → Plugins → Run plugin
3. Review suggestions for design consistency

---

## ✅ QUALITY CHECKLIST

Before marking a page as complete, verify:

- [ ] **Colors match exactly** - Use eyedropper to compare
- [ ] **Typography matches** - Font, size, weight, line-height
- [ ] **Spacing is accurate** - Margins, padding, gaps
- [ ] **Dimensions correct** - Width, height, max-width
- [ ] **Shadows match** - X, Y, blur, spread, opacity
- [ ] **Border radius exact** - All corners match
- [ ] **Hover states work** - If defined in Figma
- [ ] **Responsive matches** - Mobile, tablet, desktop frames
- [ ] **Interactive states** - Active, focus, disabled
- [ ] **Images aligned** - Object-fit, aspect ratios

---

## 🐛 COMMON ISSUES & FIXES

### Issue 1: Colors Look Different
**Cause:** Color profile mismatch (sRGB vs Display P3)
**Fix:** Export colors as hex from Figma, use exact hex in CSS

### Issue 2: Fonts Look Thinner/Thicker
**Cause:** Font rendering differences (antialiasing)
**Fix:** Add font smoothing CSS
```scss
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### Issue 3: Spacing Off by Few Pixels
**Cause:** Box model differences (border-box vs content-box)
**Fix:** Ensure border-box everywhere
```scss
*, *::before, *::after {
  box-sizing: border-box;
}
```

### Issue 4: Responsive Doesn't Match
**Cause:** Figma constraints vs CSS behavior
**Fix:** Check Figma constraints (left/right/center) and replicate with flexbox/grid

---

## 🎯 QUICK REFERENCE

### Figma Developer Mode Shortcuts
- `Shift + I` - Inspect mode
- `Shift + C` - Copy CSS
- `Shift + E` - Export assets
- `Cmd/Ctrl + /` - Search for elements

### CSS Copy Format
When copying CSS from Figma:
1. Convert px to rem for fonts (divide by 16)
2. Convert rgba to variables when possible
3. Use existing spacing variables instead of exact pixels

---

**Token Count:** ~100 lines | Figma pixel-perfect workflow guide
