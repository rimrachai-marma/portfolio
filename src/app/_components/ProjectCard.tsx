import React from "react";
import Image from "next/image";

import { Project } from "@/types";
import ExternalLinkButton from "@/components/ui/ExternalLinkButton";

type Props = Project;

const ProjectCard: React.FC<Props> = ({
  title,
  description,
  image,
  liveLink,
  codeLink,
  technologies,
}) => {
  return (
    <div className="h-full border border-dashed border-gray-300 dark:border-gray-600 p-3 rounded-md flex flex-col gap-2">
      <div className="relative aspect-[3/2] rounded-md overflow-hidden">
        <Image
          className="absolute h-full w-full top-0 left-0 object-cover"
          src={image}
          fill
          priority
          quality={100}
          alt={title}
        />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-primary text-base tablet:text-xl font-semibold">
            {title}
          </h3>

          <div className="flex justify-end items-center gap-2">
            <ExternalLinkButton href={codeLink}>Code</ExternalLinkButton>
            {liveLink && (
              <ExternalLinkButton href={liveLink}>Live</ExternalLinkButton>
            )}
          </div>
        </div>
        <ul className="flex gap-1 flex-wrap">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="flex items-center text-tiny font-semibold text-gray-600 dark:text-gray-400 tracking-wide px-2 py-0.5 rounded-full border border-gray-300 dark:border-gray-600"
            >
              {tech}
            </li>
          ))}
        </ul>
        <p className="text-sm tracking-wide text-secondary-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
