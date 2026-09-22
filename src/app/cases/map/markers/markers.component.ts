import { AXMapComponent, AXMapMarker } from '@acorex/components/map';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-markers-demo',
  templateUrl: './markers.component.html',
  imports: [AXMapComponent],
})
export class MarkersDemoComponent {
  markers = signal<AXMapMarker[]>([
    {
      id: 'tehran',
      latitude: 35.6892,
      longitude: 51.389,
      popup: 'Tehran Marker',
      title: 'Tehran',
      iconKey: `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#dc2626" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>`,
    },
    {
      id: 'isfahan',
      latitude: 32.6546,
      longitude: 51.668,
      popup: 'Isfahan Marker',
      title: 'Isfahan',
    },
    {
      id: 'shiraz',
      latitude: 29.5918,
      longitude: 52.5837,
      popup: 'Shiraz Marker',
      title: 'Shiraz',
      isLocked: true,
    },
  ]);

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
