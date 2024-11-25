import { Component } from '@angular/core';
import { AXCollapseModule } from '@acorex/components/collapse';
import { AXImageModule } from '@acorex/components/image';

@Component({
    templateUrl: 'custom-header-template.component.html',
    imports: [AXCollapseModule, AXImageModule]
})
export class CustomHeaderTemplate {
  protected _options: { color: string; isAccordion: boolean; look: any } = {
    color: 'primary',
    isAccordion: false,
    look: 'solid',
  };
}
