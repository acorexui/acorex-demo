import { AXDirection } from '@acorex/components/common';
import { AXSliderModule } from '@acorex/components/slider';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [AXSliderModule, FormsModule],
})
export class UsageComponent {
  protected options = signal({
    disabled: false,
    readonly: false,
    color: 'primary',
    direction: 'horizontal' as AXDirection,
    value: 0,
  });
}
