import {
  AXColorPaletteComponent,
  AXColorPaletteSwatchesComponent,
} from '@acorex/components/color-palette';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'swatches.component.html',
  imports: [AXColorPaletteComponent, AXColorPaletteSwatchesComponent],
})
export class SwatchesComponent {}
