import React, { useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Lenis from 'lenis' 
import { motion } from 'framer-motion';
import './App.css'

function App() {
  useEffect(() => {
    
    const lenis = new Lenis({
      duration: 0.1, // Set the scrolling duration
      easing: (t) => Math.pow(t, 1), // Set the easing function (customize as needed)
      smoothWheel: true, // Enable smooth wheel scrolling
      smoothTouch: false, // Disable smooth touch scrolling (if you only want to apply smooth scroll to mouse)
      direction: 'vertical' // Scroll direction (you can also make it 'horizontal' if you want)
    });

    function raf(time) {
      lenis.raf(time); // Update Lenis every animation frame
      requestAnimationFrame(raf);
    }

    // Start the animation frame loop for Lenis
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy(); // Clean up the Lenis instance on unmount
    };
  }, []);

  return (
    <div className='container'>
      <div className='main-navbar'>
        <Header />
      </div>
      <div className='content'>
        <Main />
      </div>
    </div>
  );
}

export default App;
