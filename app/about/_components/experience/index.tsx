import React from "react";
import ExperienceTimelineItem from "./ExperienceTimelineItem";
import { experience } from "@/data/experience";

const ExperienceSection: React.FC = () => {
  return (
    <section className="mt-20 space-y-6">
      <h2 className="text-4xl font-bold text-primary">Experience</h2>

      <div className="ml-2">
        {experience.map((item, index) => (
          <ExperienceTimelineItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
