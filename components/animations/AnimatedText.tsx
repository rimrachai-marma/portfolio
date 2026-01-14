"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  text: string;
  delay?: number;
  className?: string;
  el?: keyof React.JSX.IntrinsicElements;
}

export const AnimatedText: React.FC<Props> = ({
  text,
  delay = 0,
  className = "",
  el: Wrapper = "p",
}) => {
  const words = text.split(" ");
  const MotionWrapper = motion(Wrapper);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <MotionWrapper
      style={{
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.25rem",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={`${word}-${index}`}>
          {word}
        </motion.span>
      ))}
    </MotionWrapper>
  );
};
