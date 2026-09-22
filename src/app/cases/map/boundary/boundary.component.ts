import { AXMapComponent, AXMapPolygon } from '@acorex/components/map';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-boundary-demo',
  templateUrl: './boundary.component.html',
  imports: [AXMapComponent],
})
export class BoundaryDemoComponent {
  limitDraw = signal<AXMapPolygon[]>([
    {
      points: [
        { latitude: 35.6, longitude: 51.3 },
        { latitude: 35.6, longitude: 51.5 },
        { latitude: 35.8, longitude: 51.5 },
        { latitude: 35.8, longitude: 51.3 },
        { latitude: 35.6, longitude: 51.3 },
      ],
      title: 'Drawing Boundary',
      color: '#FF0000',
    },
  ]);

  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(10);
  hasDraw = signal(true);
  maxMarker = signal(10);
  maxPolygon = signal(5);

  onPolygonAdded(polygon: AXMapPolygon) {
    console.log('Polygon added within boundary:', polygon);
  }

  onPolygonChanged(polygons: AXMapPolygon[]) {
    console.log('Polygons changed:', polygons);
  }
}
