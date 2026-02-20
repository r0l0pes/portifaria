import React, { useState } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { logEvent } from '../../components/Analytics';

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
      <div className="flex justify-between items-end mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-terracotta font-display">About</h2>
      </div>

      <div className="max-w-4xl space-y-8">
        <div className="text-base md:text-lg text-ink/80 leading-relaxed space-y-6 [&_p]:text-justify [&_p]:hyphens-auto">
          <div>
            <h3 className="text-base font-semibold text-ink-muted uppercase tracking-wide mb-2">What I do</h3>
            <p>
              I am a Senior Growth Product Manager with 8+ years improving conversion, activation, and retention across B2C e-commerce, B2B self-serve platforms, and digital products in Europe and LatAm.
            </p>
            <p className="mt-2">
              My focus is on designing structured experimentation programs spanning checkout funnels, in-product onboarding, and multi-market rollouts. I turn ambiguous problems and complex data into product decisions that scale.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-ink-muted uppercase tracking-wide mb-2">Background</h3>
            <p className="mb-2">I am a Senior Product Manager based in Berlin. My recent path:</p>
            <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-ink/80 text-left">
              <li><strong>World Food Programme (Munich):</strong> Shipped generative AI voice tech and shaped organizational AI governance.</li>
              <li><strong>FORVIA HELLA:</strong> Unified B2B e-commerce catalogs for 60,000+ workshops post-merger.</li>
              <li><strong>Accenture Brasil (Natura):</strong> Scaled an e-commerce platform across four Latin American countries and improved conversion rates.</li>
              <li><strong>C&A Brasil:</strong> Led mobile shopping and early WhatsApp commerce integration, establishing the channel as a retention lever.</li>
            </ul>
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
                <h4 className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-2">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 bg-ink/5 text-ink/70 text-xs font-medium rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-2">Analytics & Methods</h4>
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
