import { AXCollapseComponent } from '@acorex/components/collapse';
import { AXImageComponent } from '@acorex/components/image';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'custom-header-template.component.html',
  imports: [AXCollapseComponent, AXImageComponent],
})
export class CustomHeaderTemplate {
  protected _options: { color: string; isAccordion: boolean; look: any } = {
    look: 'solid',
    color: 'primary',
    isAccordion: false,
  };
}
