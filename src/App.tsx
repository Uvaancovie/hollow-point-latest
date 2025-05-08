import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './layout/Footer';

function App() {
  useEffect(() => {
    document.title = "Hollow Point Security";
  }, []);

  return (
    <div className="relative z-0 bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;