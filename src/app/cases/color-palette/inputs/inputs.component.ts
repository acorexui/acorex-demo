import {
  AXColorPaletteInputComponent,
  AXColorPalettePreviewComponent,
  AXColorPalleteComponent,
} from '@acorex/components/color-palette';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'inputs.component.html',
  imports: [
    FormsModule,
    AXColorPalleteComponent,
    AXColorPaletteInputComponent,
    AXColorPalettePreviewComponent,
  ],
})
export class InputsComponent {}
