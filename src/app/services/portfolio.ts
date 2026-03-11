import { Injectable, signal } from '@angular/core';
import { Project, Skill, NavLink, AboutContent, ExperienceItem, ContactInfo } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class Portfolio {

  readonly navLinks = signal<NavLink[]>([
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]);

  readonly aboutContent = signal<AboutContent>({
    title: 'About',
    subtitle: 'Me',
    paragraphs: [
      "I'm a software engineer with a passion for crafting elegant solutions to complex problems. I love working across the full stack, from pixel-perfect UIs to robust backend systems.",
      "When I'm not coding, you'll find me exploring new technologies, contributing to open source, or perfecting my espresso technique."
    ],
    traits: [
      { icon: 'terminal', label: "Full Stack" },
      { icon: 'code2', label: "Open Source" },
      { icon: 'coffee', label: "Caffeine Powered" },
      { icon: 'gamepad2', label: "Problem Solver" },
    ]
  });

  readonly skills = signal<Skill[]>([
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Python', level: 75, category: 'backend' },
    { name: 'PostgreSQL', level: 70, category: 'backend' },
    { name: 'Docker', level: 65, category: 'tools' },
    { name: 'AWS', level: 60, category: 'tools' },
    { name: 'Git', level: 90, category: 'tools' },
  ]);

  readonly experiences = signal<ExperienceItem[]>([
    {
      role: 'Full-stack Software Engineer',
      company: 'Akuret Solutions',
      period: 'May 2025 — Sept 2025',
      description: 'Leading frontend architecture for the core product platform. Building design systems, optimizing performance, and mentoring junior engineers.',
      tags: ['React', 'TypeScript', 'System Design'],
      color: 'primary',
    },
    {
      role: 'Back-end Software Engineer',
      company: 'KMD Technology Solutions, LLC',
      period: 'Jul 2023 — May 2025',
      description: 'Full-stack development on a high-traffic SaaS product. Shipped features end-to-end from database schema to polished UI.',
      tags: ['Node.js', 'PostgreSQL', 'React'],
      color: 'secondary',
    },
    {
      role: 'Software Developer',
      company: 'Akuret Solutions',
      period: 'Aug 2021 - Jan 2023',
      description: 'Built responsive web applications for diverse clients. Collaborated closely with designers to deliver pixel-perfect interfaces.',
      tags: ['Visual Basic', '.NET', 'Microsoft SQL Server', 'WinSCP', 'SFTP Management'],
      color: 'accent',
    },
  ]);

  readonly projects = signal<Project[]>([
    {
      title: "Cloud Dashboard",
      description:
        "A real-time monitoring dashboard for cloud infrastructure with live metrics, alerts, and team collaboration.",
      tags: ["React", "TypeScript", "WebSocket", "D3.js"],
      color: "primary",
      github: "#",
      live: "#",
    },
    {
      title: "CLI Task Runner",
      description:
        "A blazing-fast CLI tool for orchestrating build pipelines and automating repetitive dev workflows.",
      tags: ["Rust", "CLI", "YAML", "CI/CD"],
      color: "secondary",
      github: "#",
    },
    {
      title: "Auth Microservice",
      description:
        "A secure, scalable authentication service with OAuth2, JWT tokens, and role-based access control.",
      tags: ["Node.js", "PostgreSQL", "Redis", "Docker"],
      color: "accent",
      github: "#",
      live: "#",
    },
    {
      title: "Design System",
      description:
        "A comprehensive component library with accessibility-first design, theming support, and documentation.",
      tags: ["React", "Storybook", "CSS-in-JS", "A11y"],
      color: "primary",
      github: "#",
      live: "#",
    },
  ]);

  readonly contactInfo = signal<ContactInfo>({
    email: 'hello@example.com',
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something awesome. Drop me a line!",
    socials: [
      { icon: 'github', label: 'GitHub', href: '#', handle: '@yourusername' },
      { icon: 'linkedin', label: 'LinkedIn', href: '#', handle: '/in/yourusername' },
      { icon: 'twitter', label: 'Twitter', href: '#', handle: '@yourusername' },
      { icon: 'mail', label: 'Email', href: 'mailto:hello@example.com', handle: 'hello@example.com' },
    ]
  });
}
