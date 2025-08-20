import { AXAvatarComponent } from '@acorex/components/avatar';
import { AXBadgeComponent } from '@acorex/components/badge';
import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXImageComponent } from '@acorex/components/image';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'badge.component.html',
  imports: [
    AXBadgeComponent,
    AXImageComponent,
    AXAvatarComponent,
    AXButtonComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class BadgeComponent {
  status = signal<'online' | 'offline' | 'busy'>('online');
  cycle() {
    const order: Array<'online' | 'offline' | 'busy'> = [
      'online',
      'offline',
      'busy',
    ];
    const i = order.indexOf(this.status());
    this.status.set(order[(i + 1) % order.length]);
  }
}
