"use client";

import React from "react";
import { ContributionDay, ContributionWeek } from "@/services/githubService";

interface Week {
  days: ContributionDay[];
  month: string;
}

interface Props {
  contributionWeeks: ContributionWeek[];
}

const formatOrdinalDate = (isoString: string) => {
  const date = new Date(isoString);
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });

  const getSuffix = (n: number) => {
    if (n > 3 && n < 21) return "th";
    return ["th", "st", "nd", "rd"][n % 10] || "th";
  };

  return `${month} ${day}${getSuffix(day)}`;
};

const getLevelColor = (level: string): string => {
  switch (level) {
    case "NONE":
      return "bg-[#ebedf0] dark:bg-[#161b22] dark:border dark:border-[#30363d]";
    case "FIRST_QUARTILE":
      return "bg-[#9be9a8] dark:bg-[#0e4429]";
    case "SECOND_QUARTILE":
      return "bg-[#40c463] dark:bg-[#006d32]";
    case "THIRD_QUARTILE":
      return "bg-[#30a14e] dark:bg-[#26a641]";
    case "FOURTH_QUARTILE":
      return "bg-[#216e39] dark:bg-[#39d353]";
    default:
      return "bg-[#ebedf0] dark:bg-[#161b22] dark:border dark:border-[#30363d]";
  }
};

export const ContributionGrid: React.FC<Props> = ({ contributionWeeks }) => {
  const [tooltip, setTooltip] = React.useState({
    visible: false,
    x: 0,
    y: 0,
    day: null as ContributionDay | null,
  });

  const weeks = React.useMemo(() => {
    if (!contributionWeeks || contributionWeeks.length === 0) return [];

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const _weeks: Week[] = [];
    let currentWeek: ContributionDay[] = [];
    let currentMonth: string | null = null;

    contributionWeeks.forEach((week, index) => {
      const dayOfWeek = new Date(week.contributionDays[0]?.date).getDay();

      if (dayOfWeek === 0 && currentWeek.length > 0) {
        _weeks.push({
          days: currentWeek,
          month: currentMonth || "",
        });
        currentWeek = [];
      }

      currentWeek.push(...week.contributionDays);
      currentMonth =
        months[new Date(week.contributionDays[0]?.date).getMonth()];

      if (index === contributionWeeks.length - 1 && currentWeek.length > 0) {
        _weeks.push({
          days: currentWeek,
          month: currentMonth,
        });
      }
    });

    return _weeks;
  }, [contributionWeeks]);

  const handleCellHover = (
    e: React.MouseEvent<HTMLDivElement>,
    day: ContributionDay
  ): void => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      visible: true,
      x: rect.left,
      y: rect.top - 40,
      day,
    });
  };

  const handleCellLeave = (): void => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <div className="flex gap-2">
      <div className="mt-2.75 flex flex-col gap-0.75 pt-5">
        <div className="text-tiny text-gray-600 dark:text-[#8b949e] h-3 flex items-center justify-end pr-1.25 min-w-7.5">
          Sun
        </div>
        <div className="text-tiny text-gray-600 dark:text-[#8b949e] h-3 flex items-center justify-end pr-1.25 min-w-7.5">
          Mon
        </div>
        <div className="text-tiny text-gray-600 dark:text-[#8b949e] h-3 flex items-center justify-end pr-1.25 min-w-7.5">
          Tue
        </div>
        <div className="text-tiny text-gray-600 dark:text-[#8b949e] h-3 flex items-center justify-end pr-1.25 min-w-7.5">
          Wed
        </div>
        <div className="text-tiny text-gray-600 dark:text-[#8b949e] h-3 flex items-center justify-end pr-1.25 min-w-7.5">
          Thu
        </div>
        <div className="text-tiny text-gray-600 dark:text-[#8b949e] h-3 flex items-center justify-end pr-1.25 min-w-7.5">
          Fri
        </div>
        <div className="text-tiny text-gray-600 dark:text-[#8b949e] h-3 flex items-center justify-end pr-1.25 min-w-7.5">
          Sat
        </div>
      </div>
      <div className="flex gap-0.75 overflow-x-auto py-2.5 px-1 flex-1">
        {weeks.map((week, weekIndex) => (
          <div
            key={weekIndex}
            className="flex flex-col justify-between gap-1.25"
          >
            <div className="max-w-3 overflow-visible text-[11px] text-gray-600 dark:text-[#8b949e] min-h-3.75">
              {weekIndex === 0 || week.month !== weeks[weekIndex - 1].month
                ? week.month
                : ""}
            </div>

            <div className="flex flex-col gap-0.75">
              {Array.from({ length: 7 }, (_, i) => {
                const day = week.days.find(
                  (d) => new Date(d.date).getDay() === i
                );

                return day ? (
                  <div
                    key={i}
                    className={`size-3 rounded-xs cursor-pointer transition-all duration-200 hover:scale-[1.2] hover:outline-2 hover:outline-gray-400 dark:hover:outline-[#58a6ff] ${getLevelColor(
                      day.contributionLevel
                    )}`}
                    onMouseEnter={(e) => handleCellHover(e, day)}
                    onMouseLeave={handleCellLeave}
                  />
                ) : (
                  <div
                    key={i}
                    className="size-3 rounded-xs opacity-30 bg-[#ebedf0] dark:bg-[#161b22] dark:border dark:border-[#30363d]"
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {tooltip.visible && tooltip.day && (
        <div
          className="fixed rounded-md px-3 py-2 text-xs pointer-events-none z-50 block bg-gray-900 text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)] dark:bg-[#161b22] dark:border dark:border-[#30363d] dark:text-[#c9d1d9] dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
          }}
        >
          {tooltip.day.contributionCount} contributions on{" "}
          {formatOrdinalDate(tooltip.day.date)}
        </div>
      )}
    </div>
  );
};
