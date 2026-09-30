import { AXMapComponent, AXMapMarker } from '@acorex/components/map';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-popup-demo',
  templateUrl: './popup.component.html',
  imports: [AXMapComponent],
})
export class PopupDemoComponent {
  markers = signal<AXMapMarker[]>([
    {
      latitude: 35.6892,
      longitude: 51.389,
      popup: 'Tehran - Capital of Iran',
      title: 'Tehran',
      popupOpen: true,
      popupCloseButton: true,
    },
    {
      latitude: 32.6546,
      longitude: 51.668,
      popup: 'Isfahan - Historical City',
      title: 'Isfahan',
      popupOpen: false,
      popupCloseButton: true,
    },
  ]);

  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(6);
  addMarkerOnTap = signal(true);

  onMarkerClick(marker: AXMapMarker) {
    console.log('Marker clicked:', marker);
  }

  onMarkerAdded(marker: AXMapMarker) {
    console.log('Marker added:', marker);
  }
}
