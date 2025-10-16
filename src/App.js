import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { LoadingSpinner } from './components/Accessibility';
import { CookieConsent } from './components/CookieConsent';
import { ErrorBoundary } from './components/ErrorBoundary';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import ScrollToTop from './components/ScrollToTop'; // FASE 10
// import LazyLoadError from './components/ErrorBoundary/LazyLoadError'; // Available for future use
import { initializeDataLayer, trackPageView } from './utils/analytics';
import './App.scss';

// Home - Load immediately (critical first page)
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

// Code-split all other pages with React.lazy()
// Páginas Existentes (7 lazy-loaded)
const QuienesSomos = lazy(() => import('./pages/Conocenos/QuienesSomos/QuienesSomos'));
const MisionVision = lazy(() => import('./pages/Conocenos/MisionVision/MisionVision'));
const NuestroEquipo = lazy(() => import('./pages/Conocenos/NuestroEquipo/NuestroEquipo'));
const Historia = lazy(() => import('./pages/Conocenos/Historia/Historia'));
const Valores = lazy(() => import('./pages/Conocenos/Valores/Valores'));
const Clientes = lazy(() => import('./pages/Clientes/Clientes'));
const CasosExito = lazy(() => import('./pages/Conocenos/CasosExito/CasosExito'));

// Productos Estrella - FASE 2.5 (3 lazy-loaded)
const Casas = lazy(() => import('./pages/Productos/Casas'));
const Bodegas = lazy(() => import('./pages/Productos/Bodegas'));
const Oficinas = lazy(() => import('./pages/Productos/Oficinas'));

// Fase 1 - Críticas (15 lazy-loaded)
const PresentacionEmpresarial = lazy(() => import('./pages/PresentacionEmpresarial/PresentacionEmpresarial'));
const TiposContenedores = lazy(() => import('./pages/TiposContenedores/TiposContenedores'));
const DetalleContenedor = lazy(() => import('./pages/TiposContenedores/DetalleContenedor'));
const FichasTecnicas = lazy(() => import('./pages/FichasTecnicas/FichasTecnicas'));
const Catalogo = lazy(() => import('./pages/Catalogo/Catalogo'));
const CatalogoCategoria = lazy(() => import('./pages/Catalogo/CatalogoCategoria'));
const Servicios = lazy(() => import('./pages/Servicios/Servicios'));
const Venta = lazy(() => import('./pages/Servicios/Venta'));
const Alquiler = lazy(() => import('./pages/Servicios/Alquiler'));
const Transformacion = lazy(() => import('./pages/Servicios/Transformacion'));
const Beneficios = lazy(() => import('./pages/Beneficios/Beneficios'));
const CotizadorVenta = lazy(() => import('./pages/CotizadorVenta/CotizadorVenta'));
const CotizadorRenta = lazy(() => import('./pages/CotizadorRenta/CotizadorRenta'));
const Contacto = lazy(() => import('./pages/Contacto/Contacto'));
const FAQ = lazy(() => import('./pages/FAQ/FAQ'));
const RedesSociales = lazy(() => import('./pages/RedesSociales/RedesSociales'));

// Fase 2 - Importantes (9 lazy-loaded)
const Construccion = lazy(() => import('./pages/Construccion/Construccion'));
const DetallePaso = lazy(() => import('./pages/Construccion/DetallePaso'));
const ServiciosAdicionales = lazy(() => import('./pages/ServiciosAdicionales/ServiciosAdicionales'));
const Aliados = lazy(() => import('./pages/Aliados/Aliados'));
const Videos = lazy(() => import('./pages/Videos/Videos'));
const Ubicacion = lazy(() => import('./pages/Ubicacion/Ubicacion'));
const PatiosContenedores = lazy(() => import('./pages/PatiosContenedores/PatiosContenedores'));
const PerfiladorCliente = lazy(() => import('./pages/PerfiladorCliente/PerfiladorCliente'));
const QuejasSugerencias = lazy(() => import('./pages/QuejasSugerencias/QuejasSugerencias'));

// Fase 3 - Avanzadas (4 lazy-loaded)
const PersonalizarContenedor = lazy(() => import('./pages/PersonalizarContenedor/PersonalizarContenedor'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const ArticuloBlog = lazy(() => import('./pages/Blog/ArticuloBlog'));
const RecorridoVirtual = lazy(() => import('./pages/RecorridoVirtual/RecorridoVirtual'));

// Páginas Legales (4 lazy-loaded)
const Privacidad = lazy(() => import('./pages/Privacidad/Privacidad'));
const Terminos = lazy(() => import('./pages/Terminos/Terminos'));
const RoboIdentidad = lazy(() => import('./pages/RoboIdentidad/RoboIdentidad'));
const MapaSitio = lazy(() => import('./pages/MapaSitio/MapaSitio'));

/**
 * PageTracker Component
 * Tracks page views on route changes using GTM dataLayer
 */
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Initialize dataLayer on mount
    initializeDataLayer();
  }, []);

  useEffect(() => {
    // Track page view on route change
    const pageTitle = document.title;
    trackPageView(location.pathname, pageTitle);
  }, [location]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <PageTracker />
        <CookieConsent />
        <PWAInstallPrompt />
        <div className="app">
          {/* Skip to main content link for accessibility */}
          <a href="#main-content" className="skip-to-main">
            Saltar al contenido principal
          </a>
          <Header />
          <main id="main-content" role="main">
            <Suspense fallback={<LoadingSpinner message="Cargando página..." fullPage={true} />}>
            <Routes>
              {/* Home - Loaded immediately */}
              <Route path="/" element={<Home />} />

              {/* Productos Estrella - FASE 2.5 (3 lazy-loaded) */}
              <Route path="/productos/casas" element={<Casas />} />
              <Route path="/productos/bodegas" element={<Bodegas />} />
              <Route path="/productos/oficinas" element={<Oficinas />} />

              {/* Páginas Existentes (7 lazy-loaded) */}
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/mision-vision" element={<MisionVision />} />
              <Route path="/nuestro-equipo" element={<NuestroEquipo />} />
              <Route path="/historia" element={<Historia />} />
              <Route path="/valores" element={<Valores />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/casos-exito" element={<CasosExito />} />

              {/* Fase 1 - Críticas (15 lazy-loaded) */}
              <Route path="/presentacion-empresarial" element={<PresentacionEmpresarial />} />
              <Route path="/tipos-contenedores" element={<TiposContenedores />} />
              <Route path="/tipos-contenedores/:id" element={<DetalleContenedor />} />
              <Route path="/fichas-tecnicas" element={<FichasTecnicas />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/catalogo/:categoria" element={<CatalogoCategoria />} />
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

              {/* Fase 2 - Importantes (9 lazy-loaded) */}
              <Route path="/construccion" element={<Construccion />} />
              <Route path="/construccion/:paso" element={<DetallePaso />} />
              <Route path="/servicios-adicionales" element={<ServiciosAdicionales />} />
              <Route path="/aliados" element={<Aliados />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/ubicacion" element={<Ubicacion />} />
              <Route path="/patios-contenedores" element={<PatiosContenedores />} />
              <Route path="/perfilador-cliente" element={<PerfiladorCliente />} />
              <Route path="/quejas-sugerencias" element={<QuejasSugerencias />} />

              {/* Fase 3 - Avanzadas (4 lazy-loaded) */}
              <Route path="/personalizar-contenedor" element={<PersonalizarContenedor />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<ArticuloBlog />} />
              <Route path="/recorrido-virtual" element={<RecorridoVirtual />} />

              {/* Páginas Legales (4 lazy-loaded) */}
              <Route path="/privacidad" element={<Privacidad />} />
              <Route path="/terminos" element={<Terminos />} />
              <Route path="/robo-identidad" element={<RoboIdentidad />} />
              <Route path="/mapa-sitio" element={<MapaSitio />} />

              {/* 404 - Not Found (catch all unmatched routes) */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ScrollToTop showAfter={300} />
      </div>
    </Router>
    </ErrorBoundary>
  );
}

export default App;
