import { Component } from '@angular/core';
import { AXCollapseClickEvent } from '@acorex/components/collapse';
import { AXAccordionModule } from '@acorex/components/accordion';
import { AXClickEvent } from '@acorex/cdk/common';

@Component({
  templateUrl: 'loading.component.html',
  imports: [AXAccordionModule],
})
export class LoadingComponent {
  protected _options: { color: string; isAccordion: boolean; look: any } = {
    color: 'primary',
    isAccordion: false,
    look: 'solid',
  };

  handleClick(e: AXClickEvent) {
    if (e.component.isCollapsed()) {
      e.component.isLoading.set(true);
      setTimeout(() => {
        e.component.toggle();
        e.component.isLoading.set(false);
      }, 1000);
    } else {
      e.component.toggle();
    }
  }
}
