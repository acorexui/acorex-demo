import { AXLabelComponent } from '@acorex/components/label';
import { AXSwitchComponent } from '@acorex/components/switch';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './disabled-readonly.component.html',
  imports: [FormsModule, AXLabelComponent, AXSwitchComponent],
})
export class DisabledReadonlyComponent {}
