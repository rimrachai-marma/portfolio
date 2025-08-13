export interface Skill {
  title: string;
  icon: string;
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
