import React from "react";

import ExperienceTimelineItem from "./ExperienceTimelineItem";
import { experience } from "@/data/experience";
import { FadeIn } from "@/components/animations";

const ExperienceSection: React.FC = () => {
  return (
    <section className="mt-20 space-y-6">
      <FadeIn direction="up" duration={0.6}>
        <h2 className="text-4xl font-bold text-primary">Experience</h2>
      </FadeIn>

      <div className="ml-2">
        {experience.map((item, index) => (
          <ExperienceTimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
