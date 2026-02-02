import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
    children: React.ReactNode;
    mode?: 'fade' | 'slide' | 'scale';
}

/**
 * Wraps children with enter/exit animations for view transitions.
 * @param {PageTransitionProps} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {'fade' | 'slide' | 'scale'} [props.mode='fade'] - Transition style
 * @returns {React.ReactElement} Motion-wrapped element
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
    children,
    mode = 'fade',
}) => {
    const variants = {
        fade: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
        },
        slide: {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
        },
        scale: {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.95 },
        },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants[mode]}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};
