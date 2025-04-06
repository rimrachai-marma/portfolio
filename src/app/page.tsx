// import GitHubCal from "./_components/GithubCalendar";
import HeroSection from "./_components/HeroSection";
import ProjectSection from "./_components/ProjectSection";
import SkillSection from "./_components/SkillSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      {/* <GitHubCal /> */}
    </>
  );
}
