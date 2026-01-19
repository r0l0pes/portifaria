import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
    children: React.ReactNode;
    speed?: number; // Multiplier for parallax effect (0.5 = half speed, 2 = double speed)
    className?: string;
}

/**
 * Parallax wrapper that moves content at different speeds during scroll
 */
export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
    children,
    speed = 0.5,
    className = '',
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Transform scroll progress to Y position
    const y = useTransform(scrollYProgress, [0, 1], ['0%', `${(1 - speed) * 100}%`]);

    return (
        <div ref={ref} className={className}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
};

interface ParallaxLayerProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

/**
 * Individual parallax layer for multi-depth effects
 */
export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
    children,
    speed = 0.5,
    className = '',
}) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 1000 * (1 - speed)]);

    return (
        <motion.div style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};
