import { Component } from '@angular/core';

import { AXLoadingModule } from '@acorex/components/loading';

@Component({
    standalone: true,
    templateUrl: 'loading-spinner.component.html',
    imports: [AXLoadingModule],
})
export class LoadingSpinnerComponent {}
