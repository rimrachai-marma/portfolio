"use client";

import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const FloatingElement: React.FC<Props> = ({
  children,
  duration = 3,
  yOffset = 10,
  className = "",
}) => {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
