import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useApp } from '@/context/AppContext';

const Header = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const { navigate } = useApp();
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
    { name: 'Writing', id: 'writings' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/90 backdrop-blur-md border-b border-ink/[0.06] py-3 md:py-4' : 'bg-cream py-4 md:py-6'}`}>
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
          <button
            onClick={() => handleNavClick('contact')}
            className="px-5 py-2 text-sm font-semibold text-white transition-colors rounded-lg"
            style={{ background: 'linear-gradient(160deg, #C05030 0%, #A03F22 100%)' }}
          >
            Get in Touch
          </button>
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
    </nav>
  );
};

export { Header };
