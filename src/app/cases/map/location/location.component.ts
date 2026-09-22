import {
  AXMapComponent,
  AXMapControlPlace,
  AXMapLocation,
} from '@acorex/components/map';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-location-demo',
  templateUrl: './location.component.html',
  imports: [AXMapComponent],
})
export class LocationDemoComponent {
  hasLocator = signal(true);
  locatePlace = signal<AXMapControlPlace>('bottomright');

  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(10);

  onLocationFound(location: AXMapLocation) {
    console.log('Location found:', location);
  }

  onMapReady() {
    console.log('Map is ready');
  }

  onLoadError(error: Error) {
    console.error('Map load error:', error);
  }
}
