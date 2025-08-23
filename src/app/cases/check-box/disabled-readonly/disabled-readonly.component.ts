import { AXCheckBoxComponent } from '@acorex/components/check-box';
import { AXLabelComponent } from '@acorex/components/label';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'disabled-readonly.component.html',
  imports: [AXCheckBoxComponent, AXLabelComponent],
})
export class DisabledReadonlyComponent {
  protected disabled = signal(true);
  protected readonly = signal(true);
}
