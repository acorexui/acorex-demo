import {
  AXColorPaletteComponent,
  AXColorPaletteInputComponent,
  AXColorPalettePreviewComponent,
} from '@acorex/components/color-palette';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'inputs.component.html',
  imports: [
    FormsModule,
    AXColorPaletteComponent,
    AXColorPaletteInputComponent,
    AXColorPalettePreviewComponent,
  ],
})
export class InputsComponent {}
