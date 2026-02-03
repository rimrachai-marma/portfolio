import React from "react";
import Image from "next/image";

import { Project } from "@/types";
import ExternalLinkButton from "@/components/ui/ExternalLinkButton";

interface Props {
  index: number;
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ index, project }) => {
  return (
    <div className="h-full border border-dashed border-gray-300 dark:border-gray-600 p-3 rounded-md flex flex-col gap-2">
      <div className="relative aspect-3/2 rounded-md overflow-hidden">
        <Image
          className="absolute h-full w-full top-0 left-0 object-cover"
          src={project.image}
          fill
          priority={index < 2}
          quality={75}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt={project.title}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-primary text-base tablet:text-xl font-semibold">
            {project.title}
          </h3>

          <div className="flex justify-end items-center gap-2">
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
        <p className="text-sm tracking-wide text-secondary-foreground line-clamp-4">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
