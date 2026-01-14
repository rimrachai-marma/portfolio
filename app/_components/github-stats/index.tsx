import React, { Suspense } from "react";
import { ContributionCalender } from "./ContributionCalendar";

const GitHubStatSection: React.FC = () => {
  return (
    <section id="github-calendar" className="mt-20 space-y-6">
      <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-2 items-center text-primary before:content-[''] before:h-px before:block before:bg-linear-to-r before:from-transparent before:to-gray-300 dark:before:to-gray-600 after:content-[''] after:h-px after:block after:bg-linear-to-l after:from-transparent after:to-gray-300 dark:after:to-gray-600">
        My GitHub Activity
      </div>

      <Suspense
        fallback={
          <div className="flex items-center gap-3 py-4 px-5 bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-lg shadow-sm">
            <div className="relative size-4.5">
              <div className="absolute inset-0 border-2 border-gray-300 dark:border-[#30363d] rounded-full"></div>
              <div className="absolute inset-0 border-2 border-transparent border-t-blue-500 dark:border-t-[#58a6ff] rounded-full animate-spin"></div>
            </div>

            <p className="text-gray-600 dark:text-[#8b949e] text-sm">
              Fetching GitHub Stats...
            </p>
          </div>
        }
      >
        <ContributionCalender username="rimrachai-marma" />
      </Suspense>
    </section>
  );
};

export default GitHubStatSection;
