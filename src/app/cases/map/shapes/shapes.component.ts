import {
  AXMapCircle,
  AXMapComponent,
  AXMapPolyline,
  AXMapRectangle,
} from '@acorex/components/map';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-shapes-demo',
  templateUrl: './shapes.component.html',
  imports: [AXMapComponent],
})
export class ShapesDemoComponent {
  polylines = signal<AXMapPolyline[]>([
    {
      id: 'tehran-path',
      points: [
        { latitude: 35.6892, longitude: 51.389 },
        { latitude: 35.7, longitude: 51.42 },
        { latitude: 35.72, longitude: 51.4 },
      ],
      title: 'Tehran path',
      color: '#2563eb',
    },
  ]);

  rectangles = signal<AXMapRectangle[]>([
    {
      id: 'tehran-rect',
      southWest: { latitude: 35.65, longitude: 51.32 },
      northEast: { latitude: 35.74, longitude: 51.45 },
      title: 'Tehran rectangle',
      color: '#16a34a',
    },
  ]);

  circles = signal<AXMapCircle[]>([
    {
      id: 'tehran-circle',
      center: { latitude: 35.6892, longitude: 51.389 },
      radius: 8000,
      title: 'Tehran circle',
      color: '#d97706',
    },
  ]);

  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(11);

  onPolylineClick(polyline: AXMapPolyline) {
    console.log('Polyline clicked:', polyline);
  }

  onRectangleClick(rectangle: AXMapRectangle) {
    console.log('Rectangle clicked:', rectangle);
  }

  onCircleClick(circle: AXMapCircle) {
    console.log('Circle clicked:', circle);
  }
}
