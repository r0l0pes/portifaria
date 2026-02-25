import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from 'framer-motion';
import { SPRING_STIFFNESS, SPRING_DAMPING, TILT_AMOUNT_DEFAULT, SCALE_DEFAULT } from '@/lib/constants';

interface TiltCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    tiltAmount?: number; // Max tilt in degrees
    scale?: number; // Scale on hover
    href?: string;
}

/**
 * Interactive card that tilts toward the mouse cursor using spring physics.
 * Supports keyboard activation and scales on hover.
 * Can be rendered as a link if an href is provided.
 * @param {TiltCardProps} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional CSS classes
 * @param {number} [props.tiltAmount=TILT_AMOUNT_DEFAULT] - Max tilt angle in degrees
 * @param {number} [props.scale=SCALE_DEFAULT] - Scale factor on hover
 * @param {string} [props.href] - Optional URL if the card should be a link
 * @returns {React.ReactElement} Tilt-enabled motion component
 */
export const TiltCard: React.FC<TiltCardProps> = React.memo(({
    children,
    className = '',
    tiltAmount = TILT_AMOUNT_DEFAULT,
    scale = SCALE_DEFAULT,
    href,
    ...props
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring animations for smooth movement
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltAmount, -tiltAmount]), {
        stiffness: SPRING_STIFFNESS,
        damping: SPRING_DAMPING,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltAmount, tiltAmount]), {
        stiffness: SPRING_STIFFNESS,
        damping: SPRING_DAMPING,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate mouse position relative to card center (-0.5 to 0.5)
        const mouseXRelative = (e.clientX - rect.left) / width - 0.5;
        const mouseYRelative = (e.clientY - rect.top) / height - 0.5;

        mouseX.set(mouseXRelative);
        mouseY.set(mouseYRelative);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            if (!href) {
                e.preventDefault();
                (e.currentTarget as HTMLDivElement).click();
            }
        }
    };

    const Component = (href ? motion.a : motion.div) as any;

    return (
        <Component
            ref={ref}
            className={className}
            href={href}
            role={href ? undefined : "button"}
            tabIndex={href ? undefined : 0}
            onKeyDown={handleKeyDown}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                ...props.style,
            }}
            animate={{
                scale: isHovered ? scale : 1,
            }}
            transition={{ type: 'spring', stiffness: SPRING_STIFFNESS, damping: SPRING_DAMPING }}
        >
            <div style={{ transform: 'translateZ(20px)' }}>
                {children}
            </div>
        </Component>
    );
});
