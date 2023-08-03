import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AllPricing from './pages/AllPricing';
import Faq from './pages/Faq';
import Features from './pages/Features';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Features/>
      <AllPricing/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
