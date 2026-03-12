import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { FaceFollow } from '../face-follow/face-follow';

@Component({
  selector: 'app-hero',
  imports: [FaceFollow],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly displayedText = signal('');
  readonly showCursor = signal(true);

  scrollToProjects(): void {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact(): void {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
