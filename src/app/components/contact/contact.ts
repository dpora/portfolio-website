import { Component, ElementRef, viewChild, signal, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements AfterViewInit, OnDestroy {
  private portfolioService = inject(Portfolio);
  readonly contactInfo = this.portfolioService.contactInfo;

  readonly isVisible = signal(false);
  readonly contactSection = viewChild<ElementRef>('contactSection');
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    const div = this.contactSection();
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
