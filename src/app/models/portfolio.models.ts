export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  color: 'primary' | 'secondary' | 'accent' | string;
  github?: string;
  live?: string;
}

export interface SocialLink {
  icon: string;
  label: string;
  href: string;
  handle: string;
}

export interface ContactInfo {
  email: string;
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
