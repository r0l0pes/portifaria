import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTextProps {
    children: string;
    className?: string;
    variant?: 'fadeUp' | 'slideIn' | 'reveal';
    delay?: number;
    staggerChildren?: boolean;
}

/**
 * Animated text component with multiple reveal variants
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
    children,
    className = '',
    variant = 'fadeUp',
    delay = 0,
    staggerChildren = false,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // Split text into words for stagger effect
    const words = staggerChildren ? children.split(' ') : [children];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerChildren ? 0.1 : 0,
                delayChildren: delay,
            },
        },
    };

    const wordVariants = {
        fadeUp: {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            },
        },
        slideIn: {
            hidden: { opacity: 0, x: -30 },
            visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
            },
        },
        reveal: {
            hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
            visible: {
                opacity: 1,
                clipPath: 'inset(0 0 0 0)',
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={wordVariants[variant]}
                    className="inline-block"
                    style={{ marginRight: staggerChildren ? '0.25em' : 0 }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

/**
 * Count-up animation for numbers
 */
export const CountUp: React.FC<CountUpProps> = ({
    end,
    duration = 2,
    suffix = '',
    className = '',
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    React.useEffect(() => {
        if (!isInView) return;

        const startTime = Date.now();
        const endTime = startTime + duration * 1000;

        const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (endTime - startTime), 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(updateCount);
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className={className}>
            {count}{suffix}
        </span>
    );
};
