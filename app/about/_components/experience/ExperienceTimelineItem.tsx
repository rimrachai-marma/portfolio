"use client";

import React from "react";
import { motion } from "framer-motion";

import { LocationIcon } from "@/components/icons/LocationIcon";
import { ExperienceTimeline } from "@/types";
import { BriefcaseIcon } from "@/components/icons/BriefcaseIcon";

interface Props {
  item: ExperienceTimeline;
  index: number;
}

const ExperienceTimelineItem: React.FC<Props> = ({ item, index }) => {
  return (
    <motion.div
      className="timeline-group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
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
    </motion.div>
  );
};

export default ExperienceTimelineItem;
