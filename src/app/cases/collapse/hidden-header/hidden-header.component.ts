import { AXButtonComponent } from '@acorex/components/button';
import { AXCollapseComponent } from '@acorex/components/collapse';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'hidden-header.component.html',
  imports: [AXCollapseComponent, AXButtonComponent],
})
export class HiddenHeaderComponent {
  showHeader = false;
}
