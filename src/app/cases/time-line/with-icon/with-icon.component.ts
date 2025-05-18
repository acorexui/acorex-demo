import { AXDirection } from '@acorex/cdk/common';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';
import { AXTimeLineModule } from '@acorex/components/time-line';

@Component({
  templateUrl: './with-icon.component.html',
  imports: [AXDecoratorModule, AXTimeLineModule],
})
export class WithIconComponent {
  protected options = signal({
    disabled: false,
    readonly: false,
    color: 'primary',
    direction: 'horizontal' as AXDirection,
    value: 0,
  });
}
