import { AXPanViewDirective } from '@acorex/cdk/pan-view';
import { AXButtonComponent } from '@acorex/components/button';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-model-properties',
  standalone: true,
  imports: [AXPanViewDirective, AXButtonComponent],
  templateUrl: './model-properties.component.html',
})
export class ModelPropertiesComponent {
  panX = signal(0);
  panY = signal(0);
  zoom = signal(100);

  onPositionChange(position: { x: number; y: number }) {
    this.panX.set(position.x);
    this.panY.set(position.y);
  }

  onZoomChange(zoom: number) {
    this.zoom.set(zoom);
  }

  resetView() {
    this.panX.set(0);
    this.panY.set(0);
    this.zoom.set(100);
  }
}
