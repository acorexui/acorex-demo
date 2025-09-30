import { AXPanViewDirective } from '@acorex/cdk/pan-view';
import { Component } from '@angular/core';

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [AXPanViewDirective],
  templateUrl: './usage.component.html',
})
export class UsageComponent {}