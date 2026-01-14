import SkillSection from "./_components/skills";
import HeroSection from "./_components/HeroSection";
import ProjectSection from "./_components/projects";
import GitHubStatSection from "./_components/github-stats";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <GitHubStatSection />
    </>
  );
}
