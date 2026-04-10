import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen text-main bg-primary font-sans text-[clamp(1.4rem,1vw,1.6rem)] overflow-x-hidden">
      {/* Accessibility skip to content */}
      <a 
        className="absolute bg-accent text-secondary px-[1rem] py-[0.75rem] left-[1.5rem] top-0 rounded-b-[0.5rem] text-[1.4rem] transform -translate-y-[200%] transition-transform duration-350 ease-in z-[100] focus:translate-y-0" 
        href="#main-content"
      >
        Skip to content
      </a>

      <Header />
      
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
