import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  signal,
  viewChild,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-face-follow',
  imports: [NgOptimizedImage],
  templateUrl: './face-follow.html',
  styleUrl: './face-follow.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:pointermove)': 'onPointerMove($event)',
    '(window:blur)': 'resetEyes()',
    '(window:mouseleave)': 'resetEyes()',
  },
})
export class FaceFollow {
  readonly containerRef = viewChild<ElementRef<HTMLElement>>('container');
  readonly eyeOffsetX = signal(0);
  readonly eyeOffsetY = signal(0);
  readonly eyeTransform = computed(
    () => `translate(${this.eyeOffsetX()}px, ${this.eyeOffsetY()}px)`
  );

  private rafId: number | null = null;
  private targetX = 0;
  private targetY = 0;
  private readonly maxOffset = 10;

  onPointerMove(event: PointerEvent): void {
    const container = this.containerRef()?.nativeElement;
    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (event.clientX - centerX) / (rect.width / 2);
    const deltaY = (event.clientY - centerY) / (rect.height / 2);
    const clampedX = Math.max(-1, Math.min(1, deltaX));
    const clampedY = Math.max(-1, Math.min(1, deltaY));

    this.targetX = clampedX * this.maxOffset;
    this.targetY = clampedY * this.maxOffset;
    this.scheduleUpdate();
  }

  resetEyes(): void {
    this.targetX = 0;
    this.targetY = 0;
    this.scheduleUpdate();
  }

  private scheduleUpdate(): void {
    if (this.rafId !== null) {
      return;
    }

    this.rafId = window.requestAnimationFrame(() => {
      this.eyeOffsetX.set(this.targetX);
      this.eyeOffsetY.set(this.targetY);
      this.rafId = null;
    });
  }
}
