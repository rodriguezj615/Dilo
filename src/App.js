
import './App.scss';
import Header from './containers/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import About from './components/About/About.js';
import Products from './components/Products/Products.js';
import Service from './components/Service/Service.js';
import Contact from './containers/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div>
    <Header />
    <Hero />
    <About />
    <Products />
    <Service />
    <Contact />  
    <Footer />
    </div>
    
  );
}

export default App;
