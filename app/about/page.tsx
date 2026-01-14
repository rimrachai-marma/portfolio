import { Metadata } from "next";

import { FileIcon } from "@/components/icons/FileIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import ProfileImage from "./_components/ProfileImage";
import AnnotatedText from "@/components/ui/AnnotatedText ";
import ExternalLinkButton from "@/components/ui/ExternalLinkButton";
import ExperienceSection from "./_components/experience";
import EducationSection from "./_components/education";

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

          <div className="space-y-2.5">
            <h1 className="font-extrabold text-4xl tablet:text-5xl text-primary">
              Rimrachai Marma
            </h1>
            <h4 className="text-lg font-semibold text-secondary-foreground">
              <AnnotatedText type="highlight" color="#f57f17">
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
        </div>

        <div className="flex gap-3">
          <a
            href="mailto:rimrachai02@gmail.com"
            className="flex gap-2 justify-between items-center text-primary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-xs py-2.5 px-3.5 transition hover:text-secondary"
          >
            <EmailIcon className="h-6 w-auto fill-current" />
            <span>Contact me</span>
          </a>
          <a
            href="https://drive.google.com/file/d/122HRX7gwsDm8DpCmhNxy9dUW3RFBDs1g/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 justify-between items-center text-primary dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-xs py-2.5 px-3.5 transition hover:text-secondary"
          >
            <FileIcon className="h-6 w-auto fill-current" />
            <span>Resume</span>
          </a>
        </div>

        <div className="space-y-4 text-secondary-foreground leading-7 tracking-wider">
          <p>
            <span role="img" aria-label="waving hand" className="wave text-4xl">
              &#128075;
            </span>
            I&apos;m Rimrachai, a dedicated and hardworking self-taught tech
            enthusiast with a strong work ethic. I thrive on facing complex
            challenges and solving them efficiently. I specialize in creating
            modern web applications that are user-friendly and development.
          </p>
          <p className="tracking-wider leading-7">
            I have experience in both frontend and backend development, working
            with technologies like React, Next.js, Node.js, Express.js and PHP
            Laravel. Additionally, I am skilled in leveraging cloud platforms
            like AWS, containerization tools such as Docker, and orchestration
            platforms like Kubernetes to create scalable and efficient
            applications. My approach combines a solid technical foundation with
            continuous learning to craft innovative solutions tailored to your
            needs.
          </p>

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

          <p>
            I am deeply committed to advancing technology and look forward to
            opportunities to innovate and drive impactful projects. Thank you
            for taking the time to get to know me!
          </p>
        </div>
      </section>

      <ExperienceSection />
      <EducationSection />
    </>
  );
}
