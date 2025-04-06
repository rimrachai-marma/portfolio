import React from "react";

import { BriefcaseIcon } from "@/components/icons/BriefcaseIcon";
import { LocationIcon } from "@/components/icons/LocationIcon";

const ExperienceSection: React.FC = () => {
  return (
    <section className="mt-20 space-y-6">
      <h2 className="text-4xl font-bold text-primary">Experience</h2>

      <div className="ml-2.5">
        <div className="timeline-group">
          <div className="space-y-2">
            <small className="text-sm text-gray-500">Jan 2024 - Present</small>
            <h3 className="text-2xl font-semibold text-secondary-foreground">
              Software Engineer
            </h3>
            <h4 className="font-bold text-secondary-foreground">
              Company Name
            </h4>
            <p className="text-secondary-foreground tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              development eget nunc nec purus ultrices laoreet. Donec in sapien
              auctor, consectetur sapien nec, ultricies nunc. In hac habitasse
              platea dictumst.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-5 w-auto fill-current" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center gap-2">
                <LocationIcon className="h-5 w-auto fill-current" />
                <span>Floral Park, New York</span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-group">
          <div className="space-y-2">
            <small className="text-sm text-gray-500">Jan 2020 - Sep 2023</small>
            <h3 className="text-2xl font-semibold text-secondary-foreground">
              Software Engineer
            </h3>
            <h4 className="font-bold text-secondary-foreground">
              Company Name
            </h4>
            <p className="text-secondary-foreground tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              development eget nunc nec purus ultrices laoreet. Donec in sapien
              auctor, consectetur sapien nec, ultricies nunc. In hac habitasse
              platea dictumst.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="h-5 w-auto fill-current" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center gap-2">
                <LocationIcon className="h-5 w-auto fill-current" />
                <span>Remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
