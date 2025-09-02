import {
  AXColorPaletteComponent,
  AXColorPaletteInputComponent,
  AXColorPalettePickerComponent,
  AXColorPalettePreviewComponent,
  AXColorPaletteSwatchesComponent,
} from '@acorex/components/color-palette';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'full-options.component.html',
  imports: [
    FormsModule,
    AXColorPaletteComponent,
    AXColorPaletteInputComponent,
    AXColorPalettePickerComponent,
    AXColorPalettePreviewComponent,
    AXColorPaletteSwatchesComponent,
  ],
})
export class FullOptionsComponent {}
