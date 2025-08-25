import {
  AXColorPaletteSwatchesComponent,
  AXColorPalleteComponent,
} from '@acorex/components/color-palette';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'swatches.component.html',
  imports: [AXColorPalleteComponent, AXColorPaletteSwatchesComponent],
})
export class SwatchesComponent {}
