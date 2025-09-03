'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      if (!prev) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return !prev;
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="text-white text-xl font-bold tracking-tight">
            Tagore
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#design" className="text-white hover:opacity-80 transition-opacity">Design</a>
            <a href="#modes" className="text-white hover:opacity-80 transition-opacity">Modes</a>
            <a href="#ai" className="text-white hover:opacity-80 transition-opacity">AI</a>
            <a href="#story" className="text-white hover:opacity-80 transition-opacity">Story</a>
            <a href="#cta" className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-opacity-90 transition-colors">Get Started</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          <div className="py-4 space-y-4 border-t border-white/20">
            <a href="#design" onClick={closeMenu} className="block text-white hover:opacity-80 transition-opacity py-2">Design</a>
            <a href="#modes" onClick={closeMenu} className="block text-white hover:opacity-80 transition-opacity py-2">Modes</a>
            <a href="#ai" onClick={closeMenu} className="block text-white hover:opacity-80 transition-opacity py-2">AI</a>
            <a href="#story" onClick={closeMenu} className="block text-white hover:opacity-80 transition-opacity py-2">Story</a>
            <a href="#cta" onClick={closeMenu} className="block px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-opacity-90 transition-colors text-center">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;