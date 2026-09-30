import { AXButtonComponent } from '@acorex/components/button';
import { AXMapComponent, AXMapMarker } from '@acorex/components/map';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-disabled-readonly-demo',
  templateUrl: './disabled-readonly.component.html',
  imports: [AXMapComponent, AXButtonComponent],
})
export class DisabledReadonlyDemoComponent {
  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(11);
  disabled = signal(false);
  readonly = signal(false);
  hasDraw = signal(true);
  hasLocator = signal(true);

  markers = signal<AXMapMarker[]>([
    {
      latitude: 35.6892,
      longitude: 51.389,
      title: 'Tehran',
      popup: 'Toggle readonly or disabled to change map interaction',
    },
  ]);

  toggleDisabled() {
    this.disabled.update((value) => !value);
    if (this.disabled()) {
      this.readonly.set(false);
    }
  }

  toggleReadonly() {
    this.readonly.update((value) => !value);
    if (this.readonly()) {
      this.disabled.set(false);
    }
  }
}
