import { AXButtonComponent } from '@acorex/components/button';
import {
  AXLoadingComponent,
  AXLoadingService,
} from '@acorex/components/loading';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  templateUrl: 'service-doloading.component.html',
  imports: [AXButtonComponent, AsyncPipe],
})
export class ServiceDoloadingComponent {
  loading = inject(AXLoadingService);
  readonly ctx = {};

  fetch() {
    const stream = of(null).pipe(delay(1500));
    this.loading.doLoading(stream, this.ctx).subscribe();
  }
}
