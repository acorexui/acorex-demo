import { AXCheckBoxComponent } from '@acorex/components/check-box';
import { AXLabelComponent } from '@acorex/components/label';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXCheckBoxComponent, AXLabelComponent],
})
export class UsageComponent {}
