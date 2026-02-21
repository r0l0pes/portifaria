import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';

const BTN_STYLE = {
  background: 'linear-gradient(180deg, #C85535 0%, #9E3520 100%)',
  boxShadow: '0 3px 0 #6B2210, 0 6px 14px rgba(0,0,0,0.12)',
};

const Header = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const { navigate } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    // Check if scrolled past threshold for background change
    if (latest > 20) setIsScrolled(true);
    else setIsScrolled(false);

    // Hide header entirely if scrolling down, show if scrolling up
    if (latest > 150 && latest > previous) {
      setHidden(true);
      setMobileMenuOpen(false); // Close mobile menu if open while scrolling down
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Writing', id: 'writings' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-cream/90 backdrop-blur-md border-b border-ink/[0.06] py-3 md:py-4 shadow-sm' : 'bg-cream/0 py-4 md:py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div
          className="text-xl font-black tracking-tighter text-ink cursor-pointer font-display"
          onClick={() => handleNavClick('hero')}
        >
          rlopes
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-medium text-ink-muted hover:text-ink transition-colors"
            >
              {link.name}
            </button>
          ))}
          <motion.button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl"
            style={BTN_STYLE}
            whileHover={{ y: -1, boxShadow: '0 4px 0 #6B2210, 0 8px 18px rgba(0,0,0,0.15)' }}
            whileTap={{ y: 2, boxShadow: '0 1px 0 #6B2210, 0 2px 6px rgba(0,0,0,0.1)' }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          >
            Get in Touch
          </motion.button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="flex md:hidden text-ink"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-b border-ink/10 p-6 flex flex-col gap-2 shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-left text-lg font-semibold text-ink py-3 border-b border-ink/5"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="text-left text-lg font-semibold text-terracotta py-3"
          >
            Get in Touch
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export { Header };
