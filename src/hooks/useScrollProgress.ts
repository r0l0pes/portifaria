import { useEffect, useState } from 'react';

/**
 * Hook to track scroll progress as a percentage (0-1)
 */
export const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = scrollHeight > 0 ? scrolled / scrollHeight : 0;
            setProgress(Math.min(Math.max(progress, 0), 1));
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress(); // Initial calculation

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return progress;
};
