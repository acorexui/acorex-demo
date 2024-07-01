import { Component } from '@angular/core';
import {
  AXCollapseClickEvent,
  AXCollapseModule,
} from '@acorex/components/collapse';

@Component({
  standalone: true,
  templateUrl: 'loading.component.html',
  imports: [AXCollapseModule],
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
