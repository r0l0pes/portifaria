import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, type: 'spring' as const, stiffness: 280, damping: 24 },
});

const BTN = {
  background: 'linear-gradient(180deg, #C85535 0%, #9E3520 100%)',
  boxShadow: '0 4px 0 #6B2210, 0 8px 20px rgba(0,0,0,0.12)',
};

const stats = [
  { value: '8+', label: 'Years PM' },
  { value: '4', label: 'Countries' },
  { value: '20+', label: 'Products' },
];

const HeroContent = ({ onNavigate }: { onNavigate: (section: string) => void }) => (
  <div className="flex flex-col items-center justify-center text-center min-h-[80vh] py-16 md:py-24">

    <motion.div {...fade(0)}>
      <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#EDE7D9] text-ink text-sm font-medium rounded-full border border-terracotta/20 mb-10">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        Open to Opportunities · Berlin
      </span>
    </motion.div>

    <motion.h1
      {...fade(0.08)}
      className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] font-black font-display text-ink tracking-tight leading-[1.0] mb-8 max-w-4xl"
    >
      Experiments that<br />
      <span className="text-terracotta">accelerate revenue.</span>
    </motion.h1>

    <motion.p {...fade(0.16)} className="text-lg md:text-xl text-ink-muted max-w-lg mb-10 leading-relaxed mx-auto">
      Senior Product Manager delivering measurable impact across e-commerce, B2B platforms, and AI products.
    </motion.p>

    <motion.div {...fade(0.22)} className="flex flex-col sm:flex-row items-center gap-4 mb-16">
      <motion.button
        onClick={() => onNavigate('work')}
        className="px-8 py-4 text-white font-semibold text-base rounded-xl flex items-center gap-2"
        style={BTN}
        whileHover={{ y: -2, boxShadow: '0 6px 0 #6B2210, 0 12px 28px rgba(0,0,0,0.15)' }}
        whileTap={{ y: 3, boxShadow: '0 1px 0 #6B2210' }}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
      >
        See Case Studies <ArrowRight size={18} />
      </motion.button>
      <button
        onClick={() => onNavigate('contact')}
        className="text-ink-muted font-medium hover:text-terracotta transition-colors text-sm underline underline-offset-4 decoration-ink/20 hover:decoration-terracotta"
      >
        Get in touch
      </button>
    </motion.div>

    <motion.div {...fade(0.32)} className="flex gap-10 md:gap-16">
      {stats.map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="text-2xl md:text-3xl font-black text-terracotta font-display">{value}</div>
          <div className="text-xs text-ink-muted uppercase tracking-widest mt-0.5">{label}</div>
        </div>
      ))}
    </motion.div>

  </div>
);

export { HeroContent };
