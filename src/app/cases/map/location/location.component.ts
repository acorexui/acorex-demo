import { Component, signal } from '@angular/core';
import { AXMapControlPlace, AXMapModule } from '@acorex/components/map';
import { AXMapMarker } from '@acorex/components/map';

@Component({
  selector: 'app-location-demo',
  templateUrl: './location.component.html',
  imports: [AXMapModule],
  standalone: true,
})
export class LocationDemoComponent {
  // Location inputs demonstration
  hasLocator = signal(true);
  locatePlace = signal<AXMapControlPlace>('bottomright');

  // Map configuration inputs
  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(10);

  onLocationFound(location: AXMapMarker) {
    console.log('Location found:', location);
  }

  onMapReady() {
    console.log('Map is ready');
  }

  onLoadError(error: Error) {
    console.error('Map load error:', error);
  }
}
