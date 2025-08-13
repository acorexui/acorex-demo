import {
  AXCollapseClickEvent,
  AXCollapseComponent,
  AXCollapseGroupComponent,
} from '@acorex/components/collapse';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'loading.component.html',
  imports: [AXCollapseGroupComponent, AXCollapseComponent],
})
export class LoadingComponent {
  protected _options: { color: string; isAccordion: boolean; look: any } = {
    color: 'primary',
    isAccordion: false,
    look: 'solid',
  };
  _handleCollapseClick(e: AXCollapseClickEvent) {
    if (e.component.isCollapsed) {
      e.handled = true;
      e.component.isLoading = true;
      setTimeout(() => {
        e.component.toggle();
        e.component.isLoading = false;
      }, 1000);
    }
  }
}
