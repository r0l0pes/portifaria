import React, { createContext, useContext, useState, useEffect } from 'react';

/** Shape of the global application context. */
interface AppContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  activeSection: string;
  navigate: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

/**
 * Provides dark mode state, navigation, and section tracking to the component tree.
 * @param {{ children: React.ReactNode }} props
 * @param {React.ReactNode} props.children - Application component tree
 * @returns {React.ReactElement} Context provider wrapping children
 */
const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return false; // Default to Light Mode
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Persist preference and apply class
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const navigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode, activeSection, navigate }}>
      {children}
    </AppContext.Provider>
  );
};

/**
 * Accesses the global app context (dark mode, navigation).
 * Must be called within an AppProvider.
 * @returns {AppContextType} Current dark mode state, toggle, active section, and navigate function
 */
const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export { AppContext, AppProvider, useApp };
