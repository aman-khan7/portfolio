export type ProjectType = "websites" | "react‑projects" | "next‑projects";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface HeroData {
  name: string;
  photo: string;
  shortBio: string;
}

export interface ContactData {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
}
