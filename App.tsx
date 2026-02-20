import React, { Suspense, useState } from 'react';
import { CASE_STUDIES } from '@/constants';
import { CaseStudy } from '@/types';
import { ScrollProgress } from './src/components/ui/ScrollProgress';
import { Analytics, logEvent } from './src/components/Analytics';
import { Header } from '@/components/layout/Header';
import { HeroContent } from '@/components/sections/Hero';
import { AboutContent } from '@/components/sections/About';
const WorkSection = React.lazy(() => import('@/components/sections/Work').then(m => ({ default: m.WorkSection })));
const CaseStudyModal = React.lazy(() => import('@/components/sections/Work').then(m => ({ default: m.CaseStudyModal })));
const BlogContent = React.lazy(() => import('@/components/sections/Writings').then(m => ({ default: m.BlogContent })));
import { FooterContent } from '@/components/sections/Contact';
import { SectionCard } from '@/components/layout/SectionCard';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { useApp } from '@/context/AppContext';

const App = () => {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const { navigate } = useApp();

  const handleNavigate = (id: string) => {
    navigate(id);
  };

  return (
    <div className="bg-cream page-bg min-h-screen font-sans p-2 md:p-3 pt-24 md:pt-28 text-ink selection:bg-terracotta/20 selection:text-ink">
      <Analytics />
      <ScrollProgress />
      <Header onNavigate={handleNavigate} />

      <main>
        <Suspense fallback={<div />}>
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
            <SectionCard id="work" className="tile-bg">
              <WorkSection onStudyClick={setActiveStudy} />
            </SectionCard>
          </ErrorBoundary>

          <ErrorBoundary>
            <SectionCard id="writings">
              <BlogContent />
            </SectionCard>
          </ErrorBoundary>

          <ErrorBoundary>
            <SectionCard id="contact">
              <FooterContent />
            </SectionCard>
          </ErrorBoundary>
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
    </div>
  );
};

export default App;
