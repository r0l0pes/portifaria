import { useEffect, useState } from 'react';

/**
 * Tracks the vertical scroll position of the page as a normalized value.
 * Uses requestAnimationFrame for throttled updates.
 * @returns {number} Scroll progress from 0 (top) to 1 (bottom)
 */
export const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let rafId: number | null = null;

        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = scrollHeight > 0 ? scrolled / scrollHeight : 0;
            setProgress(Math.min(Math.max(progress, 0), 1));
            rafId = null;
        };

        const handleScroll = () => {
            if (rafId !== null) return;
            rafId = requestAnimationFrame(updateProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        updateProgress(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
        };
    }, []);

    return progress;
};
