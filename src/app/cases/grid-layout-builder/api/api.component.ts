import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  signal,
} from '@angular/core';
import {
  AXGridLayoutBuilderModule,
  AXGridLayoutContainerComponent,
} from '@acorex/components/grid-layout-builder';
import { AXButtonComponent } from '@acorex/components/button';

@Component({
  selector: 'demo-grid-layout-builder-api',
  standalone: true,
  imports: [AXGridLayoutBuilderModule, AXButtonComponent],
  templateUrl: './api.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridLayoutBuilderApiComponent {
  @ViewChild('grid', { static: true }) grid!: AXGridLayoutContainerComponent;

  containerOptions = signal({
    column: 12,
    gap: 10,
    float: true,
  } as const);

  nextId = signal(1);

  addWidget() {
    const size = { width: 2, height: 2 } as const;
    const pos = this.grid.findEmptySpace(size);
    const id = `w${this.nextId()}`;
    this.grid.addWidget(
      { x: pos.x, y: pos.y, width: size.width, height: size.height, id },
      true
    );
    this.nextId.update((n) => n + 1);
  }

  compact() {
    this.grid.compact('compact', true);
  }

  setCols(cols: number) {
    this.grid.setColumn(cols, 'moveScale');
  }

  setCellHeight(px: number) {
    this.grid.setCellHeight(px, true);
  }

  clearAll() {
    this.grid.removeAll(true);
  }
}
