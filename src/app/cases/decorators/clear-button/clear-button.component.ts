import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXSearchBoxModule } from '@acorex/components/search-box';
import { Component } from '@angular/core';

@Component({
  templateUrl: './clear-button.component.html',
  imports: [AXDecoratorModule, AXSearchBoxModule],
})
export class ClearButtonComponent {}
