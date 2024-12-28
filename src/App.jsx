import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-bg-cyan-900'>
      <div className="fixed inset-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
        
        <a href="https://wa.me/+919392405515" target="_blank" 
   class="fixed w-16 h-16 bottom-10 right-10 bg-[#25d366] text-white rounded-full flex items-center justify-center text-3xl shadow-lg hover:bg-[#1ebd59] 
          transform hover:scale-110 transition-transform duration-300 ease-in-out animate-bounce">
    <i class="fab fa-whatsapp"></i>
</a>

      </div>
    </div>
  );
}

export default App;
