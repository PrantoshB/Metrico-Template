// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavBarMobile from './components/NavBarMobile';
import AllPricing from './pages/AllPricing';
import Features from './components/Features';
import Clients from './components/Clients';
import FAQ from './components/FAQ';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? <NavBarMobile /> : <NavBar />}
      <AllPricing />
      <Features />
      <Clients />
      <FAQ />
    </div>
  );
}

export default App;
