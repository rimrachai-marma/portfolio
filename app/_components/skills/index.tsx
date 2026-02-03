import React from "react";
import { skills } from "@/data/skills";
import SkillItem from "./SkillItem";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations";

const SkillSection: React.FC = () => {
  return (
    <section id="skill" className="space-y-6 mt-20">
      <FadeIn direction="up" duration={0.6}>
        <h2 className="text-4xl font-bold text-primary">Technologies I know</h2>
      </FadeIn>

      <FadeIn direction="up" delay={0.2} duration={0.6}>
        <p>I specialize in a range of skills that help bring ideas to life.</p>
      </FadeIn>

      <StaggerChildren staggerDelay={0.05} className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <StaggerItem key={index}>
            <SkillItem skill={skill} />
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  );
};

export default SkillSection;
