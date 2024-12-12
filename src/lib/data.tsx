import { Github,Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectFiskil from '/public/images/project-fiskil.png';
import ProjectWingie from '/public/images/project-wingie.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import spotletLogo from '/public/images/logos/logo-spotlet.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shahsagarm',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  // {
  //   label: 'Work',
  //   href: '#work',
  // },
  // {
  //   label: 'Testimonials',
  //   href: '#testimonials',
  // },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/saikirandasari04',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/saikirandasari04/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  // {
  //   label: 'Nest.js',
  //   logo: LogoNest,
  //   url: 'https://nestjs.com/',
  // },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  // {
  //   label: 'PostgreSQL',
  //   logo: LogoPostgreSQL,
  //   url: 'https://www.postgresql.org/',
  // },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  // {
  //   label: 'Sass/Scss',
  //   logo: LogoSass,
  //   url: 'https://sass-lang.com/',
  // },
  // {
  //   label: 'Tailwindcss',
  //   logo: LogoTailwindcss,
  //   url: 'https://tailwindcss.com/',
  // },
  // {
  //   label: 'Figma',
  //   logo: LogoFigma,
  //   url: 'https://www.figma.com/',
  // },
  // {
  //   label: 'Cypress',
  //   logo: LogoCypress,
  //   darkModeLogo: LogoCypressLight,
  //   url: 'https://www.cypress.io/',
  // },
  // {
  //   label: 'Storybook',
  //   logo: LogoStorybook,
  //   url: 'https://storybook.js.org/',
  // },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  // {
  //   logo: LogoUpwork,
  //   logoAlt: 'Upwork logo',
  //   position: 'Independent Freelancer',
  //   startDate: new Date(2021, 10),
  //   currentlyWorkHere: true,
  //   summary: [
  //     'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
  //     'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
  //   ],
  // },
  // {
  //   logo: LogoGreenApex,
  //   darkModeLogo: LogoGreenApexLight,
  //   logoAlt: 'Greenapex logo',
  //   position: 'Team Lead',
  //   startDate: new Date(2017, 6),
  //   endDate: new Date(2021, 9),
  //   summary: [
  //     'Acted as team lead in different projects.',
  //     'Brainstormed new ideas & gathered requirements for internal projects.',
  //     'Designed architecture of different projects (frontend + backend).',
  //     'Worked on enterprise-level projects for a variety of clients.',
  //     'Handled sprint planning & task distribution.',
  //   ],
  // },
  {
    logo: spotletLogo,
    darkModeLogo: spotletLogo,
    logoAlt: "Spotlet logo",
    position: "Full Stack Developer",
    startDate: new Date(2023, 4),
    endDate: new Date(2017, 4),
    currentlyWorkHere: true,
    summary: [
      ` Assisted with planning, designing, coding, debugging, testing, documenting, 
and maintaining software applications.`,
      `Designed database structures to store data securely and efficiently.`,
      `Maintained source control repositories such as Git for versioning purposes.`,
      `Debugged code to identify errors and fix them efficiently`,
      `Optimized program performance by analyzing code and making changes as 
needed.`,
      ` Collaborated with team members to ensure successful project completion.`,
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Wingie',
    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://www.wingie.com',
    previewImage: ProjectWingie,
    technologies: [
      'React',
      'Typescript',
      'React Bootstrap',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Styled Components',
      'Redux',
    ],
  },
  {
    name: 'Fiskil',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://fiskil.com.au',
    previewImage: ProjectFiskil,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Material UI',
      'Redux Toolkit',
      'React Query',
      'Express.js',
      'PostgreSQL',
      'Firebase',
      'AWS Amplify',
      'Cypress',
      'Storybook',
    ],
  },
  {
    name: 'Pepehousing',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://pepehousing.com',
    previewImage: ProjectPepehousing,
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'Tailwindcss',
      'Redux Toolkit',
      'React Query',
      'Storybook',
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];
