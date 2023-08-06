import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Login from './components/Login';
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact component={HeroSection} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/login" component={Login} />
        </Routes>
      </div>
    </Router>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
