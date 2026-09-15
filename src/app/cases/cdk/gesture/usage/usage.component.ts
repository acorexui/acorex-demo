import { Component, signal } from '@angular/core';
import { AXGestureDirective, AXGestureEvent } from '@acorex/cdk/gesture';
@Component({
  templateUrl: 'usage.component.html',
  imports: [AXGestureDirective],
})
export class usageComponent {
    lastEvent = signal('Interact with the box below');

    onGesture(event: AXGestureEvent): void {
      const parts = [event.type];
      if (event.deltaX || event.deltaY) {
        parts.push(`delta ${Math.round(event.deltaX)}, ${Math.round(event.deltaY)}`);
      }
      this.lastEvent.set(parts.join(' · '));
    }
}
