import React, { useState } from 'react';
import { Mail, Linkedin, Github, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '@/constants';
import { logEvent } from '../../components/Analytics';
import { BlurFade } from '../ui/BlurFade';
import { ShinyButton } from '../ui/ShinyButton';

const BTN = {
  background: 'linear-gradient(180deg, #C85535 0%, #9E3520 100%)',
  boxShadow: '0 4px 0 #6B2210, 0 8px 20px rgba(0,0,0,0.12)',
};

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setStatus('success');
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus('idle');
      });

    logEvent('Contact', 'Send Message', 'Form Submit');
  };

  if (status === 'success') {
    return (
      <div className="bg-terracotta/10 border border-terracotta/30 p-6 text-center rounded-2xl">
        <h3 className="text-lg font-bold text-ink mb-2">Opening Email...</h3>
        <p className="text-ink-muted mb-4 text-sm">Check your email client to send the message.</p>
        <button onClick={() => setStatus('idle')} className="text-xs font-medium text-terracotta underline">Send another</button>
      </div>
    );
  }

  return (
    <form name="contact" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name" className="block text-xs font-medium text-ink-muted mb-1.5">Name</label>
        <input required name="name" type="text" id="name"
          className="w-full bg-[#EDE7D9] border border-ink/10 p-3.5 text-ink font-medium focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/10 transition-all rounded-xl text-sm"
          placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-medium text-ink-muted mb-1.5">Email</label>
        <input required name="email" type="email" id="email"
          className="w-full bg-[#EDE7D9] border border-ink/10 p-3.5 text-ink font-medium focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/10 transition-all rounded-xl text-sm"
          placeholder="your@email.com" />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-ink-muted mb-1.5">Message</label>
        <textarea required name="message" id="message" rows={4}
          className="w-full bg-[#EDE7D9] border border-ink/10 p-3.5 text-ink font-medium focus:outline-none focus:border-terracotta/50 focus:ring-2 focus:ring-terracotta/10 transition-all rounded-xl text-sm"
          placeholder="What are you working on?" />
      </div>
      <ShinyButton
        type="submit"
        disabled={status === 'submitting'}
        className="w-full"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message & Connect'}
      </ShinyButton>
      <p className="text-center text-xs text-ink-muted/80 mt-3 pt-1">
        🔒 I actually read these. No spam, ever.
      </p>
    </form>
  );
};

const socialLinks = [
  { key: 'linkedin', Icon: Linkedin, label: 'LinkedIn', getHref: () => `https://${HERO_DATA.contact.linkedin}`, event: 'Click LinkedIn' },
  { key: 'github', Icon: Github, label: 'GitHub', getHref: () => `https://${HERO_DATA.contact.github}`, event: 'Click GitHub' },
  { key: 'substack', Icon: BookOpen, label: 'Substack', getHref: () => `https://substack.com/@r0l0pes`, event: 'Click Substack' },
];

const FooterContent = () => (
  <BlurFade yOffset={10}>
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-terracotta font-display mb-10 leading-none">Let's Talk</h2>

      <div className="flex gap-3 mb-12 flex-wrap">
        {socialLinks.map(({ key, Icon, label, getHref, event }) => (
          <a key={key} href={getHref()} target="_blank" rel="noreferrer" onClick={() => logEvent('Social', event)}>
            <motion.div
              className="flex items-center gap-2.5 px-4 py-2.5 bg-[#EDE7D9] border border-ink/[0.08] rounded-xl text-ink-muted text-sm font-medium"
              whileHover={{ backgroundColor: '#B85538', color: '#ffffff', y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
              whileTap={{ y: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Icon size={16} />
              {label}
            </motion.div>
          </a>
        ))}
      </div>

      <ContactForm />

      <div className="mt-16 pt-8 border-t border-ink/[0.08] flex justify-between items-center text-ink-muted text-xs">
        <span>&copy; {new Date().getFullYear()} Rodrigo Lopes</span>
        <span>Built with React</span>
      </div>
    </div>
  </BlurFade>
);

export { ContactForm, FooterContent };
