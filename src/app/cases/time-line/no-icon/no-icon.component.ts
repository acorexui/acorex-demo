import { AXDirection } from '@acorex/components/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';
import { AXTimeLineModule } from '@acorex/components/time-line';

@Component({
  templateUrl: './no-icon.component.html',
  standalone: true,
  imports: [AXDecoratorModule, AXTimeLineModule],
})
export class NoIconComponent {
  protected options = signal({
    disabled: false,
    readonly: false,
    color: 'primary',
    direction: 'horizontal' as AXDirection,
    value: 0,
  });
}
