import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let rafId: number | null = null;

    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (shouldReduceMotion) return;
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
        rafId = null;
      });
    };

    window.addEventListener('resize', handleResize);
    if (!shouldReduceMotion) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [shouldReduceMotion]);

  if (dimensions.width === 0) return null;

  const normalizedX = shouldReduceMotion ? 0 : (mousePos.x / dimensions.width) * 2 - 1;
  const normalizedY = shouldReduceMotion ? 0 : (mousePos.y / dimensions.height) * 2 - 1;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none sticky-background">
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-terracotta/8 rounded-full blur-xl"
        animate={{ x: normalizedX * -30, y: normalizedY * -30 }}
        transition={{ type: 'spring', damping: 20, stiffness: 50 }}
      />

      <motion.div
        className="absolute top-1/2 right-20 w-24 h-24 bg-amber/8 rounded-full blur-lg"
        animate={{ x: normalizedX * 40, y: normalizedY * 40 }}
        transition={{ type: 'spring', damping: 20, stiffness: 40 }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-40 h-40 bg-terracotta/5 rounded-full blur-2xl"
        animate={{ x: normalizedX * -20, y: normalizedY * -20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 45 }}
      />

      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-terracotta rounded-full animate-pulse-slow opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-amber rounded-full animate-pulse-slow opacity-15" style={{ animationDelay: '1s' }} />
      <div className="absolute top-24 right-1/3 w-1 h-1 bg-terracotta rounded-full animate-pulse-slow opacity-30" style={{ animationDelay: '2s' }} />

      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-radial from-terracotta/5 to-transparent opacity-50 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-radial from-amber/5 to-transparent opacity-50 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export { AnimatedBackground };
