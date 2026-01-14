import React from "react";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { EducationTimeline } from "@/types";

interface EducationTimelineItemProps {
  item: EducationTimeline;
}

const EducationTimelineItem: React.FC<EducationTimelineItemProps> = ({
  item,
}) => {
  return (
    <div className="timeline-group">
      <div className="space-y-2">
        <small className="text-sm text-gray-500 block">{item.period}</small>

        <h3 className="text-xl font-medium text-secondary-foreground">
          {item.degree}
        </h3>

        <h4 className="font-medium text-secondary-foreground">
          {item.institution}
        </h4>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <LocationIcon className="h-5 w-auto fill-current" />
          <span>{item.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EducationTimelineItem;
