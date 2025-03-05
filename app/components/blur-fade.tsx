/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  /** Duration in seconds (used only if transitionType="tween") */
  duration?: number;
  /** Delay before starting the animation (in seconds) */
  delay?: number;
  /** Starting vertical offset in pixels */
  yOffset?: number;
  /** Margin for the inView detection (e.g., "-50px") */
  inViewMargin?: string;
  /** CSS blur amount (e.g., "6px") */
  blur?: string;
  /** Choose between "spring" (physics-based) or "tween" (time-based) transition */
  transitionType?: "spring" | "tween";
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 20,
  inViewMargin = "-50px",
  blur = "6px",
  transitionType = "spring",
}: BlurFadeProps) => {
  const ref = useRef(null);
  // Remove the manual inView prop check.
  // The element will only animate when it's in view.
  const isInView = useInView(ref, { once: true, margin: inViewMargin as any });

  // Updated default variants for a natural, smooth entrance:
  // - Starts offset on the y-axis with reduced opacity, slight blur, and scaled down.
  // - Ends at its natural position with full opacity, no blur, and normal scale.
  const defaultVariants: Variants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
      scale: 0.98,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: `blur(0px)`,
      scale: 1,
    },
  };

  const combinedVariants = variant || defaultVariants;
  const transition =
    transitionType === "tween"
      ? { delay, duration, ease: "easeOut" }
      : { delay, type: "spring", stiffness: 120, damping: 14, mass: 1 };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;
