import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AllPricing from './pages/AllPricing';
import Home from './components/Home';
import Features from './components/Features';
import Clients from './components/Clients';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home /> {/* Include the Home component */}
      <AllPricing />
      <Features />
      <Clients />
      <FAQ />
    </div>
  );
}

export default App;
