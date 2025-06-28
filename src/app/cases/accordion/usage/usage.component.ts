import { Component, signal } from '@angular/core';
import { AXClickEvent } from '@acorex/cdk/common';
import { AXAccordionModule } from '@acorex/components/accordion';
@Component({
  templateUrl: 'usage.component.html',
  imports: [AXAccordionModule],
})
export class UsageComponent {
  protected options = signal({
    isAccordion: true,
    look: 'solid',
  });

  handleClick(e: AXClickEvent) {
    console.log('click');
  }

  handleActiveIndexChange(index: number | number[]) {
    console.log(index);
  }

  handleIsCollapsedChange(isCollapsed: boolean) {
    console.log(isCollapsed);
  }
}
