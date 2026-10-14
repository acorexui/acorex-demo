import { AXAccordionModule } from '@acorex/components/accordion';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'custom-header-template.component.html',
  imports: [AXAccordionModule],
})
export class CustomHeaderTemplate {
  protected googleCollapsed = signal(true);
  protected microsoftCollapsed = signal(true);
  protected appleCollapsed = signal(true);
}
