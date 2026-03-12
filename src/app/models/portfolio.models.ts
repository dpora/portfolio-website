export interface Skill {
  name: string;
  category: 'front-end' | 'back-end' | 'language' | 'tools' | 'databases';
}

export interface ProjectRepository {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  color: 'primary' | 'secondary' | 'accent' | string;
  github?: ProjectRepository[];
  live?: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
  handle: string;
}

export interface ContactInfo {
  description: string;
  socials: SocialLink[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Trait {
  icon: string;
  label: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  paragraphs: string[];
  traits: Trait[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
  color: 'primary' | 'secondary' | 'accent' | string;
}
