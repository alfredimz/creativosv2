# 🔧 GUÍA DE DISEÑO - CREATIVOS ESPACIOS

**Última Actualización:** 2025-01-14

---

## 🎨 GUÍA DE DISEÑO PARA IMPLEMENTACIÓN

### ⚠️ IMPORTANTE - Consultar Figma
**Para TODO lo visual:**
- ✅ Consultar diseño en Figma SIEMPRE
- ✅ Si no existe visual en Figma: usar prácticas existentes (espacios, colores, estructura)
- ⚠️ **EXCEPCIÓN:** Tipografía - usar las especificaciones definidas en este documento
- ✅ Mantener consistencia visual del proyecto

---

## 🎯 ESPECIFICACIONES DE DISEÑO

### Tipografía

**Fuentes:**
- **Outfit** → Títulos, menús y footer
- **Hind** → Párrafos y texto corrido

**Escala Responsiva (clamp):**
```scss
// Títulos Hero
$font-hero: clamp(32px, 6vw, 56px);

// Títulos Principales (H1)
$font-h1: clamp(28px, 5vw, 48px);

// Títulos Secundarios (H2)
$font-h2: clamp(24px, 4vw, 40px);

// Títulos Terciarios (H3)
$font-h3: clamp(20px, 3vw, 32px);

// Subtítulos (H4)
$font-h4: clamp(18px, 2.5vw, 24px);

// Texto Normal
$font-base: clamp(14px, 1.5vw, 18px);

// Texto Pequeño
$font-small: clamp(12px, 1.2vw, 14px);
```

### Colores de Marca

```scss
// Colores principales
$calipso: #3B6F7F;
$naranja: #F16700;
$terracota: #841C03;
```

### Metodología

- **CSS Architecture:** BEM (Block Element Modifier)
- **Responsive:** Bootstrap breakpoints + fluid typography
- **Animaciones:** Sutiles, profesionales (200-400ms, ease-out/ease-in-out)

---

## 🎨 INTEGRACIÓN FIGMA

**File Key:** `5wJFG1eYWcGQak6eyjAgjo`

**Herramientas MCP disponibles:**
- `mcp__figma__get_screenshot` - Ver diseños
- `mcp__figma__get_design_context` - Obtener especificaciones
- `mcp__figma__get_metadata` - Obtener estructura

**Uso:**
- Consultar Figma para layout, espaciado, colores y componentes
- Extraer fileKey y nodeId de URLs de Figma
- Aplicar tipografía de este documento (no de Figma)

---

## 📝 NOTAS DE DESARROLLO

### Archivos Clave

**Presentación Empresarial:** `src/filesForDesing/Presentacion.pdf`

### Principios de Animación

- Animaciones sutiles pero atractivas
- Duración: 200-400ms (rápidas)
- Easing: ease-out / ease-in-out
- No abusar - mantener profesionalismo
- Respetar prefers-reduced-motion

### Librerías Recomendadas

```bash
# Slider
npm install swiper

# Animaciones
npm install framer-motion
npm install react-intersection-observer

# 3D (opcional)
npm install @react-three/fiber
npm install @react-three/drei
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

- [ ] Consultar Figma para diseño visual (excepto tipografía)
- [ ] Aplicar BEM methodology en estilos
- [ ] Usar variables de tipografía definidas
- [ ] Probar en diferentes dispositivos/breakpoints
- [ ] Validar animaciones sutiles
- [ ] Mantener consistencia visual del proyecto

---

**Última revisión:** 2025-01-14
