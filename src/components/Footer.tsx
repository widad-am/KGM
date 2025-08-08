"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0b0d16] text-white">
      {/* Top Section - Home and Top */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex justify-between items-center">
            {/* Left side - Home */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer hover:text-white/80 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              <span className="text-sm font-medium uppercase tracking-wide">HOME</span>
            </motion.div>

            {/* Right side - Top */}
            <motion.button
              className="flex items-center space-x-2 hover:text-white/80 transition-colors"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="text-sm font-medium uppercase tracking-wide">TOP</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18,15 12,9 6,15"/>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Middle Section - Main Footer Content */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Left side - KGM Logo and Navigation */}
            <motion.div
              className="flex flex-col space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* KGM Logo */}
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide">KGM</h2>
              
              {/* Navigation Links */}
              <nav className="flex flex-wrap gap-6 md:gap-8">
                <a href="#about" className="text-sm font-semibold hover:text-white/80 transition-colors">ABOUT. KGM</a>
                <a href="#location" className="text-sm font-medium hover:text-white/80 transition-colors">LOCATION</a>
                <a href="#philosophy" className="text-sm font-medium hover:text-white/80 transition-colors">PHILOSOPHY</a>
                <a href="#csr" className="text-sm font-medium hover:text-white/80 transition-colors">CSR</a>
                <a href="#brochure" className="text-sm font-medium hover:text-white/80 transition-colors">COMPANY BROCHURE</a>
                <a href="#ir" className="text-sm font-medium hover:text-white/80 transition-colors">IR INFORMATION</a>
                <a href="#financial" className="text-sm font-medium hover:text-white/80 transition-colors">FINANCIAL INFORMATION</a>
                <a href="#resources" className="text-sm font-medium hover:text-white/80 transition-colors">IR RESOURCES</a>
              </nav>
            </motion.div>

            {/* Right side - Social Media Icons */}
            <motion.div
              className="flex space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* YouTube */}
              <a href="#youtube" className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.34 185.65 185.65 0 0 1 16.6 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.34 185.65 185.65 0 0 1-16.6 0A2 2 0 0 1 2.5 17"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#facebook" className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#instagram" className="w-10 h-10 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Legal Links and Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left side - Legal Links */}
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <a href="#cookies" className="text-xs text-white/70 hover:text-white/90 transition-colors">COOKIES POLICY</a>
            <div className="w-px h-4 bg-white/30"></div>
            <a href="#sitemap" className="text-xs text-white/70 hover:text-white/90 transition-colors">SITE MAP</a>
          </motion.div>

          {/* Right side - Copyright */}
          <motion.div
            className="text-xs text-white/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            COPYRIGHT © KG MOBILITY Corp. ALL RIGHTS RESERVED.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
