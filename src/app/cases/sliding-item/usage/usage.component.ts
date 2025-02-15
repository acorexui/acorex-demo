import { Component } from '@angular/core';
import { AXClickEvent } from '@acorex/components/common';
import { AXSlidingItemModule } from '@acorex/components/sliding-item';
import { AXDecoratorModule } from '@acorex/components/decorators';

@Component({
  templateUrl: './usage.component.html',
  imports: [AXSlidingItemModule, AXDecoratorModule],
})
export class UsageComponent {
  clickHandler(e: AXClickEvent) {
    console.log(e.component.text());
  }
}
