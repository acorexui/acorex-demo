import { Component } from '@angular/core';

import { AXColorPaletteModule } from '@acorex/components/color-palette';

@Component({
    standalone: true,
    templateUrl: 'usage.component.html',
    imports: [AXColorPaletteModule],
})
export class UsageComponent {}
