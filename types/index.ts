export interface Skill {
  title: string;
  icon: string;
  highlight?: boolean;
}

export interface Project {
  title: string;
  image: string;
  description: string;
  liveLink?: string;
  codeLink: string;
  technologies: string[];
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  timeForReading: string;
  tags: string[];
}

export interface EducationTimeline {
  period: string;
  degree: string;
  institution: string;
  location: string;
}

export interface ExperienceTimeline {
  period: string;
  role: string;
  company: string;
  company_url?: string;
  description: string;
  employment_type: string;
  location: string;
}
