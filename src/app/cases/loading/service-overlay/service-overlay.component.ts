import { AXButtonComponent } from '@acorex/components/button';
import { AXLoadingService } from '@acorex/components/loading';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';

@Component({
  templateUrl: 'service-overlay.component.html',
  imports: [AXButtonComponent],
})
export class ServiceOverlayComponent {
  private _loading = inject(AXLoadingService);

  @ViewChild('host') host!: ElementRef<HTMLDivElement>;

  showOnScreen() {
    const id = this._loading.show();
    setTimeout(() => this._loading.hide(id), 1500);
  }

  showInContainer() {
    const id = this._loading.show({ location: this.host.nativeElement });
    setTimeout(() => this._loading.hide(id), 1500);
  }
}
