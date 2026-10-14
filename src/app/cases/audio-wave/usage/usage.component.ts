import { AXButtonComponent } from '@acorex/components/button';
import {
  AXAudioWaveChangeEvent,
  AXAudioWaveComponent,
  AXWaveConfig,
} from '@acorex/components/audio-wave';
import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import { Component, signal, viewChild } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXAudioWaveComponent,
    AXButtonComponent,
    AXDecoratorIconComponent,
  ],
})
export class UsageComponent {
  private readonly audioWave = viewChild<AXAudioWaveComponent>('audioWave');

  protected readonly waveConfig = signal<AXWaveConfig>({
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
    height: 64,
    barGap: 2,
    barRadius: 2,
  });

  protected readonly isPlaying = signal(false);

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

  protected onStatusChanged(event: AXAudioWaveChangeEvent): void {
    switch (event.status) {
      case 'play':
        this.isPlaying.set(true);
        break;
      case 'pause':
      case 'finish':
        this.isPlaying.set(false);
        break;
    }
  }
}
