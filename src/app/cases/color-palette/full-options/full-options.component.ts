import { Component } from '@angular/core';

import { AXColorPaletteModule } from '@acorex/components/color-palette';
import { FormsModule } from '@angular/forms';

@Component({
    templateUrl: 'full-options.component.html',
    imports: [AXColorPaletteModule, FormsModule]
})
export class FullOptionsComponent {}
