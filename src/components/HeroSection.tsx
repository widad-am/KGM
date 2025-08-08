'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, ArrowRight, VolumeX, Volume2, X, Grid } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const HeroSection = () => {
  const [isQuickMenuOpen, setIsQuickMenuOpen] = useState(false);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Lazily create the audio element so it doesn't block initial render
    const audio = new Audio();
    // Try common audio formats – the first that exists will play
    // Place your file at public/media/KGM_main_sound_400k-Cd1qYekB.(mp3|ogg|webm)
    const sources = [
      '/media/KGM_main_sound_400k-Cd1qYekB.mp3',
      '/media/KGM_main_sound_400k-Cd1qYekB.ogg',
      '/media/KGM_main_sound_400k-Cd1qYekB.webm',
    ];
    // Pick the first one; browser will 404 if not found, which is fine
    audio.src = sources[0];
    audio.preload = 'auto';
    audioRef.current = audio;

    // Cleanup on unmount
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleSound = async () => {
    if (!audioRef.current) return;
    try {
      if (isSoundPlaying) {
        audioRef.current.pause();
        setIsSoundPlaying(false);
      } else {
        await audioRef.current.play();
        setIsSoundPlaying(true);
      }
    } catch (err) {
      // Autoplay restrictions or missing file – simply ignore for now
      console.error('Audio playback failed:', err);
    }
  };

  const quickMenuItems = [
    {
      icon: "/icons/icon-quickmenu-catalog.svg",
      title: "CATALOG",
      href: "#catalog"
    },
    {
      icon: "/icons/icon-quickmenu-owner-manual.svg",
      title: "OWNER'S MANUAL",
      href: "#manual"
    },
    {
      icon: "/icons/icon-quickmenu-as-manual.svg",
      title: "A/S MANUAL",
      href: "#as-manual"
    },
    {
      icon: "/icons/icon-quickmenu-parts-catalog.svg",
      title: "PARTS CATALOG",
      href: "#parts"
    },
    {
      icon: "/icons/icon-quickmenu-global-network.svg",
      title: "GLOBAL NETWORK",
      href: "#network"
    }
  ];

  const heroVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const menuBarVariants = {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background - starts from very top */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero/tsconfig.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Left Side Content - positioned like in the car interior image */}
        <div className="flex-1 flex items-center px-8 lg:px-16 pt-20">
          <motion.div
            variants={heroVariants}
            initial="initial"
            animate="animate"
            className="text-white max-w-md"
          >
            {/* MUSSO EV Text */}
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
              MUSSO EV
            </h2>
            
            {/* Main Tagline (smaller than before) */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              NEW TOOLS. NEW LIFE.
            </h1>
            
            {/* Learn More Link */}
            <motion.a
              href="#learn-more"
              whileHover={{ x: 5 }}
              className="inline-flex items-center text-lg font-semibold hover:text-white/90 transition-colors"
            >
              Learn more <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Sound Control - bottom left (click to toggle) */}
        <div className="absolute bottom-8 left-8 z-20">
          <motion.button
            onClick={toggleSound}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
            aria-pressed={isSoundPlaying}
            aria-label="Toggle sound"
          >
            {isSoundPlaying ? (
              <Volume2 className="w-5 h-5" />
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
            <span className="text-sm font-medium">SOUND</span>
          </motion.button>
        </div>

        {/* Quick Menu Button - positioned at bottom right */}
        <div className="absolute bottom-8 right-8 z-30">
          <motion.button
            onClick={() => setIsQuickMenuOpen(!isQuickMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 bg-kgm-purple/80 backdrop-blur-sm rounded-full border border-white/20 flex flex-col items-center justify-center text-white shadow-lg"
          >
            <Grid className="w-6 h-6 mb-1" />
            <span className="text-xs font-bold uppercase">QUICK</span>
          </motion.button>
        </div>

        {/* Quick Menu Bar - exact horizontal pill-shaped design */}
        <AnimatePresence>
          {isQuickMenuOpen && (
            <motion.div
              variants={menuBarVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute bottom-8 left-1/4 transform -translate-x-1/2 z-40"
            >
              <div className="bg-kgm-purple/90 backdrop-blur-md rounded-full px-8 py-6 border border-white/20 shadow-xl">
                <div className="flex items-center justify-center space-x-8">
                  {/* Menu Items */}
                  {quickMenuItems.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <motion.a
                        href={item.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center space-y-2 text-white group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={20}
                            height={20}
                            className="w-5 h-5 filter invert"
                          />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wide group-hover:text-white/90 transition-colors whitespace-nowrap">
                          {item.title}
                        </span>
                      </motion.a>
                      
                      {/* Vertical separator line (except for last item) */}
                      {index < quickMenuItems.length - 1 && (
                        <div className="w-px h-10 bg-white/30 mx-4"></div>
                      )}
                    </div>
                  ))}

                  {/* Close Button - positioned on the right */}
                  <div className="ml-4">
                    <motion.button
                      onClick={() => setIsQuickMenuOpen(false)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-white rounded-full flex flex-col items-center justify-center text-black shadow-lg border border-black/10 p-10"
                    >
                      <X className="w-4 h-4 mb-1" />
                      <span className="text-xs font-bold uppercase">QUICK</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/70"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 