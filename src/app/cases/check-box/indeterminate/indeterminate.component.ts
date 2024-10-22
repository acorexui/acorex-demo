import { Component, signal } from '@angular/core';
import { AXCheckBoxModule } from '@acorex/components/check-box';
import { AXDecoratorModule } from '@acorex/components/decorators';
import { AXLabelModule } from '@acorex/components/label';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: 'indeterminate.component.html',
  imports: [AXDecoratorModule, AXCheckBoxModule, AXLabelModule, FormsModule],
})
export class IndeterminateComponent {
  protected options = signal({
    value: null,
    indeterminate: true,
  });
}
