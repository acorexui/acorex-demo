import { AXAlertComponent } from '@acorex/components/alert';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'events.component.html',
  imports: [
    AXAlertComponent,
    AXButtonComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class EventsComponent {
  color = signal<
    'default' | 'primary' | 'success' | 'warning' | 'danger' | 'secondary'
  >('default');

  toggleColor() {
    this.color.update((c) => (c === 'primary' ? 'success' : 'primary'));
  }

  log(evt: any) {
    console.log('[Alert][events]', evt);
  }
}
