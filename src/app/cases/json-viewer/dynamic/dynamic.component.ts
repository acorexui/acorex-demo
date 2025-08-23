import { Component, signal } from '@angular/core';
import { AXJsonViewerModule } from '@acorex/components/json-viewer';

@Component({
    standalone: true,
    selector: 'demo-json-viewer-dynamic',
    imports: [AXJsonViewerModule],
    templateUrl: 'dynamic.component.html',
})
export class DynamicJsonViewerComponent {
  state = signal({
    count: 0,
    flag: false,
    items: ['A', 'B'],
    info: { owner: 'Demo' },
  });

  increment(): void {
    this.state.update((s) => ({ ...s, count: s.count + 1 }));
  }

  toggle(): void {
    this.state.update((s) => ({ ...s, flag: !s.flag }));
  }

  addItem(): void {
    this.state.update((s) => ({ ...s, items: [...s.items, `Item ${s.items.length + 1}`] }));
  }
}


