export type Duration = {
  start: Date;
  end: Date;
};

export type Project = {
  title: string;
  stacks: string[];
  duration: Duration;
  teamSize: string;
  overview: string;
  details: string[];
  achievements: string[];
  images: string[];
  website?: string;
  github?: string;
  figma?: string;
};
