"use client";

import React, { JSX } from "react";
import { annotate } from "rough-notation";

type BracketType = "left" | "right" | "top" | "bottom";

type AnnotationType =
  | "underline"
  | "box"
  | "circle"
  | "highlight"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface NotationProperties {
  type: AnnotationType;
  animate?: boolean;
  animationDuration?: number;
  color?: string;
  strokeWidth?: number;
  padding?: number | [number, number] | [number, number, number, number];
  multiline?: boolean;
  iterations?: number;
  brackets?: BracketType | BracketType[];
  rtl?: boolean;
}

interface Props extends React.HTMLAttributes<HTMLElement>, NotationProperties {
  children: React.ReactNode;
  customElement?: keyof JSX.IntrinsicElements;
  hide?: boolean;
  delay?: number;
}

const AnnotatedText: React.FC<Props> = ({
  children,
  customElement = "span",
  hide = false,
  delay = 0,

  type,
  animate = true,
  animationDuration = 1000,
  color = "currentColor",
  strokeWidth = 1,
  padding = 5,
  multiline = false,
  iterations = 2,
  brackets = "right",
  rtl = false,

  ...rest
}) => {
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (ref.current && !hide) {
      const timer = setTimeout(() => {
        if (ref.current) {
          const annotation = annotate(ref.current, {
            type,
            animate,
            animationDuration,
            color,
            strokeWidth,
            padding,
            multiline,
            iterations,
            brackets,
            rtl,
          });

          annotation.show();

          return () => {
            annotation.remove();
          };
        }
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [
    hide,
    type,
    animate,
    animationDuration,
    color,
    strokeWidth,
    padding,
    multiline,
    iterations,
    rtl,
    brackets,
    delay,
  ]);

  // eslint-disable-next-line react-hooks/refs
  return React.createElement(customElement, { ref, ...rest }, children);
};

export default AnnotatedText;
