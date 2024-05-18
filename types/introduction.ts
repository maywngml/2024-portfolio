export type Experience = {
  period: string;
  name: string;
  job: string;
};

export type Education = {
  period: string;
  name: string;
  major: string;
};

export type StudyReference = {
  icon: string;
  title: string;
  url: string;
};

export type Study = {
  period: string;
  reference: StudyReference;
};

export type Contact = {
  title: string;
  content: string;
};

export type SkillItem = {
  icon: string;
  title: string;
};

export type Skill = {
  type: string;
  items: SkillItem[];
};
