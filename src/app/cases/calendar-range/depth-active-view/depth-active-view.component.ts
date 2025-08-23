import { AXButtonComponent } from '@acorex/components/button';
import { AXCalendarRangeComponent } from '@acorex/components/calendar';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';

type View = 'day' | 'month' | 'year';

@Component({
  templateUrl: './depth-active-view.component.html',
  imports: [AXCalendarRangeComponent, AXButtonComponent, AXLabelComponent],
})
export class DepthActiveViewComponent {
  depth = signal<View>('day');
  setDepth(v: View) {
    this.depth.set(v);
  }
}
