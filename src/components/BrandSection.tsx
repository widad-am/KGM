"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Video and image paths
const VIDEO_PATH = "/brand/20250122162115558_CHXHZK.mp4";
const IMAGES = [
  "/brand/20250122162318291_aXwgIL.jpg",
  "/brand/20250122162343171_oTxtBO.jpg", 
  "/brand/20250122162541933_b9TkLy.jpg",
  "/brand/20250122162631430_uH0HuO.jpg"
];

export default function BrandSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform video size and position based on scroll
  const videoScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.55]);
  const videoY = useTransform(scrollYProgress, [0, 0.4], [0, -30]);
  
  // Transform images opacity and position
  const imagesOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const imagesScale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-20 px-6 md:px-12 bg-[#0b0d16] text-white overflow-hidden min-h-screen"
    >
      {/* Title section at the top */}
      <div className="text-center mb-8 md:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#d4be83] mb-4"
        >
          Brand
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        >
          KGM is transforming, driven by a bold new vision.
        </motion.p>
      </div>

      {/* Main content container with video and images */}
      <div className="relative max-w-7xl mx-auto">
        {/* Main video container - full width initially */}
        <motion.div 
          className="relative w-full aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-white/10"
          style={{
            scale: videoScale,
            y: videoY
          }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={VIDEO_PATH} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>

        {/* Left side images - positioned absolutely after scroll */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-3 pointer-events-none" style={{ right: 'calc(50% + 400px)' }}>
          {/* Top left image */}
          <motion.div 
            className="w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 relative"
            style={{
              opacity: imagesOpacity,
              scale: imagesScale
            }}
          >
            <img 
              src={IMAGES[0]} 
              alt="Brand story"
              className="w-full h-full object-cover rounded-lg shadow-lg ring-1 ring-white/20"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-end p-3">
              <p className="text-sm font-bold text-[#d4be83]">STORY</p>
              <p className="text-xs text-white/70">Learn more {'>'}</p>
            </div>
          </motion.div>

          {/* Bottom left image */}
          <motion.div 
            className="w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 relative"
            style={{
              opacity: imagesOpacity,
              scale: imagesScale
            }}
          >
            <img 
              src={IMAGES[1]} 
              alt="CI-BI System"
              className="w-full h-full object-cover rounded-lg shadow-lg ring-1 ring-white/20"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-end p-3">
              <p className="text-sm font-bold text-[#d4be83]">CI-BI SYSTEM</p>
              <p className="text-xs text-white/70">Learn more {'>'}</p>
            </div>
          </motion.div>
        </div>

        {/* Right side images - positioned absolutely after scroll */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-3 pointer-events-none" style={{ left: 'calc(50% + 400px)' }}>
          {/* Top right image */}
          <motion.div 
            className="w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 relative"
            style={{
              opacity: imagesOpacity,
              scale: imagesScale
            }}
          >
            <img 
              src={IMAGES[2]} 
              alt="KGM Steering"
              className="w-full h-full object-cover rounded-lg shadow-lg ring-1 ring-white/20"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-end p-3">
              <p className="text-sm font-bold text-[#d4be83]">KGM</p>
              <p className="text-xs text-white/70">Steering</p>
            </div>
          </motion.div>

          {/* Bottom right image */}
          <motion.div 
            className="w-48 h-32 md:w-56 md:h-36 lg:w-64 lg:h-40 relative"
            style={{
              opacity: imagesOpacity,
              scale: imagesScale
            }}
          >
            <img 
              src={IMAGES[3]} 
              alt="Heritage 1954"
              className="w-full h-full object-cover rounded-lg shadow-lg ring-1 ring-white/20"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col justify-end p-3">
              <p className="text-sm font-bold text-[#d4be83]">HERITAGE 1954</p>
              <p className="text-xs text-white/70">Learn more {'>'}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right side buttons */}
      <div className="fixed right-6 md:right-10 lg:right-14 bottom-28 flex flex-col gap-3">
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/15 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="22" x2="16" y1="9" y2="15"></line>
            <line x1="16" x2="22" y1="9" y2="15"></line>
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white text-[10px] leading-tight">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mb-0.5">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M3 9h18"></path>
            <path d="M3 15h18"></path>
            <path d="M9 3v18"></path>
            <path d="M15 3v18"></path>
          </svg>
          QUICK
        </button>
      </div>

      {/* Bottom left URL */}
      <div className="fixed bottom-4 left-4 text-white/60 text-sm">
        https://en.kg-mobility.com
      </div>
    </section>
  );
}
