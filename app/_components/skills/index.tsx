import React from "react";

import { skills } from "@/data/skills";
import SkillItem from "./SkillItem";

const SkillSection: React.FC = () => {
  return (
    <section id="skill" className="space-y-6 mt-20">
      <h2 className="text-4xl font-bold text-primary">Technologies I know</h2>
      <p>I specialize in a range of skills that help bring ideas to life.</p>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </ul>
    </section>
  );
};

export default SkillSection;
