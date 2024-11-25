import { AXButtonModule } from '@acorex/components/button';
import { AXLoadingModule } from '@acorex/components/loading';
import { Component } from '@angular/core';

@Component({
    templateUrl: './loading-state.component.html',
    imports: [AXButtonModule, AXLoadingModule]
})
export class LoadingStateComponent {}
