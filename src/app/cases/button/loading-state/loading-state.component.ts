import { AXButtonModule } from '@acorex/components/button';
import { AXLoadingModule } from '@acorex/components/loading';
import { Component } from '@angular/core';

@Component({
  templateUrl: './loading-state.component.html',
  standalone: true,
  imports: [AXButtonModule, AXLoadingModule],
})
export class LoadingStateComponent {}
