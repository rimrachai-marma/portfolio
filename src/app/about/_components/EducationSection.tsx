import { LocationIcon } from "@/components/icons/LocationIcon";
import React from "react";

const EducationSection: React.FC = () => {
  return (
    <section className="mt-20 space-y-6">
      <h2 className="text-4xl font-bold text-primary">Education</h2>

      <div className="ml-2.5">
        <div className="timeline-group">
          <div className="space-y-2">
            <small className="text-sm text-gray-500">Jan 2024 - Present</small>
            <h3 className="text-2xl font-semibold text-secondary-foreground">
              Postgraduate in Software Engineering
            </h3>
            <h4 className="font-bold text-secondary-foreground">
              University Name
            </h4>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <LocationIcon className="h-5 w-auto fill-current" />
              <span>Floral Park, New York</span>
            </div>
          </div>
        </div>
        <div className="timeline-group">
          <div className="space-y-2">
            <small className="text-sm text-gray-500">Jan 2019 - Dec 2023</small>
            <h3 className="text-2xl font-semibold text-secondary-foreground">
              Bachelor&apos;s Degree in Computer Engineering
            </h3>
            <h4 className="font-bold text-secondary-foreground">
              University Name
            </h4>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <LocationIcon className="h-5 w-auto fill-current" />
              <span>Floral Park, New York</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
