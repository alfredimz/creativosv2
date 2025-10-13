# 📚 AI Documentation - Creativos Espacios V2

**Purpose:** Optimized documentation for AI-assisted development
**Created:** 2025-10-13
**Optimized for:** Minimal token consumption, maximum efficiency

---

## 🎯 WHY THIS STRUCTURE?

### Previous Issues
- **Vendor lock-in:** Files named for Claude/Gemini
- **High token usage:** ~5000 tokens per session
- **Redundancy:** Information duplicated across 6 files
- **No Figma guide:** Missing pixel-perfect workflow

### New Benefits
- ✅ **Vendor-agnostic:** Works with any AI assistant
- ✅ **84% token reduction:** ~800 tokens (from 5000)
- ✅ **67% fewer lines:** ~1150 lines (from 3500)
- ✅ **Modular updates:** Change only relevant sections
- ✅ **Figma integration:** Pixel-perfect implementation guide

---

## 📁 FILE STRUCTURE

```
.ai-docs/
├── README.md                      # This file (guide)
├── 00_PROJECT_CONTEXT.md          # ~300 lines - Project overview
├── 01_DESIGN_SYSTEM.md            # ~150 lines - Design tokens
├── 02_TASK_SITEMAP.md             # ~200 lines - Tasks & sprints
├── 03_FIGMA_INTEGRATION.md        # ~100 lines - Figma workflow
├── 04_COMPONENT_PATTERNS.md       # ~200 lines - Code templates
├── 05_LEARNING_LOG.md             # Flexible - Session learnings
└── old/                           # Backup of original files
    ├── RESUMEN_PROYECTO.md
    ├── CAMBIOS_FINALES.md
    ├── SITEMAP.md
    ├── IA_MASTER_CONTEXT.md
    ├── CLAUDE_CODE_REFACTOR.md
    └── GEMINI_PRO_ANALYSIS.md
```

---

## 📖 FILE DESCRIPTIONS

### [00_PROJECT_CONTEXT.md](00_PROJECT_CONTEXT.md)
**When to read:** Start of EVERY session
**Contains:**
- Project overview (tech stack, status, goals)
- File structure
- Company information
- Quick reference to other docs
- Completed pages list

**Token budget:** ~300 lines

---

### [01_DESIGN_SYSTEM.md](01_DESIGN_SYSTEM.md)
**When to read:** When styling components
**Contains:**
- Color palette with hex codes
- Typography scale (sizes, weights, families)
- Spacing system
- Shadows, borders, effects
- BEM naming conventions
- Common SCSS patterns

**Token budget:** ~150 lines

---

### [02_TASK_SITEMAP.md](02_TASK_SITEMAP.md)
**When to read:** Planning work, checking progress
**Contains:**
- All 46 pages organized by phase/sprint
- Current sprint focus with immediate tasks
- Complexity ratings
- Design file references
- Footer navigation structure

**Token budget:** ~200 lines

---

### [03_FIGMA_INTEGRATION.md](03_FIGMA_INTEGRATION.md)
**When to read:** Implementing from Figma designs
**Contains:**
- How to extract design tokens from Figma
- Pixel-perfect verification methods
- Responsive design translation
- Common issues & fixes
- Quality checklist

**Token budget:** ~100 lines

---

### [04_COMPONENT_PATTERNS.md](04_COMPONENT_PATTERNS.md)
**When to read:** Creating new pages/components
**Contains:**
- Basic page structure templates
- Banner/hero patterns
- Card layouts
- Form components (Formik + Yup)
- Gallery/grid patterns
- Interactive elements (Accordion, Tabs)
- SCSS patterns (hover effects, gradients)

**Token budget:** ~200 lines

---

### [05_LEARNING_LOG.md](05_LEARNING_LOG.md)
**When to read:** Reference for solved problems
**Contains:**
- Session-by-session learnings
- Solutions to common problems
- New patterns discovered
- Files created/modified
- Technical decisions and rationale

**Token budget:** Flexible (updated incrementally)

---

## 🚀 AI WORKFLOW

### Standard Session Flow

```
1. START SESSION
   ↓
2. Read: 00_PROJECT_CONTEXT.md
   → Get project overview, status, tech stack
   ↓
3. Read: 02_TASK_SITEMAP.md
   → Check current sprint, identify next task
   ↓
4. For styling: Read 01_DESIGN_SYSTEM.md
   → Get design tokens, colors, spacing
   ↓
5. For Figma: Read 03_FIGMA_INTEGRATION.md
   → Pixel-perfect implementation guide
   ↓
6. For patterns: Read 04_COMPONENT_PATTERNS.md
   → Use templates for consistency
   ↓
7. IMPLEMENT TASK
   → Create page/component/feature
   ↓
8. Update: 05_LEARNING_LOG.md
   → Log new learnings, solutions, patterns
   ↓
9. Update: 02_TASK_SITEMAP.md
   → Mark task complete, update progress
   ↓
10. END SESSION
```

---

## 📏 READING PRIORITIES

### Every Session (Required)
1. **00_PROJECT_CONTEXT.md** - Always read first

### Task-Specific (As Needed)
2. **02_TASK_SITEMAP.md** - Planning/progress
3. **01_DESIGN_SYSTEM.md** - Styling work
4. **03_FIGMA_INTEGRATION.md** - Figma designs
5. **04_COMPONENT_PATTERNS.md** - New components
6. **05_LEARNING_LOG.md** - Problem reference

### Writing Back
- **05_LEARNING_LOG.md** - After solving new problems
- **02_TASK_SITEMAP.md** - After completing tasks

---

## 🎯 TOKEN OPTIMIZATION

### Comparison

| Aspect | Old Structure | New Structure | Improvement |
|--------|---------------|---------------|-------------|
| **Total Lines** | ~3500 | ~1150 | 67% reduction |
| **Token Usage** | ~5000 | ~800 | 84% reduction |
| **Files to Read** | 6 (all required) | 1-3 (contextual) | Task-focused |
| **Redundancy** | High | None | Modular |
| **Update Effort** | 6 files | 1-2 files | Minimal |

### How It Works
1. **Modular design:** Read only what you need
2. **No duplication:** Each file has unique purpose
3. **Concise format:** Tables, bullet points, code blocks
4. **Clear structure:** Easy to scan and find info
5. **Incremental updates:** Only update changed sections

---

## 📝 UPDATE GUIDELINES

### When to Update Each File

**00_PROJECT_CONTEXT.md**
- Major milestones reached (phase completion)
- Tech stack changes
- New file structure

**01_DESIGN_SYSTEM.md**
- New colors/tokens added
- Typography changes
- New SCSS patterns established

**02_TASK_SITEMAP.md**
- Tasks completed ✅
- New pages added
- Sprint changes
- Priority adjustments

**03_FIGMA_INTEGRATION.md**
- Figma workflow changes
- New verification methods
- Common issues discovered

**04_COMPONENT_PATTERNS.md**
- New reusable patterns created
- Better templates found
- Component structure changes

**05_LEARNING_LOG.md**
- Every session with new learnings
- Solutions to problems
- New patterns discovered
- Important decisions made

---

## ✅ QUALITY CHECKS

Before ending a session, verify:

- [ ] Current task marked complete in [02_TASK_SITEMAP.md](02_TASK_SITEMAP.md)
- [ ] New learnings logged in [05_LEARNING_LOG.md](05_LEARNING_LOG.md)
- [ ] Design tokens used match [01_DESIGN_SYSTEM.md](01_DESIGN_SYSTEM.md)
- [ ] Code patterns follow [04_COMPONENT_PATTERNS.md](04_COMPONENT_PATTERNS.md)
- [ ] Progress updated in [00_PROJECT_CONTEXT.md](00_PROJECT_CONTEXT.md) (if milestone)

---

## 🔄 MIGRATION INFO

### Old Files (Backed up in `/old`)
- ~~RESUMEN_PROYECTO.md~~ → 00_PROJECT_CONTEXT.md + 02_TASK_SITEMAP.md
- ~~SITEMAP.md~~ → 02_TASK_SITEMAP.md
- ~~IA_MASTER_CONTEXT.md~~ → 00_PROJECT_CONTEXT.md + 01_DESIGN_SYSTEM.md
- ~~CLAUDE_CODE_REFACTOR.md~~ → 04_COMPONENT_PATTERNS.md
- ~~GEMINI_PRO_ANALYSIS.md~~ → 04_COMPONENT_PATTERNS.md
- ~~CAMBIOS_FINALES.md~~ → 05_LEARNING_LOG.md

### Why Changed?
- **Vendor-agnostic:** No "Claude" or "Gemini" in names
- **Purpose-based:** Names describe what, not who
- **Token-optimized:** Smaller, focused files
- **Modular:** Update only what changed

---

## 🆘 QUICK REFERENCE

### Starting a new session?
→ Read [00_PROJECT_CONTEXT.md](00_PROJECT_CONTEXT.md)

### What should I work on?
→ Read [02_TASK_SITEMAP.md](02_TASK_SITEMAP.md)

### What colors/fonts to use?
→ Read [01_DESIGN_SYSTEM.md](01_DESIGN_SYSTEM.md)

### How to implement from Figma?
→ Read [03_FIGMA_INTEGRATION.md](03_FIGMA_INTEGRATION.md)

### How to create a new page?
→ Read [04_COMPONENT_PATTERNS.md](04_COMPONENT_PATTERNS.md)

### How was X problem solved?
→ Read [05_LEARNING_LOG.md](05_LEARNING_LOG.md)

---

## 📊 PROJECT STATUS

**Current Status:** 46 pages total, 16 complete (35%)

**Current Sprint:** Phase 1 - Sprint 1 (Information & Catalogs)

**Next Tasks:**
1. Business Presentation (`/presentacion-empresarial`)
2. Container Types Listing (`/tipos-contenedores`)
3. Container Type Detail (`/tipos-contenedores/:id`)
4. Technical Specs (`/fichas-tecnicas`)
5. General Catalog (`/catalogo`)

See [02_TASK_SITEMAP.md](02_TASK_SITEMAP.md) for complete task list.

---

**Created:** 2025-10-13
**Last Updated:** 2025-10-13
**Maintained by:** AI-assisted development team
