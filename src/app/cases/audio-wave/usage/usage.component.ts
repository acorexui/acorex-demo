import {
  AXAudioWaveComponent,
  AXWaveConfig,
} from '@acorex/components/audio-wave';
import {  Component, signal } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXAudioWaveComponent],
})
export class UsageComponent {
  protected readonly waveConfig = signal<AXWaveConfig>({
    url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
    height: 64,
    barGap: 2,
    barRadius: 2,
  });
}
