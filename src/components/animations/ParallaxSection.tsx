import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
    children: React.ReactNode;
    speed?: number; // Multiplier for parallax effect (0.5 = half speed, 2 = double speed)
    className?: string;
}

/**
 * Parallax wrapper that moves content at different speeds during scroll.
 * @param {ParallaxSectionProps} props
 * @param {React.ReactNode} props.children - Content to apply parallax to
 * @param {number} [props.speed=0.5] - Parallax speed multiplier (0.5 = half speed)
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} Parallax-scrolling container
 */
export const ParallaxSection: React.FC<ParallaxSectionProps> = React.memo(({
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
});

interface ParallaxLayerProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

/**
 * Individual parallax layer for multi-depth effects.
 * @param {ParallaxLayerProps} props
 * @param {React.ReactNode} props.children - Layer content
 * @param {number} [props.speed=0.5] - Scroll speed multiplier
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} Parallax layer element
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
