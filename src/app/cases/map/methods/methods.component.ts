import { AXButtonComponent } from '@acorex/components/button';
import {
  AXMapComponent,
  AXMapData,
  AXMapMarker,
  AXMapPolygon,
} from '@acorex/components/map';
import { Component, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-methods-demo',
  templateUrl: './methods.component.html',
  imports: [AXMapComponent, AXButtonComponent],
})
export class MethodsDemoComponent {
  private readonly map = viewChild<AXMapComponent>('map');

  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(6);
  ready = signal(false);
  lastAction = signal('Waiting for map...');

  markers = signal<AXMapMarker[]>([
    {
      id: 'tehran',
      latitude: 35.6892,
      longitude: 51.389,
      title: 'Tehran',
      popup: 'Tehran',
    },
  ]);

  polygons = signal<AXMapPolygon[]>([
    {
      id: 'tehran-area',
      points: [
        { latitude: 35.6, longitude: 51.3 },
        { latitude: 35.6, longitude: 51.5 },
        { latitude: 35.8, longitude: 51.5 },
        { latitude: 35.8, longitude: 51.3 },
      ],
      title: 'Tehran area',
      color: '#2563eb',
    },
  ]);

  onMapReady() {
    this.ready.set(true);
    this.lastAction.set('Map is ready');
  }

  flyToShiraz() {
    this.map()?.flyTo(
      {
        id: 'shiraz',
        latitude: 29.5918,
        longitude: 52.5837,
        title: 'Shiraz',
      },
      12,
      true
    );
    this.lastAction.set('Flew to Shiraz and dropped a marker');
  }

  addIsfahanMarker() {
    void this.map()?.addMarker(
      {
        id: 'isfahan',
        latitude: 32.6546,
        longitude: 51.668,
        title: 'Isfahan',
        popup: 'Isfahan',
      },
      true
    );
    this.lastAction.set('Added Isfahan marker');
  }

  updateTehranPopup() {
    const updated = this.map()?.updateMarkerPopup(
      { latitude: 35.6892, longitude: 51.389 },
      'Tehran — popup updated from updateMarkerPopup()',
      true
    );
    this.lastAction.set(
      updated ? 'Updated Tehran popup' : 'Could not find Tehran marker'
    );
  }

  fitBounds() {
    this.map()?.fitBoundsToDrawItems();
    this.lastAction.set('Fitted bounds to draw items');
  }

  logDrawItems() {
    const data: AXMapData | undefined = this.map()?.getDrawItem();
    console.log('Draw items:', data);
    this.lastAction.set(
      `Markers: ${data?.markers.length ?? 0}, polygons: ${data?.polygons.length ?? 0}`
    );
  }

  clearItems() {
    this.map()?.clearDrawItems();
    this.lastAction.set('Cleared draw items');
  }
}
