import {
  AXColorPaletteComponent,
  AXColorPalettePickerComponent,
  AXColorPalettePreviewComponent,
} from '@acorex/components/color-palette';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'preview.component.html',
  imports: [
    FormsModule,
    AXColorPaletteComponent,
    AXColorPalettePreviewComponent,
    AXColorPalettePickerComponent,
  ],
})
export class PreviewComponent {
  /** Bound to the palette so the preview bar reflects the current color. */
  protected color = '#2563eb';
}
