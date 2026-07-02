"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GooeyButtonProps {
  texts: string[];
  href: string;
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
}

export function GooeyButton({
  texts,
  href,
  morphTime = 0.3,
  cooldownTime = 2.5,
  className,
}: GooeyButtonProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, (morphTime + cooldownTime) * 1000);
    return () => clearInterval(interval);
  }, [texts.length, morphTime, cooldownTime]);

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className={cn(
        "relative z-20 mt-16 md:mt-20 inline-flex items-center justify-center px-10 py-4",
        "rounded-full bg-transparent border border-blue-500/60 hover:border-blue-400",
        "transition-all duration-300 shadow-lg shadow-blue-600/20",
        "overflow-hidden",
        className
      )}
    >
      <div className="relative flex items-center justify-center h-5">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: morphTime }}
            className="text-sm font-medium text-white whitespace-nowrap"
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.a>
  );
}
