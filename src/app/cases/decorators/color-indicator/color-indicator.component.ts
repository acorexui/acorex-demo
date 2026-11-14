import { AXButtonModule } from '@acorex/components/button';
import {
  AXColorPaletteComponent,
  AXColorPaletteInputComponent,
  AXColorPalettePickerComponent,
  AXColorPaletteSwatchesComponent,
} from '@acorex/components/color-palette';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXPopoverModule } from '@acorex/components/popover';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './color-indicator.component.html',
  imports: [
    FormsModule,
    AXDecoratorModule,
    AXButtonModule,
    AXPopoverModule,
    AXColorPaletteComponent,
    AXColorPalettePickerComponent,
    AXColorPaletteSwatchesComponent,
    AXColorPaletteInputComponent,
  ],
})
export class ColorIndicatorComponent {
  readonly color = signal('#dfdf18');
}
