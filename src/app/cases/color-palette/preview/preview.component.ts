import { Component } from '@angular/core';

import { AXColorPaletteModule } from '@acorex/components/color-palette';

@Component({
  standalone: true,
  templateUrl: 'preview.component.html',
  imports: [AXColorPaletteModule],
})
export class PreviewComponent {}
