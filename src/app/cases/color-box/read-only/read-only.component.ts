import { Component } from '@angular/core';

import { AXColorBoxModule } from '@acorex/components/color-box';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl: 'read-only.component.html',
    imports: [AXColorBoxModule, FormsModule]
})
export class ReadOnlyComponent {}
