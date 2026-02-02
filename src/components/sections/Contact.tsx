import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { HERO_DATA } from '@/constants';
import { logEvent } from '../../components/Analytics';

/**
 * Contact form that constructs a mailto link and opens the user's email client.
 * @returns {React.ReactElement} Form element or success confirmation
 */
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
    logEvent('Contact', 'Send Message', 'Form Submit');
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

/**
 * Contact section with social links, direct email, and the contact form.
 * @returns {React.ReactElement} Footer/contact section content
 */
const FooterContent = () => (
  <div>
    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
      {/* Left Column: Contact Info & Socials */}
      <div className="text-left order-2 md:order-1">
        <h2 className="text-4xl md:text-7xl font-black text-[#00CCFF] uppercase mb-6 md:mb-8 leading-none">Let's Talk</h2>
        <p className="text-[#4466FF] dark:text-gray-400 mb-6 md:mb-8 text-lg md:text-xl font-medium max-w-md">
          I'm open to new opportunities.
        </p>

        {/* Direct Email */}
        <a
          href={`mailto:${HERO_DATA.contact.email}`}
          className="inline-flex items-center gap-3 text-black dark:text-white text-lg md:text-xl font-bold hover:text-[#00CCFF] transition-colors mb-8 md:mb-12 group"
        >
          <Mail size={24} className="text-[#00CCFF]" />
          <span className="border-b-2 border-transparent group-hover:border-[#00CCFF] transition-all">
            {HERO_DATA.contact.email}
          </span>
        </a>

        <div className="flex flex-row gap-6 mb-8 md:mb-12">
          {/* Social Buttons */}
          <a
            href={`https://${HERO_DATA.contact.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="group"
            onClick={() => logEvent('Social', 'Click LinkedIn')}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-[#0B1120] border-2 border-black dark:border-white flex items-center justify-center text-black dark:text-white shadow-[4px_4px_0px_0px_#4466FF] dark:shadow-[4px_4px_0px_0px_#FFFF00] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all rounded-sm">
              <Linkedin size={24} />
            </div>
          </a>

          <a
            href={`https://${HERO_DATA.contact.github}`}
            target="_blank"
            rel="noreferrer"
            className="group"
            onClick={() => logEvent('Social', 'Click GitHub')}
          >
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

export { ContactForm, FooterContent };
