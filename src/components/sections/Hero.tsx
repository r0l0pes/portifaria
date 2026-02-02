import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, Brain, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Hero section with animated headline, subtitle, CTAs, and skill badges.
 * @param {{ onNavigate: (section: string) => void }} props
 * @param {(section: string) => void} props.onNavigate - Callback to scroll to a section by ID
 * @returns {React.ReactElement} Hero section content
 */
const HeroContent = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[60vh] md:min-h-[70vh] py-12">
      <div className="space-y-10 relative z-10 max-w-6xl mx-auto text-center md:text-left">
        <h1 className={`text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[1.1] md:leading-[1.1] text-black dark:text-white uppercase tracking-tighter drop-shadow-sm break-words transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="block mb-2 md:mb-4">From</span>
          <span className="relative inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <span className="absolute inset-0 bg-[#00CCFF] transform skew-x-[-10deg] scale-110 md:scale-105 rounded-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"></span>
            <span className="relative z-10 px-4 md:px-6 text-black">Hypothesis</span>
          </span>
          <br className="hidden md:block" />
          <span className="block mt-4 md:mt-6">
            To
            <span className="relative inline-block ml-4 md:ml-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <span className="absolute inset-0 bg-[#FFFF00] transform skew-x-[10deg] scale-110 md:scale-105 rounded-sm shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[-8px_8px_0px_0px_rgba(255,255,255,0.2)]"></span>
              <span className="relative z-10 px-4 md:px-6 text-black">Impact.</span>
            </span>
          </span>
        </h1>

        <p className={`text-lg md:text-2xl text-[#4466FF] dark:text-slate-400 max-w-3xl leading-relaxed font-medium mx-auto md:mx-0 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Senior Product Manager with 8+ years in e-commerce growth, B2B platforms, and international expansion.
        </p>

        <div className={`flex items-center justify-center md:justify-start transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 dark:bg-green-500/30 text-green-700 dark:text-green-400 rounded-full text-sm font-bold border border-green-500/30">
            <Sparkles size={16} className="animate-pulse" />
            Open to Opportunities
          </span>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start pt-4 transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <motion.button
            onClick={() => onNavigate('work')}
            aria-label="View Case Studies"
            className="px-8 py-5 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_#FFFF00] w-full sm:w-auto rounded-sm"
            whileHover={{
              scale: 1.02,
              backgroundColor: '#00CCFF',
              color: '#000000',
              boxShadow: '0px_0px_0px_0px_#FFFF00',
              x: 2,
              y: 2,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            View Case Studies <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            ><ArrowRight size={18} /></motion.span>
          </motion.button>
          <motion.button
            onClick={() => onNavigate('contact')}
            aria-label="Contact Me"
            className="px-8 py-5 bg-transparent text-black dark:text-white border-2 border-black dark:border-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 w-full sm:w-auto rounded-sm"
            whileHover={{
              scale: 1.02,
              backgroundColor: '#000000',
              color: '#FFFFFF',
              borderColor: '#000000',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Contact Me
          </motion.button>
        </div>

        <div className={`pt-8 md:pt-12 flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-black/60 dark:text-white/40 font-bold text-xs md:text-sm uppercase tracking-widest transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default">
            <BarChart3 size={14} /> Data-Driven
          </div>
          <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default">
            <Brain size={14} /> Product Strategy
          </div>
          <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default">
            <Globe size={14} /> Global Scale
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroContent };
