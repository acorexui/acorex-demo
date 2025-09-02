import {
  AXColorPaletteComponent,
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
  ],
})
export class PreviewComponent {}
