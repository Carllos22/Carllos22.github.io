export type ProjectCategory =
  | 'Client Project'
  | 'Mobile / Multiplatform'
  | 'Full Stack'
  | 'Open Source';

export type ProjectStatus = 'Live' | 'In Progress';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  status: ProjectStatus;
  description: {
    es: string;
    en: string;
  };
  tags: string[];
  demoUrl?: string | null;
  githubUrl?: string | null;
  isPrivate?: boolean;
  featured?: boolean;
}
