import { AXDataSource } from '@acorex/cdk/common';
import { Component, signal } from '@angular/core';
import { AXLookupComponent } from '@acorex/components/lookup';

@Component({
  templateUrl: 'virtual-scroll.component.html',
  imports: [AXLookupComponent],
})
export class VirtualScrollComponent {
  value = signal<unknown | null>(null);

  readonly #items = Array.from({ length: 10000 }, (_, i) => ({
    id: i + 1,
    text: `Item #${i + 1}`,
  }));

  /**
   * Pages through 10,000 items (20 per page) with a short delay
   * so you can see virtual scroll loading as you scroll.
   */
  dataSource = new AXDataSource<Record<string, unknown>>({
    pageSize: 20,
    key: 'id',
    load: (e) => {
      return new Promise((resolve) => {
        setTimeout(
          () => {
            const query =
              e.filter?.value != null
                ? String(e.filter.value).toUpperCase()
                : '';
            const filtered = query
              ? this.#items.filter((item) =>
                  item.text.toUpperCase().includes(query)
                )
              : this.#items;

            resolve({
              items: filtered.slice(e.skip, e.skip + e.take),
              total: filtered.length,
            });
          },
          e.skip === 0 ? 100 : 350
        );
      });
    },
    byKey: (key) => this.#items.find((item) => item.id == key),
  });
}
