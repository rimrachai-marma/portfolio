import Link from "next/link";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectSection: React.FC = () => {
  const layout = [
    "col-start-2 row-start-1 row-span-2",
    "col-start-1 row-start-2 row-span-2",
    "col-start-2 row-start-3 row-span-2",
    "col-start-1 row-start-4 row-span-2",
  ];

  return (
    <section id="project" className="mt-20">
      <div className="tablet_portrait:grid grid-cols-2 grid-rows-5 gap-4 space-y-2 tablet_portrait:space-y-0">
        <div className="col-start-1 row-start-1">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary">Projects</h2>
            <p className="text-xl">
              Here are some of the projects I&apos;ve worked on.
            </p>
          </div>
        </div>

        {projects.slice(0, 4).map((project, index) => (
          <div key={index} className={layout[index]}>
            <ProjectCard index={index} project={project} />
          </div>
        ))}

        <div className="col-start-2 row-start-5">
          <div className="h-full tablet_portrait:ml-8 tablet_portrait:-mt-5 flex flex-col justify-center gap-2">
            <Link
              href="/projects"
              className="text-primary hover:text-secondary text-xl font-semibold"
            >
              Explore more &rarr;
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 tracking-wider leading-7">
              Discover more exciting projects that showcase my skills and
              experience. Feel free to check them out! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
