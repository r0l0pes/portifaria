import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from 'framer-motion';

interface TiltCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    tiltAmount?: number; // Max tilt in degrees
    scale?: number; // Scale on hover
}

/**
 * 3D tilt card that follows mouse movement
 */
export const TiltCard: React.FC<TiltCardProps> = ({
    children,
    className = '',
    tiltAmount = 10,
    scale = 1.02,
    ...props
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring animations for smooth movement
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltAmount, -tiltAmount]), {
        stiffness: 300,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltAmount, tiltAmount]), {
        stiffness: 300,
        damping: 20,
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

    return (
        <motion.div
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            animate={{
                scale: isHovered ? scale : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div style={{ transform: 'translateZ(20px)' }}>
                {children}
            </div>
        </motion.div>
    );
};
