import { AXJsonViewerModule } from '@acorex/components/json-viewer';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import mockJson from '../mockData.json';

@Component({
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [FormsModule, AXJsonViewerModule],
})
export class UsageComponent {
  mockData = signal(mockJson);
}
