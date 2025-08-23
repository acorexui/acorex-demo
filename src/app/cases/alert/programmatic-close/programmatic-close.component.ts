import { AXAlertComponent } from '@acorex/components/alert';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'programmatic-close.component.html',
  imports: [
    AXAlertComponent,
    AXButtonComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class ProgrammaticCloseComponent {
  visible = signal(true);

  show() {
    this.visible.set(true);
  }
}
