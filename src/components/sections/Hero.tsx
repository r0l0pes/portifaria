import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const BTN_STYLE = {
  background: 'linear-gradient(180deg, #C85535 0%, #9E3520 100%)',
  boxShadow: '0 4px 0 #6B2210, 0 8px 20px rgba(0,0,0,0.12)',
};

const HeroContent = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <div className="flex flex-col justify-center min-h-[60vh] md:min-h-[70vh]">
      {/* Hero card — contained, warm surface */}
      <div className="bg-[#EDE7D9] rounded-3xl p-8 md:p-16 max-w-5xl mx-auto w-full">
        <div className={`space-y-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-ink tracking-tight font-display">
            From <span className="text-terracotta">Hypothesis</span>
            <br />
            To <span className="text-terracotta">Impact.</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed">
            Senior Product Manager with 8+ years in e-commerce growth, B2B platforms, and international expansion.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <motion.button
              onClick={() => onNavigate('work')}
              className="px-8 py-4 text-white font-semibold text-base rounded-xl flex items-center gap-2"
              style={BTN_STYLE}
              whileHover={{ y: -2, boxShadow: '0 6px 0 #6B2210, 0 10px 24px rgba(0,0,0,0.15)' }}
              whileTap={{ y: 2, boxShadow: '0 2px 0 #6B2210, 0 4px 10px rgba(0,0,0,0.1)' }}
              transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            >
              See Case Studies <ArrowRight size={18} />
            </motion.button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-ink-muted font-medium hover:text-terracotta transition-colors text-sm underline underline-offset-4"
            >
              or get in touch
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export { HeroContent };
