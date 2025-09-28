import { Component, signal } from '@angular/core';
import { AXMapModule } from '@acorex/components/map';
import { AXPoiMarker } from '@acorex/components/map';

@Component({
  selector: 'app-poi-demo',
  templateUrl: './poi.component.html',
  imports: [AXMapModule],
  standalone: true,
})
export class PoiDemoComponent {
  // POI inputs demonstration
  pois = signal<AXPoiMarker[]>([
    {
      latitude: 35.6892,
      longitude: 51.389,
      popup: 'Restaurant - Great Food!',
      minZoom: 10,
    },
    {
      latitude: 35.6892 + 0.01,
      longitude: 51.389 + 0.01,
      popup: 'Gas Station - 24/7',
      minZoom: 12,
    },
    {
      latitude: 35.6892 - 0.01,
      longitude: 51.389 - 0.01,
      popup: 'Hospital - Emergency Services',
      minZoom: 8,
    },
  ]);

  // Map configuration inputs
  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(10);
  poiMinZoom = signal(8);

  onPoiAdded(poi: AXPoiMarker) {
    console.log('POI added:', poi);
  }

  onPoiChanged(pois: AXPoiMarker[]) {
    console.log('POIs changed:', pois);
  }

  onMapReady() {
    console.log('Map is ready for POIs');
  }
}
