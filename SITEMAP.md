# 🗺️ SITEMAP - CREATIVOS ESPACIOS

**Actualizado:** 2025-10-12 (18:45) - **VERSIÓN 2 - AJUSTADA CON FOOTER**
**Progreso Total:** 8/38 páginas (21%)

---

## 📊 RESUMEN EJECUTIVO

| Estado | Cantidad | Porcentaje |
|--------|----------|------------|
| ✅ Completadas | 8 | 21% |
| 🚧 En Desarrollo | 0 | 0% |
| 🔴 Fase 1 (Críticas) | 15 | 39% |
| 🟡 Fase 2 (Importantes) | 11 | 29% |
| 🟢 Fase 3 (Avanzadas) | 4 | 11% |
| **TOTAL** | **38** | **100%** |

### 🆕 **CAMBIOS EN ESTA VERSIÓN:**
- ➕ Agregadas 4 páginas individuales de servicios (Venta, Alquiler, Transformación + General)
- ➕ Agregada página de Redes Sociales con widgets sociales
- 📝 Aclaración: "Presentación" (footer) = `/presentacion-empresarial`
- 📝 Aclaración: "Creativos Espacios" (footer) = `/quienes-somos`
- **Total páginas:** 35 → 38

---

## 🏠 NAVEGACIÓN PRINCIPAL

### ✅ **COMPLETADAS (8 páginas)**

| Ruta | Nombre | Archivo | Footer | Observaciones |
|------|--------|---------|--------|---------------|
| `/` | Home | `src/pages/Home/Home.jsx` | - | ⚠️ Refactorización pendiente |
| `/quienes-somos` | Quiénes Somos | `src/pages/Conocenos/QuienesSomos/QuienesSomos.jsx` | Conócenos > Creativos Espacios | ✅ Completo |
| `/mision-vision` | Misión y Visión | `src/pages/Conocenos/MisionVision/MisionVision.jsx` | - | ✅ Completo |
| `/nuestro-equipo` | Nuestro Equipo | `src/pages/Conocenos/NuestroEquipo/NuestroEquipo.jsx` | Conócenos > Nuestro equipo | ✅ Completo |
| `/historia` | Nuestra Historia | `src/pages/Conocenos/Historia/Historia.jsx` | Conócenos > Historia | ✅ Completo |
| `/valores` | Valores | `src/pages/Conocenos/Valores/Valores.jsx` | Conócenos > Valores | ✅ Completo |
| `/clientes` | Clientes | `src/pages/Clientes/Clientes.jsx` | Conócenos > Clientes | ✅ Completo |
| `/casos-exito` | Casos de Éxito | `src/pages/Conocenos/CasosExito/CasosExito.jsx` | - | ⚠️ Sin ruta en App.js |

---

## 🔴 FASE 1 - CRÍTICAS (15 páginas)

### Sprint 1: Información y Catálogos (5 páginas)

| # | Ruta | Nombre | Archivo a Crear | Footer | PDF Diseño | Prioridad |
|---|------|--------|----------------|--------|------------|-----------|
| 1 | `/presentacion-empresarial` | Presentación Empresarial | `src/pages/PresentacionEmpresarial/PresentacionEmpresarial.jsx` | Productos > Presentación | `Presentación.pdf` | 🔴🔴🔴 |
| 2 | `/tipos-contenedores` | Tipos de Contenedores | `src/pages/TiposContenedores/TiposContenedores.jsx` | Productos > Tipos de contenedores | `Tipos de contenedores.pdf` | 🔴🔴🔴 |
| 3 | `/tipos-contenedores/:id` | Detalle Tipo Contenedor | `src/pages/TiposContenedores/DetalleContenedor.jsx` | - | `Detalle - Tipos de contenedores.pdf` | 🔴🔴🔴 |
| 4 | `/fichas-tecnicas` | Fichas Técnicas | `src/pages/FichasTecnicas/FichasTecnicas.jsx` | Productos > Fichas técnicas | `Fichas técnicas.pdf` + `ficha_tecnica.pdf` | 🔴🔴🔴 |
| 5 | `/catalogo` | Catálogo General | `src/pages/Catalogo/Catalogo.jsx` | - | Diseño custom | 🔴🔴🔴 |

### Sprint 2: Servicios (5 páginas) 🆕

| # | Ruta | Nombre | Archivo a Crear | Footer | PDF Diseño | Prioridad |
|---|------|--------|----------------|--------|------------|-----------|
| 6 | `/servicios` | Servicios (General) | `src/pages/Servicios/Servicios.jsx` | Servicios > Ver todos | `servicios.txt` | 🔴🔴🔴 |
| 7 | `/servicios/venta` | Venta de Contenedores | `src/pages/Servicios/Venta.jsx` | Servicios > Venta | `servicios.txt` | 🔴🔴🔴 |
| 8 | `/servicios/alquiler` | Alquiler de Contenedores | `src/pages/Servicios/Alquiler.jsx` | Servicios > Alquiler | `servicios.txt` | 🔴🔴🔴 |
| 9 | `/servicios/transformacion` | Transformación | `src/pages/Servicios/Transformacion.jsx` | Servicios > Transformación | `servicios.txt` | 🔴🔴🔴 |
| 10 | `/beneficios` | Beneficios | `src/pages/Beneficios/Beneficios.jsx` | - | Diseño custom | 🔴🔴 |

### Sprint 3: Formularios y FAQ (5 páginas)

| # | Ruta | Nombre | Archivo a Crear | Footer | Tech Stack | Prioridad |
|---|------|--------|----------------|--------|------------|-----------|
| 11 | `/cotizador-venta` | Cotizador Venta | `src/pages/Cotizador/CotizadorVenta.jsx` | Productos > Cotizador | Formik + Yup | 🔴🔴🔴 |
| 12 | `/cotizador-renta` | Cotizador Renta | `src/pages/Cotizador/CotizadorRenta.jsx` | Productos > Cotizador | Formik + Yup | 🔴🔴🔴 |
| 13 | `/contacto` | Formulario Contacto | `src/pages/Contacto/Contacto.jsx` | Contacto > Formulario | Formik + Yup + Maps | 🔴🔴🔴 |
| 14 | `/faq` | Preguntas Frecuentes | `src/pages/FAQ/FAQ.jsx` | Recursos > Preguntas frecuentes | React + Acordeón | 🔴🔴 |
| 15 | `/redes-sociales` | Redes Sociales | `src/pages/RedesSociales/RedesSociales.jsx` | Contacto > Redes sociales | React + Social Widgets | 🔴🔴 |

**Redes a integrar:**
- Instagram: https://www.instagram.com/creativosespaciosmx
- YouTube: https://www.youtube.com/channel/UCEAQ-yq9sq0C-KCX8-aRyZA
- X (Twitter): https://x.com/creaespaciosmx
- TikTok: https://www.tiktok.com/@creativosespaciosmx

---

## 🟡 FASE 2 - IMPORTANTES (11 páginas)

### Sprint 4: Construcción y Servicios Adicionales (3 páginas)

| # | Ruta | Nombre | Archivo a Crear | Footer | Descripción |
|---|------|--------|----------------|--------|-------------|
| 16 | `/construccion` | Construcción | `src/pages/Construccion/Construccion.jsx` | Servicios > Construcción | Proceso paso a paso |
| 17 | `/servicios-adicionales` | Servicios Adicionales | `src/pages/ServiciosAdicionales/ServiciosAdicionales.jsx` | Servicios > Servicios adicionales | Servicios complementarios |
| 18 | `/construccion/:paso` | Detalle Paso | `src/pages/Construccion/DetallePaso.jsx` | - | Detalle de cada paso |

### Sprint 5: Multimedia y Ubicaciones (4 páginas)

| # | Ruta | Nombre | Archivo a Crear | Footer | Tech Stack |
|---|------|--------|----------------|--------|------------|
| 19 | `/aliados` | Aliados | `src/pages/Aliados/Aliados.jsx` | Contacto > Aliados | React + Grid |
| 20 | `/videos` | Videos | `src/pages/Videos/Videos.jsx` | Recursos > Videos | React + YouTube API |
| 21 | `/ubicacion` | Nuestra Ubicación | `src/pages/Ubicacion/Ubicacion.jsx` | Conócenos > Nuestra ubicación | React + Google Maps |
| 22 | `/patios-contenedores` | Nuestros Patios | `src/pages/PatiosContenedores/PatiosContenedores.jsx` | Conócenos > Patios | React + Google Maps |

### Sprint 6: Herramientas y Detalles (4 páginas + 2 refactorizaciones)

| # | Ruta/Archivo | Nombre | Footer | Tech Stack |
|---|-------------|--------|--------|------------|
| 23 | `/perfilador-cliente` | Perfilador | Recursos > Perfilador del cliente | React + Multi-step |
| 24 | `/catalogo/:categoria` | Catálogo Categoría | - | React Router |
| 25 | `/quejas-sugerencias` | Buzón Quejas | Contacto > Buzón quejas | Formik + Yup |
| 26 | ⚠️ `src/pages/Home/Home.jsx` | Refactorizar Home | - | SCSS + Variables |
| 27 | ⚠️ `src/App.js` | Actualizar Rutas | - | 38 rutas |

---

## 🟢 FASE 3 - AVANZADAS (4 páginas)

### Sprint 7: Funcionalidades Complejas

| # | Ruta | Nombre | Footer | Complejidad | Descripción |
|---|------|--------|--------|-------------|-------------|
| 28 | `/personalizar-contenedor` | Personaliza | Productos > Personaliza tu contenedor | 🔴 MUY ALTA | Configurador 3D |
| 29 | `/blog` | Blog | Recursos > Blog | 🔴 ALTA | Sistema CMS |
| 30 | `/blog/:slug` | Artículo Blog | - | 🔴 ALTA | Artículo individual |
| 31 | `/recorrido-virtual` | Recorrido Virtual | Recursos > Recorrido virtual | 🔴 MUY ALTA | Tour 360° |

### Componente Global

| # | Componente | Ubicación | Descripción |
|---|-----------|-----------|-------------|
| 32 | Vista Previa Social | `src/components/SocialShare/` | Share buttons |

---

## 🗂️ ESTRUCTURA DEL FOOTER (5 COLUMNAS)

### 1. 📦 CONTENEDORES / PRODUCTOS
- [Tipos de contenedores](#) → `/tipos-contenedores`
- [Fichas técnicas](#) → `/fichas-tecnicas`
- [Presentación](#) → `/presentacion-empresarial`
- [Personaliza tu contenedor](#) → `/personalizar-contenedor` (Fase 3)
- [Cotizador](#) → `/cotizador-venta` o `/cotizador-renta`

### 2. 🔧 SERVICIOS / CONSTRUCCIÓN
- [Ver todos los servicios](#) → `/servicios`
- [Venta de contenedores](#) → `/servicios/venta`
- [Alquiler de contenedores](#) → `/servicios/alquiler`
- [Construcción](#) → `/construccion`
- [Transformación de contenedores](#) → `/servicios/transformacion`
- [Servicios adicionales](#) → `/servicios-adicionales`

### 3. 🏢 CONÓCENOS / NOSOTROS
- [Creativos Espacios](#) → `/quienes-somos`
- [Nuestro equipo](#) → `/nuestro-equipo`
- [Nuestra ubicación](#) → `/ubicacion`
- [Patios](#) → `/patios-contenedores`
- [Clientes](#) → `/clientes`
- [Valores](#) → `/valores`
- [Historia](#) → `/historia`

### 4. 📚 RECURSOS / AYUDA
- [Blog](#) → `/blog` (Fase 3)
- [Preguntas frecuentes](#) → `/faq`
- [Videos](#) → `/videos`
- [Recorrido virtual](#) → `/recorrido-virtual` (Fase 3)
- [Perfilador del cliente](#) → `/perfilador-cliente`

### 5. 📞 CONTACTO
- [Formulario de contacto](#) → `/contacto`
- [Buzón de quejas y sugerencias](#) → `/quejas-sugerencias`
- [Aliados](#) → `/aliados`
- [Redes sociales](#) → `/redes-sociales`

---

## 📁 ESTRUCTURA DE CARPETAS ACTUALIZADA

```
src/
├── pages/
│   ├── Home/
│   ├── PresentacionEmpresarial/         # NUEVO - Fase 1
│   ├── Servicios/                       # NUEVO - Fase 1
│   │   ├── Servicios.jsx                # General (listado)
│   │   ├── Venta.jsx                    # 🆕 Individual
│   │   ├── Alquiler.jsx                 # 🆕 Individual
│   │   └── Transformacion.jsx           # 🆕 Individual
│   ├── ServiciosAdicionales/            # NUEVO - Fase 2
│   ├── TiposContenedores/               # NUEVO - Fase 1
│   │   ├── TiposContenedores.jsx
│   │   └── DetalleContenedor.jsx
│   ├── FichasTecnicas/                  # NUEVO - Fase 1
│   ├── Catalogo/                        # NUEVO - Fase 1
│   │   ├── Catalogo.jsx
│   │   └── CatalogoCategoria.jsx        # Fase 2
│   ├── Beneficios/                      # NUEVO - Fase 1
│   ├── Construccion/                    # NUEVO - Fase 2
│   │   ├── Construccion.jsx
│   │   └── DetallePaso.jsx
│   ├── Cotizador/                       # NUEVO - Fase 1
│   │   ├── CotizadorVenta.jsx
│   │   └── CotizadorRenta.jsx
│   ├── Contacto/                        # NUEVO - Fase 1
│   ├── FAQ/                             # NUEVO - Fase 1
│   ├── RedesSociales/                   # 🆕 NUEVO - Fase 1
│   ├── Aliados/                         # NUEVO - Fase 2
│   ├── Videos/                          # NUEVO - Fase 2
│   ├── Ubicacion/                       # NUEVO - Fase 2
│   ├── PatiosContenedores/              # NUEVO - Fase 2
│   ├── QuejasSugerencias/               # NUEVO - Fase 2
│   ├── PerfiladorCliente/               # NUEVO - Fase 2
│   ├── PersonalizarContenedor/          # NUEVO - Fase 3
│   ├── Blog/                            # NUEVO - Fase 3
│   │   ├── Blog.jsx
│   │   └── ArticuloBlog.jsx
│   ├── RecorridoVirtual/                # NUEVO - Fase 3
│   └── Conocenos/                       # EXISTENTE
│       ├── QuienesSomos/
│       ├── MisionVision/
│       ├── Historia/
│       ├── Valores/
│       ├── NuestroEquipo/
│       └── CasosExito/
└── components/
    ├── Header/
    ├── Footer/                          # Actualizar con 5 columnas
    └── SocialShare/                     # NUEVO - Fase 3
```

---

## 📊 MÉTRICAS ACTUALIZADAS

### Por Fase
- ✅ **Completadas:** 8 páginas (21%)
- 🔴 **Fase 1:** 15 páginas (39%)
- 🟡 **Fase 2:** 11 páginas (29%)
- 🟢 **Fase 3:** 4 páginas (11%)

### Por Tipo
- 📄 **Páginas de Contenido:** 21
- 📝 **Formularios:** 6
- 🔧 **Herramientas:** 3
- 🎨 **Páginas de Detalle:** 6
- 🔄 **Refactorizaciones:** 2

### Total
- **38 páginas/secciones** (antes: 35)
- **32 componentes nuevos principales**
- **8 ya completadas (21%)**
- **30 pendientes (79%)**

---

## 🔗 REFERENCIAS DE DISEÑO

Todos los PDFs están en: `src/filesForDesing/`

| PDF | Páginas Relacionadas |
|-----|---------------------|
| `Presentación.pdf` | Presentación Empresarial |
| `Tipos de contenedores.pdf` | Tipos de Contenedores (listado) |
| `Detalle - Tipos de contenedores.pdf` | Detalle Tipo de Contenedor |
| `Fichas técnicas.pdf` + `ficha_tecnica.pdf` | Fichas Técnicas |
| `servicios.txt` | Servicios (General, Venta, Alquiler, Transformación, Adicionales, Construcción) |
| `cotizador_creativos.pdf` | Cotizador Venta |
| `cotizador_creativos-renta.pdf` | Cotizador Renta |
| `antiguaPaginaDeCreativosEspacios-Cotizacion.pdf` | Cotizadores, Construcción |
| `SystemDesing.pdf` | Todas (sistema de diseño) |
| `BrandingManual.pdf` | Todas (marca) |
| `VoiceAndToneDesing.pdf` | Todas (tono de voz) |

---

**🎯 Este sitemap V2 incluye los ajustes del footer y las 4 páginas nuevas (Venta, Alquiler, Transformación, Redes Sociales)**

**Total actualizado: 35 → 38 páginas**
