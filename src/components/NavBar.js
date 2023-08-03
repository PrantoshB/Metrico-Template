// src/components/NavBar.js
import React from 'react';
import './NavBar.css';
import Logo from '../assets/images/logo.png';
import NavBarMobile from './NavBarMobile';
import { Navbar, Container, Nav } from 'react-bootstrap'; // Import Bootstrap components

const NavBar = () => {
  // Check if it's a mobile view based on window width
  const isMobileView = window.innerWidth <= 768;

  return (
    <>
      {/* Desktop navigation */}
      {!isMobileView && (
        <Navbar expand="lg" className="desktop-nav">
          <Container>
            <Navbar.Brand href="/">
              <img src={Logo} alt="metrico" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
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
      )}

      {/* Mobile navigation */}
      {isMobileView && <NavBarMobile />}
    </>
  );
};

export default NavBar;
