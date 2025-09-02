import {
  AXColorPaletteComponent,
  AXColorPaletteInputComponent,
  AXColorPalettePickerComponent,
} from '@acorex/components/color-palette';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    FormsModule,
    AXColorPaletteComponent,
    AXColorPaletteInputComponent,
    AXColorPalettePickerComponent,
  ],
})
export class UsageComponent {}
