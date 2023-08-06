import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
