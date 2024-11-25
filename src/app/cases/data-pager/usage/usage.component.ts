import { AXDataPagerModule } from '@acorex/components/data-pager';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { Component, signal } from '@angular/core';

@Component({
    templateUrl: './usage.component.html',
    imports: [AXDataPagerModule, AXDecoratorModule]
})
export class UsageComponent {
  protected options = signal({
    disabled: false,
    readonly: false,
    totalCount: 1000,
    pageSize: 20,
    compact: false,
  });
}
