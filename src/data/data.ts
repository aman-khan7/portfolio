import type {
  Project,
  ContactData,
  EducationEntry,
  HeroData,
  ProjectType,
} from "../types/project";
import photo from "../assets/profile.jpeg";
import ReactIcon from "../assets/react.svg";
import Typescript from "../assets/typescript.svg";
import Tailwind from "../assets/tailwind.svg";
import Redux from "../assets/redux.svg";
import RTK from "../assets/rtk.png";
import Thunk from "../assets/redux-thunk.png";
import Vite from "../assets/vite.svg";
import Next from "../assets/next.svg";
import NPM from "../assets/npm.svg";
import Git from "../assets/git.svg";
import Performance from "../assets/performance.svg";
import Responsive from "../assets/responsive.png";
import HTMLCSSJS from "../assets/htmlcssjs.png";
import CrwnClothing from "../assets/crwn-clothing.png";
import Natours from "../assets/natours.png";
import Nexter from "../assets/nexter.png";
import Trillo from "../assets/trillo.png";
import Antd from "../assets/antd.svg";
import monster from "../assets/monster-rolodex.png";

export const hero: HeroData = {
  name: "Aman Khan",
  photo: photo,
  shortBio:
    "Software developer with faith‑inspired values, building web apps & meaningful software.",
};

export interface ProjectsByType {
  type: ProjectType;
  projects: Project[];
}

export const projects: ProjectsByType[] = [
  {
    type: "websites",
    projects: [
      {
        id: "website1",
        title: "Natours",
        description: "Responsive website for Nature tourism",
        image: Natours,
        liveUrl: "https://tourse.netlify.app/",
        repoUrl: "https://github.com/aman-khan7/natours",
      },
      {
        id: "website2",
        title: "Trillo",
        description: "All in one booking app",
        image: Trillo,
        liveUrl: "https://nextere.netlify.app/",
        repoUrl: "https://github.com/aman-khan7/nexter",
      },
      {
        id: "website3",
        title: "Nexter",
        description:
          "Real estate website where I showcased my talents in flex and grid layouts",
        image: Nexter,
        liveUrl: "https://nextere.netlify.app/",
        repoUrl: "https://github.com/aman-khan7/nexter",
      },
    ],
  },
  {
    type: "react‑projects",
    projects: [
      {
        id: "react1",
        title: "E-commerce Clothing Shop",
        description: "React app to browse and buy clothes",
        image: CrwnClothing,
        liveUrl: "https://kapdokidukaan.netlify.app",
        repoUrl: "https://git@github.com:aman-khan7/crwn-clothing",
      },
      {
        id: "react2",
        title: "Monster Rolodex",
        description: "Displaying monsters from an API",
        image: monster,
        liveUrl:"monsterrolodexe.netlify.app",
        repoUrl:"https://github.com/aman-khan7/monsters-rolodex",



      },
    ],
  },
  //   {
  //     type: "next‑projects",
  //     projects: [
  //       {
  //         id: "next1",
  //         title: "Next Project",
  //         description: "Next Project",
  //         image: "",
  //         liveUrl: "kapdokidukaan.netlify.app",
  //         repoUrl: "https://github.com/aman-khan7/crwn-clothing",
  //       },
  //       // more
  //     ],
  //   },
];

export const education: EducationEntry[] = [
  {
    id: "edu1",
    institution: "St. Anthony, U.P",
    degree: "10th",
    startYear: "",
    endYear: "2017",
    description: "9.4 CGPA",
  },
  {
    id: "edu2",
    institution: "Government Polytechnic",
    degree: "Polytechnic Diploma",
    startYear: "",
    endYear: "2020",
    description: "68%",
  },
  {
    id: "edu3",
    institution: "Delhi Institute of Engineering College, Meerut",
    degree: "B.Tech (ECE)",
    startYear: "",
    endYear: "2025",
    description: "",
  },
];

export const contact: ContactData = {
  email: "ak8133272@gmail.com",
  github: "https://github.com/aman-khan7",
  linkedin: "https://www.linkedin.com/in/aman-khan-2021",
};

export const skills = [
  { name: "React 19", icon: ReactIcon },
  { name: "TypeScript", icon: Typescript },
  { name: "Antd 5", icon: Antd },
  { name: "Web Performance", icon: Performance },
  { name: "Responsive Design", icon: Responsive },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "Redux Toolkit", icon: Redux },
  { name: "npm", icon: NPM },
  { name: "Vite", icon: Vite },
  { name: "RTK Query", icon: RTK },
  { name: "HTML-CSS-JS", icon: HTMLCSSJS },
  { name: "Redux Thunk", icon: Thunk },
  { name: "Next.js 15", icon: Next },
  { name: "git", icon: Git },
];
