import { AXButtonComponent } from '@acorex/components/button';
import { AXCheckBoxComponent } from '@acorex/components/check-box';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: 'indeterminate.component.html',
  imports: [
    FormsModule,
    AXLabelComponent,
    AXCheckBoxComponent,
    AXDecoratorGenericComponent,
    AXButtonComponent,
  ],
})
export class IndeterminateComponent {
  protected options = signal({
    value: null,
    indeterminate: true,
  });
}
