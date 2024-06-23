import { Component } from '@angular/core';

import { AXColorBoxModule } from '@acorex/components/color-box';

@Component({
    standalone: true,
    templateUrl: 'read-only.component.html',
    imports: [AXColorBoxModule],
})
export class ReadOnlyComponent {}
