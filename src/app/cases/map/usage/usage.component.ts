import { AXMapComponent } from '@acorex/components/map';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXMapComponent],
})
export class UsageComponent {
  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(10);
}
