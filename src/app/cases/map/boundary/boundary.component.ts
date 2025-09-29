import { Component, signal } from '@angular/core';
import { AXMapModule } from '@acorex/components/map';
import { AXMapPolygon } from '@acorex/components/map';

@Component({
  selector: 'app-boundary-demo',
  templateUrl: './boundary.component.html',
  imports: [AXMapModule],
  standalone: true,
})
export class BoundaryDemoComponent {
  // Boundary inputs demonstration
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

  // Map configuration inputs
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
