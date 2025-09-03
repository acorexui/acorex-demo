import { Component, ViewEncapsulation } from '@angular/core';
import { AXFocusTrapDirective } from '@acorex/cdk/focus-trap';
import { AXButtonComponent } from '@acorex/components/button';
import { AXTextBoxComponent } from '@acorex/components/text-box';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXFocusTrapDirective, AXButtonComponent, AXTextBoxComponent],
  encapsulation: ViewEncapsulation.None,
})
export class UsageComponent {}
