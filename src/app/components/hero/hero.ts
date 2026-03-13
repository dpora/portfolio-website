import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FaceFollow } from '../face-follow/face-follow';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-hero',
  imports: [FaceFollow],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private portfolioService = inject(Portfolio);

  readonly socialLinks = computed(() => {
    const colorMap: Record<string, string> = {
      github: 'var(--color-primary)',
      linkedin: 'var(--color-teal)',
      mail: 'var(--color-orange)',
      twitter: 'var(--color-pink)',
    };

    return this.portfolioService.contactInfo().socials.map((social) => ({
      ...social,
      color: colorMap[social.icon] ?? 'var(--color-primary)',
      external: social.href.startsWith('http'),
    }));
  });

  readonly displayedText = signal('');
  readonly showCursor = signal(true);

  scrollToProjects(): void {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
