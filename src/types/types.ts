type Tags =
  | "node"
  | "javascript"
  | "react"
  | "styled-components"
  | "typescript"
  | "tailwind"
  | "css";

export interface Project {
  id: number;
  repoUrl: string;
  deployUrl: string;
  url: string;
  image: string;
  title: string;
  description: string;
  tags: Tags[];
}
