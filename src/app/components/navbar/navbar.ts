import {
  Component,
  HostListener,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  private portfolioService = inject(Portfolio);

  readonly navLinks = this.portfolioService.navLinks;
  readonly scrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly activeSection = signal('home');

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
    this.updateActiveSection();
  }

  toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  scrollTo(href: string): void {
    this.closeMenu();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private updateActiveSection(): void {
    const sections = this.navLinks().map(l => l.href.replace('#', ''));
    
    // Check if user reached the bottom of the page
    if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 10) {
      if (sections.length > 0) {
        this.activeSection.set(sections[sections.length - 1]);
        return;
      }
    }

    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        this.activeSection.set(id);
        return;
      }
    }
    this.activeSection.set('home');
  }
}
