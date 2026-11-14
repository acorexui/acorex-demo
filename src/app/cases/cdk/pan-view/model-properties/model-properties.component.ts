import { AXPanViewDirective } from '@acorex/cdk/pan-view';
import { AXButtonComponent } from '@acorex/components/button';
import { Component, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-model-properties',
  standalone: true,
  imports: [AXPanViewDirective, AXButtonComponent],
  templateUrl: './model-properties.component.html',
})
export class ModelPropertiesComponent {
  private readonly panView = viewChild.required<AXPanViewDirective>('panViewRef');

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
    this.panView().resetPosition();
  }
}
