import React, { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { logEvent } from '../../components/Analytics';

const AboutContent = () => {
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const [skillsExpanded, setSkillsExpanded] = useState(false);

  const coreSkills = ['Product Discovery', 'A/B Testing', 'AI/ML Products', 'Roadmap Prioritization', 'Post-Merger Integration', 'International Expansion', 'B2B Platforms', 'Stakeholder Management', 'AI Governance', 'APIs', 'Data Platforms', 'Mobile', 'Cloud'];
  const tools = ['Jira', 'Figma', 'GA4/Amplitude', 'SQL', 'Confluence', 'Miro', 'Notion', 'Linear', 'Productboard', 'Mixpanel', 'Power BI/Tableau', 'Retool', 'Zapier', 'ChatGPT/Claude', 'Claude Code', 'Antigravity', 'Cursor', 'LangChain'];
  const methodologies = ['Continuous Discovery', 'Jobs-to-be-Done', 'OKRs', 'Experimentation', 'Design Sprints', 'Agile/Scrum'];

  return (
    <div className="py-8 md:py-12">
      <div className="flex justify-between items-end mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-terracotta font-display">About</h2>
      </div>

      <div className="max-w-4xl space-y-8">
        <div className="text-base md:text-lg text-ink/80 leading-relaxed space-y-6">
          <div>
            <h3 className="text-base font-semibold text-ink-muted uppercase tracking-wide mb-2">What I do</h3>
            <p>
              I build products in environments where the path forward isn't clear. My focus is on data-driven experimentation, cross-functional coordination, and turning ambiguous problems into outcomes people can act on.
            </p>
            <p className="mt-2">
              The work tends to happen in complex situations: AI for vulnerable populations, post-merger B2B integration, multi-country platform expansions. Places where conventional playbooks break down and you need to figure it out as you go.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-ink-muted uppercase tracking-wide mb-2">Background</h3>
            <p>
              I'm a Senior Product Manager, currently based in Berlin. Most recently at the World Food Programme in Munich, working on generative AI voice technology and contributing to organizational AI governance. Before that, FORVIA HELLA, unifying product catalogs from two recently merged automotive companies into a single online experience for workshop customers. Earlier, Accenture Brasil, embedded with Natura to scale their e-commerce platform across four Latin American countries. Started at C&A Brasil, working on mobile shopping and early WhatsApp commerce integration.
            </p>
            <p className="mt-2">
              I got into product through a digital agency I founded in São Paulo while finishing university. Started building solutions for SMBs, realized the work I enjoyed most was understanding what to build and why, and transitioned into product management. That was 2018.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-ink-muted uppercase tracking-wide mb-2">Beyond work</h3>
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white font-semibold text-sm rounded-xl"
            onClick={() => logEvent('Engagement', 'Download Resume')}
            whileHover={{ backgroundColor: '#A03F22' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Download size={16} />
            Download Resume
          </motion.a>
        </div>

        {/* Core Skills Dropdown */}
        <div className="pt-4">
          <button
            onClick={() => setSkillsExpanded(!skillsExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
          >
            <ChevronDown size={18} className={`transform transition-transform duration-300 ${skillsExpanded ? 'rotate-180' : ''}`} />
            Core Skills
          </button>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${skillsExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-wrap gap-2 pl-6 border-l-2 border-terracotta/20">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-ink/5 text-ink text-xs font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Methodologies Dropdown */}
        <div className="pt-2">
          <button
            onClick={() => setToolsExpanded(!toolsExpanded)}
            className="flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors"
          >
            <ChevronDown size={18} className={`transform transition-transform duration-300 ${toolsExpanded ? 'rotate-180' : ''}`} />
            Tools & Methodologies
          </button>

          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${toolsExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-4 pl-6 border-l-2 border-terracotta/20">
              <div>
                <h4 className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-2">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 bg-ink/5 text-ink/70 text-xs font-medium rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-2">Methodologies</h4>
                <div className="flex flex-wrap gap-2">
                  {methodologies.map((method) => (
                    <span key={method} className="px-2.5 py-1 bg-ink/5 text-ink/70 text-xs font-medium rounded-full">
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
