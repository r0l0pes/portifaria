import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
    items: string[];
    className?: string;
    speed?: number;
}

export function Marquee({ items, className = "", speed = 40 }: MarqueeProps) {
    return (
        <div className={`flex overflow-hidden select-none gap-12 group ${className}`}>
            <motion.div
                className="flex shrink-0 items-center justify-around gap-12 min-w-full"
                animate={{
                    x: [0, "-100%"],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {items.map((item, i) => (
                    <span
                        key={i}
                        className="text-2xl md:text-3xl font-black text-ink/10 whitespace-nowrap uppercase tracking-tighter transition-colors group-hover:text-ink/20"
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
            <motion.div
                className="flex shrink-0 items-center justify-around gap-12 min-w-full"
                aria-hidden="true"
                animate={{
                    x: [0, "-100%"],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {items.map((item, i) => (
                    <span
                        key={`${i}-clone`}
                        className="text-2xl md:text-3xl font-black text-ink/10 whitespace-nowrap uppercase tracking-tighter transition-colors group-hover:text-ink/20"
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
