import { AXAspectRatioComponent } from '@acorex/components/aspect-ratio';
import { AXLabelComponent } from '@acorex/components/label';
import { AXNumberBoxComponent } from '@acorex/components/number-box';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { DecimalPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './usage.component.html',
  imports: [
    AXLabelComponent,
    AXNumberBoxComponent,
    AXSelectBoxComponent,
    AXAspectRatioComponent,
    DecimalPipe,
    FormsModule,
  ],
})
export class UsageComponent {
  protected currentRatio = signal(16 / 9);
  protected selectedRatio = signal('16:9');

  protected ratioOptions = [
    { value: '1:1', label: 'Square (1:1)', ratio: 1 },
    { value: '4:3', label: 'Standard (4:3)', ratio: 4 / 3 },
    { value: '16:9', label: 'Widescreen (16:9)', ratio: 16 / 9 },
    { value: '21:9', label: 'Ultrawide (21:9)', ratio: 21 / 9 },
    { value: '3:2', label: 'Photo (3:2)', ratio: 3 / 2 },
    { value: '2:1', label: 'Cinema (2:1)', ratio: 2 / 1 },
  ];

  protected customRatio = signal(1.5);

  protected onRatioChange(ratio: number) {
    this.currentRatio.set(ratio);
  }

  protected onCustomRatioChange(value: number) {
    this.customRatio.set(value);
    this.currentRatio.set(value);
  }

  protected onPresetRatioChange(value: string) {
    const option = this.ratioOptions.find((opt) => opt.value === value);
    if (option) {
      this.selectedRatio.set(value);
      this.currentRatio.set(option.ratio);
    }
  }
}
