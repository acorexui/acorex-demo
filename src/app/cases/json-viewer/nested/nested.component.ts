import { Component } from '@angular/core';
import { AXJsonViewerModule } from '@acorex/components/json-viewer';

@Component({
    standalone: true,
    selector: 'demo-json-viewer-nested',
    imports: [AXJsonViewerModule],
    templateUrl: './nested.component.html',
})
export class NestedJsonViewerComponent {
  nestedData = {
    user: {
      id: 42,
      profile: {
        name: 'Eve',
        createdAt: new Date('2024-01-01T00:00:00Z'),
      },
    },
    tags: ['alpha', 'beta', 'gamma'],
    metrics: {
      visits: 3,
      scores: [10, 20, 30],
    },
  };
}


