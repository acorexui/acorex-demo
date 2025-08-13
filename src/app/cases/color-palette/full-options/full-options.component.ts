import { AXColorPaletteModule } from '@acorex/components/color-palette';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'full-options.component.html',
  imports: [FormsModule, AXColorPaletteModule],
})
export class FullOptionsComponent {}
