import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Github from './components/Github';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      spotlight.style.transform = `translate3d(${clientX - 300}px, ${clientY - 300}px, 0)`;
      spotlight.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen bg-darkBg text-white overflow-hidden font-sans">
      
      {/* Purple spotlight hover effect following the cursor */}
      <div 
        ref={spotlightRef}
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 transition-opacity duration-300 opacity-0 hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)',
          left: 0,
          top: 0,
          willChange: 'transform',
        }}
      />

      {/* Aurora Ambient Background Glow Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="aurora-glow-1" />
        <div className="aurora-glow-2" />
        <div className="aurora-glow-3" />
      </div>

      {/* Floating Header */}
      <Navbar />

      {/* Main Dashboard Layout Container */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 z-10">
        
        {/* 
          Dashboard Responsive Grid:
          - Desktop (lg:grid-cols-2): Shows Column 1 & Column 2 in clean grid rows.
          - Mobile (grid-cols-1): Stacks sections in logical reading order:
            Hero -> About -> Skills -> Projects -> Experience -> GitHub + Contact
        */}
        <div className="flex flex-col gap-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Github />
          <Contact />
        </div>

        {/* Global Footer Credits */}
        <Footer />

      </main>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-gradient-to-r from-accentPurple to-accentViolet text-white shadow-purple-glow hover:scale-110 active:scale-95 flex items-center justify-center transition-transform duration-200"
            aria-label="Scroll back to top"
          >
            <FaArrowUp size={14} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
