export type ProjectCategory =
  | 'Client Project'
  | 'Mobile & Multiplatform'
  | 'SEO & Consulting';

export type ProjectStatus = 'Live' | 'In Progress';

export type LinkType = 'web' | 'maps';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year?: string;
  status?: ProjectStatus;
  description: {
    es: string;
    en: string;
  };
  tags: string[];
  liveUrl?: string;
  linkType?: LinkType;
  githubUrl?: string;
  isPrivate?: boolean;
}
