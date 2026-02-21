import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    className?: string;
}

export function ShinyButton({
    children,
    className,
    ...props
}: ShinyButtonProps) {
    return (
        <motion.button
            {...props}
            className={`relative px-8 py-4 text-white font-semibold text-base rounded-xl overflow-hidden group ${className}`}
            style={{
                background: 'linear-gradient(180deg, #C85535 0%, #9E3520 100%)',
                boxShadow: '0 4px 0 #6B2210, 0 8px 20px rgba(0,0,0,0.12)',
            }}
            whileHover={{ y: -2, boxShadow: '0 6px 0 #6B2210, 0 12px 28px rgba(0,0,0,0.15)' }}
            whileTap={{ y: 3, boxShadow: '0 1px 0 #6B2210' }}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-[200%] -translate-x-[150%]"
                animate={{
                    x: ["-100%", "100%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "linear",
                    repeatDelay: 1,
                }}
                style={{ skewX: -20 }}
            />
        </motion.button>
    );
}
