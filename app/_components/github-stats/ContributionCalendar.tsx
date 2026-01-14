import React from "react";

import { ContributionGrid } from "./ContributionGrid";
import {
  fetchActivityBreakdown,
  fetchContributionCalendar,
} from "@/services/githubService";

interface Props {
  username: string;
}

export const ContributionCalender: React.FC<Props> = ({ username }) => {
  const activity = React.use(fetchActivityBreakdown(username));
  const contribution = React.use(fetchContributionCalendar(username));

  const activityPercentage = (value: number): number => {
    const { commits, reviews, pullRequests, issues } = activity;
    const total = commits + reviews + pullRequests + issues;
    if (total === 0) return 0;
    return (value / total) * 100;
  };

  return (
    <>
      <div className="p-6 space-y-5 bg-white dark:bg-[#161b22] border border-gray-200 dark:border-[#30363d] rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] text-gray-900 dark:text-[#c9d1d9]">
        <div className="flex items-center gap-2 text-lg font-bold">
          <svg
            className="fill-gray-900 dark:fill-[#c9d1d9]"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M17.016 17.016v-4.031h-2.016v4.031h2.016zM12.984 17.016v-10.031h-1.969v10.031h1.969zM9 17.016v-7.031h-2.016v7.031h2.016zM18.984 3q0.797 0 1.406 0.609t0.609 1.406v13.969q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.797 0-1.406-0.609t-0.609-1.406v-13.969q0-0.797 0.609-1.406t1.406-0.609h13.969z"></path>
          </svg>
          GitHub contribution activity data
        </div>

        <ContributionGrid contributionWeeks={contribution.weeks} />

        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex items-center gap-2">
            <span className="text-base">
              Total
              <strong className="font-medium">
                &nbsp;{contribution.total.toLocaleString()}&nbsp;
              </strong>
              contributions
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>Less</span>
            <div className="size-2.5 rounded-s-xs bg-[#ebedf0] dark:bg-[#161b22] dark:border dark:border-[#30363d]"></div>
            <div className="size-2.5 rounded-s-xs bg-[#9be9a8] dark:bg-[#0e4429]"></div>
            <div className="size-2.5 rounded-s-xs bg-[#40c463] dark:bg-[#006d32]"></div>
            <div className="size-2.5 rounded-s-xs bg-[#30a14e] dark:bg-[#26a641]"></div>
            <div className="size-2.5 rounded-s-xs bg-[#216e39] dark:bg-[#39d353]"></div>
            <span>More</span>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-5 space-y-4">
          <div className="w-full h-2 rounded-full overflow-hidden flex bg-gray-200 dark:bg-[#21262d]">
            <div
              className="h-full bg-[#22c55e] transition-all duration-300 hover:opacity-80"
              style={{
                width: `${activityPercentage(activity.commits)}%`,
              }}
            ></div>
            <div
              className="h-full bg-[#3b82f6] transition-all duration-300 hover:opacity-80"
              style={{
                width: `${activityPercentage(activity.reviews)}%`,
              }}
            ></div>
            <div
              className="h-full bg-[#a855f7] transition-all duration-300 hover:opacity-80"
              style={{
                width: `${activityPercentage(activity.pullRequests)}%`,
              }}
            ></div>
            <div
              className="h-full bg-[#ef4444] transition-all duration-300 hover:opacity-80"
              style={{
                width: `${activityPercentage(activity.issues)}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between flex-wrap gap-3">
            <div className="flex items-center gap-1 text-sm">
              <div className="size-2.5 rounded-full bg-[#22c55e]"></div>
              <span>
                <strong className="font-medium">Commits: </strong>
                {activity.commits.toLocaleString()} (
                {activityPercentage(activity.commits).toFixed(1)}%)
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <div className="size-2.5 rounded-full bg-[#3b82f6]"></div>
              <span>
                <strong className="font-medium">Reviews: </strong>
                {activity.reviews.toLocaleString()} (
                {activityPercentage(activity.reviews).toFixed(1)}%)
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <div className="size-2.5 rounded-full bg-[#a855f7]"></div>
              <span>
                <strong className="font-medium">Pull Requests: </strong>
                {activity.pullRequests.toLocaleString()} (
                {activityPercentage(activity.pullRequests).toFixed(1)}%)
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <div className="size-2.5 rounded-full bg-[#ef4444]"></div>
              <span>
                <strong className="font-medium">Issues: </strong>
                {activity.issues.toLocaleString()} (
                {activityPercentage(activity.issues).toFixed(1)}%)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
