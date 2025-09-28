import { Component, signal } from '@angular/core';
import { AXMapModule } from '@acorex/components/map';
import { AXMapPolygon } from '@acorex/components/map';

@Component({
  selector: 'app-polygons-demo',
  templateUrl: './polygons.component.html',
  imports: [AXMapModule],
  standalone: true,
})
export class PolygonsDemoComponent {
  // Polygon inputs demonstration
  polygons = signal<AXMapPolygon[]>([
    {
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

  // Map configuration inputs
  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(6);
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
