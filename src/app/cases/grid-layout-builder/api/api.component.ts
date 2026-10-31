import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import {
  AXGridLayoutBuilderModule,
  AXGridLayoutContainerComponent,
} from '@acorex/components/grid-layout-builder';
import { AXButtonComponent } from '@acorex/components/button';
import { AXSelectBoxComponent } from '@acorex/components/select-box';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'demo-grid-layout-builder-api',
  standalone: true,
  imports: [
    AXGridLayoutBuilderModule,
    AXButtonComponent,
    AXSelectBoxComponent,
    FormsModule,
  ],
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

  protected readonly columns = signal(12);

  protected readonly columnOptions = [
    { value: 4, text: '4 columns' },
    { value: 8, text: '8 columns' },
    { value: 12, text: '12 columns' },
  ];

  protected readonly columnDataSource = computed(() => this.columnOptions);

  protected readonly cellHeight = signal(80);

  protected readonly cellHeightOptions = [
    { value: 80, text: '80px' },
    { value: 120, text: '120px' },
    { value: 0, text: '0 (default)' },
  ];

  protected readonly cellHeightDataSource = computed(
    () => this.cellHeightOptions,
  );

  addWidget() {
    const size = { width: 2, height: 2 } as const;
    const pos = this.grid.findEmptySpace(size);
    const id = `w${this.nextId()}`;
    this.grid.addWidget(
      { x: pos.x, y: pos.y, width: size.width, height: size.height, id },
      true,
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
    this.grid.setCellHeight(px);
  }

  clearAll() {
    this.grid.removeAll(true);
  }
}
