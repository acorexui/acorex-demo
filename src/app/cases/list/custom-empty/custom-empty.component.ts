import { AXDataSource } from '@acorex/cdk/common';
import { AXListComponent } from '@acorex/components/list';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'custom-empty.component.html',
  imports: [AXListComponent],
  styles: `ax-list{--ax-comp-list-empty-container-height:100%;}`,
})
export class CustomEmptyComponent {
  // Empty data source to demonstrate empty state
  protected dataSource = new AXDataSource<unknown>({
    pageSize: 5,
    load: (e) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Return empty array to show empty state
          resolve({
            items: [],
            total: 0,
          });
        }, 300);
      });
    },
    byKey: (key) => {
      return Promise.resolve(null);
    },
  });
}
