import {
  AXColorPalleteComponent,
  AXColorPalettePickerComponent,
  AXColorPaletteInputComponent,
} from '@acorex/components/color-palette';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXColorPalleteComponent,
    FormsModule,
    AXColorPalettePickerComponent,
    AXColorPaletteInputComponent,
  ],
})
export class UsageComponent {}
