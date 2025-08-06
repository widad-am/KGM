'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'MODELS', href: '#models' },
    { name: 'GLOBAL NETWORK', href: '#network' },
    { name: 'BRAND-NEWS', href: '#news' },
    { name: 'SUPPORT', href: '#support' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.hamburger-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navbarVariants = {
    initial: { backgroundColor: 'rgba(44, 41, 78, 0)' },
    scrolled: { 
      backgroundColor: 'rgba(44, 41, 78, 1)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.nav
        variants={navbarVariants}
        initial="initial"
        animate={isScrolled ? "scrolled" : "initial"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 h-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Left Menu Items - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.slice(0, 2).map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="relative text-white font-semibold uppercase tracking-wide text-sm cursor-pointer group"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-white"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Center Logo */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/hero/icon-logo-light.svg"
                alt="KGM Logo"
                width={100}
                height={40}
                className="w-auto h-7"
              />
            </motion.div>

            {/* Right Menu Items & Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.slice(2).map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="relative text-white font-semibold uppercase tracking-wide text-sm cursor-pointer group"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-white"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
              
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-white hover:text-white/90 transition-colors"
              >
                <span className="font-semibold uppercase tracking-wide text-sm">SEARCH</span>
                <Search size={16} />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden text-white p-2 hamburger-button"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-kgm-purple/95 backdrop-blur-sm mobile-menu"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white font-semibold uppercase tracking-wide text-lg py-3 px-4 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Search */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="flex items-center space-x-3 text-white py-3 px-4 hover:bg-white/10 rounded-lg transition-colors w-full"
              >
                <span className="font-semibold uppercase tracking-wide">SEARCH</span>
                <Search size={20} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 