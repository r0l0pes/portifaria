import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ANIMATION_DELAY_MS } from '@/lib/constants';

interface AnimatedTextProps {
    children: string;
    className?: string;
    variant?: 'fadeUp' | 'slideIn' | 'reveal';
    delay?: number;
    staggerChildren?: boolean;
}

/**
 * Animated text component with multiple reveal variants.
 * @param {AnimatedTextProps} props
 * @param {string} props.children - Text content to animate
 * @param {string} [props.className] - Additional CSS classes
 * @param {'fadeUp' | 'slideIn' | 'reveal'} [props.variant='fadeUp'] - Animation style
 * @param {number} [props.delay=0] - Delay before animation starts (seconds)
 * @param {boolean} [props.staggerChildren=false] - Animate each word separately
 * @returns {React.ReactElement} Animated text element
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
                staggerChildren: staggerChildren ? ANIMATION_DELAY_MS / 1000 : 0,
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
 * Animates a number from 0 to a target value with an ease-out cubic curve.
 * @param {CountUpProps} props
 * @param {number} props.end - Target number
 * @param {number} [props.duration=2] - Animation duration in seconds
 * @param {string} [props.suffix] - Text appended after the number
 * @param {string} [props.className] - Additional CSS classes
 * @returns {React.ReactElement} Span element displaying the animated count
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
