import { Component, ElementRef, viewChild, signal, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience implements AfterViewInit, OnDestroy {
  private portfolioService = inject(Portfolio);
  readonly experiences = this.portfolioService.experiences;

  readonly isVisible = signal(false);
  readonly experienceSection = viewChild<ElementRef>('experienceSection');
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    const div = this.experienceSection();
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
