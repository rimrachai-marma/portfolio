import React from "react";
import Image from "next/image";

import { Project } from "@/types";
import ExternalLinkButton from "@/components/ui/ExternalLinkButton";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="bg-background border border-dashed border-gray-300 dark:border-gray-600 tablet_portrait:border-none p-3 tablet_portrait:p-0 rounded-md flex flex-col gap-2 tablet_portrait:gap-5 tablet_portrait:flex-row-reverse tablet_portrait:odd:flex-row">
      <div className="relative aspect-3/2 rounded-md overflow-hidden tablet_portrait:flex-1">
        <Image
          className="absolute h-full w-full top-0 left-0 object-cover"
          src={project.image}
          fill
          priority
          quality={75}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={project.title}
        />
      </div>
      <div className="tablet_portrait:flex-1 flex flex-col gap-2 tablet_portrait:justify-center">
        <div className="flex justify-between items-start">
          <h3 className="text-primary tablet:text-xl font-semibold">
            {project.title}
          </h3>

          <div className="flex tablet_portrait:hidden justify-end items-center gap-2">
            <ExternalLinkButton href={project.codeLink}>
              Code
            </ExternalLinkButton>
            {project.liveLink && (
              <ExternalLinkButton href={project.liveLink}>
                Live
              </ExternalLinkButton>
            )}
          </div>
        </div>
        <ul className="flex gap-1 flex-wrap">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="flex items-center text-tiny font-semibold text-gray-600 dark:text-gray-400 tracking-wide px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-600"
            >
              {tech}
            </li>
          ))}
        </ul>
        <p className="text-sm tracking-wide text-secondary-foreground">
          {project.description}
        </p>

        <div className="hidden tablet_portrait:flex items-center gap-2 border-t border-gray-300 dark:border-gray-600 pt-3">
          <ExternalLinkButton href={project.codeLink}>Code</ExternalLinkButton>
          {project.liveLink && (
            <ExternalLinkButton href={project.liveLink}>
              Live
            </ExternalLinkButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
