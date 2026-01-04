import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Download, Linkedin, Mail, ChevronRight, BarChart3, Database, Brain, Globe, ShieldCheck, Calendar, Clock, ArrowLeft, Sun, Moon, Github } from 'lucide-react';
import { CASE_STUDIES, EXPERIENCE, HERO_DATA, BLOG_POSTS } from './constants';
import { CaseStudy, BlogPost } from './types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

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
    { name: 'Experience', id: 'experience' },
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
            className="p-2 text-black dark:text-gray-300 hover:text-[#00CCFF] transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => handleNavClick('contact')} className="px-5 py-2 text-xs font-bold uppercase tracking-widest bg-black text-[#FFFF00] hover:bg-[#00CCFF] hover:text-black dark:bg-[#00CCFF] dark:text-black dark:hover:bg-white transition-all rounded-sm">
            Get in Touch
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-4">
           <button 
              onClick={toggleDarkMode}
              className="text-black dark:text-white"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
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

const HeroContent = ({ onNavigate }: { onNavigate: (section: string) => void }) => (
  <div className="flex flex-col justify-center min-h-[60vh] md:min-h-[70vh] py-12">
    <div className="space-y-10 relative z-10 max-w-6xl mx-auto text-center md:text-left">
      <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[1.1] md:leading-[1.1] text-black dark:text-white uppercase tracking-tighter drop-shadow-sm break-words">
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
      
      <p className="text-lg md:text-2xl text-[#4466FF] dark:text-slate-400 max-w-3xl leading-relaxed font-medium mx-auto md:mx-0">
        De-risking innovation through continuous discovery, data-driven experimentation, and build–measure–learn loops.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start pt-4">
        <button onClick={() => onNavigate('work')} className="px-8 py-5 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest text-sm hover:bg-[#00CCFF] hover:text-black dark:hover:bg-[#00CCFF] dark:hover:text-black transition-all flex items-center justify-center gap-2 shadow-[6px_6px_0px_0px_#FFFF00] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] w-full sm:w-auto rounded-sm">
          View Case Studies <ArrowRight size={18} />
        </button>
        <button onClick={() => onNavigate('contact')} className="px-8 py-5 bg-transparent text-black dark:text-white border-2 border-black dark:border-white font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center gap-2 w-full sm:w-auto rounded-sm">
          Contact Me
        </button>
      </div>
      
      <div className="pt-8 md:pt-12 flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-black/60 dark:text-white/40 font-bold text-xs md:text-sm uppercase tracking-widest">
          <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">
            <BarChart3 size={14} /> Data-Driven
          </div>
          <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">
            <Brain size={14} /> AI Strategy
          </div>
          <div className="flex items-center gap-2 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">
            <Globe size={14} /> Global Scale
          </div>
      </div>
    </div>
  </div>
);

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
    <div 
      onClick={onClick}
      className="group bg-white dark:bg-[#1E293B] border-2 border-black dark:border-white/10 hover:border-black dark:hover:border-[#00CCFF] p-6 md:p-8 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#00CCFF] dark:hover:shadow-[8px_8px_0px_0px_#FFFF00] relative overflow-hidden flex flex-col h-full rounded-xl"
    >
      <div className="flex items-center gap-2 mb-6 border-b border-black/5 dark:border-white/10 pb-4">
        <Icon className="text-black dark:text-white" size={20} />
        <span className="text-[10px] md:text-xs font-bold tracking-widest text-black dark:text-white uppercase truncate">{study.category}</span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-black text-[#00CCFF] mb-3 group-hover:text-black dark:group-hover:text-white transition-colors uppercase leading-tight">{study.title}</h3>
      <p className="text-[#4466FF] dark:text-slate-400 mb-8 line-clamp-3 text-sm leading-relaxed">{study.summary}</p>
      
      <div className="flex items-end justify-between mt-auto">
        <div>
           <div className="text-[10px] md:text-xs font-bold text-black dark:text-white uppercase tracking-widest mb-1">{study.keyMetric.label}</div>
           <div className="text-3xl md:text-4xl font-black text-black dark:text-white">{study.keyMetric.value}</div>
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FFFF00] dark:bg-[#00CCFF] border-2 border-black dark:border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-[#FFFF00] dark:group-hover:bg-white dark:group-hover:text-black transition-colors shrink-0 rounded-full">
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

const CaseStudyModal = ({ study, onClose }: { study: CaseStudy; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-end md:items-center bg-[#FFFF00]/90 dark:bg-[#0B1120]/95 backdrop-blur-md p-0 md:p-6 overflow-y-auto">
      <div className="bg-white dark:bg-[#162032] w-full max-w-6xl border-2 border-black dark:border-[#333] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_#00CCFF] relative flex flex-col max-h-[95vh] md:max-h-[90vh] h-full md:h-auto rounded-t-3xl md:rounded-3xl overflow-hidden">
        
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-[#162032] z-10 p-6 md:p-10 border-b-2 border-black dark:border-[#333] flex justify-between items-start">
          <div className="pr-8">
             <div className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest mb-3 bg-[#FFFF00] inline-block px-2 py-1 rounded-sm">{study.category}</div>
             <h2 className="text-2xl md:text-5xl font-black text-[#00CCFF] uppercase mb-2 leading-tight">{study.title}</h2>
             <p className="text-[#4466FF] dark:text-gray-300 text-sm md:text-lg font-medium">{study.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 bg-black dark:bg-white text-white dark:text-black hover:bg-[#00CCFF] hover:text-black transition-colors shrink-0 rounded-full">
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
                        <XAxis dataKey="name" tick={{fill: '#FFFFFF', fontSize: 10, fontWeight: 700}} axisLine={false} tickLine={false} />
                        <Tooltip 
                          contentStyle={{backgroundColor: '#FFFFFF', borderColor: '#000000', color: '#000000'}}
                          itemStyle={{color: '#4466FF', fontWeight: 'bold'}}
                          cursor={{fill: '#333333'}}
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

const BlogContent = ({ onReadPost, onViewArchive }: { onReadPost: (post: BlogPost) => void, onViewArchive: () => void }) => (
  <div>
    <div className="flex justify-between items-end mb-8 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-black text-[#00CCFF] uppercase tracking-wide flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-[#FFFF00] border-[3px] border-black"></div>
        Writings
      </h2>
      <button onClick={onViewArchive} className="hidden md:flex items-center gap-2 text-black dark:text-white hover:text-[#00CCFF] transition-colors text-sm font-bold uppercase tracking-widest border-b-2 border-black dark:border-white hover:border-[#00CCFF] pb-1">
        View Archive <ArrowRight size={16} />
      </button>
    </div>
    
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {BLOG_POSTS.slice(0, 3).map((post) => (
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
    
    <div className="mt-8 md:mt-12 text-center md:hidden">
        <button onClick={onViewArchive} className="px-8 py-4 bg-white dark:bg-[#1E293B] text-black dark:text-white border-2 border-black dark:border-white font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-[#FFFF00] w-full rounded-sm">
          View All Articles
        </button>
    </div>
  </div>
);

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

const FooterContent = () => (
  <div>
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      {/* Left Column: Contact Info & Socials */}
      <div className="text-left order-2 md:order-1">
          <h2 className="text-4xl md:text-7xl font-black text-[#00CCFF] uppercase mb-6 md:mb-8 leading-none">Ready to create impact?</h2>
          <p className="text-[#4466FF] dark:text-gray-400 mb-8 md:mb-12 text-lg md:text-xl font-medium max-w-md">
            Currently based in {HERO_DATA.contact.location} and open to new opportunities. Let's build something meaningful.
          </p>
          
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
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
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
      <Header onNavigate={handleNavigate} darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      
      <main>
        {view === 'home' ? (
          <>
            <SectionCard id="hero">
              <HeroContent onNavigate={handleNavigate} />
            </SectionCard>
            
            <SectionCard id="work">
              <div className="flex justify-between items-end mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-4xl font-black text-[#00CCFF] uppercase tracking-wide flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFFF00] border-[3px] border-black"></div>
                  Selected Work
                </h2>
                <div className="hidden md:block text-black dark:text-white text-xs font-bold uppercase tracking-widest">
                  CASE STUDIES
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {CASE_STUDIES.map((study) => (
                  <CaseStudyCard 
                    key={study.id} 
                    study={study} 
                    onClick={() => setActiveStudy(study)} 
                  />
                ))}
              </div>
            </SectionCard>

            <SectionCard id="experience">
              <ExperienceContent />
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