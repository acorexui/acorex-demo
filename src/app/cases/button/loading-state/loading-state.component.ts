import { AXButtonComponent } from '@acorex/components/button';
import { AXLoadingComponent } from '@acorex/components/loading';
import { Component } from '@angular/core';

@Component({
  templateUrl: './loading-state.component.html',
  imports: [AXButtonComponent, AXLoadingComponent],
})
export class LoadingStateComponent {}
