import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { AXGridLayoutBuilderModule } from '@acorex/components/grid-layout-builder';

@Component({
  selector: 'demo-grid-layout-builder-responsive',
  standalone: true,
  imports: [AXGridLayoutBuilderModule],
  templateUrl: './responsive.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridLayoutBuilderResponsiveComponent {
  containerOptions = signal({
    column: 12,
    gap: 12,
    float: true,
    responsiveLayout: [
      { width: 1200, column: 12 },
      { width: 900, column: 8 },
      { width: 600, column: 4 },
    ],
  });
}


