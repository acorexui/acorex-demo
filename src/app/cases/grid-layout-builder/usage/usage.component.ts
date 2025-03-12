import { Component } from '@angular/core';
import {
  AXGridLayoutBuilderModule,
  AXGridLayoutNode,
  AXGridLayoutOptions,
} from '@acorex/components/grid-layout-builder';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXGridLayoutBuilderModule],
})
export class GridLayoutBuilderUsageComponent {
  public gridOptions: AXGridLayoutOptions = {
    column: 6,
    cellHeight: 50,
    gap: 5,
    minRow: 1,
    removableSelector: '.grid-stack-trash',
    acceptWidgets: true,
    float: true,
    // rtl: true,
    //columnOpts: { breakpoints: [{ w: 768, c: 1 }] },
  };

  public widgetOption1: AXGridLayoutNode = {
    h: 2,
    w: 2,
    x: 0,
    y: 0,
  };
  public widgetOption2: AXGridLayoutNode = {
    h: 2,
    w: 2,
    x: 5,
    y: 0,
  };
}
