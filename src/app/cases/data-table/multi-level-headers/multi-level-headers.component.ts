import { AXDataSource } from '@acorex/cdk/common';
import { AXDataTableModule } from '@acorex/components/data-table';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'multi-level-headers.component.html',
  imports: [AXDataTableModule, AXDecoratorModule],
})
export class MultiLevelHeadersComponent {
  protected readonly rows = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    firstName: `First ${i}`,
    lastName: `Last ${i}`,
    email: `user-${i}@example.com`,
    mobile: `+1 555 01${String(i).padStart(2, '0')}`,
    city: i % 2 === 0 ? 'Los Angeles' : 'New York',
    country: 'USA',
  }));

  protected readonly dataSource = new AXDataSource({
    pageSize: 10,
    key: 'id',
    load: (e) => {
      const skip = e.skip ?? 0;
      const take = e.take ?? 10;
      return Promise.resolve({
        items: this.rows.slice(skip, skip + take),
        total: this.rows.length,
      });
    },
    byKey: (key) =>
      Promise.resolve(this.rows.find((row) => row.id === key)),
  });
}
