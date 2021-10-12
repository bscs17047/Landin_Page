import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './Components/Navbar.js'
import ImageCarousel from './Components/Carousel.js'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import About from './Components/About.js'
import ResearchCards from './Components/ResearchCards.js'
import Footers from './Components/Footers.js'


function App() {
  return (
    <div className="App">
    <NavbarTop/>
    <ImageCarousel/>
    <About/>
    <ResearchCards/>
    <Contact/>
    <Footers/>
    <Footer/>
    </div>
  );
}

export default App;
