import { AXPanViewDirective } from '@acorex/cdk/pan-view';
import { AXButtonComponent } from '@acorex/components/button';
import { Component, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-zoom-controls',
  standalone: true,
  imports: [AXPanViewDirective, AXButtonComponent],
  templateUrl: './zoom-controls.component.html',
})
export class ZoomControlsComponent {
  currentZoom = signal(100);

  onZoomChange(zoom: number) {
    this.currentZoom.set(zoom);
  }
}
