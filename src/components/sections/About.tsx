import React, { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { logEvent } from '../../components/Analytics';

/**
 * About section displaying bio, resume download, expandable skills, and tools lists.
 * @returns {React.ReactElement} About section content
 */
const AboutContent = () => {
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const [skillsExpanded, setSkillsExpanded] = useState(false);

  const coreSkills = ['Product Discovery', 'A/B Testing', 'AI/ML Products', 'Roadmap Prioritization', 'Post-Merger Integration', 'International Expansion', 'B2B Platforms', 'Stakeholder Management', 'AI Governance', 'APIs', 'Data Platforms', 'Mobile', 'Cloud'];
  const tools = ['Jira', 'Figma', 'GA4/Amplitude', 'SQL', 'Confluence', 'Miro', 'Notion', 'Linear', 'Productboard', 'Mixpanel', 'Power BI/Tableau', 'Retool', 'Zapier', 'ChatGPT/Claude', 'Claude Code', 'Antigravity', 'Cursor', 'LangChain'];
  const methodologies = ['Continuous Discovery', 'Jobs-to-be-Done', 'OKRs', 'Experimentation', 'Design Sprints', 'Agile/Scrum'];

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
        {/* Flowing paragraph */}
        <div className="text-base md:text-lg text-black/80 dark:text-white/80 leading-relaxed space-y-6">
          <div>
            <h3 className="text-xl font-black text-black dark:text-white uppercase mb-2">what i do</h3>
            <p>
              I build products in environments where the path forward isn't clear. My focus is on data-driven experimentation, cross-functional coordination, and turning ambiguous problems into outcomes people can act on.
            </p>
            <p className="mt-2">
              The work tends to happen in complex situations: AI for vulnerable populations, post-merger B2B integration, multi-country platform expansions. Places where conventional playbooks break down and you need to figure it out as you go.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-black text-black dark:text-white uppercase mb-2">background</h3>
            <p>
              I'm a Senior Product Manager, currently based in Berlin. Most recently at the World Food Programme in Munich, working on generative AI voice technology and contributing to organizational AI governance. Before that, FORVIA HELLA, unifying product catalogs from two recently merged automotive companies into a single online experience for workshop customers. Earlier, Accenture Brasil, embedded with Natura to scale their e-commerce platform across four Latin American countries. Started at C&A Brasil, working on mobile shopping and early WhatsApp commerce integration.
            </p>
            <p className="mt-2">
              I got into product through a digital agency I founded in São Paulo while finishing university. Started building solutions for SMBs, realized the work I enjoyed most was understanding what to build and why, and transitioned into product management. That was 2018.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-black text-black dark:text-white uppercase mb-2">beyond work</h3>
            <p>
              When I'm not working, you'll find me swimming, hiking, or reading. Feel free to reach out, let's connect.
            </p>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="pt-2">
          <motion.a
            href="/Resume_Rodrigo-Lopes.pdf"
            download
            aria-label="Download Resume PDF"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-widest text-sm rounded-sm shadow-[4px_4px_0px_0px_#FFFF00]"
            onClick={() => logEvent('Engagement', 'Download Resume')}
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
                  className="px-2 py-1 bg-black/5 dark:bg-white/10 text-black dark:text-white text-xs font-medium rounded cursor-default"
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

export { AboutContent };
