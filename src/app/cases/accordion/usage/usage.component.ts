import { Component, signal } from '@angular/core';
import { AXClickEvent } from '@acorex/cdk/common';
import {
  AXAccordionModule,
  type AXAccordionLook,
} from '@acorex/components/accordion';

type AccordionUsageOptions = {
  isAccordion: boolean;
  look: AXAccordionLook;
};

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXAccordionModule],
})
export class UsageComponent {
  protected options = signal<AccordionUsageOptions>({
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
