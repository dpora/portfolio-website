import { Injectable, signal } from '@angular/core';
import { Project, Skill, NavLink } from '../models/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class Portfolio {

  readonly navLinks = signal<NavLink[]>([
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]);

  readonly skills = signal<Skill[]>([
    { name: 'EX', level: 90, category: 'frontend' },
  ]);

  readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'Example Project',
      description:
        'A full-featured online store with product management, shopping cart, and Stripe payment integration.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'fullstack',
      imageUrl: 'https://placehold.co/600x400/1e293b/94a3b8?text=E-Commerce',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    }
  ]);
}
