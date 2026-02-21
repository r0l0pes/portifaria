import React, { useState } from 'react';
import { Download, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { logEvent } from '../../components/Analytics';
import { BlurFade } from '../ui/BlurFade';

const AboutContent = () => {
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const [skillsExpanded, setSkillsExpanded] = useState(false);

  const coreSkills = [
    'Product Strategy', 'Experimentation Frameworks', 'Discovery Methods',
    'Roadmap Prioritization', 'OKRs', 'Stakeholder Alignment', 'Go-to-Market Planning'
  ];
  const tools = [
    'Jira', 'Linear', 'Productboard', 'Notion', 'Zapier', 'n8n', 'Retool', 'Granola',
    'Figma', 'Claude Code', 'Codex', 'Gemini', 'VS Code', 'Supabase', 'Kilo Code',
    'REST APIs', 'VTEX E-commerce'
  ];
  const methodologies = [
    'SQL', 'A/B Testing', 'GA4', 'Mixpanel', 'Power BI', 'Tableau',
    'ChatGPT/Claude/NotebookLM', 'Voice AI', 'Machine Learning Training'
  ];

  return (
    <div className="py-8 md:py-12">
      <BlurFade delay={0.1}>
        <div className="flex justify-between items-end mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-terracotta font-display">About</h2>
        </div>
      </BlurFade>

      <div className="max-w-4xl space-y-12">
        <BlurFade delay={0.2}>
          <div className="text-base md:text-lg text-ink/80 leading-relaxed space-y-8 [&_p]:text-justify [&_p]:hyphens-auto">
            <div>
              <h3 className="text-base font-semibold text-ink-muted uppercase tracking-wide mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-terracotta/60" />
                What I do
              </h3>
              <p>
                I am a Senior Growth Product Manager with 8+ years improving conversion, activation, and retention across B2C e-commerce, B2B self-serve platforms, and digital products in Europe and LatAm.
              </p>
              <p className="mt-2">
                My focus is on designing structured experimentation programs spanning checkout funnels, in-product onboarding, and multi-market rollouts. I turn ambiguous problems and complex data into product decisions that scale.
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-ink-muted uppercase tracking-wide mb-3">Background</h3>
              <p className="mb-4">I am a Senior Product Manager based in Berlin. My recent path:</p>
              <div className="space-y-4">
                {[
                  { company: 'World Food Programme (Munich)', path: 'Shipped generative AI voice tech and shaped organizational AI governance.' },
                  { company: 'FORVIA HELLA', path: 'Unified B2B e-commerce catalogs for 60,000+ workshops post-merger.' },
                  { company: 'Accenture Brasil (Natura)', path: 'Scaled an e-commerce platform across four Latin American countries and improved conversion rates.' },
                  { company: 'C&A Brasil', path: 'Led mobile shopping and early WhatsApp commerce integration, establishing the channel as a retention lever.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-1.5 h-1.5 bg-terracotta/30 rounded-full mt-2 group-hover:bg-terracotta transition-colors" />
                    <p className="text-base md:text-lg">
                      <strong className="text-ink"> {item.company}:</strong> {item.path}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold text-ink-muted uppercase tracking-wide mb-3">Beyond work</h3>
              <p>
                When I'm not working, you'll find me swimming, hiking, or reading. Feel free to reach out, let's connect.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Download Resume Button */}
        <div className="pt-2">
          <motion.a
            href="/Resume_Rodrigo-Lopes.pdf"
            download
            aria-label="Download Resume PDF"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold text-sm rounded-xl"
            style={{ background: 'linear-gradient(180deg, #C85535 0%, #9E3520 100%)', boxShadow: '0 4px 0 #6B2210, 0 8px 20px rgba(0,0,0,0.12)' }}
            onClick={() => logEvent('Engagement', 'Download Resume')}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98, y: 2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Download size={16} />
            Download Resume
          </motion.a>
        </div>

        {/* Core Skills Dropdown */}
        <BlurFade delay={0.4}>
          <div className="pt-4">
            <button
              onClick={() => setSkillsExpanded(!skillsExpanded)}
              className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors group"
            >
              <ChevronDown size={18} className={`transform transition-transform duration-300 ${skillsExpanded ? 'rotate-180' : ''}`} />
              Core Skills
            </button>

            <AnimatePresence>
              {skillsExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 pl-6 mt-4 border-l-2 border-terracotta/20 py-2">
                    {coreSkills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#C85535", color: "#FFFFFF" }}
                        className="px-3 py-1.5 bg-ink/5 text-ink text-xs font-medium rounded-full cursor-default transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </BlurFade>

        {/* Tools & Methodologies Dropdown */}
        <BlurFade delay={0.5}>
          <div className="pt-2">
            <button
              onClick={() => setToolsExpanded(!toolsExpanded)}
              className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors group"
            >
              <ChevronDown size={18} className={`transform transition-transform duration-300 ${toolsExpanded ? 'rotate-180' : ''}`} />
              Tools & Methodologies
            </button>

            <AnimatePresence>
              {toolsExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 pl-6 mt-4 border-l-2 border-terracotta/20 py-2">
                    <div>
                      <h4 className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-3">Tools & Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        {tools.map((tool, i) => (
                          <motion.span
                            key={tool}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.03 }}
                            whileHover={{ y: -2, backgroundColor: "#EDE7D9", borderColor: "#C85535/30" }}
                            className="px-2.5 py-1 bg-ink/5 text-ink/70 text-xs font-medium rounded-full border border-transparent transition-all"
                          >
                            {tool}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-3">Analytics & Methods</h4>
                      <div className="flex flex-wrap gap-2">
                        {methodologies.map((method, i) => (
                          <motion.span
                            key={method}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (tools.length + i) * 0.03 }}
                            whileHover={{ y: -2, backgroundColor: "#EDE7D9", borderColor: "#C85535/30" }}
                            className="px-2.5 py-1 bg-ink/5 text-ink/70 text-xs font-medium rounded-full border border-transparent transition-all"
                          >
                            {method}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export { AboutContent };
