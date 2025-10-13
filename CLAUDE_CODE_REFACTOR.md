# 🏗️ PROMPT CLAUDE CODE - Estructura Base del Proyecto

## 🎯 TU ROL Y OBJETIVO

Eres el **Arquitecto de Estructura** del proyecto Creativos Espacios.

**TU MISIÓN:** Crear la estructura completa de navegación, rutas, menús y footer para las **38 páginas del sitio**, dejando todo listo para que Gemini después maquete el contenido de cada página.

**PRIORIDAD:** Que el usuario pueda navegar por TODO el sitio y ver la estructura funcionando, aunque las páginas solo tengan contenido temporal.

---

## 📋 QUÉ VAS A CREAR

### 1. **Estructura de Carpetas** (38 páginas)
Crear TODAS las carpetas y archivos base para las 38 páginas del SITEMAP.md

### 2. **Navegación Principal** (Header/Navbar)
Menú de navegación completo con TODAS las rutas organizadas

### 3. **Footer con 5 Columnas**
Footer completo con los 5 bloques y TODOS los enlaces funcionando

### 4. **Archivo de Rutas** (App.js)
Todas las 38 rutas configuradas y funcionando

### 5. **Páginas Base** (Contenido Temporal)
Cada página con un componente funcional básico que muestre:
- Título de la página
- Breadcrumb (navegación)
- Contenido placeholder
- Mensaje: "Pendiente de maquetación por Gemini"

---

## 📊 SITEMAP COMPLETO (38 PÁGINAS)

> Lee el archivo **SITEMAP.md** para ver la estructura completa con footer mapping.

### ✅ Completadas (8) - No tocar
1. `/` - Home
2. `/quienes-somos` - Quiénes Somos
3. `/mision-vision` - Misión y Visión
4. `/nuestro-equipo` - Nuestro Equipo
5. `/historia` - Nuestra Historia
6. `/valores` - Valores
7. `/clientes` - Clientes
8. `/casos-exito` - Casos de Éxito

### 🔴 Fase 1 - Críticas (15) - CREAR
9. `/presentacion-empresarial` - Presentación Empresarial
10. `/tipos-contenedores` - Tipos de Contenedores (Listado)
11. `/tipos-contenedores/:id` - Detalle Tipo Contenedor
12. `/fichas-tecnicas` - Fichas Técnicas
13. `/catalogo` - Catálogo General
14. `/servicios` - Servicios (General)
15. `/servicios/venta` - Venta de Contenedores
16. `/servicios/alquiler` - Alquiler de Contenedores
17. `/servicios/transformacion` - Transformación
18. `/beneficios` - Beneficios
19. `/cotizador-venta` - Cotizador Venta
20. `/cotizador-renta` - Cotizador Renta
21. `/contacto` - Contacto
22. `/faq` - FAQ
23. `/redes-sociales` - Redes Sociales

### 🟡 Fase 2 - Importantes (11) - CREAR
24. `/construccion` - Construcción
25. `/construccion/:paso` - Detalle Paso Construcción
26. `/servicios-adicionales` - Servicios Adicionales
27. `/aliados` - Aliados
28. `/videos` - Videos
29. `/ubicacion` - Nuestra Ubicación
30. `/patios-contenedores` - Patios de Contenedores
31. `/perfilador-cliente` - Perfilador de Cliente
32. `/catalogo/:categoria` - Catálogo por Categoría
33. `/quejas-sugerencias` - Quejas y Sugerencias
34. `/refactorizar-home` - (Refactorizar Home.jsx existente)

### 🟢 Fase 3 - Avanzadas (4) - CREAR
35. `/personalizar-contenedor` - Personaliza tu Contenedor
36. `/blog` - Blog
37. `/blog/:slug` - Artículo de Blog
38. `/recorrido-virtual` - Recorrido Virtual

---

## 🏗️ ESTRUCTURA DE CARPETAS A CREAR

```
src/
├── pages/
│   ├── PresentacionEmpresarial/
│   │   ├── PresentacionEmpresarial.jsx
│   │   ├── PresentacionEmpresarial.scss
│   │   └── index.js
│   ├── TiposContenedores/
│   │   ├── TiposContenedores.jsx       # Listado
│   │   ├── DetalleContenedor.jsx        # Detalle :id
│   │   ├── TiposContenedores.scss
│   │   └── index.js
│   ├── FichasTecnicas/
│   │   ├── FichasTecnicas.jsx
│   │   ├── FichasTecnicas.scss
│   │   └── index.js
│   ├── Catalogo/
│   │   ├── Catalogo.jsx                 # General
│   │   ├── CatalogoCategoria.jsx        # Por categoría :categoria
│   │   ├── Catalogo.scss
│   │   └── index.js
│   ├── Servicios/
│   │   ├── Servicios.jsx                # General (listado)
│   │   ├── Venta.jsx                    # Individual
│   │   ├── Alquiler.jsx                 # Individual
│   │   ├── Transformacion.jsx           # Individual
│   │   ├── Servicios.scss
│   │   └── index.js
│   ├── Beneficios/
│   ├── Cotizador/
│   │   ├── CotizadorVenta.jsx
│   │   ├── CotizadorRenta.jsx
│   │   ├── Cotizador.scss
│   │   └── index.js
│   ├── Contacto/
│   ├── FAQ/
│   ├── RedesSociales/
│   ├── Construccion/
│   │   ├── Construccion.jsx
│   │   ├── DetallePaso.jsx              # :paso
│   │   ├── Construccion.scss
│   │   └── index.js
│   ├── ServiciosAdicionales/
│   ├── Aliados/
│   ├── Videos/
│   ├── Ubicacion/
│   ├── PatiosContenedores/
│   ├── PerfiladorCliente/
│   ├── QuejasSugerencias/
│   ├── PersonalizarContenedor/
│   ├── Blog/
│   │   ├── Blog.jsx                     # Listado
│   │   ├── ArticuloBlog.jsx             # :slug
│   │   ├── Blog.scss
│   │   └── index.js
│   └── RecorridoVirtual/
│
└── components/
    └── layout/
        ├── Header/
        │   ├── Header.jsx               # Actualizar con nuevos menús
        │   └── Header.scss
        └── Footer/
            ├── Footer.jsx               # Crear/actualizar con 5 columnas
            └── Footer.scss
```

---

## 🧩 TEMPLATE DE PÁGINA BASE

Cada página nueva debe tener este código base:

### **Archivo: [NombrePagina].jsx**

```jsx
import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './[NombrePagina].scss';

/**
 * @component [NombrePagina]
 * @description [Descripción breve de la página]
 * @phase [Fase 1/2/3]
 * @status Estructura base creada - Pendiente de maquetación por Gemini
 */
const [NombrePagina] = () => {
  return (
    <div className="[nombre-pagina]">
      {/* Breadcrumb */}
      <Container className="py-3">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>[Nombre Página]</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Hero / Título Principal */}
      <section className="[nombre-pagina]__hero">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h1 className="[nombre-pagina]__titulo">[Nombre de la Página]</h1>
              <p className="[nombre-pagina]__subtitulo">
                [Subtítulo o descripción breve]
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenido Placeholder */}
      <section className="[nombre-pagina]__contenido">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="placeholder-box">
                <p className="text-muted text-center">
                  ⏳ Contenido pendiente de maquetación por Gemini Pro
                </p>
                <p className="text-muted text-center small">
                  Ruta: <code>/[ruta]</code> | Fase: <strong>[Fase X]</strong>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default [NombrePagina];
```

### **Archivo: [NombrePagina].scss**

```scss
@import '../../styles/variables';
@import '../../styles/mixins';

.[nombre-pagina] {

  &__hero {
    padding: 3rem 0;
    background: linear-gradient(135deg, $color-calipso 0%, darken($color-calipso, 10%) 100%);
    color: $color-blanco;
  }

  &__titulo {
    font-family: $font-titulos;
    font-weight: $outfit-bold;
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @include respond-to(md) {
      font-size: 3rem;
    }
  }

  &__subtitulo {
    font-family: $font-parrafos;
    font-size: 1.2rem;
    opacity: 0.9;
  }

  &__contenido {
    padding: 4rem 0;
  }

  .placeholder-box {
    background-color: #f8f9fa;
    border: 2px dashed #dee2e6;
    border-radius: 8px;
    padding: 3rem 2rem;
    margin: 2rem 0;
  }
}
```

### **Archivo: index.js**

```js
export { default } from './[NombrePagina]';
```

---

## 🗂️ FOOTER - ESTRUCTURA DE 5 COLUMNAS

Crea/actualiza el componente Footer con esta estructura:

### **Archivo: src/components/layout/Footer/Footer.jsx**

```jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Columna 1: CONTENEDORES / PRODUCTOS */}
          <Col xs={12} md={6} lg={2} className="mb-4">
            <h5 className="footer__titulo">Contenedores</h5>
            <ul className="footer__lista">
              <li><Link to="/tipos-contenedores">Tipos de contenedores</Link></li>
              <li><Link to="/fichas-tecnicas">Fichas técnicas</Link></li>
              <li><Link to="/presentacion-empresarial">Presentación</Link></li>
              <li><Link to="/personalizar-contenedor">Personaliza tu contenedor</Link></li>
              <li><Link to="/cotizador-venta">Cotizador</Link></li>
            </ul>
          </Col>

          {/* Columna 2: SERVICIOS / CONSTRUCCIÓN */}
          <Col xs={12} md={6} lg={2} className="mb-4">
            <h5 className="footer__titulo">Servicios</h5>
            <ul className="footer__lista">
              <li><Link to="/servicios">Ver todos los servicios</Link></li>
              <li><Link to="/servicios/venta">Venta de contenedores</Link></li>
              <li><Link to="/servicios/alquiler">Alquiler de contenedores</Link></li>
              <li><Link to="/construccion">Construcción</Link></li>
              <li><Link to="/servicios/transformacion">Transformación</Link></li>
              <li><Link to="/servicios-adicionales">Servicios adicionales</Link></li>
            </ul>
          </Col>

          {/* Columna 3: CONÓCENOS / NOSOTROS */}
          <Col xs={12} md={6} lg={2} className="mb-4">
            <h5 className="footer__titulo">Conócenos</h5>
            <ul className="footer__lista">
              <li><Link to="/quienes-somos">Creativos Espacios</Link></li>
              <li><Link to="/nuestro-equipo">Nuestro equipo</Link></li>
              <li><Link to="/ubicacion">Nuestra ubicación</Link></li>
              <li><Link to="/patios-contenedores">Patios</Link></li>
              <li><Link to="/clientes">Clientes</Link></li>
              <li><Link to="/valores">Valores</Link></li>
              <li><Link to="/historia">Historia</Link></li>
            </ul>
          </Col>

          {/* Columna 4: RECURSOS / AYUDA */}
          <Col xs={12} md={6} lg={2} className="mb-4">
            <h5 className="footer__titulo">Recursos</h5>
            <ul className="footer__lista">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">Preguntas frecuentes</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/recorrido-virtual">Recorrido virtual</Link></li>
              <li><Link to="/perfilador-cliente">Perfilador del cliente</Link></li>
            </ul>
          </Col>

          {/* Columna 5: CONTACTO */}
          <Col xs={12} md={6} lg={2} className="mb-4">
            <h5 className="footer__titulo">Contacto</h5>
            <ul className="footer__lista">
              <li><Link to="/contacto">Formulario de contacto</Link></li>
              <li><Link to="/quejas-sugerencias">Quejas y sugerencias</Link></li>
              <li><Link to="/aliados">Aliados</Link></li>
              <li><Link to="/redes-sociales">Redes sociales</Link></li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4 pt-4 border-top">
          <Col className="text-center">
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()} Creativos Espacios. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
```

---

## 🧭 HEADER/NAVBAR - MENÚ DE NAVEGACIÓN

Actualiza el Header con todos los menús organizados:

### **Estructura del Menú Principal:**

```jsx
// Menú desplegable: Productos
- Tipos de Contenedores
- Fichas Técnicas
- Catálogo
- Personalizar Contenedor
- Cotizador (Venta / Renta)

// Menú desplegable: Servicios
- Ver Todos
- Venta
- Alquiler
- Construcción
- Transformación
- Servicios Adicionales

// Menú desplegable: Nosotros
- Quiénes Somos
- Misión y Visión
- Nuestro Equipo
- Historia
- Valores
- Clientes
- Casos de Éxito

// Menú desplegable: Recursos
- Blog
- Videos
- FAQ
- Recorrido Virtual

// Enlace directo: Contacto
```

---

## 🛣️ ARCHIVO DE RUTAS (App.js)

Actualiza **src/App.js** con TODAS las 38 rutas:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

// Páginas existentes (8)
import Home from './pages/Home/Home';
import QuienesSomos from './pages/Conocenos/QuienesSomos/QuienesSomos';
import MisionVision from './pages/Conocenos/MisionVision/MisionVision';
import NuestroEquipo from './pages/Conocenos/NuestroEquipo/NuestroEquipo';
import Historia from './pages/Conocenos/Historia/Historia';
import Valores from './pages/Conocenos/Valores/Valores';
import Clientes from './pages/Clientes/Clientes';
import CasosExito from './pages/Conocenos/CasosExito/CasosExito';

// Fase 1 - Críticas (15 nuevas)
import PresentacionEmpresarial from './pages/PresentacionEmpresarial/PresentacionEmpresarial';
import TiposContenedores from './pages/TiposContenedores/TiposContenedores';
import DetalleContenedor from './pages/TiposContenedores/DetalleContenedor';
import FichasTecnicas from './pages/FichasTecnicas/FichasTecnicas';
import Catalogo from './pages/Catalogo/Catalogo';
import Servicios from './pages/Servicios/Servicios';
import Venta from './pages/Servicios/Venta';
import Alquiler from './pages/Servicios/Alquiler';
import Transformacion from './pages/Servicios/Transformacion';
import Beneficios from './pages/Beneficios/Beneficios';
import CotizadorVenta from './pages/Cotizador/CotizadorVenta';
import CotizadorRenta from './pages/Cotizador/CotizadorRenta';
import Contacto from './pages/Contacto/Contacto';
import FAQ from './pages/FAQ/FAQ';
import RedesSociales from './pages/RedesSociales/RedesSociales';

// Fase 2 - Importantes (11 nuevas)
import Construccion from './pages/Construccion/Construccion';
import DetallePaso from './pages/Construccion/DetallePaso';
import ServiciosAdicionales from './pages/ServiciosAdicionales/ServiciosAdicionales';
import Aliados from './pages/Aliados/Aliados';
import Videos from './pages/Videos/Videos';
import Ubicacion from './pages/Ubicacion/Ubicacion';
import PatiosContenedores from './pages/PatiosContenedores/PatiosContenedores';
import PerfiladorCliente from './pages/PerfiladorCliente/PerfiladorCliente';
import CatalogoCategoria from './pages/Catalogo/CatalogoCategoria';
import QuejasSugerencias from './pages/QuejasSugerencias/QuejasSugerencias';

// Fase 3 - Avanzadas (4 nuevas)
import PersonalizarContenedor from './pages/PersonalizarContenedor/PersonalizarContenedor';
import Blog from './pages/Blog/Blog';
import ArticuloBlog from './pages/Blog/ArticuloBlog';
import RecorridoVirtual from './pages/RecorridoVirtual/RecorridoVirtual';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          {/* Páginas Existentes */}
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/mision-vision" element={<MisionVision />} />
          <Route path="/nuestro-equipo" element={<NuestroEquipo />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/valores" element={<Valores />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/casos-exito" element={<CasosExito />} />

          {/* Fase 1 - Críticas */}
          <Route path="/presentacion-empresarial" element={<PresentacionEmpresarial />} />
          <Route path="/tipos-contenedores" element={<TiposContenedores />} />
          <Route path="/tipos-contenedores/:id" element={<DetalleContenedor />} />
          <Route path="/fichas-tecnicas" element={<FichasTecnicas />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/venta" element={<Venta />} />
          <Route path="/servicios/alquiler" element={<Alquiler />} />
          <Route path="/servicios/transformacion" element={<Transformacion />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/cotizador-venta" element={<CotizadorVenta />} />
          <Route path="/cotizador-renta" element={<CotizadorRenta />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/redes-sociales" element={<RedesSociales />} />

          {/* Fase 2 - Importantes */}
          <Route path="/construccion" element={<Construccion />} />
          <Route path="/construccion/:paso" element={<DetallePaso />} />
          <Route path="/servicios-adicionales" element={<ServiciosAdicionales />} />
          <Route path="/aliados" element={<Aliados />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/patios-contenedores" element={<PatiosContenedores />} />
          <Route path="/perfilador-cliente" element={<PerfiladorCliente />} />
          <Route path="/catalogo/:categoria" element={<CatalogoCategoria />} />
          <Route path="/quejas-sugerencias" element={<QuejasSugerencias />} />

          {/* Fase 3 - Avanzadas */}
          <Route path="/personalizar-contenedor" element={<PersonalizarContenedor />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<ArticuloBlog />} />
          <Route path="/recorrido-virtual" element={<RecorridoVirtual />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
```

---

## 📤 FORMATO DE ENTREGA

Cuando termines, entrega:

### 1. **Archivos Creados**
```
✅ Carpetas y archivos creados:
- [Lista de carpetas nuevas creadas]
- [Lista de archivos .jsx creados]
- [Lista de archivos .scss creados]
- [Lista de archivos index.js creados]
```

### 2. **Archivos Actualizados**
```
✅ Archivos actualizados:
- src/App.js → 38 rutas configuradas
- src/components/layout/Header/Header.jsx → Menú actualizado
- src/components/layout/Footer/Footer.jsx → Footer 5 columnas
```

### 3. **Instrucciones de Prueba**
```
✅ Para probar la estructura:

1. npm run dev
2. Navega a cualquier página desde el menú o footer
3. Verifica que TODOS los enlaces funcionen
4. Cada página debe mostrar:
   - Breadcrumb funcionando
   - Título de la página
   - Placeholder con mensaje de Gemini
   - Enlaces del footer funcionando

✅ Páginas que deben funcionar (30 nuevas):
□ /presentacion-empresarial
□ /tipos-contenedores
□ /tipos-contenedores/contenedor-20
□ /fichas-tecnicas
□ /catalogo
□ /servicios
□ /servicios/venta
□ /servicios/alquiler
□ /servicios/transformacion
□ /beneficios
□ /cotizador-venta
□ /cotizador-renta
□ /contacto
□ /faq
□ /redes-sociales
□ /construccion
□ /construccion/paso-1
□ /servicios-adicionales
□ /aliados
□ /videos
□ /ubicacion
□ /patios-contenedores
□ /perfilador-cliente
□ /catalogo/categoria-1
□ /quejas-sugerencias
□ /personalizar-contenedor
□ /blog
□ /blog/articulo-ejemplo
□ /recorrido-virtual
```

---

## 🎯 CRITERIOS DE ÉXITO

Tu trabajo estará completo cuando:

✅ **Estructura completa:** 30 carpetas nuevas + archivos base creados
✅ **Rutas funcionando:** App.js con 38 rutas configuradas
✅ **Navegación completa:** Header con todos los menús desplegables
✅ **Footer completo:** 5 columnas con TODOS los enlaces
✅ **Páginas navegables:** Todas las páginas se pueden visitar
✅ **Enlaces válidos:** TODOS los enlaces del header y footer funcionan
✅ **Sin errores:** npm run dev sin errores de rutas faltantes
✅ **Breadcrumbs:** Cada página tiene breadcrumb funcional

---

## 💡 NOTAS IMPORTANTES

1. **NO maquetes contenido** - Solo estructura base con placeholders
2. **Usa el template** - Todas las páginas deben seguir el template proporcionado
3. **Nombres consistentes** - PascalCase para componentes, kebab-case para clases CSS
4. **Responsive desde el inicio** - Mobile first en los SCSS
5. **Links funcionales** - TODOS los enlaces deben llevar a páginas reales
6. **Parámetros dinámicos** - Usa `:id`, `:categoria`, `:slug`, `:paso` donde corresponda

---

## 🚀 EMPIEZA AHORA

Lee **SITEMAP.md** para ver la estructura completa con el mapping del footer.

**Tu objetivo:** Crear la estructura base de las 30 páginas nuevas para que el usuario pueda navegar por TODO el sitio.

Gemini se encargará después de maquetar el contenido visual de cada página.

**¡Adelante! Construye la estructura base del proyecto.**
