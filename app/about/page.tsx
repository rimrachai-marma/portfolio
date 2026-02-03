import { Metadata } from "next";
import { FileIcon } from "@/components/icons/FileIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import ProfileImage from "./_components/ProfileImage";
import AnnotatedText from "@/components/ui/AnnotatedText ";
import ExternalLinkButton from "@/components/ui/ExternalLinkButton";
import ExperienceSection from "./_components/experience";
import {
  FadeIn,
  SlideIn,
  StaggerChildren,
  StaggerItem,
  HoverScale,
  FloatingElement,
} from "@/components/animations";

export const metadata: Metadata = {
  title: "About",
  description: "About Rimrachai Marma",
  keywords: "Rimrachai, Marma, Developer, Engineer, Software, Devops",
};

export default async function About() {
  return (
    <>
      <section className="space-y-7">
        <div className="flex flex-col gap-3 tablet:flex-row-reverse tablet:justify-between tablet:items-end">
          <ProfileImage />

          <SlideIn direction="left" delay={0.2} duration={0.6}>
            <div className="space-y-2.5">
              <div className="font-bricolage font-extrabold text-4xl tablet:text-5xl text-primary">
                Rimrachai Marma
              </div>
              <h4 className="text-lg font-semibold text-secondary-foreground">
                <AnnotatedText type="highlight" color="#f57f17" delay={1000}>
                  Software Developer
                </AnnotatedText>
              </h4>
              <div className="flex items-center gap-2">
                <ExternalLinkButton href="https://github.com/rimrachai-marma">
                  GitHub
                </ExternalLinkButton>
                <ExternalLinkButton href="https://www.linkedin.com/in/rimrachai-marma">
                  LinkedIn
                </ExternalLinkButton>
              </div>
            </div>
          </SlideIn>
        </div>

        <FadeIn direction="up" delay={0.4} duration={0.6}>
          <div className="flex gap-3">
            <HoverScale scale={1.08}>
              <a
                href="mailto:rimrachai02@gmail.com"
                className="flex gap-2 justify-between items-center text-primary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-xs py-2.5 px-3.5 transition hover:text-secondary"
              >
                <EmailIcon className="h-6 w-auto fill-current" />
                <span>Contact me</span>
              </a>
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

        <StaggerChildren
          staggerDelay={0.15}
          className="space-y-4 text-secondary-foreground leading-7 tracking-wider"
        >
          <StaggerItem>
            <p>
              <FloatingElement
                className="inline-block"
                duration={2}
                yOffset={5}
              >
                <span
                  role="img"
                  aria-label="waving hand"
                  className="wave text-4xl"
                >
                  &#128075;
                </span>
              </FloatingElement>
              I&apos;m Rimrachai, a dedicated and hardworking self-taught tech
              enthusiast with a strong work ethic. I thrive on facing complex
              challenges and solving them efficiently. I specialize in creating
              modern web applications that are user-friendly and development.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="tracking-wider leading-7">
              I have experience in both frontend and backend development,
              working with technologies like React, Next.js, Node.js, Express.js
              and PHP Laravel. Additionally, I am skilled in leveraging cloud
              platforms like AWS, containerization tools such as Docker, and
              orchestration platforms like Kubernetes to create scalable and
              efficient applications. My approach combines a solid technical
              foundation with continuous learning to craft innovative solutions
              tailored to your needs.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                My technical expertise includes:
              </h3>
              <ul className="list-disc ml-6 space-y-1 marker:text-primary marker:text-xl">
                <li>
                  <span className="mr-2.5">Programming Languages:</span>
                  JavaScript, TypeScript, Python, PHP
                </li>
                <li>
                  <span className="mr-2.5">Frameworks and Technologies:</span>
                  React, Next.js, Node.js, Express, Laravel, RESTful APIs
                </li>
                <li>
                  <span className="mr-2.5">Tools and Platforms:</span>
                  AWS, Docker, Kubernetes, Git, GitHub Action, Nginx
                </li>
                <li>
                  <span className="mr-2">Databases:</span>
                  MongoDB, PostgreSQL, MySQL
                </li>
              </ul>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p>
              I am deeply committed to advancing technology and look forward to
              opportunities to innovate and drive impactful projects. Thank you
              for taking the time to get to know me!
            </p>
          </StaggerItem>
        </StaggerChildren>
      </section>

      <ExperienceSection />
    </>
  );
}
