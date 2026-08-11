import { AXDataSource } from '@acorex/cdk/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { AXLookupComponent } from '@acorex/components/lookup';
import { firstValueFrom } from 'rxjs';

@Component({
  templateUrl: 'api-search.component.html',
  imports: [AXLookupComponent],
})
export class ApiSearchComponent {
  readonly #http = inject(HttpClient);
  readonly #usersApi = 'https://jsonplaceholder.typicode.com/users';

  /** Initial user id resolved with GET /users/:id */
  value = signal<unknown | null>(1);

  /**
   * Real HTTP datasource against JSONPlaceholder.
   * Typing in the trigger filters users by name (e.filter).
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
