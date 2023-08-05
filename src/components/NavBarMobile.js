// src/components/NavBarMobile.js
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './NavBarMobile.css';
import LogoWhite from '../assets/images/logo_white.png';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Import Bootstrap components

const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Navbar expand="lg" className={`mobile-nav ${isOpen ? 'open' : ''}`}>
      <Container>
        <Navbar.Brand href="/">
          <img src={LogoWhite} alt="metrico" className="logo-white" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav-mobile" onClick={handleToggle} />
        <Navbar.Collapse id="navbar-nav-mobile">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">Clients</Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarMobile;
