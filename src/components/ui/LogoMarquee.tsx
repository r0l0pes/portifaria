import React from "react";
import { motion } from "framer-motion";

interface Logo {
    src: string;
    alt: string;
    className?: string; // Allow individual scaling
}

interface LogoMarqueeProps {
    logos: Logo[];
    className?: string;
    speed?: number;
}

export function LogoMarquee({ logos, className = "", speed = 40 }: LogoMarqueeProps) {
    // Duplicate logos to ensure seamless looping
    const displayLogos = [...logos, ...logos, ...logos];

    return (
        <div className={`flex overflow-hidden select-none gap-0 group ${className}`}>
            <motion.div
                className="flex shrink-0 items-center gap-0 min-w-full"
                animate={{
                    x: [0, "-33.33%"],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {displayLogos.map((logo, i) => (
                    <div key={i} className="flex items-center justify-center px-10 md:px-16">
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className={`h-7 md:h-10 w-auto object-contain grayscale opacity-40 group-hover:opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100 cursor-pointer ${logo.className || ""}`}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
