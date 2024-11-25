import { Component } from '@angular/core';
import { AXDataTableModule } from '@acorex/components/data-table';
import { AXDataSource } from '@acorex/components/common';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXDataTableModule],
})
export class UsageComponent {
  protected result = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    firstName: `first name ${i}`,
    lastName: `last name ${i}`,
    email: `email-${i}@gmail.com`,
    mobile: `+98233765${i}`,
    country: 'USA',
    city: 'LA',
    price: (i + 10) * 1000,
    street: `No.${i + 1}`,
    status: i % 2 == 0 ? 'Active' : 'Deactive',
  }));

  protected dataSource = new AXDataSource<any>({
    pageSize: 20,
    key: 'id',
    load: (e) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            items: this.result.slice(e.skip, (e.skip ?? 0) + (e.take ?? 0)),
            total: this.result.length,
          });
        }, 1000);
      });
    },
    byKey: (key) => {
      return Promise.resolve(this.result.find((c) => c.id == key));
    },
  });

  handleSelectionChange(e: any) {
    console.log(e);
  }
}
