import {
  Experience,
  Education,
  Study,
  Contact,
  Skill,
} from '@/types/introduction';

export const introduction: string =
  '안녕하세요, 코드로 그림 그리는 것을 좋아하는 프론트엔드 개발자 서주희입니다. 웹의 시각적 요소와 인터랙션을 결합하여 사용자가 즐길 수 있는 경험을 만드는 데 매력을 느끼며 동료들과 함께 즐겁게 개발합니다.';

export const experience: Experience[] = [
  {
    period: '2022.06 ~ 2024.06',
    name: '예이랩스',
    job: '프론트엔드 개발',
  },
  {
    period: '2021.06 ~ 2022.06',
    name: '골프존',
    job: '프론트엔드 개발',
  },
];

export const mbti: string = 'istj';

export const education: Education = {
  period: '2016.03 ~ 2021.02',
  name: '경기대학교',
  major: '컴퓨터공학부',
};

export const study: Study = {
  period: '2022.06 ~ 진행중',
  reference: {
    icon: '/images/skills/github.svg',
    title: 'I Know JS',
    url: 'https://github.com/wldnswldnswl/IknowJS',
  },
};

export const contacts: Contact[] = [
  {
    title: 'phone',
    content: '+82)010-4640-6319',
    url: 'tel:+82-010-4640-6319',
  },
  {
    title: 'email',
    content: 'sjuhee9712@gmail.com',
    url: 'mailto:sjuhee9712@gmail.com',
  },
  {
    title: 'github',
    content: 'https://github.com/maywngml',
    url: 'https://github.com/maywngml',
  },
];

export const skills: Skill[] = [
  {
    type: 'Language',
    items: [
      {
        icon: '/images/skills/javascript.svg',
        title: 'JavaScript',
      },
      {
        icon: '/images/skills/typescript.svg',
        title: 'TypeScript',
      },
      {
        icon: '/images/skills/html.svg',
        title: 'HTML',
      },
      {
        icon: '/images/skills/css3.svg',
        title: 'CSS',
      },
    ],
  },
  {
    type: 'Framework/Library',
    items: [
      {
        icon: '/images/skills/react.svg',
        title: 'React',
      },
      {
        icon: '/images/skills/nextjs.png',
        title: 'NextJS',
      },
      {
        icon: '/images/skills/redux.svg',
        title: 'Redux Toolkit',
      },
      {
        icon: '/images/skills/tailwindcss.svg',
        title: 'TailwindCSS',
      },
    ],
  },
  {
    type: 'Database',
    items: [
      {
        icon: '/images/skills/mongodb.svg',
        title: 'MongoDB',
      },
    ],
  },
  {
    type: 'Version Control',
    items: [
      {
        icon: '/images/skills/git.svg',
        title: 'Git',
      },
      {
        icon: '/images/skills/github.svg',
        title: 'Github',
      },
    ],
  },
  {
    type: 'Collaboration Tools',
    items: [
      {
        icon: '/images/skills/slack.svg',
        title: 'Slack',
      },

      {
        icon: '/images/skills/jira.svg',
        title: 'Jira',
      },
      {
        icon: '/images/skills/notion.svg',
        title: 'Notion',
      },
    ],
  },
];
