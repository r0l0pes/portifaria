import React, { useRef } from "react";
import { useInView, motion, Variants, HTMLMotionProps } from "framer-motion";

interface BlurFadeProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: { y: number; opacity: number; filter: string };
        visible: { y: number; opacity: number; filter: string };
    };
    duration?: number;
    delay?: number;
    yOffset?: number;
    inViewMargin?: string;
    blur?: string;
}

export function BlurFade({
    children,
    className,
    variant,
    duration = 0.5,
    delay = 0,
    yOffset = 18,
    inViewMargin = "-50px",
    blur = "8px",
    ...props
}: BlurFadeProps) {
    const ref = useRef(null);
    const inViewResult = useInView(ref, { once: true, margin: inViewMargin as any });

    const defaultVariants: Variants = {
        hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
        visible: { y: -yOffset, opacity: 1, filter: `blur(0px)` },
    };

    const combinedVariants = variant || defaultVariants;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inViewResult ? "visible" : "hidden"}
            variants={combinedVariants}
            transition={{
                delay: 0.04 + delay,
                duration,
                ease: "easeOut",
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
