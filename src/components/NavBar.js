import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Logo from "../assets/images/logo.png";
import LogoWhite from "../assets/images/logo_white.png";
import NavBarMobile from './NavBarMobile';

const NavBar = () => {
  const [navbarStyle, setNavbarStyle] = useState({});
  const [navLinkStyle, setNavLinkStyle] = useState({ color: "#fff" });
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (scrollPercentage >= 2) {
        setScroll(true);

        setNavbarStyle({
          backgroundColor: "#fff",
          boxShadow: "0 2px 2px rgba(0,0,0,.1)",
        });
        setNavLinkStyle({
          color: "#000",
        });
      } else {
        setNavbarStyle({});
        setNavLinkStyle({ color: "#fff" });
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-custom navbar-default navbar-light navbar-custom-dark bg-trans"
        id="navbar-sticky"
        style={navbarStyle}
      >
        <div className="container">
          <a className="navbar-brand logo" href="index.html">
            <img
              src={scroll ? Logo : LogoWhite}
              className="logo logo-white"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="menu-items list-unstyled" style={navLinkStyle}>
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#features" className="nav-link">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#pricing" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#clients" className="nav-link">
                  Clients
                </a>
              </li>
              <li className="nav-item">
                <a href="#faqs" className="nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
