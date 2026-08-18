import { AXDataSource } from '@acorex/cdk/common';
import { AXLookupComponent, AXLookupItem } from '@acorex/components/lookup';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  templateUrl: 'value-items.component.html',
  imports: [AXLookupComponent],
})
export class ValueItemsComponent {
  readonly #http = inject(HttpClient);
  readonly #usersApi = 'https://jsonplaceholder.typicode.com/users';

  /**
   * Initial id matches `valueItems`, so the trigger shows "Ervin Howell"
   * without calling GET /users/2 (byKey).
   */
  value = signal<unknown | null>(2);

  /**
   * Full item already known to the parent (e.g. loaded with an edit form).
   * Seeds Lookup's cache so byKey is skipped for this key.
   */
  valueItems = signal<AXLookupItem[]>([{ id: 2, name: 'Ervin Howell' }]);

  /**
   * Same remote shape as API Search — byKey still runs for keys
   * that are not present in valueItems.
   */
  dataSource = new AXDataSource<Record<string, unknown>>({
    pageSize: 10,
    key: 'id',
    load: async (e) => {
      const users = await firstValueFrom(
        this.#http.get<Record<string, unknown>[]>(this.#usersApi)
      );
      const query =
        e.filter?.value != null
          ? String(e.filter.value).trim().toLowerCase()
          : '';
      const filtered = query
        ? users.filter((user) =>
            String(user['name'] ?? '')
              .toLowerCase()
              .includes(query)
          )
        : users;

      return {
        items: filtered.slice(e.skip, e.skip + e.take),
        total: filtered.length,
      };
    },
    byKey: async (key) => {
      return firstValueFrom(
        this.#http.get<Record<string, unknown>>(`${this.#usersApi}/${key}`)
      );
    },
  });
}
