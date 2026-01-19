import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, ArrowRight, Download, Linkedin, Mail, ChevronRight, BarChart3, Database, Brain, Globe, ShieldCheck, Calendar, Clock, ArrowLeft, Sun, Moon, Github, Sparkles, ChevronDown, MapPin } from 'lucide-react';
import { CASE_STUDIES, EXPERIENCE, HERO_DATA, BLOG_POSTS } from './constants';
import { CaseStudy, BlogPost } from './types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ScrollProgress } from './src/components/ui/ScrollProgress';
import { AnimatedText, CountUp } from './src/components/animations/AnimatedText';
import { PageTransition } from './src/components/animations/PageTransition';
import { TiltCard } from './src/components/animations/TiltCard';

// --- Animation Hook ---
const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
};

// --- Animation Classes ---
const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700 ease-out";
const fadeInUpVisible = "opacity-100 translate-y-0";
const staggerDelay = (index: number) => ({ transitionDelay: `${index * 100}ms` });

// --- Animated Background Component ---
const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Initialize dimensions
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (shouldReduceMotion) return;

      // Throttle mouse updates for performance
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('resize', handleResize);
    if (!shouldReduceMotion) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [shouldReduceMotion]);

  if (dimensions.width === 0) return null; // Avoid hydration mismatch

  // Calculate mouse offset from center (normalized -1 to 1)
  const normalizedX = shouldReduceMotion ? 0 : (mousePos.x / dimensions.width) * 2 - 1;
  const normalizedY = shouldReduceMotion ? 0 : (mousePos.y / dimensions.height) * 2 - 1;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none sticky-background">
      {/* Floating particles that react to mouse */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#00CCFF]/10 dark:bg-[#00CCFF]/5 rounded-full blur-xl"
        animate={{
          x: normalizedX * -30,
          y: normalizedY * -30,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 50 }}
      />

      <motion.div
        className="absolute top-1/2 right-20 w-24 h-24 bg-[#4466FF]/10 dark:bg-[#4466FF]/5 rounded-full blur-lg"
        animate={{
          x: normalizedX * 40,
          y: normalizedY * 40,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 40 }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#FFFF00]/10 dark:bg-[#FFFF00]/5 rounded-full blur-2xl"
        animate={{
          x: normalizedX * -20,
          y: normalizedY * -20,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 45 }}
      />

      {/* Static but pulsing elements */}
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-black dark:bg-white rounded-full animate-pulse-slow opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#4466FF] rounded-full animate-pulse-slow opacity-30" style={{ animationDelay: '1s' }} />
      <div className="absolute top-24 right-1/3 w-1 h-1 bg-[#00CCFF] rounded-full animate-pulse-slow opacity-40" style={{ animationDelay: '2s' }} />

      {/* Large gradient orbs for atmosphere */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-radial from-[#00CCFF]/10 to-transparent opacity-50 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-radial from-[#4466FF]/10 to-transparent opacity-50 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </div>
  );
};

// --- Global CSS Keyframes (inject into head) ---
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-slow {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(3deg); }
      }
      @keyframes float-medium {
        0%, 100% { transform: translateY(0) translateX(0); }
        33% { transform: translateY(-15px) translateX(10px); }
        66% { transform: translateY(5px) translateX(-5px); }
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.5); }
      }
      @keyframes spin-very-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      @keyframes bounce-subtle {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      @keyframes wiggle {
        0%, 100% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg); }
      }
      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes text-reveal {
        from { clip-path: inset(0 100% 0 0); }
        to { clip-path: inset(0 0 0 0); }
      }
      @keyframes slide-up-fade {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes scale-in {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes border-pulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(0, 204, 255, 0.4); }
        50% { box-shadow: 0 0 0 8px rgba(0, 204, 255, 0); }
      }
      .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
      .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      .animate-spin-very-slow { animation: spin-very-slow 60s linear infinite; }
      .animate-shimmer {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
      }
      .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
      .animate-wiggle { animation: wiggle 0.5s ease-in-out; }
      .animate-gradient-shift {
        background-size: 200% 200%;
        animation: gradient-shift 3s ease infinite;
      }
      .animate-text-reveal { animation: text-reveal 0.8s ease-out forwards; }
      .animate-slide-up-fade { animation: slide-up-fade 0.6s ease-out forwards; }
      .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
      .animate-border-pulse { animation: border-pulse 2s ease-in-out infinite; }
      .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
      .hover-lift:hover { transform: translateY(-8px) scale(1.02); }
      .hover-glow:hover { box-shadow: 0 0 30px rgba(0, 204, 255, 0.3); }
      .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to)); }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

// --- Sub-Components ---

const SectionCard = ({ id, className = "", children, style }: { id?: string, className?: string, children: React.ReactNode, style?: React.CSSProperties }) => (
  <section
    id={id}
    style={style}
    className={`bg-white dark:bg-[#162032] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-black/5 dark:border-white/5 mx-auto max-w-7xl w-full mb-6 last:mb-0 relative overflow-hidden transition-transform duration-500 ${className}`}
  >
    {children}
  </section>
);

const Header = ({ onNavigate, darkMode, toggleDarkMode }: { onNavigate: (section: string) => void, darkMode: boolean, toggleDarkMode: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Writings', id: 'writings' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#FFFF00]/90 dark:bg-[#0B1120]/90 backdrop-blur-md border-b border-black/5 dark:border-white/5 py-3 md:py-4' : 'bg-[#FFFF00] dark:bg-[#0B1120] py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl font-black tracking-tighter text-black dark:text-white cursor-pointer" onClick={() => handleNavClick('hero')}>
          rlopes
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => handleNavClick(link.id)} className="text-xs font-bold uppercase tracking-widest text-black/80 dark:text-gray-300 hover:text-[#00CCFF] dark:hover:text-[#00CCFF] transition-colors">
              {link.name}
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 text-black dark:text-gray-300 hover:text-[#00CCFF] transition-all hover:rotate-12 active:scale-90"
          >
            <span className="block transition-transform duration-300">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </span>
          </button>
          <button onClick={() => handleNavClick('contact')} className="px-5 py-2 text-xs font-bold uppercase tracking-widest bg-black text-[#FFFF00] hover:bg-[#00CCFF] hover:text-black dark:bg-[#00CCFF] dark:text-black dark:hover:bg-white transition-all rounded-sm">
            Get in Touch
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-white transition-all hover:rotate-12 active:scale-90"
          >
            <span className="block transition-transform duration-300">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </span>
          </button>
          <button className="text-black dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FFFF00] dark:bg-[#0B1120] border-b border-black/10 dark:border-white/10 p-6 flex flex-col gap-4 shadow-xl h-screen">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => handleNavClick(link.id)} className="text-left text-2xl font-black uppercase text-black dark:text-white py-4 border-b border-black/5 dark:border-white/10">
              {link.name}
            </button>
          ))}
          <button onClick={() => handleNavClick('contact')} className="text-left text-2xl font-black uppercase text-black dark:text-white py-4 border-b border-black/5 dark:border-white/10">
            Get in Touch
          </button>
        </div>
      )}
    </nav>
  );
};

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
          Senior Product Manager specializing in AI products, e-commerce growth, and international expansion. 7+ years turning ambiguous problems into measurable business outcomes.
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
            <Brain size={14} /> AI Strategy
          </div>
          <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default">
            <Globe size={14} /> Global Scale
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutContent = () => {
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const [skillsExpanded, setSkillsExpanded] = useState(false);

  const coreSkills = ['Product Discovery', 'A/B Testing', 'AI/ML Products', 'E-Commerce', 'International Expansion', 'B2B Platforms', 'Stakeholder Management', 'Data-Driven Prioritization'];
  const tools = ['Jira', 'Figma', 'GA4/Amplitude', 'SQL', 'Hotjar', 'Confluence', 'Miro', 'Notion'];
  const methodologies = ['Continuous Discovery', 'Jobs-to-be-Done', 'OKRs', 'Lean Experimentation', 'Design Sprints', 'Agile/Scrum'];

  return (
    <div className="py-8 md:py-12">
      <div className="flex justify-between items-end mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-[#00CCFF] uppercase tracking-wide flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-[#FFFF00] border-[3px] border-black"></div>
          About
        </h2>
      </div>

      <div className="max-w-4xl space-y-8">
        {/* Flowing paragraph */}
        <div className="text-base md:text-lg text-black/80 dark:text-white/80 leading-relaxed space-y-4">
          <p>
            Rodrigo Lopes is a Senior Product Manager based in Berlin with 7+ years of experience turning ambiguous problems into measurable outcomes across e-commerce, humanitarian tech, and automotive B2B. He specializes in validating products in high-uncertainty environments: launching AI voice agents for low-literacy farmers in Tanzania, scaling checkout platforms across 4 Latin American markets, and integrating B2B catalogs post-merger for 60,000+ customers.
          </p>
          <p>
            His approach combines rigorous experimentation (15+ A/B tests per project), cross-functional coordination without direct authority, and a bias for shipping over perfecting. He translates technical complexity into business outcomes that stakeholders can act on.
          </p>
        </div>

        {/* Download Resume Button */}
        <div className="pt-2">
          <motion.a
            href="/Resume_Rodrigo-Lopes.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-widest text-sm rounded-sm shadow-[4px_4px_0px_0px_#FFFF00]"
            whileHover={{
              backgroundColor: '#00CCFF',
              color: '#000000',
              boxShadow: '0px 0px 0px 0px #FFFF00',
              x: 2,
              y: 2,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <Download size={18} />
            </motion.div>
            Download Resume
          </motion.a>
        </div>

        {/* Core Skills Dropdown */}
        <div className="pt-4">
          <button
            onClick={() => setSkillsExpanded(!skillsExpanded)}
            className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#4466FF] dark:text-[#00CCFF] hover:text-black dark:hover:text-white transition-colors"
          >
            <ChevronDown size={18} className={`transform transition-transform duration-300 ${skillsExpanded ? 'rotate-180' : ''}`} />
            Core Skills
          </button>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${skillsExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-wrap gap-2 pl-6 border-l-2 border-[#00CCFF]/30">
              {coreSkills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-black/5 dark:bg-white/10 text-black dark:text-white text-sm font-bold rounded-full cursor-default"
                  whileHover={{
                    scale: 1.1,
                    rotate: [-1, 1, -1, 0],
                    backgroundColor: 'rgba(0, 204, 255, 0.2)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Methodologies Dropdown */}
        <div className="pt-2">
          <button
            onClick={() => setToolsExpanded(!toolsExpanded)}
            className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#4466FF] dark:text-[#00CCFF] hover:text-black dark:hover:text-white transition-colors"
          >
            <ChevronDown size={18} className={`transform transition-transform duration-300 ${toolsExpanded ? 'rotate-180' : ''}`} />
            Tools & Methodologies
          </button>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${toolsExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-4 pl-6 border-l-2 border-[#00CCFF]/30">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-2">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="px-2 py-1 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 text-xs font-medium rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-black/50 dark:text-white/50 mb-2">Methodologies</h4>
                <div className="flex flex-wrap gap-2">
                  {methodologies.map((method) => (
                    <span key={method} className="px-2 py-1 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 text-xs font-medium rounded">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceContent = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height;
      const triggerPoint = viewportHeight * 0.5;
      const relativeTop = triggerPoint - rect.top;
      let progress = relativeTop / (sectionHeight - 50);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
        <h2 className="text-3xl md:text-4xl font-black text-[#00CCFF] uppercase tracking-wide flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-[#FFFF00] border-[3px] border-black"></div>
          Experience
        </h2>

        <a href="#" className="inline-flex items-center gap-3 text-[#4466FF] dark:text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#00CCFF] transition-colors group">
          <div className="p-2 border-2 border-[#4466FF] dark:border-slate-400 rounded-full group-hover:border-[#00CCFF] group-hover:bg-[#00CCFF] group-hover:text-black transition-all">
            <Download size={16} />
          </div>
          Download Resume (PDF)
        </a>
      </div>

      <div className="relative pl-8 md:pl-12 border-l-[3px] border-black/10 dark:border-white/10 ml-3" ref={containerRef}>
        {/* Moving Indicator - Yellow circle with black border */}
        <div
          className="absolute -left-[11px] w-6 h-6 bg-[#FFFF00] rounded-full border-[3px] border-black z-20 transition-all duration-75 ease-linear shadow-[0px_2px_4px_rgba(0,0,0,0.2)]"
          style={{ top: `${scrollProgress * 98}%` }}
        />

        <div className="space-y-16 md:space-y-24 py-4">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative group">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl md:text-2xl font-black text-black dark:text-white uppercase group-hover:text-[#00CCFF] transition-colors">{exp.role}</h3>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#00CCFF] bg-black/5 dark:bg-white/5 px-2 py-1 w-fit mt-1 md:mt-0 rounded-sm">{exp.period}</span>
              </div>
              <div className="text-base md:text-lg font-bold text-[#4466FF] dark:text-gray-400 mb-4 md:mb-6">{exp.company} • {exp.location}</div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-[#4466FF] dark:text-slate-300 leading-relaxed text-sm md:text-base pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-black dark:before:bg-[#00CCFF] before:rounded-full">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CaseStudyCard: React.FC<{ study: CaseStudy; onClick: () => void }> = ({ study, onClick }) => {
  const Icon = study.category.includes('Mobility') ? Globe :
    study.category.includes('FMCG') ? BarChart3 :
      study.category.includes('Fintech') ? ShieldCheck :
        study.category.includes('Urban') ? Database : Brain;

  return (
    <TiltCard
      onClick={onClick}
      className="group bg-white dark:bg-[#1E293B] border-2 border-black dark:border-white/10 p-6 md:p-8 cursor-pointer relative overflow-hidden flex flex-col h-full rounded-xl"
      tiltAmount={8}
      scale={1.02}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{
        borderColor: '#00CCFF',
        boxShadow: '8px 8px 0px 0px #00CCFF',
      }}
    // transition prop in TiltCard handles the spring for tilt, we let it handle the rest too or merge?
    // TiltCard has specific transition for tilt. We should probably rely on class transitions for non-motion props if possible, but here we use motion.
    >
      <div className="flex items-center gap-2 mb-6 border-b border-black/5 dark:border-white/10 pb-4">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <Icon className="text-black dark:text-white" size={20} />
        </motion.div>
        <span className="text-[10px] md:text-xs font-bold tracking-widest text-black dark:text-white uppercase truncate">{study.category}</span>
      </div>

      <h3 className="text-xl md:text-2xl font-black text-[#00CCFF] mb-3 group-hover:text-black dark:group-hover:text-white transition-colors uppercase leading-tight transform translate-z-10">{study.title}</h3>
      <p className="text-[#4466FF] dark:text-slate-400 mb-8 line-clamp-3 text-sm leading-relaxed">{study.summary}</p>

      <div className="flex items-end justify-between mt-auto">
        <div>
          <div className="text-[10px] md:text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-1">{study.keyMetric.label}</div>
          <div className="text-3xl md:text-4xl font-black text-black dark:text-white">{study.keyMetric.value}</div>
        </div>
        <motion.div
          className="w-10 h-10 md:w-12 md:h-12 bg-[#FFFF00] dark:bg-[#00CCFF] border-2 border-black dark:border-black flex items-center justify-center text-black shrink-0 rounded-full"
          whileHover={{
            backgroundColor: '#000000',
            color: '#FFFF00',
            rotate: 90,
            scale: 1.1
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        >
          <ArrowRight size={20} />
        </motion.div>
      </div>
    </TiltCard>
  );
};

const CaseStudyModal = ({ study, onClose }: { study: CaseStudy; onClose: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // Trigger entrance animation
    requestAnimationFrame(() => setIsVisible(true));
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex justify-center items-end md:items-center p-0 md:p-6 overflow-y-auto transition-all duration-300 ${isVisible ? 'bg-[#FFFF00]/90 dark:bg-[#0B1120]/95 backdrop-blur-md' : 'bg-transparent'}`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className={`bg-white dark:bg-[#162032] w-full max-w-6xl border-2 border-black dark:border-[#333] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_#00CCFF] relative flex flex-col max-h-[95vh] md:max-h-[90vh] h-full md:h-auto rounded-t-3xl md:rounded-3xl overflow-hidden transition-all duration-300 ease-out ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>

        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-[#162032] z-10 p-6 md:p-10 border-b-2 border-black dark:border-[#333] flex justify-between items-start">
          <div className="pr-8">
            <div className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest mb-3 bg-[#FFFF00] inline-block px-2 py-1 rounded-sm">{study.category}</div>
            <h2 className="text-2xl md:text-5xl font-black text-[#00CCFF] uppercase mb-2 leading-tight">{study.title}</h2>
            <p className="text-[#4466FF] dark:text-gray-300 text-sm md:text-lg font-medium">{study.subtitle}</p>
          </div>
          <button onClick={handleClose} className="p-2 bg-black dark:bg-white text-white dark:text-black hover:bg-[#00CCFF] hover:text-black transition-colors shrink-0 rounded-full active:scale-90">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-12 overflow-y-auto custom-scrollbar bg-white dark:bg-[#162032]">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">

            {/* Main Content */}
            <div className="md:col-span-2 space-y-10 md:space-y-12">

              <section>
                <h3 className="text-xl md:text-2xl font-black text-black dark:text-white uppercase mb-4 md:mb-6 flex items-center gap-3">
                  <span className="w-4 h-4 bg-[#4466FF] dark:bg-slate-500 rounded-sm"></span> Challenge
                </h3>
                <p className="text-[#4466FF] dark:text-gray-300 leading-relaxed text-base md:text-lg">{study.challenge}</p>
              </section>

              <section>
                <h3 className="text-xl md:text-2xl font-black text-black dark:text-white uppercase mb-4 md:mb-6 flex items-center gap-3">
                  <span className="w-4 h-4 bg-[#00CCFF] rounded-sm"></span> Approach
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {study.approach.map((item, idx) => (
                    <div key={idx} className="bg-[#FFFF00]/10 dark:bg-[#00CCFF]/10 p-4 md:p-6 border-l-4 border-[#00CCFF] rounded-r-lg">
                      <h4 className="text-base md:text-lg font-bold text-black dark:text-white uppercase mb-2">{item.title}</h4>
                      <p className="text-[#4466FF] dark:text-gray-300 text-sm md:text-base">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl md:text-2xl font-black text-black dark:text-white uppercase mb-4 md:mb-6 flex items-center gap-3">
                  <span className="w-4 h-4 bg-[#FFFF00] border border-black dark:border-white rounded-sm"></span> Outcomes
                </h3>
                <div className="grid gap-4">
                  {study.outcomes.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="mt-2 w-2 h-2 bg-black dark:bg-white shrink-0 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-black dark:text-white text-sm md:text-base">{item.title}</h4>
                        <p className="text-[#4466FF] dark:text-gray-300 text-xs md:text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Sidebar / Metrics */}
            <div className="space-y-8 md:space-y-10">
              <div className="bg-black dark:bg-[#0B1120] p-6 md:p-8 text-white shadow-[8px_8px_0px_0px_#00CCFF] dark:shadow-[8px_8px_0px_0px_#FFFF00] rounded-xl">
                <h4 className="text-xs font-bold text-[#FFFF00] uppercase tracking-widest mb-4">Key Metric</h4>
                <div className="text-5xl md:text-6xl font-black text-white mb-2">{study.keyMetric.value}</div>
                <div className="text-white/80 mb-6 md:mb-8 font-medium text-sm md:text-base">{study.keyMetric.description}</div>

                {study.keyMetric.chartData && (
                  <div className="h-32 md:h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={study.keyMetric.chartData}>
                        <XAxis dataKey="name" tick={{ fill: '#FFFFFF', fontSize: 10, fontWeight: 700 }} axisLine={false} tickLine={false} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#FFFFFF', borderColor: '#000000', color: '#000000' }}
                          itemStyle={{ color: '#4466FF', fontWeight: 'bold' }}
                          cursor={{ fill: '#333333' }}
                        />
                        <Bar dataKey="value">
                          {study.keyMetric.chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 1 ? '#00CCFF' : '#444'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>

              <div className="bg-white dark:bg-[#1E293B] border-2 border-black dark:border-white/10 p-6 md:p-8 rounded-xl">
                <h4 className="text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-4 md:mb-6 border-b border-black dark:border-white/10 pb-2">Lessons Learned</h4>
                <ul className="space-y-4">
                  {study.lessons.map((lesson, idx) => (
                    <li key={idx} className="text-sm">
                      <span className="block font-bold text-[#00CCFF] uppercase mb-1">{lesson.title}</span>
                      <span className="text-[#4466FF] dark:text-gray-300">{lesson.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t-2 border-black/10 dark:border-white/10">
                <div className="text-xs font-bold text-black/50 dark:text-white/50 uppercase tracking-widest mb-1">Role</div>
                <div className="font-bold text-black dark:text-white text-base md:text-lg">{study.role}</div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const BlogPostView = ({ post, onClose }: { post: BlogPost; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-end md:items-center bg-[#FFFF00]/95 dark:bg-[#0B1120]/95 backdrop-blur-none p-0 md:p-6 overflow-y-auto">
      <div className="bg-white dark:bg-[#162032] w-full max-w-4xl border-2 border-black dark:border-white/20 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_#00CCFF] relative flex flex-col max-h-[95vh] md:max-h-[90vh] h-full md:h-auto rounded-t-3xl md:rounded-3xl overflow-hidden">

        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-[#162032] z-10 p-6 md:p-8 border-b-2 border-black dark:border-white/10 flex justify-between items-center">
          <button onClick={onClose} className="text-xs md:text-sm font-bold uppercase tracking-widest text-black dark:text-white hover:text-[#00CCFF] flex items-center gap-2">
            <ChevronRight size={16} className="rotate-180" /> Back to Writings
          </button>
          <button onClick={onClose} className="p-2 bg-black dark:bg-white text-white dark:text-black hover:bg-[#00CCFF] hover:text-black transition-colors rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-16 overflow-y-auto custom-scrollbar bg-white dark:bg-[#162032]">
          <article className="max-w-2xl mx-auto">
            <header className="mb-8 md:mb-12 text-center border-b-2 border-black/5 dark:border-white/10 pb-8 md:pb-12">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-[10px] md:text-xs font-black text-black uppercase tracking-widest mb-4 md:mb-6">
                {post.tags.map(tag => <span key={tag} className="bg-[#FFFF00] dark:bg-[#00CCFF] text-black px-2 py-1 rounded-sm">{tag}</span>)}
              </div>
              <h1 className="text-3xl md:text-6xl font-black text-[#00CCFF] dark:text-white mb-4 md:mb-6 leading-none uppercase">{post.title}</h1>
              <div className="flex justify-center items-center gap-4 md:gap-6 text-[#4466FF] dark:text-gray-400 font-bold text-xs md:text-sm uppercase tracking-wide">
                <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
              </div>
            </header>

            <div className="space-y-6 md:space-y-8 text-[#4466FF] dark:text-gray-300 leading-relaxed text-base md:text-lg font-medium">
              {post.content.map((block, idx) => {
                if (block.type === 'heading') {
                  return <h2 key={idx} className="text-2xl md:text-3xl font-black text-black dark:text-white mt-8 md:mt-12 mb-2 md:mb-4 uppercase">{block.text}</h2>;
                }
                if (block.type === 'list') {
                  return (
                    <ul key={idx} className="list-disc pl-6 space-y-2 md:space-y-3 my-6 md:my-8 text-black dark:text-white font-medium">
                      {(block as any).items.map((item: string, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                  );
                }
                return <p key={idx}>{block.text}</p>;
              })}
            </div>

            <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t-2 border-black/10 dark:border-white/10 text-center">
              <p className="text-black dark:text-white font-bold uppercase tracking-widest text-xs">Thanks for reading.</p>
            </div>
          </article>
        </div>

      </div>
    </div>
  );
};

const BlogContent = ({ onReadPost, onViewArchive }: { onReadPost: (post: BlogPost) => void, onViewArchive: () => void }) => {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1, 3);
  const totalReadTime = BLOG_POSTS.reduce((acc, post) => acc + parseInt(post.readTime), 0);

  return (
    <div className="relative">
      {/* Subtle background treatment */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00CCFF]/5 to-transparent dark:via-[#00CCFF]/10 -mx-6 md:-mx-12 px-6 md:px-12 rounded-3xl"></div>

      <div className="relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#00CCFF] uppercase tracking-wide flex items-center gap-4 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#FFFF00] border-[3px] border-black"></div>
              Writings
            </h2>
            <p className="text-[#4466FF] dark:text-gray-400 text-sm md:text-base font-medium max-w-md">
              Thinking out loud about product strategy, emerging tech, and lessons learned.
            </p>
            <p className="text-black/40 dark:text-white/40 text-xs font-bold mt-2">
              {BLOG_POSTS.length} articles · {totalReadTime} min total read time
            </p>
          </div>
          <button onClick={onViewArchive} className="hidden md:flex items-center gap-2 px-5 py-3 bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-widest text-xs hover:bg-[#00CCFF] hover:text-black transition-all rounded-sm shadow-[4px_4px_0px_0px_#FFFF00] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            View All Writings <ArrowRight size={16} />
          </button>
        </div>

        {/* Featured Post - Large Card */}
        <div
          onClick={() => onReadPost(featuredPost)}
          className="group bg-white dark:bg-[#1E293B] border-2 border-black dark:border-white/10 p-8 md:p-12 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#4466FF] dark:hover:shadow-[12px_12px_0px_0px_#FFFF00] rounded-xl mb-6 md:mb-8 relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <span className="px-3 py-1 bg-[#FFFF00] text-black text-xs font-black uppercase rounded-full">
              Featured
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
            {featuredPost.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-[#00CCFF]/10 dark:bg-[#00CCFF]/20 text-[#00CCFF] text-xs font-bold rounded">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white mb-4 md:mb-6 group-hover:text-[#00CCFF] transition-colors leading-tight">
            {featuredPost.title}
          </h3>
          <p className="text-[#4466FF] dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl">
            {featuredPost.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-black/50 dark:text-white/50 text-sm font-medium">
              <span>{featuredPost.date}</span>
              <span>·</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-[#00CCFF] text-sm font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
              Read Article <ArrowRight size={18} />
            </div>
          </div>
        </div>

        {/* Other Posts - Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {otherPosts.map((post, index) => (
            <div
              key={post.id}
              onClick={() => onReadPost(post)}
              className="group bg-white dark:bg-[#1E293B] border-2 border-black dark:border-white/10 p-6 md:p-8 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#4466FF] dark:hover:shadow-[8px_8px_0px_0px_#FFFF00] rounded-xl relative"
            >
              {index === 0 && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-[#00CCFF]/10 text-[#00CCFF] text-xs font-bold uppercase rounded">
                    Latest
                  </span>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-black/5 dark:bg-white/10 text-black/60 dark:text-white/60 text-xs font-medium rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg md:text-xl font-black text-black dark:text-white mb-3 md:mb-4 group-hover:text-[#00CCFF] transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-[#4466FF] dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-black/40 dark:text-white/40 text-xs font-medium">{post.date} · {post.readTime}</span>
                <div className="flex items-center gap-2 text-[#00CCFF] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                  Read <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center md:hidden">
          <button onClick={onViewArchive} className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white font-bold uppercase tracking-widest text-xs hover:bg-[#00CCFF] hover:text-black w-full rounded-sm shadow-[4px_4px_0px_0px_#FFFF00] hover:shadow-none">
            View All Writings
          </button>
        </div>
      </div>
    </div>
  );
};

const ArchiveView = ({ onReadPost, onBack }: { onReadPost: (post: BlogPost) => void, onBack: () => void }) => (
  <SectionCard className="min-h-[80vh]">
    <div>
      <div className="mb-12 md:mb-16">
        <button onClick={onBack} className="text-black dark:text-white hover:text-[#00CCFF] flex items-center gap-2 mb-6 md:mb-8 text-xs font-bold uppercase tracking-widest transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <h1 className="text-4xl md:text-7xl font-black text-[#00CCFF] mb-4 uppercase">Archive</h1>
        <p className="text-[#4466FF] dark:text-gray-400 text-lg md:text-xl font-medium max-w-xl">All writings, thoughts, and field notes.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            onClick={() => onReadPost(post)}
            className="group bg-white dark:bg-[#1E293B] border-2 border-black dark:border-white/10 p-6 md:p-8 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#4466FF] dark:hover:shadow-[8px_8px_0px_0px_#FFFF00] rounded-xl"
          >
            <div className="flex justify-between items-start mb-4 md:mb-6 border-b-2 border-black/5 dark:border-white/10 pb-4">
              <span className="text-xs font-bold font-mono text-black dark:text-white">{post.date}</span>
              <span className="text-xs font-bold text-[#4466FF] dark:text-[#00CCFF] uppercase">{post.readTime}</span>
            </div>
            <h3 className="text-lg md:text-xl font-black text-[#00CCFF] mb-3 md:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors uppercase leading-tight">
              {post.title}
            </h3>
            <p className="text-[#4466FF] dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-black dark:text-white text-xs font-bold uppercase tracking-widest mt-auto group-hover:gap-3 transition-all">
              Read Story <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionCard>
);

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Create mailto link with form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Construct the mailto link
    const mailtoLink = `mailto:${HERO_DATA.contact.email}?subject=Message from Portfolio - ${name}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success state
    setTimeout(() => setStatus('success'), 1000);
  };

  if (status === 'success') {
    return (
      <div className="bg-[#FFFF00] dark:bg-[#00CCFF] p-6 md:p-8 border-2 border-black dark:border-black text-center shadow-[8px_8px_0px_0px_#000000] dark:shadow-[8px_8px_0px_0px_#FFFFFF] animate-pulse rounded-sm">
        <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-4">Opening Email...</h3>
        <p className="text-black font-medium mb-6 text-sm md:text-base">Thanks for reaching out. Please check your email client to send the message.</p>
        <button onClick={() => setStatus('idle')} className="text-xs font-bold uppercase underline hover:text-white transition-colors">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-[#4466FF] dark:text-gray-400 mb-2">Name</label>
        <input required name="name" type="text" id="name" className="w-full bg-white dark:bg-[#0B1120] border-2 border-black dark:border-white/20 p-3 md:p-4 text-black dark:text-white font-bold focus:outline-none focus:border-[#00CCFF] focus:shadow-[4px_4px_0px_0px_#00CCFF] dark:focus:shadow-[4px_4px_0px_0px_#FFFF00] transition-all rounded-sm" placeholder="YOUR NAME" />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[#4466FF] dark:text-gray-400 mb-2">Email</label>
        <input required name="email" type="email" id="email" className="w-full bg-white dark:bg-[#0B1120] border-2 border-black dark:border-white/20 p-3 md:p-4 text-black dark:text-white font-bold focus:outline-none focus:border-[#00CCFF] focus:shadow-[4px_4px_0px_0px_#00CCFF] dark:focus:shadow-[4px_4px_0px_0px_#FFFF00] transition-all rounded-sm" placeholder="YOUR EMAIL" />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-[#4466FF] dark:text-gray-400 mb-2">Message</label>
        <textarea required name="message" id="message" rows={4} className="w-full bg-white dark:bg-[#0B1120] border-2 border-black dark:border-white/20 p-3 md:p-4 text-black dark:text-white font-bold focus:outline-none focus:border-[#00CCFF] focus:shadow-[4px_4px_0px_0px_#00CCFF] dark:focus:shadow-[4px_4px_0px_0px_#FFFF00] transition-all rounded-sm" placeholder="HOW CAN I HELP?"></textarea>
      </div>
      <button type="submit" disabled={status === 'submitting'} className="w-full py-4 md:py-5 bg-black dark:bg-white text-[#FFFF00] dark:text-black font-black uppercase tracking-widest border-2 border-transparent hover:border-black dark:hover:border-white hover:bg-[#FFFF00] hover:text-black dark:hover:bg-[#00CCFF] dark:hover:text-black transition-all shadow-[6px_6px_0px_0px_#4466FF] dark:shadow-[6px_6px_0px_0px_#FFFF00] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed text-xs md:text-sm rounded-sm">
        {status === 'submitting' ? 'Preparing Email...' : 'Send Message'}
      </button>
    </form>
  );
};

const WorkSection = ({ onStudyClick }: { onStudyClick: (study: CaseStudy) => void }) => {
  const { ref, isInView } = useInView();

  return (
    <div ref={ref}>
      <div className={`flex justify-between items-end mb-12 md:mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl md:text-4xl font-black text-[#00CCFF] uppercase tracking-wide flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-[#FFFF00] border-[3px] border-black"></div>
          Selected Work
        </h2>
        <div className="hidden md:block text-black dark:text-white text-xs font-bold uppercase tracking-widest">
          CASE STUDIES
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {CASE_STUDIES.map((study, index) => (
          <div
            key={study.id}
            className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: isInView ? `${(index + 1) * 100}ms` : '0ms' }}
          >
            <CaseStudyCard
              study={study}
              onClick={() => onStudyClick(study)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterContent = () => (
  <div>
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      {/* Left Column: Contact Info & Socials */}
      <div className="text-left order-2 md:order-1">
        <h2 className="text-4xl md:text-7xl font-black text-[#00CCFF] uppercase mb-6 md:mb-8 leading-none">Let's Talk</h2>
        <p className="text-[#4466FF] dark:text-gray-400 mb-6 md:mb-8 text-lg md:text-xl font-medium max-w-md">
          Currently based in {HERO_DATA.contact.location} and open to new opportunities.
        </p>

        {/* Direct Email */}
        <a
          href={`mailto:${HERO_DATA.contact.email}`}
          className="inline-flex items-center gap-3 text-black dark:text-white text-lg md:text-xl font-bold hover:text-[#00CCFF] transition-colors mb-8 md:mb-12 group"
        >
          <Mail size={24} className="text-[#00CCFF]" />
          <span className="border-b-2 border-transparent group-hover:border-[#00CCFF] transition-all">
            {HERO_DATA.contact.email}
          </span>
        </a>

        <div className="flex flex-row gap-6 mb-8 md:mb-12">
          {/* Social Buttons */}
          <a href={`https://${HERO_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-[#0B1120] border-2 border-black dark:border-white flex items-center justify-center text-black dark:text-white shadow-[4px_4px_0px_0px_#4466FF] dark:shadow-[4px_4px_0px_0px_#FFFF00] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all rounded-sm">
              <Linkedin size={24} />
            </div>
          </a>

          <a href={`https://${HERO_DATA.contact.github}`} target="_blank" rel="noreferrer" className="group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-[#0B1120] border-2 border-black dark:border-white flex items-center justify-center text-black dark:text-white shadow-[4px_4px_0px_0px_#00CCFF] dark:shadow-[4px_4px_0px_0px_#FFFF00] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all rounded-sm">
              <Github size={24} />
            </div>
          </a>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="bg-[#FFFF00]/10 dark:bg-white/5 p-6 md:p-12 border-2 border-black dark:border-white/20 relative order-1 md:order-2 rounded-xl">
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#00CCFF] border-2 border-black dark:border-white hidden md:block rounded-full"></div>
        <h3 className="text-xl md:text-2xl font-black text-black dark:text-white uppercase mb-6 md:mb-8 flex items-center gap-3">
          <span className="w-4 h-4 bg-[#00CCFF] rounded-sm"></span>
          Send a Message
        </h3>
        <ContactForm />
      </div>
    </div>

    <div className="mt-16 md:mt-24 pt-8 border-t-2 border-black/10 dark:border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-black/40 dark:text-white/40 text-[10px] md:text-xs font-bold uppercase">
        &copy; {new Date().getFullYear()} Rodrigo Lopes.
      </div>
      <div className="text-black/40 dark:text-white/40 text-[10px] md:text-xs font-bold uppercase">
        Designed & Built with React
      </div>
    </div>
  </div>
);

// --- Main App Component ---

const App = () => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [view, setView] = useState<'home' | 'archive'>('home');
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    // Persist preference and apply class
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Reset scroll when view changes
    window.scrollTo(0, 0);
  }, [view]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (id: string) => {
    if (view === 'archive') {
      setView('home');
      // Give time for render to switch back to home before scrolling
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <div className="bg-[#FFFF00] dark:bg-[#0B1120] min-h-screen font-sans p-2 md:p-3 pt-24 md:pt-28 text-[#4466FF] dark:text-gray-300 selection:bg-[#00CCFF] selection:text-black dark:selection:bg-[#FFFF00] transition-colors duration-300">
      <GlobalStyles />
      <ScrollProgress />
      <Header onNavigate={handleNavigate} darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      <main>
        {view === 'home' ? (
          <>
            <SectionCard id="hero">
              <HeroContent onNavigate={handleNavigate} />
            </SectionCard>

            <SectionCard id="about">
              <AboutContent />
            </SectionCard>

            <SectionCard id="work">
              <WorkSection onStudyClick={setActiveStudy} />
            </SectionCard>

            <SectionCard id="writings">
              <BlogContent
                onReadPost={setActivePost}
                onViewArchive={() => setView('archive')}
              />
            </SectionCard>

            <SectionCard id="contact">
              <FooterContent />
            </SectionCard>
          </>
        ) : (
          <ArchiveView
            onReadPost={setActivePost}
            onBack={() => setView('home')}
          />
        )}
      </main>

      {activeStudy && (
        <CaseStudyModal
          study={activeStudy}
          onClose={() => setActiveStudy(null)}
        />
      )}

      {activePost && (
        <BlogPostView
          post={activePost}
          onClose={() => setActivePost(null)}
        />
      )}
    </div>
  );
};

export default App;