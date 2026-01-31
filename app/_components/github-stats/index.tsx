import React, { Suspense } from "react";
import { ContributionCalender } from "./ContributionCalendar";
import { ErrorBoundaryWrapper } from "./ErrorBoundaryWrapper";
import LoadingFallback from "./LoadingFallback";

const GitHubStatSection: React.FC = () => {
  return (
    <section id="github-calendar" className="mt-20 space-y-6">
      <h1 className="grid grid-cols-[1fr_max-content_1fr] gap-x-2 items-center text-primary before:content-[''] before:h-px before:block before:bg-linear-to-r before:from-transparent before:to-gray-300 dark:before:to-gray-600 after:content-[''] after:h-px after:block after:bg-linear-to-l after:from-transparent after:to-gray-300 dark:after:to-gray-600">
        My GitHub Activity
      </h1>

      <ErrorBoundaryWrapper>
        <Suspense fallback={<LoadingFallback />}>
          <ContributionCalender username="rimrachai-marma" />
        </Suspense>
      </ErrorBoundaryWrapper>
    </section>
  );
};

export default GitHubStatSection;
