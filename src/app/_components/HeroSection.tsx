import React from "react";
import Link from "next/link";

import { FileIcon } from "@/components/icons/FileIcon";
import { InfoIcon } from "@/components/icons/InfoIcon";
import AnnotatedText from "@/components/ui/AnnotatedText ";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="space-y-6 min-h-[calc(100vh-13.75rem)] pt-6">
      <h1 className="text-3xl font-extrabold text-primary">
        Bringing Your Ideas to Life Through Software
      </h1>

      <div className="text-sm text-secondary-foreground leading-6.5 tablet:tracking-wide tablet_portrait:text-base space-y-3">
        <p>
          <span role="img" aria-label="waving hand" className="wave text-4xl">
            &#128075;
          </span>
          I specialize in blending&nbsp;
          <AnnotatedText type="underline" strokeWidth={2} color="#b71c1c">
            technical
          </AnnotatedText>
          &nbsp; expertise with creativity and strategic insight to help
          businesses&nbsp;
          <AnnotatedText type="circle" strokeWidth={2} color="#4a148c">
            build
          </AnnotatedText>
          &nbsp; and&nbsp;
          <AnnotatedText type="circle" strokeWidth={2} color="#4a148c">
            improve
          </AnnotatedText>
          &nbsp; their software solutions.
        </p>
        <p>
          My focus is on delivering&nbsp;
          <AnnotatedText type="underline" strokeWidth={2} color="#1b5e20">
            user-friendly
          </AnnotatedText>
          ,&nbsp;
          <AnnotatedText type="underline" strokeWidth={2} color="#1b5e20">
            scalable
          </AnnotatedText>
          , and&nbsp;
          <AnnotatedText type="underline" strokeWidth={2} color="#1b5e20">
            efficient
          </AnnotatedText>
          &nbsp; applications that align with your&nbsp;
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

      <div className="flex gap-3">
        <Link
          href="/about"
          className="flex gap-2 justify-between items-center text-primary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-xs py-2.5 px-3.5 transition hover:text-secondary"
        >
          <InfoIcon className="h-6 w-auto fill-current" />
          <span>About Me &rarr;</span>
        </Link>
        <a
          href="#"
          className="flex gap-2 justify-between items-center text-primary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-xs py-2.5 px-3.5 transition hover:text-secondary"
        >
          <FileIcon className="h-6 w-auto fill-current" />
          <span>Resume</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
