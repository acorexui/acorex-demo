import { Component } from '@angular/core';

import { AXColorPaletteModule } from '@acorex/components/color-palette';

@Component({
  standalone: true,
  templateUrl: 'inputs.component.html',
  imports: [AXColorPaletteModule],
})
export class InputsComponent {}
