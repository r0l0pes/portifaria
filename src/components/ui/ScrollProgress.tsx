import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

/**
 * Fixed progress bar at the top of the viewport that scales with scroll position.
 * @returns {React.ReactElement} Animated progress bar
 */
export const ScrollProgress: React.FC = () => {
    const progress = useScrollProgress();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#C85535] origin-left z-[60] shadow-[0_0_10px_rgba(200,85,53,0.5)]"
            style={{
                scaleX: progress,
            }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.1, ease: 'linear' }}
        />
    );
};
