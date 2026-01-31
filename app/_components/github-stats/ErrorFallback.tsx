import React from "react";

interface Props {
  error?: Error;
}

const ErrorFallback: React.FC<Props> = ({ error }) => {
  return (
    <div className="p-6 space-y-4 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] rounded-lg shadow-sm">
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5">
          <svg
            className="size-8 text-red-500 dark:text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-[#c9d1d9]">
            Unable to Load GitHub Stats
          </h3>
          <p className="text-sm text-gray-600 dark:text-[#8b949e]">
            {error?.message || "An unexpected error occurred"}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-[#30363d] pt-4">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
          Possible causes:
        </p>
        <ul className="text-sm text-gray-600 dark:text-[#8b949e] space-y-1 ml-4 list-disc">
          <li>GitHub API rate limit exceeded</li>
          <li>Invalid or missing GitHub token</li>
          <li>Network connectivity issues</li>
          <li>GitHub API service temporarily unavailable</li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorFallback;
