import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedGridPattern } from '@/components/ui/AnimatedGridPattern';
import { ShinyButton } from '@/components/ui/ShinyButton';
import { LogoMarquee } from '@/components/ui/LogoMarquee';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, type: 'spring' as const, stiffness: 280, damping: 24 },
});

const BTN = {
  background: 'linear-gradient(180deg, #C85535 0%, #9E3520 100%)',
  boxShadow: '0 4px 0 #6B2210, 0 8px 20px rgba(0,0,0,0.12)',
};

const logos = [
  { src: '/images/logos/raw/natura.png', alt: 'Natura', className: 'md:h-12' },
  { src: '/images/logos/raw/wfp.png', alt: 'World Food Programme', className: 'md:h-14' },
  { src: '/images/logos/raw/hella.png', alt: 'Forvia Hella', className: 'md:h-11' },
  { src: '/images/logos/raw/ca.png', alt: 'C&A', className: 'md:h-9' }, // Bolder marks need less scale
  { src: '/images/logos/raw/accenture.png', alt: 'Accenture', className: 'md:h-8' }, // Bolder marks need less scale
];

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const HeroContent: React.FC<HeroProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 80]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-[70vh] md:min-h-[75vh] pt-0 pb-12 md:pb-16 overflow-hidden">

      <AnimatedGridPattern
        numSquares={60}
        maxOpacity={0.6}
        duration={3}
        repeatDelay={1}
        className="text-terracotta/[0.04] [mask-image:radial-gradient(600px_circle_at_center,white,transparent)] inset-y-[-30%] h-[160%]"
      />

      <motion.div
        style={{ y: yHero, opacity: opacityHero }}
        className="relative z-10 flex flex-col items-center w-full px-6 md:px-12"
      >
        <motion.div
          {...fade(0)}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mb-6 md:mb-8 inline-block cursor-default"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-terracotta/40 to-amber-500/40 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
            <span className="relative inline-flex items-center gap-2 px-4 py-2 bg-[#EDE7D9] text-ink text-sm font-medium rounded-full border border-terracotta/20 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to Opportunities
            </span>
          </div>
        </motion.div>

        <motion.h1
          {...fade(0.08)}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] font-black font-display text-ink tracking-tight leading-[1.0] mb-4 md:mb-6 max-w-5xl mx-auto"
        >
          {"Experiments that ".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.8 }}
              className="inline-block"
            >
              {word}&nbsp;
            </motion.span>
          ))}
          <br />
          <span className="text-terracotta relative inline-block">
            {"accelerate revenue.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.p {...fade(0.16)} className="text-lg md:text-xl lg:text-[1.3rem] text-ink-muted w-full max-w-5xl mb-8 leading-relaxed mx-auto">
          Delivering measurable impact across e-commerce, B2B platforms, and AI products.
        </motion.p>

        <motion.div {...fade(0.22)} className="flex flex-col sm:flex-row items-center gap-4 mb-12 md:mb-16">
          <ShinyButton
            onClick={() => onNavigate('work')}
          >
            See Case Studies <ArrowRight size={18} />
          </ShinyButton>
          <button
            onClick={() => onNavigate('contact')}
            className="text-ink-muted font-medium hover:text-terracotta transition-colors text-sm underline underline-offset-4 decoration-ink/20 hover:decoration-terracotta px-4 py-2"
          >
            Get in touch
          </button>
        </motion.div>

        <motion.div
          {...fade(0.35)}
          className="w-full max-w-7xl px-4 mt-0 opacity-100 transition-opacity duration-700 flex items-center overflow-hidden"
        >
          <LogoMarquee
            logos={logos}
            speed={60}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
