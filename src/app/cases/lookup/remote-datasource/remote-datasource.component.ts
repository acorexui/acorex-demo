import { AXDataSource } from '@acorex/cdk/common';
import { Component, signal } from '@angular/core';
import { AXLookupComponent } from '@acorex/components/lookup';
import { createDemoEmployees } from '../lookup-sample-data';

@Component({
  templateUrl: 'remote-datasource.component.html',
  imports: [AXLookupComponent],
})
export class RemoteDatasourceComponent {
  /**
   * Initial value is resolved through byKey so the label shows
   * before any page is loaded.
   */
  value = signal<unknown | null>(3);

  readonly #employees = createDemoEmployees(200);

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
        }, 300);
      });
    },
    byKey: (key) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const item = this.#employees.find((employee) => employee.id == key);
          if (!item) {
            reject(new Error(`Employee not found: ${String(key)}`));
            return;
          }
          resolve(item);
        }, 400);
      });
    },
  });
}
