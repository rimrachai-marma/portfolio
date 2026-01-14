import React from "react";
import EducationTimelineItem from "./EducationTimelineItem";
import { education } from "@/data/education";

const EducationTimelineSection: React.FC = () => {
  return (
    <section className="mt-20 space-y-6">
      <h2 className="text-4xl font-bold text-primary">Education</h2>

      <div className="ml-2">
        {education.map((item, index) => (
          <EducationTimelineItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default EducationTimelineSection;
