import { Component } from '@angular/core';

import { AXColorPaletteModule } from '@acorex/components/color-palette';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: 'inputs.component.html',
  imports: [AXColorPaletteModule, FormsModule],
})
export class InputsComponent {}
