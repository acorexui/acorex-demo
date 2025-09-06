import { AXDecoratorIconComponent } from '@acorex/components/decorators';
import { AXTabItemComponent, AXTabsComponent } from '@acorex/components/tabs';
import { Component } from '@angular/core';

@Component({
  templateUrl: './custom-template.component.html',
  imports: [AXTabsComponent, AXTabItemComponent, AXDecoratorIconComponent],
})
export class CustomTemplateComponent {}
