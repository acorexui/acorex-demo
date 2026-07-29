import { AXAccordionModule } from '@acorex/components/accordion';
import { AXImageModule } from '@acorex/components/image';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'custom-header-template.component.html',
  imports: [AXAccordionModule, AXImageModule],
})
export class CustomHeaderTemplate {
  protected _options: {  isAccordion: boolean; look: any } = {
    look: 'fill',
    isAccordion: true,
  };
}
