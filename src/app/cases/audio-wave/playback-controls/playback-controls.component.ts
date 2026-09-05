import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import {
  AXAudioWaveChangeEvent,
  AXAudioWaveComponent,
  AXWaveConfig,
} from '@acorex/components/audio-wave';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  templateUrl: 'playback-controls.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AXAudioWaveComponent,
    AXButtonComponent,
    AXDecoratorGenericComponent,
    AXDecoratorIconComponent,
  ],
})
export class playbackcontrolsComponent {
  private readonly audioWave = viewChild<AXAudioWaveComponent>('audioWave');

  protected readonly waveConfig = signal<AXWaveConfig>({
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
    height: 64,
    barGap: 2,
    barRadius: 2,
  });

  protected readonly isPlaying = signal(false);
  protected readonly isMuted = signal(false);
  protected readonly playbackRate = signal(1);
  protected readonly currentTime = signal(0);
  protected readonly duration = signal(0);
  protected readonly lastStatus = signal('');

  protected readonly currentTimeLabel = computed(() =>
    this.formatTime(this.currentTime())
  );
  protected readonly durationLabel = computed(() =>
    this.formatTime(this.duration())
  );

  protected togglePlay(): void {
    const wave = this.audioWave();
    if (!wave) {
      return;
    }

    if (this.isPlaying()) {
      wave.pause();
      return;
    }

    void wave.play();
  }

  protected toggleMute(): void {
    const wave = this.audioWave();
    if (!wave) {
      return;
    }

    wave.setMuted(!wave.isMuted());
    this.isMuted.set(wave.isMuted());
  }

  protected setRate(rate: number): void {
    this.audioWave()?.setRate(rate);
    this.playbackRate.set(rate);
  }

  protected reload(): void {
    void this.audioWave()?.load();
  }

  protected onStatusChanged(event: AXAudioWaveChangeEvent): void {
    this.lastStatus.set(event.status);

    switch (event.status) {
      case 'play':
        this.isPlaying.set(true);
        break;
      case 'pause':
      case 'finish':
        this.isPlaying.set(false);
        break;
      case 'timeupdate':
        if (event.data?.currentTime != null) {
          this.currentTime.set(event.data.currentTime);
        }
        break;
      case 'ready':
      case 'decode':
        if (event.data?.duration != null) {
          this.duration.set(event.data.duration);
        }
        break;
    }
  }

  private formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
