import {
  AXAudioWaveComponent,
  AXWaveConfig,
} from '@acorex/components/audio-wave';
import { AXColorBoxComponent } from '@acorex/components/color-box';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXFormFieldComponent } from '@acorex/components/form';
import { AXLabelComponent } from '@acorex/components/label';
import { AXNumberBoxComponent } from '@acorex/components/number-box';
import { AXTextBoxComponent } from '@acorex/components/text-box';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'configuration.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    AXAudioWaveComponent,
    AXColorBoxComponent,
    AXDecoratorGenericComponent,
    AXFormFieldComponent,
    AXLabelComponent,
    AXNumberBoxComponent,
    AXTextBoxComponent,
  ],
})
export class configurationComponent {
  protected readonly url = signal(
    'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'
  );
  protected readonly height = signal(64);
  protected readonly barWidth = signal(2);
  protected readonly barGap = signal(2);
  protected readonly barRadius = signal(2);
  protected readonly audioRate = signal(1);
  protected readonly waveColor = signal<string | null>('#93c5fd');
  protected readonly progressColor = signal<string | null>('#1d4ed8');

  protected readonly waveConfig = computed<AXWaveConfig>(() => {
    const config: AXWaveConfig = {
      url: this.url(),
      height: this.height(),
      barWidth: this.barWidth(),
      barGap: this.barGap(),
      barRadius: this.barRadius(),
      audioRate: this.audioRate(),
    };

    const waveColor = this.waveColor();
    const progressColor = this.progressColor();

    if (waveColor) {
      config.waveColor = waveColor;
    }

    if (progressColor) {
      config.progressColor = progressColor;
    }

    return config;
  });
}
