import { Component } from '@angular/core';

import { AXLoadingModule } from '@acorex/components/loading';

@Component({
    standalone: true,
    templateUrl: 'spinner-color.component.html',
    imports: [AXLoadingModule],
})
export class SpinnerColorComponent {}
