export type Project = {
  title: string;
  stacks: string[];
  duration: {
    start: Date;
    end: Date;
  };
  teamSize: string;
  overview: string;
  details: string[];
  achievements: string[];
  thumbnails: string[];
  website?: string;
  github?: string;
  figma?: string;
};
