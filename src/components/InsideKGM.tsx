"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Image paths with titles and descriptions
const SLIDES = [
  {
    image: "/inside-kgm/20250207130434565_v5zXHc.jpg",
    title: "ARRES EVX",
    description: "Thrilling yet serene, powerful yet elegant",
    type: "video"
  },
  {
    image: "/inside-kgm/20250207130207051_701vQb.jpg",
    title: "KGM Enjoy with Confidence",
    description: "Enjoy every moment with confidence",
    type: "image"
  },
  {
    image: "/inside-kgm/20250210102145422_N0jceG.jpg",
    title: "The Beauty of Practicality",
    description: "Where style meets functionality",
    type: "image"
  },
  {
    image: "/inside-kgm/20250210102137431_Agh4xc.jpg",
    title: "Innovative Experience",
    description: "An innovative experience with cutting-edge technology",
    type: "image"
  },
  {
    image: "/inside-kgm/20250210102127727_6jcTLO.jpg",
    title: "This is KGM",
    description: "Discover the essence of KGM",
    type: "video"
  },
  {
    image: "/inside-kgm/20250207130518668_p4KVTO.jpg",
    title: "Night Drive",
    description: "Experience the city lights",
    type: "image"
  },
  {
    image: "/inside-kgm/20250210102230541_8MBCuL.jpg",
    title: "Premium Interior",
    description: "Luxury meets technology",
    type: "image"
  },
  {
    image: "/inside-kgm/20250210102338653_kZRVbS.jpg",
    title: "Advanced Technology",
    description: "State-of-the-art features",
    type: "image"
  },
  {
    image: "/inside-kgm/20250210102308541_BneWzr.jpg",
    title: "Future of Mobility",
    description: "Shaping the future of transportation",
    type: "image"
  }
];

export default function InsideKGM() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform based on scroll
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-20 px-6 md:px-12 bg-[#0b0d16] text-white overflow-hidden min-h-screen"
    >
      {/* Top section with title and social icons */}
      <motion.div 
        className="relative mb-12 md:mb-16"
        style={{
          opacity: sectionOpacity,
          y: sectionY
        }}
      >
        {/* Social media icons - top right */}
        <div className="absolute top-0 right-0 flex space-x-3">
          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/15 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/15 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/15 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </button>
        </div>

        {/* Title section */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/90 mb-2"
          >
            We offer a variety of mobility experiences.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#d4be83]"
          >
            Inside KGM
          </motion.h2>
        </div>
      </motion.div>

      {/* Horizontal slider container */}
      <motion.div 
        className="relative max-w-7xl mx-auto overflow-hidden"
        style={{
          opacity: sectionOpacity,
          y: sectionY
        }}
      >
        {/* Slider track */}
        <motion.div 
          className="flex space-x-6"
          animate={{ x: -currentIndex * 320 }} // Adjust based on card width + gap
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {SLIDES.map((slide, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden ring-1 ring-white/10 relative group"
            >
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                </div>
                
                <div className="flex items-center space-x-2 text-white/90">
                  {slide.type === 'video' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                      <circle cx="12" cy="13" r="3"/>
                    </svg>
                  )}
                  <span className="text-sm">{slide.description}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-[#d4be83]' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Right side buttons */}
      <div className="fixed right-6 md:right-10 lg:right-14 bottom-28 flex flex-col gap-3">
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/15 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="22" x2="16" y1="9" y2="15"/>
            <line x1="16" x2="22" y1="9" y2="15"/>
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white text-[10px] leading-tight">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mb-0.5">
            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <path d="M3 9h18"/>
            <path d="M3 15h18"/>
            <path d="M9 3v18"/>
            <path d="M15 3v18"/>
          </svg>
          QUICK
        </button>
      </div>
    </section>
  );
}
