import { AXButtonComponent } from '@acorex/components/button';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import {
  AXRailLocation,
  AXRailNavigationComponent,
  AXRailNavigationItemComponent,
  AXRailNavigationService,
} from '@acorex/components/rail-navigation';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './locations.component.html',
  providers: [AXRailNavigationService],
  imports: [
    AXButtonComponent,
    AXDecoratorIconComponent,
    AXRailNavigationComponent,
    AXDecoratorGenericComponent,
    AXRailNavigationItemComponent,
  ],
})
export class LocationsComponent {
  protected currentLocation = signal<AXRailLocation>('start');
  protected locations: AXRailLocation[] = ['start', 'end'];

  protected onLocationChange(location: AXRailLocation) {
    this.currentLocation.set(location);
  }
}
