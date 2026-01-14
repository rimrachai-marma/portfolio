const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

export interface ContributionDay {
  color: string;
  date: string;
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  total: number;
  weeks: ContributionWeek[];
}

/**
 * @param username - GitHub username
 * @param from - Start date (optional, defaults to 1 year ago)
 * @param to - End date (optional, defaults to today)
 * @returns Contribution calendar data
 */
export async function fetchContributionCalendar(
  username: string,
  from: string = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString(),
  to: string = new Date().toISOString()
): Promise<ContributionCalendar> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            total: totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
                color
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    username,
    from: from,
    to: to,
  };

  try {
    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.statusText}`);
    }

    const result = await response.json();

    if (result.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
    }

    return result.data.user.contributionsCollection.contributionCalendar;
  } catch (error) {
    console.error("Error fetching contribution data:", error);
    throw error;
  }
}

/**
 * Calculate contribution streaks from contribution data
 */
export function calculateStreaks(contributions: ContributionDay[]): {
  currentStreak: number;
  longestStreak: number;
} {
  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  // Sort by date (newest first)
  const sorted = [...contributions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  let isCurrentStreakActive = true;

  for (let i = 0; i < sorted.length; i++) {
    const hasContributions = sorted[i].contributionCount > 0;

    if (hasContributions) {
      tempStreak++;
      longestStreak = Math.max(longestStreak, tempStreak);

      // Track current streak (from most recent date)
      if (isCurrentStreakActive) {
        currentStreak = tempStreak;
      }
    } else {
      // Check if it's today or yesterday (allow 1-day gap for current streak)
      const daysDiff = Math.floor(
        (Date.now() - new Date(sorted[i].date).getTime()) /
          (1000 * 60 * 60 * 24)
      );

      if (daysDiff <= 1 && isCurrentStreakActive) {
        // Still within current streak window
      } else {
        isCurrentStreakActive = false;
        tempStreak = 0;
      }
    }
  }

  return { currentStreak, longestStreak };
}

/**
 * Fetch contribution activity breakdown from events
 * This gives commits, PRs, issues, reviews counts
 */
export async function fetchActivityBreakdown(username: string): Promise<{
  commits: number;
  pullRequests: number;
  issues: number;
  reviews: number;
}> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          totalPullRequestReviewContributions
        }
      }
    }
  `;

  try {
    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 },
    });

    const result = await response.json();

    if (result.errors) {
      throw new Error(result.errors[0].message);
    }

    const collection = result.data.user.contributionsCollection;

    return {
      commits: collection.totalCommitContributions,
      pullRequests: collection.totalPullRequestContributions,
      issues: collection.totalIssueContributions,
      reviews: collection.totalPullRequestReviewContributions,
    };
  } catch (error) {
    console.error("Error fetching activity breakdown:", error);
    throw error;
  }
}

const githubContributionService = {
  fetchContributionCalendar,
  fetchActivityBreakdown,
  calculateStreaks,
};

export default githubContributionService;
