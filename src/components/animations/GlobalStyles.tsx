import { useEffect } from 'react';

/**
 * Injects global CSS keyframe animations and utility classes into the document head.
 * Cleans up the injected style element on unmount.
 * @returns {null}
 */
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-slow {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(3deg); }
      }
      @keyframes float-medium {
        0%, 100% { transform: translateY(0) translateX(0); }
        33% { transform: translateY(-15px) translateX(10px); }
        66% { transform: translateY(5px) translateX(-5px); }
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.5); }
      }
      @keyframes spin-very-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      @keyframes bounce-subtle {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
      @keyframes wiggle {
        0%, 100% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg); }
      }
      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes text-reveal {
        from { clip-path: inset(0 100% 0 0); }
        to { clip-path: inset(0 0 0 0); }
      }
      @keyframes slide-up-fade {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes scale-in {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes border-pulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(0, 204, 255, 0.4); }
        50% { box-shadow: 0 0 0 8px rgba(0, 204, 255, 0); }
      }
      .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
      .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
      .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      .animate-spin-very-slow { animation: spin-very-slow 60s linear infinite; }
      .animate-shimmer {
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
      }
      .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
      .animate-wiggle { animation: wiggle 0.5s ease-in-out; }
      .animate-gradient-shift {
        background-size: 200% 200%;
        animation: gradient-shift 3s ease infinite;
      }
      .animate-text-reveal { animation: text-reveal 0.8s ease-out forwards; }
      .animate-slide-up-fade { animation: slide-up-fade 0.6s ease-out forwards; }
      .animate-scale-in { animation: scale-in 0.5s ease-out forwards; }
      .animate-border-pulse { animation: border-pulse 2s ease-in-out infinite; }
      .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
      .hover-lift:hover { transform: translateY(-8px) scale(1.02); }
      .hover-glow:hover { box-shadow: 0 0 30px rgba(0, 204, 255, 0.3); }
      .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to)); }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

export { GlobalStyles };
