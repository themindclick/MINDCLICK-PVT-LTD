import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Brain } from 'lucide-react';
import logo from "/assets/logo.png"; // Your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll to trigger background blur/white effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        isScrolled && setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Solutions', path: '/solution' },
    { name: 'Academy', path: '/education' },
    { name: 'About Agency', path: '/about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-[#000047]/5 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Positioning */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="MINDCLICK" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block leading-none">
              <span className="block font-bold tracking-tight text-[#000047] text-lg" style={{ fontFamily: "'Sugo Display', sans-serif" }}>
                MINDCLICK
              </span>
              <span className="text-[9px] font-bold text-[#000047]/60 tracking-widest uppercase">
                Growth Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold tracking-wide uppercase transition-colors relative py-2 text-[#000047] hover:text-[#000047]/70`}
                >
                  {link.name}
                  {/* Subtle psychological indicator under active link */}
                  {isActive && (
                    <motion.div 
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ffd600] rounded-full" 
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Call-To-Action (Desktop) */}
          <div className="hidden md:block">
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#000047] hover:bg-[#000047]/90 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-[#000047]/10"
              >
                <span>Free Growth Audit</span>
                <ArrowRight className="w-4 h-4 text-[#ffd600]" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button Trigger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#000047] hover:bg-[#000047]/5 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-[#000047]/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 shadow-inner">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wide transition-all ${
                      isActive 
                        ? 'bg-[#000047] text-white' 
                        : 'text-[#000047] hover:bg-[#000047]/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-[#000047]/10">
                <Link to="/contact" className="block w-full">
                  <button className="w-full bg-[#ffd600] hover:bg-[#ffd600]/90 text-[#000047] font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base uppercase tracking-wider">
                    <span>Free Growth Audit</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;