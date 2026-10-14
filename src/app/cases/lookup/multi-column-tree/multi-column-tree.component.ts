import { Component, signal } from '@angular/core';
import { AXLookupColumn, AXLookupComponent } from '@acorex/components/lookup';
import {
  AXDecoratorClearButtonComponent,
  AXDecoratorModule,
} from '@acorex/components/decorators';
import { AXTreeViewNode } from '@acorex/components/tree-view';
import { DEMO_COUNTRIES } from '../lookup-sample-data';

@Component({
  templateUrl: 'multi-column-tree.component.html',
  imports: [
    AXLookupComponent,
    AXDecoratorClearButtonComponent,
    AXDecoratorModule,
  ],
})
export class MultiColumnTreeComponent {
  protected readonly nestedValue = signal<unknown | null>(null);
  protected readonly lazyValue = signal<unknown | null>(null);

  protected readonly columns: AXLookupColumn[] = [
    { field: 'title', title: 'Name', width: 'auto', expandHandler: true },
    { field: 'code', title: 'Code', width: '96px' },
    { field: 'kind', title: 'Type', width: '100px' },
  ];

  /** Nested `children` arrays — expand a row to show states. */
  protected readonly nestedTree: AXTreeViewNode[] = DEMO_COUNTRIES.map(
    (country) => ({
      id: country.id,
      title: country.name,
      code: country.id,
      kind: 'Country',
      children: country.states.map((state) => ({
        id: state.id,
        title: state.name,
        code: state.id,
        kind: 'State',
      })),
    }),
  );

  /**
   * Lazy `treeDataSource` callback — roots first, children loaded on expand.
   */
  protected readonly lazyTree = (id?: string): Promise<AXTreeViewNode[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!id) {
          resolve(
            DEMO_COUNTRIES.map((country) => ({
              id: country.id,
              title: country.name,
              code: country.id,
              kind: 'Country',
              childrenCount: country.states.length,
            })),
          );
          return;
        }

        const country = DEMO_COUNTRIES.find((c) => c.id === id);
        resolve(
          (country?.states ?? []).map((state) => ({
            id: state.id,
            title: state.name,
            code: state.id,
            kind: 'State',
          })),
        );
      }, 300);
    });
  };
}
