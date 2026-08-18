import { Component, signal } from '@angular/core';
import { AXLookupComponent } from '@acorex/components/lookup';
import { AXDecoratorClearButtonComponent } from '@acorex/components/decorators';
import { AXTreeViewNode } from '@acorex/components/tree-view';
import { DEMO_COUNTRIES } from '../lookup-sample-data';

@Component({
  templateUrl: 'drop-down-tree.component.html',
  imports: [AXLookupComponent, AXDecoratorClearButtonComponent],
})
export class DropDownTreeComponent {
  /** Single selected tree node id (country or state). */
  value = signal<unknown | null>(null);

  /** Countries with nested states as tree nodes. */
  treeNodes: AXTreeViewNode[] = DEMO_COUNTRIES.map((country) => ({
    id: country.id,
    title: country.name,
    children: country.states.map((state) => ({
      id: state.id,
      title: state.name,
    })),
  }));
}
