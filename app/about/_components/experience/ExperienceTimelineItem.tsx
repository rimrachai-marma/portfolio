import React from "react";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { ExperienceTimeline } from "@/types";
import { BriefcaseIcon } from "@/components/icons/BriefcaseIcon";

interface Props {
  item: ExperienceTimeline;
}

const ExperienceTimelineItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="timeline-group">
      <div className="space-y-2">
        <small className="text-sm text-gray-500 leading-none block">
          {item.period}
        </small>

        <h3 className="text-xl font-medium text-secondary-foreground">
          {item.role}
        </h3>

        {item.company_url ? (
          <a href={item.company_url} target="_blank" rel="noopener noreferrer">
            <h4 className="font-medium text-secondary-foreground">
              {item.company}
            </h4>
          </a>
        ) : (
          <h4 className="font-medium text-secondary-foreground">
            {item.company}
          </h4>
        )}

        <p className="text-secondary-foreground tracking-wider">
          {item.description}
        </p>

        <div className="flex gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="h-5 w-auto fill-current" />
            <span>{item.employment_type}</span>
          </div>

          <div className="flex items-center gap-2">
            <LocationIcon className="h-5 w-auto fill-current" />
            <span>{item.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimelineItem;
