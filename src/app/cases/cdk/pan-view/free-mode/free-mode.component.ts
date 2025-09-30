import { AXPanViewDirective } from '@acorex/cdk/pan-view';
import { AXButtonComponent } from '@acorex/components/button';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-free-mode',
  standalone: true,
  imports: [AXPanViewDirective, AXButtonComponent],
  templateUrl: './free-mode.component.html',
})
export class FreeModeComponent {
  freeMode = signal(false);

  toggleFreeMode() {
    this.freeMode.set(!this.freeMode());
  }
}