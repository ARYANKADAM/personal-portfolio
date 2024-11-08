import React, { useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Lenis from 'lenis' 
import { motion } from 'framer-motion';
import './App.css'

function App() {
  useEffect(() => {
    
    const lenis = new Lenis({
      duration: 0.1, 
      easing: (t) => Math.pow(t, 1), 
      smoothWheel: true,
      smoothTouch: false, 
      direction: 'vertical' 
    });

    function raf(time) {
      lenis.raf(time); 
      requestAnimationFrame(raf);
    }

    
    requestAnimationFrame(raf);

    
    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <div className='container'>
      <div className='main-navbar'>
        <Header />
      </div>
      <div className='content'  id='home'>
        <Main />
      </div>
    </div>
  );
}

export default App;
