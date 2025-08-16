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
  templateUrl: 'multi-loader-state.component.html',
  imports: [AXButtonComponent, AXLoadingComponent, AsyncPipe],
})
export class MultiLoaderStateComponent {
  loading = inject(AXLoadingService);
  readonly ctx = {};

  save() {
    const stream = of(null).pipe(delay(1200));
    this.loading.doLoading(stream, this.ctx, 'SAVE').subscribe();
  }

  load() {
    const stream = of(null).pipe(delay(1500));
    this.loading.doLoading(stream, this.ctx, 'LOAD').subscribe();
  }
}
