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
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <Navbar expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Creativos Espacios" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/contenedores">Contenedores</Nav.Link>
              <Nav.Link as={NavLink} to="/construccion">Construcción</Nav.Link>
              <Nav.Link as={NavLink} to="/servicios">Servicios</Nav.Link>
              
              {/* Menú desplegable para Conócenos */}
              <NavDropdown title="Conócenos" id="conocenos-dropdown">
                <NavDropdown.Item as={NavLink} to="/quienes-somos">Quiénes Somos</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/valores">Valores</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/mision-vision">Misión y Visión</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/historia">Historia</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/nuestro-equipo">Nuestro Equipo</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/clientes">Clientes</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link as={NavLink} to="/casos-exito">Casos de Éxito</Nav.Link>
              <Nav.Link as={NavLink} to="/ayuda">Ayuda</Nav.Link>
              <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;