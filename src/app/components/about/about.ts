import { Component, ElementRef, viewChild, signal, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit, OnDestroy {
  private portfolioService = inject(Portfolio);

  aboutContent = this.portfolioService.aboutContent;
  skills = this.portfolioService.skills;

  isVisible = signal(false);
  animateDiv = viewChild<ElementRef>('animateDiv');
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    const div = this.animateDiv();
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
