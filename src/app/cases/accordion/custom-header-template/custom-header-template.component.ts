import { AXAccordionModule } from '@acorex/components/accordion';
import { AXImageModule } from '@acorex/components/image';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'custom-header-template.component.html',
  imports: [AXAccordionModule, AXImageModule],
})
export class CustomHeaderTemplate {
  protected _options: { color: string; isAccordion: boolean; look: any } = {
    look: 'solid',
    color: 'primary',
    isAccordion: false,
  };
}
