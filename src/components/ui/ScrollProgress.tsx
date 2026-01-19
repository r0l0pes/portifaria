import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * Scroll progress indicator - thin bar at top of page
 */
export const ScrollProgress: React.FC = () => {
    const progress = useScrollProgress();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#00CCFF] dark:bg-[#FFFF00] origin-left z-[60] shadow-[0_0_10px_rgba(0,204,255,0.5)] dark:shadow-[0_0_10px_rgba(255,255,0,0.5)]"
            style={{
                scaleX: progress,
            }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.1, ease: 'linear' }}
        />
    );
};
