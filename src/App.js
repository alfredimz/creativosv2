import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import QuienesSomos from './pages/Conocenos/QuienesSomos/QuienesSomos';
import MisionVision from './pages/Conocenos/MisionVision/MisionVision';
import NuestroEquipo from './pages/Conocenos/NuestroEquipo/NuestroEquipo';
import Historia from './pages/Conocenos/Historia/Historia';
import Valores from './pages/Conocenos/Valores/Valores';
import Clientes from './pages/Clientes/Clientes';
//import CasosExito from './pages/CasosExito/CasosExito';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/mision-vision" element={<MisionVision />} />
            <Route path="/nuestro-equipo" element={<NuestroEquipo />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/valores" element={<Valores />} />
            <Route path="/clientes" element={<Clientes />} />
            {/* Aquí irán otras rutas adicionales */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;