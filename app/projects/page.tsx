import { Metadata } from "next";

import { projects } from "@/data/projects";
import ProjectCard from "./_components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my projects.",
  keywords: "Rimrachai, Marma, Projects, Software, Engineer",
};

export default async function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-5xl font-bold text-primary">Projects</h2>

      <p className="tablet_portrait:text-xl text-secondary-foreground">
        Here&apos;s an archive of things that I&apos;ve worked on. I really
        enjoy creating new projects and coming up with new ideas. Each one
        showcases my skills and my passion.
      </p>

      <div className="space-y-8 tablet_portrait:space-y-12 pt-12 border-t border-gray-200 dark:border-gray-700">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} project={project} />
        ))}
      </div>
    </section>
  );
}
