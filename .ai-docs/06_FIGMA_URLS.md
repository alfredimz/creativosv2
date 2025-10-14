# 🎨 FIGMA FRAME URLS - CREATIVOS ESPACIOS

**Purpose:** Quick reference for all Figma frame URLs to use with Claude Code CLI + Figma MCP
**Last Updated:** 2025-10-13
**Figma File:** LandingCreativosEspacios

---

## 📋 FRAME URLs BY PAGE

### Pages WITH Figma Designs (10 frames)

| # | Page Name | Route | Node ID | Figma URL | Status |
|---|-----------|-------|---------|-----------|--------|
| 1 | Home | `/` | 207-2 | https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-2 | ⚠️ Refactor |
| 2 | Quienes Somos | `/quienes-somos` | 207-379 | https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-379 | ⚠️ Refactor |
| 3 | Misión y Visión | `/mision-vision` | 207-522 | https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-522 | ⚠️ Refactor |
| 4 | Nuestro Equipo | `/nuestro-equipo` | 207-1116 | https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-1116 | ⚠️ Refactor |
| 5 | Historia | `/historia` | 207-1968 | https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-1968 | ⚠️ Refactor |
| 6 | Valores | `/valores` | 207-659 | https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-659 | ⚠️ Refactor |
| 7 | Casos de Éxito | `/casos-exito` | 207-800 | https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-800 | ⚠️ Refactor + Route |
| 8 | Tipos de Contenedores | `/tipos-contenedores` | 207-1299 | https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-1299 | 🔴 Create New |
| 9 | Detalle Tipo Contenedor | `/tipos-contenedores/:id` | 207-1522 | https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-1522 | 🔴 Create New |
| 10 | Fichas Técnicas | `/fichas-tecnicas` | 207-1745 | https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-1745 | 🔴 Create New |

---

## 🚀 HOW TO USE WITH CLAUDE CODE CLI

### Step 1: Open Terminal
```bash
cd C:\Users\alfre\Documents\creativosGitHub\creativosv2
claude
```

### Step 2: Use Figma MCP Tools

#### Option A: Generate Code from Design
```
Genera el código React + SASS para este diseño de Figma:
https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-2

Usa:
- React Bootstrap (Container, Row, Col)
- BEM methodology para clases CSS
- SASS con variables de src/styles/_variables.scss
```

#### Option B: Extract Design Tokens
```
Extrae los colores, tipografías y espaciados de este frame:
https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-379

Genera variables SASS compatibles con las existentes en src/styles/_variables.scss
```

#### Option C: Get Metadata Only (Low Token Usage)
```
Dame la estructura y metadata (capas, dimensiones, nombres) de este frame:
https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-522
```

#### Option D: Get Screenshot for Visual Reference
```
Toma un screenshot de este frame y analiza el layout:
https://www.figma.com/design/5wJFG1eYWcGQak6eyjAgjo/LandingCreativosEspacios?node-id=207-659
```

---

## 🎯 MAPPING FRAMES TO PAGES (To Be Updated)

**Next Step:** Identify which frame corresponds to which page in your sitemap.

### Expected Pages (Sprint 1):
1. **Business Presentation** (`/presentacion-empresarial`) → Frame ??? (node-id=???)
2. **Container Types** (`/tipos-contenedores`) → Frame ??? (node-id=???)
3. **Container Detail** (`/tipos-contenedores/:id`) → Frame ??? (node-id=???)
4. **Technical Specs** (`/fichas-tecnicas`) → Frame ??? (node-id=???)
5. **General Catalog** (`/catalogo`) → Frame ??? (node-id=???)

**Action Required:** Open each Figma frame URL in browser to identify which page it represents, then update this mapping.

---

## 📊 FIGMA MCP TOOLS AVAILABLE

| Tool | Purpose | Token Usage |
|------|---------|-------------|
| `get_metadata` | Get XML structure (layers, dimensions, names) | 🟢 Low |
| `get_screenshot` | Take screenshot of frame | 🟡 Medium |
| `get_code` | Generate React + Tailwind code | 🔴 High |
| `create_design_system_rules` | Extract design system tokens | 🟡 Medium |

**Tip:** Start with `get_metadata` to understand structure, then use `get_code` for implementation.

---

## 🔗 QUICK REFERENCE

### MCP Server Configuration
- **Remote Server:** `https://mcp.figma.com/mcp`
- **Config File:** `C:\Users\alfre\.claude.json`
- **Status:** ✅ Active (configured via Claude Code CLI)

### VS Code MCP Configuration
- **Config File:** `.vscode/mcp.json`
- **Note:** VS Code extension uses separate MCP instance

### Figma File Info
- **File ID:** `5wJFG1eYWcGQak6eyjAgjo`
- **File Name:** LandingCreativosEspacios
- **Total Frames Documented:** 11

---

## 📝 WORKFLOW RECOMMENDATIONS

### For Token Efficiency:
1. **First:** Use `get_metadata` to understand structure (low tokens)
2. **Then:** Use `get_screenshot` for visual reference (medium tokens)
3. **Finally:** Use `get_code` to generate implementation (high tokens)

### For Pixel-Perfect Implementation:
1. Use `get_code` to get base structure
2. Compare with existing design system in `src/styles/_variables.scss`
3. Adjust to match BEM naming conventions
4. Test responsive behavior

---

**Token Count:** ~150 lines | Figma MCP reference guide
