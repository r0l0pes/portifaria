import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useApp } from '@/context/AppContext';

/**
 * Fixed navigation bar with desktop/mobile menus, dark mode toggle, and scroll-aware styling.
 * @param {{ onNavigate: (section: string) => void }} props
 * @param {(section: string) => void} props.onNavigate - Callback to scroll to a section by ID
 * @returns {React.ReactElement} Header nav element
 */
const Header = ({ onNavigate }: { onNavigate: (section: string) => void }) => {
  const { darkMode, toggleDarkMode } = useApp();
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
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
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
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-black dark:text-white transition-all hover:rotate-12 active:scale-90"
          >
            <span className="block transition-transform duration-300">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </span>
          </button>
          <button className="text-black dark:text-white" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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

export { Header };
