"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  separator?: boolean;
}

export const AnimatedCounter: React.FC<Props> = ({
  value,
  duration = 2,
  className = "",
  suffix = "",
  prefix = "",
  decimals = 0,
  separator = false,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formattedValue =
          decimals > 0
            ? latest.toFixed(decimals)
            : Math.round(latest).toString();

        const withSeparator = separator
          ? Number(formattedValue).toLocaleString(undefined, {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            })
          : formattedValue;

        ref.current.textContent = `${prefix}${withSeparator}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix, prefix, decimals, separator]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
};
