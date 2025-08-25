import {
  AXColorPaletteInputComponent,
  AXColorPalettePickerComponent,
  AXColorPalleteComponent,
} from '@acorex/components/color-palette';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    FormsModule,
    AXColorPalleteComponent,
    AXColorPaletteInputComponent,
    AXColorPalettePickerComponent,
  ],
})
export class UsageComponent {}
