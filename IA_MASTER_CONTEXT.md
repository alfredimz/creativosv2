# 🎯 CONTEXTO MAESTRO - Sistema de Colaboración IA

> **Optimizado para desarrollo en VS Code con plugins integrados**

---

## 1. 📋 Visión General del Proyecto

### Proyecto
**Creativos Espacios** - Plataforma Web de Contenedores Marítimos

### Descripción
Sitio web para venta, alquiler y transformación de contenedores marítimos. Canal principal de generación de leads y ventas con diseño profesional y UX optimizada.

### URL
https://www.creativosespacios.mx/

### Objetivos de Negocio
1. **Leads:** Captar prospectos calificados
2. **Conversión:** Facilitar compra/alquiler
3. **Marca:** Posicionamiento como líder
4. **Educación:** Casos de uso y transformaciones

### Stack Tecnológico
```
React 19.0.0 + Bootstrap 5.3.3 + SASS 1.85.1
Formik 2.4.6 + Yup 1.6.1
react-router-dom 7.3.0 + Swiper
```

Sistema de Diseño
Identidad Visual

// Paleta de Colores
$color-calipso: #3B6F7F;        // Principal - Tranquilidad
$color-naranja: #F16700;         // Secundario - Seguridad
$color-terracota: #841C03;       // Acento - Fuerza/Crecimiento
$color-negro: #000000;           // Neutro
$color-blanco: #FFFFFF;          // Neutro
$color-gris: #898989;            // Neutro
$color-gris-claro: #CDCDCD;     // Neutro

// Tipografía
$font-titulos: 'Outfit', sans-serif;
$font-parrafos: 'Hind', sans-serif;

Tono de Voz

Personalidad: Profesional inteligente que sueña con crear lo imposible
Características:

✅ Positivo y amigable
✅ Inclusivo (uso de plural)
✅ Basado en datos y números
✅ Creativo y visionario
❌ Evitar negatividad
❌ Evitar imperativos
❌ Evitar singularización

## 2. 🤖 Estrategia de Colaboración IA (VS Code Integrado)

### Filosofía del Sistema
**División de Responsabilidades IA** optimizada para VS Code:

**NUEVO FLUJO OPTIMIZADO (2025-10-12):**

```
🏗️ PASO 1: CLAUDE CODE (Estructura Base)
         ↓
   Crea TODAS las carpetas, archivos base, rutas,
   navegación, menús, footer con 5 columnas
         ↓
🎨 PASO 2: GEMINI PRO (Maquetación de Contenido)
         ↓
   Maqueta el contenido visual de cada página
   (actualiza archivos existentes creados por Claude)
         ↓
✅ PASO 3: DESARROLLADOR (Revisión y Ajustes)
         ↓
   Verifica navegación, aplica ajustes finales
```

**¿Por qué este orden?**
- ✅ Usuario puede navegar TODO el sitio desde el día 1
- ✅ Todos los enlaces funcionan (aunque contenido sea placeholder)
- ✅ Gemini solo se enfoca en maquetar contenido (no estructura)
- ✅ Desarrollador puede ir revisando mientras Gemini trabaja las fases

---

### 2.0 🏗️ CLAUDE CODE - Arquitecto de Estructura (**PASO 1 - NUEVO**)

**📍 Ubicación:** Plugin Claude Code en VS Code
**📄 Prompt:** `CLAUDE_CODE_REFACTOR.md` (nuevo enfoque)
**📁 Acceso:** Proyecto completo React

#### Responsabilidad
Crear la estructura base completa del proyecto (carpetas, archivos, rutas, navegación, footer)

#### Input
- `SITEMAP.md` con las 38 páginas del proyecto
- Estructura del footer con 5 columnas
- Rutas dinámicas (`:id`, `:categoria`, `:paso`, `:slug`)

#### Output
1. **30 carpetas nuevas** con archivos base (.jsx, .scss, index.js)
2. **App.js actualizado** con las 38 rutas configuradas
3. **Header actualizado** con todos los menús y enlaces
4. **Footer completo** con 5 columnas y TODOS los enlaces
5. **Páginas con placeholder** mostrando "Pendiente de maquetación por Gemini"

#### Proceso
```bash
1. Desarrollador copia CLAUDE_CODE_REFACTOR.md a Claude
2. Claude lee SITEMAP.md
3. Claude crea TODA la estructura base (30 páginas nuevas)
4. Desarrollador verifica navegación (todos los enlaces funcionan)
5. Sitio navegable con contenido placeholder listo para Gemini
```

**✅ Beneficio:** Usuario puede navegar TODO el sitio desde el día 1, mientras Gemini maqueta el contenido en fases.

---

### 2.1 🎨 GEMINI PRO - Maquetador Visual (**PASO 2**)

**📍 Ubicación:** Plugin Gemini en VS Code
**📄 Prompt:** `GEMINI_PRO_ANALYSIS.md`
**📁 Referencias:** `src/filesForDesing/` (PDFs de diseño y marca)

#### Responsabilidad
Maquetar el contenido visual de las páginas (actualiza archivos base creados por Claude)

#### Input
- Diseños desde Figma Plugin (VS Code)
- Referencias en `src/filesForDesing/`:
  - `SystemDesing.pdf` - Sistema de diseño
  - `BrandingManual.pdf` - Manual de marca
  - `VoiceAndToneDesing.pdf` - Tono de voz
  - PDFs específicos de secciones (Home, Quiénes Somos, etc.)

#### Output
1. **Código React** (JSX + SCSS)
2. **JSON specs mínimas** (layout, componentes, imágenes)
3. **Checklist integración**

#### Proceso Optimizado
```bash
1. Abrir diseño en Figma Plugin (VS Code)
2. Copiar prompt de GEMINI_PRO_ANALYSIS.md
3. Enviar a Gemini con referencias a filesForDesing
4. Recibir código (copiar directo al chat de Claude)
5. NO guardar archivos aún (pasa a Claude primero)
```

---

### 2.2 🔧 CLAUDE CODE - Refactorizador

**📍 Ubicación:** Plugin Claude Code en VS Code
**📄 Prompt:** `CLAUDE_CODE_REFACTOR.md`
**📁 Acceso:** Proyecto completo React

#### Responsabilidad
Refactorizar código de Gemini a código de producción optimizado

#### Input
- Código de Gemini (recibido en chat)
- Contexto del proyecto actual
- Componentes existentes (`src/components/`)
- Variables SASS (`src/styles/`)

#### Output
1. **Código refactorizado** (optimizado, con mejores prácticas)
2. **Lista de cambios** (breve)
3. **Instrucciones integración** (pasos)
4. **Aprendizajes** (para actualizar este archivo)

#### Proceso Optimizado
```bash
1. Recibir código de Gemini en chat de Claude
2. Copiar prompt de CLAUDE_CODE_REFACTOR.md
3. Pegar código de Gemini en el chat
4. Claude analiza y refactoriza
5. Aplicar cambios en archivos del proyecto
6. Actualizar IA_MASTER_CONTEXT.md con aprendizajes
```

---

### 2.3 🔄 Flujo Completo VS Code

```
┌─────────────────────────────────────────┐
│ 1. DISEÑO (Figma Plugin)                │
│    - Abrir diseño en VS Code            │
│    - Visualizar sección a maquetar      │
└─────────────────┬───────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│ 2. MAQUETACIÓN (Gemini Plugin)          │
│    - Copiar GEMINI_PRO_ANALYSIS.md      │
│    - Enviar con refs a filesForDesing   │
│    - Recibir código JSX + SCSS          │
└─────────────────┬───────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│ 3. REFACTORIZACIÓN (Claude Plugin)      │
│    - Copiar CLAUDE_CODE_REFACTOR.md     │
│    - Pegar código de Gemini             │
│    - Recibir código optimizado          │
└─────────────────┬───────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│ 4. INTEGRACIÓN (Desarrollador)          │
│    - Aplicar cambios en archivos        │
│    - Probar en navegador (npm run dev)  │
│    - Verificar responsive               │
└─────────────────┬───────────────────────┘
                  ↓
┌─────────────────────────────────────────┐
│ 5. ACTUALIZACIÓN (Desarrollador)        │
│    - Actualizar IA_MASTER_CONTEXT.md    │
│    - Guardar aprendizajes de sesión     │
│    - Marcar sección completada          │
└─────────────────────────────────────────┘
```

## 3. 🔄 Sistema de Aprendizaje Continuo

### Principio
**"El contexto crece con cada sesión - Actualízalo siempre"**

### Cuándo Actualizar (Checklist)

✅ **Después de cada sesión de Claude Code:**
- [ ] Componente nuevo → Sección 4.1
- [ ] Patrón nuevo → Sección 4.2
- [ ] Variable/mixin SASS → Sección 4.3
- [ ] Funcionalidad compleja → Sección 4.4
- [ ] Lección aprendida → Sección 4.5
- [ ] Sección completada → Sección 5

### Proceso Rápido de Actualización

```bash
1. Claude entrega código + "Aprendizajes para IA_MASTER_CONTEXT.md"
2. Copiar aprendizajes en sección correspondiente
3. Actualizar fecha de última modificación
4. Guardar archivo
5. (Próxima sesión) Mencionar: "Contexto actualizado con [X]"
```

### Comando Rápido para Próxima Sesión

**Copia esto al inicio de cada nueva sesión:**

```
📌 Contexto actualizado con: [lista cambios desde última sesión]
Lee IA_MASTER_CONTEXT.md antes de comenzar.
```

   4. Base de Conocimiento Acumulada
4.1 Componentes Existentes
Componentes de Layout

// ContenedorSeccion - Wrapper principal para secciones
// Props: children, className, fluid, id
import ContenedorSeccion from '@/components/layout/ContenedorSeccion';

// Uso:
<ContenedorSeccion id="hero" className="seccion-hero">
  {/* Contenido */}
</ContenedorSeccion>

Componentes Comunes

// BotonPrimario - Botón con estilo principal (Naranja)
// Props: children, onClick, type, disabled, aria-label, className
import BotonPrimario from '@/components/common/BotonPrimario';

// BotonSecundario - Botón con estilo secundario (Calipso)
// Props: children, onClick, type, disabled, aria-label, className
import BotonSecundario from '@/components/common/BotonSecundario';

// BotonTerciario - Botón con estilo terciario (Outline)
// Props: children, onClick, type, disabled, aria-label, className
import BotonTerciario from '@/components/common/BotonTerciario';

NOTA: Esta sección se irá poblando a medida que se creen componentes. Cada entrada debe incluir:

Nombre del componente
Descripción breve
Props disponibles (con tipos)
Ejemplo de uso
Ubicación del archivo

4.2 Patrones Establecidos
Patrón de Estructura de Componente

NombreComponente/
├── NombreComponente.jsx       # Lógica del componente
├── NombreComponente.module.scss  # Estilos específicos
└── index.js                    # Re-exportación limpia

Patrón de Nomenclatura

Componentes: PascalCase español (TarjetaProducto)
Archivos: Igual al componente (TarjetaProducto.jsx)
Clases CSS: kebab-case BEM (tarjeta-producto__titulo)
Variables: camelCase (precioTotal, listaProductos)
Constantes: UPPER_SNAKE_CASE (TIPOS_CONTENEDOR)

Patrón de Imports

// 1. Librerías React
import React, { useState, useEffect } from 'react';

// 2. Librerías UI
import { Container, Row, Col } from 'react-bootstrap';

// 3. Librerías de terceros
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// 4. Componentes propios
import BotonPrimario from '../common/BotonPrimario';

// 5. Hooks personalizados
import useFetchProductos from '@/hooks/useFetchProductos';

// 6. Utilidades y constantes
import { formatearPrecio } from '@/utils/formato';
import { TIPOS_CONTENEDOR } from '@/constants/productos';

// 7. Estilos
import styles from './Componente.module.scss';

Patrón de Responsive Design

// Mobile First - Estilos base para móvil
.componente {
  font-size: 1rem;
  padding: 1rem;
}

// Tablet y superior
@include respond-to(md) {
  .componente {
    font-size: 1.125rem;
    padding: 1.5rem;
  }
}

// Desktop y superior
@include respond-to(lg) {
  .componente {
    font-size: 1.25rem;
    padding: 2rem;
  }
}

NOTA: Documentar aquí nuevos patrones descubiertos durante el desarrollo.

4.3 Variables y Mixins SASS
Variables de Color (Actuales)

// _variables.scss

// Colores de Marca
$color-calipso: #3B6F7F;        // Principal - Tranquilidad
$color-naranja: #F16700;         // Secundario - Seguridad  
$color-terracota: #841C03;       // Acento - Fuerza/Crecimiento

// Neutros
$color-negro: #000000;
$color-blanco: #FFFFFF;
$color-gris: #898989;
$color-gris-claro: #CDCDCD;

// Tipografía
$font-titulos: 'Outfit', sans-serif;
$font-parrafos: 'Hind', sans-serif;

// Pesos de Fuente - Outfit
$outfit-light: 300;
$outfit-regular: 400;
$outfit-medium: 500;
$outfit-semibold: 600;
$outfit-bold: 700;
$outfit-extrabold: 800;
$outfit-black: 900;

// Pesos de Fuente - Hind
$hind-light: 300;
$hind-regular: 400;
$hind-medium: 500;
$hind-semibold: 600;
$hind-bold: 700;

// Breakpoints (Bootstrap)
$breakpoint-xs: 0;
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
$breakpoint-xxl: 1400px;

// Espaciado Base
$spacing-xs: 0.5rem;   // 8px
$spacing-sm: 1rem;     // 16px
$spacing-md: 1.5rem;   // 24px
$spacing-lg: 2rem;     // 32px
$spacing-xl: 3rem;     // 48px
$spacing-xxl: 4rem;    // 64px

// Bordes
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 12px;
$border-radius-xl: 16px;

// Sombras
$shadow-sm: 0 2px 4px rgba($color-negro, 0.1);
$shadow-md: 0 4px 8px rgba($color-negro, 0.15);
$shadow-lg: 0 10px 25px rgba($color-negro, 0.2);

// Transiciones
$transition-fast: 0.15s ease;
$transition-normal: 0.3s ease;
$transition-slow: 0.5s ease;

Mixins Disponibles

// _mixins.scss

// Responsive Design
@mixin respond-to($breakpoint) {
  @if $breakpoint == xs {
    @media (max-width: #{$breakpoint-sm - 1}) { @content; }
  }
  @if $breakpoint == sm {
    @media (min-width: $breakpoint-sm) { @content; }
  }
  @if $breakpoint == md {
    @media (min-width: $breakpoint-md) { @content; }
  }
  @if $breakpoint == lg {
    @media (min-width: $breakpoint-lg) { @content; }
  }
  @if $breakpoint == xl {
    @media (min-width: $breakpoint-xl) { @content; }
  }
  @if $breakpoint == xxl {
    @media (min-width: $breakpoint-xxl) { @content; }
  }
}

// Flexbox Centering
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Truncate Text
@mixin truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// Multi-line Truncate
@mixin truncate-lines($lines: 2) {
  display: -webkit-box;
  -webkit-line-clamp: $lines;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

// Aspect Ratio
@mixin aspect-ratio($width, $height) {
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc(($height / $width) * 100%);
  }
  > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

NOTA: Agregar aquí nuevas variables o mixins cuando se definan.

4.4 Funcionalidades Implementadas
Formularios con Formik/Yup
Esquema Base de Cotización:

// Basado en cotizador.pdf
import * as Yup from 'yup';

export const schemaCotizacion = Yup.object().shape({
  // Información Personal
  nombre: Yup.string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres')
    .required('El nombre es obligatorio'),
  
  email: Yup.string()
    .email('Formato de email inválido')
    .required('El email es obligatorio'),
  
  telefono: Yup.string()
    .matches(/^[0-9]{10}$/, 'Debe contener 10 dígitos')
    .required('El teléfono es obligatorio'),
  
  // Información del Proyecto
  tipoContenedor: Yup.string()
    .oneOf(['20-estandar', '40-estandar', '40-high-cube', 'refrigerado'], 
           'Seleccione un tipo válido')
    .required('Seleccione el tipo de contenedor'),
  
  cantidad: Yup.number()
    .min(1, 'La cantidad mínima es 1')
    .max(100, 'Para cantidades mayores, contacte directamente')
    .required('Especifique la cantidad'),
  
  uso: Yup.string()
    .oneOf(['vivienda', 'oficina', 'comercio', 'almacen', 'otro'],
           'Seleccione un uso válido')
    .required('Seleccione el uso previsto'),
  
  // Ubicación
  ciudad: Yup.string()
    .required('La ciudad es obligatoria'),
  
  codigoPostal: Yup.string()
    .matches(/^[0-9]{5}$/, 'Código postal inválido (5 dígitos)')
    .required('El código postal es obligatorio'),
  
  // Información Adicional
  presupuesto: Yup.string()
    .oneOf(['menos-100k', '100k-300k', '300k-500k', 'mas-500k'],
           'Seleccione un rango de presupuesto'),
  
  mensajeAdicional: Yup.string()
    .max(500, 'El mensaje no puede exceder 500 caracteres')
});

NOTA: Documentar aquí otras funcionalidades complejas implementadas.

4.5 Lecciones Aprendidas
🔴 Problemas Encontrados y Soluciones
[Espacio para documentar problemas y sus soluciones]
Ejemplo de formato:

#### Problema: Estilos inline de Gemini causan inconsistencia
**Fecha:** 2025-01-XX
**Descripción:** El código generado por Gemini incluye estilos inline que 
no usan las variables del sistema de diseño.
**Solución:** Siempre migrar estilos a archivos SCSS module usando las 
variables definidas en _variables.scss.
**Patrón a seguir:** Ver sección 4.2 "Patrón de Estructura de Componente"

✅ Mejores Prácticas Descubiertas
[Espacio para documentar mejores prácticas]
Ejemplo de formato:

#### Práctica: Uso de React.memo para componentes de tarjeta
**Fecha:** 2025-01-XX
**Descripción:** Los componentes de tarjeta (TarjetaProducto, TarjetaServicio) 
se re-renderizan innecesariamente cuando cambia el estado del padre.
**Implementación:** Envolver componentes de tarjeta con React.memo y usar 
useCallback para funciones pasadas como props.
**Beneficio:** Reducción del 40% en re-renders innecesarios.

5. Estado del Proyecto
### Páginas del Sitio

#### ✅ COMPLETADAS (8/35 - 23%)
| # | Ruta | Nombre | Archivo |
|---|------|--------|---------|
| 1 | `/` | Home | `Home/Home.jsx` ⚠️ Refactorizar |
| 2 | `/quienes-somos` | Quiénes Somos | `Conocenos/QuienesSomos/QuienesSomos.jsx` |
| 3 | `/mision-vision` | Misión y Visión | `Conocenos/MisionVision/MisionVision.jsx` |
| 4 | `/nuestro-equipo` | Nuestro Equipo | `Conocenos/NuestroEquipo/NuestroEquipo.jsx` |
| 5 | `/historia` | Nuestra Historia | `Conocenos/Historia/Historia.jsx` |
| 6 | `/valores` | Valores | `Conocenos/Valores/Valores.jsx` |
| 7 | `/clientes` | Clientes | `Clientes/Clientes.jsx` |
| 8 | `/casos-exito` | Casos de Éxito | `Conocenos/CasosExito/CasosExito.jsx` ⚠️ Sin ruta |

---

#### 🔴 FASE 1 - CRÍTICAS (11 páginas)

**Sprint 1: Información y Catálogos (5)**
- ❌ Presentación Empresarial (`/presentacion-empresarial`) - PDF: `Presentación.pdf`
- ❌ Tipos Contenedores Listado (`/tipos-contenedores`) - PDF: `Tipos de contenedores.pdf`
- ❌ Detalle Tipo Contenedor (`/tipos-contenedores/:id`) - PDF: `Detalle - Tipos de contenedores.pdf`
- ❌ Fichas Técnicas (`/fichas-tecnicas`) - PDF: `Fichas técnicas.pdf` + `ficha_tecnica.pdf`
- ❌ Catálogo General (`/catalogo`) - Todos productos/servicios con link a detalle

**Sprint 2: Servicios y Formularios (6)**
- ❌ Servicios (`/servicios`) - PDF: `servicios.txt`
- ❌ Beneficios (`/beneficios`) - Diseño custom
- ❌ Cotizador Venta (`/cotizador-venta`) - PDF: `cotizador_creativos.pdf` + `antiguaPaginaDeCreativosEspacios-Cotizacion.pdf`
- ❌ Cotizador Renta (`/cotizador-renta`) - PDF: `cotizador_creativos-renta.pdf` + `antiguaPaginaDeCreativosEspacios-Cotizacion.pdf`
- ❌ Contacto (`/contacto`) - Formik + Yup + Google Maps
- ❌ FAQ (`/faq`) - Preguntas frecuentes con acordeón

---

#### 🟡 FASE 2 - IMPORTANTES (12 páginas)

**Sprint 3: Construcción y Servicios (4)**
- ❌ Construcción (`/construccion`) - Proceso paso a paso - PDF: `servicios.txt` + `antiguaPaginaDeCreativosEspacios-Cotizacion.pdf`
- ❌ Servicios Adicionales (`/servicios-adicionales`) - Servicios complementarios
- ❌ Detalle Servicio (`/servicios/:servicio`) - Página individual por servicio
- ❌ Detalle Paso Construcción (`/construccion/:paso`) - Detalle de cada paso

**Sprint 4: Multimedia y Ubicaciones (4)**
- ❌ Aliados y Patrocinadores (`/aliados`) - Similar a Clientes
- ❌ Videos (`/videos`) - Galería YouTube
- ❌ Nuestra Ubicación (`/ubicacion`) - Mapa + dirección
- ❌ Nuestros Patios (`/patios-contenedores`) - Locaciones físicas

**Sprint 5: Herramientas y Detalles (4 + 2 refactorizaciones)**
- ❌ Perfilador Cliente (`/perfilador-cliente`) - Quiz interactivo
- ❌ Catálogo por Categoría (`/catalogo/:categoria`) - Vista filtrada
- ❌ Buzón Quejas (`/quejas-sugerencias`) - Formulario simple
- ⚠️ Refactorizar Home.jsx - Eliminar estilos inline
- ⚠️ Actualizar App.js - Agregar TODAS las rutas (35 páginas)

---

#### 🟢 FASE 3 - AVANZADAS (4 páginas)

**Sprint 6: Funcionalidades Complejas**
- ❌ Personaliza Contenedor (`/personalizar-contenedor`) - Configurador 3D (🔴 MUY ALTA complejidad)
- ❌ Blog (`/blog`) - Sistema completo con CMS (🔴 ALTA complejidad)
- ❌ Artículo Blog (`/blog/:slug`) - Página individual artículo
- ❌ Recorrido Virtual (`/recorrido-virtual`) - Tour 360° (🔴 MUY ALTA complejidad)
- ❌ Vista Previa Redes Sociales - Componente global (Share buttons)

---

> **📊 Ver sitemap detallado completo:** `SITEMAP.md` en raíz del proyecto
> **Total Páginas:** 35 | **Completadas:** 8 (23%) | **Pendientes:** 27 (77%)

Componentes Globales
✅ Completados

 Header / Navbar

 Navegación responsive
 Menú móvil (hamburguesa)
 Logo
 Botón CTA principal


 Footer

 Links de navegación
 Redes sociales
 Información de contacto
 Copyright



🚧 En Progreso
[Marcar aquí componentes en desarrollo]
📋 Pendientes
[Marcar aquí componentes pendientes]

## 6. 🚀 Flujo de Trabajo VS Code (Optimizado)

### 🆕 Nueva Sección desde Figma

**PASO 1: Maquetación (Gemini Plugin)**
```bash
1. Abrir Figma Plugin en VS Code
2. Seleccionar sección a maquetar
3. Copiar GEMINI_PRO_ANALYSIS.md en chat Gemini
4. Enviar (Gemini referencia filesForDesing automáticamente)
5. Copiar código JSX + SCSS generado
```

**PASO 2: Refactorización (Claude Plugin)**
```bash
1. Abrir Claude Code en VS Code
2. Copiar CLAUDE_CODE_REFACTOR.md en chat Claude
3. Pegar código de Gemini
4. Claude refactoriza y optimiza
5. Recibir código final + aprendizajes
```

**PASO 3: Integración (Desarrollador)**
```bash
1. Crear archivos en src/pages/[Seccion]/
2. Copiar código refactorizado
3. npm run dev (verificar compilación)
4. Probar responsive: 375px | 768px | 1200px
5. Verificar accesibilidad
```

**PASO 4: Actualización (Desarrollador)**
```bash
1. Abrir IA_MASTER_CONTEXT.md
2. Pegar aprendizajes de Claude en secciones:
   - 4.1 Componentes
   - 4.2 Patrones
   - 4.5 Lecciones
3. Marcar sección completada en Sección 5
4. Guardar y commitear
```

---

### 🔧 Refactorizar Código Existente

**PASO 1: Análisis**
```bash
1. Identificar archivo/componente a mejorar
2. Listar problemas específicos
3. Definir objetivo de refactorización
```

**PASO 2: Refactorización (Claude)**
```bash
1. Abrir Claude Code
2. Copiar CLAUDE_CODE_REFACTOR.md
3. Pegar código actual + objetivo
4. Recibir código optimizado
```

**PASO 3: Testing**
```bash
1. Aplicar cambios
2. npm run dev
3. Verificar funcionalidad
4. Probar responsive
5. Validar accesibilidad
```

**PASO 4: Documentación**
```bash
1. Actualizar JSDoc
2. Actualizar IA_MASTER_CONTEXT.md
3. Commit con mensaje descriptivo
```

7. Checklist de Calidad
Antes de Considerar un Componente "Completo"
✅ Código

 Componente sigue convención de nomenclatura (PascalCase español)
 Props documentadas con JSDoc o PropTypes
 Imports organizados según patrón establecido
 Sin estilos inline (todo en SCSS)
 Usa variables del sistema de diseño
 Optimizado con React.memo (si aplica)
 useCallback/useMemo para funciones/cálculos costosos

✅ Estilos

 Archivo SCSS module creado
 Nomenclatura BEM seguida
 Variables SASS usadas (no valores hardcodeados)
 Responsive design implementado (mobile-first)
 Estados hover/focus/active definidos
 Transiciones suaves aplicadas

✅ Accesibilidad

 Atributos aria-label en elementos interactivos
 Atributos alt en todas las imágenes
 Labels asociados a inputs de formulario
 Contraste de color adecuado (mínimo AA)
 Navegación por teclado funcional
 Elementos semánticos HTML5 usados

✅ Performance

 Imágenes optimizadas (WebP preferido)
 Lazy loading implementado (si aplica)
 No hay re-renders innecesarios
 Bundle size considerado

✅ Formularios (si aplica)

 Formik implementado para manejo de estado
 Yup implementado para validaciones
 Mensajes de error claros y en español
 Estados de carga/éxito/error manejados
 Campos requeridos marcados visualmente

✅ Documentación

 Componente agregado a sección 4.1 de AI_MASTER_CONTEXT.md
 Ejemplo de uso documentado
 Props listadas con tipos
 Casos especiales documentados

 8. Comandos y Scripts Útiles
Desarrollo

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview de build de producción
npm run preview

# Linter
npm run lint

# Formatear código
npm run format

Gestión de Dependencias

# Instalar dependencia
npm install [paquete]

# Instalar dependencia de desarrollo
npm install -D [paquete]

# Actualizar dependencias
npm update

# Verificar dependencias desactualizadas
npm outdated

9. Recursos y Referencias
Documentación Oficial

React: https://react.dev/
Bootstrap: https://getbootstrap.com/docs/5.3/
React Bootstrap: https://react-bootstrap.github.io/
Formik: https://formik.org/docs/overview
Yup: https://github.com/jquense/yup
React Router: https://reactrouter.com/
Swiper: https://swiperjs.com/react
SASS: https://sass-lang.com/documentation/

Herramientas de Diseño

Figma: https://www.figma.com/
Google Fonts (Outfit): https://fonts.google.com/specimen/Outfit
Google Fonts (Hind): https://fonts.google.com/specimen/Hind
Google Material Icons: https://fonts.google.com/icons

Archivos de Referencia del Proyecto

somos.txt - Contenido corporativo
servicios.txt - Descripción de servicios
formato-para-mensaje.txt - Estructura de mensajes
cotizador.pdf - Campos del formulario de cotización
ficha_tecnica.pdf - Especificaciones de contenedores
SystemDesing.pdf - Manual de sistema de diseño
Tono_de_Voz.pdf - Guía de tono de comunicación

10. Contacto y Soporte
Equipo del Proyecto

Desarrollador Principal: [Tu nombre]
Email: [Tu email]

Soporte de Herramientas IA

Gemini Pro: Análisis visual y generación de código base
Claude Code (VS Code): Refactorización y optimización

Repositorio

URL: [URL del repositorio Git si aplica]
Branch Principal: main
Branch de Desarrollo: develop

11. Notas Finales
Principios a Recordar

Consistencia sobre Creatividad: Prioriza mantener patrones establecidos sobre crear soluciones nuevas
Documentar mientras Construyes: No dejes documentación para después
Mobile First, Always: Todo diseño parte de móvil hacia desktop
Accesibilidad no es Opcional: Es un requisito desde el inicio
El Usuario es el Rey: Todas las decisiones priorizan la experiencia del usuario

Filosofía de Desarrollo

"Construimos espacios digitales con la misma creatividad y profesionalismo con la que Creativos Espacios transforma contenedores en sueños habitables."

## 📅 Historial de Actualizaciones

### Versión 2.0.0 - 2025-10-11 ✨ OPTIMIZACIÓN VS CODE
- ✅ Reescritura completa para VS Code con plugins integrados
- ✅ Optimización de prompts para ahorro de tokens
- ✅ Referencia a `src/filesForDesing/` para manuales
- ✅ Flujo integrado: Figma Plugin → Gemini → Claude
- ✅ Eliminación de pasos redundantes
- ✅ Sistema de aprendizaje continuo simplificado

### Versión 1.0.0 - [Fecha Inicial]
- ✅ Creación del documento maestro
- ✅ Definición de estrategia de colaboración IA
- ✅ Establecimiento de estructura base del proyecto
- ✅ Documentación de sistema de diseño
- ✅ Definición de flujos de trabajo

---

## 📝 Instrucciones de Uso Rápido

### Ubicación de Archivos
```
proyecto-raiz/
├── GEMINI_PRO_ANALYSIS.md      # Prompt para Gemini
├── CLAUDE_CODE_REFACTOR.md     # Prompt para Claude
├── IA_MASTER_CONTEXT.md        # Este archivo (contexto maestro)
└── src/
    └── filesForDesing/         # PDFs de diseño y marca
```

### Flujo Diario (3 pasos)

**1. Maquetación (Gemini)**
```bash
- Copiar GEMINI_PRO_ANALYSIS.md → Gemini Plugin
- Enviar con diseño de Figma
- Recibir código JSX + SCSS
```

**2. Refactorización (Claude)**
```bash
- Copiar CLAUDE_CODE_REFACTOR.md → Claude Plugin
- Pegar código de Gemini
- Recibir código optimizado + aprendizajes
```

**3. Actualización (Desarrollador)**
```bash
- Aplicar código en proyecto
- Actualizar IA_MASTER_CONTEXT.md
- Guardar aprendizajes de sesión
```

### Inicio de Nueva Sesión

**Comando para Claude:**
```
📌 Contexto actualizado con: [cambios desde última sesión]
Lee IA_MASTER_CONTEXT.md antes de comenzar.
Nueva tarea: [describir tarea]
```

---

## 💡 Tips de Optimización de Tokens

1. **Gemini:** No repetir sistema de diseño, usar referencias a filesForDesing
2. **Claude:** Solo mostrar código modificado, no todo el código
3. **Desarrollador:** Actualizar solo secciones relevantes del contexto
4. **Ambos:** Respuestas concisas, código limpio sin comentarios obvios

---

**🎯 Este documento es la fuente única de verdad para la colaboración IA**
**🔄 Actualízalo después de cada sesión de Claude Code**