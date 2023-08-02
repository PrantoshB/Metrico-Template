import React from 'react';
import './NavBar.css';
import Logo from '../assets/images/logo.png';
import LogoWhite from '../assets/images/logo_white.png';

const NavBar = () => {
  return (
    <>
        <nav>
            <a href="/">
                <img src={Logo} alt="metrico" className='logo' />
            </a>

            <ul className='list-unstyled menu-items'>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Clients</li>
                <li>FAQ</li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar