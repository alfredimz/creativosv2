import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Páginas Existentes (8)
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
import CatalogoCategoria from './pages/Catalogo/CatalogoCategoria';
import Servicios from './pages/Servicios/Servicios';
import { Venta, Alquiler, Transformacion } from './pages/Servicios';
import Beneficios from './pages/Beneficios/Beneficios';
import CotizadorVenta from './pages/CotizadorVenta/CotizadorVenta';
import CotizadorRenta from './pages/CotizadorRenta/CotizadorRenta';
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
import QuejasSugerencias from './pages/QuejasSugerencias/QuejasSugerencias';

// Fase 3 - Avanzadas (4 nuevas)
import PersonalizarContenedor from './pages/PersonalizarContenedor/PersonalizarContenedor';
import Blog from './pages/Blog/Blog';
import ArticuloBlog from './pages/Blog/ArticuloBlog';
import RecorridoVirtual from './pages/RecorridoVirtual/RecorridoVirtual';

// Páginas Legales (4 nuevas)
import Privacidad from './pages/Privacidad/Privacidad';
import Terminos from './pages/Terminos/Terminos';
import RoboIdentidad from './pages/RoboIdentidad/RoboIdentidad';
import MapaSitio from './pages/MapaSitio/MapaSitio';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            {/* Páginas Existentes (8) */}
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/mision-vision" element={<MisionVision />} />
            <Route path="/nuestro-equipo" element={<NuestroEquipo />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/valores" element={<Valores />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/casos-exito" element={<CasosExito />} />

            {/* Fase 1 - Críticas (15) */}
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

            {/* Fase 2 - Importantes (11) */}
            <Route path="/construccion" element={<Construccion />} />
            <Route path="/construccion/:paso" element={<DetallePaso />} />
            <Route path="/servicios-adicionales" element={<ServiciosAdicionales />} />
            <Route path="/aliados" element={<Aliados />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/ubicacion" element={<Ubicacion />} />
            <Route path="/patios-contenedores" element={<PatiosContenedores />} />
            <Route path="/perfilador-cliente" element={<PerfiladorCliente />} />
            <Route path="/quejas-sugerencias" element={<QuejasSugerencias />} />

            {/* Fase 3 - Avanzadas (4) */}
            <Route path="/personalizar-contenedor" element={<PersonalizarContenedor />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<ArticuloBlog />} />
            <Route path="/recorrido-virtual" element={<RecorridoVirtual />} />

            {/* Páginas Legales (4) */}
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/robo-identidad" element={<RoboIdentidad />} />
            <Route path="/mapa-sitio" element={<MapaSitio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
