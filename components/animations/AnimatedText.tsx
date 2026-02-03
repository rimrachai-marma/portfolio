"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const MotionElements = {
  p: motion.p,
  span: motion.span,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
};

interface Props {
  text: string;
  delay?: number;
  className?: string;
  el?: keyof typeof MotionElements;
}

export const AnimatedText: React.FC<Props> = ({
  text,
  delay = 0,
  className = "",
  el = "p",
}) => {
  const words = text.split(" ");
  const MotionWrapper = MotionElements[el] ?? motion.p;

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay * i,
      },
    }),
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <MotionWrapper
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      style={{
        overflow: "hidden",
        display: "flex",
        flexWrap: "wrap",
        gap: "0.25rem",
      }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={`${word}-${index}`}>
          {word}
        </motion.span>
      ))}
    </MotionWrapper>
  );
};
