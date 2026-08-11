import { Component, signal } from '@angular/core';
import { AXLookupComponent } from '@acorex/components/lookup';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { AXTreeViewNode } from '@acorex/components/tree-view';
import { DEMO_COUNTRIES } from '../lookup-sample-data';

@Component({
  templateUrl: 'multi-select-tree.component.html',
  imports: [AXLookupComponent, AXDecoratorClearButtonComponent],
})
export class MultiSelectTreeComponent {
  /** Multiple selected tree node ids. */
  value = signal<unknown | null>([]);

  /**
   * Lazy tree datasource: first call (no id) returns countries,
   * expanding a country loads its states.
   */
  treeDataSource = (id?: string): Promise<AXTreeViewNode[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!id) {
          resolve(
            DEMO_COUNTRIES.map((country) => ({
              id: country.id,
              title: country.name,
              childrenCount: country.states.length,
            }))
          );
          return;
        }

        const country = DEMO_COUNTRIES.find((c) => c.id === id);
        resolve(
          (country?.states ?? []).map((state) => ({
            id: state.id,
            title: state.name,
          }))
        );
      }, 300);
    });
  };
}
