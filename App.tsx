import React, { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, ArrowRight, Download, Linkedin, Mail, ChevronRight, BarChart3, Database, Brain, Globe, ShieldCheck, Calendar, Clock, ArrowLeft, Sun, Moon, Github, Sparkles, ChevronDown, MapPin, ChevronLeft } from 'lucide-react';
import { CASE_STUDIES, EXPERIENCE, HERO_DATA, BLOG_POSTS } from '@/constants';
import { CaseStudy, BlogPost } from '@/types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ScrollProgress } from './src/components/ui/ScrollProgress';
import { AnimatedText, CountUp } from './src/components/animations/AnimatedText';
import { PageTransition } from './src/components/animations/PageTransition';
import { TiltCard } from './src/components/animations/TiltCard';
import { Analytics, logEvent } from './src/components/Analytics';
import { Header } from '@/components/layout/Header';
import { HeroContent } from '@/components/sections/Hero';
import { AboutContent } from '@/components/sections/About';
const WorkSection = React.lazy(() => import('@/components/sections/Work').then(m => ({ default: m.WorkSection })));
const CaseStudyModal = React.lazy(() => import('@/components/sections/Work').then(m => ({ default: m.CaseStudyModal })));
const BlogPostView = React.lazy(() => import('@/components/sections/Writings').then(m => ({ default: m.BlogPostView })));
const BlogContent = React.lazy(() => import('@/components/sections/Writings').then(m => ({ default: m.BlogContent })));
const ArchiveView = React.lazy(() => import('@/components/sections/Writings').then(m => ({ default: m.ArchiveView })));
import { FooterContent } from '@/components/sections/Contact';
import { SectionCard } from '@/components/layout/SectionCard';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { AnimatedBackground } from './src/components/animations/AnimatedBackground';
import { GlobalStyles } from './src/components/animations/GlobalStyles';
import { useApp } from '@/context/AppContext';

// --- Animation Classes ---
const fadeInUp = "opacity-0 translate-y-8 transition-all duration-700 ease-out";
const fadeInUpVisible = "opacity-100 translate-y-0";
const staggerDelay = (index: number) => ({ transitionDelay: `${index * 100}ms` });

// --- Sub-Components ---

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

// --- Main App Component ---

const App = () => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [view, setView] = useState<'home' | 'archive'>('home');
  const { navigate } = useApp();

  useEffect(() => {
    // Reset scroll when view changes
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (id: string) => {
    if (view === 'archive') {
      setView('home');
      // Give time for render to switch back to home before scrolling
      setTimeout(() => navigate(id), 100);
    } else {
      navigate(id);
    }
  };

  return (
    <div className="bg-[#FFFF00] dark:bg-[#0B1120] min-h-screen font-sans p-2 md:p-3 pt-24 md:pt-28 text-[#4466FF] dark:text-gray-300 selection:bg-[#00CCFF] selection:text-black dark:selection:bg-[#FFFF00] transition-colors duration-300">
      <Analytics />
      <GlobalStyles />
      <ScrollProgress />
      <Header onNavigate={handleNavigate} />

      <main>
        <Suspense fallback={<div />}>
          {view === 'home' ? (
            <>
              <ErrorBoundary>
                <SectionCard id="hero">
                  <HeroContent onNavigate={handleNavigate} />
                </SectionCard>
              </ErrorBoundary>

              <ErrorBoundary>
                <SectionCard id="about">
                  <AboutContent />
                </SectionCard>
              </ErrorBoundary>

              <ErrorBoundary>
                <SectionCard id="work">
                  <WorkSection onStudyClick={setActiveStudy} />
                </SectionCard>
              </ErrorBoundary>

              <ErrorBoundary>
                <SectionCard id="writings">
                  <BlogContent
                    onReadPost={setActivePost}
                    onViewArchive={() => setView('archive')}
                  />
                </SectionCard>
              </ErrorBoundary>

              <ErrorBoundary>
                <SectionCard id="contact">
                  <FooterContent />
                </SectionCard>
              </ErrorBoundary>
            </>
          ) : (
            <ArchiveView
              onReadPost={setActivePost}
              onBack={() => setView('home')}
            />
          )}
        </Suspense>
      </main>

      {activeStudy && (
        <CaseStudyModal
          study={activeStudy}
          onClose={() => setActiveStudy(null)}
          onNext={() => {
            const currentIndex = CASE_STUDIES.findIndex(s => s.id === activeStudy.id);
            if (currentIndex < CASE_STUDIES.length - 1) {
              setActiveStudy(CASE_STUDIES[currentIndex + 1]);
            }
          }}
          onPrev={() => {
            const currentIndex = CASE_STUDIES.findIndex(s => s.id === activeStudy.id);
            if (currentIndex > 0) {
              setActiveStudy(CASE_STUDIES[currentIndex - 1]);
            }
          }}
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