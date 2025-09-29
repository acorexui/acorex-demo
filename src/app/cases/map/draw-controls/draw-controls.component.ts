import { Component, signal } from '@angular/core';
import { AXMapModule } from '@acorex/components/map';
import { AXMapMarker, AXMapPolygon } from '@acorex/components/map';

@Component({
  selector: 'app-draw-controls-demo',
  templateUrl: './draw-controls.component.html',
  imports: [AXMapModule],
  standalone: true,
})
export class DrawControlsDemoComponent {
  // Draw control inputs demonstration
  hasDraw = signal(true);
  maxMarker = signal(10);
  maxPolygon = signal(5);

  // Map configuration inputs
  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(10);

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
}
