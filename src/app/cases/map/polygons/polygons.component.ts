import { AXMapComponent, AXMapPolygon } from '@acorex/components/map';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-polygons-demo',
  templateUrl: './polygons.component.html',
  imports: [AXMapComponent],
})
export class PolygonsDemoComponent {
  polygons = signal<AXMapPolygon[]>([
    {
      id: 'square',
      points: [
        { latitude: 35.6, longitude: 51.3 },
        { latitude: 35.6, longitude: 51.5 },
        { latitude: 35.8, longitude: 51.5 },
        { latitude: 35.8, longitude: 51.3 },
        { latitude: 35.6, longitude: 51.3 },
      ],
      title: 'Square Polygon',
      color: '#FF0000',
    },
    {
      id: 'triangle',
      points: [
        { latitude: 32.6, longitude: 51.6 },
        { latitude: 32.5, longitude: 51.5 },
        { latitude: 32.7, longitude: 51.5 },
        { latitude: 32.6, longitude: 51.6 },
      ],
      title: 'Triangle Polygon',
      color: '#00FF00',
    },
  ]);

  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(6);
  hasDraw = signal(true);
  maxPolygon = signal(5);

  onPolygonAdded(polygon: AXMapPolygon) {
    console.log('Polygon added:', polygon);
  }

  onPolygonClick(polygon: AXMapPolygon) {
    console.log('Polygon clicked:', polygon);
  }

  onPolygonChanged(polygons: AXMapPolygon[]) {
    console.log('Polygons changed:', polygons);
  }
}
