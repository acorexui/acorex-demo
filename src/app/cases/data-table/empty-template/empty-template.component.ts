import { Component } from '@angular/core';
import { AXDataSource } from '@acorex/cdk/common';
import { AXDataTableModule } from '@acorex/components/data-table';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  templateUrl: './empty-template.component.html',
  imports: [AXDataTableModule, AXDecoratorModule],
  styles: `
    @reference '@acorex/styles/themes/default.css';

    /* Sticky header can cover the single empty virtual row — off for this demo. */
    .empty-template-table::ng-deep tbody td {
      vertical-align: middle;
    }
  `,
})
export class EmptyTemplateComponent {
  protected _options = {
    itemHeight: 40,
    showHeader: true,
    fixedHeader: false,
    loading: {
      enabled: false,
      animation: false,
    },
  };

  protected dataSourceForEmpty = new AXDataSource<unknown>({
    pageSize: 10,
    key: 'id',
    load: () =>
      Promise.resolve({
        items: [],
        total: 0,
      }),
    byKey: () => Promise.resolve(null),
  });
}
