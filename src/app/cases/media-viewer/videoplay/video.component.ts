import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  templateUrl: './video.component.html',
  imports: [CommonModule, AXButtonModule, AXDecoratorModule],
  styles: `
    :host {
      display: block;
      width: 100%;
    }
    input[type='range'] {
      accent-color: var(--ax-color-primary, #3b82f6);
    }
  `,
})
export class VideoComponent {
  private readonly platformId = inject(PLATFORM_ID);

  private readonly videoRef = viewChild<ElementRef<HTMLVideoElement>>('video');

  private readonly hostRef = viewChild<ElementRef<HTMLElement>>('host');

  protected readonly src = signal(
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  );

  protected readonly isPlaying = signal(false);
  protected readonly currentTime = signal(0);
  protected readonly duration = signal(0);
  protected readonly volume = signal(1);
  protected readonly isMuted = signal(false);
  protected readonly playbackRate = signal(1);
  protected readonly isScrubbing = signal(false);

  protected readonly seekPercent = signal(0);

  protected readonly timeLabel = computed(() => {
    return `${this.formatTime(this.currentTime())} / ${this.formatTime(this.duration())}`;
  });

  protected readonly volumePercent = computed(() =>
    Math.round(this.volume() * 100),
  );

  protected readonly playIconClass = computed(() =>
    this.isPlaying() ? 'fa-solid fa-pause' : 'fa-solid fa-play',
  );

  protected readonly playbackRates = [1, 1.25, 1.5, 2] as const;

  togglePlay(): void {
    const el = this.videoRef()?.nativeElement;
    if (!el) {
      return;
    }
    if (el.paused) {
      void el.play();
    } else {
      el.pause();
    }
  }

  onPlayStateChange(playing: boolean): void {
    this.isPlaying.set(playing);
  }

  onEnded(): void {
    this.isPlaying.set(false);
  }

  onTimeUpdate(): void {
    const el = this.videoRef()?.nativeElement;
    if (!el) {
      return;
    }
    this.currentTime.set(el.currentTime);
    if (!this.isScrubbing()) {
      const d = el.duration;
      if (d && Number.isFinite(d)) {
        this.seekPercent.set((el.currentTime / d) * 100);
      }
    }
  }

  onLoadedMetadata(): void {
    const el = this.videoRef()?.nativeElement;
    if (!el) {
      return;
    }
    this.duration.set(el.duration);
    el.volume = this.volume();
    el.playbackRate = this.playbackRate();
    if (el.duration && Number.isFinite(el.duration)) {
      this.seekPercent.set((el.currentTime / el.duration) * 100);
    }
  }

  onSeekInput(event: Event): void {
    this.isScrubbing.set(true);
    const el = this.videoRef()?.nativeElement;
    const pct = Number((event.target as HTMLInputElement).value);
    this.seekPercent.set(pct);
    if (el && el.duration && Number.isFinite(el.duration)) {
      el.currentTime = (pct / 100) * el.duration;
      this.currentTime.set(el.currentTime);
    }
  }

  onSeekCommit(): void {
    this.isScrubbing.set(false);
  }

  onVolumeInput(event: Event): void {
    const pct = Number((event.target as HTMLInputElement).value) / 100;
    this.volume.set(pct);
    const el = this.videoRef()?.nativeElement;
    if (el) {
      el.volume = pct;
      if (pct > 0 && el.muted) {
        el.muted = false;
      }
      this.isMuted.set(el.muted);
    }
  }

  onVolumeChange(): void {
    const el = this.videoRef()?.nativeElement;
    if (el) {
      this.isMuted.set(el.muted);
    }
  }

  toggleMute(): void {
    const el = this.videoRef()?.nativeElement;
    if (!el) {
      return;
    }
    el.muted = !el.muted;
    this.isMuted.set(el.muted);
  }

  skip(seconds: number): void {
    const el = this.videoRef()?.nativeElement;
    if (!el) {
      return;
    }
    const d = this.duration() || el.duration || 0;
    const next = Math.min(Math.max(0, el.currentTime + seconds), d);
    el.currentTime = next;
    this.currentTime.set(next);
    if (d && Number.isFinite(d)) {
      this.seekPercent.set((next / d) * 100);
    }
  }

  setPlaybackRate(rate: number): void {
    this.playbackRate.set(rate);
    const el = this.videoRef()?.nativeElement;
    if (el) {
      el.playbackRate = rate;
    }
  }

  onPlaybackRateChange(event: Event): void {
    const rate = Number((event.target as HTMLSelectElement).value);
    if (Number.isFinite(rate)) {
      this.setPlaybackRate(rate);
    }
  }

  async toggleFullscreen(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const host = this.hostRef()?.nativeElement;
    if (!host) {
      return;
    }
    try {
      if (!document.fullscreenElement) {
        await host.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      /* ignore unsupported fullscreen */
    }
  }

  private formatTime(seconds: number): string {
    if (!Number.isFinite(seconds) || seconds < 0) {
      return '0:00';
    }
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }
}
