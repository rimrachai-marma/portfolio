"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export const SlideIn: React.FC<Props> = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
