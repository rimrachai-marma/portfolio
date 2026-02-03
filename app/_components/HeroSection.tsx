import React from "react";
import Link from "next/link";

import { FileIcon } from "@/components/icons/FileIcon";
import { InfoIcon } from "@/components/icons/InfoIcon";
import AnnotatedText from "@/components/ui/AnnotatedText ";
import {
  FadeIn,
  HoverScale,
  AnimatedText,
  FloatingElement,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations";

const HeroSection: React.FC = () => {
  const staggerDelay = 0.15;
  const numberOfItems = 3;
  const baseDelay = 0.3; // Initial delay
  const totalStaggerTime = (numberOfItems * staggerDelay + baseDelay) * 1000;

  return (
    <section id="hero" className="space-y-6 pt-6">
      <AnimatedText
        text="Bringing Your Ideas to Life Through Software"
        el="h1"
        className="text-3xl font-extrabold text-primary"
        delay={0.2}
      />

      <StaggerChildren
        staggerDelay={staggerDelay}
        className="text-sm text-secondary-foreground leading-6.5 tablet:tracking-wide tablet_portrait:text-base space-y-3"
      >
        <StaggerItem>
          <p>
            <FloatingElement duration={2} yOffset={5}>
              <span
                role="img"
                aria-label="waving hand"
                className="wave text-4xl"
              >
                &#128075;
              </span>
            </FloatingElement>
            I specialize in blending&nbsp;
            <AnnotatedText
              type="underline"
              strokeWidth={2}
              color="#b71c1c"
              delay={totalStaggerTime} // Wait for stagger to complete
            >
              technical expertise
            </AnnotatedText>
            &nbsp;with creativity and strategic insight to help businesses&nbsp;
            <AnnotatedText
              type="circle"
              strokeWidth={2}
              color="#4a148c"
              delay={totalStaggerTime + 200}
            >
              build
            </AnnotatedText>
            &nbsp;and&nbsp;
            <AnnotatedText
              type="circle"
              strokeWidth={2}
              color="#4a148c"
              delay={totalStaggerTime + 400}
            >
              improve
            </AnnotatedText>
            &nbsp;their software solutions.
          </p>
        </StaggerItem>

        <StaggerItem>
          <p>
            With solid experience in&nbsp;
            <AnnotatedText
              type="highlight"
              strokeWidth={2}
              color="#33B3BE"
              delay={totalStaggerTime + 600}
            >
              software
            </AnnotatedText>
            &nbsp;
            <AnnotatedText
              type="highlight"
              strokeWidth={2}
              color="#33B3BE"
              delay={totalStaggerTime + 800}
            >
              development
            </AnnotatedText>
            , I bring a mix of&nbsp; hands-on technical skills and thoughtful
            problem-solving . My goal is to craft solutions that are both&nbsp;
            <AnnotatedText
              type="circle"
              strokeWidth={2}
              color="#4a148c"
              delay={totalStaggerTime + 1000}
            >
              innovative
            </AnnotatedText>
            &nbsp;and aligned with your&nbsp;
            <AnnotatedText
              type="underline"
              strokeWidth={2}
              color="#1b5e20"
              delay={totalStaggerTime + 1200}
            >
              business goals and vision
            </AnnotatedText>
            .
          </p>
        </StaggerItem>

        <StaggerItem>
          <p className="font-semibold text-gray-600 dark:text-gray-300">
            <AnnotatedText
              type="box"
              strokeWidth={2}
              color="#ffd54f"
              delay={totalStaggerTime + 1400}
            >
              Together
            </AnnotatedText>
            , we can create something&nbsp;
            <AnnotatedText
              type="highlight"
              color="#f57f17"
              delay={totalStaggerTime + 1600}
            >
              remarkable
            </AnnotatedText>
            .
          </p>
        </StaggerItem>
      </StaggerChildren>

      <FadeIn direction="up" delay={0.8} duration={0.6}>
        <div className="flex gap-3">
          <HoverScale scale={1.08}>
            <Link
              href="/about"
              className="flex gap-2 justify-between items-center text-primary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-xs py-2.5 px-3.5 transition hover:text-secondary"
            >
              <InfoIcon className="h-6 w-auto fill-current" />
              <span>About Me &rarr;</span>
            </Link>
          </HoverScale>
          <HoverScale scale={1.08}>
            <a
              href="https://drive.google.com/file/d/122HRX7gwsDm8DpCmhNxy9dUW3RFBDs1g/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 justify-between items-center text-primary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-xs py-2.5 px-3.5 transition hover:text-secondary"
            >
              <FileIcon className="h-6 w-auto fill-current" />
              <span>Resume</span>
            </a>
          </HoverScale>
        </div>
      </FadeIn>
    </section>
  );
};

export default HeroSection;
