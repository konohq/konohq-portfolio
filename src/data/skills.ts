import type { IconType } from "react-icons";
import {
  SiGithub,
  SiGithubactions,
  SiGit,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiRender,
  SiRuby,
  SiRubyonrails,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbTestPipe } from "react-icons/tb";

export type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

export const skills: Skill[] = [
  {
    name: "Ruby",
    icon: SiRuby,
    color: "#CC342D",
  },
  {
    name: "Ruby on Rails",
    icon: SiRubyonrails,
    color: "#D30001",
  },
  {
    name: "Rails API",
    icon: TbApi,
    color: "#D30001",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#181717",
  },
  {
    name: "RSpec",
    icon: TbTestPipe,
    color: "#CC342D",
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    color: "#2088FF",
  },
  {
    name: "Render",
    icon: SiRender,
    color: "#46E3B7",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
  },
];
