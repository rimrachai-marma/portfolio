import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubCal: React.FC = () => {
  return (
    <section id="github-calendar" className="mt-20 space-y-6">
      <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-2 items-center text-primary before:content-[''] before:h-px before:block before:bg-gradient-to-r before:from-transparent before:to-gray-300 dark:before:to-gray-600 after:content-[''] after:h-px after:block after:bg-gradient-to-l after:from-transparent after:to-gray-300 dark:after:to-gray-600">
        My GitHub Activity
      </div>

      <GitHubCalendar
        username="rimrachai-marma"
        errorMessage="Unable to load GitHub calendar."
      />
    </section>
  );
};

export default GitHubCal;
