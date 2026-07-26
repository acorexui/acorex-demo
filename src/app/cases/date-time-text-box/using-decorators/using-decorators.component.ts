import { AXButtonModule } from '@acorex/components/button';
import { AXDateTimeTextBoxModule } from '@acorex/components/datetime-text-box';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXFormModule } from '@acorex/components/form';
import { AXLabelModule } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'using-decorators.component.html',
  imports: [
    AXDateTimeTextBoxModule,
    AXDecoratorModule,
    AXFormModule,
    AXLabelModule,
    AXButtonModule,
  ],
})
export class UsingDecoratorsComponent {}
