# 🤖 GUÍA DE EJECUCIÓN PARA CLAUDE CODE

**Proyecto:** Creativos Espacios - Fases de Corrección
**Fecha:** 2025-01-14
**Modo:** Ejecución autónoma con Claude Code CLI

---

## 📋 ANTES DE EMPEZAR CUALQUIER FASE

### 1. Leer Documentos Clave
```
SIEMPRE leer al inicio de cada sesión:
1. .ai-docs/00_PROJECT_CONTEXT.md (contexto general)
2. .ai-docs/CORRECCIONES_PLAN.md (plan de fases)
3. Esta guía (CLAUDE_CODE_GUIDE.md)
```

### 2. Verificar Conexión Figma MCP
```
✅ Figma MCP está activo
✅ Usar herramientas mcp__figma__* para consultar diseños
✅ EXCEPCIÓN: Tipografía (no seguir Figma, usar CORRECCIONES_PLAN)
```

### 3. Estado del Proyecto
```bash
# Verificar que el proyecto corra
npm start

# Si hay problemas:
cmd /c taskkill /F /IM node.exe
powershell Remove-Item -Recurse -Force 'node_modules\.cache'
npm start
```

---

## 🎯 WORKFLOW POR FASE

### TEMPLATE: Ejecución de Cualquier Fase

```
PASO 1: Leer especificaciones
- Abrir CORRECCIONES_PLAN.md
- Leer sección de la fase actual
- Identificar todos los requerimientos

PASO 2: Consultar Figma (si aplica)
- Identificar qué elementos visuales se necesitan
- Usar mcp__figma__get_screenshot para ver diseño
- Usar mcp__figma__get_design_context para specs
- Usar mcp__figma__get_metadata para estructura
- IMPORTANTE: Tipografía NO viene de Figma

PASO 3: Planificar implementación
- Listar archivos a modificar/crear
- Identificar componentes necesarios
- Definir orden de trabajo

PASO 4: Implementar cambios
- Crear/modificar componentes
- Aplicar estilos (BEM)
- Probar en diferentes breakpoints

PASO 5: Verificar
- Probar funcionalidad
- Verificar responsive
- Validar que cumple specs

PASO 6: Reportar
- Actualizar CORRECCIONES_PLAN.md con progreso
- Marcar items completados
- Solicitar aprobación antes de siguiente fase
```

---

## 📁 FASE 0: HERO SLIDER HOME

### Requerimientos
- [ ] 5 slides diferentes
- [ ] Navegación manual (NO automático)
- [ ] Puntos de navegación (dots)
- [ ] Responsive

### Paso a Paso

**1. Consultar Figma**
```
Buscar en Figma:
- Diseño del hero slider
- Diseño de cada slide
- Navegación (dots)

Herramientas MCP:
- mcp__figma__get_screenshot (para ver diseño)
- mcp__figma__get_design_context (para specs)
```

**2. Instalar Dependencia**
```bash
npm install swiper
```

**3. Crear Componente**
```
Archivo: src/components/HeroSlider/HeroSlider.jsx
Archivo: src/components/HeroSlider/HeroSlider.scss

Contenido slides:
1. Contacto (usar hero actual)
2. Venta
3. Renta
4. Construcciones
5. Servicios arquitectónicos y adicionales
```

**4. Integrar en Home**
```
Modificar: src/pages/Home/Home.jsx
- Reemplazar hero actual con <HeroSlider />
- Mantener resto de secciones
```

**5. Estilos**
```scss
// Aplicar BEM
.hero-slider {
  // Contenedor principal

  &__slide {
    // Cada slide
  }

  &__navigation {
    // Dots de navegación
  }

  &__dot {
    // Cada punto
    &--active {
      // Punto activo
    }
  }
}

// Responsive con breakpoints Bootstrap
```

**6. Verificación**
- [ ] 5 slides funcionan
- [ ] Solo cambia con clicks (no auto)
- [ ] Dots funcionan
- [ ] Responsive en móvil/tablet/desktop
- [ ] Diseño coincide con Figma

---

## 📝 FASE 1: TIPOGRAFÍA RESPONSIVA

### Requerimientos
- [ ] clamp() en todas las fuentes
- [ ] Outfit para títulos/menús/footer
- [ ] Hind para párrafos
- [ ] Aplicar a 37+ páginas

### Paso a Paso

**1. NO Consultar Figma para Typography**
```
⚠️ IMPORTANTE:
La tipografía se define en CORRECCIONES_PLAN.md
NO seguir especificaciones de tipografía de Figma
```

**2. Actualizar Variables SASS**
```
Archivo: src/styles/_variables.scss

Agregar/modificar:

// Font Families
$font-titulos: 'Outfit', sans-serif;
$font-parrafos: 'Hind', sans-serif;

// Font Sizes Responsive
$font-hero: clamp(32px, 6vw, 56px);
$font-h1: clamp(28px, 5vw, 48px);
$font-h2: clamp(24px, 4vw, 40px);
$font-h3: clamp(20px, 3vw, 32px);
$font-h4: clamp(18px, 2.5vw, 24px);
$font-base: clamp(14px, 1.5vw, 18px);
$font-small: clamp(12px, 1.2vw, 14px);
```

**3. Aplicar en Todos los Componentes**
```
Buscar en proyecto:
- Todos los h1, h2, h3, h4, h5, h6
- Todos los p, span, div con texto
- Header, Footer, menús

Reemplazar font-size fijos por variables
```

**4. Orden de Ejecución**
```
1. Actualizar _variables.scss
2. Modificar componentes globales (Header, Footer)
3. Modificar páginas (una por una, 37+)
4. Probar en diferentes tamaños de pantalla
```

**5. Verificación**
- [ ] Outfit en títulos, menús, footer
- [ ] Hind en párrafos
- [ ] Fuentes más grandes en pantallas grandes
- [ ] Legible en móvil (no muy pequeño)
- [ ] Aplicado en todas las 37+ páginas

---

## 🎨 USO DE FIGMA MCP

### Comandos Disponibles

**1. Obtener Screenshot**
```javascript
mcp__figma__get_screenshot({
  fileKey: "FILE_KEY_FROM_URL",
  nodeId: "NODE_ID_FROM_URL",
  clientLanguages: "javascript,html,css,typescript",
  clientFrameworks: "react"
})
```

**2. Obtener Diseño y Código**
```javascript
mcp__figma__get_design_context({
  fileKey: "FILE_KEY_FROM_URL",
  nodeId: "NODE_ID_FROM_URL",
  clientLanguages: "javascript,html,css,typescript",
  clientFrameworks: "react"
})
```

**3. Obtener Metadata/Estructura**
```javascript
mcp__figma__get_metadata({
  fileKey: "FILE_KEY_FROM_URL",
  nodeId: "NODE_ID_FROM_URL",
  clientLanguages: "javascript,html,css,typescript",
  clientFrameworks: "react"
})
```

### Cómo Extraer fileKey y nodeId

**De URL de Figma:**
```
URL: https://figma.com/design/ABC123/NombreArchivo?node-id=1-2

Extraer:
fileKey = "ABC123"
nodeId = "1:2" (cambiar guión por dos puntos)
```

---

## ✅ CHECKLIST POR FASE

### Antes de Empezar
- [ ] Leer 00_PROJECT_CONTEXT.md
- [ ] Leer sección específica en CORRECCIONES_PLAN.md
- [ ] Identificar si requiere Figma
- [ ] Verificar que npm start funcione

### Durante Implementación
- [ ] Consultar Figma (si aplica, excepto tipografía)
- [ ] Crear/modificar archivos necesarios
- [ ] Aplicar BEM en estilos
- [ ] Mantener consistencia visual
- [ ] Usar variables de tipografía de CORRECCIONES_PLAN

### Después de Implementar
- [ ] Probar en localhost:3000
- [ ] Verificar responsive (móvil, tablet, desktop)
- [ ] Validar contra especificaciones
- [ ] Actualizar CORRECCIONES_PLAN.md (marcar completados)
- [ ] Solicitar aprobación usuario

---

## 🚨 REGLAS IMPORTANTES

### SIEMPRE
✅ Consultar Figma para diseño visual
✅ Usar herramientas mcp__figma__*
✅ Aplicar BEM en estilos
✅ Mantener responsive con Bootstrap breakpoints
✅ Usar tipografía de CORRECCIONES_PLAN (Outfit/Hind + clamp)
✅ Probar en diferentes dispositivos

### NUNCA
❌ Seguir tipografía de Figma (usar CORRECCIONES_PLAN)
❌ Crear estilos inline (usar archivos .scss)
❌ Romper BEM methodology
❌ Cambiar colores de marca sin aprobación
❌ Olvidar probar responsive
❌ Pasar a siguiente fase sin aprobación

---

## 📊 TRACKING DE PROGRESO

### Actualizar CORRECCIONES_PLAN.md

**Marcar items completados:**
```markdown
- [x] Item completado
- [ ] Item pendiente
```

**Agregar notas de progreso:**
```markdown
**Estado:** Implementando FASE 0 - Hero Slider
**Completado:** 3 de 5 slides
**Siguiente:** Terminar slides 4 y 5
```

---

## 🔧 TROUBLESHOOTING

### Problema: Proyecto no compila
```bash
cmd /c taskkill /F /IM node.exe
powershell Remove-Item -Recurse -Force 'node_modules\.cache'
npm start
```

### Problema: Figma MCP no responde
```
1. Verificar conexión MCP activa
2. Revisar fileKey y nodeId correctos
3. Verificar formato de nodeId (usar ":" no "-")
```

### Problema: Estilos no aplican
```
1. Verificar import de SCSS en componente
2. Revisar que variables estén definidas en _variables.scss
3. Verificar BEM naming (block__element--modifier)
```

---

## 📞 NEXT STEPS

### ⚡ ORDEN DE EJECUCIÓN PRIORIZADO - LO MÁS VISIBLE PRIMERO

**Criterio:** Impacto visual inmediato

1. **FASE 0** → Hero Slider (Primera impresión del sitio)
2. **FASE 1** → Tipografía (Afecta TODO el sitio)
3. **FASE 2** → Headers (Navegación principal siempre visible)
4. **FASE 4 (crítico)** → Imágenes aplastadas (Defecto visual notorio)
5. **Continuar con resto del plan...**

### Para Iniciar FASE 0:
```
1. Leer esta guía completa
2. Leer sección FASE 0 en CORRECCIONES_PLAN.md
3. Consultar Figma (File Key: 5wJFG1eYWcGQak6eyjAgjo, Node: 207:2)
4. Instalar swiper: npm install swiper
5. Crear componente HeroSlider
6. Implementar 5 slides con contenido definido
7. Agregar modal YouTube (Video ID: uMXB54itJeM)
8. Agregar sección Productos Estrella en Home
9. Probar responsive
10. Reportar progreso
11. Solicitar aprobación para FASE 1
```

---

**Preparado para:** Claude Code CLI
**Usuario:** Ejecutar fases de forma autónoma
**Soporte:** Documentación en .ai-docs/
**Figma:** MCP activo y listo para usar
