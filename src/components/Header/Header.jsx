import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Asegúrate de tener esta imagen en tu proyecto
import './Header.scss';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} role="banner">
      <Navbar expand="lg" className="navbar-dark" role="navigation" aria-label="Navegación principal">
        <Container>
          <Navbar.Brand as={Link} to="/" aria-label="Creativos Espacios - Inicio">
            <img src={logo} alt="Creativos Espacios Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Abrir menú de navegación" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" role="menubar">
              {/* Menú desplegable: Productos */}
              <NavDropdown title="Productos" id="productos-dropdown">
                <NavDropdown.Item as={NavLink} to="/tipos-contenedores">Tipos de Contenedores</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/fichas-tecnicas">Fichas Técnicas</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/catalogo">Catálogo</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/presentacion-empresarial">Presentación Empresarial</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/personalizar-contenedor">Personalizar Contenedor</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/cotizador-venta">Cotizador Venta</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/cotizador-renta">Cotizador Renta</NavDropdown.Item>
              </NavDropdown>

              {/* Menú desplegable: Servicios */}
              <NavDropdown title="Servicios" id="servicios-dropdown">
                <NavDropdown.Item as={NavLink} to="/servicios">Ver Todos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/servicios/venta">Venta</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/servicios/alquiler">Alquiler</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/servicios/transformacion">Transformación</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/construccion">Construcción</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/servicios-adicionales">Servicios Adicionales</NavDropdown.Item>
              </NavDropdown>

              {/* Menú desplegable: Nosotros */}
              <NavDropdown title="Nosotros" id="nosotros-dropdown">
                <NavDropdown.Item as={NavLink} to="/quienes-somos">Quiénes Somos</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/mision-vision">Misión y Visión</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/nuestro-equipo">Nuestro Equipo</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/historia">Historia</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/valores">Valores</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/clientes">Clientes</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/casos-exito">Casos de Éxito</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/ubicacion">Ubicación</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/patios-contenedores">Patios</NavDropdown.Item>
              </NavDropdown>

              {/* Menú desplegable: Recursos */}
              <NavDropdown title="Recursos" id="recursos-dropdown">
                <NavDropdown.Item as={NavLink} to="/blog">Blog</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/videos">Videos</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/faq">FAQ</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/recorrido-virtual">Recorrido Virtual</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/perfilador-cliente">Perfilador de Cliente</NavDropdown.Item>
              </NavDropdown>

              {/* Enlace directo: Contacto */}
              <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;