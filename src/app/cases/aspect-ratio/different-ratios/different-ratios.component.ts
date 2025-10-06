import { AXAspectRatioComponent } from '@acorex/components/aspect-ratio';
import { AXLabelComponent } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
  templateUrl: './different-ratios.component.html',
  imports: [AXAspectRatioComponent, AXLabelComponent],
})
export class DifferentRatiosComponent {}
