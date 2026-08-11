import { AXDataSource } from '@acorex/cdk/common';
import { Component, signal } from '@angular/core';
import {
  AXLookupColumn,
  AXLookupComponent,
} from '@acorex/components/lookup';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { createDemoEmployees } from '../lookup-sample-data';

@Component({
  templateUrl: 'multi-column.component.html',
  imports: [AXLookupComponent, AXDecoratorClearButtonComponent],
})
export class MultiColumnComponent {
  value = signal<unknown | null>(null);

  readonly #employees = createDemoEmployees(200);

  /** Remote-style datasource with paging and name filter. */
  dataSource = new AXDataSource<Record<string, unknown>>({
    pageSize: 15,
    key: 'id',
    load: (e) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const query =
            e.filter?.value != null
              ? String(e.filter.value).toUpperCase()
              : '';
          const filtered = query
            ? this.#employees.filter((item) =>
                item.name.toUpperCase().includes(query)
              )
            : this.#employees;

          resolve({
            items: filtered.slice(e.skip, e.skip + e.take),
            total: filtered.length,
          });
        }, 250);
      });
    },
    byKey: (key) => {
      const item = this.#employees.find((employee) => employee.id == key);
      if (!item) {
        throw new Error(`Employee not found: ${String(key)}`);
      }
      return Promise.resolve(item);
    },
  });

  /** Columns rendered as an ax-data-table inside the popup. */
  columns: AXLookupColumn[] = [
    { field: 'name', title: 'Name', width: 'auto' },
    { field: 'role', title: 'Role', width: '110px' },
    { field: 'email', title: 'Email', width: '180px' },
  ];
}
