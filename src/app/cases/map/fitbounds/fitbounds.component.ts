import { Component, signal } from '@angular/core';
import { AXMapModule } from '@acorex/components/map';
import { AXMapMarker, AXMapPolygon } from '@acorex/components/map';

@Component({
  selector: 'app-fitbounds-demo',
  templateUrl: './fitbounds.component.html',
  imports: [AXMapModule],
  standalone: true,
})
export class FitBoundsDemoComponent {
  // FitBounds inputs demonstration
  markers = signal<AXMapMarker[]>([
    {
      latitude: 35.6892,
      longitude: 51.389,
      popup: 'Tehran Marker',
      title: 'Tehran',
    },
    {
      latitude: 32.6546,
      longitude: 51.668,
      popup: 'Isfahan Marker',
      title: 'Isfahan',
    },
    {
      latitude: 29.5918,
      longitude: 52.5837,
      popup: 'Shiraz Marker',
      title: 'Shiraz',
    },
  ]);

  polygons = signal<AXMapPolygon[]>([
    {
      points: [
        { latitude: 35.6, longitude: 51.3 },
        { latitude: 35.6, longitude: 51.5 },
        { latitude: 35.8, longitude: 51.5 },
        { latitude: 35.8, longitude: 51.3 },
        { latitude: 35.6, longitude: 51.3 },
      ],
      title: 'Tehran Area',
      color: '#FF0000',
    },
  ]);

  // Map configuration inputs
  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(6);
  fitToDraw = signal(true);
  addPoiToFitDraw = signal(false);

  onMapReady() {
    console.log('Map is ready for fit bounds');
  }
}
