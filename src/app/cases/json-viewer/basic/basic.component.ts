import { Component } from '@angular/core';
import { AXJsonViewerModule } from '@acorex/components/json-viewer';

@Component({
    standalone: true,
    selector: 'demo-json-viewer-basic',
    imports: [AXJsonViewerModule],
    templateUrl: './basic.component.html',
})
export class BasicJsonViewerComponent {
  data = {
    id: 1,
    name: 'Alice',
    active: true,
    score: 97.5,
  };
}


