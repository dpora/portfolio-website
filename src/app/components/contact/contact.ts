import { Component, ElementRef, viewChild, signal, computed, AfterViewInit, OnDestroy, inject } from '@angular/core';
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
  readonly socialLinks = computed(() => {
    const colorMap: Record<string, string> = {
      github: 'var(--color-primary)',
      linkedin: 'var(--color-teal)',
      mail: 'var(--color-orange)',
      twitter: 'var(--color-pink)',
    };

    return this.contactInfo().socials.map((social) => ({
      ...social,
      color: colorMap[social.icon] ?? 'var(--color-primary)',
    }));
  });

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
