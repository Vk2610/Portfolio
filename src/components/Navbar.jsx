import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => item.href.slice(1));
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section top is close to the top of the viewport
          if (rect.top <= 160) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    
    if (mobileMenuOpen) {
      // Close the mobile menu first
      setMobileMenuOpen(false);
      
      // Wait for the exit transition (300ms) to complete before scrolling
      setTimeout(() => {
        if (element) {
          const offset = 90; // offset for sticky navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    } else {
      // Desktop or already closed menu: scroll immediately
      if (element) {
        const offset = 90; // offset for sticky navbar
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 ${
        scrolled 
          ? 'bg-glass border-b border-glass shadow-lg backdrop-blur-md py-3.5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="text-xl font-bold tracking-tight text-white flex items-center gap-1 font-sans cursor-pointer group"
        >
          <span>Vedant</span>
          <span className="text-accentPurple group-hover:animate-ping duration-1000">.</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-glass border border-glass rounded-full px-2 py-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.slice(1));
                }}
                className={`relative px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-300 rounded-full ${
                  isActive 
                    ? 'text-white font-bold' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-accentPurple/25 border border-accentPurple/40 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Let's Connect CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-accentPurple to-accentViolet text-white font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-purple-glow hover:scale-105"
          >
            Let's Connect
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white bg-glass border border-glass rounded-full focus:outline-none"
        >
          {mobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 bg-glass border border-glass rounded-2xl overflow-hidden px-4 py-4 flex flex-col gap-3 backdrop-blur-lg"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.slice(1));
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-accentPurple/30 border border-accentPurple/50 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-accentPurple to-accentViolet text-white font-semibold text-sm text-center shadow-purple-glow"
            >
              Let's Connect
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
