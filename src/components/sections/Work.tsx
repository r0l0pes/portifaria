import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe, BarChart3, ShieldCheck, Database, Brain, X, ChevronRight, ChevronLeft } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { TiltCard } from '../animations/TiltCard';
import { CASE_STUDIES } from '@/constants';
import { CaseStudy } from '@/types';
import { logEvent } from '../../components/Analytics';


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
      {/* Subtitle removed as requested */}

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

/**
 * Full-screen modal displaying a case study's challenge, approach, outcomes, and metrics.
 * @param {{ study: CaseStudy, onClose: () => void, onNext?: () => void, onPrev?: () => void }} props
 * @param {CaseStudy} props.study - Case study data to display
 * @param {() => void} props.onClose - Close the modal
 * @param {() => void} [props.onNext] - Navigate to next case study
 * @param {() => void} [props.onPrev] - Navigate to previous case study
 * @returns {React.ReactElement} Modal overlay with case study content
 */
const CaseStudyModal = ({ study, onClose, onNext, onPrev }: { study: CaseStudy; onClose: () => void; onNext?: () => void; onPrev?: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: contentRef });

  const headerOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const headerScale = useTransform(scrollY, [0, 150], [1, 0.95]);
  const headerY = useTransform(scrollY, [0, 150], [0, -10]);

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

        {/* Floating Navigation Buttons */}
        <div className="absolute top-0 right-0 z-20 p-6 md:p-10 flex gap-2 pointer-events-none">
          <div className="flex gap-2 pointer-events-auto">
            {onPrev && (
              <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="p-2 bg-black dark:bg-white text-white dark:text-black hover:bg-[#00CCFF] hover:text-black transition-colors shrink-0 rounded-full active:scale-90 shadow-md">
                <ChevronLeft size={20} />
              </button>
            )}
            {onNext && (
              <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="p-2 bg-black dark:bg-white text-white dark:text-black hover:bg-[#00CCFF] hover:text-black transition-colors shrink-0 rounded-full active:scale-90 shadow-md">
                <ChevronRight size={20} />
              </button>
            )}
            <button onClick={onClose} className="p-2 bg-black dark:bg-white text-white dark:text-black hover:bg-[#00CCFF] hover:text-black transition-colors shrink-0 rounded-full active:scale-90 shadow-md">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="overflow-y-auto custom-scrollbar bg-white dark:bg-[#162032] flex flex-col h-full">
          {/* Scrollable Header */}
          <motion.div
            className="p-6 md:p-10 border-b-2 border-black dark:border-[#333] mb-10 md:mb-12"
            style={{ opacity: headerOpacity, scale: headerScale, y: headerY, originX: 0, originY: 0 }}
          >
            <div className="pr-32 md:pr-40"> {/* Padding to clear floating buttons */}
              <div className="text-[10px] md:text-xs font-bold text-black uppercase tracking-widest mb-3 bg-[#FFFF00] inline-block px-2 py-1 rounded-sm">{study.category}</div>
              <h2 className="text-2xl md:text-5xl font-black text-[#00CCFF] uppercase mb-2 leading-tight">{study.title}</h2>
              <p className="text-[#4466FF] dark:text-gray-300 text-sm md:text-lg font-medium">{study.subtitle}</p>
            </div>
          </motion.div>

          <div className="px-6 md:px-12 pb-12">
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
                          <Bar dataKey="value" animationDuration={1500} animationEasing="ease-out">
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
    </div>
  );
};

/**
 * Work section listing case study cards with staggered reveal animation.
 * @param {{ onStudyClick: (study: CaseStudy) => void }} props
 * @param {(study: CaseStudy) => void} props.onStudyClick - Callback when a case study card is clicked
 * @returns {React.ReactElement} Work section grid
 */
const WorkSection = ({ onStudyClick }: { onStudyClick: (study: CaseStudy) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {CASE_STUDIES.map((study, index) => (
          <div
            key={study.id}
            className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: isInView ? `${(index + 1) * 100}ms` : '0ms' }}
          >
            <CaseStudyCard
              study={study}
              onClick={() => {
                logEvent('Case Study', 'View Case Study', study.title);
                onStudyClick(study);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { WorkSection, CaseStudyModal };
