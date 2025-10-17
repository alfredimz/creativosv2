# 🤖 GUÍA DE DESARROLLO - CREATIVOS ESPACIOS

**Proyecto:** Creativos Espacios
**Fecha:** 2025-01-14

---

## 📋 ANTES DE EMPEZAR

### 1. Leer Documentos Clave
```
SIEMPRE leer al inicio de cada sesión:
1. .ai-docs/00_PROJECT_CONTEXT.md (contexto general)
2. .ai-docs/CORRECCIONES_PLAN.md (guía de diseño)
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

## 🎯 WORKFLOW DE DESARROLLO

### TEMPLATE: Implementación de Features

```
PASO 1: Analizar requerimientos
- Identificar objetivo del feature
- Listar componentes necesarios
- Definir estructura de archivos

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
- Validar que cumple especificaciones

PASO 6: Reportar
- Documentar cambios realizados
- Marcar items completados
- Solicitar aprobación si es necesario
```

---

## 🎨 USO DE FIGMA MCP

### Comandos Disponibles

**1. Obtener Screenshot**
```javascript
mcp__figma__get_screenshot({
  fileKey: "5wJFG1eYWcGQak6eyjAgjo",
  nodeId: "NODE_ID_FROM_URL",
  clientLanguages: "javascript,html,css,typescript",
  clientFrameworks: "react"
})
```

**2. Obtener Diseño y Código**
```javascript
mcp__figma__get_design_context({
  fileKey: "5wJFG1eYWcGQak6eyjAgjo",
  nodeId: "NODE_ID_FROM_URL",
  clientLanguages: "javascript,html,css,typescript",
  clientFrameworks: "react"
})
```

**3. Obtener Metadata/Estructura**
```javascript
mcp__figma__get_metadata({
  fileKey: "5wJFG1eYWcGQak6eyjAgjo",
  nodeId: "NODE_ID_FROM_URL",
  clientLanguages: "javascript,html,css,typescript",
  clientFrameworks: "react"
})
```

### Cómo Extraer fileKey y nodeId

**De URL de Figma:**
```
URL: https://figma.com/design/5wJFG1eYWcGQak6eyjAgjo/NombreArchivo?node-id=1-2

Extraer:
fileKey = "5wJFG1eYWcGQak6eyjAgjo"
nodeId = "1:2" (cambiar guión por dos puntos)
```

---

## 🎨 METODOLOGÍA BEM

### Estructura de Nombres

```scss
// Bloque
.hero-slider {
  // Estilos del contenedor principal
}

// Elemento
.hero-slider__slide {
  // Estilos de cada slide
}

// Modificador
.hero-slider__slide--active {
  // Estilos del slide activo
}

// Elemento de elemento
.hero-slider__navigation {
  // Contenedor de navegación
}

.hero-slider__dot {
  // Cada punto de navegación

  &--active {
    // Punto activo
  }
}
```

### Ejemplo Completo

```jsx
// Componente React
function HeroSlider() {
  return (
    <div className="hero-slider">
      <div className="hero-slider__slide hero-slider__slide--active">
        <h1 className="hero-slider__title">Título</h1>
        <p className="hero-slider__text">Descripción</p>
      </div>
      <nav className="hero-slider__navigation">
        <button className="hero-slider__dot hero-slider__dot--active" />
        <button className="hero-slider__dot" />
      </nav>
    </div>
  );
}
```

```scss
// Estilos SCSS
.hero-slider {
  position: relative;
  width: 100%;

  &__slide {
    padding: 2rem;

    &--active {
      opacity: 1;
    }
  }

  &__title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(28px, 5vw, 48px);
  }

  &__text {
    font-family: 'Hind', sans-serif;
    font-size: clamp(14px, 1.5vw, 18px);
  }

  &__navigation {
    display: flex;
    gap: 0.5rem;
  }

  &__dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    cursor: pointer;

    &--active {
      background: #F16700;
    }
  }
}
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints Bootstrap

```scss
// Variables disponibles
$mobile: 576px;      // sm
$tablet: 768px;      // md
$desktop: 992px;     // lg
$large: 1200px;      // xl
$xlarge: 1400px;     // xxl

// Uso
.component {
  padding: 1rem;

  @media (min-width: $tablet) {
    padding: 2rem;
  }

  @media (min-width: $desktop) {
    padding: 3rem;
  }
}
```

### Tipografía Responsiva

```scss
// Usar variables definidas en _variables.scss
.title {
  font-family: 'Outfit', sans-serif;
  font-size: $font-h1; // clamp(28px, 5vw, 48px)
}

.paragraph {
  font-family: 'Hind', sans-serif;
  font-size: $font-base; // clamp(14px, 1.5vw, 18px)
}
```

---

## ✅ CHECKLIST DE DESARROLLO

### Antes de Empezar
- [ ] Leer 00_PROJECT_CONTEXT.md
- [ ] Leer CORRECCIONES_PLAN.md
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
- [ ] Documentar cambios realizados

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

## 📝 VARIABLES SASS DISPONIBLES

### Tipografía
```scss
$font-titulos: 'Outfit', sans-serif;
$font-parrafos: 'Hind', sans-serif;

$font-hero: clamp(32px, 6vw, 56px);
$font-h1: clamp(28px, 5vw, 48px);
$font-h2: clamp(24px, 4vw, 40px);
$font-h3: clamp(20px, 3vw, 32px);
$font-h4: clamp(18px, 2.5vw, 24px);
$font-base: clamp(14px, 1.5vw, 18px);
$font-small: clamp(12px, 1.2vw, 14px);
```

### Colores
```scss
$calipso: #3B6F7F;
$naranja: #F16700;
$terracota: #841C03;
```

---

**Preparado para:** Desarrollo con Claude Code
**Usuario:** Implementar features siguiendo mejores prácticas
**Soporte:** Documentación en .ai-docs/
**Figma:** MCP activo y listo para usar
