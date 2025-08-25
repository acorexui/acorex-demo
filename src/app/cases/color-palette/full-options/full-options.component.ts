import {
  AXColorPaletteInputComponent,
  AXColorPalettePickerComponent,
  AXColorPalettePreviewComponent,
  AXColorPaletteSwatchesComponent,
  AXColorPalleteComponent,
} from '@acorex/components/color-palette';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'full-options.component.html',
  imports: [
    FormsModule,
    AXColorPalleteComponent,
    AXColorPaletteInputComponent,
    AXColorPalettePickerComponent,
    AXColorPalettePreviewComponent,
    AXColorPaletteSwatchesComponent,
  ],
})
export class FullOptionsComponent {}
