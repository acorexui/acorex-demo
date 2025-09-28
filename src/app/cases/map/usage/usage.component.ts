import { Component, signal } from '@angular/core';
import { AXMapModule } from '@acorex/components/map';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXMapModule],
  standalone: true,
})
export class UsageComponent {
  // Basic map configuration
  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(10);
}
