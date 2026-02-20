import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, Brain, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroContent = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col justify-center min-h-[60vh] md:min-h-[70vh] py-12">
      <div className="space-y-10 relative z-10 max-w-6xl mx-auto text-center md:text-left">
        <h1 className={`text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[1.05] text-ink tracking-tighter break-words transition-all duration-700 font-display ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="block mb-2 md:mb-4">From</span>
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-terracotta/15 rounded-lg -skew-x-2"></span>
            <span className="relative z-10 px-4 md:px-6 text-terracotta">Hypothesis</span>
          </span>
          <br className="hidden md:block" />
          <span className="block mt-4 md:mt-6">
            To
            <span className="relative inline-block ml-4 md:ml-8">
              <span className="absolute inset-0 bg-amber/20 rounded-lg skew-x-1"></span>
              <span className="relative z-10 px-4 md:px-6 text-ink">Impact.</span>
            </span>
          </span>
        </h1>

        <p className={`text-lg md:text-2xl text-ink-muted max-w-3xl leading-relaxed font-medium mx-auto md:mx-0 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Senior Product Manager with 8+ years in e-commerce growth, B2B platforms, and international expansion.
        </p>

        <div className={`flex items-center justify-center md:justify-start transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-700 rounded-full text-sm font-medium border border-green-500/20">
            <Sparkles size={16} className="animate-pulse" />
            Open to Opportunities
          </span>
        </div>

        <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start pt-4 transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <motion.button
            onClick={() => onNavigate('work')}
            aria-label="View Case Studies"
            className="px-8 py-4 bg-terracotta text-white font-semibold text-sm flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl"
            whileHover={{ scale: 1.02, backgroundColor: '#A03F22' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            See Case Studies <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            ><ArrowRight size={18} /></motion.span>
          </motion.button>
          <motion.button
            onClick={() => onNavigate('contact')}
            aria-label="Get in Touch"
            className="px-8 py-4 bg-transparent text-ink border border-ink/20 font-semibold text-sm flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl hover:border-ink/40 transition-colors"
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            Get in Touch
          </motion.button>
        </div>

        <div className={`pt-8 md:pt-12 flex flex-wrap justify-center md:justify-start gap-3 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2 bg-ink/5 text-ink-muted px-3 py-1.5 rounded-full text-xs font-medium hover:bg-ink/10 transition-colors cursor-default">
            <BarChart3 size={13} /> Data-Driven
          </div>
          <div className="flex items-center gap-2 bg-ink/5 text-ink-muted px-3 py-1.5 rounded-full text-xs font-medium hover:bg-ink/10 transition-colors cursor-default">
            <Brain size={13} /> Product Strategy
          </div>
          <div className="flex items-center gap-2 bg-ink/5 text-ink-muted px-3 py-1.5 rounded-full text-xs font-medium hover:bg-ink/10 transition-colors cursor-default">
            <Globe size={13} /> Global Scale
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroContent };
