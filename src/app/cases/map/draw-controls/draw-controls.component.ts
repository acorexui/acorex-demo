import {
  AXMapCircle,
  AXMapComponent,
  AXMapControlPlace,
  AXMapMarker,
  AXMapPolygon,
  AXMapPolyline,
  AXMapRectangle,
} from '@acorex/components/map';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-draw-controls-demo',
  templateUrl: './draw-controls.component.html',
  imports: [AXMapComponent],
})
export class DrawControlsDemoComponent {
  hasDraw = signal(true);
  markerPlace = signal<AXMapControlPlace>('topleft');
  maxMarker = signal(10);
  maxPolygon = signal(5);
  maxPolyline = signal(5);
  maxRectangle = signal(5);
  maxCircle = signal(5);

  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(10);

  markers = signal<AXMapMarker[]>([
    {
      id: 'locked-tehran',
      latitude: 35.6892,
      longitude: 51.389,
      title: 'Locked marker',
      popup: 'This marker is locked',
      isLocked: true,
    },
  ]);

  onMarkerAdded(marker: AXMapMarker) {
    console.log('Marker added:', marker);
  }

  onMarkerChanged(markers: AXMapMarker[]) {
    console.log('Markers changed:', markers);
  }

  onPolygonAdded(polygon: AXMapPolygon) {
    console.log('Polygon added:', polygon);
  }

  onPolygonChanged(polygons: AXMapPolygon[]) {
    console.log('Polygons changed:', polygons);
  }

  onPolylineAdded(polyline: AXMapPolyline) {
    console.log('Polyline added:', polyline);
  }

  onPolylineChanged(polylines: AXMapPolyline[]) {
    console.log('Polylines changed:', polylines);
  }

  onRectangleAdded(rectangle: AXMapRectangle) {
    console.log('Rectangle added:', rectangle);
  }

  onRectangleChanged(rectangles: AXMapRectangle[]) {
    console.log('Rectangles changed:', rectangles);
  }

  onCircleAdded(circle: AXMapCircle) {
    console.log('Circle added:', circle);
  }

  onCircleChanged(circles: AXMapCircle[]) {
    console.log('Circles changed:', circles);
  }
}
