import { AXButtonModule } from '@acorex/components/button';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXTextBoxModule } from '@acorex/components/text-box';
import { AXToolBarModule } from '@acorex/components/toolbar';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXToolBarModule,
    AXDecoratorModule,
    AXButtonModule,
    AXTextBoxModule,
  ],
})
export class UsageComponent {}
