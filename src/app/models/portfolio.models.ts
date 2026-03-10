export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
