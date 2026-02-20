import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { HERO_DATA } from '@/constants';
import { logEvent } from '../../components/Analytics';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const mailtoLink = `mailto:${HERO_DATA.contact.email}?subject=Message from Portfolio - ${name}&body=${message}%0D%0A%0D%0AFrom: ${name} (${email})`;
    window.location.href = mailtoLink;

    setTimeout(() => setStatus('success'), 1000);
    logEvent('Contact', 'Send Message', 'Form Submit');
  };

  if (status === 'success') {
    return (
      <div className="bg-terracotta/10 border border-terracotta/30 p-6 md:p-8 text-center rounded-xl">
        <h3 className="text-xl font-bold text-ink mb-2">Opening Email...</h3>
        <p className="text-ink-muted mb-4 text-sm">Thanks for reaching out. Check your email client to send the message.</p>
        <button onClick={() => setStatus('idle')} className="text-xs font-medium text-terracotta underline">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs font-medium text-ink-muted mb-1.5">Name</label>
        <input required name="name" type="text" id="name" className="w-full bg-white border border-ink/15 p-3 md:p-4 text-ink font-medium focus:outline-none focus:border-terracotta/50 transition-colors rounded-lg text-sm" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-medium text-ink-muted mb-1.5">Email</label>
        <input required name="email" type="email" id="email" className="w-full bg-white border border-ink/15 p-3 md:p-4 text-ink font-medium focus:outline-none focus:border-terracotta/50 transition-colors rounded-lg text-sm" placeholder="your@email.com" />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium text-ink-muted mb-1.5">Message</label>
        <textarea required name="message" id="message" rows={4} className="w-full bg-white border border-ink/15 p-3 md:p-4 text-ink font-medium focus:outline-none focus:border-terracotta/50 transition-colors rounded-lg text-sm" placeholder="How can I help?"></textarea>
      </div>
      <button type="submit" disabled={status === 'submitting'} className="w-full py-3.5 md:py-4 bg-terracotta text-white font-semibold hover:bg-terracotta-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm rounded-xl">
        {status === 'submitting' ? 'Preparing Email...' : 'Send Message'}
      </button>
    </form>
  );
};

const FooterContent = () => (
  <div>
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      {/* Left Column */}
      <div className="text-left order-2 md:order-1">
        <h2 className="text-4xl md:text-6xl font-black text-terracotta font-display mb-4 md:mb-6 leading-none">Let's Talk</h2>
        <p className="text-ink-muted mb-6 md:mb-8 text-base md:text-lg max-w-md">
          I'm open to new opportunities.
        </p>

        <a
          href={`mailto:${HERO_DATA.contact.email}`}
          className="inline-flex items-center gap-3 text-ink text-base md:text-lg font-medium hover:text-terracotta transition-colors mb-8 md:mb-12 group"
        >
          <Mail size={20} className="text-terracotta" />
          <span className="border-b border-transparent group-hover:border-terracotta transition-all">
            {HERO_DATA.contact.email}
          </span>
        </a>

        <div className="flex flex-row gap-4 mb-8 md:mb-12">
          <a
            href={`https://${HERO_DATA.contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="group"
            onClick={() => logEvent('Social', 'Click LinkedIn')}
          >
            <div className="w-12 h-12 bg-white border border-ink/15 flex items-center justify-center text-ink-muted group-hover:text-terracotta group-hover:border-terracotta/30 transition-all rounded-xl">
              <Linkedin size={20} />
            </div>
          </a>

          <a
            href={`https://${HERO_DATA.contact.github}`}
            target="_blank"
            rel="noreferrer"
            className="group"
            onClick={() => logEvent('Social', 'Click GitHub')}
          >
            <div className="w-12 h-12 bg-white border border-ink/15 flex items-center justify-center text-ink-muted group-hover:text-terracotta group-hover:border-terracotta/30 transition-all rounded-xl">
              <Github size={20} />
            </div>
          </a>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div className="bg-white/60 p-6 md:p-10 border border-ink/[0.08] order-1 md:order-2 rounded-2xl">
        <h3 className="text-lg md:text-xl font-bold text-ink mb-6">Send a Message</h3>
        <ContactForm />
      </div>
    </div>

    <div className="mt-16 md:mt-24 pt-8 border-t border-ink/[0.08] flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-ink-muted text-xs">
        &copy; {new Date().getFullYear()} Rodrigo Lopes.
      </div>
      <div className="text-ink-muted text-xs">
        Designed & Built with React
      </div>
    </div>
  </div>
);

export { ContactForm, FooterContent };
