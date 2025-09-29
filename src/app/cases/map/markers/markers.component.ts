import { Component, signal } from '@angular/core';
import { AXMapModule } from '@acorex/components/map';
import { AXMapMarker } from '@acorex/components/map';

@Component({
  selector: 'app-markers-demo',
  templateUrl: './markers.component.html',
  imports: [AXMapModule],
  standalone: true,
})
export class MarkersDemoComponent {
  // Marker inputs demonstration
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

  // Map configuration inputs
  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(6);
  maxMarker = signal(10);
  addMarkerOnTap = signal(true);

  onMarkerAdded(marker: AXMapMarker) {
    console.log('Marker added:', marker);
  }

  onMarkerClick(marker: AXMapMarker) {
    console.log('Marker clicked:', marker);
  }

  onMarkerChanged(markers: AXMapMarker[]) {
    console.log('Markers changed:', markers);
  }
}
