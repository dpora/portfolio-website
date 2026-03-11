import { Component, ElementRef, viewChild, signal, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit, OnDestroy {
  private portfolioService = inject(Portfolio);
  readonly projects = this.portfolioService.projects;

  readonly isVisible = signal(false);
  readonly projectsSection = viewChild<ElementRef>('projectsSection');
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    const div = this.projectsSection();
    if (div) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
            this.observer?.disconnect();
          }
        });
      }, { threshold: 0.1 });

      this.observer.observe(div.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
