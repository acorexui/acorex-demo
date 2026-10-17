import { Component } from '@angular/core';
import { AXDataSource } from '@acorex/cdk/common';
import { AXDataTableModule } from '@acorex/components/data-table';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXButtonComponent } from '@acorex/components/button';

@Component({
  templateUrl: './empty-template.component.html',
  imports: [AXDataTableModule, AXDecoratorModule, AXButtonComponent],
  styles: `
    @reference '@acorex/styles/themes/default.css';

    /* Sticky header can cover the single empty virtual row — off for this demo. */
    .empty-template-table::ng-deep tbody td {
      vertical-align: middle;
    }
  `,
})
export class EmptyTemplateComponent {
  protected emptyTableDataSource = new AXDataSource<unknown>({
    pageSize: 20,
    key: 'id',
    load: () => Promise.resolve({ items: [], total: 0 }),
  });

  protected refreshEmptyTable(): void {
    this.emptyTableDataSource.refresh();
  }
}
