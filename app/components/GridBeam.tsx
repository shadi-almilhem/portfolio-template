"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const GridBeam: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={cn("relative w-full h-full", className)}>
    <Beam />
    {children}
  </div>
);

export const Beam = () => {
  return (
    <svg
      width="200"
      height="100"
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -top-32 right-0 overflow-visible "
    >
      <path
        d="M100 30
          C120 -10, 180 -10, 160 30
          C140 70, 100 90, 100 90
          C100 90, 60 70, 40 30
          C20 -10, 80 -10, 100 30"
        fill="url(#grad1)"
        stroke="url(#grad1)"
        strokeWidth={2}
      />
      <defs>
        <motion.linearGradient
          variants={{
            initial: {
              x1: "40%",
              x2: "50%",
              y1: "160%",
              y2: "180%",
            },
            animate: {
              x1: "0%",
              x2: "10%",
              y1: "-40%",
              y2: "-20%",
            },
          }}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            repeatDelay: 2,
          }}
          id="grad1"
        >
          <stop stopColor="#18CCFC" stopOpacity="0" />
          <stop stopColor="#18CCFC" />
          <stop offset="0.325" stopColor="#6344F5" />
          <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
