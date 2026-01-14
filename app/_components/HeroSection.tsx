import React from "react";
import Link from "next/link";

import { FileIcon } from "@/components/icons/FileIcon";
import { InfoIcon } from "@/components/icons/InfoIcon";
import AnnotatedText from "@/components/ui/AnnotatedText ";
import { FadeIn } from "@/components/animations/FadeIn";
import { HoverScale } from "@/components/animations/HoverScale";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="space-y-6 pt-6">
      <FadeIn direction="down" duration={0.6}>
        <h1 className="text-3xl font-extrabold text-primary">
          Bringing Your Ideas to Life Through Software
        </h1>
      </FadeIn>

      <div className="text-sm text-secondary-foreground leading-6.5 tablet:tracking-wide tablet_portrait:text-base space-y-3">
        <p>
          <span role="img" aria-label="waving hand" className="wave text-4xl">
            &#128075;
          </span>
          I specialize in blending&nbsp;
          <AnnotatedText type="underline" strokeWidth={2} color="#b71c1c">
            technical expertise
          </AnnotatedText>
          &nbsp;with creativity and strategic insight to help businesses&nbsp;
          <AnnotatedText type="circle" strokeWidth={2} color="#4a148c">
            build
          </AnnotatedText>
          &nbsp;and&nbsp;
          <AnnotatedText type="circle" strokeWidth={2} color="#4a148c">
            improve
          </AnnotatedText>
          &nbsp;their software solutions.
        </p>

        <p>
          With solid experience in&nbsp;
          <AnnotatedText type="highlight" strokeWidth={2} color="#33B3BE">
            software
          </AnnotatedText>
          &nbsp;
          <AnnotatedText type="highlight" strokeWidth={2} color="#33B3BE">
            development
          </AnnotatedText>
          , I bring a mix of&nbsp; hands-on technical skills and thoughtful
          problem-solving . My goal is to craft solutions that are both&nbsp;
          <AnnotatedText type="circle" strokeWidth={2} color="#4a148c">
            innovative
          </AnnotatedText>
          &nbsp;and aligned with your&nbsp;
          <AnnotatedText type="underline" strokeWidth={2} color="#1b5e20">
            business goals and vision
          </AnnotatedText>
          .
        </p>

        <p className="font-semibold text-gray-600 dark:text-gray-300">
          <AnnotatedText type="box" strokeWidth={2} color="#ffd54f">
            Together
          </AnnotatedText>
          , we can create something&nbsp;
          <AnnotatedText type="highlight" color="#f57f17">
            remarkable
          </AnnotatedText>
          .
        </p>
      </div>

      <FadeIn direction="up" delay={0.6}>
        <div className="flex gap-3">
          <HoverScale>
            <Link
              href="/about"
              className="flex gap-2 justify-between items-center text-primary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-xs py-2.5 px-3.5 transition hover:text-secondary"
            >
              <InfoIcon className="h-6 w-auto fill-current" />
              <span>About Me &rarr;</span>
            </Link>
          </HoverScale>
          <HoverScale>
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
