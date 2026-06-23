import React, { useState, useEffect } from 'react';
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen bg-darkBg text-white overflow-hidden font-sans">
      
      {/* Aurora Ambient Background Glow Elements */}
      <div className="absolute top-[10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-accentPurple/15 blur-[120px] pointer-events-none aurora-bg" />
      <div className="absolute top-[40%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-accentViolet/12 blur-[130px] pointer-events-none aurora-bg-delay" />
      <div className="absolute bottom-[10%] left-[5%] w-[35vw] h-[35vw] rounded-full bg-accentPurple/10 blur-[110px] pointer-events-none aurora-bg" />

      {/* Floating Header */}
      <Navbar />

      {/* Main Dashboard Layout Container */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 z-10">
        
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
