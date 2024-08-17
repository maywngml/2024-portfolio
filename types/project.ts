export type Duration = {
  start: Date;
  end: Date;
};

export type Image = {
  url: string;
  blurDataURL: string;
};

export type Project = {
  title: string;
  stacks: string[];
  duration: Duration;
  teamSize: string;
  overview: string;
  details: string[];
  achievements: string[];
  images: Image[];
  website?: string;
  github?: string;
  figma?: string;
};
