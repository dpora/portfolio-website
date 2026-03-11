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
      "I'm a software engineer passionate about modernizing systems and crafting elegant solutions from end to end. With a strong foundation in full-stack development, I enjoy working across the entire stack, from building responsive UIs with React to optimizing SQL databases. ",
      "Outside of my day-to-day work, I'm usually working on my '99 Miata, hitting the rock climbing gym, or experimenting with 3D modeling."
    ],
    traits: [
      { icon: 'terminal', label: "Full Stack Engineer" },
      { icon: 'code2', label: "Clean Code Enthusiast" },
      { icon: 'code2', label: "Lifelong Learner" },
      { icon: 'coffee', label: "Car Nut" },
      { icon: 'gamepad2', label: "Rock Climber" },
    ]
  });

  readonly skills = signal<Skill[]>([
    { name: 'TypeScript', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'C#', category: 'language' },
    { name: 'VB.Net', category: 'language' },
    { name: 'Java', category: 'language' },

    { name: 'React', category: 'frontend' },
    { name: 'Angular', category: 'frontend' },
    { name: 'Blazor', category: 'frontend' },

    { name: 'Express.js', category: 'backend' },
    { name: 'ASP.NET Core', category: 'backend' },
    { name: 'Spring Boot', category: 'backend' },

    { name: 'MS SQL Server', category: 'databases' },
    { name: 'SQLite', category: 'databases' },

    { name: 'Visual Studio', category: 'tools' },
    { name: 'Visual Studio Code', category: 'tools' },
    { name: 'Docker', category: 'tools' },
    { name: 'Azure', category: 'tools' },
    { name: 'Sentry', category: 'tools' },
    { name: 'Swagger', category: 'tools' },
    { name: 'SSMS', category: 'tools' },
    { name: 'Github Actions', category: 'tools' },
  ]);

  readonly experiences = signal<ExperienceItem[]>([
    {
      role: 'Full-stack Software Engineer',
      company: 'Akuret Solutions',
      period: 'May 2025 — Sept 2025',
      description: 'Returned to Akuret to lead a full-stack web transition. Rebuilt an existing .NET MAUI application into a dedicated web platform using React, Vite, TypeScript, and Tailwind CSS to meet customer requirements for a web-based solution. Alongside development, I took on a leadership role by mentoring a colleague on front-end development. On the backend, migrated frameworks to .NET 9, implemented CI/CD pipelines, and optimized SQL database queries to reduce execution time by over 98%.',
      tags: ['React','Vite', 'TypeScript', 'Tailwind CSS', '.NET Framework', 'GitHub Actions', 'Azure DevOps', 'MS SQL Server', 'Database Optimization', 'REST API'],
      color: 'primary',
    },
    {
      role: 'Back-end Software Engineer',
      company: 'KMD Technology Solutions, LLC',
      period: 'Jul 2023 — May 2025',
      description: 'Developed comprehensive project management solutions and data-driven tools to enhance workflow efficiency. Built an Angular web dashboard for managing deliverables, developed full-stack survey pages , and created an automated OCR program using Tesseract to scan purchase orders for federal compliance clauses.',
      tags: ['Angular', 'TypeScript', 'C#', 'VB.NET', 'Tesseract OCR', 'MS SQL Server', 'HTML', 'CSS'],
      color: 'secondary',
    },
    {
      role: 'Software Developer',
      company: 'Akuret Solutions',
      period: 'Aug 2021 - Jan 2023',
      description: 'Started my professional development career building internal systems and data pipelines. Engineered automated SFTP data ingestion scripts using VB.NET and SQL, developed an automated system updater for internal batches and databases, and built Android applications utilizing Kotlin Multiplatform.',
      tags: ['VB.NET', 'MS SQL Server', 'Kotlin Multiplatform', 'Android Development', 'WinSCP', 'SFTP Management'],
      color: 'accent',
    },
  ]);

  readonly projects = signal<Project[]>([
    {
      title: "What The Dob",
      description:
        "Blazor Server web app for browsing Penn State dining hall menus and rating their dishes. Data is scraped from the public PSU menu page, stored in SQLite via EF Core, and exposed through a single-page experience with anonymous session-based ratings.",
      tags: ["ASP.NET Core", "Blazor", "SQLite", "EF Core", "HTMLAgilityPack", "Clean Architecture"],
      color: "primary",
      github: "https://github.com/dpora/WhatTheDob",
      live: "#",
    },
    {
      title: "Salvage Search",
      description:
        "A blazing-fast CLI tool for orchestrating build pipelines and automating repetitive dev workflows.",
      tags: ["Rust", "CLI", "YAML", "CI/CD"],
      color: "secondary",
      github: "#",
    },
    // {
    //   title: "Auth Microservice",
    //   description:
    //     "A secure, scalable authentication service with OAuth2, JWT tokens, and role-based access control.",
    //   tags: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    //   color: "accent",
    //   github: "#",
    //   live: "#",
    // },
    // {
    //   title: "Design System",
    //   description:
    //     "A comprehensive component library with accessibility-first design, theming support, and documentation.",
    //   tags: ["React", "Storybook", "CSS-in-JS", "A11y"],
    //   color: "primary",
    //   github: "#",
    //   live: "#",
    // },
  ]);

  readonly contactInfo = signal<ContactInfo>({
    description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something awesome. Drop me a line!",
    socials: [
      { icon: 'github', label: 'GitHub', href: 'https://danpora.dev/link/github', handle: '@dpora' },
      { icon: 'linkedin', label: 'LinkedIn', href: 'https://danpora.dev/link/linkedin', handle: '/in/daniel-pora' },
      { icon: 'mail', label: 'Email', href: 'mailto:136dpora@gmail.com', handle: '136dpora@gmail.com' },
    ]
  });
}
